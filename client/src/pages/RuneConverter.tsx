import { useMemo, useState } from "react";
import { useRuneConverter } from "@/hooks/useRuneConverter";
import { useLanguage } from "@/contexts/LanguageContext";
import { getRuneDetails } from "@/lib/runeDatabase";
import NameInput from "@/components/NameInput";
import RuneResult from "@/components/RuneResult";
import RuneExplanation from "@/components/RuneExplanation";
import RuneReference from "@/components/RuneReference";
import HistoricalInfo from "@/components/HistoricalInfo";
import LanguageSelector from "@/components/LanguageSelector";
import ConvertingPage from "./ConvertingPage";
import AdSenseAutoAds from "@/components/AdSenseAutoAds";

export default function RuneConverter() {
  const { t, language } = useLanguage();
  const {
    koreanName,
    englishName,
    runeText,
    setKoreanName,
    setEnglishName,
    convertToRunes,
    isConverted
  } = useRuneConverter();

  const runeDetails = useMemo(() => {
    if (!runeText) return [];
    return getRuneDetails(runeText, language);
  }, [runeText, language]);

  const [isConverting, setIsConverting] = useState(false);
  const [showConvertingPage, setShowConvertingPage] = useState(false);

  const handleConvert = () => {
    setIsConverting(true);
    setShowConvertingPage(true);
  };

  const handleConvertingComplete = () => {
    convertToRunes();
    
    // 상태 업데이트를 기다린 후 페이지 전환
    setTimeout(() => {
      setShowConvertingPage(false);
      setIsConverting(false);
      
      // 결과로 스크롤
      setTimeout(() => {
        const resultElement = document.getElementById('rune-result');
        if (resultElement) {
          resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }, 300);
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
    <div className="min-h-screen relative">
      <AdSenseAutoAds />
      {/* Vignette Overlay - sits above all content */}
      <div className="vignette-overlay" />
      
      <div className="parchment-bg min-h-screen font-cinzel relative z-10">
      {/* Compact Header */}
      <header className="relative h-16 md:h-20">
        {/* Branding Logo */}
        <div className="absolute top-4 left-4 md:left-6 z-20 safe-top">
          <div className="flex items-center gap-2 opacity-70">
            <span className="rune-character text-lg text-viking-brown">ᚱ</span>
            <span className="font-cinzel-decorative text-xs text-viking-brown hidden sm:inline">Viking Rune</span>
          </div>
        </div>
        {/* Language Selector */}
        <div className="absolute top-4 right-4 z-20">
          <LanguageSelector />
        </div>
      </header>

      {/* Hero Section - 2 Column Layout on Desktop */}
      <section className="max-w-7xl mx-auto px-4 pb-6 md:pb-12 mt-2 md:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Title & Description */}
          <div className="text-center lg:text-left space-y-4 md:space-y-6 order-2 lg:order-1">
            {/* Decorative Runes - Desktop Only */}
            <div className="hidden lg:block">
              <div className="text-4xl rune-character text-viking-brown/40 mb-4">
                ᚠᚢᚦᚨᚱᚲ
              </div>
            </div>
            
            <h1 className="font-cinzel-decorative text-2xl md:text-4xl lg:text-5xl font-bold text-viking-brown">
              {t('title')}
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-text-brown-light leading-relaxed">
              {t('subtitle')}
            </p>
            
            {/* Feature Highlights - Desktop Only */}
            <div className="hidden lg:grid grid-cols-3 gap-6 pt-8 opacity-80">
              <div className="text-center">
                <div className="text-3xl rune-character mb-2">ᚨ</div>
                <h3 className="font-semibold text-viking-brown text-sm">{t('feature1Title')}</h3>
                <p className="text-xs text-text-brown-light mt-1">{t('feature1Desc')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl rune-character mb-2">ᛗ</div>
                <h3 className="font-semibold text-viking-brown text-sm">{t('feature2Title')}</h3>
                <p className="text-xs text-text-brown-light mt-1">{t('feature2Desc')}</p>
              </div>
              <div className="text-center">
                <div className="text-3xl rune-character mb-2">ᛊ</div>
                <h3 className="font-semibold text-viking-brown text-sm">{t('feature3Title')}</h3>
                <p className="text-xs text-text-brown-light mt-1">{t('feature3Desc')}</p>
              </div>
            </div>
          </div>
          
          {/* Right Column - Input Form (Above the Fold) */}
          <div className="order-1 lg:order-2">
            <NameInput
              koreanName={koreanName}
              englishName={englishName}
              onKoreanNameChange={setKoreanName}
              onEnglishNameChange={setEnglishName}
              onConvert={handleConvert}
              isConverting={isConverting}
            />
          </div>
          
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-16">

        {/* Feature Highlights - Mobile Only */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
          <div className="text-center py-6 bg-parchment-dark/50 rounded-2xl">
            <div className="text-3xl rune-character mb-2">ᚨ</div>
            <h3 className="font-semibold text-viking-brown text-base">{t('feature1Title')}</h3>
            <p className="text-sm text-text-brown-light mt-1 px-4">{t('feature1Desc')}</p>
          </div>
          <div className="text-center py-6 bg-parchment-dark/50 rounded-2xl">
            <div className="text-3xl rune-character mb-2">ᛗ</div>
            <h3 className="font-semibold text-viking-brown text-base">{t('feature2Title')}</h3>
            <p className="text-sm text-text-brown-light mt-1 px-4">{t('feature2Desc')}</p>
          </div>
          <div className="text-center py-6 bg-parchment-dark/50 rounded-2xl">
            <div className="text-3xl rune-character mb-2">ᛊ</div>
            <h3 className="font-semibold text-viking-brown text-base">{t('feature3Title')}</h3>
            <p className="text-sm text-text-brown-light mt-1 px-4">{t('feature3Desc')}</p>
          </div>
        </div>

        {isConverted && (
          <div id="rune-result" data-scroll-target="result">
            <RuneResult
              runeText={runeText}
              englishName={englishName}
              koreanName={koreanName}
              runeDetails={runeDetails}
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
            <h3 className="text-xl text-viking-tan mb-2">{t('footerTitle')}</h3>
            <p className="text-viking-tan max-w-2xl mx-auto leading-relaxed">
              {t('footerDesc')}
            </p>
          </div>
          
          <div className="ornamental-divider opacity-50"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <div>
              <h4 className="font-semibold text-viking-tan mb-2">{t('footerInfoRunesTitle')}</h4>
              <p className="text-sm text-viking-tan">
                {t('footerInfoRunesDesc')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-viking-tan mb-2">{t('footerInfoKoreanSupportTitle')}</h4>
              <p className="text-sm text-viking-tan">
                {t('footerInfoKoreanSupportDesc')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-viking-tan mb-2">{t('footerInfoFreeTitle')}</h4>
              <p className="text-sm text-viking-tan">
                {t('footerInfoFreeDesc')}
              </p>
            </div>
          </div>
          
          <div className="ornamental-divider opacity-50"></div>
          
          <div className="mt-6">
            <p className="text-sm text-viking-tan">
              {t('copyright')}
            </p>
            <p className="text-sm text-viking-tan mt-2 font-medium">
              {t('bugReport')}
            </p>
            <p className="text-xs text-viking-tan mt-2">
              {t('footerReferenceLabel')}{" "}
              <a
                href="https://namu.wiki/w/룬%20문자"
                className="hover:text-white transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footerReferenceNamu')}
              </a>
              {" · "}
              <a
                href="https://en.wikipedia.org/wiki/Elder_Futhark"
                className="hover:text-white transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('footerReferenceWiki')}
              </a>
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}
