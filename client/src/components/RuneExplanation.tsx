import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RuneDetail } from "@/lib/runeDatabase";
import { BookOpen, Star, Heart } from "lucide-react";

interface RuneExplanationProps {
  runeDetails: RuneDetail[];
}

export default function RuneExplanation({ runeDetails }: RuneExplanationProps) {
  if (runeDetails.length === 0) return null;

  return (
    <section className="mb-8 scroll-reveal" data-scroll-target="detailed-explanation">
      <Card className="ancient-border manuscript-page rounded-lg pulse-glow">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <h3 className="font-cinzel-decorative text-3xl font-bold text-viking-brown mb-3 floating-animation">
              ᛁᛁᛁ. 룬 문자 상세 해석
            </h3>
            <p className="text-text-brown-light italic max-w-2xl mx-auto">
              당신의 이름을 구성하는 각 룬 문자의 신비로운 의미와 고대의 지혜를 알아보세요
            </p>
            <div className="ornamental-divider"></div>
          </div>
          
          <div className="space-y-8">
            {runeDetails.map((rune, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-parchment to-parchment-darker rounded-xl p-6 ancient-border relative overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                {/* Background decoration */}
                <div className="absolute top-4 right-4 text-6xl rune-character opacity-10 group-hover:opacity-20 transition-opacity">
                  {rune.character}
                </div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-6xl rune-character-large floating-animation">
                      {rune.character}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-cinzel-decorative text-2xl font-bold text-viking-brown">
                          {rune.name}
                        </h4>
                        <Badge variant="outline" className="border-viking-tan text-viking-brown">
                          {rune.phonetic}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {rune.keywords.map((keyword, keyIndex) => (
                          <Badge 
                            key={keyIndex} 
                            variant="secondary" 
                            className="bg-viking-gold/10 text-viking-brown border-viking-gold/20"
                          >
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Meaning */}
                    <div className="bg-parchment-darker rounded-lg p-4 border-l-4 border-viking-gold">
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen className="w-5 h-5 text-viking-brown" />
                        <h5 className="font-bold text-viking-brown">의미</h5>
                      </div>
                      <p className="text-text-brown-light leading-relaxed">
                        {rune.meaning}
                      </p>
                    </div>
                    
                    {/* Symbolism */}
                    <div className="bg-parchment-darker rounded-lg p-4 border-l-4 border-viking-peru">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-5 h-5 text-viking-brown" />
                        <h5 className="font-bold text-viking-brown">상징</h5>
                      </div>
                      <p className="text-text-brown-light leading-relaxed">
                        {rune.symbolism}
                      </p>
                    </div>
                  </div>
                  
                  {/* Divination */}
                  {rune.divination && (
                    <div className="mt-6 bg-viking-gold/5 rounded-lg p-4 border border-viking-gold/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="w-5 h-5 text-viking-gold" />
                        <h5 className="font-bold text-viking-brown">점술적 의미</h5>
                      </div>
                      <p className="text-text-brown-light italic">
                        {rune.divination}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary */}
          <div className="mt-8 text-center">
            <div className="ornamental-divider"></div>
            <div className="bg-viking-brown/5 rounded-lg p-6 border border-viking-brown/10">
              <h4 className="font-cinzel-decorative text-xl font-bold text-viking-brown mb-3">
                당신의 이름에 담긴 룬의 힘
              </h4>
              <p className="text-text-brown-light italic leading-relaxed">
                이 {runeDetails.length}개의 룬 문자들이 조합되어 당신의 이름에 고대 바이킹의 지혜와 힘을 부여합니다. 
                각 룬은 단순한 글자가 아니라, 우주의 신비로운 에너지를 담고 있는 신성한 기호입니다.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
