const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logoSvgPath = path.join(__dirname, '../public/images/logo.svg');
const logoPngPath = path.join(__dirname, '../public/images/logo.png');
const logoPath = fs.existsSync(logoPngPath) ? logoPngPath : logoSvgPath;
const publicDir = path.join(__dirname, '../public');
const appDir = path.join(__dirname, '../app');

// Ensure directories exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

async function generateFavicons() {
  try {
    // Check if logo exists
    if (!fs.existsSync(logoPath)) {
      console.error('Logo not found. Add public/images/logo.svg or public/images/logo.png');
      process.exit(1);
    }

    console.log('Generating favicons from logo...');

    // Generate favicon.ico (16x16, 32x32, 48x48 sizes combined)
    const faviconSizes = [16, 32, 48];
    const faviconImages = await Promise.all(
      faviconSizes.map(size =>
        sharp(logoPath)
          .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
          .png()
          .toBuffer()
      )
    );

    // Generate 16x16 favicon.ico (most common)
    await sharp(logoPath)
      .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));

    // Generate 32x32 favicon
    await sharp(logoPath)
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));

    // Generate apple-touch-icon (180x180)
    await sharp(logoPath)
      .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));

    // Generate icon for Next.js app directory (icon.png - 512x512 recommended)
    await sharp(logoPath)
      .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .png()
      .toFile(path.join(appDir, 'icon.png'));

    console.log('✅ Favicons generated successfully!');
    console.log('Generated files:');
    console.log('  - public/favicon-16x16.png');
    console.log('  - public/favicon-32x32.png');
    console.log('  - public/apple-touch-icon.png');
    console.log('  - app/icon.png');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();

