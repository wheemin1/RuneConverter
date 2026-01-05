export type SupportedSeoLang = 'ko' | 'en';

export const DEFAULT_LANG: SupportedSeoLang = 'en';

export const SEO_DATA: Record<SupportedSeoLang, {
  title: string;
  desc: string;
  keywords: string;
  ogTitle: string;
  ogDesc: string;
  siteName: string;
}> = {
  ko: {
    title: '내 이름을 고대 룬 문자로 - 룬 문자 변환기',
    desc: '당신의 이름에 숨겨진 고대 바이킹의 힘을 확인해보세요. 무료 룬 문자 이름 변환 및 이집트 상형문자 번역.',
    keywords: '룬 문자, 룬 문자 해석, 이름 변환, 이집트 상형문자, 바이킹, 타로, 운세, 고대 문자',
    ogTitle: '내 이름을 룬 문자로 확인하기',
    ogDesc: '고대 바이킹의 신비로운 힘이 담긴 당신의 이름을 확인하세요.',
    siteName: 'Ancient Runes',
  },
  en: {
    title: 'Rune Name Converter - Translate Name to Runes',
    desc: 'Discover the ancient Viking power hidden in your name. Free Elder Futhark rune converter and Egyptian Hieroglyph translator.',
    keywords:
      'Rune Converter, Viking Runes, Elder Futhark, Hieroglyph Generator, Name to Runes, Ancient Scripts, Viking Name',
    ogTitle: 'Reveal Your Viking Name in Runes',
    ogDesc: 'See what your name looks like in ancient mystical Rune symbols.',
    siteName: 'Ancient Runes Global',
  },
};

function normalizeSeoLang(lang: string): SupportedSeoLang {
  const clean = (lang || '').toLowerCase().split('-')[0];
  return clean === 'ko' ? 'ko' : 'en';
}

/**
 * Returns SEO data for a given app language.
 * Rule: ko -> Korean, everything else -> global English.
 */
export function getSeoData(lang: string) {
  const normalized = normalizeSeoLang(lang);
  return SEO_DATA[normalized] ?? SEO_DATA[DEFAULT_LANG];
}

export function getSeoLocale(lang: string): string {
  return normalizeSeoLang(lang) === 'ko' ? 'ko_KR' : 'en_US';
}
