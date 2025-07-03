import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Edit3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface NameInputProps {
  koreanName: string;
  englishName: string;
  onKoreanNameChange: (name: string) => void;
  onEnglishNameChange: (name: string) => void;
  onConvert: () => void;
  isConverting?: boolean;
}

export default function NameInput({
  koreanName,
  englishName,
  onKoreanNameChange,
  onEnglishNameChange,
  onConvert,
  isConverting = false
}: NameInputProps) {
  const { t } = useLanguage();
  return (
    <section className="mb-8 scroll-reveal">
      <Card className="ancient-border manuscript-page rounded-lg pulse-glow">
        <CardContent className="p-8">
          <div className="text-center mb-6">
            <h3 className="font-cinzel-decorative text-3xl font-bold text-viking-brown mb-3 floating-animation">
              ᛁ. {t('inputTitle')}
            </h3>
            <p className="text-text-brown-light italic">
              {t('inputSubtitle')}
            </p>
            <div className="ornamental-divider"></div>
          </div>
          
          <div className="space-y-6">
            <div className="relative">
              <Label htmlFor="korean-name" className="block text-text-brown font-bold mb-3 text-lg">
                <span className="flex items-center gap-2">
                  <span className="rune-character text-xl">ᚴ</span>
                  {t('koreanName')}
                </span>
              </Label>
              <Input
                id="korean-name"
                type="text"
                className="input-parchment rounded-lg font-cinzel text-xl py-4 px-6 text-center"
                placeholder={t('koreanPlaceholder')}
                value={koreanName}
                onChange={(e) => onKoreanNameChange(e.target.value)}
              />
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none top-8">
                <Sparkles className="w-5 h-5 text-viking-gold" />
              </div>
            </div>
            
            <div className="relative">
              <Label htmlFor="english-name" className="block text-text-brown font-bold mb-3 text-lg">
                <span className="flex items-center gap-2">
                  <span className="rune-character text-xl">ᛖ</span>
                  {t('englishName')}
                </span>
              </Label>
              <Input
                id="english-name"
                type="text"
                className="input-parchment rounded-lg font-cinzel text-xl py-4 px-6 text-center"
                placeholder={t('englishPlaceholder')}
                value={englishName}
                onChange={(e) => onEnglishNameChange(e.target.value)}
              />
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none top-8">
                <Edit3 className="w-5 h-5 text-viking-peru" />
              </div>
              <div className="bg-parchment-darker rounded-lg p-3 mt-3 border-l-4 border-viking-gold">
                <p className="text-sm text-text-brown-light">
                  <strong>💡 팁:</strong> {t('tipText')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button
              onClick={onConvert}
              disabled={!englishName.trim() || isConverting}
              className="w-full btn-viking text-white font-bold py-4 px-8 rounded-lg font-cinzel text-xl relative"
            >
              {isConverting ? (
                <span className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  {t('convertingButton')}
                </span>
              ) : (
                <span className="flex items-center justify-center gap-3">
                  <span className="rune-character text-2xl">ᚱᚢᚾᛖ</span>
                  {t('convertButton')}
                  <Sparkles className="w-5 h-5" />
                </span>
              )}
            </Button>
            
            {!englishName.trim() && (
              <p className="text-center text-text-brown-light text-sm mt-3">
                {t('englishName')}을 입력하면 변환 버튼이 활성화됩니다
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
