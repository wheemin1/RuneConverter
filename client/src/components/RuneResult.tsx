import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, Download, Copy, Sparkles, Eye, ChevronDown, Save, History } from "lucide-react";
import { generateRuneImage } from "@/lib/imageGenerator";
import { useToast } from "@/hooks/use-toast";
import { getRuneDetails } from "@/lib/runeDatabase";
import { useLanguage } from "@/contexts/LanguageContext";
import ShareModal from "./ShareModal";
import { saveRuneConversion } from "@/lib/localStorageUtils";
import SavedRunesDialog from "./SavedRunesDialog";

interface RuneResultProps {
  runeText: string;
  englishName: string;
  koreanName: string;
}

export default function RuneResult({ runeText, englishName, koreanName }: RuneResultProps) {
  const { t, language } = useLanguage();
  const [isDownloading, setIsDownloading] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showSavedRunes, setShowSavedRunes] = useState(false);
  const { toast } = useToast();

  // Get rune details for quick preview
  const runeDetails = getRuneDetails(runeText, language);

  // Function to generate combined meaning from multiple runes
  const generateCombinedMeaning = (runeDetails: any[]): string => {
    if (runeDetails.length === 0) {
      return t('combinedMeaningDefault');
    }
    
    // Simple fallback based on rune count for now (fully i18n)
    if (runeDetails.length <= 3) {
      return t('combinedMeaningShort');
    } else if (runeDetails.length <= 6) {
      return t('combinedMeaningMedium');
    } else {
      return t('combinedMeaningLong');
    }
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
        description: "Error copying runes.",
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
          title: t('imageTitle'),
          description: t('imageDescription'),
          footer: t('imageFooter')
        }
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
        description: "Error generating image.",
        variant: "destructive",
      });
    }
    setIsDownloading(false);
  };

  const handleSaveToLocal = () => {
    try {
      saveRuneConversion(koreanName, englishName, runeText);
      toast({
        title: t('savedSuccessfully'),
        description: `${koreanName} (${englishName})`,
      });
    } catch (error) {
      toast({
        title: "Error saving result",
        description: "Could not save to local storage",
        variant: "destructive",
      });
    }
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
      <section className="mb-8 scroll-reveal">
        <Card className="ancient-border manuscript-page rounded-lg pulse-glow">
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
                    <div className="text-lg text-text-brown-light mb-3">Elder Futhark Runes</div>
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
                      {t('runeQuote')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              
              <Button
                onClick={handleSaveToLocal}
                className="btn-viking-alt text-viking-brown font-bold py-3 px-6 rounded-lg font-cinzel flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                {t('saveLocal')}
              </Button>
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
                    {t('detailButton')} <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Success Message */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-viking-gold/10 border border-viking-gold/20 rounded-lg px-4 py-2">
                <Sparkles className="w-4 h-4 text-viking-gold" />
                <span className="text-sm text-viking-brown font-semibold">
                  {t('conversionCompleteMessage')}
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
