import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Edit3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { normalizeLatinInput } from "@/lib/runeConverter";

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
  const { t, language } = useLanguage();
  const { toast } = useToast();

  const koreanInputRef = useRef<HTMLInputElement | null>(null);
  const englishInputRef = useRef<HTMLInputElement | null>(null);
  const isKoreanMode = language === 'ko';

  useEffect(() => {
    const target = isKoreanMode ? koreanInputRef.current : englishInputRef.current;
    target?.focus();
  }, [isKoreanMode]);
  
  const handleConvert = () => {
    // 빈 문자열 검사
    if (!englishName.trim()) {
      toast({
        title: t('englishRequiredTitle'),
        description: t('englishRequiredDesc'),
        variant: "destructive"
      });
      return;
    }
    
    // 로마자(라틴 문자)로 변환 가능한지 검사
    const normalized = normalizeLatinInput(englishName);
    if (!normalized) {
      toast({
        title: t('englishInvalidTitle'),
        description: t('englishInvalidDesc'),
        variant: "destructive"
      });
      return;
    }
    
    onConvert();
  };
  
  const handleEnglishNameChange = (value: string) => {
    // 라틴 문자(악센트 포함) + 공백/하이픈/어포스트로피만 허용
    // TS target 제약으로 \p{...} 대신 Latin-extended 범위를 사용
    // 예: François, José, O'Connor, Anne-Marie, Ōsaka
    const filtered = value.replace(/[^a-zA-Z\u00C0-\u024F\s'-]/g, '');
    onEnglishNameChange(filtered);
  };
  
  return (
    <section className="scroll-reveal relative">
      <Card className="toss-card manuscript-page rounded-2xl md:rounded-3xl bg-parchment-dark border-none">
        <CardContent className="p-6 md:p-10 relative">

          
          <div className="space-y-6 md:space-y-8">
            {isKoreanMode && (
              <div className="relative">
                <Label htmlFor="korean-name" className="block text-text-brown font-semibold mb-3 text-base md:text-lg">
                  {t('koreanName')}
                </Label>
                <div className="relative">
                  <Input
                    ref={koreanInputRef}
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
            )}
            
            <div className="relative">
              <Label htmlFor="english-name" className="block text-text-brown font-semibold mb-3 text-base md:text-lg">
                {isKoreanMode ? t('englishName') : t('alphabetName')}
              </Label>
              <div className="relative">
                <Input
                  ref={englishInputRef}
                  id="english-name"
                  type="text"
                  className="w-full h-[56px] md:h-[60px] border-0 border-b-2 border-viking-tan focus:border-viking-gold bg-transparent rounded-none font-cinzel text-lg md:text-xl py-4 px-2 text-left focus:outline-none focus:ring-0 transition-colors"
                  placeholder={isKoreanMode ? t('englishPlaceholder') : t('alphabetPlaceholder')}
                  value={englishName}
                  onChange={(e) => handleEnglishNameChange(e.target.value)}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Edit3 className="w-5 h-5 text-viking-peru" />
                </div>
              </div>
              <div className="bg-parchment-darker/30 rounded-xl p-3 md:p-4 mt-4 border-l-4 border-viking-gold/50">
                <p className="text-[11px] md:text-xs text-text-brown-light leading-relaxed opacity-80">
                  <strong>{t('tipLabel')}</strong> {isKoreanMode ? t('tipText') : t('alphabetTipText')}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 md:mt-10">
            <Button
              onClick={handleConvert}
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
                {t('englishEnableHint')}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
