"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowLeft, Check, Copy } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1 text-xs font-[family-name:var(--font-geist-sans)] font-medium text-charcoal/40 hover:text-charcoal transition-colors duration-300"
      title="Kopier"
    >
      {copied ? (
        <Check size={12} className="text-forest" />
      ) : (
        <Copy size={12} />
      )}
      {copied ? "Kopiert!" : text}
    </button>
  );
}

/* ── Data ── */

const primaryColors = [
  { name: "Paper", hex: "#F5F3F0", desc: "Bakgrunn", textLight: false },
  { name: "Forest", hex: "#388566", desc: "Primær", textLight: true },
  { name: "Evening Forest", hex: "#305043", desc: "Mørk primær", textLight: true },
  { name: "Bright Forest", hex: "#C1F7E1", desc: "Lys aksent", textLight: false },
  { name: "Pastel Forest", hex: "#BDE1D2", desc: "Myk grønn", textLight: false },
  { name: "Charcoal", hex: "#3F3F3F", desc: "Tekst", textLight: true },
];

const secondaryColors = [
  { name: "Sky", hex: "#6CCBEC", desc: "Sekundær", textLight: false },
  { name: "Evening Sky", hex: "#25609F", desc: "Mørk blå", textLight: true },
  { name: "Pastel Sky", hex: "#86AED8", desc: "Myk blå", textLight: false },
  { name: "Bright Sky", hex: "#CBF8FF", desc: "Lys blå", textLight: false },
  { name: "White", hex: "#FFFFFF", desc: "Overflater", textLight: false },
];

/* Logo matrix matching Figma logo sheet */
const logoCategories = [
  {
    title: "Hero — Effektlogo",
    desc: "3D-boble med dybde og skygge. Til hero og markedsføring.",
    wide: true,
    items: [
      {
        name: "Hero-logo m/ effekt",
        file: "/images/logos/hero-effect-logo.png",
        svg: null,
        bg: "effect-gradient",
      },
    ],
  },
  {
    title: "Large",
    desc: "Fullstor logo med boble og ordmerke. For presentasjoner og markedsmateriell.",
    wide: false,
    items: [
      {
        name: "Primary duo tone",
        file: "/images/logos/logo-large-duo.png",
        svg: "/images/logos/logo-large-duo.svg",
        bg: "bg-[#d7d7d7]",
      },
      {
        name: "Secondary positive",
        file: "/images/logos/logo-large-positive.png",
        svg: "/images/logos/logo-large-positive.svg",
        bg: "bg-paper",
        border: true,
      },
      {
        name: "Secondary negative",
        file: "/images/logos/logo-large-negative.png",
        svg: "/images/logos/logo-large-negative.svg",
        bg: "bg-evening-forest",
      },
    ],
  },
  {
    title: "App",
    desc: "Appikon med avrundet firkant. For app-butikker og digitale plattformer.",
    wide: false,
    items: [
      {
        name: "Primary duo tone",
        file: "/images/logos/logo-app-duo.png",
        svg: "/images/logos/logo-app-duo.svg",
        bg: "bg-[#d7d7d7]",
      },
      {
        name: "Secondary positive",
        file: "/images/logos/logo-app-positive.png",
        svg: "/images/logos/logo-app-positive.svg",
        bg: "bg-paper",
        border: true,
      },
      {
        name: "Secondary negative",
        file: "/images/logos/logo-app-negative.png",
        svg: "/images/logos/logo-app-negative.svg",
        bg: "bg-evening-forest",
      },
    ],
  },
  {
    title: "Mini",
    desc: "Kompakt versjon for navbar, små kontekster og favicon.",
    wide: false,
    items: [
      {
        name: "Primary duo tone",
        file: "/images/logos/logo-mini-duo.png",
        svg: "/images/logos/logo-mini-duo.svg",
        bg: "bg-[#d7d7d7]",
      },
      {
        name: "Secondary positive",
        file: "/images/logos/logo-mini-positive.png",
        svg: "/images/logos/logo-mini-positive.svg",
        bg: "bg-paper",
        border: true,
      },
      {
        name: "Secondary negative",
        file: "/images/logos/logo-mini-negative.png",
        svg: "/images/logos/logo-mini-negative.svg",
        bg: "bg-evening-forest",
      },
    ],
  },
  {
    title: "Wordmark",
    desc: "Kun ordmerket uten boble. Ikke tilgjengelig i duo tone.",
    wide: false,
    items: [
      {
        name: "Secondary positive",
        file: "/images/logos/wordmark-negative.png",
        svg: "/images/logos/wordmark-negative.svg",
        bg: "bg-paper",
        border: true,
      },
      {
        name: "Secondary negative",
        file: "/images/logos/wordmark-positive.png",
        svg: "/images/logos/wordmark-positive.svg",
        bg: "bg-evening-forest",
      },
    ],
  },
  {
    title: "App-ikoner (frittstående)",
    desc: "Avrundede app-ikoner uten tekst. For digitale flater.",
    wide: false,
    items: [
      {
        name: "Duo tone",
        file: "/images/logos/app-icon-duo.png",
        svg: null,
        bg: "bg-[#d7d7d7]",
      },
      {
        name: "Positive",
        file: "/images/logos/app-icon-positive.png",
        svg: null,
        bg: "bg-paper",
        border: true,
      },
      {
        name: "Negative",
        file: "/images/logos/app-icon-negative.png",
        svg: null,
        bg: "bg-evening-forest",
      },
    ],
  },
  {
    title: "Boble-ikon & Effekt",
    desc: "Frittstående boble og 3D-effektversjoner.",
    wide: false,
    items: [
      {
        name: "Boble — 3D-effekt",
        file: "/images/logos/app-icon-duo.png",
        svg: null,
        bg: "effect-gradient",
      },
      {
        name: "Ordmerke — Effekt",
        file: "/images/peerlo-wordmark-dark.png",
        svg: null,
        bg: "bg-pastel-forest",
      },
      {
        name: "Boble-ikon (SVG)",
        file: "/images/peerlo-bubble.svg",
        svg: "/images/peerlo-bubble.svg",
        bg: "bg-evening-forest",
      },
    ],
  },
];

