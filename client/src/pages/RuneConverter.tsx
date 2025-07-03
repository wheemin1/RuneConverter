import { useState, useEffect } from "react";
import { useRuneConverter } from "@/hooks/useRuneConverter";
import NameInput from "@/components/NameInput";
import RuneResult from "@/components/RuneResult";
import RuneExplanation from "@/components/RuneExplanation";
import RuneReference from "@/components/RuneReference";
import HistoricalInfo from "@/components/HistoricalInfo";

export default function RuneConverter() {
  const {
    koreanName,
    englishName,
    runeText,
    runeDetails,
    setKoreanName,
    setEnglishName,
    convertToRunes,
    isConverted
  } = useRuneConverter();

  return (
    <div className="parchment-bg min-h-screen font-cinzel">
      {/* Header */}
      <header className="text-center py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-cinzel-decorative text-4xl md:text-6xl font-bold text-viking-brown mb-4 floating-animation">
            ᚱᚢᚾᛖ ᚲᚮᚾᚡᛖᚱᛏᛖᚱ
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-text-brown mb-2">
            바이킹 룬 문자 변환기
          </h2>
          <p className="text-text-brown-light text-lg">
            당신의 이름을 고대 바이킹 룬 문자로 변환해보세요
          </p>
          <div className="decorative-divider"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-12">
        <NameInput
          koreanName={koreanName}
          englishName={englishName}
          onKoreanNameChange={setKoreanName}
          onEnglishNameChange={setEnglishName}
          onConvert={convertToRunes}
        />

        {isConverted && (
          <>
            <RuneResult
              runeText={runeText}
              englishName={englishName}
            />
            <RuneExplanation runeDetails={runeDetails} />
          </>
        )}

        <RuneReference />
        <HistoricalInfo />
      </main>

      {/* Footer */}
      <footer className="bg-viking-brown text-white py-8 mt-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="font-cinzel-decorative text-2xl mb-4">
            ᚱᚢᚾᛖ ᚲᚮᚾᚡᛖᚱᛏᛖᚱ
          </div>
          <p className="text-viking-tan mb-2">바이킹 룬 문자 변환기</p>
          <p className="text-sm text-viking-tan">
            © 2024 Rune Converter. 고대 바이킹 문화와 룬 문자의 아름다움을 현대에 전합니다.
          </p>
          <div className="decorative-divider opacity-50 mt-4"></div>
          <p className="text-xs text-viking-tan mt-2">
            참고:{" "}
            <a
              href="https://namu.wiki/w/룬%20문자"
              className="hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              나무위키 룬 문자
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
