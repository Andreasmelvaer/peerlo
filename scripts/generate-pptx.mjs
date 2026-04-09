import pptxgen from "pptxgenjs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

// ── Peerlo Brand Colors (no # prefix) ──
const C = {
  forest: "388566",
  eveningForest: "305043",
  paper: "F5F3F0",
  charcoal: "3F3F3F",
  brightForest: "C1F7E1",
  pastelForest: "BDE1D2",
  sky: "6CCBEC",
  eveningSky: "25609F",
  pastelSky: "86AED8",
  brightSky: "CBF8FF",
  white: "FFFFFF",
  black: "1A1A1A",
};

// ── Helpers ──
const makeShadow = () => ({
  type: "outer",
  blur: 8,
  offset: 3,
  angle: 135,
  color: "000000",
  opacity: 0.1,
});

// Read logo as base64
function logoBase64(filename) {
  const p = path.join(projectRoot, "public/images", filename);
  if (!fs.existsSync(p)) return null;
  const ext = path.extname(p).slice(1);
  const mime = ext === "svg" ? "image/svg+xml" : `image/${ext === "jpg" ? "jpeg" : ext}`;
  return `${mime};base64,${fs.readFileSync(p).toString("base64")}`;
}

const logoDark = logoBase64("logodark.svg");
const logoLight = logoBase64("logo-light.svg");
const bubble3d = logoBase64("peerlo-bubble-3d.png");

// ── Presentation Setup ──
const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.author = "Peerlo";
pres.title = "Peerlo — Pitch Deck Template";

// ── Slide Masters ──
pres.defineSlideMaster({
  title: "MASTER_LIGHT",
  background: { color: C.paper },
  objects: [
    // Bottom-right logo watermark
    ...(logoDark
      ? [{ image: { data: logoDark, x: 9.2, y: 5.0, w: 0.4, h: 0.41 } }]
      : []),
  ],
});

pres.defineSlideMaster({
  title: "MASTER_DARK",
  background: { color: C.eveningForest },
  objects: [
    ...(logoLight
      ? [{ image: { data: logoLight, x: 9.2, y: 5.0, w: 0.4, h: 0.41 } }]
      : []),
  ],
});

// ════════════════════════════════════════════════
// SLIDE 1 — Title / Cover
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide({ masterName: "MASTER_DARK" });

  // Subtle decorative circle (top-right)
  slide.addShape(pres.shapes.OVAL, {
    x: 7.5,
    y: -1.5,
    w: 4,
    h: 4,
    fill: { color: C.forest, transparency: 70 },
  });

  // 3D Bubble logo
  if (bubble3d) {
    slide.addImage({
      data: bubble3d,
      x: 0.8,
      y: 0.8,
      w: 1.2,
      h: 1.36,
    });
  }

  // Title
  slide.addText("Peerlo", {
    x: 0.8,
    y: 2.3,
    w: 8,
    h: 1.0,
    fontSize: 54,
    fontFace: "Gabarito",
    color: C.white,
    bold: true,
    margin: 0,
  });

  // Subtitle
  slide.addText("Peer support. Gjort tilgjengelig.", {
    x: 0.8,
    y: 3.2,
    w: 7,
    h: 0.6,
    fontSize: 22,
    fontFace: "Gabarito",
    color: C.pastelForest,
    margin: 0,
  });

  // Tagline
  slide.addText("Your peer, right here.", {
    x: 0.8,
    y: 4.6,
    w: 4,
    h: 0.4,
    fontSize: 12,
    fontFace: "Calibri",
    color: C.pastelForest,
    italic: true,
    margin: 0,
  });
}

