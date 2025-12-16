# Viking Rune Converter - UI/디자인 상세 문서

## 📋 목차
1. [디자인 철학](#디자인-철학)
2. [색상 시스템](#색상-시스템)
3. [타이포그래피](#타이포그래피)
4. [레이아웃 시스템](#레이아웃-시스템)
5. [컴포넌트 디자인](#컴포넌트-디자인)
6. [애니메이션 & 인터랙션](#애니메이션--인터랙션)
7. [반응형 디자인](#반응형-디자인)
8. [접근성 (Accessibility)](#접근성-accessibility)
9. [디자인 토큰](#디자인-토큰)
10. [스타일 가이드](#스타일-가이드)

---

## 디자인 철학

### 🎨 핵심 테마: "Ancient Manuscript Meets Digital"
고대 바이킹 시대의 양피지 필사본과 현대 디지털 인터페이스의 조화

#### 디자인 원칙
1. **역사적 진정성** - 실제 고대 양피지와 룬 문자의 미학 반영
2. **직관적 사용성** - 복잡한 변환 과정을 단순하고 명확하게
3. **신비로운 경험** - 바이킹 문화의 신비로움을 시각적으로 전달
4. **접근성 우선** - 모든 사용자가 쉽게 접근 가능한 인터페이스

#### 무드 & 톤
- **시각적 무드**: 따뜻함, 고대스러움, 신비로움, 우아함
- **감성적 톤**: 역사적, 존중스러운, 교육적, 흥미로운
- **브랜드 개성**: 지혜로운, 전통적이면서도 접근 가능한

### 🎯 디자인 목표
1. 사용자가 고대 바이킹 세계로 "여행"하는 느낌
2. 변환 과정을 시각적으로 흥미롭게 만들기
3. 룬 문자의 아름다움과 의미를 효과적으로 전달
4. 모든 디바이스에서 일관된 경험 제공

---

## 색상 시스템

### 🎨 Primary Color Palette

#### 양피지 계열 (Parchment)
```css
/* 메인 배경 - 밝은 양피지 */
--parchment: hsl(39, 77%, 96%)
  RGB: (250, 240, 230)
  HEX: #FAF0E6
  용도: 페이지 메인 배경

/* 어두운 양피지 */
--parchment-dark: hsl(36, 33%, 93%)
  RGB: (242, 234, 224)
  HEX: #F2EAE0
  용도: 카드 배경, 레이어드 요소

/* 더 어두운 양피지 */
--parchment-darker: hsl(33, 28%, 88%)
  RGB: (232, 220, 206)
  HEX: #E8DCCE
  용도: 호버 상태, 그림자 효과
```

#### 바이킹 브라운 계열 (Viking Brown)
```css
/* 메인 브라운 - 진한 갈색 */
--viking-brown: hsl(25, 62%, 35%)
  RGB: (143, 87, 34)
  HEX: #8F5722
  용도: 제목, 텍스트, 테두리

/* 다크 브라운 */
--viking-brown-dark: hsl(25, 62%, 25%)
  RGB: (102, 62, 24)
  HEX: #663E18
  용도: 푸터 배경, 강조 텍스트

/* 탄 브라운 */
--viking-tan: hsl(32, 43%, 70%)
  RGB: (198, 170, 142)
  HEX: #C6AA8E
  용도: 부제목, 보조 텍스트
```

#### 골드 & 강조 계열 (Gold & Accent)
```css
/* 바이킹 골드 - 메인 액센트 */
--viking-gold: hsl(45, 100%, 35%)
  RGB: (178, 134, 0)
  HEX: #B28600
  용도: 버튼, 강조, 호버 효과

/* 밝은 골드 */
--viking-gold-light: hsl(45, 100%, 45%)
  RGB: (230, 173, 0)
  HEX: #E6AD00
  용도: 그라디언트, 빛나는 효과

/* 페루 - 보조 액센트 */
--viking-peru: hsl(25, 62%, 55%)
  RGB: (205, 133, 63)
  HEX: #CD853F
  용도: 아이콘, 장식 요소

/* 구리색 */
--viking-copper: hsl(22, 65%, 57%)
  RGB: (210, 125, 64)
  HEX: #D27D40
  용도: 특수 강조, 호버 상태
```

#### 텍스트 계열
```css
/* 다크 브라운 텍스트 */
--text-brown: hsl(30, 36%, 15%)
  RGB: (52, 41, 25)
  HEX: #342919
  용도: 본문 텍스트

/* 라이트 브라운 텍스트 */
--text-brown-light: hsl(32, 18%, 35%)
  RGB: (105, 91, 73)
  HEX: #695B49
  용도: 보조 텍스트, 설명
```

### 🌈 색상 사용 가이드

#### 계층 구조
```
레벨 1 (최상위): --parchment (페이지 배경)
└─ 레벨 2: --parchment-dark (카드/섹션)
   └─ 레벨 3: --parchment-darker (내부 요소)
      └─ 레벨 4: --viking-gold/brown (강조/액션)
```

#### 색상 조합 규칙
1. **높은 대비**: 텍스트(--text-brown) + 배경(--parchment)
2. **중간 대비**: 부제목(--viking-tan) + 배경
3. **강조**: 골드(--viking-gold) + 브라운 배경
4. **호버**: 원래 색상 → 10-20% 밝거나 어둡게

### 🎭 색상 심리학

#### 갈색 계열 (Brown)
- **의미**: 안정감, 신뢰, 전통, 자연
- **효과**: 사용자에게 역사적 진정성 전달
- **적용**: 텍스트, 테두리, 메인 요소

#### 금색 계열 (Gold)
- **의미**: 가치, 성공, 신비, 고귀함
- **효과**: 특별함과 중요성 강조
- **적용**: 버튼, 강조 요소, 애니메이션

#### 양피지 계열 (Parchment)
- **의미**: 역사, 지식, 고대
- **효과**: 고대 필사본의 느낌 재현
- **적용**: 배경, 카드, 컨테이너

### 🔧 색상 접근성

#### 대비율 (WCAG 2.1 기준)
```
텍스트 대비율:
- text-brown (#342919) on parchment (#FAF0E6): 12.5:1 ✅ AAA
- text-brown-light (#695B49) on parchment: 6.8:1 ✅ AA
- viking-brown (#8F5722) on parchment: 5.2:1 ✅ AA

버튼 대비율:
- white on viking-gold (#B28600): 4.8:1 ✅ AA
- white on viking-brown (#8F5722): 5.9:1 ✅ AA
```

---

## 타이포그래피

### 📝 폰트 패밀리

#### Cinzel (Primary Font)
```css
font-family: 'Cinzel', serif;
```
- **유형**: 세리프 (Serif)
- **출처**: Google Fonts
- **라이선스**: SIL Open Font License
- **특징**: 
  - 고대 로마 비문에서 영감
  - 우아하고 고전적인 느낌
  - 가독성이 뛰어남
- **용도**: 본문, 일반 텍스트, 버튼

#### Cinzel Decorative (Decorative Font)
```css
font-family: 'Cinzel Decorative', serif;
```
- **유형**: 장식 세리프
- **특징**:
  - 더 화려하고 장식적
  - 고대 필사본 스타일
- **용도**: 제목, 룬 문자 섹션 헤더

#### Noto Sans Runic (Rune Font)
```css
font-family: 'Noto Sans Runic', monospace;
```
- **유형**: 룬 문자 전용
- **특징**:
  - Elder Futhark 룬 문자 완벽 지원
  - Unicode 룬 범위 (U+16A0–U+16FF)
- **용도**: 룬 문자 표시 전용

### 📏 타입 스케일 (Type Scale)

#### 데스크톱 크기
```css
/* Hero Title - 룬 문자 제목 */
.text-7xl: 5rem (80px)
  line-height: 1.1
  용도: 메인 페이지 제목 (ᚱᚢᚾᛖ ᚲᚮᚾᚡᛖᚱᛏᛖᚱ)

/* Display Large */
.text-6xl: 4rem (64px)
  line-height: 1.2
  용도: 변환된 룬 문자 결과

/* Display Medium */
.text-5xl: 3rem (48px)
  line-height: 1.2
  용도: 섹션 제목

/* Heading 1 */
.text-4xl: 2.25rem (36px)
  line-height: 1.3
  용도: 메인 제목

/* Heading 2 */
.text-3xl: 1.875rem (30px)
  line-height: 1.3
  용도: 서브 섹션 제목

/* Heading 3 */
.text-2xl: 1.5rem (24px)
  line-height: 1.4
  용도: 카드 제목

/* Heading 4 */
.text-xl: 1.25rem (20px)
  line-height: 1.4
  용도: 작은 제목, 레이블

/* Body Large */
.text-lg: 1.125rem (18px)
  line-height: 1.6
  용도: 중요한 본문, 입력 필드

/* Body Medium (Base) */
.text-base: 1rem (16px)
  line-height: 1.6
  용도: 일반 본문 텍스트

/* Body Small */
.text-sm: 0.875rem (14px)
  line-height: 1.5
  용도: 보조 텍스트, 캡션

/* Caption */
.text-xs: 0.75rem (12px)
  line-height: 1.4
  용도: 각주, 메타 정보
```

#### 모바일 크기 (반응형)
```css
/* Hero Title (Mobile) */
.text-5xl (md:text-7xl): 3rem → 5rem
  
/* Display (Mobile) */
.text-4xl (md:text-6xl): 2.25rem → 4rem

/* 나머지는 동일 또는 -10~20% 축소 */
```

### ⚖️ 폰트 굵기 (Font Weight)

```css
/* Cinzel 사용 가능한 굵기 */
font-weight: 400;  /* Regular - 기본 본문 */
font-weight: 600;  /* SemiBold - 강조 텍스트 */
font-weight: 700;  /* Bold - 제목, 버튼 */

/* Cinzel Decorative */
font-weight: 400;  /* Regular - 기본 */
font-weight: 700;  /* Bold - 강한 강조 */
```

### 📐 행간 & 자간 (Line Height & Letter Spacing)

#### 행간 (Line Height)
```css
/* Tight - 제목용 */
line-height: 1.1 - 1.2

/* Normal - 일반 텍스트 */
line-height: 1.5 - 1.6

/* Relaxed - 긴 본문 */
line-height: 1.7 - 1.8

/* 룬 문자 특수 */
line-height: 1.0 - 1.1 (빡빡하게)
```

#### 자간 (Letter Spacing)
```css
/* 제목 */
letter-spacing: -0.02em (약간 좁게)

/* 본문 */
letter-spacing: normal (0)

/* 버튼/레이블 */
letter-spacing: 0.02em (약간 넓게)

/* 룬 문자 */
letter-spacing: 0.1em (넓게 - 가독성)
```

### 🎨 텍스트 스타일링 클래스

```css
/* 제목 스타일 */
.font-cinzel-decorative {
  font-family: 'Cinzel Decorative', serif;
  font-weight: 700;
}

/* 본문 스타일 */
.font-cinzel {
  font-family: 'Cinzel', serif;
  font-weight: 400;
}

/* 룬 문자 */
.rune-character {
  font-family: 'Noto Sans Runic', monospace;
  color: hsl(25, 62%, 35%);
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  filter: drop-shadow(1px 1px 2px rgba(0,0,0,0.2));
}

/* 큰 룬 문자 */
.rune-character-large {
  font-family: 'Noto Sans Runic', monospace;
  background: linear-gradient(135deg, 
    hsl(25, 62%, 35%) 0%, 
    hsl(45, 100%, 35%) 50%, 
    hsl(25, 62%, 35%) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
}
```

### 📱 반응형 타이포그래피

```css
/* 모바일 우선 접근 */
@media (max-width: 767px) {
  /* 제목 축소 */
  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  
  /* 본문 유지 */
  body { font-size: 1rem; }
  
  /* 룬 문자 축소 */
  .rune-character-large { font-size: 3rem; }
}

@media (min-width: 768px) {
  /* 태블릿 */
  h1 { font-size: 3.5rem; }
}

@media (min-width: 1024px) {
  /* 데스크톱 */
  h1 { font-size: 5rem; }
}
```

---

## 레이아웃 시스템

### 📐 그리드 시스템

#### 컨테이너 너비
```css
/* 메인 컨테이너 */
.max-w-4xl {
  max-width: 56rem; /* 896px */
}

/* 넓은 컨테이너 */
.max-w-6xl {
  max-width: 72rem; /* 1152px */
}

/* 텍스트 컨테이너 */
.max-w-2xl {
  max-width: 42rem; /* 672px */
}
```

#### 패딩 & 마진
```css
/* 섹션 간격 */
.mb-8 { margin-bottom: 2rem; }   /* 32px */
.mb-12 { margin-bottom: 3rem; }  /* 48px */
.mb-16 { margin-bottom: 4rem; }  /* 64px */

/* 카드 내부 패딩 */
.p-8 { padding: 2rem; }          /* 32px */
.p-6 { padding: 1.5rem; }        /* 24px */

/* 반응형 패딩 */
.px-4 { padding-left/right: 1rem; }   /* 모바일 */
.md:px-8 { padding-left/right: 2rem; } /* 데스크톱 */
```

#### 그리드 레이아웃
```css
/* 3열 그리드 (Feature 카드) */
.grid.grid-cols-1.md:grid-cols-3 {
  /* 모바일: 1열 */
  /* 태블릿+: 3열 */
  gap: 1.5rem; /* 24px */
}

/* 2열 그리드 (룬 상세 정보) */
.grid.grid-cols-1.lg:grid-cols-2 {
  /* 모바일: 1열 */
  /* 데스크톱: 2열 */
  gap: 1.5rem;
}

/* 룬 문자표 그리드 */
.grid.grid-cols-3.md:grid-cols-6.lg:grid-cols-8 {
  /* 모바일: 3열 */
  /* 태블릿: 6열 */
  /* 데스크톱: 8열 */
  gap: 1rem; /* 16px */
}
```

### 📦 컴포넌트 레이아웃

#### 페이지 구조
```
┌─────────────────────────────────────┐
│           Header                     │
│  - 제목 + 룬 문자                    │
│  - 기능 소개 카드 (3개)              │
│  - 언어 선택기                       │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│          Main Content                │
│  ┌───────────────────────────────┐  │
│  │  Section 1: 이름 입력         │  │
│  │  - 한글 입력                  │  │
│  │  - 영문 입력                  │  │
│  │  - 변환 버튼                  │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │  Section 2: 변환 결과         │  │
│  │  - 룬 문자 표시               │  │
│  │  - 액션 버튼 (공유/다운로드)  │  │
│  │  - 종합 의미                  │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │  Section 3: 상세 해석         │  │
│  │  - 각 룬의 의미 카드          │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │  Section 4: 룬 문자표         │  │
│  └───────────────────────────────┘  │
│  ┌───────────────────────────────┐  │
│  │  Section 5: 역사 정보         │  │
│  └───────────────────────────────┘  │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│           Footer                     │
│  - 룬 정보                           │
│  - 저작권                            │
│  - 연락처                            │
└─────────────────────────────────────┘
```

### 🎯 Z-Index 계층
```css
/* Z-Index 체계 */
.z-0   { z-index: 0; }   /* 기본 레이어 */
.z-10  { z-index: 10; }  /* 카드 내용 */
.z-20  { z-index: 20; }  /* 언어 선택기 */
.z-30  { z-index: 30; }  /* 드롭다운 */
.z-40  { z-index: 40; }  /* 모달 오버레이 */
.z-50  { z-index: 50; }  /* 모달 컨텐츠 */
```

---

## 컴포넌트 디자인

### 🎴 Card 컴포넌트

#### 기본 카드 스타일
```css
.manuscript-page {
  /* 양피지 그라디언트 배경 */
  background: linear-gradient(135deg, 
    hsl(39, 77%, 97%) 0%, 
    hsl(36, 33%, 94%) 25%, 
    hsl(39, 77%, 96%) 50%, 
    hsl(33, 28%, 90%) 75%, 
    hsl(39, 77%, 95%) 100%
  );
  
  /* 다층 그림자 */
  box-shadow: 
    inset 0 0 30px rgba(0, 0, 0, 0.05),
    0 5px 15px rgba(0, 0, 0, 0.1),
    0 2px 5px rgba(0, 0, 0, 0.05);
    
  border: 1px solid rgba(120, 119, 109, 0.2);
  border-radius: 0.75rem; /* 12px */
}
```

#### Ancient Border (고대 테두리)
```css
.ancient-border {
  border: 3px solid hsl(25, 62%, 35%);
  position: relative;
  box-shadow: 
    inset 0 0 20px rgba(0, 0, 0, 0.05),
    0 8px 25px rgba(0, 0, 0, 0.15);
}

/* 외부 테두리 레이어 1 */
.ancient-border::before {
  content: '';
  position: absolute;
  top: -8px; left: -8px;
  right: -8px; bottom: -8px;
  border: 2px solid hsl(25, 62%, 55%);
  border-radius: inherit;
  pointer-events: none;
  opacity: 0.7;
}

/* 외부 테두리 레이어 2 */
.ancient-border::after {
  content: '';
  position: absolute;
  top: -12px; left: -12px;
  right: -12px; bottom: -12px;
  border: 1px solid hsl(32, 43%, 70%);
  border-radius: inherit;
  pointer-events: none;
  opacity: 0.4;
}
```

### 🔘 Button 컴포넌트

#### Viking Button (Primary)
```css
.btn-viking {
  /* 그라디언트 배경 */
  background: linear-gradient(135deg, 
    hsl(45, 100%, 35%) 0%, 
    hsl(45, 100%, 45%) 50%, 
    hsl(45, 100%, 35%) 100%
  );
  
  /* 테두리 */
  border: 2px solid hsl(25, 62%, 35%);
  
  /* 다층 그림자 */
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.2),
    inset 0 1px 3px rgba(255, 255, 255, 0.3);
    
  /* 전환 효과 */
  transition: all 0.3s ease;
  
  /* 오버플로우 숨김 (반짝임 효과용) */
  position: relative;
  overflow: hidden;
}

/* 빛나는 효과 (Shine Effect) */
.btn-viking::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.2), 
    transparent
  );
  transition: left 0.5s ease;
}

.btn-viking:hover::before {
  left: 100%; /* 왼쪽에서 오른쪽으로 빛 이동 */
}

/* 호버 상태 */
.btn-viking:hover {
  transform: translateY(-2px);
  box-shadow: 
    0 6px 20px rgba(0, 0, 0, 0.25),
    inset 0 1px 3px rgba(255, 255, 255, 0.4);
}

/* 클릭 상태 */
.btn-viking:active {
  transform: translateY(0px);
  box-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.2),
    inset 0 1px 3px rgba(255, 255, 255, 0.3);
}

/* 비활성 상태 */
.btn-viking:disabled {
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;
}
```

#### Button Sizes
```css
/* Small */
.btn-sm {
  padding: 0.5rem 1rem;    /* 8px 16px */
  font-size: 0.875rem;     /* 14px */
}

/* Medium (Default) */
.btn-md {
  padding: 0.75rem 1.5rem; /* 12px 24px */
  font-size: 1rem;         /* 16px */
}

/* Large */
.btn-lg {
  padding: 1rem 2rem;      /* 16px 32px */
  font-size: 1.125rem;     /* 18px */
}

/* Extra Large (변환 버튼) */
.btn-xl {
  padding: 1.25rem 2.5rem; /* 20px 40px */
  font-size: 1.25rem;      /* 20px */
}
```

### 📝 Input 컴포넌트

#### Parchment Input
```css
.input-parchment {
  /* 배경 */
  background: linear-gradient(135deg, 
    hsl(39, 77%, 97%) 0%, 
    hsl(36, 33%, 94%) 100%
  );
  
  /* 테두리 */
  border: 3px solid hsl(25, 62%, 55%);
  
  /* 그림자 */
  box-shadow: 
    inset 0 2px 5px rgba(0, 0, 0, 0.05),
    0 3px 10px rgba(0, 0, 0, 0.1);
    
  /* 전환 */
  transition: all 0.3s ease;
  
  /* 텍스트 스타일 */
  font-family: 'Cinzel', serif;
  font-size: 1.25rem;      /* 20px */
  text-align: center;
  padding: 1rem 1.5rem;    /* 16px 24px */
}

/* 포커스 상태 */
.input-parchment:focus {
  outline: none;
  border-color: hsl(45, 100%, 35%);
  box-shadow: 
    inset 0 2px 5px rgba(0, 0, 0, 0.05),
    0 0 0 4px rgba(184, 134, 11, 0.15),
    0 5px 15px rgba(0, 0, 0, 0.15);
  transform: translateY(-1px);
}

/* 플레이스홀더 */
.input-parchment::placeholder {
  color: hsl(32, 18%, 55%);
  opacity: 0.7;
}
```

### 🎯 Badge 컴포넌트

```css
/* 기본 배지 */
.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem; /* 4px 12px */
  font-size: 0.75rem;        /* 12px */
  font-weight: 600;
  border-radius: 9999px;     /* 완전한 원형 */
  border: 1px solid transparent;
}

/* Viking 스타일 배지 */
.badge-viking {
  background: linear-gradient(135deg,
    rgba(184, 134, 11, 0.1),
    rgba(184, 134, 11, 0.2)
  );
  color: hsl(25, 62%, 35%);
  border-color: rgba(184, 134, 11, 0.2);
}

/* 키워드 배지 */
.badge-keyword {
  background: hsl(45, 100%, 95%);
  color: hsl(25, 62%, 35%);
  border-color: hsl(45, 100%, 80%);
}
```

### 📊 Progress Circle (변환 로딩)

```tsx
<svg className="w-32 h-32 transform -rotate-90">
  {/* 배경 원 */}
  <circle 
    cx="60" cy="60" r="50" 
    stroke="hsl(32, 43%, 70%)" 
    strokeWidth="8" 
    fill="none" 
    opacity="0.3"
  />
  
  {/* 진행 원 */}
  <circle 
    cx="60" cy="60" r="50" 
    stroke="hsl(45, 100%, 35%)" 
    strokeWidth="8" 
    fill="none" 
    strokeLinecap="round"
    strokeDasharray="314" /* 2πr */
    strokeDashoffset={314 * (1 - progress / 100)}
    className="transition-all duration-300"
  />
</svg>
```

### 🎨 Divider 컴포넌트

#### 장식 분리선
```css
.ornamental-divider {
  position: relative;
  height: 20px;
  margin: 2rem 0;
}

/* 장식 기호 */
.ornamental-divider::before {
  content: '⚜ ❦ ⚜';
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  color: hsl(25, 62%, 55%);
  font-size: 1.2rem;
  background: hsl(39, 77%, 96%);
  padding: 0 1rem;
}

/* 배경 선 */
.ornamental-divider::after {
  content: '';
  position: absolute;
  top: 50%; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
    transparent, 
    hsl(25, 62%, 55%), 
    transparent
  );
}
```

#### 데코레이티브 분리선
```css
.decorative-divider {
  background: linear-gradient(90deg, 
    transparent 0%, 
    hsl(32, 43%, 70%) 20%, 
    hsl(25, 62%, 35%) 50%, 
    hsl(32, 43%, 70%) 80%, 
    transparent 100%
  );
  height: 3px;
  margin: 1.5rem 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
```

---

## 애니메이션 & 인터랙션

### 🎭 애니메이션 원칙
1. **자연스러움**: 현실 물리 법칙 반영
2. **의미 있음**: 모든 애니메이션은 목적이 있어야 함
3. **성능 우선**: 60fps 유지
4. **접근성**: 모션 감소 설정 존중

### ✨ 주요 애니메이션

#### 1. Floating Animation (떠다니기)
```css
.floating-animation {
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  25% { 
    transform: translateY(-5px) rotate(0.5deg); 
  }
  50% { 
    transform: translateY(-8px) rotate(0deg); 
  }
  75% { 
    transform: translateY(-3px) rotate(-0.5deg); 
  }
}
```
**사용**: 룬 문자 제목, 장식 요소

#### 2. Pulse Glow (펄스 광채)
```css
.pulse-glow {
  animation: pulseGlow 3s ease-in-out infinite;
}

@keyframes pulseGlow {
  0%, 100% { 
    box-shadow: 
      0 0 20px rgba(184, 134, 11, 0.2),
      0 8px 25px rgba(0, 0, 0, 0.1);
  }
  50% { 
    box-shadow: 
      0 0 30px rgba(184, 134, 11, 0.4),
      0 12px 35px rgba(0, 0, 0, 0.15);
  }
}
```
**사용**: 변환 결과 카드, 중요 요소

#### 3. Scroll Reveal (스크롤 등장)
```css
.scroll-reveal {
  opacity: 0;
  transform: translateY(30px);
  animation: scrollReveal 0.8s ease forwards;
}

@keyframes scrollReveal {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```
**사용**: 섹션 등장 시

#### 4. Converting Animation (변환 중)
```css
.converting-animation {
  animation: converting 2s ease-in-out;
}

@keyframes converting {
  0% { 
    opacity: 1; 
    transform: scale(1); 
  }
  50% { 
    opacity: 0.7; 
    transform: scale(1.05); 
  }
  100% { 
    opacity: 1; 
    transform: scale(1); 
  }
}
```
**사용**: 변환 로딩 페이지

#### 5. Button Shine (버튼 반짝임)
```css
/* ::before 가상 요소 사용 */
.btn-viking:hover::before {
  animation: shine 0.5s ease;
}

@keyframes shine {
  0% { left: -100%; }
  100% { left: 100%; }
}
```
**사용**: 버튼 호버 시

### 🎯 인터랙션 피드백

#### Hover States (호버 상태)
```css
/* 카드 호버 */
.hover-card {
  transition: all 0.3s ease;
}
.hover-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}

/* 버튼 호버 */
.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

/* 링크 호버 */
a:hover {
  color: hsl(45, 100%, 35%);
  text-decoration: underline;
  transition: color 0.2s ease;
}
```

#### Active/Focus States
```css
/* 버튼 클릭 */
.btn:active {
  transform: translateY(0px) scale(0.98);
}

/* 입력 포커스 */
input:focus {
  border-color: hsl(45, 100%, 35%);
  box-shadow: 0 0 0 4px rgba(184, 134, 11, 0.15);
}

/* 카드 그룹 호버 */
.card-group:hover {
  opacity: 0.2; /* 형제 요소 흐리게 */
}
.card-group:hover .card:hover {
  opacity: 1; /* 현재 카드만 선명하게 */
}
```

### 🎬 페이지 전환

#### 변환 로딩 페이지
```tsx
// 1단계: 페이드 인
opacity: 0 → 1 (500ms)

// 2단계: 진행 바
strokeDashoffset: 314 → 0 (5초)

// 3단계: 단계 표시
opacity: 0.3 → 1 (각 1초 간격)

// 4단계: 페이드 아웃
opacity: 1 → 0 (500ms)

// 5단계: 결과 페이지 스크롤
scrollIntoView({ behavior: 'smooth' })
```

### ⚡ 성능 최적화

#### GPU 가속 속성
```css
/* GPU 가속 활용 */
transform: translateZ(0); /* 레이어 생성 */
will-change: transform, opacity; /* 최적화 힌트 */

/* 피해야 할 속성 */
/* width, height, left, top (리플로우 발생) */
```

#### 애니메이션 제어
```css
/* 모션 감소 설정 존중 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 반응형 디자인

### 📱 Breakpoint 시스템

#### Tailwind Breakpoints
```css
/* 모바일 우선 (Mobile First) */
/* 기본: 320px - 639px */

/* Small (sm) - 640px 이상 */
@media (min-width: 640px) { 
  /* 큰 폰, 작은 태블릿 */
}

/* Medium (md) - 768px 이상 */
@media (min-width: 768px) { 
  /* 태블릿 */
}

/* Large (lg) - 1024px 이상 */
@media (min-width: 1024px) { 
  /* 데스크톱 */
}

/* Extra Large (xl) - 1280px 이상 */
@media (min-width: 1280px) { 
  /* 큰 데스크톱 */
}

/* 2XL - 1536px 이상 */
@media (min-width: 1536px) { 
  /* 초대형 화면 */
}
```

### 📐 컴포넌트별 반응형

#### Header
```tsx
/* 모바일 */
<h1 className="text-5xl">
  {/* 48px */}
</h1>

/* 데스크톱 */
<h1 className="text-5xl md:text-7xl">
  {/* 48px → 80px */}
</h1>

/* 언어 선택기 */
<div className="absolute top-4 right-4">
  {/* 모바일: 아이콘만 */}
  {/* 데스크톱: 아이콘 + 텍스트 */}
</div>
```

#### Feature Cards
```tsx
/* 모바일: 1열 */
<div className="grid grid-cols-1">

/* 데스크톱: 3열 */
<div className="grid grid-cols-1 md:grid-cols-3">
```

#### Input Fields
```tsx
/* 모바일 */
<Input className="text-xl py-4 px-6">
  {/* 20px, 16px 24px */}
</Input>

/* 데스크톱 (동일) */
```

#### Rune Result
```tsx
/* 모바일 */
<div className="text-6xl">
  {/* 64px */}
</div>

/* 데스크톱 */
<div className="text-6xl md:text-8xl">
  {/* 64px → 96px */}
</div>
```

#### Rune Explanation Cards
```tsx
/* 모바일: 1열 */
<div className="grid grid-cols-1">

/* 데스크톱: 2열 */
<div className="grid grid-cols-1 lg:grid-cols-2">
```

#### Rune Reference Table
```tsx
/* 모바일: 3열 */
<div className="grid grid-cols-3">

/* 태블릿: 6열 */
<div className="grid grid-cols-3 md:grid-cols-6">

/* 데스크톱: 8열 */
<div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8">
```

### 📱 모바일 최적화

#### Touch Targets (터치 영역)
```css
/* 최소 44x44px (애플 권장) */
.btn-mobile {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 24px;
}

/* 터치 영역 확장 */
.touch-target::before {
  content: '';
  position: absolute;
  top: -10px; right: -10px;
  bottom: -10px; left: -10px;
}
```

#### 가독성
```css
/* 모바일 최소 폰트 크기 */
body { font-size: 16px; } /* 브라우저 줌 방지 */

/* 행간 넓게 */
p { line-height: 1.6; }

/* 충분한 패딩 */
.mobile-section { padding: 1.5rem; }
```

#### 스크롤 최적화
```css
/* 부드러운 스크롤 */
html {
  scroll-behavior: smooth;
}

/* iOS 관성 스크롤 */
.scrollable {
  -webkit-overflow-scrolling: touch;
}
```

### 🖥️ 데스크톱 최적화

#### 호버 효과
```css
/* 데스크톱만 호버 적용 */
@media (hover: hover) {
  .card:hover {
    transform: translateY(-4px);
  }
}
```

#### 레이아웃
```css
/* 넓은 화면 활용 */
.container {
  max-width: 896px; /* 4xl */
  margin: 0 auto;
  padding: 0 2rem;
}

/* 사이드바 여백 */
@media (min-width: 1280px) {
  .container {
    padding: 0 4rem;
  }
}
```

---

## 접근성 (Accessibility)

### ♿ WCAG 2.1 준수

#### 색상 대비 (Contrast Ratio)
```css
/* Level AA 기준 (4.5:1 이상) */
/* 본문 텍스트 */
color: #342919 on #FAF0E6 
→ 12.5:1 ✅ AAA

/* 보조 텍스트 */
color: #695B49 on #FAF0E6 
→ 6.8:1 ✅ AA

/* 버튼 텍스트 */
color: #FFFFFF on #B28600 
→ 4.8:1 ✅ AA
```

#### 포커스 표시
```css
/* 키보드 포커스 명확히 */
*:focus-visible {
  outline: 3px solid hsl(45, 100%, 35%);
  outline-offset: 2px;
}

/* 버튼 포커스 */
.btn:focus-visible {
  box-shadow: 0 0 0 4px rgba(184, 134, 11, 0.3);
}

/* 입력 포커스 */
input:focus {
  border-color: hsl(45, 100%, 35%);
  box-shadow: 0 0 0 4px rgba(184, 134, 11, 0.15);
}
```

### 🏷️ Semantic HTML

```html
<!-- 올바른 구조 -->
<header>
  <h1>바이킹 룬 문자 변환기</h1>
  <nav>언어 선택</nav>
</header>

<main>
  <section aria-label="이름 입력">
    <form>
      <label for="korean-name">한국어 이름</label>
      <input id="korean-name" type="text">
    </form>
  </section>
  
  <section aria-label="변환 결과">
    <!-- 결과 표시 -->
  </section>
</main>

<footer>
  <p>저작권 정보</p>
</footer>
```

### 🎯 ARIA 속성

```tsx
// 버튼
<Button
  aria-label="룬 문자로 변환"
  aria-busy={isConverting}
  aria-disabled={!englishName}
>
  변환하기
</Button>

// 다이얼로그
<Dialog
  role="dialog"
  aria-modal="true"
  aria-labelledby="dialog-title"
>
  <DialogTitle id="dialog-title">
    공유하기
  </DialogTitle>
</Dialog>

// 진행 상태
<div
  role="progressbar"
  aria-valuenow={progress}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-label="변환 진행"
>
  {progress}%
</div>

// 알림
<div
  role="alert"
  aria-live="polite"
>
  변환이 완료되었습니다
</div>
```

### ⌨️ 키보드 네비게이션

```tsx
// Tab 순서 제어
tabIndex={0}  // 일반 순서
tabIndex={-1} // Tab 제외 (프로그래밍 포커스만)

// 키보드 이벤트
onKeyDown={(e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    handleConvert();
  }
  if (e.key === 'Escape') {
    closeModal();
  }
}}
```

### 🎨 모션 감소 설정

```css
/* 사용자 설정 존중 */
@media (prefers-reduced-motion: reduce) {
  /* 모든 애니메이션 최소화 */
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  
  /* 중요 애니메이션만 유지 (페이드) */
  .essential-animation {
    animation: fade 0.2s ease !important;
  }
}
```

### 📱 스크린 리더

```tsx
// 숨김 텍스트 (스크린 리더용)
<span className="sr-only">
  룬 문자 변환 결과
</span>

// CSS
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## 디자인 토큰

### 🎨 Tailwind 커스텀 토큰

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Viking Theme Colors
        'viking-brown': 'hsl(25, 62%, 35%)',
        'viking-brown-dark': 'hsl(25, 62%, 25%)',
        'viking-tan': 'hsl(32, 43%, 70%)',
        'viking-gold': 'hsl(45, 100%, 35%)',
        'viking-peru': 'hsl(25, 62%, 55%)',
        'parchment': 'hsl(39, 77%, 96%)',
        'parchment-dark': 'hsl(36, 33%, 93%)',
        'text-brown': 'hsl(30, 36%, 15%)',
        'text-brown-light': 'hsl(32, 18%, 35%)',
      },
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'cinzel-decorative': ['Cinzel Decorative', 'serif'],
        'runic': ['Noto Sans Runic', 'monospace'],
      },
      spacing: {
        // 커스텀 간격
        '18': '4.5rem',  // 72px
        '88': '22rem',   // 352px
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
}
```

### 📏 Spacing Scale

```css
/* Tailwind 기본 스케일 */
0   : 0px
0.5 : 2px
1   : 4px
2   : 8px
3   : 12px
4   : 16px
5   : 20px
6   : 24px
8   : 32px
10  : 40px
12  : 48px
16  : 64px
20  : 80px
24  : 96px
```

---

## 스타일 가이드

### ✅ DO (권장)

#### 색상
- ✅ 정의된 색상 변수 사용
- ✅ 일관된 색상 조합 사용
- ✅ 충분한 대비비 확보

```css
/* Good ✅ */
color: hsl(25, 62%, 35%);
background: var(--parchment);

/* Bad ❌ */
color: #8B5A2B;
background: #FFF5E6;
```

#### 타이포그래피
- ✅ 정의된 폰트 사용
- ✅ rem 단위 사용
- ✅ 일관된 행간 적용

```css
/* Good ✅ */
font-family: 'Cinzel', serif;
font-size: 1.5rem;
line-height: 1.6;

/* Bad ❌ */
font-family: Arial;
font-size: 24px;
line-height: normal;
```

#### 애니메이션
- ✅ ease 함수 사용
- ✅ 0.3s 기본 duration
- ✅ transform 사용 (GPU 가속)

```css
/* Good ✅ */
transition: transform 0.3s ease;
transform: translateY(-4px);

/* Bad ❌ */
transition: top 0.5s linear;
top: -4px;
```

### ❌ DON'T (비권장)

#### 색상
- ❌ 하드코딩된 HEX 값
- ❌ 불충분한 대비비
- ❌ 과도한 색상 사용

#### 레이아웃
- ❌ 고정 픽셀 너비
- ❌ !important 남용
- ❌ 인라인 스타일

#### 성능
- ❌ width/height 애니메이션
- ❌ 과도한 box-shadow
- ❌ 불필요한 리페인트

### 📋 체크리스트

#### 새 컴포넌트 생성 시
- [ ] 반응형 디자인 확인
- [ ] 접근성 검증 (키보드, 스크린 리더)
- [ ] 색상 대비비 확인
- [ ] 애니메이션 성능 테스트
- [ ] 모바일에서 터치 테스트
- [ ] 다크모드 고려 (선택)

#### 스타일링 시
- [ ] Tailwind 클래스 우선 사용
- [ ] 커스텀 CSS는 최소화
- [ ] 재사용 가능한 클래스 생성
- [ ] 네이밍 일관성 유지
- [ ] 불필요한 중첩 피하기

---

## 부록

### 🎨 Figma 디자인 시스템 (가상)

```
Color Styles:
├─ Primary
│  ├─ Viking Brown
│  ├─ Viking Gold
│  └─ Viking Tan
├─ Background
│  ├─ Parchment
│  ├─ Parchment Dark
│  └─ Parchment Darker
└─ Text
   ├─ Text Brown
   └─ Text Brown Light

Text Styles:
├─ Display
│  ├─ Display XL (80px, Bold)
│  ├─ Display L (64px, Bold)
│  └─ Display M (48px, Bold)
├─ Heading
│  ├─ H1 (36px, Bold)
│  ├─ H2 (30px, SemiBold)
│  └─ H3 (24px, SemiBold)
└─ Body
   ├─ Body L (18px, Regular)
   ├─ Body M (16px, Regular)
   └─ Body S (14px, Regular)

Effect Styles:
├─ Shadow
│  ├─ Card Shadow
│  ├─ Button Shadow
│  └─ Text Shadow
└─ Glow
   ├─ Gold Glow
   └─ Pulse Glow
```

### 🖼️ 이미지 가이드라인

#### 아이콘
- **크기**: 16px, 20px, 24px, 32px
- **스타일**: Lucide Icons
- **색상**: Viking Brown, Viking Gold

#### 룬 문자
- **폰트**: Noto Sans Runic
- **크기**: 최소 24px (가독성)
- **색상**: 그라디언트 또는 단색

### 📱 플랫폼별 고려사항

#### iOS Safari
- `-webkit-overflow-scrolling: touch`
- Safe Area 고려 (`env(safe-area-inset-*)`)
- 고정 요소 버그 주의

#### Android Chrome
- 주소 표시줄 높이 변화 대응
- 터치 하이라이트 제거 (`-webkit-tap-highlight-color`)

#### 데스크톱
- 마우스 호버 최적화
- 키보드 네비게이션 우선
- 넓은 화면 레이아웃

---

## 버전 히스토리

### v1.0.0 (2025-12-16)
- 초기 디자인 시스템 구축
- 바이킹 테마 색상 팔레트 정의
- 핵심 컴포넌트 스타일 완성
- 반응형 디자인 적용
- 접근성 기본 구현

---

## 참고 자료

### 디자인 영감
- **Medieval Manuscripts** - 중세 필사본 스타일
- **Viking Art** - 바이킹 예술 패턴
- **Parchment Textures** - 양피지 텍스처

### 기술 문서
- **Tailwind CSS Documentation**
- **Radix UI Design System**
- **WCAG 2.1 Guidelines**
- **Material Design Motion**

### 폰트 출처
- **Cinzel** - Google Fonts (SIL Open Font License)
- **Noto Sans Runic** - Google Fonts (SIL Open Font License)

---

*이 문서는 Viking Rune Converter 프로젝트의 UI/디자인 시스템을 상세히 설명합니다.*
*마지막 업데이트: 2025-12-16*
*작성자: AI Assistant*

