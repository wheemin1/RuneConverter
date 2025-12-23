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
    <section className="scroll-reveal relative">
      <Card className="toss-card manuscript-page rounded-2xl md:rounded-3xl bg-parchment-dark border-none">
        <CardContent className="p-6 md:p-10 relative">

          
          <div className="space-y-6 md:space-y-8">
            <div className="relative">
              <Label htmlFor="korean-name" className="block text-text-brown font-semibold mb-3 text-base md:text-lg">
                {t('koreanName')}
              </Label>
              <div className="relative">
                <Input
                  id="korean-name"
                  type="text"
                  className="w-full h-[56px] md:h-[60px] border-0 border-b-2 border-viking-tan focus:border-viking-gold bg-transparent rounded-none font-cinzel text-lg md:text-xl py-4 px-2 text-left focus:outline-none focus:ring-0 transition-colors"
                  placeholder={t('koreanPlaceholder')}
                  value={koreanName}
                  onChange={(e) => onKoreanNameChange(e.target.value)}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Sparkles className="w-5 h-5 text-viking-gold" />
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Label htmlFor="english-name" className="block text-text-brown font-semibold mb-3 text-base md:text-lg">
                {t('englishName')}
              </Label>
              <div className="relative">
                <Input
                  id="english-name"
                  type="text"
                  className="w-full h-[56px] md:h-[60px] border-0 border-b-2 border-viking-tan focus:border-viking-gold bg-transparent rounded-none font-cinzel text-lg md:text-xl py-4 px-2 text-left focus:outline-none focus:ring-0 transition-colors"
                  placeholder={t('englishPlaceholder')}
                  value={englishName}
                  onChange={(e) => onEnglishNameChange(e.target.value)}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Edit3 className="w-5 h-5 text-viking-peru" />
                </div>
              </div>
              <div className="bg-parchment-darker/50 rounded-xl p-3 md:p-4 mt-4 border-l-4 border-viking-gold">
                <p className="text-xs md:text-sm text-text-brown-light leading-relaxed">
                  <strong>💡 팁:</strong> {t('tipText')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 md:mt-10">
            <Button
              onClick={onConvert}
              disabled={!englishName.trim() || isConverting}
              className="w-full btn-viking text-white font-bold h-[56px] md:h-[60px] px-8 rounded-2xl font-cinzel text-lg md:text-xl relative shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[0.98]"
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
