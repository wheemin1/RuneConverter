import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HistoricalInfo() {
  const { t } = useLanguage();
  return (
    <section className="mb-12 md:mb-16">
      <Card className="toss-card bg-parchment-dark rounded-2xl md:rounded-3xl border-none">
        <CardContent className="p-6 md:p-8">
          <h3 className="font-cinzel-decorative text-xl md:text-2xl font-bold text-viking-brown mb-6 md:mb-8 text-center">
            {t('historyTitle')}
          </h3>
          
          <div className="space-y-6 md:space-y-8">
            <div className="bg-gradient-to-r from-parchment/50 to-transparent rounded-2xl p-5 md:p-6 border-l-4 border-viking-gold">
              <h4 className="font-bold text-lg md:text-xl text-viking-brown mb-3">{t('historyWhatTitle')}</h4>
              <p className="text-sm md:text-base text-text-brown-light leading-relaxed md:leading-loose">
                {t('historyWhatBody')}
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-parchment/50 to-transparent rounded-2xl p-5 md:p-6 border-l-4 border-viking-gold">
              <h4 className="font-bold text-lg md:text-xl text-viking-brown mb-3">{t('historyElderTitle')}</h4>
              <p className="text-sm md:text-base text-text-brown-light leading-relaxed md:leading-loose">
                {t('historyElderBody')}
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-parchment/50 to-transparent rounded-2xl p-5 md:p-6 border-l-4 border-viking-gold">
              <h4 className="font-bold text-lg md:text-xl text-viking-brown mb-3">{t('historyMeaningTitle')}</h4>
              <p className="text-sm md:text-base text-text-brown-light leading-relaxed md:leading-loose">
                {t('historyMeaningBody')}
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-parchment/50 to-transparent rounded-2xl p-5 md:p-6 border-l-4 border-viking-gold">
              <h4 className="font-bold text-lg md:text-xl text-viking-brown mb-3">{t('historySeparatorTitle')}</h4>
              <p className="text-sm md:text-base text-text-brown-light leading-relaxed md:leading-loose">
                {t('historySeparatorBody')}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
