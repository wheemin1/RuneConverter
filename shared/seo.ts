export type SupportedSeoLang = 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'fr';

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
    keywords:
      '룬 번역기, 룬문자 번역기, 룬어 번역기, 룬어 번역, 룬문자 변환 사이트, 룬 문자, 룬 문자 해석, 이름 변환, 바이킹, 고대 문자',
    ogTitle: '내 이름을 룬 문자로 확인하기',
    ogDesc: '고대 바이킹의 신비로운 힘이 담긴 당신의 이름을 확인하세요.',
    siteName: 'Ancient Runes',
  },
  en: {
    title: 'Rune Name Converter - Translate Name to Runes',
    desc: 'Free online rune converter to translate your name into Viking runes (Elder Futhark). Generate and share your rune name in seconds.',
    keywords:
      'Rune Converter, Runes Converter, Viking Rune Converter, Rune Convertor, Viking Runes, Elder Futhark, Rune Translator, Name to Runes, Ancient Scripts, Viking Name',
    ogTitle: 'Reveal Your Viking Name in Runes',
    ogDesc: 'See what your name looks like in ancient mystical Rune symbols.',
    siteName: 'Ancient Runes Global',
  },
  ja: {
    title: 'ルーン文字変換 - あなたの名前を古代北欧文字に',
    desc: 'あなたの名前に隠された古代バイキングの力を解き明かしましょう。無料のルーン文字変換ツール。',
    keywords: 'ルーン文字, 名前変換, バイキング, 古代文字, ルーン占い, エルダー・フサルク',
    ogTitle: 'あなたの名前をルーン文字で確認する',
    ogDesc: '古代の神秘的なルーン文字で、あなたの名前を確かめてみましょう。',
    siteName: 'Ancient Runes Japan',
  },
  zh: {
    title: '卢恩符文转换器 - 将名字转换成古代符文',
    desc: '发现你名字中隐藏的古代维京力量。免费将名字转换为埃尔德·弗萨克（Elder Futhark）符文。',
    keywords: '符文, 卢恩符文, 维京, 名字转换, Elder Futhark, 古代文字',
    ogTitle: '查看你的名字对应的卢恩符文',
    ogDesc: '看看你的名字在古老神秘的符文中是什么样子。',
    siteName: 'Ancient Runes Chinese',
  },
  es: {
    title: 'Convertidor de Runas - Traduce tu nombre a runas',
    desc: 'Descubre el poder vikingo oculto en tu nombre. Convertidor gratuito a runas Elder Futhark.',
    keywords: 'Runas, Vikingo, Elder Futhark, Convertir nombre a runas, Letras antiguas, Traductor de runas',
    ogTitle: 'Descubre tu nombre vikingo en runas',
    ogDesc: 'Mira cómo se ve tu nombre en antiguos símbolos rúnicos.',
    siteName: 'Ancient Runes Español',
  },
  fr: {
    title: 'Convertisseur de Runes - Traduis ton nom en runes',
    desc: 'Convertisseur rune viking gratuit : transforme ton nom en runes (Elder Futhark) et partage le résultat en un clic.',
    keywords:
      'convertisseur rune viking, convertisseur de runes, runes, vikings, Elder Futhark, traduire un nom en runes, écritures anciennes, traducteur de runes',
    ogTitle: 'Découvre ton nom viking en runes',
    ogDesc: 'Vois à quoi ressemble ton nom en anciens symboles runiques.',
    siteName: 'Ancient Runes Français',
  },
};

export function getSeoLang(lang: string): SupportedSeoLang {
  const clean = (lang || '').toLowerCase().split('-')[0] as SupportedSeoLang;
  return Object.prototype.hasOwnProperty.call(SEO_DATA, clean) ? clean : DEFAULT_LANG;
}

/**
 * Returns SEO data for a given app language.
 */
export function getSeoData(lang: string) {
  const normalized = getSeoLang(lang);
  return SEO_DATA[normalized];
}

export function getSeoLocale(lang: string): string {
  switch (getSeoLang(lang)) {
    case 'ko':
      return 'ko_KR';
    case 'ja':
      return 'ja_JP';
    case 'zh':
      return 'zh_CN';
    case 'es':
      return 'es_ES';
    case 'fr':
      return 'fr_FR';
    case 'en':
    default:
      return 'en_US';
  }
}
