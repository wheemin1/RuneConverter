import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Share2, Copy, Download, Facebook, Twitter, Instagram, MessageCircle } from "lucide-react";
import { generateRuneImage } from "@/lib/imageGenerator";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t } = useLanguage();

  const shareText = `${koreanName} (${englishName})의 바이킹 룬 문자: ${runeText}

고대 엘더 푸타르크 룬으로 변환된 나의 이름을 확인해보세요!

#바이킹룬문자 #룬변환기 #고대문자`;

  const shareUrl = `${window.location.origin}?name=${encodeURIComponent(koreanName)}`;
  
  // Create meta image URL for OG image when sharing
  const getMetaImageUrl = () => {
    // Create a simple URL that could be used for meta image generation
    return `${window.location.origin}/api/og?name=${encodeURIComponent(koreanName)}&rune=${encodeURIComponent(runeText)}`;
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

  const handleSocialShare = (platform: string) => {
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(shareUrl);
    
    // Add meta tags for sharing preview when possible
    const metaTags = document.querySelectorAll('meta[property^="og:"]');
    const ogImageTag = document.querySelector('meta[property="og:image"]');
    
    // Try to update OG image if possible
    if (ogImageTag) {
      const currentUrl = ogImageTag.getAttribute('content');
      const dynamicUrl = getMetaImageUrl();
      ogImageTag.setAttribute('content', dynamicUrl);
      
      // Restore the original URL after a delay
      setTimeout(() => {
        if (currentUrl) {
          ogImageTag.setAttribute('content', currentUrl);
        }
      }, 5000);
    }
    
    let url = '';
    
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
        break;
      case 'kakao':
        // KakaoTalk sharing would require Kakao SDK, for now we'll use web sharing
        if (navigator.share) {
          navigator.share({
            title: '바이킹 룬 문자 변환 결과',
            text: shareText,
            url: shareUrl,
          });
          return;
        } else {
          handleCopyText();
          return;
        }
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl manuscript-page ancient-border">
        <DialogHeader>
          <DialogTitle className="font-cinzel-decorative text-2xl text-viking-brown text-center">
            ᚱᚢᚾᛖ ᛊᚺᚨᚱᛁᚾᚷ
          </DialogTitle>
          <p className="text-center text-text-brown-light">
            룬 문자 변환 결과를 친구들과 공유해보세요
          </p>
        </DialogHeader>

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
          {/* Text Copy */}
          <Button
            onClick={handleCopyText}
            className="btn-viking text-white font-bold py-3 px-4 rounded-lg font-cinzel flex items-center justify-center gap-2"
          >
            <Copy className="w-4 h-4" />
            텍스트 복사
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

        {/* Social Media Sharing */}
        <div className="mt-6">
          <h4 className="text-lg font-semibold text-viking-brown mb-4 text-center">
            소셜 미디어 공유
          </h4>
          <div className="grid grid-cols-3 gap-4">
            <Button
              onClick={() => handleSocialShare('facebook')}
              variant="outline"
              className="border-viking-tan hover:bg-viking-tan hover:text-white transition-colors flex items-center justify-center gap-2 py-3"
            >
              <Facebook className="w-4 h-4" />
              Facebook
            </Button>
            
            <Button
              onClick={() => handleSocialShare('twitter')}
              variant="outline"
              className="border-viking-tan hover:bg-viking-tan hover:text-white transition-colors flex items-center justify-center gap-2 py-3"
            >
              <Twitter className="w-4 h-4" />
              Twitter
            </Button>
            
            <Button
              onClick={() => handleSocialShare('kakao')}
              variant="outline"
              className="border-viking-tan hover:bg-viking-tan hover:text-white transition-colors flex items-center justify-center gap-2 py-3"
            >
              <MessageCircle className="w-4 h-4" />
              KakaoTalk
            </Button>
          </div>
        </div>

        {/* Share URL */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-viking-brown mb-2">
            공유 링크
          </h4>
          <div className="flex gap-2">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 input-parchment rounded-lg px-3 py-2 text-sm font-mono"
            />
            <Button
              onClick={() => navigator.clipboard.writeText(shareUrl)}
              variant="outline"
              className="border-viking-tan hover:bg-viking-tan hover:text-white"
            >
              <Copy className="w-4 h-4" />
            </Button>
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