#!/usr/bin/env pwsh

Write-Host "🚀 바이킹 룬 문자 변환기 로컬 서비스 시작..." -ForegroundColor Cyan

# 현재 경로 확인
$currentDir = Get-Location
Write-Host "📂 현재 경로: $currentDir" -ForegroundColor Yellow

# 프로젝트 빌드
Write-Host "🔨 프로젝트 빌드 중..." -ForegroundColor Green
npm run build

# 서버와 클라이언트 실행
Write-Host "🌐 서버 실행 중..." -ForegroundColor Green
Start-Process pwsh -ArgumentList "-Command", "cd $currentDir; set NODE_ENV=production && node dist/index.js" -WindowStyle Normal

# 브라우저 열기
Write-Host "🔍 브라우저에서 앱 열기..." -ForegroundColor Green
Start-Sleep -Seconds 5
Start-Process "http://localhost:5000"

Write-Host "✅ 서비스가 성공적으로 시작되었습니다!" -ForegroundColor Cyan
Write-Host "📝 로컬 주소: http://localhost:5000" -ForegroundColor Yellow
Write-Host "🛑 종료하려면 이 창을 닫거나 Ctrl+C를 누르세요." -ForegroundColor Red
