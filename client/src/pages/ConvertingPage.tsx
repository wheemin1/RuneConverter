import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ConvertingPageProps {
  koreanName: string;
  englishName: string;
  onComplete: () => void;
}

export default function ConvertingPage({ koreanName, englishName, onComplete }: ConvertingPageProps) {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { text: "한국어 이름 분석 중...", detail: `"${koreanName}" 음성 구조 해석` },
    { text: "영문 변환 확인 중...", detail: `"${englishName}" 철자 검증` },
    { text: "엘더 푸타르크 룬 매핑...", detail: "각 글자를 고대 룬 문자로 변환" },
    { text: "룬 문자 의미 해석...", detail: "각 룬의 상징과 의미 분석" },
    { text: "신비로운 변환 완료!", detail: "고대 바이킹의 지혜가 담긴 결과" }
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
    <div className="parchment-bg min-h-screen font-cinzel flex items-center justify-center p-4">
      <Card className="ancient-border manuscript-page rounded-lg pulse-glow max-w-2xl w-full">
        <CardContent className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="font-cinzel-decorative text-3xl font-bold text-viking-brown mb-4">
              ᚱᚢᚾᛖ ᚲᚮᚾᚡᛖᚱᛏᛁᛜ
            </div>
            <h2 className="text-2xl font-semibold text-text-brown mb-2">
              룬 문자 변환 중
            </h2>
            <p className="text-text-brown-light">
              고대 바이킹의 신비로운 힘이 당신의 이름을 변환하고 있습니다
            </p>
          </div>

          {/* Progress Circle */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
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
                  <div className="text-2xl font-bold text-viking-brown">{Math.round(progress)}%</div>
                  <div className="text-sm text-text-brown-light">완료</div>
                </div>
              </div>
            </div>
          </div>

          {/* Current Step */}
          <div className="text-center mb-6">
            <div className="text-xl font-semibold text-viking-brown mb-2 converting-animation">
              {steps[currentStep]?.text}
            </div>
            <div className="text-text-brown-light italic">
              {steps[currentStep]?.detail}
            </div>
          </div>

          {/* Steps Progress */}
          <div className="space-y-3">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`flex items-center space-x-3 transition-all duration-500 ${
                  index <= currentStep ? 'opacity-100' : 'opacity-30'
                }`}
              >
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  index < currentStep 
                    ? 'bg-viking-gold border-viking-gold' 
                    : index === currentStep 
                    ? 'border-viking-gold bg-transparent animate-pulse' 
                    : 'border-viking-tan bg-transparent'
                }`}>
                  {index < currentStep && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <div className={`text-sm ${
                  index <= currentStep ? 'text-text-brown' : 'text-text-brown-light'
                }`}>
                  {step.text}
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="ornamental-divider mt-8"></div>
          
          {/* Mystical Quote */}
          <div className="text-center mt-6">
            <p className="text-sm text-text-brown-light italic font-cinzel">
              "룬은 단순한 문자가 아니라, 우주의 비밀을 담은 신성한 기호이다"
            </p>
            <p className="text-xs text-viking-tan mt-2">- 고대 노르드 전설</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}