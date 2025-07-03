// Korean to English romanization utility
// Based on Revised Romanization of Korean (RR) system

const koreanToRomanMap: { [key: string]: string } = {
  // 초성 (Initial consonants)
  'ㄱ': 'g', 'ㄴ': 'n', 'ㄷ': 'd', 'ㄹ': 'r', 'ㅁ': 'm',
  'ㅂ': 'b', 'ㅅ': 's', 'ㅇ': '', 'ㅈ': 'j', 'ㅊ': 'ch',
  'ㅋ': 'k', 'ㅌ': 't', 'ㅍ': 'p', 'ㅎ': 'h',
  'ㄲ': 'kk', 'ㄸ': 'tt', 'ㅃ': 'pp', 'ㅆ': 'ss', 'ㅉ': 'jj',
  
  // 중성 (Vowels)
  'ㅏ': 'a', 'ㅑ': 'ya', 'ㅓ': 'eo', 'ㅕ': 'yeo', 'ㅗ': 'o',
  'ㅛ': 'yo', 'ㅜ': 'u', 'ㅠ': 'yu', 'ㅡ': 'eu', 'ㅣ': 'i',
  'ㅐ': 'ae', 'ㅒ': 'yae', 'ㅔ': 'e', 'ㅖ': 'ye', 'ㅘ': 'wa',
  'ㅙ': 'wae', 'ㅚ': 'oe', 'ㅝ': 'wo', 'ㅞ': 'we', 'ㅟ': 'wi',
  'ㅢ': 'ui',
  
  // 종성 (Final consonants)
  'ㄱ_f': 'k', 'ㄴ_f': 'n', 'ㄷ_f': 't', 'ㄹ_f': 'l', 'ㅁ_f': 'm',
  'ㅂ_f': 'p', 'ㅅ_f': 't', 'ㅇ_f': 'ng', 'ㅈ_f': 't', 'ㅊ_f': 't',
  'ㅋ_f': 'k', 'ㅌ_f': 't', 'ㅍ_f': 'p', 'ㅎ_f': 't',
  'ㄲ_f': 'k', 'ㄳ_f': 'k', 'ㄵ_f': 'n', 'ㄶ_f': 'n', 'ㄺ_f': 'k',
  'ㄻ_f': 'm', 'ㄼ_f': 'l', 'ㄽ_f': 'l', 'ㄾ_f': 'l', 'ㄿ_f': 'p',
  'ㅀ_f': 'l', 'ㅄ_f': 'p', 'ㅆ_f': 't'
};

