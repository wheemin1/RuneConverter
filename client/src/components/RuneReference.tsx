import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { elderFutharkRunesBase } from "@/lib/runes";
import type { RuneKey } from "@/lib/runes";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { getRuneLocalization } from "@/lib/runeLocalization";

export default function RuneReference() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedRuneKey, setSelectedRuneKey] = useState<RuneKey | null>(null);
  const { t, language } = useLanguage();

  const selectedRune = useMemo(() => {
    if (!selectedRuneKey) return undefined;
    const base = elderFutharkRunesBase.find((r) => r.key === selectedRuneKey);
    if (!base) return undefined;
    const loc = getRuneLocalization(language, base.key);
    return {
      ...base,
      ...loc,
    };
  }, [language, selectedRuneKey]);
  
  return (
    <section className="mb-12 md:mb-16 relative">
      <Card className="toss-card bg-parchment-dark rounded-2xl md:rounded-3xl border-none">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="font-cinzel-decorative text-xl md:text-2xl font-bold text-viking-brown">
              {t('runeTableTitle')}
            </h3>
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="ghost"
              size="sm"
              className="text-viking-gold hover:text-viking-gold-light hover:bg-parchment-darker transition-all"
            >
              {isExpanded ? (
                <>
                  <span className="mr-2 text-sm">{t('runeTableCollapse')}</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span className="mr-2 text-sm">{t('runeTableExpand')}</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
          
          {/* 미리보기 (처음 6개만) */}
          {!isExpanded && (
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
              {elderFutharkRunesBase.slice(0, 6).map((rune, index) => {
                const loc = getRuneLocalization(language, rune.key);
                const isSelected = selectedRuneKey === rune.key;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedRuneKey((prev) => (prev === rune.key ? null : rune.key))}
                    className={`bg-parchment/80 rounded-xl p-3 md:p-4 text-center border-2 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-viking-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment ${
                      isSelected
                        ? "border-viking-gold"
                        : "border-transparent hover:border-viking-gold"
                    }`}
                    aria-pressed={isSelected}
                    aria-label={`${loc.name} (${rune.character})`}
                    title={`${loc.name} - ${loc.meaning}`}
                  >
                    <div className="text-2xl md:text-3xl rune-character mb-1 md:mb-2">{rune.character}</div>
                    <div className="text-xs md:text-sm font-semibold text-viking-brown">{loc.name}</div>
                    <div className="text-xs text-text-brown-light hidden md:block">{rune.phonetic}</div>
                  </button>
                );
              })}
            </div>
          )}
          
          {/* 전체 보기 */}
          {isExpanded && (
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
              {elderFutharkRunesBase.map((rune, index) => {
                const loc = getRuneLocalization(language, rune.key);
                const isSelected = selectedRuneKey === rune.key;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedRuneKey((prev) => (prev === rune.key ? null : rune.key))}
                    className={`bg-parchment/80 rounded-xl p-3 md:p-4 text-center border-2 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-viking-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment ${
                      isSelected
                        ? "border-viking-gold"
                        : "border-transparent hover:border-viking-gold"
                    }`}
                    aria-pressed={isSelected}
                    aria-label={`${loc.name} (${rune.character})`}
                    title={`${loc.name} - ${loc.meaning}`}
                  >
                    <div className="text-2xl md:text-3xl rune-character mb-1 md:mb-2">{rune.character}</div>
                    <div className="text-xs md:text-sm font-semibold text-viking-brown">{loc.name}</div>
                    <div className="text-xs text-text-brown-light hidden md:block">{rune.phonetic}</div>
                  </button>
                );
              })}
            </div>
          )}

          {selectedRune && (
            <div className="mt-6 md:mt-8 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="bg-gradient-to-br from-parchment to-parchment-darker rounded-2xl p-5 md:p-6 border border-viking-tan/30 shadow-sm">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-5xl md:text-6xl rune-character-large leading-none">
                      {selectedRune.character}
                    </div>
                    <Badge variant="outline" className="border-viking-tan text-viking-brown">
                      {selectedRune.phonetic}
                    </Badge>
                  </div>

                  <div className="flex-1">
                    <h4 className="font-cinzel-decorative text-xl md:text-2xl font-bold text-viking-brown">
                      {selectedRune.name}
                    </h4>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedRune.keywords.map((keyword) => (
                        <Badge
                          key={keyword}
                          variant="secondary"
                          className="bg-viking-gold/10 text-viking-brown border border-viking-gold/20"
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-parchment-darker/70 rounded-xl p-4 border-l-4 border-viking-gold">
                        <h5 className="font-bold text-viking-brown mb-2">{t('meaning')}</h5>
                        <p className="text-sm md:text-base text-text-brown-light leading-relaxed">
                          {selectedRune.meaning}
                        </p>
                      </div>

                      <div className="bg-parchment-darker/70 rounded-xl p-4 border-l-4 border-viking-peru">
                        <h5 className="font-bold text-viking-brown mb-2">{t('symbolism')}</h5>
                        <p className="text-sm md:text-base text-text-brown-light leading-relaxed">
                          {selectedRune.symbolism}
                        </p>
                      </div>
                    </div>

                    {selectedRune.divination && (
                      <div className="mt-4 bg-viking-gold/5 rounded-xl p-4 border border-viking-gold/20">
                        <h5 className="font-bold text-viking-brown mb-2">{t('divination')}</h5>
                        <p className="text-sm md:text-base text-text-brown-light italic leading-relaxed">
                          {selectedRune.divination}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <p className="text-xs md:text-sm text-text-brown-light text-center mt-4 md:mt-6">
            {t('runeTableHint')}
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
