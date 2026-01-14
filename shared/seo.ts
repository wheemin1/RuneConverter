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
  // ⚡ [업그레이드] 영어: 타투, 디자인, 정확도, 무료 강조 (CTR 상승 전략)
  en: {
    title: 'Free Rune Name Converter for Tattoo & Design (Elder Futhark)',
    desc: "Don't get a wrong tattoo. Translate your name to Viking Runes accurately with this free online tool. Download high-quality images for your design.",
    keywords:
      'Rune Converter, Viking Runes, Elder Futhark, Tattoo Design, Name to Runes, Ancient Scripts, Viking Name, Free Rune Translator, Nordic Runes',
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
  // ⚡ [업그레이드] 프랑스어: 유입 키워드(convertisseur rune viking) 전면 배치
  fr: {
    title: 'Convertisseur de Runes Viking - Traduction de Prénom (Gratuit)',
    desc: "Traduisez votre nom en runes vikings (Futhark ancien). Idéal pour les tatouages et le design. Téléchargement d'image gratuit.",
    keywords:
      'convertisseur rune viking, convertisseur de runes, runes, vikings, Elder Futhark, traduction prénom, tatouage viking, écritures anciennes',
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
