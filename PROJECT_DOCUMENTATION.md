# Viking Rune Converter - 프로젝트 상세 분석 문서

## 📋 목차
1. [프로젝트 개요](#프로젝트-개요)
2. [기술 스택](#기술-스택)
3. [프로젝트 구조](#프로젝트-구조)
4. [핵심 기능](#핵심-기능)
5. [상세 코드 분석](#상세-코드-분석)
6. [데이터 흐름](#데이터-흐름)
7. [API 엔드포인트](#api-엔드포인트)
8. [디자인 시스템](#디자인-시스템)
9. [배포 및 설정](#배포-및-설정)
10. [개선 가능 영역](#개선-가능-영역)

---

## 프로젝트 개요

### 🎯 프로젝트명
**Viking Rune Converter (바이킹 룬 문자 변환기)**

### 🌐 배포 URL
https://viking-rune-converter.netlify.app/

### 📝 프로젝트 설명
한국어 이름을 영문으로 로마자화한 후, 고대 북유럽의 Elder Futhark 룬 문자로 변환하는 웹 애플리케이션입니다. 각 룬 문자의 의미와 상징을 제공하며, 변환 결과를 이미지로 저장하거나 소셜 미디어로 공유할 수 있습니다.

### 🎨 주요 특징
- **3단계 변환**: 한국어 → 영어 로마자 → 룬 문자
- **다국어 지원**: 한국어, 영어, 일본어, 중국어, 스페인어, 프랑스어
- **상세한 룬 해석**: 각 룬 문자의 의미, 상징, 점술적 의미 제공
- **로컬 저장소**: 브라우저 localStorage를 활용한 변환 기록 저장
- **이미지 생성**: Canvas API를 활용한 룬 문자 이미지 생성 및 다운로드
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화
- **바이킹 테마**: 양피지 느낌의 UI/UX 디자인

---

## 기술 스택

### Frontend
- **Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite 
- **Routing**: Wouter 3.3.5
- **State Management**: React Hooks + Context API
- **Data Fetching**: TanStack Query (React Query) 5.60.5
- **Form Handling**: React Hook Form 7.55.0
- **Validation**: Zod 3.24.2

### UI/UX 라이브러리
- **Component Library**: Radix UI (다양한 컴포넌트)
  - Dialog, Dropdown, Accordion, Tabs, Toast 등
- **Styling**: 
  - Tailwind CSS 3.4.17
  - Custom CSS (양피지 테마)
- **Animations**: Framer Motion 11.13.1
- **Icons**: Lucide React 0.453.0
- **Fonts**: 
  - Cinzel (본문, 제목)
  - Cinzel Decorative (장식용)
  - Noto Sans Runic (룬 문자)

### Backend
- **Runtime**: Node.js 18+
- **Framework**: Express.js 4.21.2
- **Database ORM**: Drizzle ORM 0.39.1
- **Database**: PostgreSQL (Neon 서버리스)
- **API**: RESTful API
- **Session**: Express Session + MemoryStore

### 배포 및 인프라
- **호스팅**: Netlify
- **Functions**: Netlify Functions (서버리스)
- **CDN**: Netlify CDN
- **환경 변수**: Netlify 환경 변수 관리

### 개발 도구
- **Package Manager**: npm
- **TypeScript Compiler**: tsc
- **Linter**: (설정 없음, 추가 가능)
- **Build**: esbuild 0.25.0

---

## 프로젝트 구조

```
VikingRuneConverter/
│
├── client/                          # 프론트엔드 코드
│   ├── public/                     # 정적 자산
│   │   ├── _redirects             # Netlify 리다이렉트
│   │   ├── manifest.json          # PWA 매니페스트
│   │   ├── robots.txt             # SEO 로봇 설정
│   │   ├── schema.json            # 구조화된 데이터
│   │   └── sitemap.xml            # 사이트맵
│   │
│   ├── src/
│   │   ├── components/            # React 컴포넌트
│   │   │   ├── ui/               # shadcn/ui 기반 UI 컴포넌트 (40+ 파일)
│   │   │   ├── ConnectionStatus.tsx       # 연결 상태 표시
│   │   │   ├── HistoricalInfo.tsx        # 역사 정보
│   │   │   ├── LanguageSelector.tsx      # 언어 선택기
│   │   │   ├── NameInput.tsx             # 이름 입력 폼
│   │   │   ├── RuneExplanation.tsx       # 룬 상세 설명
│   │   │   ├── RuneReference.tsx         # 룬 참조 테이블
│   │   │   ├── RuneResult.tsx            # 변환 결과 표시
│   │   │   ├── SavedRunesDialog.tsx      # 저장된 룬 목록
│   │   │   ├── SEOManager.tsx            # SEO 메타 태그 관리
│   │   │   └── ShareModal.tsx            # 공유 모달
│   │   │
│   │   ├── contexts/              # React Context
│   │   │   └── LanguageContext.tsx       # 다국어 Context
│   │   │
│   │   ├── hooks/                 # Custom Hooks
│   │   │   ├── use-mobile.tsx            # 모바일 감지
│   │   │   ├── use-toast.ts              # Toast 알림
│   │   │   └── useRuneConverter.ts       # 룬 변환 로직
│   │   │
│   │   ├── lib/                   # 유틸리티 라이브러리
│   │   │   ├── api.ts                    # API 호출 함수
│   │   │   ├── i18n.ts                   # 다국어 번역 (6개 언어)
│   │   │   ├── imageGenerator.ts         # Canvas 이미지 생성
│   │   │   ├── koreanRomanizer.ts        # 한글 → 로마자 변환
│   │   │   ├── localStorageUtils.ts      # localStorage 관리
│   │   │   ├── queryClient.ts            # React Query 설정
│   │   │   ├── runeConverter.ts          # 영어 → 룬 변환
│   │   │   ├── runeDatabase.ts           # 룬 문자 DB (24개 룬)
│   │   │   └── utils.ts                  # 일반 유틸리티
│   │   │
│   │   ├── pages/                 # 페이지 컴포넌트
│   │   │   ├── ConvertingPage.tsx        # 변환 로딩 페이지
│   │   │   ├── not-found.tsx             # 404 페이지
│   │   │   └── RuneConverter.tsx         # 메인 페이지
│   │   │
│   │   ├── App.tsx                # 앱 루트 컴포넌트
│   │   ├── main.tsx               # 진입점
│   │   └── index.css              # 글로벌 스타일 (419줄)
│   │
│   └── index.html                 # HTML 템플릿
│
├── server/                         # 백엔드 코드
│   ├── index.ts                   # Express 서버 진입점
│   ├── routes.ts                  # API 라우트 정의
│   ├── storage.ts                 # 데이터 저장소 (메모리/DB)
│   └── vite.ts                    # Vite 개발 서버 설정
│
├── netlify/                        # Netlify Functions
│   └── functions/
│       ├── api.js                 # API 프록시 함수
│       └── og.js                  # Open Graph 이미지 생성
│
├── shared/                         # 공유 코드
│   └── schema.ts                  # Zod 스키마 + Drizzle 테이블
│
├── 설정 파일
├── components.json                # shadcn/ui 설정
├── drizzle.config.ts             # Drizzle ORM 설정
├── netlify.toml                  # Netlify 배포 설정
├── package.json                  # 의존성 관리
├── postcss.config.js             # PostCSS 설정
├── tailwind.config.ts            # Tailwind 설정
├── tsconfig.json                 # TypeScript 설정
├── vite.config.ts                # Vite 빌드 설정
│
└── 기타
    ├── README.md
    ├── start-local.bat           # Windows 로컬 실행
    ├── start-local.ps1           # PowerShell 스크립트
    └── koreanRomanizerTest.ts    # 테스트 파일
```

---

## 핵심 기능

### 1. 한글 → 로마자 변환 (`koreanRomanizer.ts`)

#### 알고리즘
1. **공통 이름 매핑**: 자주 사용되는 한국 이름 우선 처리
   - 성씨: 김(kim), 이(lee), 박(park), 최(choi) 등
   - 이름: 민(min), 진(jin), 지(ji), 예(ye) 등

2. **한글 음절 분해**
   - 유니코드 범위: `0xAC00 ~ 0xD7A3` (한글 음절)
   - 초성 19개, 중성 21개, 종성 28개로 분해
   - 수식: `syllableIndex = charCode - 0xAC00`

3. **로마자 변환 규칙**
   - 초성: 'ㄱ' → 'g', 'ㄴ' → 'n', 'ㄷ' → 'd'
   - 중성: 'ㅏ' → 'a', 'ㅑ' → 'ya', 'ㅓ' → 'eo'
   - 종성: 'ㄱ' → 'k', 'ㄴ' → 'n', 'ㅇ' → 'ng'

4. **받침 연음 처리**
   - 예: "신라" → "shilla" (ㄹ + ㄹ)
   - 예: "한국" → "hanguk" (ㄴ + ㄱ)

#### 코드 예시
```typescript
export function romanizeKorean(koreanText: string): string {
  // 1. 공통 이름 매핑 확인
  if (commonNameMappings[koreanText]) {
    return commonNameMappings[koreanText];
  }
  
  // 2. 음절별 분해 및 변환
  for (let i = 0; i < syllables.length; i++) {
    const decomposed = decomposeHangul(syllable);
    // ... 변환 로직
  }
}
```

### 2. 영어 → 룬 문자 변환 (`runeConverter.ts`)

#### Elder Futhark 룬 매핑 (24개)
```typescript
const runeMap = {
  'a': 'ᚨ',  // Ansuz (지혜)
  'b': 'ᛒ',  // Berkanan (성장)
  'c': 'ᚲ',  // Kaunan (지식)
  'd': 'ᛞ',  // Dagaz (변화)
  'e': 'ᛖ',  // Ehwaz (협력)
  'f': 'ᚠ',  // Fehu (재산)
  'g': 'ᚷ',  // Gebo (선물)
  'h': 'ᚺ',  // Hagalaz (시련)
  'i': 'ᛁ',  // Isaz (정체)
  'j': 'ᛃ',  // Jera (수확)
  'k': 'ᚲ',  // Kaunan
  'l': 'ᛚ',  // Laguz (물)
  'm': 'ᛗ',  // Mannaz (인간)
  'n': 'ᚾ',  // Nauthiz (필요)
  'o': 'ᛟ',  // Othalan (유산)
  'p': 'ᛈ',  // Perthro (운명)
  'r': 'ᚱ',  // Raidho (여행)
  's': 'ᛊ',  // Sowilo (태양)
  't': 'ᛏ',  // Tiwaz (정의)
  'u': 'ᚢ',  // Uruz (힘)
  'w': 'ᚹ',  // Wunjo (기쁨)
  'y': 'ᛃ',  // Jera
  'z': 'ᛉ',  // Algiz (보호)
  
  // 특수 조합
  'th': 'ᚦ',  // Thurisaz
  'ng': 'ᛜ',  // Ingwaz
  'ei': 'ᛇ',  // Eihwaz
}
```

#### 변환 알고리즘
1. 텍스트 정규화: 소문자 변환, 특수문자 제거
2. 2글자 조합 우선 확인 (th, ng, ei)
3. 단일 글자 변환
4. 룬 문자 문자열 반환

### 3. 룬 의미 해석 (`runeDatabase.ts`)

각 룬 문자는 다음 정보를 포함:
- **character**: 룬 문자 (예: ᚠ)
- **name**: 룬 이름 (예: Fehu)
- **phonetic**: 발음 (예: /f/)
- **meaning**: 기본 의미 (예: "소", "재산")
- **symbolism**: 상징 (예: 노동의 결실, 창의력)
- **keywords**: 키워드 배열 (예: ['재산', '성공', '풍요'])
- **divination**: 점술적 의미 (예: 물질적 성공)

#### 종합 의미 생성 알고리즘
```typescript
generateCombinedMeaning(runeDetails) {
  // 1. 모든 룬의 키워드 추출
  const allKeywords = runeDetails.flatMap(rune => rune.keywords);
  
  // 2. 긍정적 테마 필터링
  const positiveThemes = ['성공', '풍요', '지혜', '용기', ...];
  
  // 3. 성격 테마 필터링
  const personalityThemes = ['리더십', '소통', '여행', ...];
  
  // 4. 조합하여 의미 생성
  return `${positiveThemes}을 바탕으로 ${personalityThemes}을 발휘`;
}
```

### 4. 이미지 생성 (`imageGenerator.ts`)

#### Canvas API 활용
```typescript
export async function generateRuneImage(
  runeText: string,
  englishName: string,
  options: ImageOptions
) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  // 1. 배경 그리기 (양피지 그라디언트)
  // 2. 테두리 그리기 (바이킹 스타일)
  // 3. 룬 문자 그리기 (Noto Sans Runic)
  // 4. 영문 이름 그리기
  // 5. 장식 요소 그리기
  
  return canvas.toDataURL('image/png');
}
```

### 5. 다국어 지원 (`i18n.ts`)

#### 지원 언어 (6개)
- 한국어 (ko) 🇰🇷
- 영어 (en) 🇺🇸
- 일본어 (ja) 🇯🇵
- 중국어 (zh) 🇨🇳
- 스페인어 (es) 🇪🇸
- 프랑스어 (fr) 🇫🇷

#### 번역 구조
```typescript
const translations = {
  ko: {
    title: '바이킹 룬 문자 변환기',
    subtitle: '실제로 사용했던 북유럽 고대 노르드...',
    // ... 80+ 번역 키
  },
  en: {
    title: 'Viking Rune Converter',
    subtitle: 'Transform your name into authentic...',
    // ... 80+ 번역 키
  },
  // ... 다른 언어
}
```

#### Context 기반 언어 전환
```typescript
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('rune-converter-language') || 'ko';
  });
  
  const t = (key: string) => getTranslation(language, key);
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
```

### 6. 로컬 저장소 (`localStorageUtils.ts`)

#### 저장 구조
```typescript
interface SavedRuneConversion {
  id: string;
  koreanName: string;
  englishName: string;
  runeText: string;
  timestamp: number;
  runeDetails: RuneDetail[];
}
```

#### CRUD 함수
- `saveRuneConversion()`: 변환 결과 저장
- `getSavedConversions()`: 저장된 목록 조회
- `deleteConversion()`: 특정 항목 삭제
- `clearAllConversions()`: 전체 삭제

---

## 상세 코드 분석

### 메인 페이지 (`RuneConverter.tsx`)

#### 컴포넌트 구조
```
RuneConverter
├── Header
│   ├── LanguageSelector (언어 선택)
│   ├── Title (룬 문자 + 텍스트)
│   └── Features (3개 기능 카드)
├── Main
│   ├── NameInput (입력 폼)
│   ├── RuneResult (결과 표시)
│   └── RuneExplanation (상세 설명)
└── Footer
    ├── 소셜 미디어 링크
    └── 저작권 정보
```

#### 상태 관리
```typescript
const {
  koreanName,        // 한글 이름
  englishName,       // 영문 이름
  runeText,          // 룬 문자 결과
  runeDetails,       // 룬 상세 정보
  setKoreanName,     // 한글 입력 핸들러
  setEnglishName,    // 영문 입력 핸들러
  convertToRunes,    // 변환 함수
  isConverted        // 변환 완료 여부
} = useRuneConverter();
```

#### 변환 플로우
```typescript
const handleConvert = () => {
  setIsConverting(true);
  setShowConvertingPage(true);  // 로딩 페이지 표시
};

const handleConvertingComplete = () => {
  convertToRunes();              // 실제 변환 수행
  setShowConvertingPage(false);  // 로딩 페이지 숨김
  
  // 결과로 스크롤
  setTimeout(() => {
    document.getElementById('rune-result')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }, 500);
};
```

### 변환 로딩 페이지 (`ConvertingPage.tsx`)

#### 진행 단계 (5단계)
1. 한국어 이름 분석 중... (0-20%)
2. 영문 변환 확인 중... (20-40%)
3. 엘더 푸타르크 룬 매핑... (40-60%)
4. 룬 문자 의미 해석... (60-80%)
5. 신비로운 변환 완료! (80-100%)

#### 애니메이션
- 원형 진행 바 (SVG circle with strokeDashoffset)
- 단계별 텍스트 전환 (1초 간격)
- 룬 문자 반짝임 효과
- 펄스 글로우 효과

### 결과 컴포넌트 (`RuneResult.tsx`)

#### 기능
1. **룬 문자 표시**: 큰 크기 룬 + 영문 이름
2. **종합 의미**: AI 기반 의미 생성
3. **빠른 복사**: 클립보드 복사
4. **이미지 다운로드**: PNG 파일 저장
5. **공유 모달**: 소셜 미디어 공유
6. **로컬 저장**: localStorage에 저장
7. **저장 기록 조회**: 과거 변환 결과 확인

#### 버튼 액션
```typescript
// 1. 복사
const handleQuickCopy = async () => {
  await navigator.clipboard.writeText(runeText);
  toast({ title: '복사 완료' });
};

// 2. 다운로드
const handleDownload = async () => {
  const imageData = await generateRuneImage(runeText, englishName);
  const link = document.createElement('a');
  link.download = `${englishName}_rune.png`;
  link.href = imageData;
  link.click();
};

// 3. 저장
const handleSave = () => {
  saveRuneConversion({
    koreanName,
    englishName,
    runeText,
    runeDetails
  });
  toast({ title: '저장 완료' });
};
```

### Custom Hook (`useRuneConverter.ts`)

#### 역할
- 이름 입력 상태 관리
- 한글 → 영문 자동 변환
- 영문 → 룬 변환
- 변환 상태 추적

#### 핵심 로직
```typescript
const handleKoreanNameChange = useCallback((name: string) => {
  setKoreanName(name);
  
  // 자동 로마자 변환
  if (name.trim()) {
    const commonMapping = commonNameMappings[name.trim()];
    const romanized = commonMapping || romanizeKorean(name);
    setEnglishName(romanized);
  }
  
  // 변환 상태 초기화
  setIsConverted(false);
}, []);

const convertToRunesHandler = useCallback(() => {
  const converted = convertToRunes(englishName);
  const details = getRuneDetails(converted);
  
  setRuneText(converted);
  setRuneDetails(details);
  setIsConverted(true);
}, [englishName]);
```

---

## 데이터 흐름

### 전체 흐름도
```
사용자 입력 (한글 이름)
    ↓
[NameInput 컴포넌트]
    ↓
useRuneConverter Hook
    ↓
koreanRomanizer.ts → 한글 분해 → 로마자 변환
    ↓
자동 영문 이름 설정
    ↓
사용자 영문 수정 가능
    ↓
변환 버튼 클릭
    ↓
[ConvertingPage] 로딩 애니메이션
    ↓
runeConverter.ts → 영문 → 룬 문자
    ↓
runeDatabase.ts → 룬 의미 조회
    ↓
[RuneResult] 결과 표시
    ↓
[RuneExplanation] 상세 의미
    ↓
옵션: 저장/다운로드/공유
```

### 컴포넌트 간 데이터 전달

#### Props Drilling
```
App
└── RuneConverter
    ├── LanguageSelector (Context)
    ├── NameInput
    │   ├── koreanName
    │   ├── englishName
    │   ├── onKoreanNameChange
    │   ├── onEnglishNameChange
    │   └── onConvert
    ├── RuneResult
    │   ├── runeText
    │   ├── englishName
    │   └── koreanName
    └── RuneExplanation
        └── runeDetails
```

#### Context 사용
- **LanguageContext**: 전역 언어 설정
- **ToastContext**: 알림 메시지
- **QueryClient**: 서버 데이터 캐싱

---

## API 엔드포인트

### 백엔드 라우트 (`routes.ts`)

#### 1. POST `/api/rune-conversions`
- **설명**: 룬 변환 결과 저장
- **Body**:
  ```json
  {
    "koreanName": "조휘민",
    "englishName": "jowheemin",
    "runeText": "ᛃᛟᚹᚺᛖᛖᛗᛁᚾ",
    "createdAt": "2025-12-16T..."
  }
  ```
- **응답**: 저장된 변환 객체

#### 2. GET `/api/rune-conversions`
- **설명**: 모든 변환 기록 조회
- **응답**: 변환 배열 (최신순)

#### 3. GET `/api/rune-conversions/popular`
- **설명**: 인기 변환 조회 (중복 제거, 최대 10개)
- **응답**: 인기 변환 배열

### 데이터베이스 스키마 (`schema.ts`)

#### Users 테이블
```typescript
pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
})
```

#### Rune Conversions 테이블
```typescript
pgTable("rune_conversions", {
  id: serial("id").primaryKey(),
  koreanName: text("korean_name").notNull(),
  englishName: text("english_name").notNull(),
  runeText: text("rune_text").notNull(),
  createdAt: text("created_at").notNull()
})
```

### 스토리지 (`storage.ts`)

#### MemStorage 클래스
- **In-memory 저장소**: Map 자료구조 사용
- **메서드**:
  - `createRuneConversion()`: 변환 저장
  - `getAllRuneConversions()`: 전체 조회
  - `getPopularRuneConversions()`: 인기 변환 (중복 제거)

#### 개선 가능 영역
- 현재: 메모리 저장 (서버 재시작 시 데이터 손실)
- 개선: PostgreSQL 연동 (Drizzle ORM 이미 설정됨)

---

## 디자인 시스템

### 색상 팔레트 (Viking Theme)

#### 주요 색상
```css
--parchment: hsl(39, 77%, 96%)           /* 양피지 배경 */
--viking-brown: hsl(25, 62%, 35%)        /* 진한 갈색 */
--viking-brown-dark: hsl(25, 62%, 25%)   /* 더 진한 갈색 */
--viking-tan: hsl(32, 43%, 70%)          /* 밝은 황갈색 */
--viking-gold: hsl(45, 100%, 35%)        /* 금색 */
--viking-peru: hsl(25, 62%, 55%)         /* 페루 색 */
--text-brown: hsl(30, 36%, 15%)          /* 텍스트 갈색 */
--text-brown-light: hsl(32, 18%, 35%)    /* 밝은 텍스트 */
```

### 타이포그래피

#### 폰트 패밀리
- **Cinzel**: 본문, 제목 (세리프)
- **Cinzel Decorative**: 장식용 제목
- **Noto Sans Runic**: 룬 문자 전용

#### 크기 체계
- h1: 3-5rem (4xl-7xl)
- h2: 2-3rem (2xl-4xl)
- h3: 1.5-2rem (xl-2xl)
- body: 1rem (base)
- caption: 0.875rem (sm)

### 커스텀 CSS 클래스

#### 배경
```css
.parchment-bg {
  /* 양피지 텍스처 그라디언트 */
  background: linear-gradient(...),
              radial-gradient(...),
              repeating-linear-gradient(...);
}

.manuscript-page {
  /* 양피지 카드 스타일 */
  background: linear-gradient(135deg, ...);
  box-shadow: inset 0 0 30px rgba(0,0,0,0.05);
}
```

#### 테두리
```css
.ancient-border {
  border: 3px solid hsl(25, 62%, 35%);
  box-shadow: inset 0 0 20px rgba(0,0,0,0.05);
}

.ancient-border::before {
  /* 외부 테두리 레이어 1 */
}

.ancient-border::after {
  /* 외부 테두리 레이어 2 */
}
```

#### 룬 문자
```css
.rune-character {
  font-family: 'Noto Sans Runic', monospace;
  color: hsl(25, 62%, 35%);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.2));
}

.rune-character-large {
  /* 그라디언트 텍스트 */
  background: linear-gradient(135deg, ...);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

#### 애니메이션
```css
.floating-animation {
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.pulse-glow {
  animation: pulseGlow 2s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 20px rgba(218,165,32,0.3); }
  50% { box-shadow: 0 0 40px rgba(218,165,32,0.6); }
}
```

### 반응형 디자인

#### Breakpoints (Tailwind)
```
sm: 640px   (모바일)
md: 768px   (태블릿)
lg: 1024px  (데스크톱)
xl: 1280px  (대형 데스크톱)
2xl: 1536px (초대형)
```

#### 주요 반응형 패턴
- 헤더: `text-5xl md:text-7xl` (모바일/데스크톱 크기 차별화)
- 그리드: `grid-cols-1 md:grid-cols-3` (모바일 1열, 데스크톱 3열)
- 패딩: `px-4 md:px-8` (모바일/데스크톱 여백 차별화)

---

## 배포 및 설정

### Netlify 설정 (`netlify.toml`)

#### 빌드 설정
```toml
[build]
  command = "npm run build"
  publish = "dist/public"
  functions = "netlify/functions"

[build.environment]
  NODE_VERSION = "18"
```

#### 리다이렉트 규칙
```toml
# API 요청 → Netlify Functions
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/api/:splat"
  status = 200

# SPA 라우팅 (모든 요청 → index.html)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### 보안 헤더
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
```

### 빌드 스크립트 (`package.json`)

```json
{
  "scripts": {
    "dev": "NODE_ENV=development tsx server/index.ts",
    "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist && npm run copy-functions",
    "copy-functions": "if not exist dist\\functions mkdir dist\\functions && xcopy /s /y netlify\\functions\\* dist\\functions\\",
    "start": "set NODE_ENV=production && node dist/index.js"
  }
}
```

### Vite 설정 (`vite.config.ts`)

```typescript
export default defineConfig({
  plugins: [react(), runtimeErrorOverlay()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  }
})
```

### 환경 변수

#### 필요한 환경 변수
```bash
DATABASE_URL=postgresql://...         # PostgreSQL 연결 URL
NODE_ENV=production                   # 환경 (development/production)
```

#### 설정 위치
- 로컬: `.env` 파일 (Git 제외)
- Netlify: 사이트 설정 → Environment variables

---

## 개선 가능 영역

### 1. 데이터베이스 연동
**현재 상태**: MemStorage (메모리 저장)
**개선 방안**:
- Drizzle ORM 이미 설정됨
- PostgreSQL (Neon) 연결 추가
- `storage.ts`에 `PgStorage` 클래스 구현
- 마이그레이션 실행: `npm run db:push`

### 2. 인증 시스템
**현재 상태**: 인증 없음 (익명 사용)
**개선 방안**:
- Passport.js 이미 설치됨
- 회원가입/로그인 기능 추가
- 사용자별 변환 기록 관리
- 소셜 로그인 (OAuth)

### 3. 테스트
**현재 상태**: 테스트 없음
**개선 방안**:
- Jest + React Testing Library
- 단위 테스트: `koreanRomanizer`, `runeConverter`
- 통합 테스트: 전체 변환 플로우
- E2E 테스트: Playwright

### 4. SEO 최적화
**현재 상태**: 기본 SEO 설정
**개선 방안**:
- 동적 메타 태그 (변환 결과별)
- 구조화된 데이터 (JSON-LD)
- Open Graph 이미지 (실제 이미지 생성)
- 사이트맵 자동 생성

### 5. 성능 최적화
**개선 방안**:
- 코드 스플리팅 (React.lazy)
- 이미지 최적화 (WebP)
- 룬 폰트 서브셋 (필요한 글자만)
- Service Worker (오프라인 지원)

### 6. 접근성 (A11y)
**개선 방안**:
- ARIA 레이블 추가
- 키보드 네비게이션 개선
- 스크린 리더 최적화
- 색상 대비 비율 검증

### 7. 분석 및 모니터링
**개선 방안**:
- Google Analytics 연동
- 에러 추적 (Sentry)
- 사용자 행동 분석 (Hotjar)
- 변환 통계 대시보드

### 8. 소셜 공유 개선
**현재 상태**: 기본 공유 링크
**개선 방안**:
- 동적 Open Graph 이미지 생성
- 변환 결과 URL 생성 (예: `/share/abc123`)
- 공유 시 미리보기 개선
- 소셜 미디어별 최적화

### 9. 다국어 개선
**개선 방안**:
- 번역 파일 외부화 (JSON)
- 번역 관리 도구 (i18next)
- 누락된 번역 자동 감지
- RTL 언어 지원 (아랍어 등)

### 10. PWA 기능
**개선 방안**:
- Service Worker 구현
- 오프라인 모드
- 홈 화면 추가
- 푸시 알림

---

## 프로젝트 실행 방법

### 로컬 개발 환경

#### 1. 의존성 설치
```bash
npm install
```

#### 2. 환경 변수 설정
```bash
# .env 파일 생성
DATABASE_URL=postgresql://...
NODE_ENV=development
```

#### 3. 개발 서버 실행
```bash
# Windows
npm run dev
# 또는
start-local.bat

# PowerShell
start-local.ps1
```

#### 4. 브라우저 접속
```
http://localhost:5000
```

### 프로덕션 빌드

```bash
# 1. 빌드
npm run build

# 2. 빌드 결과 확인
dist/
  public/          # 프론트엔드 정적 파일
  functions/       # Netlify Functions
  index.js         # 백엔드 번들

# 3. 로컬 프리뷰
npm run start
```

### Netlify 배포

```bash
# 1. Netlify CLI 설치
npm install -g netlify-cli

# 2. 로그인
netlify login

# 3. 사이트 초기화
netlify init

# 4. 배포
netlify deploy --prod
```

---

## 기술적 의사결정 및 근거

### 1. React + TypeScript
- **장점**: 타입 안정성, 개발자 경험 향상
- **단점**: 초기 설정 복잡도

### 2. Vite (CRA 대신)
- **장점**: 빠른 HMR, 작은 번들 크기
- **단점**: 생태계 성숙도 (충분히 성숙함)

### 3. Wouter (React Router 대신)
- **장점**: 초경량 (1.6KB), 단순한 API
- **단점**: 기능 제한 (현재 프로젝트에는 충분)

### 4. TanStack Query
- **장점**: 서버 상태 관리, 캐싱, 재시도
- **단점**: 학습 곡선 (현재는 간단하게 사용)

### 5. Radix UI
- **장점**: 접근성, 헤드리스 UI, 커스터마이징
- **단점**: 스타일링 필요 (Tailwind로 해결)

### 6. Drizzle ORM (Prisma 대신)
- **장점**: 타입 안전, 경량, SQL 친화적
- **단점**: 생태계 작음 (성장 중)

### 7. Netlify (Vercel 대신)
- **장점**: 무료 티어, Functions 지원
- **단점**: 콜드 스타트 (서버리스 특성)

---

## 코드 품질 지표

### 파일 통계
- **총 파일 수**: 100+ 파일
- **총 라인 수**: ~15,000 줄 (추정)
- **컴포넌트**: 50+ 개
- **Hook**: 3개
- **유틸리티 함수**: 20+ 개

### 코드 구조
- ✅ 컴포넌트 분리 (단일 책임)
- ✅ Custom Hook 활용
- ✅ TypeScript 활용
- ✅ Context API 활용
- ⚠️ 테스트 없음
- ⚠️ 주석 부족

### 성능
- ⚠️ 번들 크기: 미측정
- ⚠️ Lighthouse 점수: 미측정
- ✅ 코드 스플리팅: 부분 적용
- ✅ 이미지 최적화: 미흡

---

## 버그 및 이슈

### 알려진 이슈
1. **받침 연음 처리 불완전**: 일부 한글 이름 로마자 변환 부정확
2. **Open Graph 이미지**: 실제 이미지 생성 미구현 (리다이렉트만)
3. **메모리 저장소**: 서버 재시작 시 데이터 손실
4. **모바일 키보드**: 입력 시 레이아웃 깨짐 가능성

### 버그 제보
- **이메일**: jowheemin@gmail.com
- **GitHub**: (저장소 URL 없음)

---

## 라이선스 및 저작권

### 프로젝트 라이선스
- **MIT License**

### 폰트 라이선스
- **Cinzel**: SIL Open Font License
- **Noto Sans Runic**: SIL Open Font License

### 의존성 라이선스
- 대부분 MIT License
- 일부 Apache 2.0

---

## 연락처 및 지원

### 개발자
- **이메일**: jowheemin@gmail.com

### 사이트
- **프로덕션**: https://viking-rune-converter.netlify.app/

### 피드백
- 버그 제보: jowheemin@gmail.com
- 기능 제안: 환영합니다!

---

## 부록

### Elder Futhark 룬 전체 목록

| 룬 | 이름 | 음가 | 의미 |
|---|---|---|---|
| ᚠ | Fehu | /f/ | 재산, 소 |
| ᚢ | Uruz | /u/ | 야생 황소, 힘 |
| ᚦ | Thurisaz | /θ/ | 거인, 가시 |
| ᚨ | Ansuz | /a/ | 신, 오딘 |
| ᚱ | Raidho | /r/ | 여행, 말타기 |
| ᚲ | Kaunan | /k/ | 횃불, 빛 |
| ᚷ | Gebo | /g/ | 선물, 교환 |
| ᚹ | Wunjo | /w/ | 기쁨, 행복 |
| ᚺ | Hagalaz | /h/ | 우박, 파괴 |
| ᚾ | Nauthiz | /n/ | 필요, 궁핍 |
| ᛁ | Isaz | /i/ | 얼음, 정체 |
| ᛃ | Jera | /j/ | 수확, 계절 |
| ᛇ | Eihwaz | /ei/ | 주목나무 |
| ᛈ | Perthro | /p/ | 운명, 비밀 |
| ᛉ | Algiz | /z/ | 보호, 사슴뿔 |
| ᛊ | Sowilo | /s/ | 태양, 성공 |
| ᛏ | Tiwaz | /t/ | 정의, 승리 |
| ᛒ | Berkanan | /b/ | 자작나무, 성장 |
| ᛖ | Ehwaz | /e/ | 말, 협력 |
| ᛗ | Mannaz | /m/ | 인간, 자아 |
| ᛚ | Laguz | /l/ | 물, 호수 |
| ᛜ | Ingwaz | /ng/ | 신 잉그, 풍요 |
| ᛞ | Dagaz | /d/ | 낮, 변화 |
| ᛟ | Othalan | /o/ | 유산, 재산 |

### 참고 자료
1. **Revised Romanization of Korean** - 국립국어원
2. **Elder Futhark** - Wikipedia
3. **Viking Runes** - Norse Mythology Books
4. **Runic Alphabets** - Omniglot

---

*이 문서는 2025년 12월 16일 기준으로 작성되었습니다.*
*프로젝트 버전: 1.0.0*
*마지막 업데이트: 2025-12-16*

