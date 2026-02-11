import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { getSeoData, getSeoLang, getSeoLocale } from '@shared/seo';

export default function SEOManager() {
  const { language } = useLanguage();
  const seo = getSeoData(language);
  const ogLocale = getSeoLocale(language);

  const seoLang = getSeoLang(language);
  const siteOrigin =
    typeof window !== 'undefined' && window.location?.origin
      ? window.location.origin
      : 'https://viking-rune-converter.netlify.app';

  const canonicalUrl = seoLang === 'ko' ? `${siteOrigin}/` : `${siteOrigin}/?lang=${seoLang}`;
  const ogImageUrl = `${siteOrigin}/og-image.jpg`;

  return (
    <Helmet key={seoLang}>
      <html lang={language} />
      <title>{seo.title}</title>
      <meta name="description" content={seo.desc} />
      <meta name="keywords" content={seo.keywords} />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="ko" href={`${siteOrigin}/`} />
      <link rel="alternate" hrefLang="en" href={`${siteOrigin}/?lang=en`} />
      <link rel="alternate" hrefLang="ja" href={`${siteOrigin}/?lang=ja`} />
      <link rel="alternate" hrefLang="zh-Hans" href={`${siteOrigin}/?lang=zh`} />
      <link rel="alternate" hrefLang="zh-CN" href={`${siteOrigin}/?lang=zh`} />
      <link rel="alternate" hrefLang="zh-Hant" href={`${siteOrigin}/?lang=zh-TW`} />
      <link rel="alternate" hrefLang="zh-TW" href={`${siteOrigin}/?lang=zh-TW`} />
      <link rel="alternate" hrefLang="zh-HK" href={`${siteOrigin}/?lang=zh-TW`} />
      <link rel="alternate" hrefLang="es" href={`${siteOrigin}/?lang=es`} />
      <link rel="alternate" hrefLang="fr" href={`${siteOrigin}/?lang=fr`} />
      <link rel="alternate" hrefLang="de" href={`${siteOrigin}/?lang=de`} />
      <link rel="alternate" hrefLang="pt-BR" href={`${siteOrigin}/?lang=pt-BR`} />
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