const typeScale = [
  { role: "Heading", font: "Gabarito", weight: "Regular (400)", size: "48–64px", lineHeight: "1.1", example: "Snakk med noen som forstår" },
  { role: "Ingress", font: "Gabarito", weight: "Semi Bold (600)", size: "20–24px", lineHeight: "1.5", example: "Peerlo kobler deg med sertifiserte erfaringskonsulenter" },
  { role: "Body", font: "Gabarito", weight: "Regular (400)", size: "16–18px", lineHeight: "1.6", example: "Mange som sliter med psykisk helse ønsker ikke terapi." },
  { role: "Navigation", font: "Geist", weight: "Semi Bold (600)", size: "14–15px", lineHeight: "1.4", example: "Book en demo" },
  { role: "Caption", font: "Geist", weight: "Medium (500)", size: "12–14px", lineHeight: "1.4", example: "Sekundær navigasjon og metadata" },
];

const gradients = [
  {
    name: "Green to Paper",
    css: "linear-gradient(161deg, #F5F3F0 0%, #388566 94%)",
    from: "#F5F3F0",
    to: "#388566",
    desc: "Brukes på hero og CTA-seksjoner",
  },
  {
    name: "Blue Skies",
    css: "linear-gradient(160deg, #CBF8FF 11%, #86AED8 89%)",
    from: "#CBF8FF",
    to: "#86AED8",
    desc: "Sekundær gradient for aksent",
  },
  {
    name: "Forest Depth",
    css: "linear-gradient(180deg, #388566 0%, #305043 100%)",
    from: "#388566",
    to: "#305043",
    desc: "Mørk grønn dybde",
  },
  {
    name: "Morning Mist",
    css: "linear-gradient(180deg, #F5F3F0 0%, #BDE1D2 100%)",
    from: "#F5F3F0",
    to: "#BDE1D2",
    desc: "Myk overgang for innholdsseksjoner",
  },
];

const radii = [
  { value: "8px", label: "sm", usage: "Tagger, badges" },
  { value: "12px", label: "md", usage: "Input-felt, små kort" },
  { value: "16px", label: "lg", usage: "Kort, paneler" },
  { value: "24px", label: "xl", usage: "Store kort, modaler" },
  { value: "9999px", label: "full", usage: "Knapper, piller" },
];

