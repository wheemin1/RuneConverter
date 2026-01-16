import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRuneConverter } from "@/hooks/useRuneConverter";
import { useLanguage } from "@/contexts/LanguageContext";
import NameInput from "@/components/NameInput";
import RuneReference from "@/components/RuneReference";
import HistoricalInfo from "@/components/HistoricalInfo";
import LanguageSelector from "@/components/LanguageSelector";
import ConvertingPage from "./ConvertingPage";
import AdSenseAutoAds from "@/components/AdSenseAutoAds";

export default function Home() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const {
    koreanName,
    englishName,
    setKoreanName,
    setEnglishName,
  } = useRuneConverter(language);

  const [isConverting, setIsConverting] = useState(false);
  const [showConvertingPage, setShowConvertingPage] = useState(false);

  const isDualInputMode =
    language === "ko" || language === "zh" || language === "ja" || language === "es" || language === "fr";

  const nativeValue = useMemo(() => {
    return isDualInputMode ? koreanName : englishName;
  }, [englishName, isDualInputMode, koreanName]);

  const romanValue = useMemo(() => {
    return englishName;
  }, [englishName]);

  const handleConvert = () => {
    setIsConverting(true);
    setShowConvertingPage(true);
  };

  const handleConvertingComplete = () => {
    const native = nativeValue.trim();
    const roman = romanValue.trim();

    const params = new URLSearchParams();
    params.set("native", native);
    params.set("roman", roman);

    // Keep language in URL so shared links preserve localization.
    params.set("lang", language);

    setShowConvertingPage(false);
    setIsConverting(false);

    navigate(`/result?${params.toString()}`);
  };

  if (showConvertingPage) {
    return (
      <ConvertingPage
        koreanName={nativeValue}
        englishName={romanValue}
        onComplete={handleConvertingComplete}
      />
    );
  }

  return (
    <div className="min-h-screen relative">
      <AdSenseAutoAds />
      <div className="vignette-overlay" />

      <div className="parchment-bg min-h-screen font-cinzel relative z-10">
        <header className="absolute top-0 left-0 right-0 z-20 pointer-events-none safe-top">
          <div className="absolute top-4 right-4 md:right-6 pointer-events-auto">
            <LanguageSelector />
          </div>
        </header>

        <section className="max-w-4xl mx-auto px-4 pb-6 md:pb-10 pt-6 md:pt-8">
          <div className="text-center">
            <div className="rune-character text-3xl md:text-4xl text-viking-brown/35 mb-3 md:mb-5">ᚠᚢᚦᚨᚱᚲ</div>

            <div className="rune-character-large text-5xl md:text-6xl lg:text-7xl leading-none mb-3 md:mb-5">ᚱ</div>

            <h1 className="font-cinzel-decorative text-3xl md:text-5xl lg:text-6xl font-bold text-viking-brown tracking-tight">
              {t("title")}
            </h1>

            <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-text-brown-light leading-relaxed max-w-2xl mx-auto">
              {t("subtitle")}
            </p>

            <div className="mt-7 md:mt-9 max-w-xl mx-auto">
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

        <main className="max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
            <div className="text-center py-6 bg-parchment-dark/50 rounded-2xl">
              <div className="text-3xl rune-character mb-2">ᚨ</div>
              <h3 className="font-semibold text-viking-brown text-base">{t("feature1Title")}</h3>
              <p className="text-sm text-text-brown-light mt-1 px-4">{t("feature1Desc")}</p>
            </div>
            <div className="text-center py-6 bg-parchment-dark/50 rounded-2xl">
              <div className="text-3xl rune-character mb-2">ᛗ</div>
              <h3 className="font-semibold text-viking-brown text-base">{t("feature2Title")}</h3>
              <p className="text-sm text-text-brown-light mt-1 px-4">{t("feature2Desc")}</p>
            </div>
            <div className="text-center py-6 bg-parchment-dark/50 rounded-2xl">
              <div className="text-3xl rune-character mb-2">ᛊ</div>
              <h3 className="font-semibold text-viking-brown text-base">{t("feature3Title")}</h3>
              <p className="text-sm text-text-brown-light mt-1 px-4">{t("feature3Desc")}</p>
            </div>
          </div>

          <RuneReference />
          <HistoricalInfo />
        </main>
      </div>
    </div>
  );
}
