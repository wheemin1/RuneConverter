@echo off
echo 🚀 바이킹 룬 문자 변환기 로컬 서비스 시작...

:: 현재 경로 출력
echo 📂 현재 경로: %cd%

:: 프로젝트 빌드
echo 🔨 프로젝트 빌드 중...
call npm run build

:: 서버 실행
echo 🌐 서버 실행 중...
start cmd /k "cd %cd% && set NODE_ENV=production && node dist/index.js"

:: 브라우저 열기
echo 🔍 브라우저에서 앱 열기...
timeout /t 5 /nobreak > nul
start http://localhost:5000

echo ✅ 서비스가 성공적으로 시작되었습니다!
echo 📝 로컬 주소: http://localhost:5000
echo 🛑 종료하려면 이 창을 닫거나 Ctrl+C를 누르세요.
