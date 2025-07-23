// netlify/functions/og.js
exports.handler = async function(event, context) {
  const { name = '', rune = '' } = event.queryStringParameters;

  // Create a simple HTML response that redirects to a default image
  // Since implementing a full image generation service would require additional dependencies
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta property="og:title" content="${name || '바이킹 룬 문자 변환기'} - 룬 변환 결과">
        <meta property="og:description" content="고대 바이킹 엘더 푸타르크 룬 문자로 변환된 이름입니다. 버그 제보: jowheemin@gmail.com">
        <meta property="og:image" content="${process.env.URL || 'https://rune.vikingconverter.com'}/og-image.jpg">
        <meta http-equiv="refresh" content="0;url=${process.env.URL || 'https://rune.vikingconverter.com'}?name=${encodeURIComponent(name)}">
      </head>
      <body>
        Redirecting...
      </body>
    </html>
  `;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=300'
    },
    body: html
  };
};
