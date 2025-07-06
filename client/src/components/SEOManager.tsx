import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// SEO translations for all supported languages
const seoTranslations = {
  ko: {
    title: '바이킹(룬) 문자 변환기 | 무료 한글 이름 변환 | 룬 문자 생성기',
    description: '한글 이름을 바이킹 룬 문자(엘더 푸타르크)로 무료 변환해 드립니다. 무료 룬 문자 생성기로 당신의 이름을 고대 북유럽 문자로 변환하고, 각 룬의 의미와 상징을 확인하세요. 바이킹 이름 생성기, 북유럽 룬 알파벳 번역기.',
    ogTitle: '바이킹(룬) 문자 변환기 | 무료 한글 이름 변환 | 룬 문자 생성기',
    ogDescription: '무료 룬 문자 생성기로 당신의 한국어 이름을 고대 바이킹 룬 문자로 변환해보세요. 각 룬 문자의 의미와 상징을 알아보고 이미지로 저장할 수 있습니다. 바이킹 이름 생성기, 북유럽 룬 문자 번역기.',
    keywords: '바이킹 룬, 룬 문자, 엘더 푸타르크, 한글 이름 변환, 북유럽 문자, 룬 변환기, 고대 문자, 바이킹 이름 생성기, 룬 문자 생성기, 바이킹 이름 변환기, 룬 글자, 룬 알파벳, 무료 룬 변환, 이름 의미, 룬 의미, 북유럽 신화, 바이킹 문화, 고대 문자 번역기, 고대 문자 생성기, 한국어 이름 번역기, Viking Rune, Elder Futhark, Korean Name, Rune Converter, Rune Generator, Free Rune Converter, Norse Runes, Viking Alphabet'
  },
  en: {
    title: 'Viking Rune Converter & Generator | Transform Your Name into Ancient Norse Runes',
    description: 'Free Viking Rune Generator & Converter. Transform your name into authentic Elder Futhark runes. Learn the meaning behind each rune symbol and save your results.',
    ogTitle: 'Viking Rune Converter & Generator | Free Name to Runes Tool',
    ogDescription: 'Free Viking Rune Generator: Convert your name into authentic Norse Elder Futhark runes. Discover the meaning of each rune and save your results as an image.',
    keywords: 'Viking runes, rune converter, Elder Futhark, name generator, Norse symbols, ancient script, runic alphabet, name translation, Viking name generator, rune maker, free rune converter, rune symbols, Viking alphabet'
  },
  ja: {
    title: 'バイキング(ルーン)文字変換ツール・生成器 | 名前を古代北欧文字に変換',
    description: '無料のルーン文字生成ツールで名前をバイキングのルーン文字（エルダー・フサルク）に変換。各ルーン文字の意味やシンボルを詳しく解説し、結果を画像として保存できます。',
    ogTitle: 'バイキング(ルーン)文字変換ツール・生成器 | 名前を古代北欧文字に',
    ogDescription: '無料のルーン文字生成ツールであなたの名前を古代バイキングのルーン文字に変換してみましょう。各ルーン文字の意味とシンボルを知り、画像として保存できます。',
    keywords: 'バイキング ルーン, ルーン文字, エルダー・フサルク, 名前変換, 北欧文字, ルーン変換, 古代文字, ルーン文字生成, バイキング名前生成, 無料ルーン変換, Viking Rune, Elder Futhark'
  },
  zh: {
    title: '维京(符文)转换器与生成器 | 将您的名字转换为古北欧符文',
    description: '免费维京符文生成工具，将您的名字转换为古老的维京老福萨克符文。了解每个符文的含义和象征，并将结果保存为图像。',
    ogTitle: '维京(符文)转换器与生成器 | 将名字转换为北欧符文',
    ogDescription: '免费维京符文生成器：将您的名字转换为古老的维京符文。了解每个符文的含义和象征，并将结果保存为图像。',
    keywords: '维京符文, 符文转换器, 老福萨克, 名字转换, 北欧符号, 古代文字, 符文字母, 名字翻译, 维京名字生成器, 符文生成器, 免费符文转换器, 符文符号, 维京字母'
  },
  es: {
    title: 'Conversor y Generador de Runas Vikingas | Transforma tu Nombre en Runas Nórdicas',
    description: 'Generador y conversor gratuito de runas vikingas. Transforma tu nombre en auténticas runas Elder Futhark. Aprende el significado de cada símbolo rúnico y guarda tus resultados.',
    ogTitle: 'Conversor y Generador de Runas Vikingas | Herramienta Gratuita',
    ogDescription: 'Generador gratuito de runas vikingas: Convierte tu nombre en auténticas runas nórdicas Elder Futhark. Descubre el significado de cada runa y guarda tus resultados como imagen.',
    keywords: 'Runas vikingas, conversor de runas, Elder Futhark, generador de nombres, símbolos nórdicos, escritura antigua, alfabeto rúnico, traducción de nombres, generador de nombres vikingos, creador de runas, conversor de runas gratis, símbolos rúnicos, alfabeto vikingo'
  },
  fr: {
    title: 'Convertisseur et Générateur de Runes Vikings | Transformez Votre Nom en Runes Nordiques',
    description: 'Générateur et convertisseur gratuit de runes vikings. Transformez votre nom en authentiques runes Elder Futhark. Découvrez la signification de chaque symbole runique et enregistrez vos résultats.',
    ogTitle: 'Convertisseur et Générateur de Runes Vikings | Outil Gratuit',
    ogDescription: 'Générateur gratuit de runes vikings : Convertissez votre nom en authentiques runes nordiques Elder Futhark. Découvrez la signification de chaque rune et enregistrez vos résultats sous forme d\'image.',
    keywords: 'Runes vikings, convertisseur de runes, Elder Futhark, générateur de noms, symboles nordiques, écriture ancienne, alphabet runique, traduction de noms, générateur de noms vikings, créateur de runes, convertisseur de runes gratuit, symboles runiques, alphabet viking'
  }
};

export default function SEOManager() {
  const { language } = useLanguage();
  
  useEffect(() => {
    // Default to English if the language is not supported in our SEO translations
    const seo = seoTranslations[language] || seoTranslations.en;
    
    // Update the document title
    document.title = seo.title;
    
    // Update meta tags
    updateMetaTag('description', seo.description);
    updateMetaTag('keywords', seo.keywords);
    
    // Update Open Graph meta tags
    updateMetaTag('og:title', seo.ogTitle, 'property');
    updateMetaTag('og:description', seo.ogDescription, 'property');
    
    // Update Twitter card meta tags
    updateMetaTag('twitter:title', seo.ogTitle);
    updateMetaTag('twitter:description', seo.ogDescription);
    
    // Update html lang attribute
    document.documentElement.lang = language;
  }, [language]);
  
  // Helper function to update meta tags
  function updateMetaTag(name: string, content: string, attributeName: string = 'name') {
    let metaTag = document.querySelector(`meta[${attributeName}="${name}"]`);
    
    if (metaTag) {
      metaTag.setAttribute('content', content);
    } else {
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attributeName, name);
      metaTag.setAttribute('content', content);
      document.head.appendChild(metaTag);
    }
  }
  
  // This component doesn't render anything visually
  return null;
}