// ════════════════════════════════════════════════
// SLIDE 2 — Agenda
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide({ masterName: "MASTER_LIGHT" });

  slide.addText("Agenda", {
    x: 0.8,
    y: 0.5,
    w: 8,
    h: 0.8,
    fontSize: 36,
    fontFace: "Gabarito",
    color: C.charcoal,
    bold: true,
    margin: 0,
  });

  // Accent line
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8,
    y: 1.3,
    w: 1.5,
    h: 0.05,
    fill: { color: C.forest },
  });

  const agendaItems = [
    "Problemet",
    "Vår løsning",
    "Slik fungerer Peerlo",
    "For arbeidsgivere",
    "Markedet",
    "Teamet",
    "Neste steg",
  ];

  agendaItems.forEach((item, i) => {
    const y = 1.7 + i * 0.5;
    // Number
    slide.addText(`0${i + 1}`, {
      x: 0.8,
      y,
      w: 0.6,
      h: 0.4,
      fontSize: 14,
      fontFace: "Calibri",
      color: C.forest,
      bold: true,
      margin: 0,
    });
    // Item text
    slide.addText(item, {
      x: 1.5,
      y,
      w: 6,
      h: 0.4,
      fontSize: 16,
      fontFace: "Calibri",
      color: C.charcoal,
      margin: 0,
    });
  });
}

// ════════════════════════════════════════════════
// SLIDE 3 — Problem
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide({ masterName: "MASTER_DARK" });

  slide.addText("Problemet", {
    x: 0.8,
    y: 0.5,
    w: 8,
    h: 0.8,
    fontSize: 36,
    fontFace: "Gabarito",
    color: C.white,
    bold: true,
    margin: 0,
  });

  slide.addText("Altfor mange sliter i stillhet.", {
    x: 0.8,
    y: 1.5,
    w: 8,
    h: 0.7,
    fontSize: 26,
    fontFace: "Gabarito",
    color: C.brightForest,
    margin: 0,
  });

  // Stats row — 3 cards
  const stats = [
    { num: "1 av 4", label: "ansatte opplever\npsykiske plager" },
    { num: "60%", label: "snakker aldri med\nnoen om det" },
    { num: "27 dager", label: "gjennomsnittlig sykefravær\nved psykiske lidelser" },
  ];

  stats.forEach((stat, i) => {
    const x = 0.8 + i * 3.0;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x,
      y: 2.6,
      w: 2.7,
      h: 2.2,
      fill: { color: C.forest, transparency: 50 },
      rectRadius: 0.15,
    });
    slide.addText(stat.num, {
      x,
      y: 2.8,
      w: 2.7,
      h: 0.8,
      fontSize: 36,
      fontFace: "Gabarito",
      color: C.white,
      bold: true,
      align: "center",
      margin: 0,
    });
    slide.addText(stat.label, {
      x,
      y: 3.6,
      w: 2.7,
      h: 1.0,
      fontSize: 12,
      fontFace: "Calibri",
      color: C.pastelForest,
      align: "center",
      margin: 0,
    });
  });
}

// ════════════════════════════════════════════════
// SLIDE 4 — Solution
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide({ masterName: "MASTER_LIGHT" });

  slide.addText("Vår løsning", {
    x: 0.8,
    y: 0.5,
    w: 5,
    h: 0.8,
    fontSize: 36,
    fontFace: "Gabarito",
    color: C.charcoal,
    bold: true,
    margin: 0,
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8,
    y: 1.3,
    w: 1.5,
    h: 0.05,
    fill: { color: C.forest },
  });

  slide.addText(
    "Peerlo kobler ansatte med peers som har opplevd lignende utfordringer. Noen som forstår. Noen som har vært der.",
    {
      x: 0.8,
      y: 1.6,
      w: 5.5,
      h: 1.0,
      fontSize: 16,
      fontFace: "Calibri",
      color: C.charcoal,
      margin: 0,
    }
  );

  // Feature list with colored dots
  const features = [
    { text: "Anonymt og trygt", color: C.forest },
    { text: "Tilgjengelig når du trenger det", color: C.sky },
    { text: "Mennesker med egenerfaring", color: C.eveningSky },
  ];

  features.forEach((f, i) => {
    const y = 3.0 + i * 0.55;
    slide.addShape(pres.shapes.OVAL, {
      x: 0.8,
      y: y + 0.08,
      w: 0.25,
      h: 0.25,
      fill: { color: f.color },
    });
    slide.addText(f.text, {
      x: 1.25,
      y,
      w: 5,
      h: 0.4,
      fontSize: 15,
      fontFace: "Calibri",
      color: C.charcoal,
      margin: 0,
    });
  });

  // Right side — placeholder for app screenshot
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 6.8,
    y: 0.8,
    w: 2.6,
    h: 4.2,
    fill: { color: C.pastelForest },
    rectRadius: 0.3,
  });
  slide.addText("[App screenshot]", {
    x: 6.8,
    y: 2.6,
    w: 2.6,
    h: 0.6,
    fontSize: 12,
    fontFace: "Calibri",
    color: C.forest,
    align: "center",
    italic: true,
    margin: 0,
  });
}