const initialConsonants = [
  'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

const vowels = [
  'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
];

const finalConsonants = [
  '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
];

// Common Korean name mappings for better accuracy
const nameSpecificMappings: { [key: string]: string } = {
  // Common surnames
  '김': 'kim',
  '이': 'lee',
  '박': 'park',
  '최': 'choi',
  '정': 'jung',
  '강': 'kang',
  '조': 'jo',

  '장': 'jang',
  '임': 'lim',
  '오': 'oh',
  '한': 'han',
  '신': 'shin',
  '서': 'seo',
  '권': 'kwon',
  '황': 'hwang',
  '안': 'ahn',
  '송': 'song',
  '전': 'jeon',
  '홍': 'hong',
  '고': 'go',
  '문': 'moon',
  '손': 'son',
  '양': 'yang',
  '배': 'bae',
  '백': 'baek',
  '허': 'heo',
  '유': 'yu',
  '남': 'nam',
  '심': 'sim',
  '노': 'noh',
  '하': 'ha',
  '곽': 'kwak',
  '성': 'seong',
  '차': 'cha',
  '주': 'joo',
  '우': 'woo',
  '구': 'koo',
  '나': 'na',
  
  // Common given names
  '민': 'min',
  '휘': 'hwi',
  '진': 'jin',
  '지': 'ji',
  '예': 'ye',
  '원': 'won',
  '기': 'ki',
  '석': 'seok',
  '선': 'sun',
  '설': 'seol',
  '마': 'ma',
  '길': 'gil',
  '연': 'yeon',
  '방': 'bang',
  '엄': 'eom',
  '채': 'chae',
  '천': 'cheon',
  '공': 'gong',
  '현': 'hyeon',
  '함': 'ham',
  '변': 'byeon',
  '염': 'yeom',
  '여': 'yeo',
  '추': 'chu',
  '도': 'do',
  '소': 'so',
  '어': 'eo',
  '월': 'wol',
  '위': 'wi',
  '윤': 'yoon',
  '은': 'eun',
  '을': 'eul',
  '인': 'in',
  '일': 'il',
  '잠': 'jam',
  '제': 'je',
  '종': 'jong',
  '준': 'jun',
  '중': 'jung',
  '찬': 'chan',
  '창': 'chang',
  '철': 'cheol',
  '초': 'cho',
  '충': 'chung',
  '치': 'chi',
  '태': 'tae',
  '택': 'taek',
  '토': 'to',
  '통': 'tong',
  '특': 'teuk',
  '파': 'pa',
  '패': 'pae',
  '편': 'pyeon',
  '평': 'pyeong',
  '포': 'po',
  '표': 'pyo',
  '품': 'pum',
  '학': 'hak',
  '합': 'hap',
  '해': 'hae',
  '행': 'haeng',
  '향': 'hyang',
  '형': 'hyeong',
  '호': 'ho',
  '화': 'hwa',
  '환': 'hwan',
  '회': 'hoe',
  '효': 'hyo',
  '후': 'hu',
  '흠': 'heum',
  '희': 'hui'
};

function decomposeHangul(char: string): [string, string, string] | null {
  const code = char.charCodeAt(0);
  
  if (code < 0xAC00 || code > 0xD7A3) {
    return null; // Not a Hangul syllable
  }
  
  const syllableIndex = code - 0xAC00;
  const finalIndex = syllableIndex % 28;
  const vowelIndex = ((syllableIndex - finalIndex) / 28) % 21;
  const initialIndex = (((syllableIndex - finalIndex) / 28) - vowelIndex) / 21;
  
  return [
    initialConsonants[initialIndex],
    vowels[vowelIndex],
    finalConsonants[finalIndex]
  ];
}

export function romanizeKorean(koreanText: string): string {
  if (!koreanText.trim()) return '';
  
  // 먼저 공통 이름 매핑 확인
  if (commonNameMappings[koreanText]) {
    return commonNameMappings[koreanText];
  }
  
  const syllables = koreanText.split('');
  let result = '';
  
  // 각 음절에 대해 개별적으로 변환 처리
  for (let i = 0; i < syllables.length; i++) {
    const syllable = syllables[i];
    
    // 먼저 특정 음절 매핑 확인
    if (nameSpecificMappings[syllable]) {
      result += nameSpecificMappings[syllable];
      continue;
    }
    
    // 한글 음절 분해
    const decomposed = decomposeHangul(syllable);
    
    if (!decomposed) {
      result += syllable; // 한글이 아닌 문자는 그대로 유지
      continue;
    }
    
    const [initial, vowel, final] = decomposed;
    
    // 각 구성 요소 로마자 변환
    const romanizedInitial = koreanToRomanMap[initial] || '';
    const romanizedVowel = koreanToRomanMap[vowel] || '';
    const romanizedFinal = final ? (koreanToRomanMap[final + '_f'] || '') : '';
    
    result += romanizedInitial + romanizedVowel + romanizedFinal;
  }
  
  return result.toLowerCase();
}

// Predefined mappings for common Korean names that don't follow standard romanization
export const commonNameMappings: { [key: string]: string } = {
  '조휘민': 'jowheemin',
  '김민수': 'kimminsu',
  '이영희': 'leeyounghee',
  '박지민': 'parkjimin',
  '최수연': 'choisooyeon',
  '정현우': 'junghyunwoo',
  '강나연': 'kangnayeon',
  '임태현': 'limtaehyun',
  '오세훈': 'ohsehun',
  '한지민': 'hanjimin'
};
