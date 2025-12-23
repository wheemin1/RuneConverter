# 🚨 Netlify 배포 문제 해결 가이드

## 현재 상황
- GitHub 푸시: ✅ 완료 (952013a 커밋)
- 로컬 빌드: ✅ 성공
- Netlify 배포: ❌ 아무것도 안 뜸

---

## 🔧 해결 방법 (순서대로 시도)

### 방법 1: GitHub Webhook 재활성화

1. **GitHub 저장소로 이동**
   - https://github.com/wheemin1/RuneConverter
   - Settings → Webhooks

2. **Netlify webhook 확인**
   - `https://api.netlify.com/hooks/github` 형태의 URL이 있어야 함
   - 초록색 체크 표시가 있으면 정상
   - 빨간색 X 표시가 있으면 **"Redeliver"** 클릭

3. **없다면 Netlify에서 재연동**
   - Netlify → Site settings → Build & deploy
   - "Link repository" 클릭하여 GitHub 재연결

---

### 방법 2: Netlify CLI로 직접 배포

터미널에서 실행:

```powershell
# Netlify CLI 설치 (처음 한 번만)
npm install -g netlify-cli

# Netlify 로그인
netlify login

# 사이트 연결
netlify link

# 수동 배포
netlify deploy --prod
```

---

### 방법 3: 새 Netlify 사이트 생성 (마지막 수단)

#### 3-1. 기존 사이트 삭제 (선택)
- Netlify 대시보드 → Site settings → General → Delete site

#### 3-2. 새 사이트 생성

**A. Netlify 대시보드에서:**

1. **"Add new site" → "Import an existing project"** 클릭

2. **GitHub 선택**

3. **저장소 선택**: `wheemin1/RuneConverter`

4. **빌드 설정 입력**:
   ```
   Branch to deploy: main
   Build command: npm run build
   Publish directory: dist/public
   Functions directory: netlify/functions
   ```

5. **Environment variables 추가** (중요!):
   ```
   NODE_VERSION = 18
   DATABASE_URL = (Neon 데이터베이스 URL)
   ```

6. **"Deploy site"** 클릭

---

**B. Netlify CLI로 (더 빠름):**

터미널에서:

```powershell
# 빌드 먼저
npm run build

# Netlify에 새 사이트로 배포
netlify deploy --prod

# 사이트 이름 변경 (선택)
netlify sites:update viking-rune-converter
```

---

## 📋 빌드 설정 체크리스트

Netlify 사이트가 제대로 설정되었는지 확인:

### Build settings (Site settings → Build & deploy → Build settings)
- [x] **Base directory**: (비워두기)
- [x] **Build command**: `npm run build`
- [x] **Publish directory**: `dist/public`
- [x] **Functions directory**: `netlify/functions`

### Environment variables (Site settings → Environment variables)
- [x] **NODE_VERSION**: `18`
- [x] **DATABASE_URL**: `postgresql://...` (Neon DB URL)

### Deploy contexts (Site settings → Build & deploy → Deploy contexts)
- [x] **Production branch**: `main`
- [x] **Deploy previews**: `Any pull request against your production branch`
- [x] **Branch deploys**: `All`

### Continuous deployment
- [x] **Auto publishing**: Enabled
- [x] **Repository**: `wheemin1/RuneConverter`
- [x] **Branch**: `main`

---

## 🐛 문제별 해결법

### "아무것도 안 뜸" → GitHub 연동 문제
- Netlify에서 GitHub 저장소 재연결
- 또는 Netlify CLI로 직접 배포

### "빌드는 뜨는데 실패함" → 환경 변수 문제
- DATABASE_URL 등록 확인
- NODE_VERSION 18로 설정

### "빌드 성공했는데 페이지 안 보임" → Publish directory 문제
- `dist/public`으로 설정 확인
- `dist`가 아니라 `dist/public`이어야 함

---

## 🎯 지금 당장 시도할 것

1. **Netlify 대시보드 → Deploys 탭**
   - "Trigger deploy" → "Clear cache and deploy site" 클릭

2. **안 되면 GitHub Webhooks 확인**
   - https://github.com/wheemin1/RuneConverter/settings/hooks

3. **그래도 안 되면 Netlify CLI 사용**
   ```powershell
   npm install -g netlify-cli
   netlify login
   netlify link
   netlify deploy --prod
   ```

---

## 💡 현재 프로젝트 상태

### ✅ 정상 작동하는 것들
- 로컬 빌드: `npm run build` 성공
- GitHub: main 브랜치에 push 완료
- 소스 코드: 에러 없음
- netlify.toml: 설정 올바름

### ❌ 문제 있는 것
- Netlify 자동 배포 트리거 안 됨
- → GitHub - Netlify 연결 문제 가능성 높음

---

## 📞 도움이 필요하면

1. **Netlify 지원팀에 문의**
   - https://answers.netlify.com/
   - "GitHub push not triggering build" 검색

2. **GitHub webhook 로그 확인**
   - Settings → Webhooks → 해당 webhook 클릭
   - "Recent Deliveries" 탭에서 에러 확인

---

**생성일**: 2025-12-23  
**프로젝트**: Viking Rune Converter  
**GitHub**: https://github.com/wheemin1/RuneConverter  
**Netlify**: https://viking-rune-converter.netlify.app/
