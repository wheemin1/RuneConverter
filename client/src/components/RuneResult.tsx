import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Share2, Download, Copy, Sparkles, Eye, ChevronDown, Save, History, ChevronUp } from "lucide-react";
import { generateRuneImage } from "@/lib/imageGenerator";
import { useToast } from "@/hooks/use-toast";
import { getRuneDetails, getRuneByCharacter } from "@/lib/runeDatabase";
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
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { toast } = useToast();

  // Get rune details for quick preview
  const runeDetails = getRuneDetails(runeText, language);
  
  // Individual rune characters for interactive display
  const runeCharacters = Array.from(runeText);

  // Function to scroll to specific rune in detailed explanation
  const scrollToRune = (index: number) => {
    const runeElement = document.querySelector(`[data-rune-index="${index}"]`);
    if (runeElement) {
      runeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Highlight animation
      runeElement.classList.add('highlight-pulse');
      setTimeout(() => runeElement.classList.remove('highlight-pulse'), 2000);
    }
  };

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
                  
                  {/* Rune Text - Main Feature with Interactive Tooltips */}
                  <div className="mb-6 relative">
                    <div className="text-lg text-text-brown-light mb-3">Elder Futhark Runes</div>
                    <TooltipProvider delayDuration={300}>
                      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-4">
                        {runeCharacters.map((char, index) => {
                          const runeDetail = getRuneByCharacter(char, language);
                          if (!runeDetail) return <span key={index} className="text-6xl md:text-8xl rune-character-large">{char}</span>;
                          
                          return (
                            <Tooltip key={index}>
                              <TooltipTrigger asChild>
                                <button
                                  onClick={() => scrollToRune(index)}
                                  className="text-5xl md:text-7xl rune-character-large hover:text-viking-gold hover:scale-110 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-viking-gold focus:ring-offset-2 rounded-lg px-1"
                                  aria-label={`${runeDetail.name} rune`}
                                >
                                  {char}
                                </button>
                              </TooltipTrigger>
                              <TooltipContent 
                                side="top" 
                                className="bg-gradient-to-br from-amber-50 to-stone-100 border-amber-300 shadow-xl max-w-xs p-4"
                              >
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    <span className="text-2xl rune-character">{char}</span>
                                    <div>
                                      <p className="font-bold text-amber-900">{runeDetail.name}</p>
                                      <p className="text-xs text-stone-600">{runeDetail.phonetic}</p>
                                    </div>
                                  </div>
                                  <p className="text-sm text-stone-700 leading-relaxed">
                                    {runeDetail.meaning.split('.')[0]}.
                                  </p>
                                  <p className="text-xs text-amber-700 italic">
                                    {t('clickForDetails') || 'Click for full details'}
                                  </p>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          );
                        })}
                      </div>
                    </TooltipProvider>
                    
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
              </div>
            </div>

            {/* Quick View Section - Collapsible */}
            <div className="mt-6">
              <Collapsible open={isQuickViewOpen} onOpenChange={setIsQuickViewOpen}>
                <div className="bg-gradient-to-br from-amber-50/80 to-stone-50/80 rounded-lg border border-amber-200/50 overflow-hidden">
                  <CollapsibleTrigger asChild>
                    <button className="w-full p-4 flex items-center justify-between hover:bg-amber-100/50 transition-colors">
                      <div className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-amber-700" />
                        <span className="font-semibold text-amber-900">
                          {t('quickViewTitle') || 'Quick View - All Rune Meanings'}
                        </span>
                      </div>
                      {isQuickViewOpen ? (
                        <ChevronUp className="w-5 h-5 text-amber-700" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-amber-700" />
                      )}
                    </button>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent className="border-t border-amber-200/50">
                    <div className="p-4 space-y-3">
                      {runeDetails.map((rune, index) => (
                        <div 
                          key={index}
                          className="flex items-start gap-3 p-3 bg-white/50 rounded-lg hover:bg-amber-50 transition-colors cursor-pointer"
                          onClick={() => scrollToRune(index)}
                        >
                          <span className="text-3xl rune-character flex-shrink-0">{rune.character}</span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h5 className="font-bold text-amber-900">{rune.name}</h5>
                              <Badge variant="outline" className="text-xs border-amber-300 text-amber-700">
                                {rune.phonetic}
                              </Badge>
                            </div>
                            <p className="text-sm text-stone-700 leading-relaxed line-clamp-2">
                              {rune.meaning}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {rune.keywords.slice(0, 3).map((keyword, ki) => (
                                <span 
                                  key={ki} 
                                  className="text-xs px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full"
                                >
                                  {keyword}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </div>

            {/* Scroll to Detailed Button */}
            <div className="mt-6 text-center">
              <Button
                onClick={() => {
                  const detailElement = document.querySelector('[data-scroll-target="detailed-explanation"]');
                  if (detailElement) {
                    detailElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                variant="outline"
                className="border-viking-tan hover:bg-viking-tan hover:text-white transition-colors"
              >
                {t('detailButton')} <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
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
