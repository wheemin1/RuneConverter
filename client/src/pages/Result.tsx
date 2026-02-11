import { useEffect, useMemo } from "react";
import { Navigate, useSearchParams } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { convertToRunes } from "@/lib/runeConverter";
import { getRuneDetails } from "@/lib/runeDatabase";
import RuneResult from "@/components/RuneResult";
import RuneExplanation from "@/components/RuneExplanation";
import AdSenseAutoAds from "@/components/AdSenseAutoAds";

export default function Result() {
  const { language, setLanguage } = useLanguage();
  const [searchParams] = useSearchParams();

  const native = (searchParams.get("native") ?? "").trim();
  const roman = (searchParams.get("roman") ?? "").trim();
  const urlLang = (searchParams.get("lang") ?? "").trim();

  useEffect(() => {
    // If a shared link includes lang, apply it.
    if (urlLang && (urlLang === "ko" || urlLang === "en" || urlLang === "ja" || urlLang === "zh" || urlLang === "zh-TW" || urlLang === "es" || urlLang === "fr" || urlLang === "de" || urlLang === "pt-BR")) {
      if (urlLang !== language) setLanguage(urlLang);
    }
  }, [language, setLanguage, urlLang]);

  const runeText = useMemo(() => {
    if (!roman) return "";
    return convertToRunes(roman);
  }, [roman]);

  const runeDetails = useMemo(() => {
    if (!runeText) return [];
    return getRuneDetails(runeText, language);
  }, [language, runeText]);

  if (!roman) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen relative">
      <AdSenseAutoAds />
      <div className="vignette-overlay" />

      <div className="parchment-bg min-h-screen font-cinzel relative z-10">
        <main className="max-w-7xl mx-auto px-4 md:px-6 pb-12 md:pb-16 pt-6 md:pt-8">
          <div id="rune-result" data-scroll-target="result" className="max-w-4xl mx-auto">
            <RuneResult runeText={runeText} englishName={roman} koreanName={native} runeDetails={runeDetails} />
            <RuneExplanation runeDetails={runeDetails} />
          </div>

          <div className="max-w-4xl mx-auto mt-10">
            {/* Bottom ad is auto-inserted by AdSenseAutoAds; keep this space for layout stability */}
            <div className="h-10" />
          </div>
        </main>
      </div>
    </div>
  );
}
