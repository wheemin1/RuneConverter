import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Copy, Download } from "lucide-react";
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
  const { t, language } = useLanguage();

  const shareName = language === 'ko' ? (koreanName || englishName) : (englishName || koreanName);

  const shareUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}/og?name=${encodeURIComponent(shareName)}&rune=${encodeURIComponent(runeText)}&lang=${encodeURIComponent(language)}`
      : '';

  const displayName = koreanName ? `${koreanName} (${englishName})` : englishName;
  const shareText = `${displayName} - ${t('shareImageTitle')}: ${runeText}

${t('shareCta')}`;

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: t('shareLinkCopiedTitle'),
        description: t('shareLinkCopiedDesc'),
      });
    } catch (error) {
      toast({
        title: t('copyFailed'),
        description: t('shareCopyFailedDesc'),
        variant: "destructive",
      });
    }
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
      toast({
        title: t('shareTextCopiedTitle'),
        description: t('shareTextCopiedDesc'),
      });
    } catch (error) {
      toast({
        title: t('copyFailed'),
        description: t('shareCopyFailedDesc'),
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
        title: t('shareDownloadSuccessTitle'),
        description: t('shareDownloadSuccessDesc'),
      });
    } catch (error) {
      toast({
        title: t('downloadFailed'),
        description: t('shareDownloadFailedDesc'),
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
          {t('shareModalSubtitle')}
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
                {t('shareImageDesc')}
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
            {t('shareCopyLinkButton')}
          </Button>

          {/* Image Download */}
          <Button
            onClick={handleDownload}
            disabled={isDownloading}
            className="btn-viking text-white font-bold py-3 px-4 rounded-lg font-cinzel flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            {isDownloading ? t('downloadingButton') : t('downloadButton')}
          </Button>
        </div>

        {/* Share URL Display */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-viking-brown mb-2">
            {t('shareLinkLabel')}
          </h4>
          <div className="input-parchment rounded-lg px-3 py-2 text-sm font-mono break-all">
            {shareUrl}
          </div>
        </div>

        <div className="ornamental-divider mt-6"></div>
        
        <div className="text-center">
          <p className="text-sm text-text-brown-light mb-2">
            {t('shareCta')}
          </p>
          <p className="text-sm font-medium text-text-brown">
            {t('bugReport')}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}