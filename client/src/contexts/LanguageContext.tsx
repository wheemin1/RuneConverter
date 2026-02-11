import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, getTranslation } from '@/lib/i18n';

const SUPPORTED_LANGUAGES: Language[] = ['ko', 'en', 'ja', 'zh', 'zh-TW', 'es', 'fr', 'de', 'pt-BR'];

function getBrowserLanguage(): Language {
  if (typeof navigator === 'undefined') return 'ko';

  const lang = (navigator.language || '').toLowerCase();
  if (lang.includes('ko')) return 'ko';
  if (lang.startsWith('ja')) return 'ja';
  // Traditional Chinese: Taiwan, Hong Kong, or Hant script tag
  if (lang === 'zh-tw' || lang === 'zh-hk' || lang.includes('hant')) return 'zh-TW';
  // Simplified Chinese: Everything else starting with zh
  if (lang.startsWith('zh')) return 'zh';
  // Portuguese: Brazilian Portuguese
  if (lang === 'pt-br' || lang.startsWith('pt-br')) return 'pt-BR';
  if (lang.startsWith('es')) return 'es';
  if (lang.startsWith('fr')) return 'fr';
  if (lang.startsWith('de')) return 'de';
  return 'en';
}

function isSupportedLanguage(value: string): value is Language {
  return (SUPPORTED_LANGUAGES as string[]).includes(value);
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    // Get saved language from localStorage; otherwise fall back to browser language
    if (typeof window === 'undefined') return 'ko';

    // Shared links can force language via query param (e.g., /?lang=en)
    try {
      const urlLang = new URLSearchParams(window.location.search).get('lang');
      if (urlLang && isSupportedLanguage(urlLang)) return urlLang;
    } catch {
      // ignore
    }

    const saved = window.localStorage.getItem('rune-converter-language');
    if (saved && isSupportedLanguage(saved)) return saved;

    return getBrowserLanguage();
  });

  useEffect(() => {
    // Save language preference to localStorage
    window.localStorage.setItem('rune-converter-language', language);
    
    // Set document language attribute
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return getTranslation(language, key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}