import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initKakao } from "./lib/kakaoShare";
import { HelmetProvider } from "react-helmet-async";

// 카카오 SDK 초기화 (브라우저 환경에서만 실행)
if (typeof window !== 'undefined') {
  // SDK 로드를 기다린 후 초기화
  window.addEventListener('load', () => {
    setTimeout(initKakao, 100);
  });
}

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
