import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

interface NameInputProps {
  koreanName: string;
  englishName: string;
  onKoreanNameChange: (name: string) => void;
  onEnglishNameChange: (name: string) => void;
  onConvert: () => void;
}

export default function NameInput({
  koreanName,
  englishName,
  onKoreanNameChange,
  onEnglishNameChange,
  onConvert
}: NameInputProps) {
  return (
    <section className="mb-8">
      <Card className="ancient-border bg-parchment-dark rounded-lg glow-effect">
        <CardContent className="p-6">
          <h3 className="font-cinzel-decorative text-2xl font-bold text-viking-brown mb-4 text-center">
            ᛁ. 이름 입력
          </h3>
          
          <div className="mb-6">
            <Label htmlFor="korean-name" className="block text-text-brown font-semibold mb-2">
              한국어 이름
            </Label>
            <Input
              id="korean-name"
              type="text"
              className="input-parchment rounded-lg font-cinzel text-lg"
              placeholder="예: 조휘민"
              value={koreanName}
              onChange={(e) => onKoreanNameChange(e.target.value)}
            />
          </div>
          
          <div className="mb-6">
            <Label htmlFor="english-name" className="block text-text-brown font-semibold mb-2">
              영문 이름 (수정 가능)
            </Label>
            <Input
              id="english-name"
              type="text"
              className="input-parchment rounded-lg font-cinzel text-lg"
              placeholder="예: jowheemin"
              value={englishName}
              onChange={(e) => onEnglishNameChange(e.target.value)}
            />
            <p className="text-sm text-text-brown-light mt-2">
              * 자동 변환된 영문 이름을 원하는 대로 수정할 수 있습니다
            </p>
          </div>
          
          <Button
            onClick={onConvert}
            disabled={!englishName.trim()}
            className="w-full bg-viking-gold hover:bg-viking-brown text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 font-cinzel text-lg"
          >
            룬 문자로 변환하기
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
