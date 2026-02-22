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
    
    // Converting Page
    convertingTitle: '룬 문자 변환 중',
    convertingSubtitle: '고대 바이킹의 신비로운 힘을 불러오고 있습니다...',
    convertingCompleteLabel: '완료',
    convertingStepKoreanAnalyze: '한국어 이름 분석',
    convertingDetailKoreanAnalyzePrefix: '',
    convertingDetailKoreanAnalyzeSuffix: '의 발음을 분석하고 있습니다',
    convertingStepEnglishValidate: '영문 표기 검증',
    convertingDetailEnglishValidatePrefix: '',
    convertingDetailEnglishValidateSuffix: '의 정확성을 확인하고 있습니다',
    convertingStepRuneMapping: '룬 문자 매핑',
    convertingDetailRuneMapping: '각 음소를 적합한 룬 문자로 변환하고 있습니다',
    convertingStepMeaning: '의미 해석',
    convertingDetailMeaning: '각 룬의 상징과 의미를 분석하고 있습니다',
    convertingStepDone: '변환 완료',
    convertingDetailDone: '당신의 룬 문자가 준비되었습니다!',
    convertingQuote: '"룬은 단순한 문자가 아니라, 고대의 지혜와 힘을 담은 신성한 상징이다"',
    convertingQuoteAuthor: '- 고대 북유럽 경전',
    
    // Results
    resultTitle: '룬 문자 변환 결과',
    resultSubtitle: '고대 바이킹의 신비로운 힘이 담긴 당신의 이름',
    backToHome: '홈으로 돌아가기',
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
    
    // Image Labels
    imageTitle: '바이킹 룬 문자 변환',
    imageDescription: '고대 엘더 푸타르크 룬',
    imageFooter: '룬 문자 변환기',
    
    // ShareModal
    shareTitle: '룬 변환 결과 공유',
    shareDescription: '룬 문자 변환 결과를 친구들과 공유해보세요',
    copyTextButton: '텍스트 복사',
    copyTextSuccess: '텍스트가 복사되었습니다',
    copyTextSuccessDesc: '클립보드에 룬 변환 결과가 복사되었습니다.',
    copyTextFailed: '복사 실패',
    copyTextFailedDesc: '텍스트 복사 중 오류가 발생했습니다.',
    downloadImageButton: '이미지 저장',
    downloadImageSuccess: '이미지 다운로드 완료',
    downloadImageSuccessDesc: '룬 문자 변환 결과가 저장되었습니다.',
    downloadImageFailed: '다운로드 실패',
    downloadImageFailedDesc: '이미지 생성 중 오류가 발생했습니다.',
    socialMediaShareTitle: '소셜 미디어 공유',
    shareLinkTitle: '공유 링크',
    
    // RuneResult  
    conversionCompleteMessage: '변환 완료! 위의 룬들을 클릭하여 자세한 의미를 확인해보세요.',
    runeQuote: '"이 룬들은 당신의 이름에 담긴 고대의 힘을 나타냅니다"',
    combinedMeaningDefault: '신비로운 힘을 담은 이름입니다.',
    combinedMeaningShort: '간결하면서도 강력한 에너지를 지니 이름입니다.',
    combinedMeaningMedium: '균형잡힌 힘과 지혜를 겸비한 이름입니다.',
    combinedMeaningLong: '복합적이고 깊은 의미를 담은 풍부한 이름입니다.',
    clickForDetails: '클릭하면 상세보기',
    quickViewTitle: '빠른 보기 - 모든 룬 의미',
    
    // Footer
    footerTitle: '바이킹 룬 문자 변환기',
    footerDesc: '고대 바이킹 문화와 엘더 푸타르크 룬 문자의 신비로운 아름다움을 현대에 전하며, 실제 당신의 이름에 담긴 고대의 힘을 발견하세요.',
    copyright: '© 2025 Rune Converter. Made with ❤️ for Viking culture enthusiasts.',
    bugReport: '버그 제보: jowheemin@gmail.com',
    
    // FAQ
    faqTitle: '자주 묻는 질문',
    faqQ1: '엘더 푸타르크란 무엇인가요?',
    faqA1: '엘더 푸타르크는 1-8세기에 바이킹과 게르만 민족이 사용했던 가장 오래된 룬 문자 체계입니다. 24개의 문자로 구성되어 있으며, 각 룬은 고유한 소리와 상징적 의미를 가지고 있습니다.',
    faqQ2: '이 변환기는 역사적으로 정확한가요?',
    faqA2: '네, 저희 변환기는 실제 엘더 푸타르크 룬 문자의 음가와 사용법을 기반으로 합니다. 다만 현대 이름을 고대 문자로 변환하는 것이므로 발음을 최대한 가깝게 맞추는 방식을 사용합니다.',
    faqQ3: '문신에 사용해도 되나요?',
    faqA3: '물론입니다! 많은 분들이 룬 문자 변환 결과를 문신 디자인으로 사용하십니다. 다만 영구적인 문신 전에는 의미와 철자를 다시 한번 확인하시는 것을 권장합니다.',
    faqQ4: '각 룬의 의미는 무엇인가요?',
    faqA4: '변환 후 "각 룬의 세부 의미 보기" 버튼을 누르면 당신의 이름을 구성하는 각 룬의 의미, 상징, 점술적 해석을 자세히 볼 수 있습니다.',
    faqQ5: '다른 변환기와 어떻게 다른가요?',
    faqA5: '저희는 단순 문자 대체가 아닌 발음 기반 변환을 제공하며, 각 룬의 역사적 의미와 상징을 상세히 설명합니다. 또한 한국어, 중국어, 일본어 등 다양한 언어를 지원합니다.',
    
    // Rune Meanings Page
    runeMeaningsTitle: '엘더 푸타르크 룬 문자 의미',
    runeMeaningsSubtitle: '24개 고대 바이킹 룬의 의미, 상징, 역사를 알아보세요',
    runeMeaningsDescription: '각 룬 문자는 단순한 글자가 아니라 깊은 상징적 의미를 담고 있습니다. 고대 북유럽에서는 룬을 문자뿐만 아니라 점술과 마법에도 사용했습니다.',
    homeButton: '홈으로',
    exploreRuneMeaningsTitle: '모든 룬 문자의 의미 알아보기',
    exploreRuneMeaningsDesc: '24개 엘더 푸타르크 룬의 의미, 상징, 역사를 상세히 알아보세요.',
    viewRuneMeaningsButton: '룬 의미 보기',
    convertYourNameTitle: '당신의 이름을 룬 문자로 변환해보세요',
    convertYourNameDesc: '각 룬의 의미를 배웠으니 이제 당신의 이름에 어떤 룬이 포함되는지 확인해보세요.',
    convertForFreeButton: '무료로 변환하기',
    phonetic: '발음',
    keywords: '키워드',
    learnMore: '더 알아보기',
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
    
    // Converting Page
    convertingTitle: 'Converting to Runes',
    convertingSubtitle: 'Invoking the mystical power of ancient Vikings...',
    convertingCompleteLabel: 'Complete',
    convertingStepKoreanAnalyze: 'Analyzing Korean Name',
    convertingDetailKoreanAnalyzePrefix: 'Analyzing pronunciation of ',
    convertingDetailKoreanAnalyzeSuffix: '',
    convertingStepEnglishValidate: 'Validating English Notation',
    convertingDetailEnglishValidatePrefix: 'Verifying accuracy of ',
    convertingDetailEnglishValidateSuffix: '',
    convertingStepRuneMapping: 'Mapping to Runes',
    convertingDetailRuneMapping: 'Converting each phoneme to appropriate rune characters',
    convertingStepMeaning: 'Interpreting Meaning',
    convertingDetailMeaning: 'Analyzing symbolism and meaning of each rune',
    convertingStepDone: 'Conversion Complete',
    convertingDetailDone: 'Your rune characters are ready!',
    convertingQuote: '"Runes are not mere letters, but sacred symbols containing ancient wisdom and power"',
    convertingQuoteAuthor: '- Ancient Norse Lore',
    
    // Results
    resultTitle: 'Rune Conversion Result',
    resultSubtitle: 'Your name imbued with ancient Viking mystical power',
    backToHome: 'Back to Home',
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
    
    // Image Labels
    imageTitle: 'Viking Rune Conversion',
    imageDescription: 'Ancient Elder Futhark Runes',
    imageFooter: 'Rune Converter',
    
    // ShareModal
    shareTitle: 'Share Rune Result',
    shareDescription: 'Share your rune conversion result with friends',
    copyTextButton: 'Copy Text',
    copyTextSuccess: 'Text copied successfully',
    copyTextSuccessDesc: 'Rune conversion result copied to clipboard.',
    copyTextFailed: 'Copy failed',
    copyTextFailedDesc: 'An error occurred while copying text.',
    downloadImageButton: 'Save Image',
    downloadImageSuccess: 'Image downloaded successfully',
    downloadImageSuccessDesc: 'Rune conversion result saved.',
    downloadImageFailed: 'Download failed',
    downloadImageFailedDesc: 'An error occurred while generating image.',
    socialMediaShareTitle: 'Social Media Sharing',
    shareLinkTitle: 'Share Link',
    
    // RuneResult
    conversionCompleteMessage: 'Conversion complete! Click on the runes above to see detailed meanings.',
    runeQuote: '"These runes represent the ancient power within your name"',
    combinedMeaningDefault: 'A name imbued with mystical power.',
    combinedMeaningShort: 'A concise yet powerful name with strong energy.',
    combinedMeaningMedium: 'A balanced name combining strength and wisdom.',
    combinedMeaningLong: 'A rich name carrying deep and complex meanings.',
    clickForDetails: 'Click for full details',
    quickViewTitle: 'Quick View - All Rune Meanings',
    
    // Footer
    footerTitle: 'Viking Rune Converter',
    footerDesc: 'Bringing the mystical beauty of authentic Viking culture and Elder Futhark runes to the modern world. Discover the real ancient power within your name.',
    copyright: '© 2025 Rune Converter. Made with ❤️ for Viking culture enthusiasts.',
    bugReport: 'Report bugs: jowheemin@gmail.com',
    
    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faqQ1: 'What is Elder Futhark?',
    faqA1: 'Elder Futhark is the oldest runic alphabet system used by Vikings and Germanic peoples from the 1st to 8th centuries. It consists of 24 characters, each with unique sounds and symbolic meanings.',
    faqQ2: 'Is this converter historically accurate?',
    faqA2: 'Yes, our converter is based on the actual phonetic values and usage of Elder Futhark runes. Since we\'re converting modern names to ancient script, we match pronunciation as closely as possible.',
    faqQ3: 'Can I use this for tattoos?',
    faqA3: 'Absolutely! Many people use our rune conversions for tattoo designs. However, we recommend double-checking the meaning and spelling before getting permanent ink.',
    faqQ4: 'What do the runes mean?',
    faqA4: 'After conversion, click "View Detailed Meanings" to see the meaning, symbolism, and divinatory interpretation of each rune in your name.',
    faqQ5: 'How is this different from other converters?',
    faqA5: 'We provide pronunciation-based conversion rather than simple character substitution, with detailed historical meanings and symbolism. We also support multiple languages including Korean, Chinese, and Japanese.',
    
    // Rune Meanings Page
    runeMeaningsTitle: 'Elder Futhark Rune Meanings',
    runeMeaningsSubtitle: 'Discover the meanings, symbolism, and history of all 24 ancient Viking runes',
    runeMeaningsDescription: 'Each rune is not just a letter but carries deep symbolic meaning. In ancient Norse culture, runes were used not only for writing but also for divination and magic.',
    homeButton: 'Home',
    exploreRuneMeaningsTitle: 'Explore All Rune Meanings',
    exploreRuneMeaningsDesc: 'Discover the detailed meanings, symbolism, and history of all 24 Elder Futhark runes.',
    viewRuneMeaningsButton: 'View Rune Meanings',
    convertYourNameTitle: 'Convert Your Name to Runes',
    convertYourNameDesc: 'Now that you know the meanings, discover which runes appear in your name.',
    convertForFreeButton: 'Convert for Free',
    phonetic: 'Phonetic',
    keywords: 'Keywords',
    learnMore: 'Learn More',
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
    // Converting Page
    convertingTitle: 'ルーン文字変換中',
    convertingSubtitle: '古代バイキングの神祕的な力を呼び起こしています...',
    convertingCompleteLabel: '完了',
    convertingStepKoreanAnalyze: '韓国語名前分析',
    convertingDetailKoreanAnalyzePrefix: '',
    convertingDetailKoreanAnalyzeSuffix: 'の発音を分析しています',
    convertingStepEnglishValidate: '英語表記検証',
    convertingDetailEnglishValidatePrefix: '',
    convertingDetailEnglishValidateSuffix: 'の正確性を確認しています',
    convertingStepRuneMapping: 'ルーン文字マッピング',
    convertingDetailRuneMapping: '各音素を適切なルーン文字に変換しています',
    convertingStepMeaning: '意味解釈',
    convertingDetailMeaning: '各ルーンの象徴と意味を分析しています',
    convertingStepDone: '変換完了',
    convertingDetailDone: 'あなたのルーン文字が準備できました！',
    convertingQuote: '「ルーンは単なる文字ではなく、古代の知恵と力を含む神聖な象徴である」',
    convertingQuoteAuthor: '- 古代北欧伝承',    
    // Results
    resultTitle: 'ルーン文字変換結果',
    resultSubtitle: '古代バイキングの神秘的な力が宿ったあなたの名前',    backToHome: 'ホームに戻る',    combinedMeaning: '総合的な意味',
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
    
    // Image Labels
    imageTitle: 'バイキングルーン変換',
    imageDescription: '古代エルダーフサルクルーン',
    imageFooter: 'ルーン文字変換',
    
    // ShareModal
    shareTitle: 'ルーン変換結果の共有',
    shareDescription: 'ルーン文字変換結果を友達と共有しましょう',
    copyTextButton: 'テキストをコピー',
    copyTextSuccess: 'テキストがコピーされました',
    copyTextSuccessDesc: 'ルーン変換結果がクリップボードにコピーされました。',
    copyTextFailed: 'コピー失敗',
    copyTextFailedDesc: 'テキストのコピー中にエラーが発生しました。',
    downloadImageButton: '画像を保存',
    downloadImageSuccess: '画像ダウンロード完了',
    downloadImageSuccessDesc: 'ルーン文字変換結果が保存されました。',
    downloadImageFailed: 'ダウンロード失敗',
    downloadImageFailedDesc: '画像生成中にエラーが発生しました。',
    socialMediaShareTitle: 'ソーシャルメディア共有',
    shareLinkTitle: '共有リンク',
    
    // RuneResult
    conversionCompleteMessage: '変換完了！上のルーンをクリックして詳しい意味を確認してください。',
    runeQuote: '「これらのルーンはあなたの名前に秘められた古代の力を表しています」',
    combinedMeaningDefault: '神秘的な力を内包する名前です。',
    combinedMeaningShort: '簡潔でありながら強力なエネルギーを持つ名前です。',
    combinedMeaningMedium: '力と知恵を兼ね備えたバランスの良い名前です。',
    combinedMeaningLong: '複雑で深い意味を持つ豊かな名前です。',
    clickForDetails: 'クリックで詳細を表示',
    quickViewTitle: 'クイックビュー - すべてのルーンの意味',
    
    // Rune Meanings Page
    homeButton: 'ホーム',
    exploreRuneMeaningsTitle: 'すべてのルーン文字の意味を探る',
    exploreRuneMeaningsDesc: '24個のエルダー・フサルクのルーンの意味、象徴、歴史を詳しく学びましょう。',
    viewRuneMeaningsButton: 'ルーンの意味を見る',
    convertYourNameTitle: 'あなたの名前をルーン文字に変換',
    convertYourNameDesc: 'それぞれのルーンの意味を学んだので、あなたの名前にどのルーンが含まれるか確認してみましょう。',
    convertForFreeButton: '無料で変換',
    
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
    
    // Converting Page
    convertingTitle: '符文转换中',
    convertingSubtitle: '正在召唤古代维京人的神秘力量...',
    convertingCompleteLabel: '完成',
    convertingStepKoreanAnalyze: '分析韩语姓名',
    convertingDetailKoreanAnalyzePrefix: '正在分析',
    convertingDetailKoreanAnalyzeSuffix: '的发音',
    convertingStepEnglishValidate: '验证英文表达',
    convertingDetailEnglishValidatePrefix: '正在验证',
    convertingDetailEnglishValidateSuffix: '的准确性',
    convertingStepRuneMapping: '符文映射',
    convertingDetailRuneMapping: '将每个音素转换为适当的符文字符',
    convertingStepMeaning: '解释含义',
    convertingDetailMeaning: '分析每个符文的象征和含义',
    convertingStepDone: '转换完成',
    convertingDetailDone: '您的符文字符已准备好！',
    convertingQuote: '「符文不仅是字母，而是包含古代智慧和力量的神圣象征」',
    convertingQuoteAuthor: '- 古代北欧传承',
    
    // Results
    resultTitle: '符文转换结果',
    resultSubtitle: '蕴含古代维京神秘力量的您的姓名',
    backToHome: '返回首页',
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
    
    // Image Labels
    imageTitle: '维京符文转换',
    imageDescription: '古代长老福萨克符文',
    imageFooter: '符文转换器',
    
    // ShareModal
    shareTitle: '分享符文结果',
    shareDescription: '与朋友分享您的符文转换结果',
    copyTextButton: '复制文本',
    copyTextSuccess: '文本已复制',
    copyTextSuccessDesc: '符文转换结果已复制到剪贴板。',
    copyTextFailed: '复制失败',
    copyTextFailedDesc: '复制文本时发生错误。',
    downloadImageButton: '保存图片',
    downloadImageSuccess: '图片下载完成',
    downloadImageSuccessDesc: '符文转换结果已保存。',
    downloadImageFailed: '下载失败',
    downloadImageFailedDesc: '生成图片时发生错误。',
    socialMediaShareTitle: '社交媒体分享',
    shareLinkTitle: '分享链接',
    
    // RuneResult
    conversionCompleteMessage: '转换完成！点击上方的符文查看详细含义。',
    runeQuote: '「这些符文代表您姓名中蕴含的古代力量」',
    combinedMeaningDefault: '充满神秘力量的姓名。',
    combinedMeaningShort: '简洁而强大的姓名，具有强烈的能量。',
    combinedMeaningMedium: '兼具力量与智慧的平衡姓名。',
    combinedMeaningLong: '蕴含深刻而复杂意义的丰富姓名。',
    clickForDetails: '点击查看详细信息',
    quickViewTitle: '快速查看 - 所有符文意义',
    
    // Rune Meanings Page
    homeButton: '首页',
    exploreRuneMeaningsTitle: '探索所有符文的含义',
    exploreRuneMeaningsDesc: '详细了解24个古老弗萨克符文的含义、象征和历史。',
    viewRuneMeaningsButton: '查看符文含义',
    convertYourNameTitle: '将您的姓名转换为符文',
    convertYourNameDesc: '既然您已经了解了每个符文的含义，现在来看看您的姓名中包含哪些符文。',
    convertForFreeButton: '免费转换',
    
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
    
    // Converting Page
    convertingTitle: 'Convirtiendo a Runas',
    convertingSubtitle: 'Invocando el poder místico de los antiguos vikingos...',
    convertingCompleteLabel: 'Completo',
    convertingStepKoreanAnalyze: 'Analizando Nombre Coreano',
    convertingDetailKoreanAnalyzePrefix: 'Analizando la pronunciación de ',
    convertingDetailKoreanAnalyzeSuffix: '',
    convertingStepEnglishValidate: 'Validando Notación Inglesa',
    convertingDetailEnglishValidatePrefix: 'Verificando la exactitud de ',
    convertingDetailEnglishValidateSuffix: '',
    convertingStepRuneMapping: 'Mapeando Runas',
    convertingDetailRuneMapping: 'Convirtiendo cada fonema en caracteres rúnicos apropiados',
    convertingStepMeaning: 'Interpretando Significado',
    convertingDetailMeaning: 'Analizando el simbolismo y significado de cada runa',
    convertingStepDone: 'Conversión Completa',
    convertingDetailDone: '¡Tus caracteres rúnicos están listos!',
    convertingQuote: '"Las runas no son meras letras, sino símbolos sagrados que contienen sabiduría y poder antiguos"',
    convertingQuoteAuthor: '- Tradición Nórdica Antigua',
    
    // Results
    resultTitle: 'Resultado de Conversión de Runas',
    resultSubtitle: 'Tu nombre imbuido con el poder místico vikingo ancestral',
    backToHome: 'Volver al Inicio',
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
    
    // Image Labels
    imageTitle: 'Conversión de Runas Vikingas',
    imageDescription: 'Runas Elder Futhark Antiguas',
    imageFooter: 'Convertidor de Runas',
    
    // ShareModal
    shareTitle: 'Compartir Resultado de Runas',
    shareDescription: 'Comparte tu resultado de conversión de runas con amigos',
    copyTextButton: 'Copiar Texto',
    copyTextSuccess: 'Texto copiado exitosamente',
    copyTextSuccessDesc: 'Resultado de conversión de runas copiado al portapapeles.',
    copyTextFailed: 'Fallo al copiar',
    copyTextFailedDesc: 'Ocurrió un error al copiar el texto.',
    downloadImageButton: 'Guardar Imagen',
    downloadImageSuccess: 'Imagen descargada exitosamente',
    downloadImageSuccessDesc: 'Resultado de conversión de runas guardado.',
    downloadImageFailed: 'Fallo en la descarga',
    downloadImageFailedDesc: 'Ocurrió un error al generar la imagen.',
    socialMediaShareTitle: 'Compartir en Redes Sociales',
    shareLinkTitle: 'Enlace para Compartir',
    
    // RuneResult
    conversionCompleteMessage: '¡Conversión completa! Haz clic en las runas de arriba para ver significados detallados.',
    runeQuote: '"Estas runas representan el poder ancestral dentro de tu nombre"',
    combinedMeaningDefault: 'Un nombre imbuido con poder místico.',
    combinedMeaningShort: 'Un nombre conciso pero poderoso con fuerte energía.',
    combinedMeaningMedium: 'Un nombre equilibrado que combina fuerza y sabiduría.',
    combinedMeaningLong: 'Un nombre rico que lleva significados profundos y complejos.',
    clickForDetails: 'Clic para ver detalles completos',
    quickViewTitle: 'Vista Rápida - Todos los Significados',
    
    // Rune Meanings Page
    homeButton: 'Inicio',
    exploreRuneMeaningsTitle: 'Explorar Todos los Significados de las Runas',
    exploreRuneMeaningsDesc: 'Descubre los significados, simbolismo e historia detallados de las 24 runas Elder Futhark.',
    viewRuneMeaningsButton: 'Ver Significados de Runas',
    convertYourNameTitle: 'Convierte Tu Nombre a Runas',
    convertYourNameDesc: 'Ahora que has aprendido los significados, descubre qué runas aparecen en tu nombre.',
    convertForFreeButton: 'Convertir Gratis',
    
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
    
    // Converting Page
    convertingTitle: 'Conversion en Runes',
    convertingSubtitle: 'Invoquant le pouvoir mystique des anciens Vikings...',
    convertingCompleteLabel: 'Terminé',
    convertingStepKoreanAnalyze: 'Analyse du Nom Coréen',
    convertingDetailKoreanAnalyzePrefix: 'Analyse de la prononciation de ',
    convertingDetailKoreanAnalyzeSuffix: '',
    convertingStepEnglishValidate: 'Validation de la Notation Anglaise',
    convertingDetailEnglishValidatePrefix: 'Vérification de l\'exactitude de ',
    convertingDetailEnglishValidateSuffix: '',
    convertingStepRuneMapping: 'Mappage des Runes',
    convertingDetailRuneMapping: 'Conversion de chaque phonème en caractères runiques appropriés',
    convertingStepMeaning: 'Interprétation du Sens',
    convertingDetailMeaning: 'Analyse du symbolisme et de la signification de chaque rune',
    convertingStepDone: 'Conversion Terminée',
    convertingDetailDone: 'Vos caractères runiques sont prêts !',
    convertingQuote: '"Les runes ne sont pas de simples lettres, mais des symboles sacrés contenant sagesse et pouvoir anciens"',
    convertingQuoteAuthor: '- Tradition Nordique Ancienne',
    
    // Results
    resultTitle: 'Résultat de Conversion des Runes',
    resultSubtitle: 'Votre nom imprégné du pouvoir mystique viking ancestral',
    backToHome: 'Retour à l’Accueil',
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
    
    // Image Labels
    imageTitle: 'Conversion de Runes Vikings',
    imageDescription: 'Runes Elder Futhark Anciennes',
    imageFooter: 'Convertisseur de Runes',
    
    // ShareModal
    shareTitle: 'Partager le Résultat des Runes',
    shareDescription: 'Partagez votre résultat de conversion de runes avec vos amis',
    copyTextButton: 'Copier le Texte',
    copyTextSuccess: 'Texte copié avec succès',
    copyTextSuccessDesc: 'Résultat de conversion de runes copié dans le presse-papiers.',
    copyTextFailed: 'Échec de la copie',
    copyTextFailedDesc: 'Une erreur s\'est produite lors de la copie du texte.',
    downloadImageButton: 'Enregistrer l\'Image',
    downloadImageSuccess: 'Image téléchargée avec succès',
    downloadImageSuccessDesc: 'Résultat de conversion de runes enregistré.',
    downloadImageFailed: 'Échec du téléchargement',
    downloadImageFailedDesc: 'Une erreur s\'est produite lors de la génération de l\'image.',
    socialMediaShareTitle: 'Partage sur les Réseaux Sociaux',
    shareLinkTitle: 'Lien de Partage',
    
    // RuneResult
    conversionCompleteMessage: 'Conversion terminée ! Cliquez sur les runes ci-dessus pour voir les significations détaillées.',
    runeQuote: '"Ces runes représentent le pouvoir ancestral dans votre nom"',
    combinedMeaningDefault: 'Un nom imprégné de pouvoir mystique.',
    combinedMeaningShort: 'Un nom concis mais puissant avec une forte énergie.',
    combinedMeaningMedium: 'Un nom équilibré combinant force et sagesse.',
    combinedMeaningLong: 'Un nom riche portant des significations profondes et complexes.',
    clickForDetails: 'Cliquez pour les détails complets',
    quickViewTitle: 'Aperçu Rapide - Toutes les Significations',
    
    // Rune Meanings Page
    homeButton: 'Accueil',
    exploreRuneMeaningsTitle: 'Explorer Toutes les Significations des Runes',
    exploreRuneMeaningsDesc: 'Découvrez les significations, le symbolisme et l\'histoire détaillés des 24 runes Elder Futhark.',
    viewRuneMeaningsButton: 'Voir les Significations',
    convertYourNameTitle: 'Convertissez Votre Nom en Runes',
    convertYourNameDesc: 'Maintenant que vous connaissez les significations, découvrez quelles runes apparaissent dans votre nom.',
    convertForFreeButton: 'Convertir Gratuitement',
    
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