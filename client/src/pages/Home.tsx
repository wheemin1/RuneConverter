import { useMemo, useState, lazy, Suspense } from "react";
import { useLocation } from "wouter";
import { useRuneConverter } from "@/hooks/useRuneConverter";
import { useLanguage } from "@/contexts/LanguageContext";
import NameInput from "@/components/NameInput";
import LanguageSelector from "@/components/LanguageSelector";
import ConvertingPage from "./ConvertingPage";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

// Lazy load heavy components
const RuneReference = lazy(() => import("@/components/RuneReference"));
const HistoricalInfo = lazy(() => import("@/components/HistoricalInfo"));
const FAQ = lazy(() => import("@/components/FAQ"));

export default function Home() {
  const { t, language } = useLanguage();
  const [, setLocation] = useLocation();

  const {
    koreanName,
    englishName,
    setKoreanName,
    setEnglishName,
  } = useRuneConverter(language);

  const [isConverting, setIsConverting] = useState(false);
  const [showConvertingPage, setShowConvertingPage] = useState(false);

  const isDualInputMode =
    language === "ko" || language === "zh" || language === "zh-TW" || language === "ja" || language === "es" || language === "fr" || language === "pt-BR";

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

    setLocation(`/result?${params.toString()}`);
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

            <h1
              className={`font-cinzel-decorative text-3xl md:text-5xl lg:text-6xl font-bold text-viking-brown tracking-tight text-balance${
                language === "ko" ? " break-keep" : ""
              }`}
            >
              {language === "de"
                ? "Runen Konverter &\u00A0Generator"
                : language === "fr"
                ? "Convertisseur Rune\u00A0Viking"
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
                Elder Futhark, Norse & Runic Alphabet Converter
              </h2>
            ) : language === "ko" ? (
              <h2 className="mt-2 text-lg md:text-xl font-cinzel text-viking-brown/80 font-semibold">
                무료 이름 번역 & 뜻 풀이 (Meaning & Translation)
              </h2>
            ) : null}

            <p
              className={`mt-4 md:mt-6 text-base md:text-lg lg:text-xl text-text-brown-light leading-relaxed mx-auto${
                language === "de" || language === "fr" ? " max-w-3xl" : " max-w-2xl"
              }${language === "ko" ? " break-keep" : ""}${language === "ko" ? " text-balance" : "text-pretty"}`}
            >
              {t("subtitle")}
            </p>

            {language === "en" && (
              <p className="mt-3 text-sm md:text-base text-text-brown-light/90 leading-relaxed max-w-2xl mx-auto">
                Easily translate names into the <strong>Nordic Elder Futhark alphabet</strong>. Our <strong>Norse rune translator</strong> and{' '}
                <strong>runic alphabet converter</strong> provide authentic Viking rune translations instantly.
              </p>
            )}

            {language === "ko" && (
              <div className="mt-4 text-sm md:text-base text-text-brown-light/90 leading-relaxed max-w-2xl mx-auto bg-parchment-dark/10 p-4 rounded-lg">
                <p>
                  이 <strong>룬문자 번역기 & 변환기</strong>는 역사적으로 가장 오래된 <em>엘더 푸사르크</em> 방식을 사용하여,
                  한글/영어 이름을 정확한 <strong>룬어</strong>로 번역 및 변환해 드립니다.
                </p>
              </div>
            )}

            {language === "en" && (
              <div className="mt-4 text-sm md:text-base text-text-brown-light/90 leading-relaxed max-w-2xl mx-auto bg-parchment-dark/10 p-4 rounded-lg">
                <p>
                  Looking for a <strong>Viking Rune Translator</strong>? Our <strong>runic translator</strong> uses historically accurate{' '}
                  <em>phonetic conversion</em> to translate names into <strong>Norse runes</strong> and <strong>Elder Futhark</strong> scripts,
                  so the result matches how the name is pronounced in the ancient runic alphabet.
                </p>
              </div>
            )}

            {language === "fr" && (
              <div className="mt-4 text-sm md:text-base text-text-brown-light/90 leading-relaxed max-w-3xl mx-auto bg-parchment-dark/10 p-4 rounded-lg text-pretty">
                <p>
                  Vous cherchez une <strong>traduction en runes vikings</strong> ? Notre outil utilise l'alphabet
                  historique <em>Elder Futhark</em> pour une <strong>transcription phonétique</strong> précise de votre
                  nom.
                </p>
              </div>
            )}

            {language === "de" && (
              <div className="mt-4 text-sm md:text-base text-text-brown-light/90 leading-relaxed max-w-3xl mx-auto bg-parchment-dark/10 p-4 rounded-lg text-pretty">
                <p>
                  Suchen Sie einen <strong>Wikinger Runen Übersetzer</strong>? Unser Tool nutzt das historische{' '}
                  <em>Elder Futhark</em> für eine <strong>phonetisch genaue</strong> Übersetzung Ihres\u00A0Namens.
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

          <Suspense fallback={<div className="h-64 flex items-center justify-center"><div className="text-amber-900">Loading...</div></div>}>
            <RuneReference />
            <HistoricalInfo />
            
            {/* Rune Meanings CTA */}
            <Card className="w-full max-w-4xl mx-auto my-12 bg-gradient-to-r from-amber-100/80 to-stone-100/80 border-amber-300/50 shadow-lg">
              <CardContent className="p-8 text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-amber-800" />
                <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-3">
                  {t('exploreRuneMeaningsTitle')}
                </h2>
                <p className="text-stone-700 mb-6 max-w-2xl mx-auto">
                  {t('exploreRuneMeaningsDesc')}
                </p>
                <a href={`/rune-meanings?lang=${language}`}>
                  <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white font-semibold">
                    {t('viewRuneMeaningsButton')}
                  </Button>
                </a>
              </CardContent>
            </Card>
            
            <FAQ />
          </Suspense>
        </main>
      </div>
    </div>
  );
}
