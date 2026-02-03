export type Language = 'ko' | 'en' | 'ja' | 'zh' | 'es' | 'fr' | 'de';

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
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
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
    nativeName: '원문 이름',
    romanizedName: '로마자 이름 (수정 가능)',
    koreanPlaceholder: '예: 조휘민, 김민수, 박지연...',
    englishPlaceholder: '예: jowheemin, kimminsu, parkjiyeon...',
    nativePlaceholder: '예: 王伟, たなか, 홍길동...',
    romanizedPlaceholder: '예: wangwei, tanaka, honggildong...',
    convertButton: '룬 문자로 변환하기',
    convertingButton: '신비로운 변환 중...',
    tipText: '자동 변환된 영문 이름을 원하는 방식으로 수정할 수 있습니다. 발음이나 선호하는 영문 표기법에 맞게 조정해보세요.',
    romanizedTipText: '자동 변환된 로마자(영문) 표기는 수정할 수 있습니다. 여권 표기나 선호 철자에 맞게 조정해보세요.',
    romanizedAutoUnavailable: '일부 문자는 자동 로마자 변환이 어려울 수 있어요. 아래 칸에 원하는 영문 표기를 직접 입력해 주세요.',

    // Converting page
    convertingTitle: '룬 문자 변환 중',
    convertingSubtitle: '고대 바이킹의 신비로운 힘이 당신의 이름을 변환하고 있습니다',
    convertingCompleteLabel: '완료',
    convertingQuote: '"룬은 단순한 문자가 아니라, 우주의 비밀을 담은 신성한 기호이다"',
    convertingQuoteAuthor: '- 고대 노르드 전설',
    convertingStepKoreanAnalyze: '한국어 이름 분석 중...',
    convertingStepEnglishValidate: '영문 변환 확인 중...',
    convertingStepRuneMapping: '엘더 푸타르크 룬 매핑...',
    convertingStepMeaning: '룬 문자 의미 해석...',
    convertingStepDone: '신비로운 변환 완료!',
    convertingDetailKoreanAnalyzePrefix: '"',
    convertingDetailKoreanAnalyzeSuffix: '" 음성 구조 해석',
    convertingDetailEnglishValidatePrefix: '"',
    convertingDetailEnglishValidateSuffix: '" 철자 검증',
    convertingDetailRuneMapping: '각 글자를 고대 룬 문자로 변환',
    convertingDetailMeaning: '각 룬의 상징과 의미 분석',
    convertingDetailDone: '고대 바이킹의 지혜가 담긴 결과',

    // Rune result
    elderFutharkRunesLabel: '엘더 푸타르크 룬 문자',
    runeResultQuote: '"이 룬들은 당신의 이름에 담긴 고대의 힘을 나타냅니다"',
    copyErrorDesc: '룬 문자 복사 중 오류가 발생했습니다.',
    imageErrorDesc: '이미지 생성 중 오류가 발생했습니다.',
    viewRuneDetailsButton: '각 룬의 세부 의미 보기',
    conversionCompleteHint: '변환 완료! 위의 룬들을 클릭하여 자세한 의미를 확인해보세요.',
    egyptPromoTitle: '고대 이집트 상형문자 번역기 보러가기',
    egyptPromoSubtitle: '파라오의 신비로운 문자로 당신의 이름을 변환하세요',
    combinedMeaningEmpty: '신비로운 힘을 담은 이름입니다.',
    combinedMeaningFallbackShort: '간결하면서도 강력한 에너지를 지닌 이름.',
    combinedMeaningFallbackMedium: '균형잡힌 힘과 지혜를 겸비한 이름.',
    combinedMeaningFallbackLong: '복합적이고 깊은 의미를 담은 풍부한 이름.',
    combinedMeaningTemplateBothPrefix: '',
    combinedMeaningTemplateBothMiddle: '을 바탕으로 ',
    combinedMeaningTemplateBothSuffix: '을 발휘하여 목표를 달성하는 인물.',
    combinedMeaningTemplatePositiveSuffix: '의 기운을 가진 축복받은 이름.',
    combinedMeaningTemplatePersonalitySuffix: '의 특성을 지닌 강인한 인물.',

    // Combined meaning themes
    'theme.success': '성공',
    'theme.prosperity': '풍요',
    'theme.wisdom': '지혜',
    'theme.courage': '용기',
    'theme.protection': '보호',
    'theme.luck': '행운',
    'theme.strength': '힘',
    'theme.growth': '성장',
    'theme.harmony': '조화',
    'theme.balance': '균형',
    'theme.creativity': '창조',
    'theme.progress': '발전',
    'theme.victory': '승리',
    'theme.hope': '희망',
    'theme.leadership': '리더십',
    'theme.communication': '소통',
    'theme.journey': '여행',
    'theme.adventure': '모험',
    'theme.change': '변화',
    'theme.intuition': '직관',
    'theme.patience': '인내',
    'theme.willpower': '의지',
    'theme.passion': '열정',
    'theme.focus': '집중',
    'theme.completion': '완성',
    'theme.insight': '통찰',

    // Rune reference
    runeTableTitle: '엘더 푸타르크 룬 문자표',
    runeTableExpand: '24개 룬 문자 보기',
    runeTableCollapse: '접기',
    runeTableHint: '각 룬 문자를 터치하면 상세한 의미를 확인할 수 있습니다',

    // Rune explanation summary
    runePowerTitle: '당신의 이름에 담긴 룬의 힘',
    runePowerDescPrefix: '이 ',
    runePowerDescSuffix: '개의 룬 문자들이 조합되어 당신의 이름에 고대 바이킹의 지혜와 힘을 부여합니다.',
    runePowerDescSecond: '각 룬은 단순한 글자가 아니라, 우주의 신비로운 에너지를 담고 있는 신성한 기호입니다.',

    // Historical info
    historyTitle: '룬 문자의 역사',
    historyWhatTitle: '룬 문자란?',
    historyWhatBody: '룬 문자(Runes)는 게르만족이 사용한 고대 문자 체계입니다. “rune”이라는 단어는 “비밀” 또는 “속삭임”을 의미하는 고대 노르드어 “rún”에서 유래되었습니다. 바이킹들은 이 문자를 돌, 나무, 금속에 새겨 기록과 의식에 사용했습니다.',
    historyElderTitle: '엘더 푸타르크 (Elder Futhark)',
    historyElderBody: '가장 오래된 룬 문자 체계로, 24개의 문자로 구성되어 있습니다. 2세기부터 8세기까지 사용되었으며, 바이킹 시대의 주요 문자 체계였습니다. “Futhark”라는 이름은 처음 여섯 글자(ᚠᚢᚦᚨᚱᚲ)에서 따온 것입니다.',
    historyMeaningTitle: '룬 문자의 의미',
    historyMeaningBody: '각 룬 문자는 단순한 글자가 아니라 깊은 의미와 상징을 담고 있습니다. 바이킹들은 이 문자들이 마법적 힘을 가지고 있다고 믿었으며, 점술이나 부적으로도 사용했습니다. 각 룬은 자연의 힘, 신들, 그리고 인간의 경험을 나타냅니다.',

    // Share modal
    shareModalSubtitle: '룬 문자 변환 결과를 친구들과 공유해보세요',
    shareCopyLinkButton: '링크 복사',
    shareLinkLabel: '공유 링크',
    shareCta: '바이킹 룬 문자 변환기로 더 많은 이름을 변환해보세요!',
    shareLinkCopiedTitle: '링크가 복사되었습니다',
    shareLinkCopiedDesc: '친구에게 공유해보세요!',
    shareTextCopiedTitle: '텍스트가 복사되었습니다',
    shareTextCopiedDesc: '클립보드에 룬 변환 결과가 복사되었습니다.',
    shareCopyFailedDesc: '복사 중 오류가 발생했습니다.',
    shareDownloadSuccessTitle: '이미지 다운로드 완료',
    shareDownloadSuccessDesc: '룬 문자 변환 결과가 저장되었습니다.',
    shareDownloadFailedDesc: '이미지 생성 중 오류가 발생했습니다.',
    shareImageTitle: '바이킹 룬 문자 변환',
    shareImageDesc: '고대 바이킹 엘더 푸타르크 룬 문자',
    shareImageFooter: 'Rune Converter - 룬 문자 변환기',

    // Footer info
    footerInfoRunesTitle: '룬 문자 정보',
    footerInfoRunesDesc: '엘더 푸타르크 24개 룬 문자의 정확한 의미와 상징을 바탕으로 변환합니다.',
    footerInfoKoreanSupportTitle: '한국어 지원',
    footerInfoKoreanSupportDesc: '한국어 이름의 정확한 로마자 표기법을 지원하며, 사용자가 직접 수정할 수 있습니다.',
    footerInfoFreeTitle: '무료 서비스',
    footerInfoFreeDesc: '모든 변환 및 공유 기능을 완전 무료로 제공합니다.',
    footerReferenceLabel: '참고 자료:',
    footerReferenceNamu: '나무위키 룬 문자',
    footerReferenceWiki: '위키백과 엘더 푸타르크',

    // Connection status
    connectionStatusTitle: '서버 연결 상태',
    connectionStatusChecking: '확인 중',
    connectionStatusConnected: '연결됨',
    connectionStatusDisconnected: '연결 안됨',
    connectionCheckingMessage: '연결 상태 확인 중...',
    connectionCheckErrorPrefix: '연결 확인 중 오류 발생: ',
    localApiServerLabel: '로컬 API 서버 주소:',
    connectionCheckingButton: '연결 확인 중...',
    connectionRecheckButton: '연결 다시 확인',

    // Input (non-Korean languages)
    alphabetName: '이름 (영문/알파벳)',
    alphabetPlaceholder: '예: José, François, Müller, O\'Connor... (라틴 문자)',
    alphabetTipText: '이 입력창은 라틴 문자(악센트 포함)와 공백/하이픈/어포스트로피만 허용합니다. (숫자/기호/한글/한자/가나 불가)',
    tipLabel: '팁:',
    englishEnableHint: '영문(알파벳) 이름을 입력하면 변환 버튼이 활성화됩니다',

    // Validation
    englishRequiredTitle: '영문 이름 필요',
    englishRequiredDesc: '영문(알파벳) 이름을 입력해주세요.',
    englishInvalidTitle: '잘못된 입력',
    englishInvalidDesc: '영문 이름은 라틴 문자(악센트 포함)와 공백/하이픈/어포스트로피만 입력할 수 있습니다.',
    
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
    nativeName: 'Native Name',
    romanizedName: 'Romanized Name (Editable)',
    koreanPlaceholder: 'e.g., 조휘민, 김민수, 박지연...',
    englishPlaceholder: 'e.g., jowheemin, kimminsu, parkjiyeon...',
    nativePlaceholder: 'e.g., 王伟, たなか, 홍길동...',
    romanizedPlaceholder: 'e.g., wangwei, tanaka, honggildong...',
    convertButton: 'Convert to Runes',
    convertingButton: 'Mystical conversion in progress...',
    tipText: 'You can edit the auto-converted English name. Adjust it to match your preferred pronunciation or romanization.',
    romanizedTipText: 'You can edit the auto-filled romanization to match your passport spelling or preferred usage.',
    romanizedAutoUnavailable: 'Some characters can’t be romanized automatically. Please type your preferred spelling below.',

    // Converting page
    convertingTitle: 'Converting to runes',
    convertingSubtitle: 'Ancient Viking power is transforming your name',
    convertingCompleteLabel: 'Done',
    convertingQuote: '"Runes are not mere letters, but sacred symbols holding the secrets of the universe."',
    convertingQuoteAuthor: '- Old Norse legend',
    convertingStepKoreanAnalyze: 'Analyzing name...',
    convertingStepEnglishValidate: 'Validating alphabet name...',
    convertingStepRuneMapping: 'Mapping to Elder Futhark...',
    convertingStepMeaning: 'Interpreting rune meanings...',
    convertingStepDone: 'Mystical conversion complete!',
    convertingDetailKoreanAnalyzePrefix: '"',
    convertingDetailKoreanAnalyzeSuffix: '" phonetic structure analysis',
    convertingDetailEnglishValidatePrefix: '"',
    convertingDetailEnglishValidateSuffix: '" spelling check',
    convertingDetailRuneMapping: 'Converting each letter to an ancient rune',
    convertingDetailMeaning: 'Analyzing symbolism and meaning of each rune',
    convertingDetailDone: 'A result filled with ancient Viking wisdom',

    // Rune result
    elderFutharkRunesLabel: 'Elder Futhark Runes',
    runeResultQuote: '"These runes reflect the ancient power within your name."',
    copyErrorDesc: 'An error occurred while copying the runes.',
    imageErrorDesc: 'An error occurred while generating the image.',
    viewRuneDetailsButton: 'View detailed meanings of each rune',
    conversionCompleteHint: 'Conversion complete! Tap the runes above to see detailed meanings.',
    egyptPromoTitle: 'Try the Ancient Egyptian Hieroglyph Translator',
    egyptPromoSubtitle: 'Transform your name into the mysterious script of the pharaohs',
    combinedMeaningEmpty: 'A name filled with mysterious power.',
    combinedMeaningFallbackShort: 'A short name with strong energy.',
    combinedMeaningFallbackMedium: 'A balanced name with power and wisdom.',
    combinedMeaningFallbackLong: 'A rich name with deep, layered meaning.',
    combinedMeaningTemplateBothPrefix: '',
    combinedMeaningTemplateBothMiddle: ' as a foundation, showing ',
    combinedMeaningTemplateBothSuffix: ' to achieve your goals.',
    combinedMeaningTemplatePositiveSuffix: ' — a blessed name with uplifting energy.',
    combinedMeaningTemplatePersonalitySuffix: ' — a resilient name with strong character.',

    // Combined meaning themes
    'theme.success': 'Success',
    'theme.prosperity': 'Prosperity',
    'theme.wisdom': 'Wisdom',
    'theme.courage': 'Courage',
    'theme.protection': 'Protection',
    'theme.luck': 'Luck',
    'theme.strength': 'Strength',
    'theme.growth': 'Growth',
    'theme.harmony': 'Harmony',
    'theme.balance': 'Balance',
    'theme.creativity': 'Creativity',
    'theme.progress': 'Progress',
    'theme.victory': 'Victory',
    'theme.hope': 'Hope',
    'theme.leadership': 'Leadership',
    'theme.communication': 'Communication',
    'theme.journey': 'Journey',
    'theme.adventure': 'Adventure',
    'theme.change': 'Change',
    'theme.intuition': 'Intuition',
    'theme.patience': 'Patience',
    'theme.willpower': 'Willpower',
    'theme.passion': 'Passion',
    'theme.focus': 'Focus',
    'theme.completion': 'Completion',
    'theme.insight': 'Insight',

    // Rune reference
    runeTableTitle: 'Elder Futhark Rune Table',
    runeTableExpand: 'View all 24 runes',
    runeTableCollapse: 'Collapse',
    runeTableHint: 'Tap a rune to see its meaning',

    // Rune explanation summary
    runePowerTitle: 'The power of runes in your name',
    runePowerDescPrefix: 'These ',
    runePowerDescSuffix: ' runes combine to grant your name ancient Viking wisdom and strength.',
    runePowerDescSecond: 'Each rune is not just a letter, but a sacred symbol holding mystical energy.',

    // Historical info
    historyTitle: 'History of Runes',
    historyWhatTitle: 'What are runes?',
    historyWhatBody: 'Runes are an ancient writing system used by Germanic peoples. The word “rune” comes from the Old Norse “rún,” meaning “secret” or “whisper.” Vikings carved runes into stone, wood, and metal for records and rituals.',
    historyElderTitle: 'Elder Futhark',
    historyElderBody: 'The oldest runic alphabet, consisting of 24 characters. It was used from roughly the 2nd to the 8th century and became the foundational system for later runes. The name “Futhark” comes from its first six letters (ᚠᚢᚦᚨᚱᚲ).',
    historyMeaningTitle: 'Meanings of runes',
    historyMeaningBody: 'Each rune carries symbolism beyond its sound. Vikings believed runes held magical power and used them for divination and protective charms. Runes often represent forces of nature, gods, and human experience.',

    // Share modal
    shareModalSubtitle: 'Share your rune conversion with friends',
    shareCopyLinkButton: 'Copy link',
    shareLinkLabel: 'Share link',
    shareCta: 'Convert more names with the Viking Rune Converter!',
    shareLinkCopiedTitle: 'Link copied',
    shareLinkCopiedDesc: 'Share it with friends!',
    shareTextCopiedTitle: 'Text copied',
    shareTextCopiedDesc: 'The rune result has been copied to your clipboard.',
    shareCopyFailedDesc: 'An error occurred while copying.',
    shareDownloadSuccessTitle: 'Image downloaded',
    shareDownloadSuccessDesc: 'Your rune conversion was saved.',
    shareDownloadFailedDesc: 'An error occurred while generating the image.',
    shareImageTitle: 'Viking Rune Conversion',
    shareImageDesc: 'Ancient Viking Elder Futhark runes',
    shareImageFooter: 'Rune Converter',

    // Footer info
    footerInfoRunesTitle: 'Rune details',
    footerInfoRunesDesc: 'Conversion is based on the meanings and symbolism of all 24 Elder Futhark runes.',
    footerInfoKoreanSupportTitle: 'Korean support',
    footerInfoKoreanSupportDesc: 'Supports Korean romanization and lets you edit the alphabet name.',
    footerInfoFreeTitle: 'Free service',
    footerInfoFreeDesc: 'All conversion and sharing features are completely free.',
    footerReferenceLabel: 'References:',
    footerReferenceNamu: 'Namu Wiki: Runes',
    footerReferenceWiki: 'Wikipedia: Elder Futhark',

    // Connection status
    connectionStatusTitle: 'Server connection status',
    connectionStatusChecking: 'Checking',
    connectionStatusConnected: 'Connected',
    connectionStatusDisconnected: 'Disconnected',
    connectionCheckingMessage: 'Checking connection...',
    connectionCheckErrorPrefix: 'Error while checking connection: ',
    localApiServerLabel: 'Local API server:',
    connectionCheckingButton: 'Checking...',
    connectionRecheckButton: 'Recheck connection',

    // Input (non-Korean languages)
    alphabetName: 'Your name (Alphabet)',
    alphabetPlaceholder: "e.g., José, François, Müller, O'Connor... (Latin letters)",
    alphabetTipText: 'This field allows Latin letters (including accents) plus spaces, hyphens, and apostrophes. (No numbers or CJK characters)',
    tipLabel: 'Tip:',
    englishEnableHint: 'Enter your name to enable conversion.',

    // Validation
    englishRequiredTitle: 'English name required',
    englishRequiredDesc: 'Please enter your name using the alphabet (A–Z).',
    englishInvalidTitle: 'Invalid input',
    englishInvalidDesc: 'Only Latin letters (including accents) plus spaces, hyphens, and apostrophes are allowed.',
    
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
    nativeName: '原文の名前',
    romanizedName: 'ローマ字（編集可能）',
    koreanPlaceholder: '例：조휘민、김민수、박지연...',
    englishPlaceholder: '例：jowheemin、kimminsu、parkjiyeon...',
    nativePlaceholder: '例：たなか、ゆうき、さとう...',
    romanizedPlaceholder: '例：tanaka、yuki、sato...',
    convertButton: 'ルーン文字に変換',
    convertingButton: '神秘的な変換中...',
    tipText: '自動変換された英語名を希望に合わせて修正できます。発音や好みの英語表記法に調整してください。',
    romanizedTipText: '自動変換されたローマ字は編集できます。パスポート表記や好みに合わせて調整してください。',
    romanizedAutoUnavailable: '一部の文字（漢字など）は自動でローマ字化できない場合があります。下の欄にお好みの表記を入力してください。',

    // Input (non-Korean languages)
    alphabetName: '名前（アルファベット）',
    alphabetPlaceholder: '例：José、François、Müller...（ラテン文字）',
    alphabetTipText: 'この入力欄はラテン文字（アクセント含む）と空白/ハイフン/アポストロフィのみ対応します。（数字・CJK文字は不可）',
    tipLabel: 'ヒント：',
    englishEnableHint: 'アルファベットで入力すると変換ボタンが有効になります',

    // Validation
    englishRequiredTitle: '英字名が必要です',
    englishRequiredDesc: 'アルファベット（A–Z）で名前を入力してください。',
    englishInvalidTitle: '無効な入力',
    englishInvalidDesc: 'ラテン文字（アクセント含む）と空白/ハイフン/アポストロフィのみ入力できます。',
    
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

    // Converting page
    convertingTitle: 'ルーン文字変換中',
    convertingSubtitle: '古代バイキングの神秘的な力があなたの名前を変換しています',
    convertingCompleteLabel: '完了',
    convertingQuote: '"ルーンは単なる文字ではなく、宇宙の秘密を宿す神聖な記号である"',
    convertingQuoteAuthor: '- 古代ノルドの伝承',
    convertingStepKoreanAnalyze: '名前を分析中...',
    convertingStepEnglishValidate: 'アルファベット名を確認中...',
    convertingStepRuneMapping: 'エルダー・フサルクへマッピング...',
    convertingStepMeaning: 'ルーンの意味を解釈中...',
    convertingStepDone: '神秘的な変換が完了！',
    convertingDetailKoreanAnalyzePrefix: '"',
    convertingDetailKoreanAnalyzeSuffix: '" の音韻構造を解析',
    convertingDetailEnglishValidatePrefix: '"',
    convertingDetailEnglishValidateSuffix: '" の綴りを検証',
    convertingDetailRuneMapping: '各文字を古代ルーンへ変換',
    convertingDetailMeaning: '各ルーンの象徴と意味を分析',
    convertingDetailDone: '古代バイキングの知恵が込められた結果',

    // Rune result
    elderFutharkRunesLabel: 'エルダー・フサルク ルーン文字',
    runeResultQuote: '"これらのルーンは、あなたの名前に宿る古代の力を表しています"',
    copyErrorDesc: 'ルーンのコピー中にエラーが発生しました。',
    imageErrorDesc: '画像生成中にエラーが発生しました。',
    viewRuneDetailsButton: '各ルーンの詳細な意味を見る',
    conversionCompleteHint: '変換完了！上のルーンをタップして詳細を確認してください。',
    egyptPromoTitle: '古代エジプト象形文字翻訳機を見る',
    egyptPromoSubtitle: 'ファラオの神秘的な文字であなたの名前を変換しましょう',
    combinedMeaningEmpty: '神秘的な力を秘めた名前です。',
    combinedMeaningFallbackShort: '短くても力強いエネルギーを持つ名前。',
    combinedMeaningFallbackMedium: '力と知恵のバランスが取れた名前。',
    combinedMeaningFallbackLong: '深く重層的な意味を持つ豊かな名前。',
    combinedMeaningTemplateBothPrefix: '',
    combinedMeaningTemplateBothMiddle: 'を土台に、',
    combinedMeaningTemplateBothSuffix: 'を発揮して目標を達成する人物。',
    combinedMeaningTemplatePositiveSuffix: 'の気を持つ祝福された名前。',
    combinedMeaningTemplatePersonalitySuffix: 'の特性を持つ強い人物。',

    // Combined meaning themes
    'theme.success': '成功',
    'theme.prosperity': '繁栄',
    'theme.wisdom': '知恵',
    'theme.courage': '勇気',
    'theme.protection': '守護',
    'theme.luck': '幸運',
    'theme.strength': '力',
    'theme.growth': '成長',
    'theme.harmony': '調和',
    'theme.balance': 'バランス',
    'theme.creativity': '創造',
    'theme.progress': '進展',
    'theme.victory': '勝利',
    'theme.hope': '希望',
    'theme.leadership': 'リーダーシップ',
    'theme.communication': 'コミュニケーション',
    'theme.journey': '旅',
    'theme.adventure': '冒険',
    'theme.change': '変化',
    'theme.intuition': '直感',
    'theme.patience': '忍耐',
    'theme.willpower': '意志',
    'theme.passion': '情熱',
    'theme.focus': '集中',
    'theme.completion': '完成',
    'theme.insight': '洞察',

    // Rune reference
    runeTableTitle: 'エルダー・フサルク ルーン表',
    runeTableExpand: '24個のルーンを見る',
    runeTableCollapse: '折りたたむ',
    runeTableHint: 'ルーンをタップすると意味を確認できます',

    // Rune explanation summary
    runePowerTitle: 'あなたの名前に宿るルーンの力',
    runePowerDescPrefix: 'これらの',
    runePowerDescSuffix: '個のルーンが組み合わさり、あなたの名前に古代バイキングの知恵と力を与えます。',
    runePowerDescSecond: '各ルーンは単なる文字ではなく、神秘的なエネルギーを宿す神聖な記号です。',

    // Historical info
    historyTitle: 'ルーン文字の歴史',
    historyWhatTitle: 'ルーン文字とは？',
    historyWhatBody: 'ルーン文字（Runes）はゲルマン民族が用いた古代の文字体系です。「rune」という言葉は、古ノルド語の「rún（秘密／ささやき）」に由来します。バイキングは石・木・金属に刻み、記録や儀式に用いました。',
    historyElderTitle: 'エルダー・フサルク（Elder Futhark）',
    historyElderBody: '最古のルーン文字体系で、24文字から成ります。おおよそ2世紀から8世紀にかけて使用され、後のルーン体系の基礎となりました。「Futhark」は最初の6文字（ᚠᚢᚦᚨᚱᚲ）に由来します。',
    historyMeaningTitle: 'ルーンの意味',
    historyMeaningBody: '各ルーンは音だけでなく象徴性も持ちます。バイキングはルーンに魔力が宿ると信じ、占いや護符にも用いました。ルーンは自然の力、神々、人間の経験などを表します。',

    // Share modal
    shareModalSubtitle: '変換結果を友達と共有しましょう',
    shareCopyLinkButton: 'リンクをコピー',
    shareLinkLabel: '共有リンク',
    shareCta: 'バイキング ルーン文字変換器で、もっと名前を変換しましょう！',
    shareLinkCopiedTitle: 'リンクをコピーしました',
    shareLinkCopiedDesc: '友達に共有してみましょう！',
    shareTextCopiedTitle: 'テキストをコピーしました',
    shareTextCopiedDesc: 'ルーン変換結果をクリップボードにコピーしました。',
    shareCopyFailedDesc: 'コピー中にエラーが発生しました。',
    shareDownloadSuccessTitle: '画像を保存しました',
    shareDownloadSuccessDesc: '変換結果を保存しました。',
    shareDownloadFailedDesc: '画像生成中にエラーが発生しました。',
    shareImageTitle: 'バイキング ルーン文字変換',
    shareImageDesc: '古代バイキングのエルダー・フサルク ルーン',
    shareImageFooter: 'Rune Converter',

    // Footer info
    footerInfoRunesTitle: 'ルーン情報',
    footerInfoRunesDesc: '24個すべてのエルダー・フサルク ルーンの意味と象徴に基づいて変換します。',
    footerInfoKoreanSupportTitle: '韓国語対応',
    footerInfoKoreanSupportDesc: '韓国語名のローマ字表記を支援し、アルファベット名は編集できます。',
    footerInfoFreeTitle: '無料サービス',
    footerInfoFreeDesc: '変換・共有機能を完全無料で提供します。',
    footerReferenceLabel: '参考資料:',
    footerReferenceNamu: 'ナムウィキ：ルーン文字',
    footerReferenceWiki: 'ウィキペディア：エルダー・フサルク',

    // Connection status
    connectionStatusTitle: 'サーバー接続状況',
    connectionStatusChecking: '確認中',
    connectionStatusConnected: '接続済み',
    connectionStatusDisconnected: '未接続',
    connectionCheckingMessage: '接続状況を確認しています...',
    connectionCheckErrorPrefix: '接続確認中にエラーが発生しました: ',
    localApiServerLabel: 'ローカルAPIサーバー:',
    connectionCheckingButton: '確認中...',
    connectionRecheckButton: '再確認',
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
    nativeName: '原文姓名',
    romanizedName: '拼音/罗马字（可编辑）',
    koreanPlaceholder: '例如：조휘민、김민수、박지연...',
    englishPlaceholder: '例如：jowheemin、kimminsu、parkjiyeon...',
    nativePlaceholder: '例如：王伟、张伟、李娜...',
    romanizedPlaceholder: '例如：wangwei、zhangwei、lina...',
    convertButton: '转换为符文',
    convertingButton: '神秘转换中...',
    tipText: '您可以修改自动转换的英文姓名。根据您的发音或首选的英文拼写法进行调整。',
    romanizedTipText: '自动生成的拼音/罗马字可编辑，可按护照或习惯拼写进行调整。',
    romanizedAutoUnavailable: '部分字符可能无法自动生成拼音/罗马字，请在下方输入你希望的拼写。',

    // Input (non-Korean languages)
    alphabetName: '姓名（字母）',
    alphabetPlaceholder: '例如：José、François、Müller...（拉丁字母）',
    alphabetTipText: '此输入框支持拉丁字母（含重音符）以及空格/连字符/撇号。（不支持数字或中日韩字符）',
    tipLabel: '提示：',
    englishEnableHint: '输入字母姓名后，转换按钮将启用。',

    // Validation
    englishRequiredTitle: '需要英文姓名',
    englishRequiredDesc: '请使用字母（A–Z）输入您的姓名。',
    englishInvalidTitle: '输入无效',
    englishInvalidDesc: '仅允许拉丁字母（含重音符）以及空格/连字符/撇号。',
    
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

    // Converting page
    convertingTitle: '符文转换中',
    convertingSubtitle: '古代维京的神秘力量正在转换您的姓名',
    convertingCompleteLabel: '完成',
    convertingQuote: '"符文不仅是文字，更是承载宇宙秘密的神圣符号"',
    convertingQuoteAuthor: '- 古诺尔斯传说',
    convertingStepKoreanAnalyze: '分析姓名中...',
    convertingStepEnglishValidate: '校验字母姓名中...',
    convertingStepRuneMapping: '映射到古老弗萨克中...',
    convertingStepMeaning: '解读符文含义中...',
    convertingStepDone: '神秘转换完成！',
    convertingDetailKoreanAnalyzePrefix: '"',
    convertingDetailKoreanAnalyzeSuffix: '" 语音结构解析',
    convertingDetailEnglishValidatePrefix: '"',
    convertingDetailEnglishValidateSuffix: '" 拼写校验',
    convertingDetailRuneMapping: '将每个字母转换为古代符文',
    convertingDetailMeaning: '分析每个符文的象征与含义',
    convertingDetailDone: '蕴含古代维京智慧的结果',

    // Rune result
    elderFutharkRunesLabel: '古老弗萨克符文',
    runeResultQuote: '"这些符文展现了您姓名中蕴含的古老力量"',
    copyErrorDesc: '复制符文时发生错误。',
    imageErrorDesc: '生成图片时发生错误。',
    viewRuneDetailsButton: '查看每个符文的详细含义',
    conversionCompleteHint: '转换完成！点击上方符文查看详细含义。',
    egyptPromoTitle: '查看古埃及象形文字翻译器',
    egyptPromoSubtitle: '用法老的神秘文字转换您的姓名',
    combinedMeaningEmpty: '一个充满神秘力量的名字。',
    combinedMeaningFallbackShort: '简短却充满能量的名字。',
    combinedMeaningFallbackMedium: '力量与智慧平衡的名字。',
    combinedMeaningFallbackLong: '含义深远、层次丰富的名字。',
    combinedMeaningTemplateBothPrefix: '',
    combinedMeaningTemplateBothMiddle: '为基础，展现',
    combinedMeaningTemplateBothSuffix: '以达成目标。',
    combinedMeaningTemplatePositiveSuffix: '——充满祝福与积极能量的名字。',
    combinedMeaningTemplatePersonalitySuffix: '——坚韧且性格强大的名字。',

    // Combined meaning themes
    'theme.success': '成功',
    'theme.prosperity': '繁荣',
    'theme.wisdom': '智慧',
    'theme.courage': '勇气',
    'theme.protection': '保护',
    'theme.luck': '幸运',
    'theme.strength': '力量',
    'theme.growth': '成长',
    'theme.harmony': '和谐',
    'theme.balance': '平衡',
    'theme.creativity': '创造力',
    'theme.progress': '进步',
    'theme.victory': '胜利',
    'theme.hope': '希望',
    'theme.leadership': '领导力',
    'theme.communication': '沟通',
    'theme.journey': '旅程',
    'theme.adventure': '冒险',
    'theme.change': '变化',
    'theme.intuition': '直觉',
    'theme.patience': '耐心',
    'theme.willpower': '意志力',
    'theme.passion': '热情',
    'theme.focus': '专注',
    'theme.completion': '完成',
    'theme.insight': '洞察',

    // Rune reference
    runeTableTitle: '古老弗萨克符文表',
    runeTableExpand: '查看全部24个符文',
    runeTableCollapse: '收起',
    runeTableHint: '点击符文查看其含义',

    // Rune explanation summary
    runePowerTitle: '您姓名中的符文力量',
    runePowerDescPrefix: '这',
    runePowerDescSuffix: '个符文组合在一起，为您的姓名赋予古代维京的智慧与力量。',
    runePowerDescSecond: '每个符文不仅是字母，更是承载神秘能量的神圣符号。',

    // Historical info
    historyTitle: '符文的历史',
    historyWhatTitle: '什么是符文？',
    historyWhatBody: '符文（Runes）是日耳曼民族使用的古代文字体系。“rune”一词源于古诺尔斯语“rún”，意为“秘密”或“低语”。维京人把符文刻在石头、木材和金属上，用于记录和仪式。',
    historyElderTitle: '古老弗萨克（Elder Futhark）',
    historyElderBody: '最古老的符文字母表，由24个字符组成，大约在2世纪至8世纪间使用，并成为后续符文体系的基础。“Futhark”这个名字来自其前六个字母（ᚠᚢᚦᚨᚱᚲ）。',
    historyMeaningTitle: '符文的含义',
    historyMeaningBody: '每个符文不仅代表发音，也承载象征意义。维京人相信符文具有魔法力量，并将其用于占卜与护符。符文常象征自然之力、诸神以及人类经验。',

    // Share modal
    shareModalSubtitle: '把符文转换结果分享给朋友',
    shareCopyLinkButton: '复制链接',
    shareLinkLabel: '分享链接',
    shareCta: '用维京符文转换器转换更多姓名！',
    shareLinkCopiedTitle: '链接已复制',
    shareLinkCopiedDesc: '快去分享给朋友吧！',
    shareTextCopiedTitle: '文本已复制',
    shareTextCopiedDesc: '符文结果已复制到剪贴板。',
    shareCopyFailedDesc: '复制时发生错误。',
    shareDownloadSuccessTitle: '图片已保存',
    shareDownloadSuccessDesc: '符文转换结果已保存。',
    shareDownloadFailedDesc: '生成图片时发生错误。',
    shareImageTitle: '维京符文转换',
    shareImageDesc: '古代维京古老弗萨克符文',
    shareImageFooter: 'Rune Converter',

    // Footer info
    footerInfoRunesTitle: '符文信息',
    footerInfoRunesDesc: '转换基于24个古老弗萨克符文的含义与象征。',
    footerInfoKoreanSupportTitle: '韩语支持',
    footerInfoKoreanSupportDesc: '支持韩文罗马字转写，并可编辑字母姓名。',
    footerInfoFreeTitle: '免费服务',
    footerInfoFreeDesc: '所有转换与分享功能完全免费。',
    footerReferenceLabel: '参考资料:',
    footerReferenceNamu: 'Namu Wiki：符文',
    footerReferenceWiki: '维基百科：古老弗萨克',

    // Connection status
    connectionStatusTitle: '服务器连接状态',
    connectionStatusChecking: '检查中',
    connectionStatusConnected: '已连接',
    connectionStatusDisconnected: '未连接',
    connectionCheckingMessage: '正在检查连接...',
    connectionCheckErrorPrefix: '检查连接时出错：',
    localApiServerLabel: '本地 API 服务器:',
    connectionCheckingButton: '检查中...',
    connectionRecheckButton: '重新检查',
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
    nativeName: 'Nombre en idioma original',
    romanizedName: 'Nombre romanizado (editable)',
    koreanPlaceholder: 'ej., 조휘민, 김민수, 박지연...',
    englishPlaceholder: 'ej., jowheemin, kimminsu, parkjiyeon...',
    nativePlaceholder: 'p. ej., José, Muñoz, García...',
    romanizedPlaceholder: 'p. ej., jose, munoz, garcia...',
    convertButton: 'Convertir a Runas',
    convertingButton: 'Conversión mística en progreso...',
    tipText: 'Puedes editar el nombre en inglés convertido automáticamente. Ajústalo para que coincida con tu pronunciación o romanización preferida.',
    romanizedTipText: 'Puedes editar la romanización autocompletada para que coincida con tu pasaporte o preferencia.',
    romanizedAutoUnavailable: 'Algunos caracteres no se pueden romanizar automáticamente. Escribe abajo tu forma preferida.',

    // Input (non-Korean languages)
    alphabetName: 'Tu nombre (Alfabeto)',
    alphabetPlaceholder: 'p. ej., José, François, Müller, O\'Connor... (letras latinas)',
    alphabetTipText: 'Este campo permite letras latinas (con acentos) y espacios/guiones/apóstrofes. (Sin números ni caracteres CJK)',
    tipLabel: 'Consejo:',
    englishEnableHint: 'Ingresa tu nombre para habilitar la conversión.',

    // Validation
    englishRequiredTitle: 'Se requiere nombre en inglés',
    englishRequiredDesc: 'Ingresa tu nombre usando el alfabeto (A–Z).',
    englishInvalidTitle: 'Entrada inválida',
    englishInvalidDesc: 'Solo se permiten letras latinas (con acentos) y espacios/guiones/apóstrofes.',
    
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

    // Converting page
    convertingTitle: 'Convirtiendo a runas',
    convertingSubtitle: 'El poder vikingo antiguo está transformando tu nombre',
    convertingCompleteLabel: 'Listo',
    convertingQuote: '"Las runas no son solo letras, sino símbolos sagrados que guardan los secretos del universo."',
    convertingQuoteAuthor: '- Leyenda nórdica antigua',
    convertingStepKoreanAnalyze: 'Analizando nombre...',
    convertingStepEnglishValidate: 'Validando nombre en alfabeto...',
    convertingStepRuneMapping: 'Mapeando a Elder Futhark...',
    convertingStepMeaning: 'Interpretando significados...',
    convertingStepDone: '¡Conversión mística completa!',
    convertingDetailKoreanAnalyzePrefix: '"',
    convertingDetailKoreanAnalyzeSuffix: '" análisis fonético',
    convertingDetailEnglishValidatePrefix: '"',
    convertingDetailEnglishValidateSuffix: '" verificación ortográfica',
    convertingDetailRuneMapping: 'Convirtiendo cada letra en una runa antigua',
    convertingDetailMeaning: 'Analizando el simbolismo y significado de cada runa',
    convertingDetailDone: 'Un resultado lleno de sabiduría vikinga',

    // Rune result
    elderFutharkRunesLabel: 'Runas Elder Futhark',
    runeResultQuote: '"Estas runas reflejan el poder antiguo dentro de tu nombre."',
    copyErrorDesc: 'Ocurrió un error al copiar las runas.',
    imageErrorDesc: 'Ocurrió un error al generar la imagen.',
    viewRuneDetailsButton: 'Ver significados detallados de cada runa',
    conversionCompleteHint: '¡Conversión completa! Toca las runas para ver sus significados.',
    egyptPromoTitle: 'Ver el traductor de jeroglíficos del Antiguo Egipto',
    egyptPromoSubtitle: 'Transforma tu nombre en la misteriosa escritura de los faraones',
    combinedMeaningEmpty: 'Un nombre lleno de poder misterioso.',
    combinedMeaningFallbackShort: 'Un nombre corto con gran energía.',
    combinedMeaningFallbackMedium: 'Un nombre equilibrado con poder y sabiduría.',
    combinedMeaningFallbackLong: 'Un nombre rico con un significado profundo.',
    combinedMeaningTemplateBothPrefix: '',
    combinedMeaningTemplateBothMiddle: ' como base, mostrando ',
    combinedMeaningTemplateBothSuffix: ' para alcanzar tus metas.',
    combinedMeaningTemplatePositiveSuffix: ' — un nombre bendecido con energía positiva.',
    combinedMeaningTemplatePersonalitySuffix: ' — un nombre resiliente y de carácter fuerte.',

    // Combined meaning themes
    'theme.success': 'Éxito',
    'theme.prosperity': 'Prosperidad',
    'theme.wisdom': 'Sabiduría',
    'theme.courage': 'Valentía',
    'theme.protection': 'Protección',
    'theme.luck': 'Suerte',
    'theme.strength': 'Fuerza',
    'theme.growth': 'Crecimiento',
    'theme.harmony': 'Armonía',
    'theme.balance': 'Equilibrio',
    'theme.creativity': 'Creatividad',
    'theme.progress': 'Progreso',
    'theme.victory': 'Victoria',
    'theme.hope': 'Esperanza',
    'theme.leadership': 'Liderazgo',
    'theme.communication': 'Comunicación',
    'theme.journey': 'Viaje',
    'theme.adventure': 'Aventura',
    'theme.change': 'Cambio',
    'theme.intuition': 'Intuición',
    'theme.patience': 'Paciencia',
    'theme.willpower': 'Voluntad',
    'theme.passion': 'Pasión',
    'theme.focus': 'Enfoque',
    'theme.completion': 'Culminación',
    'theme.insight': 'Perspicacia',

    // Rune reference
    runeTableTitle: 'Tabla de runas Elder Futhark',
    runeTableExpand: 'Ver las 24 runas',
    runeTableCollapse: 'Contraer',
    runeTableHint: 'Toca una runa para ver su significado',

    // Rune explanation summary
    runePowerTitle: 'El poder de las runas en tu nombre',
    runePowerDescPrefix: 'Estas ',
    runePowerDescSuffix: ' runas se combinan para otorgar a tu nombre sabiduría y fuerza vikinga.',
    runePowerDescSecond: 'Cada runa no es solo una letra, sino un símbolo sagrado con energía mística.',

    // Historical info
    historyTitle: 'Historia de las runas',
    historyWhatTitle: '¿Qué son las runas?',
    historyWhatBody: 'Las runas son un sistema de escritura antiguo usado por pueblos germánicos. La palabra “runa” proviene del nórdico antiguo “rún”, que significa “secreto” o “susurro”. Los vikingos las grababan en piedra, madera y metal para registros y rituales.',
    historyElderTitle: 'Elder Futhark',
    historyElderBody: 'El alfabeto rúnico más antiguo, compuesto por 24 caracteres. Se utilizó aproximadamente entre los siglos II y VIII y sirvió como base para sistemas posteriores. El nombre “Futhark” proviene de sus primeras seis letras (ᚠᚢᚦᚨᚱᚲ).',
    historyMeaningTitle: 'Significados de las runas',
    historyMeaningBody: 'Cada runa tiene simbolismo además de sonido. Los vikingos creían que las runas tenían poder mágico y las usaban para adivinación y amuletos. A menudo representan fuerzas de la naturaleza, dioses y experiencias humanas.',

    // Share modal
    shareModalSubtitle: 'Comparte tu conversión de runas con amigos',
    shareCopyLinkButton: 'Copiar enlace',
    shareLinkLabel: 'Enlace para compartir',
    shareCta: '¡Convierte más nombres con el convertidor de runas vikingas!',
    shareLinkCopiedTitle: 'Enlace copiado',
    shareLinkCopiedDesc: '¡Compártelo con amigos!',
    shareTextCopiedTitle: 'Texto copiado',
    shareTextCopiedDesc: 'El resultado se copió al portapapeles.',
    shareCopyFailedDesc: 'Ocurrió un error al copiar.',
    shareDownloadSuccessTitle: 'Imagen descargada',
    shareDownloadSuccessDesc: 'Se guardó tu conversión.',
    shareDownloadFailedDesc: 'Ocurrió un error al generar la imagen.',
    shareImageTitle: 'Conversión de runas vikingas',
    shareImageDesc: 'Runas Elder Futhark vikingas',
    shareImageFooter: 'Rune Converter',

    // Footer info
    footerInfoRunesTitle: 'Información de runas',
    footerInfoRunesDesc: 'La conversión se basa en el significado y simbolismo de las 24 runas Elder Futhark.',
    footerInfoKoreanSupportTitle: 'Soporte de coreano',
    footerInfoKoreanSupportDesc: 'Soporta romanización y permite editar el nombre en alfabeto.',
    footerInfoFreeTitle: 'Servicio gratuito',
    footerInfoFreeDesc: 'Todas las funciones de conversión y compartir son completamente gratuitas.',
    footerReferenceLabel: 'Referencias:',
    footerReferenceNamu: 'Namu Wiki: Runas',
    footerReferenceWiki: 'Wikipedia: Elder Futhark',

    // Connection status
    connectionStatusTitle: 'Estado de conexión del servidor',
    connectionStatusChecking: 'Comprobando',
    connectionStatusConnected: 'Conectado',
    connectionStatusDisconnected: 'Desconectado',
    connectionCheckingMessage: 'Comprobando conexión...',
    connectionCheckErrorPrefix: 'Error al comprobar la conexión: ',
    localApiServerLabel: 'Servidor API local:',
    connectionCheckingButton: 'Comprobando...',
    connectionRecheckButton: 'Volver a comprobar',
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
    nativeName: 'Nom en langue originale',
    romanizedName: 'Nom romanisé (modifiable)',
    koreanPlaceholder: 'ex., 조휘민, 김민수, 박지연...',
    englishPlaceholder: 'ex., jowheemin, kimminsu, parkjiyeon...',
    nativePlaceholder: 'ex. : François, Cœur, Müller...',
    romanizedPlaceholder: 'ex. : francois, coeur, muller...',
    convertButton: 'Convertir en Runes',
    convertingButton: 'Conversion mystique en cours...',
    tipText: 'Vous pouvez modifier le nom anglais converti automatiquement. Ajustez-le pour correspondre à votre prononciation ou romanisation préférée.',
    romanizedTipText: 'Vous pouvez modifier la romanisation auto-remplie pour correspondre à votre passeport ou à vos préférences.',
    romanizedAutoUnavailable: 'Certains caractères ne peuvent pas être romanisés automatiquement. Saisissez ci-dessous l’orthographe souhaitée.',

    // Input (non-Korean languages)
    alphabetName: 'Votre nom (Alphabet)',
    alphabetPlaceholder: "ex. : José, François, Müller, O'Connor... (lettres latines)",
    alphabetTipText: 'Ce champ accepte les lettres latines (avec accents) ainsi que les espaces/tirets/apostrophes. (Pas de chiffres ni de caractères CJK)',
    tipLabel: 'Astuce :',
    englishEnableHint: 'Saisissez votre nom pour activer la conversion.',

    // Validation
    englishRequiredTitle: 'Nom requis',
    englishRequiredDesc: 'Veuillez saisir votre nom avec l’alphabet (A–Z).',
    englishInvalidTitle: 'Saisie invalide',
    englishInvalidDesc: 'Seules les lettres latines (avec accents) ainsi que les espaces/tirets/apostrophes sont autorisées.',
    
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

    // Converting page
    convertingTitle: 'Conversion en runes',
    convertingSubtitle: 'La puissance viking ancestrale transforme votre nom',
    convertingCompleteLabel: 'Terminé',
    convertingQuote: '"Les runes ne sont pas de simples lettres, mais des symboles sacrés portant les secrets de l’univers."',
    convertingQuoteAuthor: '- Légende nordique ancienne',
    convertingStepKoreanAnalyze: 'Analyse du nom...',
    convertingStepEnglishValidate: 'Validation du nom en alphabet...',
    convertingStepRuneMapping: 'Correspondance avec l’Elder Futhark...',
    convertingStepMeaning: 'Interprétation des significations...',
    convertingStepDone: 'Conversion mystique terminée !',
    convertingDetailKoreanAnalyzePrefix: '"',
    convertingDetailKoreanAnalyzeSuffix: '" analyse phonétique',
    convertingDetailEnglishValidatePrefix: '"',
    convertingDetailEnglishValidateSuffix: '" vérification de l’orthographe',
    convertingDetailRuneMapping: 'Conversion de chaque lettre en rune ancienne',
    convertingDetailMeaning: 'Analyse du symbolisme et du sens de chaque rune',
    convertingDetailDone: 'Un résultat imprégné de sagesse viking',

    // Rune result
    elderFutharkRunesLabel: 'Runes Elder Futhark',
    runeResultQuote: '"Ces runes reflètent la puissance ancienne de votre nom."',
    copyErrorDesc: 'Une erreur est survenue lors de la copie des runes.',
    imageErrorDesc: 'Une erreur est survenue lors de la génération de l’image.',
    viewRuneDetailsButton: 'Voir le sens détaillé de chaque rune',
    conversionCompleteHint: 'Conversion terminée ! Touchez les runes pour voir les détails.',
    egyptPromoTitle: 'Voir le traducteur de hiéroglyphes égyptiens',
    egyptPromoSubtitle: 'Transformez votre nom dans l’écriture mystérieuse des pharaons',
    combinedMeaningEmpty: 'Un nom rempli de puissance mystérieuse.',
    combinedMeaningFallbackShort: 'Un nom court avec une forte énergie.',
    combinedMeaningFallbackMedium: 'Un nom équilibré, alliant force et sagesse.',
    combinedMeaningFallbackLong: 'Un nom riche au sens profond et multiple.',
    combinedMeaningTemplateBothPrefix: '',
    combinedMeaningTemplateBothMiddle: ' comme base, révélant ',
    combinedMeaningTemplateBothSuffix: ' pour atteindre vos objectifs.',
    combinedMeaningTemplatePositiveSuffix: ' — un nom béni d’une énergie positive.',
    combinedMeaningTemplatePersonalitySuffix: ' — un nom résilient au caractère fort.',

    // Combined meaning themes
    'theme.success': 'Réussite',
    'theme.prosperity': 'Prospérité',
    'theme.wisdom': 'Sagesse',
    'theme.courage': 'Courage',
    'theme.protection': 'Protection',
    'theme.luck': 'Chance',
    'theme.strength': 'Force',
    'theme.growth': 'Croissance',
    'theme.harmony': 'Harmonie',
    'theme.balance': 'Équilibre',
    'theme.creativity': 'Créativité',
    'theme.progress': 'Progrès',
    'theme.victory': 'Victoire',
    'theme.hope': 'Espoir',
    'theme.leadership': 'Leadership',
    'theme.communication': 'Communication',
    'theme.journey': 'Voyage',
    'theme.adventure': 'Aventure',
    'theme.change': 'Changement',
    'theme.intuition': 'Intuition',
    'theme.patience': 'Patience',
    'theme.willpower': 'Volonté',
    'theme.passion': 'Passion',
    'theme.focus': 'Concentration',
    'theme.completion': 'Accomplissement',
    'theme.insight': 'Clairvoyance',

    // Rune reference
    runeTableTitle: 'Table des runes Elder Futhark',
    runeTableExpand: 'Voir les 24 runes',
    runeTableCollapse: 'Réduire',
    runeTableHint: 'Touchez une rune pour voir sa signification',

    // Rune explanation summary
    runePowerTitle: 'La puissance des runes dans votre nom',
    runePowerDescPrefix: 'Ces ',
    runePowerDescSuffix: ' runes se combinent pour donner à votre nom la sagesse et la force vikings.',
    runePowerDescSecond: 'Chaque rune n’est pas qu’une lettre, mais un symbole sacré porteur d’énergie mystique.',

    // Historical info
    historyTitle: 'Histoire des runes',
    historyWhatTitle: 'Que sont les runes ?',
    historyWhatBody: 'Les runes sont un système d’écriture ancien utilisé par les peuples germaniques. Le mot “rune” vient du vieux norrois “rún”, signifiant “secret” ou “murmure”. Les Vikings gravaient des runes sur la pierre, le bois et le métal pour les archives et les rituels.',
    historyElderTitle: 'Elder Futhark',
    historyElderBody: 'Le plus ancien alphabet runique, composé de 24 caractères. Utilisé approximativement du IIe au VIIIe siècle, il a servi de base aux runes ultérieures. Le nom “Futhark” vient de ses six premières lettres (ᚠᚢᚦᚨᚱᚲ).',
    historyMeaningTitle: 'Signification des runes',
    historyMeaningBody: 'Chaque rune porte un symbolisme au-delà de son son. Les Vikings croyaient aux pouvoirs magiques des runes et les utilisaient pour la divination et la protection. Elles représentent souvent des forces de la nature, des dieux et l’expérience humaine.',

    // Share modal
    shareModalSubtitle: 'Partagez votre conversion de runes avec vos amis',
    shareCopyLinkButton: 'Copier le lien',
    shareLinkLabel: 'Lien de partage',
    shareCta: 'Convertissez d’autres prénoms avec le convertisseur de runes vikings !',
    shareLinkCopiedTitle: 'Lien copié',
    shareLinkCopiedDesc: 'Partagez-le avec vos amis !',
    shareTextCopiedTitle: 'Texte copié',
    shareTextCopiedDesc: 'Le résultat a été copié dans le presse-papiers.',
    shareCopyFailedDesc: 'Une erreur est survenue lors de la copie.',
    shareDownloadSuccessTitle: 'Image téléchargée',
    shareDownloadSuccessDesc: 'Votre conversion a été enregistrée.',
    shareDownloadFailedDesc: 'Une erreur est survenue lors de la génération de l’image.',
    shareImageTitle: 'Conversion de runes vikings',
    shareImageDesc: 'Runes Elder Futhark vikings',
    shareImageFooter: 'Rune Converter',

    // Footer info
    footerInfoRunesTitle: 'Infos sur les runes',
    footerInfoRunesDesc: 'La conversion est basée sur le sens et le symbolisme des 24 runes Elder Futhark.',
    footerInfoKoreanSupportTitle: 'Support coréen',
    footerInfoKoreanSupportDesc: 'Prend en charge la romanisation et permet de modifier le nom en alphabet.',
    footerInfoFreeTitle: 'Service gratuit',
    footerInfoFreeDesc: 'Toutes les fonctionnalités de conversion et de partage sont entièrement gratuites.',
    footerReferenceLabel: 'Références :',
    footerReferenceNamu: 'Namu Wiki : Runes',
    footerReferenceWiki: 'Wikipédia : Elder Futhark',

    // Connection status
    connectionStatusTitle: 'État de connexion au serveur',
    connectionStatusChecking: 'Vérification',
    connectionStatusConnected: 'Connecté',
    connectionStatusDisconnected: 'Déconnecté',
    connectionCheckingMessage: 'Vérification de la connexion...',
    connectionCheckErrorPrefix: 'Erreur lors de la vérification : ',
    localApiServerLabel: 'Serveur API local :',
    connectionCheckingButton: 'Vérification...',
    connectionRecheckButton: 'Revérifier',
  }
  ,
  de: {
    // Header
    title: 'Runen Konverter & Generator',
    subtitle: 'Übersetze deinen Namen in historisch genaue Elder-Futhark-Runen – kostenlos und sofort.',

    // Features (fallbacks will fill anything missing)
    feature1Title: 'Akkurate Runen-Konvertierung',
    feature1Desc: 'Phonetische Umwandlung für eine natürlich klingende Rune-Schreibweise',
    feature2Title: 'Runen-Bedeutung',
    feature2Desc: 'Entdecke Symbolik und Bedeutungen der einzelnen Runen',
    feature3Title: 'Einfach teilen',
    feature3Desc: 'Bild speichern & in Social Media teilen',

    // Input
    inputTitle: 'Name eingeben',
    inputSubtitle: 'Gib deinen Namen ein und erzeuge Wikinger-Runen (Elder Futhark)',
    alphabetName: 'Name (Lateinisches Alphabet)',
    alphabetPlaceholder: "z.B. Müller, Franziska, Jörg, O'Connor...",
    convertButton: 'In Runen umwandeln',
  }
};

export function getTranslation(language: Language, key: string): string {
  // Try to get translation for the requested language
  let value = getNestedTranslation(translations[language], key);
  
  // If not found, fallback to English first (best UX for non-Korean locales)
  if (value === key && language !== 'en') {
    value = getNestedTranslation(translations.en, key);
  }
  
  // If still not found, fallback to Korean
  if (value === key && language !== 'ko') {
    value = getNestedTranslation(translations.ko, key);
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