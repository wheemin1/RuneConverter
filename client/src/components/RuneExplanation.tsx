import { Card, CardContent } from "@/components/ui/card";
import { RuneDetail } from "@/lib/runeDatabase";

interface RuneExplanationProps {
  runeDetails: RuneDetail[];
}

export default function RuneExplanation({ runeDetails }: RuneExplanationProps) {
  if (runeDetails.length === 0) return null;

  return (
    <section className="mb-8">
      <Card className="ancient-border bg-parchment-dark rounded-lg glow-effect">
        <CardContent className="p-6">
          <h3 className="font-cinzel-decorative text-2xl font-bold text-viking-brown mb-6 text-center">
            ᛁᛁᛁ. 룬 문자 상세 설명
          </h3>
          
          <div className="space-y-6">
            {runeDetails.map((rune, index) => (
              <div key={index} className="bg-parchment rounded-lg p-4 border-2 border-viking-tan">
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-4xl rune-character">{rune.character}</div>
                  <div>
                    <h4 className="font-bold text-xl text-viking-brown">{rune.name}</h4>
                    <p className="text-text-brown-light">음성: {rune.phonetic}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-viking-brown mb-2">의미</h5>
                    <p className="text-text-brown-light">{rune.meaning}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-viking-brown mb-2">상징</h5>
                    <p className="text-text-brown-light">{rune.symbolism}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