// ════════════════════════════════════════════════
// SLIDE 5 — How It Works (3 steps)
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide({ masterName: "MASTER_LIGHT" });

  slide.addText("Slik fungerer Peerlo", {
    x: 0.8,
    y: 0.5,
    w: 8,
    h: 0.8,
    fontSize: 36,
    fontFace: "Gabarito",
    color: C.charcoal,
    bold: true,
    align: "center",
    margin: 0,
  });

  const steps = [
    {
      num: "1",
      title: "Velg hva du står i",
      desc: "Beskriv kort hva du trenger støtte med. Alt er anonymt.",
      bg: C.brightForest,
    },
    {
      num: "2",
      title: "Bli matchet med en peer",
      desc: "Vi kobler deg med en sertifisert peer som har relevant egenerfaring.",
      bg: C.brightSky,
    },
    {
      num: "3",
      title: "Start en samtale",
      desc: "Snakk trygt og fritt med noen som virkelig forstår.",
      bg: C.pastelForest,
    },
  ];

  steps.forEach((step, i) => {
    const x = 0.5 + i * 3.15;
    // Card
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x,
      y: 1.7,
      w: 2.9,
      h: 3.2,
      fill: { color: C.white },
      shadow: makeShadow(),
      rectRadius: 0.2,
    });
    // Step number circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.3,
      y: 2.0,
      w: 0.65,
      h: 0.65,
      fill: { color: step.bg },
    });
    slide.addText(step.num, {
      x: x + 0.3,
      y: 2.0,
      w: 0.65,
      h: 0.65,
      fontSize: 22,
      fontFace: "Gabarito",
      color: C.eveningForest,
      bold: true,
      align: "center",
      valign: "middle",
      margin: 0,
    });
    // Step title
    slide.addText(step.title, {
      x: x + 0.3,
      y: 2.85,
      w: 2.3,
      h: 0.5,
      fontSize: 16,
      fontFace: "Gabarito",
      color: C.charcoal,
      bold: true,
      margin: 0,
    });
    // Step desc
    slide.addText(step.desc, {
      x: x + 0.3,
      y: 3.35,
      w: 2.3,
      h: 1.2,
      fontSize: 12,
      fontFace: "Calibri",
      color: C.charcoal,
      margin: 0,
    });
  });
}

