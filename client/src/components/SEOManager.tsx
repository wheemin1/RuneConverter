import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSeoData, getSeoLocale } from '@shared/seo';

export default function SEOManager() {
  const { language } = useLanguage();
  const seo = getSeoData(language);
  const ogLocale = getSeoLocale(language);

  return (
    <Helmet>
      <html lang={language} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.desc} />
      <meta name="keywords" content={seo.keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDesc} />
      <meta property="og:locale" content={ogLocale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.ogTitle} />
      <meta name="twitter:description" content={seo.ogDesc} />
    </Helmet>
  );
}
