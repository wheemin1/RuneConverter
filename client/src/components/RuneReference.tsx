import { Card, CardContent } from "@/components/ui/card";
import { elderFutharkRunes } from "@/lib/runeDatabase";

export default function RuneReference() {
  return (
    <section className="mb-8 relative">
      <Card className="ancient-border bg-parchment-dark rounded-lg glow-effect">
        <CardContent className="p-6">
          <h3 className="font-cinzel-decorative text-2xl font-bold text-viking-brown mb-6 text-center">
            ᛁᚡ. 엘더 푸타르크 룬 문자표
          </h3>
          
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {elderFutharkRunes.map((rune, index) => (
              <div
                key={index}
                className="bg-parchment rounded-lg p-3 text-center border-2 border-viking-tan hover:border-viking-gold transition-colors cursor-pointer"
                title={`${rune.name} - ${rune.meaning}`}
              >
                <div className="text-3xl rune-character mb-2">{rune.character}</div>
                <div className="text-sm font-semibold text-viking-brown">{rune.name}</div>
                <div className="text-xs text-text-brown-light">{rune.phonetic}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
