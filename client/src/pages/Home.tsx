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
              {language === "de"
                ? "Runen Konverter & Generator"
                : language === "fr"
                ? "Convertisseur Rune Viking"
                : language === "en"
                  ? "Elder Futhark Rune Translator"
                  : language === "ko"
                    ? `${t("title")} (바이킹 이름 번역)`
                    : t("title")}
            </h1>

            {language === "de" ? (
              <h2 className="mt-2 text-lg md:text-xl font-cinzel text-viking-brown/80 font-semibold">
                Kostenlos Namen Übersetzen (Elder Futhark)
              </h2>
            ) : language === "fr" ? (
              <h2 className="mt-2 text-lg md:text-xl font-cinzel text-viking-brown/80 font-semibold">
                Traduction de Prénom (Gratuit)
              </h2>
            ) : language === "en" ? (
              <h2 className="mt-2 text-lg md:text-xl font-cinzel text-viking-brown/80 font-semibold">
                Accurate Viking Name Converter & Generator
              </h2>
            ) : language === "ko" ? (
              <h2 className="mt-2 text-lg md:text-xl font-cinzel text-viking-brown/80 font-semibold">
                무료 이름 번역 & 뜻 풀이 (Meaning & Translation)
              </h2>
            ) : null}

            <p className="mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-text-brown-light leading-relaxed max-w-2xl mx-auto">
              {language === "ko" ? "자신의 이름을 신비로운 고대 룬 문자로 정확하게 변환해보세요." : t("subtitle")}
            </p>

            {language === "en" && (
              <p className="mt-3 text-sm md:text-base text-text-brown-light/90 leading-relaxed max-w-2xl mx-auto">
                Easily translate names into the <strong>Nordic Elder Futhark alphabet</strong>. Try our free{' '}
                <strong>rune name generator</strong> for names and authentic rune writing.
              </p>
            )}

            {language === "ko" && (
              <div className="mt-4 text-sm md:text-base text-text-brown-light/90 leading-relaxed max-w-2xl mx-auto bg-parchment-dark/10 p-4 rounded-lg">
                <p>
                  이 <strong>룬 문자 번역기</strong>는 역사적으로 가장 오래된 <em>엘더 푸사르크</em> 방식을 사용하여,
                  한글/영어 이름을 정확하게 변환해 드립니다.
                </p>
              </div>
            )}

            {language === "en" && (
              <div className="mt-4 text-sm md:text-base text-text-brown-light/90 leading-relaxed max-w-2xl mx-auto bg-parchment-dark/10 p-4 rounded-lg">
                <p>
                  Looking for a <strong>Viking Rune Generator</strong>? Our tool uses historically accurate{' '}
                  <em>phonetic conversion</em> to translate names into <strong>Elder Futhark</strong> scripts,
                  so the result matches how the name is pronounced.
                </p>
              </div>
            )}

            {language === "fr" && (
              <div className="mt-4 text-sm md:text-base text-text-brown-light/90 leading-relaxed max-w-2xl mx-auto bg-parchment-dark/10 p-4 rounded-lg">
                <p>
                  Vous cherchez une <strong>traduction en runes vikings</strong> ? Notre outil utilise l'alphabet
                  historique <em>Elder Futhark</em> pour une <strong>transcription phonétique</strong> précise de votre
                  nom.
                </p>
              </div>
            )}

            {language === "de" && (
              <div className="mt-4 text-sm md:text-base text-text-brown-light/90 leading-relaxed max-w-2xl mx-auto bg-parchment-dark/10 p-4 rounded-lg">
                <p>
                  Suchen Sie einen <strong>Wikinger Runen Übersetzer</strong>? Unser Tool nutzt das historische{' '}
                  <em>Elder Futhark</em> für eine <strong>phonetisch genaue</strong> Übersetzung Ihres Namens.
                </p>
              </div>
            )}

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
