import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RuneDetail } from "@/lib/runeDatabase";
import type { RuneKey } from "@/lib/runes";
import { 
  BookOpen, Star, Heart, Coins, Zap, Shield, MessageSquare, 
  Rocket, Flame, Gift, Smile, CloudRain, BookText, Snowflake,
  Wheat, Sprout, Eye, Sun, Sword, TreePine, Users, Droplets,
  Sparkles, Sunrise, Home
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Map rune names to icons
const runeIconMap: Record<RuneKey, any> = {
  fehu: Coins,
  uruz: Zap,
  thurisaz: Shield,
  ansuz: MessageSquare,
  raidho: Rocket,
  kaunan: Flame,
  gebo: Gift,
  wunjo: Smile,
  hagalaz: CloudRain,
  nauthiz: BookText,
  isaz: Snowflake,
  jera: Wheat,
  eihwaz: Sprout,
  perthro: Eye,
  algiz: Shield,
  sowilo: Sun,
  tiwaz: Sword,
  berkanan: TreePine,
  ehwaz: Users,
  mannaz: Users,
  laguz: Droplets,
  ingwaz: Sparkles,
  dagaz: Sunrise,
  othalan: Home,
};

interface RuneExplanationProps {
  runeDetails: RuneDetail[];
}

export default function RuneExplanation({ runeDetails }: RuneExplanationProps) {
  const { t } = useLanguage();
  if (runeDetails.length === 0) return null;

  return (
    <section className="mb-8 scroll-reveal relative" data-scroll-target="detailed-explanation">
      <Card className="ancient-border manuscript-page rounded-lg pulse-glow bg-parchment-dark">
        <CardContent className="p-8 relative">
          <div className="text-center mb-8">
            <h3 className="font-cinzel-decorative text-3xl font-bold text-viking-brown mb-3 floating-animation">
              ᛁᛁᛁ. {t('detailTitle')}
            </h3>
            <p className="text-text-brown-light italic max-w-2xl mx-auto">
              {t('detailSubtitle')}
            </p>
            <div className="ornamental-divider"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {runeDetails.map((rune, index) => (
              <div 
                key={index}
                data-rune-index={index}
                className="bg-gradient-to-br from-parchment to-parchment-darker rounded-xl p-6 ancient-border relative overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                {/* Background decoration */}
                <div className="absolute top-4 right-4 text-6xl rune-character opacity-10 group-hover:opacity-20 transition-opacity">
                  {rune.character}
                </div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex flex-col items-center gap-2">
                      <div className="text-6xl rune-character-large floating-animation">
                        {rune.character}
                      </div>
                      {runeIconMap[rune.key] && (
                        <div className="p-2 bg-viking-gold/10 rounded-full border border-viking-gold/20">
                          {(() => {
                            const IconComponent = runeIconMap[rune.key];
                            return <IconComponent className="w-5 h-5 text-viking-gold" />;
                          })()}
                        </div>
                      )}
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
                        <h5 className="font-bold text-viking-brown">{t('meaning')}</h5>
                      </div>
                      <p className="text-text-brown-light leading-relaxed">
                        {rune.meaning}
                      </p>
                    </div>
                    
                    {/* Symbolism */}
                    <div className="bg-parchment-darker rounded-lg p-4 border-l-4 border-viking-peru">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-5 h-5 text-viking-brown" />
                        <h5 className="font-bold text-viking-brown">{t('symbolism')}</h5>
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
                        <h5 className="font-bold text-viking-brown">{t('divination')}</h5>
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
                {t('runePowerTitle')}
              </h4>
              <p className="text-text-brown-light italic leading-relaxed">
                {t('runePowerDescPrefix')}{runeDetails.length}{t('runePowerDescSuffix')} {t('runePowerDescSecond')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
