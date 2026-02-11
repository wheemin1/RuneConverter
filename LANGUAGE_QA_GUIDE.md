# 다국어 QA 테스트 가이드

## 1. 브라우저 언어별 자동 감지 테스트

### 테스트 방법 1: Chrome 브라우저 언어 변경

**미국 (영어) 테스트:**
1. Chrome 설정 → 언어 → 영어(미국) 를 맨 위로 이동
2. Chrome 재시작
3. https://viking-rune-converter.netlify.app 접속
4. ✅ 예상: 영어로 표시되어야 함

**한국 테스트:**
1. Chrome 설정 → 언어 → 한국어를 맨 위로 이동
2. Chrome 재시작
3. https://viking-rune-converter.netlify.app 접속
4. ✅ 예상: 한국어로 표시되어야 함

**일본 테스트:**
1. Chrome 설정 → 언어 → 일본어(日本語)를 맨 위로 이동
2. Chrome 재시작
3. https://viking-rune-converter.netlify.app 접속
4. ✅ 예상: 일본어로 표시되어야 함

**중국 (간체) 테스트:**
1. Chrome 설정 → 언어 → 중국어(简体)를 맨 위로 이동
2. Chrome 재시작
3. https://viking-rune-converter.netlify.app 접속
4. ✅ 예상: 중국어 간체로 표시되어야 함

**대만 (번체) 테스트:**
1. Chrome 설정 → 언어 → 中文(繁體)를 맨 위로 이동
2. Chrome 재시작
3. https://viking-rune-converter.netlify.app 접속
4. ✅ 예상: 중국어 번체로 표시되어야 함

**스페인 테스트:**
1. Chrome 설정 → 언어 → Español을 맨 위로 이동
2. Chrome 재시작
3. https://viking-rune-converter.netlify.app 접속
4. ✅ 예상: 스페인어로 표시되어야 함

**프랑스 테스트:**
1. Chrome 설정 → 언어 → Français를 맨 위로 이동
2. Chrome 재시작
3. https://viking-rune-converter.netlify.app 접속
4. ✅ 예상: 프랑스어로 표시되어야 함

**독일 테스트:**
1. Chrome 설정 → 언어 → Deutsch를 맨 위로 이동
2. Chrome 재시작
3. https://viking-rune-converter.netlify.app 접속
4. ✅ 예상: 독일어로 표시되어야 함

**브라질 테스트:**
1. Chrome 설정 → 언어 → Português (Brasil)를 맨 위로 이동
2. Chrome 재시작
3. https://viking-rune-converter.netlify.app 접속
4. ✅ 예상: 브라질 포르투갈어로 표시되어야 함

---

### 테스트 방법 2: VPN 사용

**미국에서 접속 시뮬레이션:**
1. VPN을 미국 서버로 연결
2. Chrome 시크릿 모드로 https://viking-rune-converter.netlify.app 접속
3. ✅ 예상: 영어로 표시 (브라우저 언어가 영어인 경우)

**한국에서 접속:**
1. VPN을 한국 서버로 연결
2. Chrome 시크릿 모드로 https://viking-rune-converter.netlify.app 접속
3. ✅ 예상: 한국어로 표시 (브라우저 언어가 한국어인 경우)

**주의**: VPN만으로는 브라우저 언어가 변경되지 않습니다. VPN + 브라우저 언어 설정을 함께 테스트하세요.

---

### 테스트 방법 3: DevTools Console 테스트

1. F12 → Console 탭
2. 다음 명령어로 현재 브라우저 언어 확인:
```javascript
navigator.language
```

3. 언어 감지 로직 테스트:
```javascript
// 현재 감지된 언어
localStorage.getItem('rune-converter-language')

// localStorage 초기화 (브라우저 언어로 리셋)
localStorage.removeItem('rune-converter-language')
location.reload()
```

---

## 2. 언어 감지 우선순위

1. **URL 파라미터** (최우선) - 공유 링크용
   - `?lang=en` → 영어 강제
   - `?lang=ko` → 한국어 강제
   - `?lang=ja` → 일본어 강제
   - `?lang=zh` → 중국어 간체 강제
   - `?lang=zh-TW` → 중국어 번체 강제
   - `?lang=es` → 스페인어 강제
   - `?lang=fr` → 프랑스어 강제
   - `?lang=de` → 독일어 강제
   - `?lang=pt-BR` → 브라질 포르투갈어 강제

2. **localStorage** (두 번째)
   - 사용자가 이전에 선택한 언어를 기억

3. **navigator.language** (세 번째)
   - 브라우저 언어 설정 자동 감지

---

## 3. 언어별 브라우저 코드 매핑

