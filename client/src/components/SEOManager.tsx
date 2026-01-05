import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSeoData, getSeoLocale } from '@shared/seo';

export default function SEOManager() {
  const { language } = useLanguage();
  const seo = getSeoData(language);
  const ogLocale = getSeoLocale(language);

  const seoLang = (language || '').toLowerCase().split('-')[0] === 'ko' ? 'ko' : 'en';
  const siteOrigin =
    typeof window !== 'undefined' && window.location?.origin
      ? window.location.origin
      : 'https://viking-rune-converter.netlify.app';

  const canonicalUrl = seoLang === 'ko' ? `${siteOrigin}/` : `${siteOrigin}/?lang=en`;
  const ogImageUrl = `${siteOrigin}/og-image.jpg`;

  return (
    <Helmet>
      <html lang={language} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.desc} />
      <meta name="keywords" content={seo.keywords} />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="ko" href={`${siteOrigin}/`} />
      <link rel="alternate" hrefLang="en" href={`${siteOrigin}/?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={`${siteOrigin}/?lang=en`} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:title" content={seo.ogTitle} />
      <meta property="og:description" content={seo.ogDesc} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:locale" content={ogLocale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={seo.ogTitle} />
      <meta name="twitter:description" content={seo.ogDesc} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
}
