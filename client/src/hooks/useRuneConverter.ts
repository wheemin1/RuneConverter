import { useState, useCallback } from 'react';
import { romanizeKorean, commonNameMappings } from '@/lib/koreanRomanizer';
import { convertToRunes } from '@/lib/runeConverter';
import { getRuneDetails, RuneDetail } from '@/lib/runeDatabase';

export function useRuneConverter() {
  const [koreanName, setKoreanName] = useState('');
  const [englishName, setEnglishName] = useState('');
  const [runeText, setRuneText] = useState('');
  const [runeDetails, setRuneDetails] = useState<RuneDetail[]>([]);
  const [isConverted, setIsConverted] = useState(false);

  const handleKoreanNameChange = useCallback((name: string) => {
    setKoreanName(name);
    
    // Auto-convert to English
    if (name.trim()) {
      // Check for common name mappings first
      const commonMapping = commonNameMappings[name.trim()];
      if (commonMapping) {
        setEnglishName(commonMapping);
      } else {
        const romanized = romanizeKorean(name);
        setEnglishName(romanized);
      }
    } else {
      setEnglishName('');
    }
    
    // Reset conversion state
    setIsConverted(false);
    setRuneText('');
    setRuneDetails([]);
  }, []);

  const handleEnglishNameChange = useCallback((name: string) => {
    setEnglishName(name);
    
    // Reset conversion state when editing English name
    setIsConverted(false);
    setRuneText('');
    setRuneDetails([]);
  }, []);

  const convertToRunesHandler = useCallback(() => {
    if (!englishName.trim()) return;

    const converted = convertToRunes(englishName);
    const details = getRuneDetails(converted);
    
    setRuneText(converted);
    setRuneDetails(details);
    setIsConverted(true);
  }, [englishName]);

  return {
    koreanName,
    englishName,
    runeText,
    runeDetails,
    isConverted,
    setKoreanName: handleKoreanNameChange,
    setEnglishName: handleEnglishNameChange,
    convertToRunes: convertToRunesHandler
  };
}
