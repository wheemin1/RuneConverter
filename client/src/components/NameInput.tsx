import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Edit3, Sparkles } from "lucide-react";
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
  const isSourceScriptMode =
    language === 'ko' ||
    language === 'zh' ||
    language === 'ja' ||
    language === 'es' ||
    language === 'fr';
  const isKoreanMode = language === 'ko';
  const shouldShowAutoUnavailableNotice =
    isSourceScriptMode &&
    !isKoreanMode &&
    Boolean(koreanName.trim()) &&
    !Boolean(englishName.trim());

  useEffect(() => {
    // Avoid focusing an element inside a subtree that may be aria-hidden
    // (e.g., when a Radix dialog is open), which triggers browser warnings.
    const root = document.getElementById('root');
    if (root?.getAttribute('aria-hidden') === 'true') return;

    const active = document.activeElement;
    if (active && active !== document.body) return;

    const target = isSourceScriptMode ? koreanInputRef.current : englishInputRef.current;
    target?.focus();
  }, [isSourceScriptMode]);
  
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
    // Dual-field mode: bottom field is the rune-ready spelling.
    // Keep it simple (ASCII letters) so users clearly see accent stripping.
    // Single-field mode: allow Latin-extended for direct input.
    const filtered = isSourceScriptMode
      ? value.replace(/[^a-zA-Z\s'-]/g, '')
      : value.replace(/[^a-zA-Z\u00C0-\u024F\s'-]/g, '');
    onEnglishNameChange(filtered);
  };

  const handleSourceNameChange = (value: string) => {
    onKoreanNameChange(value);
  };
  
  return (
    <section className="scroll-reveal relative">
      <Card className="rounded-2xl md:rounded-3xl bg-[rgba(252,251,247,0.84)] border border-[rgba(92,77,60,0.06)] shadow-[0_20px_60px_rgba(62,39,35,0.18)] hover:shadow-[0_26px_80px_rgba(62,39,35,0.22)] hover:translate-y-0 transition-all duration-300">
        <CardContent className="p-6 md:p-10 relative">

          
          <div className="space-y-6 md:space-y-8">
            {isSourceScriptMode && (
              <div className="relative">
                <Label htmlFor="korean-name" className="block text-text-brown font-semibold mb-3 text-base md:text-lg">
                  {isKoreanMode ? t('koreanName') : t('nativeName')}
                </Label>
                <div className="relative">
                  <Input
                    ref={koreanInputRef}
                    id="korean-name"
                    type="text"
                    className="w-full h-[56px] md:h-[60px] border border-[rgba(92,77,60,0.10)] bg-[rgba(92,77,60,0.06)] rounded-2xl font-cinzel text-lg md:text-xl py-4 px-4 text-left shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] focus:outline-none focus:ring-2 focus:ring-viking-gold/25 focus:border-viking-gold transition-[box-shadow,border-color,background-color]"
                    placeholder={isKoreanMode ? t('koreanPlaceholder') : t('nativePlaceholder')}
                    value={koreanName}
                    onChange={(e) => handleSourceNameChange(e.target.value)}
                  />
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Sparkles className="w-5 h-5 text-viking-gold" />
                  </div>
                </div>
              </div>
            )}
            
            <div className="relative">
              <Label htmlFor="english-name" className="block text-text-brown font-semibold mb-3 text-base md:text-lg">
                {isSourceScriptMode ? (isKoreanMode ? t('englishName') : t('romanizedName')) : t('alphabetName')}
              </Label>
              <div className="relative">
                <Input
                  ref={englishInputRef}
                  id="english-name"
                  type="text"
                  className="w-full h-[56px] md:h-[60px] border border-[rgba(92,77,60,0.10)] bg-[rgba(92,77,60,0.06)] rounded-2xl font-cinzel text-lg md:text-xl py-4 px-4 text-left shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] focus:outline-none focus:ring-2 focus:ring-viking-gold/25 focus:border-viking-gold transition-[box-shadow,border-color,background-color]"
                  placeholder={isSourceScriptMode ? (isKoreanMode ? t('englishPlaceholder') : t('romanizedPlaceholder')) : t('alphabetPlaceholder')}
                  value={englishName}
                  onChange={(e) => handleEnglishNameChange(e.target.value)}
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Edit3 className="w-5 h-5 text-viking-peru" />
                </div>
              </div>
              <div className="bg-parchment-darker/30 rounded-xl p-3 md:p-4 mt-4 border-l-4 border-viking-gold/50">
                <p className="text-[11px] md:text-xs text-text-brown-light leading-relaxed opacity-80">
                  <strong>{t('tipLabel')}</strong> {isSourceScriptMode ? (isKoreanMode ? t('tipText') : t('romanizedTipText')) : t('alphabetTipText')}
                </p>
                {shouldShowAutoUnavailableNotice && (
                  <p className="text-[11px] md:text-xs text-text-brown-light leading-relaxed opacity-80 mt-2">
                    {t('romanizedAutoUnavailable')}
                  </p>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-8 md:mt-10">
            <Button
              onClick={handleConvert}
              disabled={!englishName.trim() || isConverting}
              className="w-full h-[56px] md:h-[60px] px-8 rounded-2xl font-semibold text-base md:text-lg tracking-tight text-white relative overflow-hidden bg-gradient-to-b from-viking-brown to-viking-brown-dark shadow-[0_18px_50px_rgba(62,39,35,0.22)] hover:shadow-[0_24px_70px_rgba(62,39,35,0.26)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_14px_40px_rgba(62,39,35,0.22)] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-viking-gold/30 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment disabled:opacity-60 disabled:shadow-none disabled:hover:translate-y-0"
            >
              {isConverting ? (
                <span className="flex items-center justify-center gap-3">
                  <div className="w-5 h-5 border-2 border-white/80 border-t-transparent rounded-full animate-spin"></div>
                  {t('convertingButton')}
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 opacity-90" />
                  <span>{t('convertButton')}</span>
                  <ArrowRight className="w-4 h-4 opacity-90" />
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
