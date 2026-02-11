export type SupportedSeoLang = 'ko' | 'en' | 'ja' | 'zh' | 'zh-TW' | 'es' | 'fr' | 'de' | 'pt-BR';

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
    title: '룬문자 번역기 & 변환기 - 룬어 번역, 이름을 룬 문자로 무료 변환',
    desc: '룬문자 번역기로 이름을 고대 바이킹 룬 문자로 정확하게 변환하세요. 룬어 번역, 룬문자 변환, 룬 문자 번역을 무료로 제공! 엘더 푸사르크 표기법 기반의 정확한 뜻 풀이까지 확인하세요.',
    keywords: '룬문자 번역기, 룬 문자 변환기, 룬어 번역기, 룬어 번역, 룬문자 변환, 룬 문자 번역, 엘더 푸사르크',
    ogTitle: '룬문자 번역기 & 변환기 - 룬어 번역, 이름을 룬 문자로 무료 변환',
    ogDesc: '룬문자 번역기로 이름을 고대 바이킹 룬 문자로 정확하게 변환하세요. 룬어 번역, 룬문자 변환을 무료로 제공합니다.',
    siteName: 'Ancient Runes',
  },
  // ⚡ [업그레이드] 영어: rune translator (192노출) + norse/nordic/runic 변형 포착 전략
  en: {
    title: 'Viking Rune Translator - Elder Futhark, Norse & Runic Alphabet Converter',
    desc: 'Translate names into Viking runes instantly. Accurate Elder Futhark translator, Norse rune generator, and runic alphabet converter. Free phonetic rune translation for Nordic runes.',
    keywords:
      'rune translator, viking rune translator, elder futhark translator, norse rune translator, runic translator, rune converter, runic alphabet translator, nordic rune translator, rune generator, norse rune generator',
    ogTitle: 'Viking Rune Translator - Elder Futhark, Norse & Runic Alphabet Converter',
    ogDesc: 'Translate names into Viking runes instantly. Accurate Elder Futhark translator, Norse rune generator, and runic alphabet converter for Nordic runes.',
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
  'zh-TW': {
    title: '盧恩文字轉換器 - 免費名字翻譯（Elder Futhark）',
    desc: '將你的名字轉換成古代維京盧恩符文。正確的音標轉換，免費使用。探索你名字中隱藏的神秘力量。',
    keywords: '盧恩文字轉換器, 符文轉換, 維京符文, Elder Futhark, 古代文字, 名字翻譯',
    ogTitle: '盧恩文字轉換器 - 免費名字翻譯',
    ogDesc: '將你的名字轉換成古代維京盧恩符文。正確的音標轉換，免費使用。',
    siteName: 'Ancient Runes Taiwan',
  },
  es: {
    title: 'Convertidor de Runas - Traduce tu nombre a runas',
    desc: 'Descubre el poder vikingo oculto en tu nombre. Convertidor gratuito a runas Elder Futhark.',
    keywords: 'Runas, Vikingo, Elder Futhark, Convertir nombre a runas, Letras antiguas, Traductor de runas',
    ogTitle: 'Descubre tu nombre vikingo en runas',
    ogDesc: 'Mira cómo se ve tu nombre en antiguos símbolos rúnicos.',
    siteName: 'Ancient Runes Español',
  },
  // ⚡ [업그레이드] 프랑스어: CTR 최적화 (0.78% → 2.5%+ 목표, 257회 노출 키워드)
  fr: {
    title: 'Convertisseur Rune Viking ⚡ Gratuit & Instantané (Elder Futhark)',
    desc: 'Transformez votre nom en runes vikings authentiques en 1 clic. Alphabet Elder Futhark historiquement exact. Sans inscription, 100% gratuit. Essayez !',
    keywords: 'convertisseur rune viking, traduction rune prénom, alphabet elder futhark, écriture viking, traducteur rune',
    ogTitle: 'Convertisseur Rune Viking ⚡ Gratuit & Instantané (Elder Futhark)',
    ogDesc: 'Transformez votre nom en runes vikings authentiques en 1 clic. Alphabet Elder Futhark historiquement exact. Sans inscription, 100% gratuit.',
    siteName: 'Ancient Runes Français',
  },
  // ⚡ [업그레이드] 독일어: 유입 키워드(runen converter) 전면 배치
  de: {
    title: 'Runen Converter & Übersetzer - Namen in Wikinger Runen (Elder Futhark)',
    desc: 'Kostenloser Runen Converter: Übersetzen Sie Ihren Namen in Elder Futhark Wikinger Runen. Historisch genau, mit Bedeutung. Runen Generator & Übersetzer in einem.',
    keywords: 'runen converter, runen übersetzer, runen konverter, wikinger runen, futhark übersetzer, elder futhark, runen übersetzung, nordische runen',
    ogTitle: 'Runen Converter & Übersetzer - Namen in Wikinger Runen (Elder Futhark)',
    ogDesc: 'Kostenloser Runen Converter: Übersetzen Sie Ihren Namen in Elder Futhark Wikinger Runen. Historisch genau, mit Bedeutung.',
    siteName: 'Ancient Runes Deutsch',
  },
  // ⚡ [업그레이드] 브라질 포르투갈어: Position #3 'runas nordicas tradutor' 키워드 타겟
  'pt-BR': {
    title: 'Tradutor de Runas Vikings - Conversor Futhark Grátis',
    desc: 'Traduza seu nome para runas vikings autênticas. Conversor Elder Futhark gratuito com significado histórico. Alfabeto rúnico nórdico.',
    keywords: 'tradutor de runas vikings, conversor de runas, runas nordicas tradutor, gerador de runas, elder futhark, alfabeto runico, runas vikings significado, tradutor de runas gratis',
    ogTitle: 'Tradutor de Runas Vikings - Conversor Futhark Grátis',
    ogDesc: 'Traduza seu nome para runas vikings autênticas com nosso conversor Elder Futhark gratuito.',
    siteName: 'Ancient Runes Brasil',
  },
};

export function getSeoLang(lang: string): SupportedSeoLang {
  const normalized = (lang || '').toLowerCase();
  // Handle hyphenated language codes before splitting
  if (normalized === 'zh-tw') return 'zh-TW';
  if (normalized === 'pt-br') return 'pt-BR';
  const clean = normalized.split('-')[0] as SupportedSeoLang;
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
    case 'zh-TW':
      return 'zh_TW';
    case 'es':
      return 'es_ES';
    case 'fr':
      return 'fr_FR';
    case 'de':
      return 'de_DE';
    case 'pt-BR':
      return 'pt_BR';
    case 'en':
    default:
      return 'en_US';
  }
}
