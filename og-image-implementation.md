# Creating a Dynamic OG Image API Endpoint

This document outlines the implementation of a dynamic Open Graph (OG) image generation API for the Viking Rune Converter application.

## Purpose
To provide dynamically generated social media preview images when users share their rune conversion results.

## Implementation Steps

1. Create a Netlify Function that generates a simple image with:
   - The user's name
   - The converted rune text
   - Viking theme styling

2. The function will receive query parameters:
   - `name`: The user's name (Korean or English)
   - `rune`: The converted rune text

3. Use a simple HTML/CSS template to render the image

4. Return the image with appropriate headers for caching and content type

## Code Implementation

Create a new file at `netlify/functions/og.js`:

```javascript
// netlify/functions/og.js
const chromium = require('@sparticuz/chromium');
const puppeteer = require('puppeteer-core');

exports.handler = async function(event, context) {
  const { name = '', rune = '' } = event.queryStringParameters;

  // Simple HTML template for the OG image
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body {
            margin: 0;
            padding: 0;
            width: 1200px;
            height: 630px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #FAF0E6;
            font-family: system-ui, sans-serif;
            color: #8B4513;
            position: relative;
            overflow: hidden;
          }
          .border {
            position: absolute;
            top: 20px;
            left: 20px;
            right: 20px;
            bottom: 20px;
            border: 8px solid #8B4513;
          }
          .inner-border {
            position: absolute;
            top: 35px;
            left: 35px;
            right: 35px;
            bottom: 35px;
            border: 2px solid #CD853F;
          }
          .title {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 30px;
            text-align: center;
          }
          .name {
            font-size: 36px;
            margin-bottom: 40px;
            text-align: center;
          }
          .rune {
            font-size: 120px;
            font-weight: bold;
            margin-bottom: 50px;
            text-align: center;
            letter-spacing: 10px;
          }
          .subtitle {
            font-size: 24px;
            text-align: center;
            margin-bottom: 20px;
          }
          .footer {
            position: absolute;
            bottom: 60px;
            font-size: 18px;
            opacity: 0.7;
          }
        </style>
      </head>
      <body>
        <div class="border"></div>
        <div class="inner-border"></div>
        <div class="title">바이킹 룬 문자 변환기</div>
        <div class="name">${name}</div>
        <div class="rune">${rune}</div>
        <div class="subtitle">고대 바이킹 엘더 푸타르크 룬 문자</div>
        <div class="footer">rune.vikingconverter.com</div>
      </body>
    </html>
  `;

  try {
    // Setup browser
    const browser = await puppeteer.launch({
      args: chromium.args,
      defaultViewport: {
        width: 1200,
        height: 630
      },
      executablePath: await chromium.executablePath(),
      headless: true,
    });

    // Create a new page
    const page = await browser.newPage();
    
    // Set content and wait until network is idle
    await page.setContent(html, { waitUntil: 'networkidle0' });
    
    // Take a screenshot
    const screenshot = await page.screenshot({ 
      type: 'png',
      encoding: 'base64'
    });
    
    // Close browser
    await browser.close();
    
    // Return the image with appropriate headers
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, s-maxage=31536000'
      },
      body: screenshot,
      isBase64Encoded: true
    };
  } catch (error) {
    console.error('Error generating OG image:', error);
    
    // Return a fallback image or error
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to generate image' }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
};
```

## Notes
- This implementation requires adding `@sparticuz/chromium` and `puppeteer-core` to the project dependencies
- For production, consider optimizing the image generation or using a dedicated image generation service
- The function uses Puppeteer to generate the image, which requires additional setup in Netlify
- A simpler implementation could return HTML/CSS instead of an image for services that support it

## Installation Requirements

Add these dependencies:

```
npm install @sparticuz/chromium puppeteer-core
```

## Using the OG Image in the App

Update the `client/index.html` to include a dynamic meta tag:

```html
<!-- In the head section -->
<meta property="og:image" content="%PUBLIC_URL%/og-image.jpg" data-dynamic-og-image="true" />
```

Then in the `ShareModal.tsx`, update the sharing functionality to set the proper OG image URL before sharing.
