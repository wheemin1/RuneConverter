import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, Download, Copy, Sparkles, Eye, ChevronDown, History, ArrowRight } from "lucide-react";
import { generateRuneImage } from "@/lib/imageGenerator";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import type { RuneDetail } from "@/lib/runeDatabase";
import { PERSONALITY_THEME_IDS, POSITIVE_THEME_IDS, runeThemesByKey, type RuneThemeId } from "@/lib/runeThemes";
import ShareModal from "./ShareModal";
import SavedRunesDialog from "./SavedRunesDialog";

interface RuneResultProps {
  runeText: string;
  englishName: string;
  koreanName: string;
  runeDetails: RuneDetail[];
}

function formatConjunctionList(items: string[], language: string): string {
  if (items.length === 0) return '';
  try {
    const locale =
      language === 'ko'
        ? 'ko-KR'
        : language === 'ja'
          ? 'ja-JP'
          : language === 'zh'
            ? 'zh-CN'
            : language === 'es'
              ? 'es-ES'
              : language === 'fr'
                ? 'fr-FR'
                : 'en-US';

    // Intl.ListFormat isn't supported in very old browsers; fall back if needed.
    const IntlAny = Intl as unknown as { ListFormat?: new (locales?: string | string[], options?: any) => { format: (items: string[]) => string } };
    const ListFormatCtor = typeof IntlAny !== 'undefined' ? IntlAny.ListFormat : undefined;
    const listFormat = typeof ListFormatCtor === 'function'
      ? new ListFormatCtor(locale, { style: 'short', type: 'conjunction' })
      : null;

    if (listFormat) return listFormat.format(items);
  } catch {
    // ignore and fall back
  }
  return items.join(', ');
}

