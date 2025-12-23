import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { elderFutharkRunes } from "@/lib/runeDatabase";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RuneReference() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <section className="mb-12 md:mb-16 relative">
      <Card className="toss-card bg-parchment-dark rounded-2xl md:rounded-3xl border-none">
        <CardContent className="p-6 md:p-8">
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h3 className="font-cinzel-decorative text-xl md:text-2xl font-bold text-viking-brown">
              엘더 푸타르크 룬 문자표
            </h3>
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              variant="ghost"
              size="sm"
              className="text-viking-gold hover:text-viking-gold-light hover:bg-parchment-darker transition-all"
            >
              {isExpanded ? (
                <>
                  <span className="mr-2 text-sm">접기</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span className="mr-2 text-sm">24개 룬 문자 보기</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
          
          {/* 미리보기 (처음 6개만) */}
          {!isExpanded && (
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
              {elderFutharkRunes.slice(0, 6).map((rune, index) => (
                <div
                  key={index}
                  className="bg-parchment/80 rounded-xl p-3 md:p-4 text-center border-2 border-transparent hover:border-viking-gold transition-all cursor-pointer shadow-sm hover:shadow-md"
                  title={`${rune.name} - ${rune.meaning}`}
                >
                  <div className="text-2xl md:text-3xl rune-character mb-1 md:mb-2">{rune.character}</div>
                  <div className="text-xs md:text-sm font-semibold text-viking-brown">{rune.name}</div>
                  <div className="text-xs text-text-brown-light hidden md:block">{rune.phonetic}</div>
                </div>
              ))}
            </div>
          )}
          
          {/* 전체 보기 */}
          {isExpanded && (
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4 animate-in fade-in slide-in-from-top-2 duration-300">
              {elderFutharkRunes.map((rune, index) => (
                <div
                  key={index}
                  className="bg-parchment/80 rounded-xl p-3 md:p-4 text-center border-2 border-transparent hover:border-viking-gold transition-all cursor-pointer shadow-sm hover:shadow-md"
                  title={`${rune.name} - ${rune.meaning}`}
                >
                  <div className="text-2xl md:text-3xl rune-character mb-1 md:mb-2">{rune.character}</div>
                  <div className="text-xs md:text-sm font-semibold text-viking-brown">{rune.name}</div>
                  <div className="text-xs text-text-brown-light hidden md:block">{rune.phonetic}</div>
                </div>
              ))}
            </div>
          )}
          
          <p className="text-xs md:text-sm text-text-brown-light text-center mt-4 md:mt-6">
            각 룬 문자를 터치하면 상세한 의미를 확인할 수 있습니다
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
