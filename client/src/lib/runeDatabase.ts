// Elder Futhark rune database with meanings and symbolism

export interface RuneDetail {
  character: string;
  name: string;
  phonetic: string;
  meaning: string;
  symbolism: string;
  keywords: string[];
  divination: string;
}

export const elderFutharkRunes: RuneDetail[] = [
  {
    character: 'ᚠ',
    name: 'Fehu',
    phonetic: '/f/',
    meaning: '"소", "재산", "부"를 의미합니다. 물질적 풍요와 성공을 상징합니다.',
    symbolism: '노동의 결실, 창의력, 새로운 시작을 나타냅니다.',
    keywords: ['재산', '성공', '풍요', '에너지'],
    divination: '물질적 성공과 새로운 기회의 상징'
  },
  {
    character: 'ᚢ',
    name: 'Uruz',
    phonetic: '/u/',
    meaning: '"야생 황소", "힘", "생명력"을 의미합니다. 원시적 힘과 생명력을 상징합니다.',
    symbolism: '내적 힘, 용기, 자연의 거친 힘을 나타냅니다.',
    keywords: ['힘', '용기', '생명력', '변화'],
    divination: '강한 의지력과 생명력의 발현'
  },
  {
    character: 'ᚦ',
    name: 'Thurisaz',
    phonetic: '/θ/ (th)',
    meaning: '"거인", "가시", "토르의 망치"를 의미합니다. 보호와 방어를 상징합니다.',
    symbolism: '적극적 방어, 보호, 강력한 힘을 나타냅니다.',
    keywords: ['보호', '방어', '힘', '도전'],
    divination: '위험으로부터의 보호와 강한 의지'
  },
  {
    character: 'ᚨ',
    name: 'Ansuz',
    phonetic: '/a/',
    meaning: '"신", "오딘", "지혜"를 의미합니다. 신적 지혜와 영감을 상징합니다.',
    symbolism: '소통, 지혜, 영감, 신적 메시지를 나타냅니다.',
    keywords: ['지혜', '소통', '영감', '신성'],
    divination: '신적 지혜와 영감의 전달'
  },
  {
    character: 'ᚱ',
    name: 'Raidho',
    phonetic: '/r/',
    meaning: '"여행", "말타기", "이동"을 의미합니다. 여정과 변화를 상징합니다.',
    symbolism: '인생의 여정, 발전, 리듬을 나타냅니다.',
    keywords: ['여행', '변화', '발전', '리듬'],
    divination: '인생의 여정과 올바른 방향'
  },
  {
    character: 'ᚲ',
    name: 'Kaunan',
    phonetic: '/k/',
    meaning: '"횃불", "빛", "지식"을 의미합니다. 지식과 깨달음을 상징합니다.',
    symbolism: '창조력, 예술, 기술, 변화를 나타냅니다.',
    keywords: ['지식', '창조', '예술', '변화'],
    divination: '창조적 힘과 새로운 지식의 습득'
  },
  {
    character: 'ᚷ',
    name: 'Gebo',
    phonetic: '/g/',
    meaning: '"선물", "교환", "균형"을 의미합니다. 상호 교환과 균형을 상징합니다.',
    symbolism: '관계, 파트너십, 균형, 호혜를 나타냅니다.',
    keywords: ['선물', '교환', '균형', '관계'],
    divination: '균형잡힌 관계와 상호 존중'
  },
  {
    character: 'ᚹ',
    name: 'Wunjo',
    phonetic: '/w/',
    meaning: '"기쁨", "행복", "조화"를 의미합니다. 소원 성취와 만족을 상징합니다.',
    symbolism: '내적 평화, 만족, 삶의 균형을 나타냅니다.',
    keywords: ['기쁨', '행복', '조화', '만족'],
    divination: '행복과 내적 평화의 달성'
  },
  {
    character: 'ᚺ',
    name: 'Hagalaz',
    phonetic: '/h/',
    meaning: '"우박", "파괴", "시련"을 의미합니다. 시련과 변화를 상징합니다.',
    symbolism: '시련, 파괴적 변화, 새로운 시작을 나타냅니다.',
    keywords: ['시련', '파괴', '변화', '재생'],
    divination: '시련을 통한 성장과 변화'
  },
  {
    character: 'ᚾ',
    name: 'Nauthiz',
    phonetic: '/n/',
    meaning: '"필요", "궁핍", "제약"을 의미합니다. 필요와 욕구를 상징합니다.',
    symbolism: '인내, 제약, 학습, 성장을 나타냅니다.',
    keywords: ['필요', '인내', '제약', '학습'],
    divination: '인내를 통한 성장과 지혜'
  },
  {
    character: 'ᛁ',
    name: 'Isaz',
    phonetic: '/i/',
    meaning: '"얼음", "정체", "집중"을 의미합니다. 집중과 명상을 상징합니다.',
    symbolism: '집중, 명상, 내적 성찰을 나타냅니다.',
    keywords: ['얼음', '집중', '명상', '정체'],
    divination: '내적 성찰과 집중의 필요성'
  },
  {
    character: 'ᛃ',
    name: 'Jera',
    phonetic: '/j/',
    meaning: '"해", "풍년", "수확"을 의미합니다. 좋은 결과를 얻기 위한 노력과 인내를 상징합니다.',
    symbolism: '농업과 계절의 순환, 자연의 리듬에 맞춘 삶을 나타냅니다.',
    keywords: ['수확', '노력', '인내', '결실'],
    divination: '노력의 결실과 자연스러운 순환'
  },
  {
    character: 'ᛇ',
    name: 'Eihwaz',
    phonetic: '/ei/',
    meaning: '"주목나무", "죽음과 재생", "변화"를 의미합니다. 변화와 재생을 상징합니다.',
    symbolism: '변화, 재생, 영적 성장을 나타냅니다.',
    keywords: ['변화', '재생', '성장', '영성'],
    divination: '변화를 통한 영적 성장'
  },
  {
    character: 'ᛈ',
    name: 'Perthro',
    phonetic: '/p/',
    meaning: '"운명", "신비", "숨겨진 것"을 의미합니다. 운명과 비밀을 상징합니다.',
    symbolism: '운명, 비밀, 숨겨진 지식을 나타냅니다.',
    keywords: ['운명', '비밀', '신비', '지식'],
    divination: '숨겨진 지식과 운명의 힘'
  },
  {
    character: 'ᛉ',
    name: 'Algiz',
    phonetic: '/z/',
    meaning: '"방어", "보호", "연결"을 의미합니다. 신적 보호와 연결을 상징합니다.',
    symbolism: '보호, 신적 연결, 영적 각성을 나타냅니다.',
    keywords: ['보호', '연결', '각성', '신성'],
    divination: '신적 보호와 영적 각성'
  },
  {
    character: 'ᛊ',
    name: 'Sowilo',
    phonetic: '/s/',
    meaning: '"태양", "승리", "성공"을 의미합니다. 성공과 승리를 상징합니다.',
    symbolism: '성공, 승리, 생명력, 빛을 나타냅니다.',
    keywords: ['태양', '승리', '성공', '생명력'],
    divination: '성공과 승리의 확신'
  },
  {
    character: 'ᛏ',
    name: 'Tiwaz',
    phonetic: '/t/',
    meaning: '"티르 신", "전쟁", "정의"를 의미합니다. 정의와 희생을 상징합니다.',
    symbolism: '정의, 희생, 용기, 리더십을 나타냅니다.',
    keywords: ['정의', '희생', '용기', '리더십'],
    divination: '정의로운 희생과 용기'
  },
  {
    character: 'ᛒ',
    name: 'Berkanan',
    phonetic: '/b/',
    meaning: '"자작나무", "성장", "새로운 시작"을 의미합니다. 성장과 재생을 상징합니다.',
    symbolism: '성장, 재생, 여성성, 출산을 나타냅니다.',
    keywords: ['성장', '재생', '새로운 시작', '여성성'],
    divination: '새로운 시작과 성장의 기회'
  },
  {
    character: 'ᛖ',
    name: 'Ehwaz',
    phonetic: '/e/',
    meaning: '"말", "파트너십", "신뢰"를 의미합니다. 신뢰와 협력을 상징합니다.',
    symbolism: '파트너십, 신뢰, 협력, 충성을 나타냅니다.',
    keywords: ['파트너십', '신뢰', '협력', '충성'],
    divination: '신뢰할 수 있는 파트너십'
  },
  {
    character: 'ᛗ',
    name: 'Mannaz',
    phonetic: '/m/',
    meaning: '"인간", "공동체", "상호 의존"을 의미합니다. 인간성과 공동체를 상징합니다.',
    symbolism: '인간성, 공동체, 상호 의존, 지혜를 나타냅니다.',
    keywords: ['인간', '공동체', '지혜', '상호의존'],
    divination: '인간적 지혜와 공동체 정신'
  },
  {
    character: 'ᛚ',
    name: 'Laguz',
    phonetic: '/l/',
    meaning: '"물", "흐름", "직관"을 의미합니다. 직관과 감정을 상징합니다.',
    symbolism: '직관, 감정, 흐름, 변화를 나타냅니다.',
    keywords: ['물', '직관', '감정', '흐름'],
    divination: '직관을 따르는 것의 중요성'
  },
  {
    character: 'ᛜ',
    name: 'Ingwaz',
    phonetic: '/ŋ/ (ng)',
    meaning: '"잉 신", "풍요", "완성"을 의미합니다. 완성과 풍요를 상징합니다.',
    symbolism: '완성, 풍요, 내적 성장을 나타냅니다.',
    keywords: ['완성', '풍요', '성장', '내적 힘'],
    divination: '내적 성장과 완성의 단계'
  },
  {
    character: 'ᛞ',
    name: 'Dagaz',
    phonetic: '/d/',
    meaning: '"낮", "각성", "깨달음"을 의미합니다. 깨달음과 변화를 상징합니다.',
    symbolism: '깨달음, 각성, 균형, 변화를 나타냅니다.',
    keywords: ['깨달음', '각성', '균형', '변화'],
    divination: '깨달음과 새로운 인식의 시작'
  },
  {
    character: 'ᛟ',
    name: 'Othalan',
    phonetic: '/o/',
    meaning: '"유산", "조상의 땅", "상속받은 재산"을 의미합니다. 가족과 전통, 뿌리를 상징합니다.',
    symbolism: '가문의 명예와 전통, 조상으로부터 물려받은 지혜를 나타냅니다.',
    keywords: ['유산', '전통', '가족', '뿌리'],
    divination: '가족의 전통과 조상의 지혜'
  }
];

export function getRuneByCharacter(character: string): RuneDetail | undefined {
  return elderFutharkRunes.find(rune => rune.character === character);
}

export function getRuneDetails(runeText: string): RuneDetail[] {
  const details: RuneDetail[] = [];
  
  for (const char of runeText) {
    const rune = getRuneByCharacter(char);
    if (rune) {
      details.push(rune);
    }
  }
  
  return details;
}
