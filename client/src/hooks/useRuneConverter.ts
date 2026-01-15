import { useEffect, useRef, useState, useCallback } from 'react';
import type { Language } from '@/lib/i18n';
import { romanizeKorean, commonNameMappings } from '@/lib/koreanRomanizer';
import { convertToRunes } from '@/lib/runeConverter';
import { romanizeNameByLanguage } from '@/lib/nameRomanizer';

export function useRuneConverter(language: Language) {
  const [koreanName, setKoreanName] = useState('');
  const [englishName, setEnglishName] = useState('');
  const [runeText, setRuneText] = useState('');
  const [isConverted, setIsConverted] = useState(false);
  const [isRomanizedManuallyEdited, setIsRomanizedManuallyEdited] = useState(false);

  const latestAutoRequestId = useRef(0);
  const latestNativeName = useRef('');

  const isSourceScriptMode =
    language === 'ko' ||
    language === 'zh' ||
    language === 'ja' ||
    language === 'es' ||
    language === 'fr';

  useEffect(() => {
    // Switching languages should re-enable auto-fill behavior.
    setIsRomanizedManuallyEdited(false);
  }, [language]);

  const handleKoreanNameChange = useCallback((name: string) => {
    setKoreanName(name);
    
    const trimmed = name.trim();
    latestNativeName.current = trimmed;

    // Auto-fill romanized value until the user manually edits it.
    if (!trimmed) {
      setEnglishName('');
      setIsRomanizedManuallyEdited(false);
    } else if (isSourceScriptMode && !isRomanizedManuallyEdited) {
      if (language === 'ko') {
        // Check for common name mappings first
        const commonMapping = commonNameMappings[trimmed];
        if (commonMapping) {
          setEnglishName(commonMapping);
        } else {
          const romanized = romanizeKorean(name);
          setEnglishName(romanized);
        }
      } else if (language === 'zh' || language === 'ja' || language === 'es' || language === 'fr') {
        const autoRomanized = romanizeNameByLanguage(name, language);
        setEnglishName(autoRomanized);

        // Japanese kanji names may not be romanizable with `wanakana`.
        // If we got an empty result, ask the server to convert kanji -> romaji.
        if (language === 'ja' && !autoRomanized) {
          const requestId = ++latestAutoRequestId.current;

          fetch('/api/romanize/japanese', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: trimmed }),
          })
            .then(async (res) => {
              if (!res.ok) throw new Error(`HTTP ${res.status}`);
              return (await res.json()) as { romaji?: string };
            })
            .then((data) => {
              if (latestAutoRequestId.current !== requestId) return;
              if (isRomanizedManuallyEdited) return;
              if (!isSourceScriptMode) return;
              if (language !== 'ja') return;
              if (latestNativeName.current !== trimmed) return;

              const serverRomaji = String(data.romaji ?? '').trim();
              if (!serverRomaji) return;

              // Reuse existing normalization rules for rune mapping.
              setEnglishName(romanizeNameByLanguage(serverRomaji, 'en'));
            })
            .catch(() => {
              // Best-effort; fall back to manual editing.
            });
        }
      }
    }
    
    // Reset conversion state
    setIsConverted(false);
    setRuneText('');
  }, [isRomanizedManuallyEdited, isSourceScriptMode, language]);

  const handleEnglishNameChange = useCallback((name: string) => {
    setEnglishName(name);

    if (isSourceScriptMode) {
      // If user clears the romanized field, resume auto-fill.
      setIsRomanizedManuallyEdited(Boolean(name.trim()));
    }
    
    // Reset conversion state when editing English name
    setIsConverted(false);
    setRuneText('');
  }, [isSourceScriptMode]);

  const convertToRunesHandler = useCallback(() => {
    if (!englishName.trim()) return;

    const converted = convertToRunes(englishName);
    
    setRuneText(converted);
    setIsConverted(true);
  }, [englishName]);

  return {
    koreanName,
    englishName,
    runeText,
    isConverted,
    setKoreanName: handleKoreanNameChange,
    setEnglishName: handleEnglishNameChange,
    convertToRunes: convertToRunesHandler
  };
}
