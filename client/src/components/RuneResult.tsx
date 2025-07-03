import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Share2, Download, Copy, Sparkles, Eye, ChevronDown } from "lucide-react";
import { generateRuneImage } from "@/lib/imageGenerator";
import { useToast } from "@/hooks/use-toast";
import { getRuneDetails } from "@/lib/runeDatabase";
import ShareModal from "./ShareModal";

interface RuneResultProps {
  runeText: string;
  englishName: string;
  koreanName: string;
}

export default function RuneResult({ runeText, englishName, koreanName }: RuneResultProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const { toast } = useToast();

  // Get rune details for quick preview
  const runeDetails = getRuneDetails(runeText);

  // Function to generate combined meaning from multiple runes
  const generateCombinedMeaning = (runeDetails: any[]): string => {
    if (runeDetails.length === 0) return "신비로운 힘을 담은 이름입니다.";
    
    // Extract key themes from all runes
    const allKeywords = runeDetails.flatMap(rune => rune.keywords);
    const themes = allKeywords.filter((keyword, index) => allKeywords.indexOf(keyword) === index); // Remove duplicates
    
    // Create meaningful combinations based on common themes
    const positiveThemes = themes.filter(theme => 
      ['성공', '풍요', '지혜', '용기', '보호', '행운', '힘', '성장', '번영', '조화', '균형', '창조', '발전', '승리', '희망'].includes(theme)
    );
    
    const personalityThemes = themes.filter(theme => 
      ['리더십', '소통', '여행', '모험', '변화', '직관', '인내', '의지', '열정', '집중', '완성', '통찰'].includes(theme)
    );
    
    // Generate combined meaning
    let meaning = "";
    
    if (positiveThemes.length > 0 && personalityThemes.length > 0) {
      meaning = `${positiveThemes.slice(0, 2).join('과 ')}을 바탕으로 ${personalityThemes.slice(0, 2).join('과 ')}을 발휘하여 목표를 달성하는 인물`;
    } else if (positiveThemes.length > 0) {
      meaning = `${positiveThemes.slice(0, 3).join(', ')}의 기운을 가진 축복받은 이름`;
    } else if (personalityThemes.length > 0) {
      meaning = `${personalityThemes.slice(0, 3).join(', ')}의 특성을 지닌 강인한 인물`;
    } else {
      // Fallback to general meaning based on rune count
      if (runeDetails.length <= 3) {
        meaning = "간결하면서도 강력한 에너지를 지닌 이름";
      } else if (runeDetails.length <= 6) {
        meaning = "균형잡힌 힘과 지혜를 겸비한 이름";
      } else {
        meaning = "복합적이고 깊은 의미를 담은 풍부한 이름";
      }
    }
    
    return meaning + ".";
  };

  const handleQuickCopy = async () => {
    try {
      await navigator.clipboard.writeText(runeText);
      toast({
        title: "룬 문자가 복사되었습니다",
        description: `${runeText}가 클립보드에 복사되었습니다.`,
      });
    } catch (error) {
      toast({
        title: "복사 실패",
        description: "룬 문자 복사 중 오류가 발생했습니다.",
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
        runeColor: '#8B4513'
      });
      const link = document.createElement('a');
      link.download = `${englishName}_rune_conversion.png`;
      link.href = imageData;
      link.click();
      
      toast({
        title: "이미지 다운로드 완료",
        description: "룬 문자 변환 결과가 저장되었습니다.",
      });
    } catch (error) {
      toast({
        title: "다운로드 실패",
        description: "이미지 생성 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    }
    setIsDownloading(false);
  };

  return (
    <>
      <section className="mb-8 scroll-reveal">
        <Card className="ancient-border manuscript-page rounded-lg pulse-glow">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h3 className="font-cinzel-decorative text-3xl font-bold text-viking-brown mb-3 floating-animation">
                ᛁᛁ. 룬 문자 변환 결과
              </h3>
              <p className="text-text-brown-light italic">
                고대 바이킹의 신비로운 힘이 담긴 당신의 이름
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
                    <div className="text-lg text-text-brown-light mb-1">한국어</div>
                    <div className="text-2xl font-bold text-viking-brown font-cinzel">
                      {koreanName}
                    </div>
                  </div>
                  
                  {/* English Name */}
                  <div className="mb-6">
                    <div className="text-lg text-text-brown-light mb-1">영문명</div>
                    <div className="text-xl font-semibold text-text-brown font-cinzel">
                      {englishName.toUpperCase()}
                    </div>
                  </div>
                  
                  {/* Rune Text - Main Feature */}
                  <div className="mb-6 relative">
                    <div className="text-lg text-text-brown-light mb-3">고대 바이킹 룬 문자</div>
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
                      룬 문자 복사
                    </Button>
                  </div>
                  
                  {/* Mystical Quote */}
                  <div className="text-center">
                    <p className="text-sm text-text-brown-light italic">
                      "이 룬들은 당신의 이름에 담긴 고대의 힘을 나타냅니다"
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
                상세 공유
              </Button>
              
              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                className="btn-viking text-white font-bold py-3 px-6 rounded-lg font-cinzel flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                {isDownloading ? "저장 중..." : "이미지 저장"}
              </Button>
            </div>
            
            {/* Combined Rune Meaning */}
            <div className="mt-6">
              <div className="bg-gradient-to-r from-viking-gold/10 to-viking-peru/10 rounded-lg p-6 border border-viking-gold/20">
                <h4 className="text-lg font-semibold text-viking-brown mb-3 text-center">
                  종합적인 의미
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
                    각 룬의 세부 의미 보기 <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Success Message */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 bg-viking-gold/10 border border-viking-gold/20 rounded-lg px-4 py-2">
                <Sparkles className="w-4 h-4 text-viking-gold" />
                <span className="text-sm text-viking-brown font-semibold">
                  변환 완료! 위의 룬들을 클릭하여 자세한 의미를 확인해보세요.
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
