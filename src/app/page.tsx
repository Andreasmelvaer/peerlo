"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Shield,
  Clock,
  Users,
  TrendingDown,
  Heart,
  Headphones,
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useRef, useEffect, useId } from "react";

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  mass: 0.8,
};

const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

const testimonials = [
  {
    quote:
      "Vi ser et tydelig behov for løsninger som gjør det enklere for ansatte å få støtte – før det utvikler seg til sykefravær. Peerlo fyller et tomrom mange virksomheter i dag ikke har gode svar på.",
    source: "Privat bedrift",
  },
  {
    quote: "Med Peerlo kunne vi fulgt opp våre ansatte på en mye bedre måte enn før.",
    source: "Privat bedrift",
  },
  {
    quote:
      "Vi har store utfordringer med sykefravær og ser at vi må prøve nye ting for å få sykefraværet ned. Det du prøver å få til med Peerlo ser interessant ut, og kan være aktuelt for oss å teste ut.",
    source: "Kommune",
  },
  {
    quote:
      "Peerlo vil, etter min mening, treffe spesielt godt i selskaper fra 50 ansatte og oppover – der det blir krevende å ha oversikt over hvordan folk faktisk har det.",
    source: "Privat bedrift",
  },
];

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: smoothEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TypingHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1, ease: smoothEase }}
      className="relative"
    >
      <div className="bg-white/15 backdrop-blur-md rounded-[20px] rounded-bl-[5px] px-6 py-5 shadow-lg border border-white/10 inline-block">
        <p className="text-3xl md:text-5xl font-normal leading-tight text-white">
          Hei.
        </p>
        <motion.p
          className="text-2xl md:text-4xl font-normal leading-tight mt-2 text-white/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: smoothEase }}
        >
          Hvordan har du det?<br />
          <span className="text-white/60 text-[0.5em]">(egentlig)</span>
        </motion.p>
      </div>
    </motion.div>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <motion.div
      className="border-b border-pastel-forest/30"
      whileHover={{ x: 4 }}
      transition={{ duration: 0.25, ease: smoothEase }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`faq-${id}`}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-semibold text-lg pr-4 transition-colors duration-300 group-hover:text-forest">
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.4, ease: smoothEase }}
        >
          <ChevronDown size={20} className="shrink-0 text-forest" />
        </motion.div>
      </button>
      <motion.div
        id={`faq-${id}`}
        role="region"
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: smoothEase }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-charcoal/70 leading-relaxed">{a}</p>
      </motion.div>
    </motion.div>
  );
}

function HoverCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -6,
        boxShadow: "0 20px 40px -12px rgba(56,133,102,0.15)",
      }}
      transition={{ duration: 0.35, ease: smoothEase }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], [0, 120]);
  const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0]);

  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden pt-16"
      >
        <div
          className="absolute inset-0 bg-evening-forest"
        />
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center w-full"
        >
          <div className="space-y-8">
            <TypingHero />
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: 0.8, ease: smoothEase }}
              className="space-y-4"
            >
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Snakk med noen som har vært der før.
              </p>
              <p className="text-white/60 leading-relaxed max-w-md">
                Peerlo kobler mennesker som står i noe vanskelig med peers som
                har vært gjennom lignende utfordringer.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.8, ease: smoothEase }}
              className="flex flex-col min-[420px]:flex-row gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={springTransition}
              >
                <Link
                  href="#cta"
                  className="inline-flex h-12 min-[420px]:h-14 items-center justify-center px-6 min-[420px]:px-8 rounded-full bg-white text-evening-forest font-[family-name:var(--font-geist-sans)] font-semibold text-base min-[420px]:text-lg hover:bg-bright-forest transition-colors duration-300"
                >
                  Book en demo
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={springTransition}
              >
                <Link
                  href="#hvordan"
                  className="inline-flex h-12 min-[420px]:h-14 items-center justify-center px-6 min-[420px]:px-8 rounded-full border-2 border-white/30 text-white font-[family-name:var(--font-geist-sans)] font-medium text-base min-[420px]:text-lg hover:bg-white/10 transition-colors duration-300"
                >
                  Se hvordan det fungerer
                </Link>
              </motion.div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 1.2, duration: 1, ease: smoothEase }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="hidden md:flex justify-center"
          >
            <div className="relative w-[280px]">
              <Image
                src="/images/mobile-profile.png"
                alt="Peerlo peer-profil"
                width={393}
                height={852}
                className="rounded-[40px] shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 1.2, ease: smoothEase }}
          className="absolute bottom-8 left-0 right-0 text-center text-evening-forest/30 text-sm font-[family-name:var(--font-geist-sans)] font-medium tracking-[0.3em] uppercase"
        >
          Your peer, right here
        </motion.p>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-normal mb-6">
              Hvor mange av dine ansatte sliter i stillhet akkurat nå?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-xl text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
              De fleste sier ingenting. Ikke fordi de ikke trenger hjelp – men
              fordi terskelen er for høy. Peerlo senker den terskelen, og gir
              ansatte støtte før problemene vokser seg store.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SOLUTION ===== */}
      <section className="py-24 md:py-32 bg-bright-forest/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-normal mb-6">
                Peer support.
                <br />
                <span className="text-forest">Gjort tilgjengelig.</span>
              </h2>
              <p className="text-xl text-charcoal/70 leading-relaxed mb-8">
                Peerlo kobler ansatte med peers som har opplevd lignende
                utfordringer. Noen som forstår. Noen som har vært der.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Shield, text: "Anonymt" },
                  { icon: Clock, text: "Tilgjengelig når du trenger det" },
                  { icon: Users, text: "Mennesker med egenerfaring" },
                ].map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={text}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.3 + i * 0.12,
                      duration: 0.6,
                      ease: smoothEase,
                    }}
                  >
                    <motion.div
                      className="w-10 h-10 rounded-full bg-forest/10 flex items-center justify-center"
                      whileHover={{
                        scale: 1.15,
                        backgroundColor: "rgba(56,133,102,0.25)",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon size={18} className="text-forest" />
                    </motion.div>
                    <span className="text-lg">{text}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <Image
                  src="/images/mobile-seeker.png"
                  alt="Peerlo seeker-opplevelse"
                  width={393}
                  height={852}
                  className="w-[260px] rounded-[40px] shadow-xl"
                />
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section id="hvordan" className="py-24 md:py-32 bg-paper scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal">
              Slik fungerer Peerlo
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Velg hva du står i",
                desc: "Beskriv kort hva du trenger støtte med. Alt er anonymt.",
                color: "bg-bright-forest",
              },
              {
                step: "2",
                title: "Bli matchet med en peer",
                desc: "Vi kobler deg med en sertifisert peer som har relevant egenerfaring.",
                color: "bg-bright-sky",
              },
              {
                step: "3",
                title: "Start en samtale",
                desc: "Snakk trygt og fritt med noen som virkelig forstår.",
                color: "bg-pastel-forest",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <HoverCard className="bg-white rounded-3xl p-8 h-full cursor-default">
                  <motion.div
                    className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-2xl font-semibold text-evening-forest mb-6`}
                    whileHover={{ scale: 1.1, rotate: -4 }}
                    transition={springTransition}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-2xl font-medium mb-3">{item.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed">
                    {item.desc}
                  </p>
                </HoverCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCT SHOWCASE ===== */}
      <section className="py-24 md:py-32 bg-evening-forest overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <motion.p
              className="text-bright-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4"
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: smoothEase }}
            >
              For HR og ledere
            </motion.p>
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">
              Innsikt som gjør en forskjell
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Peerlo gir HR anonymisert, aggregert innsikt i hva ansatte
              faktisk står i – slik at dere kan handle tidlig, ikke for sent.
              Se tendenser, emnekart og bruksutvikling i sanntid.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <img
                src="/images/dashboard-tablet.png"
                alt="Peerlo HR Dashboard – anonymisert innsikt i psykisk helse-tendenser for HR-avdelinger"
                className="w-full max-w-4xl mx-auto"
                loading="lazy"
              />
            </motion.div>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  label: "Oppslutning",
                  desc: "Se hvor mange ansatte som bruker Peerlo aktivt",
                },
                {
                  label: "Emnekart",
                  desc: "Forstå hvilke temaer som preger arbeidsplassen",
                },
                {
                  label: "Tendenser",
                  desc: "Oppdage endringer i symptomtrykk over tid",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  className="bg-white/10 backdrop-blur rounded-2xl p-6 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4 + i * 0.1,
                    duration: 0.6,
                    ease: smoothEase,
                  }}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.18)",
                    y: -4,
                  }}
                >
                  <p className="text-white font-semibold text-lg mb-1">
                    {item.label}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FOR EMPLOYERS ===== */}
      <section id="bedrifter" className="py-24 md:py-32 bg-paper scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-normal mb-6">
                Før det blir{" "}
                <span className="text-forest">sykmelding</span>
              </h2>
              <p className="text-xl text-charcoal/70 leading-relaxed mb-8">
                Peerlo hjelper virksomheter med å gi ansatte tidlig støtte –
                før problemene eskalerer.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    icon: TrendingDown,
                    title: "Lavere sykefravær",
                    desc: "Tidlig støtte reduserer risikoen for langvarig fravær.",
                  },
                  {
                    icon: Heart,
                    title: "Sterkere kultur",
                    desc: "En arbeidsplass der mennesker blir sett og ivaretatt.",
                  },
                  {
                    icon: Headphones,
                    title: "Tilgjengelig støtte",
                    desc: "Peer support når som helst – uten venteliste.",
                  },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + i * 0.12,
                      duration: 0.6,
                      ease: smoothEase,
                    }}
                  >
                    <HoverCard className="bg-white rounded-2xl p-6 flex gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-bright-sky/50 flex items-center justify-center shrink-0"
                        whileHover={{ scale: 1.15, rotate: -6 }}
                        transition={springTransition}
                      >
                        <Icon size={22} className="text-evening-sky" />
                      </motion.div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{title}</h3>
                        <p className="text-charcoal/60 text-sm leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    </HoverCard>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
              Hva sier virksomhetene?
            </p>
            <h2 className="text-4xl md:text-5xl font-normal">
              Tilbakemeldinger fra markedet
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div
                  className="bg-paper rounded-3xl p-8 md:p-10 flex flex-col h-full border border-pastel-forest/20"
                  whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(56,133,102,0.12)" }}
                  transition={{ duration: 0.35, ease: smoothEase }}
                >
                  <span className="text-forest/20 font-serif text-7xl leading-none select-none mb-2">&ldquo;</span>
                  <p className="text-charcoal/80 text-lg leading-relaxed flex-1 -mt-4">
                    {t.quote}
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="w-6 h-0.5 bg-forest/40 rounded-full" />
                    <span className="text-sm font-[family-name:var(--font-geist-sans)] font-medium text-charcoal/50">
                      {t.source}
                    </span>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>


      {/* ===== MEDIA MENTION ===== */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <motion.a
              href="https://www.naeringsforeningen.no/nyheter/medlem-nummer-100-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row gap-8 items-center bg-paper rounded-3xl overflow-hidden border border-pastel-forest/20 hover:border-forest/30 transition-colors duration-300"
              whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(56,133,102,0.12)" }}
              transition={{ duration: 0.35, ease: smoothEase }}
            >
              <div className="md:w-72 shrink-0 overflow-hidden">
                <motion.img
                  src="/images/naeringsforeningen-article.png"
                  alt="Peerlo omtalt i Naeringsforeningen i Stavanger som deres hundrede medlem"
                  className="w-full h-48 md:h-full object-cover object-top"
                  loading="lazy"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5, ease: smoothEase }}
                />
              </div>
              <div className="p-8 md:pl-2 flex flex-col gap-3">
                <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-xs uppercase tracking-widest">
                  Næringsforeningen · I media
                </p>
                <h3 className="text-2xl md:text-3xl font-normal text-charcoal group-hover:text-forest transition-colors duration-300 leading-snug">
                  – Det er mange som sliter i stillhet rundt omkring på arbeidsplassene
                </h3>
                <p className="text-charcoal/60 leading-relaxed">
                  Peerlo ble valgt ut som medlem nummer 100 i Næringsforeningen i 2026.
                </p>
                <div className="flex items-center gap-2 text-forest text-sm font-medium mt-2">
                  <span>Les artikkelen</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.a>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 md:py-32 bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HowTo",
              "@id": "https://peerlo.no/#howto",
              name: "Slik fungerer Peerlo",
              description: "Slik kobler Peerlo deg med en peer som forstår.",
              step: [
                {
                  "@type": "HowToStep",
                  position: 1,
                  name: "Velg hva du står i",
                  text: "Beskriv kort hva du trenger støtte med. Alt er anonymt.",
                },
                {
                  "@type": "HowToStep",
                  position: 2,
                  name: "Bli matchet med en peer",
                  text: "Peerlo kobler deg med en sertifisert peer som har relevant egenerfaring.",
                },
                {
                  "@type": "HowToStep",
                  position: 3,
                  name: "Start en samtale",
                  text: "Snakk trygt og fritt med noen som virkelig forstår.",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://peerlo.no/#faqpage",
              mainEntity: [
                { "@type": "Question", name: "Er Peerlo terapi?", acceptedAnswer: { "@type": "Answer", text: "Nei. Peerlo er ikke terapi eller behandling. Det er samtaler med mennesker som selv har opplevd lignende utfordringer. Peerlo er et supplement til profesjonell hjelp, ikke en erstatning." } },
                { "@type": "Question", name: "Hvem er peers?", acceptedAnswer: { "@type": "Answer", text: "Peers er mennesker med egenerfaring fra utfordringer som angst, samlivsbrudd, stress, sykdom eller andre livssituasjoner, og som onsker a stotte andre. De er sertifisert av Peerlo." } },
                { "@type": "Question", name: "Er det anonymt?", acceptedAnswer: { "@type": "Answer", text: "Ja. Ansatte kan bruke Peerlo anonymt. Arbeidsgiver far kun aggregert innsikt, aldri informasjon om enkeltpersoner." } },
                { "@type": "Question", name: "Nar kan man bruke Peerlo?", acceptedAnswer: { "@type": "Answer", text: "Nar som helst. Nar peers er tilgjengelige, ogsa pa kvelder, i helger og i ferier." } },
                { "@type": "Question", name: "Hva om noen trenger profesjonell hjelp?", acceptedAnswer: { "@type": "Answer", text: "Peerlo er ikke en erstatning for profesjonell hjelp. Hvis noen trenger mer stotte, oppfordres de til a kontakte fastlege, psykolog eller krisetelefonen." } },
                { "@type": "Question", name: "Hvorfor tilbyr arbeidsgivere Peerlo?", acceptedAnswer: { "@type": "Answer", text: "Fordi tidlig stotte kan gjore en stor forskjell. Bedrifter bruker Peerlo for a forebygge sykefravær og styrke det psykososiale arbeidsmiljoet." } },
                { "@type": "Question", name: "Hva er peer support?", acceptedAnswer: { "@type": "Answer", text: "Peer support er stotte fra et menneske som selv har hatt lignende erfaringer. Forskning viser at denne typen stotte er svart effektiv, saerlig som et tidlig tiltak for dem som ikke onsker eller er klare for profesjonell hjelp." } },
                { "@type": "Question", name: "Hva koster Peerlo for bedrifter?", acceptedAnswer: { "@type": "Answer", text: "Peerlo er i pilotfase og prisen avtales direkte. Ta kontakt pa ole@peerlo.no for mer informasjon." } },
              ],
            }),
          }}
        />
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-normal">
              Ofte stilte spørsmål
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div>
              <FAQItem
                q="Hva er peer support?"
                a="Peer support er samtaler med noen som selv har opplevd lignende utfordringer. Ikke terapi, men menneskelig støtte fra noen som forstår hva du står i. Les mer på peerlo.no/hva-er-peer-support."
              />
              <FAQItem
                q="Er Peerlo terapi?"
                a="Nei. Peerlo er ikke terapi eller behandling. Det er samtaler med mennesker som selv har opplevd lignende utfordringer."
              />
              <FAQItem
                q="Hvem er peers?"
                a="Peers er mennesker med egenerfaring fra utfordringer som angst, samlivsbrudd, stress, sykdom eller andre livssituasjoner – og som ønsker å støtte andre."
              />
              <FAQItem
                q="Er det anonymt?"
                a="Ja. Ansatte kan bruke Peerlo anonymt. Arbeidsgiver får kun aggregert innsikt – aldri informasjon om enkeltpersoner."
              />
              <FAQItem
                q="Når kan man bruke Peerlo?"
                a="Når som helst. Når peers er tilgjengelige – også på kvelder, i helger og i ferier."
              />
              <FAQItem
                q="Hva om noen trenger profesjonell hjelp?"
                a="Peerlo er ikke en erstatning for profesjonell hjelp. Hvis noen trenger mer støtte, oppfordres de til å kontakte helsepersonell."
              />
              <FAQItem
                q="Hvorfor tilbyr arbeidsgivere Peerlo?"
                a="Fordi tidlig støtte kan gjøre en stor forskjell – før utfordringer utvikler seg til sykefravær."
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        id="cta"
        className="py-24 md:py-32 relative overflow-hidden scroll-mt-16"
        style={{
          backgroundImage:
            "linear-gradient(168deg, #F5F3F0 20%, #E6F4EC 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <AnimatedSection>
            <motion.div
              className="flex justify-center mb-10"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: smoothEase }}
              whileHover={{ scale: 1.04, rotate: 1 }}
            >
              <Image
                src="/images/app-splash.png"
                alt="Peerlo app – Your peer, right here"
                width={393}
                height={852}
                className="w-[140px] rounded-[28px] shadow-2xl"
                loading="lazy"
              />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-normal text-evening-forest mb-6">
              Alle trenger noen som forstår.
            </h2>
            <p className="text-xl text-charcoal/70 mb-10 max-w-xl mx-auto">
              Bli med i piloten og gi ansatte tidlig støtte – før problemene
              eskalerer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={springTransition}
              >
                <Link
                  href="#kontakt"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-evening-forest text-white font-[family-name:var(--font-geist-sans)] font-semibold text-lg hover:bg-charcoal transition-colors duration-300 gap-2"
                >
                  Bli med i piloten
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={springTransition}
              >
                <Link
                  href="#kontakt"
                  className="inline-flex h-12 min-[420px]:h-14 items-center justify-center px-6 min-[420px]:px-8 rounded-full border-2 border-evening-forest/30 text-evening-forest font-[family-name:var(--font-geist-sans)] font-medium text-base min-[420px]:text-lg hover:bg-evening-forest/10 transition-colors duration-300"
                >
                  Book en demo
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="kontakt" className="py-24 md:py-32 bg-paper scroll-mt-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-normal mb-4">
              Vil du vite mer om Peerlo?
            </h2>
            <p className="text-xl text-charcoal/70 mb-10">
              Jeg tar gjerne en prat.
            </p>
            <motion.div
              className="bg-white rounded-3xl p-8 md:p-12 inline-block text-left"
              whileHover={{
                boxShadow: "0 25px 60px -15px rgba(56,133,102,0.2)",
              }}
              transition={{ duration: 0.4, ease: smoothEase }}
            >
              <p className="text-2xl font-medium mb-1">Ole Aarre</p>
              <p className="text-charcoal/60 mb-6">Gründer av Peerlo</p>
              <div className="space-y-3">
                <motion.a
                  href="mailto:ole@peerlo.no"
                  className="flex items-center gap-3 text-forest hover:text-evening-forest transition-colors duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                >
                  <Mail size={18} />
                  <span>ole@peerlo.no</span>
                </motion.a>
                <motion.a
                  href="tel:+4798811908"
                  className="flex items-center gap-3 text-forest hover:text-evening-forest transition-colors duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                >
                  <Phone size={18} />
                  <span>+47 988 11 908</span>
                </motion.a>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </>
  );
}