const cssVars = `/* Peerlo Design Tokens */
:root {
  --paper: #F5F3F0;
  --charcoal: #3F3F3F;
  --white: #FFFFFF;

  --evening-forest: #305043;
  --forest: #388566;
  --pastel-forest: #BDE1D2;
  --bright-forest: #C1F7E1;

  --evening-sky: #25609F;
  --sky: #6CCBEC;
  --pastel-sky: #86AED8;
  --bright-sky: #CBF8FF;
}`;

export default function BrandPage() {
  return (
    <>
      <Navbar />

      {/* ===== HERO — matches Figma splash ===== */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
        style={{
          backgroundImage: "linear-gradient(161deg, #F5F3F0 0%, #388566 94%)",
        }}
      >
        <motion.div
          className="relative z-10 flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: smoothEase }}
        >
          <motion.img
            src="/images/logos/hero-effect-logo.png"
            alt="Peerlo"
            className="w-48 md:w-64 lg:w-72"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: smoothEase }}
          />
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 text-sm font-[family-name:var(--font-geist-sans)] font-medium hover:text-white/70 transition-colors duration-300"
          >
            <ArrowLeft size={14} />
            Tilbake til forsiden
          </Link>
        </motion.div>
      </section>

      <main className="bg-paper">
        {/* ===== INTRO / TITLE ===== */}
        <section className="py-20 md:py-28 border-b border-pastel-forest/30">
          <div className="max-w-4xl mx-auto px-6">
            <AnimatedSection>
              <h1 className="text-5xl md:text-6xl font-normal mb-6">
                Merkevare &amp; Designsystem
              </h1>
              <p className="text-xl text-charcoal/60 max-w-2xl mb-10 leading-relaxed">
                Logoer, farger, typografi og retningslinjer for bruk av Peerlo
                sin visuelle identitet. Alt du trenger for å representere
                merkevaren riktig.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="bg-white rounded-2xl p-8 md:p-10">
                <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
                  Merkepersonlighet
                </p>
                <h2 className="text-2xl md:text-3xl font-normal mb-4">
                  Varm, trygg og menneskelig.
                </h2>
                <p className="text-charcoal/70 leading-relaxed max-w-3xl">
                  Peerlo sin visuelle identitet er bygget rundt skoggrønt, varme
                  jordtoner og et mykt, åpent formspråk. Designsystemet bruker
                  Gabarito for sin varme og menneskelige karakter i overskrifter
                  og brødtekst, og Geist for et rent, funksjonelt uttrykk i
                  navigasjon og knapper. Alt skal føles trygt, tilgjengelig og
                  lavterskel.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== LOGOS ===== */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
                Logoer
              </p>
              <h2 className="text-3xl md:text-4xl font-normal mb-4">
                Logoversjoner
              </h2>
              <p className="text-charcoal/60 mb-12 max-w-xl">
                Bruk alltid riktig logoversjon for konteksten. Mørke versjoner
                på lyse flater, lyse versjoner på mørke flater.
              </p>
            </AnimatedSection>

            {logoCategories.map((cat, ci) => (
              <AnimatedSection key={cat.title} delay={ci * 0.08} className="mb-12 last:mb-0">
                <div className="mb-4">
                  <h3 className="text-xl font-normal mb-1">{cat.title}</h3>
                  <p className="text-charcoal/50 text-sm">{cat.desc}</p>
                </div>
                <div className={`grid gap-5 ${cat.wide ? "grid-cols-1" : `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`}`}>
                  {cat.items.map((logo) => {
                    const bgClass =
                      logo.bg === "gradient" || logo.bg === "effect-gradient"
                        ? ""
                        : logo.bg;
                    const bgStyle =
                      logo.bg === "gradient"
                        ? { backgroundImage: "linear-gradient(147deg, #F5F3F0 0%, #388566 100%)" }
                        : logo.bg === "effect-gradient"
                          ? { backgroundImage: "linear-gradient(147deg, #F5F3F0 0%, #388566 100%)", backgroundColor: "rgba(90, 154, 126, 0.3)" }
                          : undefined;
                    return (
                      <motion.div
                        key={logo.name}
                        className={`bg-paper rounded-2xl overflow-hidden ${"border" in logo && logo.border ? "ring-1 ring-charcoal/5" : ""}`}
                        whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(56,133,102,0.12)" }}
                        transition={{ duration: 0.35, ease: smoothEase }}
                      >
                        <div
                          className={`${bgClass} ${cat.wide ? "h-64 md:h-80" : "h-44"} flex items-center justify-center p-8`}
                          style={bgStyle}
                        >
                          <img
                            src={logo.file}
                            alt={logo.name}
                            className={`${cat.wide ? "max-h-48 md:max-h-56" : "max-h-24"} w-auto object-contain`}
                          />
                        </div>
                        <div className="p-5">
                          <p className="font-semibold text-sm mb-1">{logo.name}</p>
                          <div className="flex items-center gap-3 mt-2">
                            <a
                              href={logo.file}
                              download
                              className="inline-flex items-center gap-1.5 text-forest text-xs font-[family-name:var(--font-geist-sans)] font-semibold hover:text-evening-forest transition-colors duration-300"
                            >
                              <Download size={13} />
                              PNG
                            </a>
                            {logo.svg && (
                              <a
                                href={logo.svg}
                                download
                                className="inline-flex items-center gap-1.5 text-forest text-xs font-[family-name:var(--font-geist-sans)] font-semibold hover:text-evening-forest transition-colors duration-300"
                              >
                                <Download size={13} />
                                SVG
                              </a>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.3} className="mt-10">
              <div className="bg-bright-forest/30 rounded-2xl p-6 md:p-8">
                <p className="font-semibold mb-2">Regler for logobruk</p>
                <ul className="text-sm text-charcoal/70 space-y-1.5 leading-relaxed">
                  <li>• Ikke strekk, roter eller forvreng logoen.</li>
                  <li>• Behold alltid nok luft rundt logoen (minimum 1× boble-høyden).</li>
                  <li>• Bruk aldri logoen på en bakgrunn som gir dårlig kontrast.</li>
                  <li>• Ikke legg skygger, gradienter eller effekter oppå logoen.</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== COLOR PALETTE ===== */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
                Fargepalett
              </p>
              <h2 className="text-3xl md:text-4xl font-normal mb-12">
                Farger
              </h2>
            </AnimatedSection>

            {/* Primary */}
            <AnimatedSection delay={0.1}>
              <p className="text-xs font-[family-name:var(--font-geist-sans)] font-semibold text-charcoal/40 uppercase tracking-wider mb-4">
                Primærfarger
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
                {primaryColors.map((c) => (
                  <motion.div
                    key={c.hex}
                    className="bg-white rounded-2xl overflow-hidden cursor-pointer"
                    whileHover={{ y: -4, boxShadow: "0 12px 30px -8px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.3, ease: smoothEase }}
                  >
                    <div
                      className="h-28 flex items-end p-3"
                      style={{ backgroundColor: c.hex }}
                    >
                      <span
                        className={`text-xs font-[family-name:var(--font-geist-sans)] font-medium ${c.textLight ? "text-white/70" : "text-charcoal/40"}`}
                      >
                        {c.desc}
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="font-medium text-sm mb-0.5">{c.name}</p>
                      <CopyButton text={c.hex} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Secondary */}
            <AnimatedSection delay={0.15}>
              <p className="text-xs font-[family-name:var(--font-geist-sans)] font-semibold text-charcoal/40 uppercase tracking-wider mb-4">
                Sekundærfarger
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {secondaryColors.map((c) => (
                  <motion.div
                    key={c.hex}
                    className={`bg-white rounded-2xl overflow-hidden cursor-pointer ${c.hex === "#FFFFFF" ? "ring-1 ring-charcoal/5" : ""}`}
                    whileHover={{ y: -4, boxShadow: "0 12px 30px -8px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.3, ease: smoothEase }}
                  >
                    <div
                      className={`h-28 flex items-end p-3 ${c.hex === "#FFFFFF" ? "ring-1 ring-inset ring-charcoal/5" : ""}`}
                      style={{ backgroundColor: c.hex }}
                    >
                      <span
                        className={`text-xs font-[family-name:var(--font-geist-sans)] font-medium ${c.textLight ? "text-white/70" : "text-charcoal/40"}`}
                      >
                        {c.desc}
                      </span>
                    </div>
                    <div className="p-3">
                      <p className="font-medium text-sm mb-0.5">{c.name}</p>
                      <CopyButton text={c.hex} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== TYPOGRAPHY ===== */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
                Typografi
              </p>
              <h2 className="text-3xl md:text-4xl font-normal mb-12">
                Skrifttyper
              </h2>
            </AnimatedSection>

            {/* Font families */}
            <AnimatedSection delay={0.1}>
              <div className="grid md:grid-cols-2 gap-6 mb-16">
                <motion.div
                  className="bg-paper rounded-2xl p-8"
                  whileHover={{ y: -4, boxShadow: "0 16px 40px -12px rgba(56,133,102,0.1)" }}
                  transition={{ duration: 0.35, ease: smoothEase }}
                >
                  <p className="text-xs font-[family-name:var(--font-geist-sans)] font-semibold text-charcoal/40 uppercase tracking-wider mb-4">
                    Primær — Overskrifter &amp; brødtekst
                  </p>
                  <p className="text-6xl mb-3">Gabarito</p>
                  <p className="text-2xl font-semibold mb-4 text-charcoal/60">
                    Aa Bb Cc 123
                  </p>
                  <p className="text-charcoal/60 leading-relaxed text-sm">
                    Varm og menneskelig. Brukes til overskrifter (Regular 400),
                    ingress (Semi Bold 600) og brødtekst (Regular 400).
                  </p>
                </motion.div>
                <motion.div
                  className="bg-paper rounded-2xl p-8"
                  whileHover={{ y: -4, boxShadow: "0 16px 40px -12px rgba(56,133,102,0.1)" }}
                  transition={{ duration: 0.35, ease: smoothEase }}
                >
                  <p className="text-xs font-[family-name:var(--font-geist-sans)] font-semibold text-charcoal/40 uppercase tracking-wider mb-4">
                    Sekundær — Navigasjon &amp; knapper
                  </p>
                  <p className="text-6xl font-[family-name:var(--font-geist-sans)] mb-3">
                    Geist
                  </p>
                  <p className="text-2xl font-[family-name:var(--font-geist-sans)] font-semibold mb-4 text-charcoal/60">
                    Aa Bb Cc 123
                  </p>
                  <p className="text-charcoal/60 leading-relaxed text-sm">
                    Ren og funksjonell. Brukes til knapper (Semi Bold 600),
                    navigasjon (Medium 500) og systemtekst.
                  </p>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Type scale */}
            <AnimatedSection delay={0.15}>
              <p className="text-xs font-[family-name:var(--font-geist-sans)] font-semibold text-charcoal/40 uppercase tracking-wider mb-6">
                Typeskala
              </p>
              <div className="space-y-3">
                {typeScale.map((t, i) => (
                  <motion.div
                    key={t.role}
                    className="bg-paper rounded-xl p-5 md:p-6 grid md:grid-cols-[140px_1fr_200px] gap-4 items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.5, ease: smoothEase }}
                    whileHover={{ x: 4 }}
                  >
                    <div>
                      <p className="font-semibold text-sm">{t.role}</p>
                      <p className="text-xs text-charcoal/40 font-[family-name:var(--font-geist-sans)]">
                        {t.font}, {t.weight}
                      </p>
                    </div>
                    <p
                      className={`text-charcoal/70 truncate ${
                        t.font === "Geist"
                          ? "font-[family-name:var(--font-geist-sans)]"
                          : ""
                      } ${
                        t.role === "Heading"
                          ? "text-3xl"
                          : t.role === "Ingress"
                            ? "text-xl font-semibold"
                            : t.role === "Body"
                              ? "text-base"
                              : t.role === "Navigation"
                                ? "text-sm font-semibold"
                                : "text-xs font-medium"
                      }`}
                    >
                      {t.example}
                    </p>
                    <p className="text-xs text-charcoal/40 font-[family-name:var(--font-geist-sans)] text-right hidden md:block">
                      {t.size} / {t.lineHeight}
                    </p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== GRADIENTS ===== */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
                Gradienter
              </p>
              <h2 className="text-3xl md:text-4xl font-normal mb-12">
                Fargeoverganger
              </h2>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6">
              {gradients.map((g, i) => (
                <AnimatedSection key={g.name} delay={i * 0.1}>
                  <motion.div
                    className="rounded-2xl overflow-hidden bg-white"
                    whileHover={{ y: -4, boxShadow: "0 16px 40px -12px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.35, ease: smoothEase }}
                  >
                    <div
                      className="h-48"
                      style={{ backgroundImage: g.css }}
                    />
                    <div className="p-5">
                      <p className="font-semibold mb-1">{g.name}</p>
                      <p className="text-charcoal/50 text-xs mb-2">{g.desc}</p>
                      <CopyButton text={g.css} />
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ===== BUTTON STYLES ===== */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
                Komponenter
              </p>
              <h2 className="text-3xl md:text-4xl font-normal mb-12">
                Knapper
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-paper rounded-2xl p-8 md:p-10">
                <p className="text-xs font-[family-name:var(--font-geist-sans)] font-semibold text-charcoal/40 uppercase tracking-wider mb-6">
                  Negative (hvit tekst)
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <motion.span
                    className="inline-flex h-12 items-center px-7 rounded-full bg-forest text-white font-[family-name:var(--font-geist-sans)] font-semibold text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    Les mer
                  </motion.span>
                  <motion.span
                    className="inline-flex h-12 items-center px-7 rounded-full bg-evening-forest text-white font-[family-name:var(--font-geist-sans)] font-semibold text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    Bli en bedre peer
                  </motion.span>
                  <motion.span
                    className="inline-flex h-12 items-center px-7 rounded-full bg-sky text-white font-[family-name:var(--font-geist-sans)] font-semibold text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    Finn din peer
                  </motion.span>
                </div>

                <p className="text-xs font-[family-name:var(--font-geist-sans)] font-semibold text-charcoal/40 uppercase tracking-wider mb-6">
                  Positive (mørk tekst / outline)
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  <motion.span
                    className="inline-flex h-12 items-center px-7 rounded-full border-2 border-charcoal/20 text-charcoal font-[family-name:var(--font-geist-sans)] font-medium text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    Sekundær handling
                  </motion.span>
                  <motion.span
                    className="inline-flex h-12 items-center px-7 rounded-full border-2 border-forest/30 text-forest font-[family-name:var(--font-geist-sans)] font-medium text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    Sekundær handling
                  </motion.span>
                </div>

                <p className="text-xs font-[family-name:var(--font-geist-sans)] font-semibold text-charcoal/40 uppercase tracking-wider mb-3">
                  Spesifikasjoner
                </p>
                <div className="text-sm text-charcoal/60 space-y-1">
                  <p>Font: Geist, Semi Bold 600 / Medium 500</p>
                  <p>Størrelse: 14–15px</p>
                  <p>Høyde: 44–56px</p>
                  <p>Padding: 24–32px horisontalt</p>
                  <p>Border-radius: 9999px (pill)</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== DESIGN TOKENS ===== */}
        <section className="py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <AnimatedSection>
              <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
                Design tokens
              </p>
              <h2 className="text-3xl md:text-4xl font-normal mb-12">
                Avrunding &amp; form
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex flex-wrap gap-6 mb-16">
                {radii.map((r) => (
                  <motion.div
                    key={r.value}
                    className="bg-white p-5 text-center"
                    style={{ borderRadius: r.value, minWidth: "120px" }}
                    whileHover={{ y: -4, boxShadow: "0 12px 30px -8px rgba(56,133,102,0.12)" }}
                    transition={{ duration: 0.3, ease: smoothEase }}
                  >
                    <div
                      className="w-16 h-16 bg-pastel-forest mx-auto mb-3"
                      style={{ borderRadius: r.value }}
                    />
                    <p className="font-semibold text-sm">{r.label}</p>
                    <p className="text-xs text-charcoal/40 font-[family-name:var(--font-geist-sans)]">
                      {r.value}
                    </p>
                    <p className="text-xs text-charcoal/50 mt-1">{r.usage}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* CSS Variables */}
            <AnimatedSection delay={0.15}>
              <p className="text-xs font-[family-name:var(--font-geist-sans)] font-semibold text-charcoal/40 uppercase tracking-wider mb-4">
                CSS Custom Properties
              </p>
              <div className="bg-evening-forest rounded-2xl p-6 md:p-8 overflow-x-auto">
                <pre className="text-sm text-bright-forest/80 font-[family-name:var(--font-geist-sans)] leading-relaxed whitespace-pre">
                  {cssVars}
                </pre>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ===== DOWNLOAD ALL ===== */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-normal mb-4">
                Trenger du noe mer?
              </h2>
              <p className="text-charcoal/60 mb-8 max-w-md mx-auto">
                Ta kontakt med oss hvis du trenger flere formater, filtyper
                eller hjelp med implementering.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="inline-block"
              >
                <Link
                  href="/#kontakt"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-forest text-white font-[family-name:var(--font-geist-sans)] font-semibold text-lg hover:bg-evening-forest transition-colors duration-300"
                >
                  Kontakt oss
                </Link>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
