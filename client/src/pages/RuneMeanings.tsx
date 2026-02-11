import { useLanguage } from '@/contexts/LanguageContext';
import { elderFutharkRunesBase } from '@/lib/runes';
import { getRuneLocalization } from '@/lib/runeLocalization';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Helmet } from 'react-helmet-async';
import { getSeoData, getSeoLang } from '@shared/seo';
import LanguageSelector from '@/components/LanguageSelector';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RuneMeanings() {
  const { t, language } = useLanguage();
  const seo = getSeoData(language);
  const seoLang = getSeoLang(language);

  const siteOrigin =
    typeof window !== 'undefined' && window.location?.origin
      ? window.location.origin
      : 'https://viking-rune-converter.netlify.app';

  const canonicalUrl = `${siteOrigin}/rune-meanings?lang=${seoLang}`;

  return (
    <>
      <Helmet>
        <title>{t('runeMeaningsTitle')} | {seo.siteName}</title>
        <meta name="description" content={t('runeMeaningsSubtitle')} />
        <meta name="keywords" content={`${seo.keywords}, rune meanings, elder futhark meanings, viking rune symbols`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${t('runeMeaningsTitle')} | ${seo.siteName}`} />
        <meta property="og:description" content={t('runeMeaningsSubtitle')} />
        <meta property="og:url" content={canonicalUrl} />
      </Helmet>

      <div className="min-h-screen relative">
        <div className="vignette-overlay" />

        <div className="parchment-bg min-h-screen font-cinzel relative z-10">
          <header className="absolute top-0 left-0 right-0 z-20 pointer-events-none safe-top">
            <div className="absolute top-4 left-4 md:left-6 pointer-events-auto">
              <Link href={language === 'ko' ? '/' : `/?lang=${language}`}>
                <Button variant="ghost" size="sm" className="text-amber-900 hover:text-amber-700">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {language === 'ko' ? '홈으로' : 'Home'}
                </Button>
              </Link>
            </div>
            <div className="absolute top-4 right-4 md:right-6 pointer-events-auto">
              <LanguageSelector />
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-28 pb-12 md:pb-16">
            {/* Page Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-viking-brown mb-4">
                {t('runeMeaningsTitle')}
              </h1>
              <p className="text-lg md:text-xl text-text-brown-light max-w-3xl mx-auto mb-4">
                {t('runeMeaningsSubtitle')}
              </p>
              <p className="text-base text-text-brown-light/80 max-w-2xl mx-auto">
                {t('runeMeaningsDescription')}
              </p>
            </div>

            {/* Rune Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {elderFutharkRunesBase.map((rune) => {
                const localized = getRuneLocalization(language, rune.key);
                
                return (
                  <Card
                    key={rune.id}
                    className="bg-gradient-to-br from-amber-50/90 to-stone-50/90 border-amber-200/50 shadow-md hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="text-5xl rune-character text-amber-900">
                          {rune.character}
                        </div>
                        <Badge variant="secondary" className="bg-amber-100 text-amber-900 font-normal">
                          #{rune.id}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl font-bold text-amber-900 mt-3">
                        {localized.name}
                      </CardTitle>
                      <p className="text-sm text-stone-600 mt-1">
                        <span className="font-semibold">{t('phonetic')}:</span> {rune.phonetic}
                      </p>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Meaning */}
                      <div>
                        <h3 className="font-semibold text-amber-900 mb-2">{t('meaning')}</h3>
                        <p className="text-stone-700 text-sm leading-relaxed">
                          {localized.meaning}
                        </p>
                      </div>

                      {/* Symbolism */}
                      <div>
                        <h3 className="font-semibold text-amber-900 mb-2">{t('symbolism')}</h3>
                        <p className="text-stone-700 text-sm leading-relaxed">
                          {localized.symbolism}
                        </p>
                      </div>

                      {/* Keywords */}
                      <div>
                        <h3 className="font-semibold text-amber-900 mb-2">{t('keywords')}</h3>
                        <div className="flex flex-wrap gap-2">
                          {localized.keywords.map((keyword, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="bg-amber-50 border-amber-300 text-amber-800"
                            >
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Divination */}
                      <div>
                        <h3 className="font-semibold text-amber-900 mb-2">{t('divination')}</h3>
                        <p className="text-stone-700 text-sm leading-relaxed">
                          {localized.divination}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <Card className="inline-block bg-gradient-to-r from-amber-100/80 to-stone-100/80 border-amber-300/50 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">
                    {language === 'ko' ? '당신의 이름을 룬 문자로 변환해보세요' : 'Convert Your Name to Runes'}
                  </h2>
                  <p className="text-stone-700 mb-6 max-w-2xl">
                    {language === 'ko'
                      ? '각 룬의 의미를 배웠으니 이제 당신의 이름에 어떤 룬이 포함되는지 확인해보세요.'
                      : 'Now that you know the meanings, discover which runes appear in your name.'}
                  </p>
                  <Link href={language === 'ko' ? '/' : `/?lang=${language}`}>
                    <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white font-semibold">
                      {language === 'ko' ? '무료로 변환하기' : 'Convert for Free'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
