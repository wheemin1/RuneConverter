import { getSeoData, getSeoLocale } from './seo.js';

export const handler = async (event) => {
  const params = event.queryStringParameters || {};

  // Back-compat: older links used `shared` instead of `name`
  const name = params.name || params.shared || '';
  const rune = params.rune || '';
  const lang = params.lang || 'en';

  const seo = getSeoData(lang);
  const ogLocale = getSeoLocale(lang);

  const host = event.headers?.host;
  const protocol = event.headers?.['x-forwarded-proto'] || 'https';
  const baseUrl = host ? `${protocol}://${host}` : '';

  const ogImageUrl = baseUrl ? `${baseUrl}/og-image.jpg` : '/og-image.jpg';

  const title = name ? `${name} • ${seo.ogTitle}` : seo.ogTitle;
  const description = seo.ogDesc;

  const redirectParams = new URLSearchParams();
  redirectParams.set('lang', lang);
  if (name) redirectParams.set('shared', name);
  if (rune) redirectParams.set('rune', rune);
  const redirectUrl = baseUrl ? `${baseUrl}/?${redirectParams.toString()}` : `/?${redirectParams.toString()}`;

  const html = `<!DOCTYPE html>
<html lang="${String(lang).replace(/"/g, '')}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="keywords" content="${escapeHtml(seo.keywords)}" />

    <meta property="og:type" content="website" />
    <meta property="og:url" content="${escapeHtml(redirectUrl)}" />
    <meta property="og:site_name" content="${escapeHtml(seo.siteName)}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${escapeHtml(ogImageUrl)}" />
    <meta property="og:locale" content="${escapeHtml(ogLocale)}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(ogImageUrl)}" />

    <script>window.location.replace(${JSON.stringify(redirectUrl)});</script>
  </head>
  <body>
    <p>Redirecting... <a href="${escapeHtml(redirectUrl)}">Click here</a></p>
  </body>
</html>`;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
    body: html,
  };
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