export default function RuneResult({ runeText, englishName, koreanName, runeDetails }: RuneResultProps) {
  const { t, language } = useLanguage();
  const [isDownloading, setIsDownloading] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showSavedRunes, setShowSavedRunes] = useState(false);
  const { toast } = useToast();

  // Function to generate combined meaning from multiple runes
  const generateCombinedMeaning = (details: RuneDetail[]): string => {
    if (details.length === 0) return t('combinedMeaningEmpty');

    const themeIds: RuneThemeId[] = [];
    for (const rune of details) {
      const ids = runeThemesByKey[rune.key] ?? [];
      for (const id of ids) themeIds.push(id);
    }

    const uniqueIds = Array.from(new Set(themeIds));
    const positive = uniqueIds.filter((id) => POSITIVE_THEME_IDS.has(id)).slice(0, 2);
    const personality = uniqueIds.filter((id) => PERSONALITY_THEME_IDS.has(id)).slice(0, 2);

    const positiveLabels = positive.map((id) => t(`theme.${id}`));
    const personalityLabels = personality.map((id) => t(`theme.${id}`));
    
    if (positiveLabels.length > 0 && personalityLabels.length > 0) {
      const positiveText = formatConjunctionList(positiveLabels, language);
      const personalityText = formatConjunctionList(personalityLabels, language);
      return `${t('combinedMeaningTemplateBothPrefix')}${positiveText}${t('combinedMeaningTemplateBothMiddle')}${personalityText}${t('combinedMeaningTemplateBothSuffix')}`;
    }

    if (positiveLabels.length > 0) {
      return `${formatConjunctionList(positiveLabels.slice(0, 3), language)}${t('combinedMeaningTemplatePositiveSuffix')}`;
    }

    if (personalityLabels.length > 0) {
      return `${formatConjunctionList(personalityLabels.slice(0, 3), language)}${t('combinedMeaningTemplatePersonalitySuffix')}`;
    }

    if (details.length <= 3) return t('combinedMeaningFallbackShort');
    if (details.length <= 6) return t('combinedMeaningFallbackMedium');
    return t('combinedMeaningFallbackLong');
  };

  const handleQuickCopy = async () => {
    try {
      await navigator.clipboard.writeText(runeText);
      toast({
        title: t('copySuccess'),
        description: t('copySuccessDesc'),
      });
    } catch (error) {
      toast({
        title: t('copyFailed'),
        description: t('copyErrorDesc'),
        variant: "destructive",
      });
    }
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const imageData = await generateRuneImage(runeText, englishName, {
        width: 1200,
        height: 800,
        backgroundColor: '#FAF0E6',
        textColor: '#8B4513',
        runeColor: '#8B4513',
        labels: {
          title: t('shareImageTitle'),
          description: t('shareImageDesc'),
          footer: t('shareImageFooter'),
        },
      });
      const link = document.createElement('a');
      link.download = `${englishName}_rune_conversion.png`;
      link.href = imageData;
      link.click();
      
      toast({
        title: t('downloadSuccess'),
        description: t('downloadSuccessDesc'),
      });
    } catch (error) {
      toast({
        title: t('downloadFailed'),
        description: t('imageErrorDesc'),
        variant: "destructive",
      });
    }
    setIsDownloading(false);
  };

  // Function to handle loading saved result
  const handleLoadSavedResult = (savedResult: any) => {
    // 로컬 저장에서 불러온 결과를 처리하는 로직은 
    // 실제로는 상위 컴포넌트에서 처리해야 할 수 있습니다.
    toast({
      title: savedResult.koreanName,
      description: savedResult.runeText,
    });
  };

  return (
    <>
      <section className="mb-8 scroll-reveal relative">
        <Card className="ancient-border manuscript-page rounded-lg pulse-glow bg-parchment-dark">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="font-cinzel-decorative text-3xl font-bold text-viking-brown mb-3 floating-animation">
                ᛁᛁ. {t('resultTitle')}
              </h3>
              <p className="text-text-brown-light italic">
                {t('resultSubtitle')}
              </p>
              <div className="ornamental-divider"></div>
            </div>
            
            {/* Main Result Display */}
            <div className="relative">
              <div className="bg-gradient-to-br from-parchment to-parchment-darker rounded-xl p-8 ancient-border mb-6 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="text-8xl rune-character-large leading-none">
                    ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ
                  </div>
                </div>
                
                <div className="relative z-10 text-center">
                  {/* Korean Name */}
                  <div className="mb-4">
                    <div className="text-lg text-text-brown-light mb-1">{t('koreanName')}</div>
                    <div className="text-2xl font-bold text-viking-brown font-cinzel">
                      {koreanName}
                    </div>
                  </div>
                  
                  {/* English Name */}
                  <div className="mb-6">
                    <div className="text-lg text-text-brown-light mb-1">{t('englishName')}</div>
                    <div className="text-xl font-semibold text-text-brown font-cinzel">
                      {englishName.toUpperCase()}
                    </div>
                  </div>
                  
                  {/* Rune Text - Main Feature */}
                  <div className="mb-6 relative">
                    <div className="text-lg text-text-brown-light mb-3">{t('elderFutharkRunesLabel')}</div>
                    <div className="text-6xl md:text-8xl rune-character-large mb-4 leading-tight">
                      {runeText}
                    </div>
                    
                    {/* Quick Copy Button */}
                    <Button
                      onClick={handleQuickCopy}
                      variant="outline"
                      size="sm"
                      className="border-viking-tan hover:bg-viking-tan hover:text-white transition-colors"
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      {t('copyRune')}
                    </Button>
                  </div>
                  
                  {/* Mystical Quote */}
                  <div className="text-center">
                    <p className="text-sm text-text-brown-light italic">
                      {t('runeResultQuote')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                onClick={() => setShowShareModal(true)}
                className="btn-viking text-white font-bold py-3 px-6 rounded-lg font-cinzel flex items-center justify-center gap-2"
              >
                <Share2 className="w-5 h-5" />
                {t('shareButton')}
              </Button>
              
              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                className="btn-viking text-white font-bold py-3 px-6 rounded-lg font-cinzel flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                {isDownloading ? t('downloadingButton') : t('downloadButton')}
              </Button>
            </div>

            {/* Egyptian Hieroglyphics Promotion Banner */}
            <div className="mt-6">
              <a 
                href="https://egyptiantranslator.netlify.app/?utm_source=rune_converter&utm_medium=banner&utm_campaign=cross_promo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-amber-100 to-yellow-100 hover:from-amber-200 hover:to-yellow-200 border-2 border-amber-400 rounded-lg p-5 transition-all duration-300 hover:shadow-md hover:shadow-amber-400/40 group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">🇪🇬</span>
                    <div>
                      <p className="text-lg font-bold text-amber-900 group-hover:text-amber-950">
                        {t('egyptPromoTitle')}
                      </p>
                      <p className="text-sm text-amber-700 font-medium">
                        {t('egyptPromoSubtitle')}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-7 h-7 text-amber-600 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </a>
            </div>

            {/* Load From Local Storage */}
            <div className="mt-4 text-center">
              <SavedRunesDialog onSelectResult={handleLoadSavedResult} />
            </div>
            
            {/* Combined Rune Meaning */}
            <div className="mt-6">
              <div className="bg-gradient-to-r from-viking-gold/10 to-viking-peru/10 rounded-lg p-6 border border-viking-gold/20">
                <h4 className="text-lg font-semibold text-viking-brown mb-3 text-center">
                  {t('combinedMeaning')}
                </h4>
                <div className="text-center">
                  <p className="text-text-brown text-lg leading-relaxed font-medium">
                    {generateCombinedMeaning(runeDetails)}
                  </p>
                </div>
                <div className="mt-4 text-center">
                  <Button
                    onClick={() => {
                      const detailElement = document.querySelector('[data-scroll-target="detailed-explanation"]');
                      if (detailElement) {
                        detailElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    variant="outline"
                    className="border-viking-tan hover:bg-viking-tan hover:text-white transition-colors text-sm"
                  >
                    {t('viewRuneDetailsButton')} <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Success Message */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-viking-gold/10 border border-viking-gold/20 rounded-lg px-4 py-2">
                <Sparkles className="w-4 h-4 text-viking-gold" />
                <span className="text-sm text-viking-brown font-semibold">
                  {t('conversionCompleteHint')}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Share Modal */}
      <ShareModal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        runeText={runeText}
        englishName={englishName}
        koreanName={koreanName}
      />
    </>
  );
}