// ════════════════════════════════════════════════
// SLIDE 6 — For Employers / HR Dashboard
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide({ masterName: "MASTER_DARK" });

  slide.addText("For HR og ledere", {
    x: 0.8,
    y: 0.3,
    w: 8,
    h: 0.6,
    fontSize: 12,
    fontFace: "Calibri",
    color: C.brightForest,
    bold: true,
    charSpacing: 4,
    margin: 0,
  });

  slide.addText("Innsikt som gjør en forskjell", {
    x: 0.8,
    y: 0.8,
    w: 8,
    h: 0.8,
    fontSize: 32,
    fontFace: "Gabarito",
    color: C.white,
    bold: true,
    margin: 0,
  });

  slide.addText(
    "Peerlo gir HR anonymisert, aggregert innsikt i hva ansatte faktisk står i — slik at dere kan handle tidlig, ikke for sent.",
    {
      x: 0.8,
      y: 1.6,
      w: 8,
      h: 0.6,
      fontSize: 14,
      fontFace: "Calibri",
      color: C.pastelForest,
      margin: 0,
    }
  );

  // Dashboard placeholder
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 1.5,
    y: 2.5,
    w: 7.0,
    h: 2.8,
    fill: { color: C.charcoal },
    rectRadius: 0.15,
  });
  slide.addText("[Dashboard screenshot]", {
    x: 1.5,
    y: 3.6,
    w: 7.0,
    h: 0.5,
    fontSize: 14,
    fontFace: "Calibri",
    color: C.pastelForest,
    align: "center",
    italic: true,
    margin: 0,
  });
}

// ════════════════════════════════════════════════
// SLIDE 7 — Market / Stats
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide({ masterName: "MASTER_LIGHT" });

  slide.addText("Markedet", {
    x: 0.8,
    y: 0.5,
    w: 8,
    h: 0.8,
    fontSize: 36,
    fontFace: "Gabarito",
    color: C.charcoal,
    bold: true,
    margin: 0,
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8,
    y: 1.3,
    w: 1.5,
    h: 0.05,
    fill: { color: C.forest },
  });

  // Big stat callouts — 2x2 grid
  const marketStats = [
    { num: "2,8M", label: "Yrkesaktive\ni Norge", x: 0.8, y: 1.8 },
    { num: "$4,5B", label: "Globalt marked for\nmental helse på jobb", x: 5.2, y: 1.8 },
    { num: "15%", label: "av sykefraværet skyldes\npsykiske lidelser", x: 0.8, y: 3.5 },
    { num: "6x", label: "ROI på forebyggende\nmental helse-tiltak", x: 5.2, y: 3.5 },
  ];

  marketStats.forEach((s) => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: s.x,
      y: s.y,
      w: 4.0,
      h: 1.4,
      fill: { color: C.white },
      shadow: makeShadow(),
      rectRadius: 0.12,
    });
    slide.addText(s.num, {
      x: s.x + 0.3,
      y: s.y + 0.15,
      w: 3.4,
      h: 0.7,
      fontSize: 34,
      fontFace: "Gabarito",
      color: C.forest,
      bold: true,
      margin: 0,
    });
    slide.addText(s.label, {
      x: s.x + 0.3,
      y: s.y + 0.8,
      w: 3.4,
      h: 0.5,
      fontSize: 11,
      fontFace: "Calibri",
      color: C.charcoal,
      margin: 0,
    });
  });
}

