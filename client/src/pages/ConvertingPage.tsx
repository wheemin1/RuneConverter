import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface ConvertingPageProps {
  koreanName: string;
  englishName: string;
  onComplete: () => void;
}

export default function ConvertingPage({ koreanName, englishName, onComplete }: ConvertingPageProps) {
  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      text: t('convertingStepKoreanAnalyze'),
      detail: `${t('convertingDetailKoreanAnalyzePrefix')}${koreanName}${t('convertingDetailKoreanAnalyzeSuffix')}`,
    },
    {
      text: t('convertingStepEnglishValidate'),
      detail: `${t('convertingDetailEnglishValidatePrefix')}${englishName}${t('convertingDetailEnglishValidateSuffix')}`,
    },
    { text: t('convertingStepRuneMapping'), detail: t('convertingDetailRuneMapping') },
    { text: t('convertingStepMeaning'), detail: t('convertingDetailMeaning') },
    { text: t('convertingStepDone'), detail: t('convertingDetailDone') }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const stepTimer = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(stepTimer);
  }, []);

  return (
    <div className="parchment-bg min-h-[100dvh] font-cinzel flex items-center justify-center p-4 pb-safe overflow-y-auto">
      <Card className="ancient-border manuscript-page rounded-lg pulse-glow max-w-2xl w-full">
        <CardContent className="p-4 md:p-12">
          {/* Header */}
          <div className="text-center mb-4 md:mb-8">
            <div className="font-cinzel-decorative text-xl md:text-3xl font-bold text-viking-brown mb-2 md:mb-4">
              ᚱᚢᚾᛖ ᚲᚮᚾᚡᛖᚱᛏᛁᛜ
            </div>
            <h2 className="text-lg md:text-2xl font-semibold text-text-brown mb-2">
              {t('convertingTitle')}
            </h2>
            <p className="text-xs md:text-base text-text-brown-light">
              {t('convertingSubtitle')}
            </p>
          </div>

          {/* Progress Circle */}
          <div className="flex justify-center mb-4 md:mb-8">
            <div className="relative">
              <svg className="w-24 h-24 md:w-32 md:h-32 transform -rotate-90" viewBox="0 0 120 120">
                <circle 
                  cx="60" 
                  cy="60" 
                  r="50" 
                  stroke="hsl(32, 43%, 70%)" 
                  strokeWidth="8" 
                  fill="none" 
                  opacity="0.3"
                />
                <circle 
                  cx="60" 
                  cy="60" 
                  r="50" 
                  stroke="hsl(45, 100%, 35%)" 
                  strokeWidth="8" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 50}`}
                  strokeDashoffset={`${2 * Math.PI * 50 * (1 - progress / 100)}`}
                  className="transition-all duration-300 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-xl md:text-2xl font-bold text-viking-brown">{Math.round(progress)}%</div>
                  <div className="text-xs md:text-sm text-text-brown-light">{t('convertingCompleteLabel')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Step */}
          <div className="text-center mb-4 md:mb-6">
            <div className="text-xl font-semibold text-viking-brown mb-2 converting-animation">
              {steps[currentStep]?.text}
            </div>
            <div className="text-xs md:text-base text-text-brown-light italic">
              {steps[currentStep]?.detail}
            </div>
          </div>

          {/* Steps Progress */}
          <div className="space-y-2 md:space-y-3">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-3 transition-all duration-500 ${
                  index <= currentStep ? 'opacity-100' : 'opacity-30'
                }`}
              >
                <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 flex items-center justify-center ${
                  index < currentStep 
                    ? 'bg-viking-gold border-viking-gold' 
                    : index === currentStep 
                    ? 'border-viking-gold bg-transparent animate-pulse' 
                    : 'border-viking-tan bg-transparent'
                }`}>
                  {index < currentStep && (
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <div className={`text-xs md:text-sm ${
                  index <= currentStep ? 'text-text-brown' : 'text-text-brown-light'
                }`}>
                  {step.text}
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="ornamental-divider mt-4 md:mt-8"></div>
          
          {/* Mystical Quote */}
          <div className="text-center mt-3 md:mt-6">
            <p className="text-[10px] md:text-sm text-text-brown-light italic font-cinzel">
              {t('convertingQuote')}
            </p>
            <p className="text-[9px] md:text-xs text-viking-tan mt-1 md:mt-2">{t('convertingQuoteAuthor')}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}