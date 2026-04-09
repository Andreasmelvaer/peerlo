import sharp from "sharp";

const WIDTH = 1584;
const HEIGHT = 396;

// Brand colors
const eveningForest = "#305043";
const forest = "#388566";
const paper = "#F5F3F0";
const brightForest = "#C1F7E1";
const pastelForest = "#BDE1D2";

// Peerlo bubble path (from peerlo-bubble.svg, original viewBox 0 0 38 43)
const bubblePath = `M22.9624 0C31.2672 0 37.9999 6.73223 38.0001 15.0369C38.0001 23.3418 31.2673 30.0746 22.9624 30.0746H15.0376C14.4985 30.0746 13.9657 30.0453 13.4413 29.99C6.98619 30.0745 1.77973 35.333 1.77962 41.8081V42.1084C1.77961 42.5954 1.3843 42.9901 0.897212 42.9901C0.410191 42.99 0.0155227 42.5954 0.0155056 42.1084V17.0964C0.0155056 16.7228 0.0518791 16.3477 0.0288837 15.9749C0.00975014 15.6647 0 15.3519 0 15.0369C0.00018525 6.73235 6.73235 0.000188656 15.0369 0H22.9624Z`;

// Logo scale: original is 38x43, we want it roughly 80px tall
const logoScale = 80 / 43;
const logoWidth = Math.round(38 * logoScale);
const logoHeight = 80;

// Position: slightly left of center, shifted right to avoid LinkedIn profile photo overlap (bottom-left)
const groupCenterX = WIDTH * 0.48;
const groupCenterY = HEIGHT * 0.46;

// Logo position
const logoX = groupCenterX - 160;
const logoY = groupCenterY - logoHeight / 2;

// Text positions
const textX = logoX + logoWidth + 18;
const peerloY = groupCenterY - 8;
const taglineY = peerloY + 38;

const svg = `<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${eveningForest}" />

  <!-- Decorative circle: large, right side, partially off-canvas -->
  <circle cx="${WIDTH - 80}" cy="${HEIGHT / 2}" r="340" fill="${forest}" opacity="0.15" />

  <!-- Decorative circle: smaller, left side -->
  <circle cx="120" cy="${HEIGHT - 40}" r="200" fill="${forest}" opacity="0.10" />

  <!-- Subtle top-left accent -->
  <circle cx="300" cy="-60" r="160" fill="${brightForest}" opacity="0.06" />

  <!-- Peerlo bubble logo -->
  <g transform="translate(${logoX}, ${logoY}) scale(${logoScale.toFixed(4)})">
    <path d="${bubblePath}" fill="white" />
  </g>

  <!-- "Peerlo" text -->
  <text x="${textX}" y="${peerloY}" fill="white" font-family="system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="56" font-weight="600" letter-spacing="-0.5">Peerlo</text>

  <!-- Tagline -->
  <text x="${textX}" y="${taglineY}" fill="${brightForest}" font-family="system-ui, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif" font-size="22" font-weight="400" letter-spacing="0.5">Peer support. Gjort tilgjengelig.</text>
</svg>`;

const outputPath = new URL(
  "../public/peerlo-linkedin-banner.png",
  import.meta.url
).pathname;

await sharp(Buffer.from(svg)).png().toFile(outputPath);

console.log(`Banner generated: ${outputPath} (${WIDTH}x${HEIGHT})`);