// ════════════════════════════════════════════════
// SLIDE 8 — Business Model
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide({ masterName: "MASTER_LIGHT" });

  slide.addText("Forretningsmodell", {
    x: 0.8,
    y: 0.5,
    w: 8,
    h: 0.8,
    fontSize: 36,
    fontFace: "Gabarito",
    color: C.charcoal,
    bold: true,
    margin: 0,
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8,
    y: 1.3,
    w: 1.5,
    h: 0.05,
    fill: { color: C.forest },
  });

  slide.addText("B2B SaaS — arbeidsgivere abonnerer på Peerlo for sine ansatte.", {
    x: 0.8,
    y: 1.6,
    w: 8,
    h: 0.5,
    fontSize: 16,
    fontFace: "Calibri",
    color: C.charcoal,
    margin: 0,
  });

  // Pricing tiers — 3 cards
  const tiers = [
    { name: "Starter", price: "XX kr/mnd", features: "Opptil 50 ansatte\nPeer-matching\nAnonym chat" },
    { name: "Vekst", price: "XX kr/mnd", features: "Opptil 250 ansatte\nHR Dashboard\nEmnekart & trender" },
    { name: "Enterprise", price: "Tilpasset", features: "Ubegrenset ansatte\nDedikert support\nIntegrert med HR-system" },
  ];

  tiers.forEach((tier, i) => {
    const x = 0.5 + i * 3.15;
    const isMiddle = i === 1;
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x,
      y: 2.3,
      w: 2.9,
      h: 2.8,
      fill: { color: isMiddle ? C.eveningForest : C.white },
      shadow: makeShadow(),
      rectRadius: 0.15,
    });
    slide.addText(tier.name, {
      x,
      y: 2.5,
      w: 2.9,
      h: 0.45,
      fontSize: 18,
      fontFace: "Gabarito",
      color: isMiddle ? C.brightForest : C.charcoal,
      bold: true,
      align: "center",
      margin: 0,
    });
    slide.addText(tier.price, {
      x,
      y: 2.95,
      w: 2.9,
      h: 0.45,
      fontSize: 22,
      fontFace: "Gabarito",
      color: isMiddle ? C.white : C.forest,
      bold: true,
      align: "center",
      margin: 0,
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x + 0.4,
      y: 3.5,
      w: 2.1,
      h: 0.02,
      fill: { color: isMiddle ? C.forest : C.pastelForest },
    });
    slide.addText(tier.features, {
      x: x + 0.3,
      y: 3.65,
      w: 2.3,
      h: 1.2,
      fontSize: 11,
      fontFace: "Calibri",
      color: isMiddle ? C.pastelForest : C.charcoal,
      align: "center",
      margin: 0,
    });
  });
}

// ════════════════════════════════════════════════
// SLIDE 9 — Team
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide({ masterName: "MASTER_LIGHT" });

  slide.addText("Teamet", {
    x: 0.8,
    y: 0.5,
    w: 8,
    h: 0.8,
    fontSize: 36,
    fontFace: "Gabarito",
    color: C.charcoal,
    bold: true,
    margin: 0,
  });

  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.8,
    y: 1.3,
    w: 1.5,
    h: 0.05,
    fill: { color: C.forest },
  });

  const team = [
    { name: "[Navn]", role: "CEO & Founder", bg: C.pastelForest },
    { name: "[Navn]", role: "CTO", bg: C.pastelSky },
    { name: "[Navn]", role: "Head of Product", bg: C.brightForest },
  ];

  team.forEach((member, i) => {
    const x = 0.5 + i * 3.15;
    // Photo placeholder circle
    slide.addShape(pres.shapes.OVAL, {
      x: x + 0.8,
      y: 1.7,
      w: 1.3,
      h: 1.3,
      fill: { color: member.bg },
    });
    slide.addText("[Foto]", {
      x: x + 0.8,
      y: 2.1,
      w: 1.3,
      h: 0.5,
      fontSize: 10,
      fontFace: "Calibri",
      color: C.forest,
      align: "center",
      italic: true,
      margin: 0,
    });
    // Name
    slide.addText(member.name, {
      x,
      y: 3.2,
      w: 2.9,
      h: 0.5,
      fontSize: 18,
      fontFace: "Gabarito",
      color: C.charcoal,
      bold: true,
      align: "center",
      margin: 0,
    });
    // Role
    slide.addText(member.role, {
      x,
      y: 3.65,
      w: 2.9,
      h: 0.4,
      fontSize: 13,
      fontFace: "Calibri",
      color: C.forest,
      align: "center",
      margin: 0,
    });
    // Bio placeholder
    slide.addText("[Kort beskrivelse av bakgrunn og rolle]", {
      x: x + 0.2,
      y: 4.1,
      w: 2.5,
      h: 0.8,
      fontSize: 10,
      fontFace: "Calibri",
      color: C.charcoal,
      align: "center",
      italic: true,
      margin: 0,
    });
  });
}

