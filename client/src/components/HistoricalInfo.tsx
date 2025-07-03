import { Card, CardContent } from "@/components/ui/card";

export default function HistoricalInfo() {
  return (
    <section className="mb-8">
      <Card className="ancient-border bg-parchment-dark rounded-lg glow-effect">
        <CardContent className="p-6">
          <h3 className="font-cinzel-decorative text-2xl font-bold text-viking-brown mb-6 text-center">
            ᚡ. 룬 문자의 역사
          </h3>
          
          <div className="space-y-6">
            <div className="bg-parchment rounded-lg p-4 border-l-4 border-viking-gold">
              <h4 className="font-bold text-xl text-viking-brown mb-2">룬 문자란?</h4>
              <p className="text-text-brown-light leading-relaxed">
                룬 문자(Runes)는 게르만족이 사용한 고대 문자 체계입니다. 
                'rune'이라는 단어는 '비밀' 또는 '속삭임'을 의미하는 고대 노르드어 'rún'에서 유래되었습니다.
                바이킹들은 이 문자를 돌, 나무, 금속에 새겨 기록과 의식에 사용했습니다.
              </p>
            </div>
            
            <div className="bg-parchment rounded-lg p-4 border-l-4 border-viking-gold">
              <h4 className="font-bold text-xl text-viking-brown mb-2">엘더 푸타르크 (Elder Futhark)</h4>
              <p className="text-text-brown-light leading-relaxed">
                가장 오래된 룬 문자 체계로, 24개의 문자로 구성되어 있습니다. 
                2세기부터 8세기까지 사용되었으며, 바이킹 시대의 주요 문자 체계였습니다.
                'Futhark'라는 이름은 처음 여섯 글자(ᚠᚢᚦᚨᚱᚲ)에서 따온 것입니다.
              </p>
            </div>
            
            <div className="bg-parchment rounded-lg p-4 border-l-4 border-viking-gold">
              <h4 className="font-bold text-xl text-viking-brown mb-2">룬 문자의 의미</h4>
              <p className="text-text-brown-light leading-relaxed">
                각 룬 문자는 단순한 글자가 아니라 깊은 의미와 상징을 담고 있습니다. 
                바이킹들은 이 문자들이 마법적 힘을 가지고 있다고 믿었으며, 
                점술이나 부적으로도 사용했습니다. 각 룬은 자연의 힘, 신들, 그리고 인간의 경험을 나타냅니다.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
