import { useState, useEffect } from "react";
import { useRuneConverter } from "@/hooks/useRuneConverter";
import { useLanguage } from "@/contexts/LanguageContext";
import NameInput from "@/components/NameInput";
import RuneResult from "@/components/RuneResult";
import RuneExplanation from "@/components/RuneExplanation";
import RuneReference from "@/components/RuneReference";
import HistoricalInfo from "@/components/HistoricalInfo";
import LanguageSelector from "@/components/LanguageSelector";
import ConvertingPage from "./ConvertingPage";

export default function RuneConverter() {
  const { t } = useLanguage();
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

  const [isConverting, setIsConverting] = useState(false);
  const [showConvertingPage, setShowConvertingPage] = useState(false);

  const handleConvert = () => {
    setIsConverting(true);
    setShowConvertingPage(true);
  };

  const handleConvertingComplete = () => {
    convertToRunes();
    setShowConvertingPage(false);
    setIsConverting(false);
    
    // Scroll to result after a brief delay
    setTimeout(() => {
      const resultElement = document.querySelector('[data-scroll-target="result"]');
      if (resultElement) {
        resultElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 500);
  };

  // Show converting page overlay
  if (showConvertingPage) {
    return (
      <ConvertingPage
        koreanName={koreanName}
        englishName={englishName}
        onComplete={handleConvertingComplete}
      />
    );
  }

  return (
    <div className="parchment-bg min-h-screen font-cinzel">
      {/* Enhanced Header */}
      <header className="text-center py-12 px-4 relative overflow-hidden">
        {/* Language Selector */}
        <div className="absolute top-4 right-4 z-20">
          <LanguageSelector />
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="text-9xl rune-character-large leading-none">
            ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-6">
            <h1 className="font-cinzel-decorative text-5xl md:text-7xl font-bold text-viking-brown mb-6 floating-animation">
              ᚱᚢᚾᛖ ᚲᚮᚾᚡᛖᚱᛏᛖᚱ
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-text-brown mb-4">
              {t('title')}
            </h2>
            <p className="text-xl text-text-brown-light leading-relaxed max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="ornamental-divider"></div>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="text-3xl rune-character mb-2">ᚨ</div>
              <h3 className="font-semibold text-viking-brown">{t('feature1Title')}</h3>
              <p className="text-sm text-text-brown-light">{t('feature1Desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl rune-character mb-2">ᛗ</div>
              <h3 className="font-semibold text-viking-brown">{t('feature2Title')}</h3>
              <p className="text-sm text-text-brown-light">{t('feature2Desc')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl rune-character mb-2">ᛊ</div>
              <h3 className="font-semibold text-viking-brown">{t('feature3Title')}</h3>
              <p className="text-sm text-text-brown-light">{t('feature3Desc')}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-12">
        <NameInput
          koreanName={koreanName}
          englishName={englishName}
          onKoreanNameChange={setKoreanName}
          onEnglishNameChange={setEnglishName}
          onConvert={handleConvert}
          isConverting={isConverting}
        />

        {isConverted && (
          <div data-scroll-target="result">
            <RuneResult
              runeText={runeText}
              englishName={englishName}
              koreanName={koreanName}
            />
            <RuneExplanation runeDetails={runeDetails} />
          </div>
        )}

        <RuneReference />
        <HistoricalInfo />
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-viking-brown via-viking-brown-dark to-viking-brown text-white py-12 mt-16 relative overflow-hidden">
        {/* Footer Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="text-6xl rune-character leading-none">
            ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <div className="font-cinzel-decorative text-3xl mb-4 floating-animation">
              ᚱᚢᚾᛖ ᚲᚮᚾᚡᛖᚱᛏᛖᚱ
            </div>
            <h3 className="text-xl text-viking-tan mb-2">바이킹 룬 문자 변환기</h3>
            <p className="text-viking-tan/80 max-w-2xl mx-auto leading-relaxed">
              고대 바이킹 문화와 엘더 푸타르크 룬 문자의 신비로운 아름다움을 
              현대에 전하며, 당신의 이름에 담긴 고대의 힘을 발견하세요.
            </p>
          </div>
          
          <div className="ornamental-divider opacity-50"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div>
              <h4 className="font-semibold text-viking-tan mb-2">룬 문자 정보</h4>
              <p className="text-sm text-viking-tan/70">
                엘더 푸타르크 24개 룬 문자의 정확한 의미와 상징을 바탕으로 변환합니다.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-viking-tan mb-2">한국어 지원</h4>
              <p className="text-sm text-viking-tan/70">
                한국어 이름의 정확한 로마자 표기법을 지원하며, 사용자가 직접 수정할 수 있습니다.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-viking-tan mb-2">무료 서비스</h4>
              <p className="text-sm text-viking-tan/70">
                모든 변환 및 공유 기능을 완전 무료로 제공합니다. 광고도 없습니다.
              </p>
            </div>
          </div>
          
          <div className="ornamental-divider opacity-50"></div>
          
          <div className="mt-6">
            <p className="text-sm text-viking-tan/80">
              © 2025 Rune Converter. Made with ❤️ for Viking culture enthusiasts.
            </p>
            <p className="text-xs text-viking-tan/60 mt-2">
              참고 자료:{" "}
              <a
                href="https://namu.wiki/w/룬%20문자"
                className="hover:text-white transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                나무위키 룬 문자
              </a>
              {" · "}
              <a
                href="https://en.wikipedia.org/wiki/Elder_Futhark"
                className="hover:text-white transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Elder Futhark Wikipedia
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