// ════════════════════════════════════════════════
// SLIDE 10 — Quote / Social Proof
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide({ masterName: "MASTER_DARK" });

  // Big decorative quote marks
  slide.addText("\u201C", {
    x: 0.5,
    y: 0.3,
    w: 2,
    h: 1.5,
    fontSize: 120,
    fontFace: "Georgia",
    color: C.forest,
    margin: 0,
  });

  slide.addText(
    "Peer support er en av de mest kraftfulle formene for tidlig støtte.",
    {
      x: 1.0,
      y: 1.5,
      w: 8.0,
      h: 2.0,
      fontSize: 30,
      fontFace: "Gabarito",
      color: C.white,
      align: "center",
      margin: 0,
    }
  );

  slide.addText("[Kilde / person]", {
    x: 1.0,
    y: 3.8,
    w: 8.0,
    h: 0.5,
    fontSize: 14,
    fontFace: "Calibri",
    color: C.pastelForest,
    align: "center",
    italic: true,
    margin: 0,
  });
}

// ════════════════════════════════════════════════
// SLIDE 11 — Why Peerlo Exists
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide({ masterName: "MASTER_LIGHT" });

  slide.addText("HVORFOR PEERLO FINNES", {
    x: 0.8,
    y: 0.5,
    w: 8,
    h: 0.4,
    fontSize: 12,
    fontFace: "Calibri",
    color: C.forest,
    bold: true,
    charSpacing: 4,
    margin: 0,
  });

  slide.addText(
    "Det handler om å gjøre det litt enklere å snakke med noen som forstår.",
    {
      x: 0.8,
      y: 1.2,
      w: 8.0,
      h: 1.5,
      fontSize: 34,
      fontFace: "Gabarito",
      color: C.charcoal,
      align: "center",
      margin: 0,
    }
  );

  slide.addText(
    "Ikke nødvendigvis en terapeut. Bare et menneske som har kjent på noe av det samme.",
    {
      x: 1.5,
      y: 3.0,
      w: 7.0,
      h: 0.8,
      fontSize: 18,
      fontFace: "Calibri",
      color: C.charcoal,
      align: "center",
      margin: 0,
    }
  );
}

// ════════════════════════════════════════════════
// SLIDE 12 — CTA / Contact
// ════════════════════════════════════════════════
{
  const slide = pres.addSlide({ masterName: "MASTER_DARK" });

  // Decorative circles
  slide.addShape(pres.shapes.OVAL, {
    x: -1.5,
    y: 3.0,
    w: 4,
    h: 4,
    fill: { color: C.forest, transparency: 70 },
  });
  slide.addShape(pres.shapes.OVAL, {
    x: 8.0,
    y: -1.0,
    w: 3,
    h: 3,
    fill: { color: C.forest, transparency: 80 },
  });

  if (bubble3d) {
    slide.addImage({
      data: bubble3d,
      x: 4.2,
      y: 0.5,
      w: 1.5,
      h: 1.7,
    });
  }

  slide.addText("La oss snakkes.", {
    x: 1.0,
    y: 2.2,
    w: 8.0,
    h: 1.0,
    fontSize: 44,
    fontFace: "Gabarito",
    color: C.white,
    bold: true,
    align: "center",
    margin: 0,
  });

  slide.addText("Book en demo og se hvordan Peerlo kan støtte dine ansatte.", {
    x: 1.5,
    y: 3.2,
    w: 7.0,
    h: 0.6,
    fontSize: 16,
    fontFace: "Calibri",
    color: C.pastelForest,
    align: "center",
    margin: 0,
  });

  // Contact info
  slide.addText(
    [
      { text: "hei@peerlo.no", options: { breakLine: true, bold: true } },
      { text: "peerlo.no", options: {} },
    ],
    {
      x: 2.5,
      y: 4.2,
      w: 5.0,
      h: 0.8,
      fontSize: 16,
      fontFace: "Calibri",
      color: C.white,
      align: "center",
      margin: 0,
    }
  );
}

// ── Write File ──
const outPath = path.join(projectRoot, "Peerlo-Pitch-Template.pptx");
pres.writeFile({ fileName: outPath }).then(() => {
  console.log(`Created: ${outPath}`);
});
