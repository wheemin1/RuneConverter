import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { initKakao } from "./lib/kakaoShare";

// 카카오 SDK 초기화
initKakao();

createRoot(document.getElementById("root")!).render(<App />);