| 국가/지역 | navigator.language | 사이트 언어 |
|-----------|-------------------|------------|
| 🇺🇸 미국 | en-US | en (English) |
| 🇬🇧 영국 | en-GB | en (English) |
| 🇰🇷 한국 | ko, ko-KR | ko (한국어) |
| 🇯🇵 일본 | ja, ja-JP | ja (日本語) |
| 🇨🇳 중국 | zh-CN, zh | zh (简体中文) |
| 🇹🇼 대만 | zh-TW, zh-HK | zh-TW (繁體中文) |
| 🇪🇸 스페인 | es, es-ES | es (Español) |
| 🇲🇽 멕시코 | es-MX | es (Español) |
| 🇫🇷 프랑스 | fr, fr-FR | fr (Français) |
| 🇩🇪 독일 | de, de-DE | de (Deutsch) |
| 🇧🇷 브라질 | pt-BR | pt-BR (Português) |

**기타 모든 국가**: 기본값 = **en (영어)**

---

## 4. 기능 테스트 체크리스트

### 홈 페이지 테스트
- [ ] 언어 자동 감지 확인
- [ ] 언어 선택기로 수동 변경 가능
- [ ] 이름 입력 (한글, 영어, 일본어, 중국어 등)
- [ ] 변환 버튼 클릭
- [ ] Loading 페이지 표시

### 결과 페이지 테스트
- [ ] 룬 문자 제대로 표시
- [ ] 각 룬의 의미 표시
- [ ] 이미지 다운로드 기능
- [ ] 공유 기능 (URL에 ?lang 파라미터 포함 확인)
- [ ] 뒤로가기 시 입력 내용 유지

### 룬 의미 페이지 테스트
- [ ] `/rune-meanings` 접속
- [ ] 24개 룬 카드 표시
- [ ] 언어별 번역 확인
- [ ] CTA 버튼으로 홈으로 이동

### 다국어 전환 테스트
- [ ] 언어 선택기로 9개 언어 모두 전환 가능
- [ ] 페이지 새로고침 시 선택한 언어 유지
- [ ] 공유 링크 클릭 시 URL 언어 파라미터 우선 적용

---

## 5. AdSense QA 체크리스트

### 광고 표시 여부 확인
- [ ] **홈 페이지**: 광고 표시 ✅ (콘텐츠 충분)
- [ ] **결과 페이지**: 광고 없음 ✅ (수정 완료)
- [ ] **룬 의미 페이지**: 광고 없음 ✅ (교육 콘텐츠)

### ads.txt 접근 테스트
- [ ] https://viking-rune-converter.netlify.app/ads.txt 접속
- [ ] ✅ 예상: `google.com, pub-9247464363490578, DIRECT, f08c47fec0942fa0` 표시
- [ ] ❌ 이전: 404 또는 index.html 리다이렉트

---

## 6. 문제 해결 가이드

### "언어가 자동으로 바뀌지 않아요"
1. localStorage 초기화:
   ```javascript
   localStorage.removeItem('rune-converter-language')
   location.reload()
   ```
2. 시크릿 모드에서 테스트

### "ads.txt를 찾을 수 없어요"
1. Netlify 배포 완료 대기 (5-10분)
2. CDN 캐시 클리어:
   - Netlify 대시보드 → Site settings → Post processing → Clear cache

### "광고가 승인되지 않아요"
1. AdSense 대시보드 → 사이트 → 코드 확인
2. 홈 페이지만 광고 표시 (수정 완료)
3. 콘텐츠 없는 페이지 광고 제거 (수정 완료)
4. 48-72시간 대기 후 재심사

---

## 7. 자동화 테스트 스크립트

```javascript
// Console에서 실행
const languages = ['ko', 'en', 'ja', 'zh', 'zh-TW', 'es', 'fr', 'de', 'pt-BR'];

languages.forEach(lang => {
  window.open(`https://viking-rune-converter.netlify.app/?lang=${lang}`, '_blank');
});
```

이 스크립트는 모든 언어 페이지를 새 탭으로 열어서 한 번에 확인할 수 있게 합니다.

---

## 8. 수정 완료 항목

✅ **AdSense**: Result 페이지에서 광고 제거 (콘텐츠 부족 문제 해결)
✅ **ads.txt**: Netlify 리다이렉트 예외 처리로 크롤링 가능하도록 수정
✅ **언어 감지**: 9개 언어 모두 브라우저 언어 자동 감지 지원
✅ **브라질 포르투갈어**: 신규 추가 및 완전 통합

---

## 9. 예상 결과 (배포 후 확인)

**1-2일 내:**
- [ ] ads.txt 크롤링 성공 (Google Search Console 확인)
- [ ] AdSense 승인 대기 중에서 승인됨으로 변경

**1주일 내:**
- [ ] 각 국가별 트래픽 증가 확인 (Google Analytics)
- [ ] 브라질 트래픽 3 → 9-12 클릭/월
- [ ] 전체 트래픽 +40-50% (Priority 1 효과)

**1개월 내:**
- [ ] 룬 의미 페이지 long-tail 키워드 랭킹 확인
- [ ] 전체 트래픽 +80-100% (Priority 1+2 효과)
