import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Copy, Download } from "lucide-react";
import { generateRuneImage } from "@/lib/imageGenerator";
import { useToast } from "@/hooks/use-toast";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  runeText: string;
  englishName: string;
  koreanName: string;
}

export default function ShareModal({ 
  isOpen, 
  onClose, 
  runeText, 
  englishName, 
  koreanName 
}: ShareModalProps) {
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const shareText = `${koreanName} (${englishName})의 바이킹 룬 문자: ${runeText}

고대 엘더 푸타르크 룬으로 변환된 나의 이름을 확인해보세요!

#바이킹룬문자 #룬변환기 #고대문자`;

  const shareUrl = `${window.location.origin}?name=${encodeURIComponent(koreanName)}`;

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: "링크가 복사되었습니다",
        description: "친구에게 공유해보세요!",
      });
    } catch (error) {
      toast({
        title: "복사 실패",
        description: "링크 복사 중 오류가 발생했습니다.",
        variant: "destructive",
      });
    }
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
      toast({
        title: "텍스트가 복사되었습니다",
        description: "클립보드에 룬 변환 결과가 복사되었습니다.",
      });
    } catch (error) {
      toast({
        title: "복사 실패",
        description: "텍스트 복사 중 오류가 발생했습니다.",
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-parchment border-viking-tan/30 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="font-cinzel-decorative text-2xl text-viking-brown text-center">
            ᚱᚢᚾᛖ ᛊᚺᚨᚱᛁᚾᚷ
          </DialogTitle>
        </DialogHeader>

        <p className="text-center text-text-brown-light mt-2">
          룬 문자 변환 결과를 친구들과 공유해보세요
        </p>

        {/* Preview Card */}
        <Card className="ancient-border bg-parchment-dark">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <div className="text-lg font-semibold text-text-brown mb-2">
                {koreanName} ({englishName})
              </div>
              <div className="text-4xl rune-character-large mb-4">
                {runeText}
              </div>
              <div className="text-sm text-text-brown-light">
                고대 바이킹 엘더 푸타르크 룬 문자
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Share Options */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {/* URL Copy */}
          <Button
            onClick={handleCopyUrl}
            className="btn-viking text-white font-bold py-3 px-4 rounded-lg font-cinzel flex items-center justify-center gap-2"
          >
            <Copy className="w-4 h-4" />
            링크 복사
          </Button>

          {/* Image Download */}
          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            className="btn-viking text-white font-bold py-3 px-4 rounded-lg font-cinzel flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            {isDownloading ? "저장 중..." : "이미지 저장"}
          </Button>
        </div>

        {/* Share URL Display */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-viking-brown mb-2">
            공유 링크
          </h4>
          <div className="input-parchment rounded-lg px-3 py-2 text-sm font-mono break-all">
            {shareUrl}
          </div>
        </div>

        <div className="ornamental-divider mt-6"></div>
        
        <div className="text-center">
          <p className="text-sm text-text-brown-light mb-2">
            바이킹 룬 문자 변환기로 더 많은 이름을 변환해보세요!
          </p>
          <p className="text-sm font-medium text-text-brown">
            버그 제보: jowheemin@gmail.com
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}