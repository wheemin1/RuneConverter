export type Language = 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'fr';

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
}

export const languages: LanguageOption[] = [
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
];

export const translations = {
  ko: {
    // Header
    title: '바이킹 룬 문자 변환기',
    subtitle: '실제로 사용했던 북유럽 고대 노르드의 엘더 푸타르크 룬 문자로 당신의 이름을 변환해보세요',
    
    // Features
    feature1Title: '정확한 룬 변환',
    feature1Desc: '한국어→영어→룬 문자 3단계 정밀 변환',
    feature2Title: '룬 의미 해석',
    feature2Desc: '각 룬 문자의 상세한 상징과 의미 분석',
    feature3Title: '간편한 공유',
    feature3Desc: '이미지 저장 & 소셜미디어 공유',
    
    // Input
    inputTitle: '이름 입력',
    inputSubtitle: '당신의 이름을 고대 바이킹 룬 문자로 변환해보세요',
    koreanName: '한국어 이름',
    englishName: '영문 이름 (수정 가능)',
    koreanPlaceholder: '예: 조휘민, 김민수, 박지연...',
    englishPlaceholder: '예: jowheemin, kimminsu, parkjiyeon...',
    convertButton: '룬 문자로 변환하기',
    convertingButton: '신비로운 변환 중...',
    tipText: '자동 변환된 영문 이름을 원하는 방식으로 수정할 수 있습니다. 발음이나 선호하는 영문 표기법에 맞게 조정해보세요.',
    
    // Results
    resultTitle: '룬 문자 변환 결과',
    resultSubtitle: '고대 바이킹의 신비로운 힘이 담긴 당신의 이름',
    combinedMeaning: '종합적인 의미',
    shareButton: '상세 공유',
    downloadButton: '이미지 저장',
    downloadingButton: '저장 중...',
    copyRune: '룬 문자 복사',
    detailButton: '각 룬의 세부 의미 보기',
    
    // Local Storage Features
    saveLocal: '내 기기에 저장',
    loadLocal: '저장된 결과 불러오기',
    savedSuccessfully: '변환 결과가 저장되었습니다',
    noSavedResults: '저장된 결과가 없습니다',
    savedResults: '저장된 결과',
    deleteResult: '삭제',
    confirmDelete: '정말 삭제하시겠습니까?',
    cancel: '취소',
    
    // Detailed explanation
    detailTitle: '룬 문자 상세 해석',
    detailSubtitle: '당신의 이름을 구성하는 각 룬 문자가 지닌 실제 의미와 고대의 지혜를 알아보세요',
    meaning: '의미',
    symbolism: '상징',
    divination: '점술적 의미',
    
    // Messages
    copySuccess: '룬 문자가 복사되었습니다',
    copySuccessDesc: '클립보드에 복사되었습니다.',
    copyFailed: '복사 실패',
    downloadSuccess: '이미지 다운로드 완료',
    downloadSuccessDesc: '룬 문자 변환 결과가 저장되었습니다.',
    downloadFailed: '다운로드 실패',
    
    // Footer
    footerTitle: '바이킹 룬 문자 변환기',
    footerDesc: '고대 바이킹 문화와 엘더 푸타르크 룬 문자의 신비로운 아름다움을 현대에 전하며, 실제 당신의 이름에 담긴 고대의 힘을 발견하세요.',
    copyright: '© 2025 Rune Converter. Made with ❤️ for Viking culture enthusiasts.',
    bugReport: '버그 제보: jowheemin@gmail.com',
  },
  
  en: {
    // Header
    title: 'Viking Rune Converter',
    subtitle: 'Transform your name into authentic Elder Futhark runes actually used by ancient Norse civilizations',
    
    // Features
    feature1Title: 'Accurate Conversion',
    feature1Desc: '3-step conversion: Korean-English-Runes',
    feature2Title: 'Meaning Analysis',
    feature2Desc: 'Detailed symbolism of each rune',
    feature3Title: 'Easy Sharing',
    feature3Desc: 'Save images & share on social media',
    
    // Input
    inputTitle: 'Name Input',
    inputSubtitle: 'Convert your name into ancient Viking runes',
    koreanName: 'Korean Name',
    englishName: 'English Name (Editable)',
    koreanPlaceholder: 'e.g., 조휘민, 김민수, 박지연...',
    englishPlaceholder: 'e.g., jowheemin, kimminsu, parkjiyeon...',
    convertButton: 'Convert to Runes',
    convertingButton: 'Mystical conversion in progress...',
    tipText: 'You can edit the auto-converted English name. Adjust it to match your preferred pronunciation or romanization.',
    
    // Results
    resultTitle: 'Rune Conversion Result',
    resultSubtitle: 'Your name imbued with ancient Viking mystical power',
    combinedMeaning: 'Combined Meaning',
    shareButton: 'Share Details',
    downloadButton: 'Save Image',
    downloadingButton: 'Saving...',
    copyRune: 'Copy Runes',
    detailButton: 'View Detailed Meanings',
    
    // Local Storage Features
    saveLocal: 'Save to my device',
    loadLocal: 'Load saved results',
    savedSuccessfully: 'Conversion result saved',
    noSavedResults: 'No saved results found',
    savedResults: 'Saved results',
    deleteResult: 'Delete',
    confirmDelete: 'Are you sure you want to delete?',
    cancel: 'Cancel',
    
    // Detailed explanation
    detailTitle: 'Detailed Rune Analysis',
    detailSubtitle: 'Discover the mystical meanings and ancient wisdom of each rune in your name',
    meaning: 'Meaning',
    symbolism: 'Symbolism',
    divination: 'Divinatory Meaning',
    
    // Messages
    copySuccess: 'Runes copied successfully',
    copySuccessDesc: 'Copied to clipboard.',
    copyFailed: 'Copy failed',
    downloadSuccess: 'Image downloaded successfully',
    downloadSuccessDesc: 'Rune conversion result saved.',
    downloadFailed: 'Download failed',
    
    // Footer
    footerTitle: 'Viking Rune Converter',
    footerDesc: 'Bringing the mystical beauty of authentic Viking culture and Elder Futhark runes to the modern world. Discover the real ancient power within your name.',
    copyright: '© 2025 Rune Converter. Made with ❤️ for Viking culture enthusiasts.',
    bugReport: 'Report bugs: jowheemin@gmail.com',
  },
  
  ja: {
    // Header
    title: 'バイキング ルーン文字変換器',
    subtitle: '実際に使用されていた北欧古代ノルドのエルダー・フサルクのルーン文字であなたの名前を変換しましょう',
    
    // Features
    feature1Title: '正確な変換',
    feature1Desc: '韓国語-英語-ルーン文字の3段階変換',
    feature2Title: '意味の解釈',
    feature2Desc: '各ルーンの象徴と意味を提供',
    feature3Title: '簡単な共有',
    feature3Desc: '画像保存とSNS共有',
    
    // Input
    inputTitle: '名前入力',
    inputSubtitle: 'あなたの名前を古代バイキングのルーン文字に変換',
    koreanName: '韓国語の名前',
    englishName: '英語名（編集可能）',
    koreanPlaceholder: '例：조휘민、김민수、박지연...',
    englishPlaceholder: '例：jowheemin、kimminsu、parkjiyeon...',
    convertButton: 'ルーン文字に変換',
    convertingButton: '神秘的な変換中...',
    tipText: '自動変換された英語名を希望に合わせて修正できます。発音や好みの英語表記法に調整してください。',
    
    // Results
    resultTitle: 'ルーン文字変換結果',
    resultSubtitle: '古代バイキングの神秘的な力が宿ったあなたの名前',
    combinedMeaning: '総合的な意味',
    shareButton: '詳細共有',
    downloadButton: '画像保存',
    downloadingButton: '保存中...',
    copyRune: 'ルーン文字をコピー',
    detailButton: '各ルーンの詳細を見る',
    
    // Local Storage Features
    saveLocal: 'デバイスに保存',
    loadLocal: '保存された結果を読み込む',
    savedSuccessfully: '変換結果が保存されました',
    noSavedResults: '保存された結果がありません',
    savedResults: '保存された結果',
    deleteResult: '削除',
    confirmDelete: '本当に削除しますか？',
    cancel: 'キャンセル',
    
    // Detailed explanation
    detailTitle: 'ルーン文字詳細解析',
    detailSubtitle: 'あなたの名前を構成する各ルーン文字の神秘的な意味と古代の知恵を学びましょう',
    meaning: '意味',
    symbolism: '象徴',
    divination: '占術的意味',
    
    // Messages
    copySuccess: 'ルーン文字がコピーされました',
    copySuccessDesc: 'クリップボードにコピーされました。',
    copyFailed: 'コピー失敗',
    downloadSuccess: '画像ダウンロード完了',
    downloadSuccessDesc: 'ルーン文字変換結果が保存されました。',
    downloadFailed: 'ダウンロード失敗',
    
    // Footer
    footerTitle: 'バイキング ルーン文字変換器',
    footerDesc: '実際の古代バイキング文化とエルダー・フサルクのルーン文字の神秘的な美しさを現代に伝え、あなたの名前に宿る本物の古代の力を発見してください。',
    copyright: '© 2025 Rune Converter. バイキング文化愛好家のために❤️で作成。',
    bugReport: 'バグ報告: jowheemin@gmail.com',
  },
  
  zh: {
    // Header
    title: '维京符文转换器',
    subtitle: '用北欧古代人实际使用的古老弗萨克符文转换您的姓名',
    
    // Features
    feature1Title: '精确转换',
    feature1Desc: '韩语-英语-符文三步转换',
    feature2Title: '意义解释',
    feature2Desc: '提供每个符文的象征和含义',
    feature3Title: '便捷分享',
    feature3Desc: '图片保存和社交媒体分享',
    
    // Input
    inputTitle: '姓名输入',
    inputSubtitle: '将您的姓名转换为古代维京符文',
    koreanName: '韩语姓名',
    englishName: '英文姓名（可编辑）',
    koreanPlaceholder: '例如：조휘민、김민수、박지연...',
    englishPlaceholder: '例如：jowheemin、kimminsu、parkjiyeon...',
    convertButton: '转换为符文',
    convertingButton: '神秘转换中...',
    tipText: '您可以修改自动转换的英文姓名。根据您的发音或首选的英文拼写法进行调整。',
    
    // Results
    resultTitle: '符文转换结果',
    resultSubtitle: '蕴含古代维京神秘力量的您的姓名',
    combinedMeaning: '综合含义',
    shareButton: '详细分享',
    downloadButton: '保存图片',
    downloadingButton: '保存中...',
    copyRune: '复制符文',
    detailButton: '查看各符文详细含义',
    
    // Local Storage Features
    saveLocal: '保存到本地',
    loadLocal: '加载已保存的结果',
    savedSuccessfully: '转换结果已保存',
    noSavedResults: '没有保存的结果',
    savedResults: '已保存的结果',
    deleteResult: '删除',
    confirmDelete: '您确定要删除吗？',
    cancel: '取消',
    
    // Detailed explanation
    detailTitle: '符文详细解析',
    detailSubtitle: '了解构成您姓名的每个符文的神秘含义和古代智慧',
    meaning: '含义',
    symbolism: '象征',
    divination: '占卜含义',
    
    // Messages
    copySuccess: '符文已复制',
    copySuccessDesc: '已复制到剪贴板。',
    copyFailed: '复制失败',
    downloadSuccess: '图片下载完成',
    downloadSuccessDesc: '符文转换结果已保存。',
    downloadFailed: '下载失败',
    
    // Footer
    footerTitle: '维京符文转换器',
    footerDesc: '将古代维京文化和古老弗萨克符文的神秘之美带到现代世界，发现您姓名中蕴含的古代力量。',
    copyright: '© 2025 符文转换器。为维京文化爱好者用❤️制作。',
    bugReport: '错误报告: jowheemin@gmail.com',
  },
  
  es: {
    // Header
    title: 'Convertidor de Runas Vikingas',
    subtitle: 'Transforma tu nombre en antiguas runas del Futhark Elder utilizadas realmente en la tradición nórdica',
    
    // Features
    feature1Title: 'Conversión Precisa',
    feature1Desc: 'Conversión en 3 pasos: Coreano-Inglés-Runas',
    feature2Title: 'Análisis de Significado',
    feature2Desc: 'Simbolismo detallado de cada runa',
    feature3Title: 'Compartir Fácil',
    feature3Desc: 'Guardar imágenes y compartir en redes',
    
    // Input
    inputTitle: 'Entrada de Nombre',
    inputSubtitle: 'Convierte tu nombre en runas vikingas antiguas',
    koreanName: 'Nombre Coreano',
    englishName: 'Nombre en Inglés (Editable)',
    koreanPlaceholder: 'ej., 조휘민, 김민수, 박지연...',
    englishPlaceholder: 'ej., jowheemin, kimminsu, parkjiyeon...',
    convertButton: 'Convertir a Runas',
    convertingButton: 'Conversión mística en progreso...',
    tipText: 'Puedes editar el nombre en inglés convertido automáticamente. Ajústalo para que coincida con tu pronunciación o romanización preferida.',
    
    // Results
    resultTitle: 'Resultado de Conversión de Runas',
    resultSubtitle: 'Tu nombre imbuido con el poder místico vikingo ancestral',
    combinedMeaning: 'Significado Combinado',
    shareButton: 'Compartir Detalles',
    downloadButton: 'Guardar Imagen',
    downloadingButton: 'Guardando...',
    copyRune: 'Copiar Runas',
    detailButton: 'Ver Significados Detallados',
    
    // Detailed explanation
    detailTitle: 'Análisis Detallado de Runas',
    detailSubtitle: 'Descubre los significados místicos y la sabiduría ancestral de cada runa en tu nombre',
    meaning: 'Significado',
    symbolism: 'Simbolismo',
    divination: 'Significado Adivinatorio',
    
    // Messages
    copySuccess: 'Runas copiadas exitosamente',
    copySuccessDesc: 'Copiado al portapapeles.',
    copyFailed: 'Error al copiar',
    downloadSuccess: 'Imagen descargada exitosamente',
    downloadSuccessDesc: 'Resultado de conversión de runas guardado.',
    downloadFailed: 'Error en la descarga',
    
    // Footer
    footerTitle: 'Convertidor de Runas Vikingas',
    footerDesc: 'Trayendo la belleza mística de la cultura vikinga ancestral y las runas del Futhark Elder al mundo moderno. Descubre el poder ancestral dentro de tu nombre.',
    copyright: '© 2025 Convertidor de Runas. Hecho con ❤️ para entusiastas de la cultura vikinga.',
    bugReport: 'Reportar errores: jowheemin@gmail.com',
  },
  
  fr: {
    // Header
    title: 'Convertisseur de Runes Vikings',
    subtitle: 'Transformez votre nom en anciennes runes du Futhark Elder réellement utilisées dans la tradition nordique',
    
    // Features
    feature1Title: 'Conversion Précise',
    feature1Desc: 'Conversion en 3 étapes : Coréen-Anglais-Runes',
    feature2Title: 'Analyse des Significations',
    feature2Desc: 'Symbolisme détaillé de chaque rune',
    feature3Title: 'Partage Facile',
    feature3Desc: 'Sauvegarder images et partager sur réseaux',
    
    // Input
    inputTitle: 'Saisie du Nom',
    inputSubtitle: 'Convertissez votre nom en runes vikings anciennes',
    koreanName: 'Nom Coréen',
    englishName: 'Nom Anglais (Modifiable)',
    koreanPlaceholder: 'ex., 조휘민, 김민수, 박지연...',
    englishPlaceholder: 'ex., jowheemin, kimminsu, parkjiyeon...',
    convertButton: 'Convertir en Runes',
    convertingButton: 'Conversion mystique en cours...',
    tipText: 'Vous pouvez modifier le nom anglais converti automatiquement. Ajustez-le pour correspondre à votre prononciation ou romanisation préférée.',
    
    // Results
    resultTitle: 'Résultat de Conversion des Runes',
    resultSubtitle: 'Votre nom imprégné du pouvoir mystique viking ancestral',
    combinedMeaning: 'Signification Combinée',
    shareButton: 'Partager les Détails',
    downloadButton: 'Sauvegarder Image',
    downloadingButton: 'Sauvegarde...',
    copyRune: 'Copier les Runes',
    detailButton: 'Voir les Significations Détaillées',
    
    // Detailed explanation
    detailTitle: 'Analyse Détaillée des Runes',
    detailSubtitle: 'Découvrez les significations mystiques et la sagesse ancestrale de chaque rune dans votre nom',
    meaning: 'Signification',
    symbolism: 'Symbolisme',
    divination: 'Signification Divinatoire',
    
    // Messages
    copySuccess: 'Runes copiées avec succès',
    copySuccessDesc: 'Copié dans le presse-papiers.',
    copyFailed: 'Erreur de copie',
    downloadSuccess: 'Image téléchargée avec succès',
    downloadSuccessDesc: 'Résultat de conversion des runes sauvegardé.',
    downloadFailed: 'Erreur de téléchargement',
    
    // Footer
    footerTitle: 'Convertisseur de Runes Vikings',
    footerDesc: 'Apportant la beauté mystique de la culture viking ancestrale et des runes du Futhark Elder au monde moderne. Découvrez le pouvoir ancestral dans votre nom.',
    copyright: '© 2025 Convertisseur de Runes. Fait avec ❤️ pour les passionnés de culture viking.',
    bugReport: 'Signaler des bugs: jowheemin@gmail.com',
  }
};

export function getTranslation(language: Language, key: string): string {
  // Try to get translation for the requested language
  let value = getNestedTranslation(translations[language], key);
  
  // If not found, fallback to Korean
  if (value === key && language !== 'ko') {
    value = getNestedTranslation(translations.ko, key);
  }
  
  // If still not found, fallback to English
  if (value === key && language !== 'en') {
    value = getNestedTranslation(translations.en, key);
  }
  
  return value;
}

function getNestedTranslation(translationObj: any, key: string): string {
  if (!translationObj) return key;
  
  // Handle simple keys (no dots)
  if (key in translationObj) {
    return translationObj[key];
  }
  
  // Handle nested keys (with dots)
  const keys = key.split('.');
  let value = translationObj;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Key not found at this level
    }
  }
  
  return typeof value === 'string' ? value : key;
}