// Canvas-based image generation for rune conversion results

interface RuneImageOptions {
  width?: number;
  height?: number;
  backgroundColor?: string;
  textColor?: string;
  runeColor?: string;
  fontFamily?: string;
  runeFontFamily?: string;
  labels?: {
    title?: string;
    description?: string;
    footer?: string;
    cardTitle?: string;
  };
}

export async function generateRuneImage(
  runeText: string,
  englishName: string,
  options: RuneImageOptions = {}
): Promise<string> {
  const {
    width = 800,
    height = 600,
    backgroundColor = '#FAF0E6',
    textColor = '#8B4513',
    runeColor = '#8B4513',
    fontFamily = 'Cinzel, serif',
    runeFontFamily = 'Noto Sans Runic, monospace',
    labels = {},
  } = options;

  const titleText = labels.title ?? 'Viking Rune Conversion';
  const descriptionText = labels.description ?? 'Ancient Elder Futhark Runes';
  const footerText = labels.footer ?? 'Rune Converter';

  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas context not available');
  }

  // Draw parchment background
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);

  // Add parchment texture
  ctx.save();
  ctx.globalAlpha = 0.1;
  for (let i = 0; i < 20; i++) {
    ctx.fillStyle = `rgba(120, 119, 109, ${Math.random() * 0.3})`;
    ctx.fillRect(
      Math.random() * width,
      Math.random() * height,
      Math.random() * 50 + 10,
      Math.random() * 50 + 10
    );
  }
  ctx.restore();

  // Draw border
  ctx.strokeStyle = runeColor;
  ctx.lineWidth = 8;
  ctx.strokeRect(20, 20, width - 40, height - 40);

  // Inner border
  ctx.strokeStyle = '#CD853F';
  ctx.lineWidth = 2;
  ctx.strokeRect(35, 35, width - 70, height - 70);

  // Draw title
  ctx.fillStyle = textColor;
  ctx.font = `bold 32px ${fontFamily}`;
  ctx.textAlign = 'center';
  ctx.fillText(titleText, width / 2, 100);

  // Draw English name
  ctx.font = `bold 24px ${fontFamily}`;
  ctx.fillText(englishName.toUpperCase(), width / 2, 150);

  // Draw rune characters
  ctx.fillStyle = runeColor;
  ctx.font = `120px ${runeFontFamily}`;
  ctx.textAlign = 'center';
  
  // Add text shadow for runes
  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 2;
  ctx.shadowOffsetY = 2;
  
  ctx.fillText(runeText, width / 2, 320);

  // Reset shadow
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // Draw description
  ctx.fillStyle = textColor;
  ctx.font = `18px ${fontFamily}`;
  ctx.textAlign = 'center';
  ctx.fillText(descriptionText, width / 2, 420);

  // Draw decorative elements
  drawDecorative(ctx, width, height, runeColor);

  // Draw footer
  ctx.font = `14px ${fontFamily}`;
  ctx.fillStyle = '#CD853F';
  ctx.fillText(footerText, width / 2, height - 40);

  return canvas.toDataURL('image/png');
}

function drawDecorative(ctx: CanvasRenderingContext2D, width: number, height: number, color: string) {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  
  // Top decorative line
  ctx.beginPath();
  ctx.moveTo(width / 2 - 100, 180);
  ctx.lineTo(width / 2 + 100, 180);
  ctx.stroke();
  
  // Bottom decorative line
  ctx.beginPath();
  ctx.moveTo(width / 2 - 100, 460);
  ctx.lineTo(width / 2 + 100, 460);
  ctx.stroke();
  
  // Corner decorations
  const cornerSize = 20;
  
  // Top-left corner
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.lineTo(50 + cornerSize, 50);
  ctx.moveTo(50, 50);
  ctx.lineTo(50, 50 + cornerSize);
  ctx.stroke();
  
  // Top-right corner
  ctx.beginPath();
  ctx.moveTo(width - 50, 50);
  ctx.lineTo(width - 50 - cornerSize, 50);
  ctx.moveTo(width - 50, 50);
  ctx.lineTo(width - 50, 50 + cornerSize);
  ctx.stroke();
  
  // Bottom-left corner
  ctx.beginPath();
  ctx.moveTo(50, height - 50);
  ctx.lineTo(50 + cornerSize, height - 50);
  ctx.moveTo(50, height - 50);
  ctx.lineTo(50, height - 50 - cornerSize);
  ctx.stroke();
  
  // Bottom-right corner
  ctx.beginPath();
  ctx.moveTo(width - 50, height - 50);
  ctx.lineTo(width - 50 - cornerSize, height - 50);
  ctx.moveTo(width - 50, height - 50);
  ctx.lineTo(width - 50, height - 50 - cornerSize);
  ctx.stroke();
}

export async function generateRuneCard(
  runeText: string,
  englishName: string,
  runeDetails: any[],
  labels: { cardTitle?: string } = {}
): Promise<string> {
  const canvas = document.createElement('canvas');
  canvas.width = 400;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas context not available');
  }

  // Mobile-optimized card design
  ctx.fillStyle = '#FAF0E6';
  ctx.fillRect(0, 0, 400, 600);

  // Border
  ctx.strokeStyle = '#8B4513';
  ctx.lineWidth = 4;
  ctx.strokeRect(10, 10, 380, 580);

  // Title
  ctx.fillStyle = '#8B4513';
  ctx.font = 'bold 24px Cinzel, serif';
  ctx.textAlign = 'center';
  ctx.fillText(labels.cardTitle ?? 'Rune Conversion', 200, 50);

  // English name
  ctx.font = 'bold 20px Cinzel, serif';
  ctx.fillText(englishName.toUpperCase(), 200, 80);

  // Rune text
  ctx.font = '80px Noto Sans Runic, monospace';
  ctx.fillText(runeText, 200, 180);

  // Individual rune meanings (simplified for mobile)
  ctx.font = '14px Cinzel, serif';
  ctx.textAlign = 'left';
  let y = 220;
  
  for (const detail of runeDetails.slice(0, 3)) { // Limit to 3 for mobile
    ctx.fillText(`${detail.character} - ${detail.name}`, 30, y);
    y += 30;
  }

  return canvas.toDataURL('image/png');
}
