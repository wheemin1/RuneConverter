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
            
            {/* Quick Rune Meanings */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-viking-brown mb-4 text-center">
                각 룬 문자의 의미
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {runeDetails.map((rune, index) => (
                  <div 
                    key={index}
                    className="bg-parchment-darker rounded-lg p-3 border border-viking-tan/20 hover:border-viking-tan/40 transition-all duration-200 cursor-pointer group"
                    onClick={() => {
                      // Scroll to detailed explanation
                      const detailElement = document.querySelector('[data-scroll-target="detailed-explanation"]');
                      if (detailElement) {
                        detailElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl rune-character group-hover:scale-110 transition-transform duration-200">
                        {rune.character}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-viking-brown text-sm">
                          {rune.name}
                        </div>
                        <div className="text-xs text-text-brown-light truncate">
                          {rune.keywords.slice(0, 2).join(', ')}
                        </div>
                      </div>
                      <ChevronDown className="w-4 h-4 text-viking-tan group-hover:text-viking-brown transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-3">
                <p className="text-sm text-text-brown-light">
                  각 룬을 클릭하면 자세한 의미를 확인할 수 있습니다
                </p>
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
