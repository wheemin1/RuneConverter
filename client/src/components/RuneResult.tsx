import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share2, Download } from "lucide-react";
import { generateRuneImage } from "@/lib/imageGenerator";
import { useToast } from "@/hooks/use-toast";

interface RuneResultProps {
  runeText: string;
  englishName: string;
}

export default function RuneResult({ runeText, englishName }: RuneResultProps) {
  const [isSharing, setIsSharing] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleShare = async () => {
    setIsSharing(true);
    try {
      if (navigator.share) {
        await navigator.share({
          title: '바이킹 룬 문자 변환 결과',
          text: `${englishName}의 룬 문자: ${runeText}`,
          url: window.location.href,
        });
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(
          `${englishName}의 룬 문자: ${runeText}\n\n바이킹 룬 문자 변환기에서 생성: ${window.location.href}`
        );
        toast({
          title: "공유 링크가 복사되었습니다",
          description: "클립보드에 복사된 내용을 붙여넣기 하세요.",
        });
      }
    } catch (error) {
      toast({
        title: "공유 실패",
        description: "공유 기능을 사용할 수 없습니다.",
        variant: "destructive",
      });
    }
    setIsSharing(false);
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const imageData = await generateRuneImage(runeText, englishName);
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
    <section className="mb-8">
      <Card className="ancient-border bg-parchment-dark rounded-lg glow-effect">
        <CardContent className="p-6">
          <h3 className="font-cinzel-decorative text-2xl font-bold text-viking-brown mb-4 text-center">
            ᛁᛁ. 룬 문자 변환 결과
          </h3>
          
          <div className="text-center mb-6">
            <div className="bg-parchment rounded-lg p-8 ancient-border">
              <div className="text-6xl md:text-8xl rune-character mb-4">
                {runeText}
              </div>
              <div className="text-xl font-semibold text-text-brown">
                {englishName.toUpperCase()}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={handleShare}
              disabled={isSharing}
              className="bg-viking-peru hover:bg-viking-brown text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 font-cinzel flex items-center justify-center gap-2"
            >
              <Share2 className="w-5 h-5" />
              {isSharing ? "공유 중..." : "공유하기"}
            </Button>
            <Button
              onClick={handleDownload}
              disabled={isDownloading}
              className="bg-viking-gold hover:bg-viking-brown text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 font-cinzel flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              {isDownloading ? "저장 중..." : "이미지 저장"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
