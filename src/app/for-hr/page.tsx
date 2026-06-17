"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  EyeOff,
  Clock,
  BarChart3,
  ShieldCheck,
  FileText,
  AlertCircle,
  ChevronDown,
} from "lucide-react";
import { useState, useId } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const smoothEase = [0.25, 0.46, 0.45, 0.94] as const;

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
  mass: 0.8,
};

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
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: smoothEase }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-charcoal/70 leading-relaxed">{a}</p>
      </motion.div>
    </motion.div>
  );
}

const problems = [
  {
    icon: AlertCircle,
    title: "Du ser det for sent",
    desc: "Når en ansatt sykemeldes har problemet ofte bygget seg opp i måneder. Uten løpende innsikt hadde du ingen mulighet til å gripe inn tidligere.",
  },
  {
    icon: EyeOff,
    title: "Terskelen er for høy",
    desc: "BHT og EAP brukes for sjelden og for sent. Ansatte oppsøker ikke hjelp før situasjonen er kritisk, og da er skaden allerede skjedd.",
  },
  {
    icon: BarChart3,
    title: "Du mangler data",
    desc: "Medarbeiderundersøkelser gir øyeblikksbilder to ganger i året. Peerlo gir deg løpende innsikt i hva som faktisk preger organisasjonen akkurat nå.",
  },
];

const dashboardFeatures = [
  "Anonymisert emnekart over hva ansatte sliter med",
  "Trender i symptomtrykk over tid",
  "Bruksstatistikk per avdeling, aldri per person",
  "Varsler ved uvanlige mønstre",
  "Eksportbare rapporter for ledermøter",
];

const steps = [
  {
    step: "1",
    title: "Onboarding",
    desc: "Vi setter opp løsningen og tilpasser den til din virksomhet. Tar under én uke.",
    color: "bg-bright-forest",
  },
  {
    step: "2",
    title: "Kommunikasjon",
    desc: "Vi hjelper deg med å fortelle ansatte om Peerlo på en måte som senker terskelen for bruk.",
    color: "bg-bright-sky",
  },
  {
    step: "3",
    title: "Løpende innsikt",
    desc: "Du følger med i dashbordet og kan handle på trender før de eskalerer til sykemeldinger.",
    color: "bg-pastel-forest",
  },
];

const faqs = [
  {
    q: "Kan vi se hvem som bruker Peerlo?",
    a: "Nei. Ansatte er alltid anonyme. HR ser kun aggregerte data på tvers av organisasjonen, aldri informasjon om enkeltpersoner.",
  },
  {
    q: "Erstatter Peerlo BHT?",
    a: "Nei. Peerlo er et lavterskeltilbud som kompletterer BHT, ikke erstatter det. BHT håndterer det som krever faglig oppfølging, Peerlo tar seg av de tidlige samtalene.",
  },
  {
    q: "Hva skjer hvis en ansatt er i krise?",
    a: "Peers er opplært til å identifisere krisesituasjoner og henvise videre til profesjonell hjelp. Peerlo er ikke en krisetelefon, men peers vet hva de skal gjøre hvis situasjonen tilsier det.",
  },
  {
    q: "Hvordan dokumenterer vi bruken?",
    a: "Via dashbordet, som gir eksportbare rapporter til internkontroll og ledelsesrapportering. Du kan dokumentere at tilbudet finnes og følge bruksutviklingen over tid.",
  },
  {
    q: "Hva koster det?",
    a: "Prisen settes per virksomhet basert på antall ansatte. Ta kontakt for et tilbud tilpasset din organisasjon.",
  },
];

export default function ForHR() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-16 bg-evening-forest">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: smoothEase }}
          className="relative max-w-4xl mx-auto px-6 py-24 md:py-32 text-center"
        >
          <motion.p
            className="text-bright-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Peerlo for HR
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-normal text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: smoothEase }}
          >
            Fang opp utfordringer
            <br />
            <span className="text-bright-forest">før de blir sykemeldinger</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: smoothEase }}
          >
            Som HR-ansvarlig ser du ofte konsekvensene, men sjelden årsaken. Peerlo
            gir deg innsikten du mangler, og ansatte støtten de trenger, før det er for sent.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: smoothEase }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={springTransition}>
              <Link
                href="/#kontakt"
                className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-white text-evening-forest font-[family-name:var(--font-geist-sans)] font-semibold text-lg hover:bg-bright-forest transition-colors duration-300 gap-2"
              >
                Book en HR-demo
                <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={springTransition}>
              <Link
                href="#dashbord"
                className="inline-flex h-14 items-center justify-center px-8 rounded-full border-2 border-white/30 text-white font-[family-name:var(--font-geist-sans)] font-medium text-lg hover:bg-white/10 transition-colors duration-300"
              >
                Se dashbordet
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ===== PROBLEM ===== */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal">
              Problemet du kjenner igjen
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.12}>
                <motion.div
                  className="bg-white rounded-3xl p-8 h-full border border-pastel-forest/20"
                  whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(56,133,102,0.12)" }}
                  transition={{ duration: 0.35, ease: smoothEase }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-bright-forest/40 flex items-center justify-center mb-5"
                    whileHover={{ scale: 1.15, rotate: -6 }}
                    transition={springTransition}
                  >
                    <p.icon size={22} className="text-forest" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed text-sm">{p.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DASHBORD ===== */}
      <section id="dashbord" className="py-24 md:py-32 bg-evening-forest overflow-hidden scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-bright-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
              HR-dashbordet
            </p>
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">
              Hva Peerlo gir deg
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Et oversiktlig dashbord med anonymisert, aggregert innsikt, slik at du
              kan ta beslutninger basert på data, ikke magefølelse.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: smoothEase }}
              >
                <img
                  src="/images/dashboard-tablet.png"
                  alt="Peerlo HR-dashbord med anonymisert innsikt om ansattes psykiske helse"
                  className="w-full rounded-2xl"
                  loading="lazy"
                />
              </motion.div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <ul className="space-y-4">
                {dashboardFeatures.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-white/80"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: smoothEase }}
                  >
                    <ShieldCheck size={20} className="text-bright-forest shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== UTRULLING ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal">
              Slik ruller du det ut
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <motion.div
                  className="bg-paper rounded-3xl p-8 h-full border border-pastel-forest/10"
                  whileHover={{ y: -6, boxShadow: "0 20px 40px -12px rgba(56,133,102,0.15)" }}
                  transition={{ duration: 0.35, ease: smoothEase }}
                >
                  <motion.div
                    className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center text-2xl font-semibold text-evening-forest mb-6`}
                    whileHover={{ scale: 1.1, rotate: -4 }}
                    transition={springTransition}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-2xl font-medium mb-3">{item.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== LOVVERKET ===== */}
      <section className="py-16 md:py-20 bg-paper">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-pastel-forest/30 flex gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-bright-sky/50 flex items-center justify-center shrink-0">
                <FileText size={22} className="text-evening-sky" />
              </div>
              <div>
                <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-xs uppercase tracking-widest mb-3">
                  Peerlo og arbeidsmiljøloven
                </p>
                <p className="text-charcoal/70 leading-relaxed">
                  Arbeidsmiljøloven stiller krav til et fullt forsvarlig psykososialt arbeidsmiljø.
                  Peerlo er ikke et lovpålagt tiltak, men et praktisk verktøy som hjelper deg å
                  etterleve intensjonen bak loven, ved å gi ansatte lavterskel støtte og gi HR
                  løpende innsikt i hva som faktisk rører seg i organisasjonen.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-normal">
              Spørsmål fra HR
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div>
              {faqs.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{ backgroundImage: "linear-gradient(168deg, #F5F3F0 20%, #E6F4EC 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-normal text-evening-forest mb-6">
              Vil du se hvordan det ser ut for din virksomhet?
            </h2>
            <p className="text-xl text-charcoal/70 mb-10 max-w-xl mx-auto">
              Vi viser deg dashbordet og tilpasser en demo til din organisasjon.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={springTransition}
              className="inline-block"
            >
              <Link
                href="/#kontakt"
                className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-evening-forest text-white font-[family-name:var(--font-geist-sans)] font-semibold text-lg hover:bg-charcoal transition-colors duration-300 gap-2"
              >
                Book en HR-demo
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://peerlo.no/for-hr",
            url: "https://peerlo.no/for-hr",
            name: "Peerlo for HR",
            description:
              "Peerlo gir HR-avdelingen løpende, anonymisert innsikt i ansattes psykiske helse og gir ansatte lavterskel støtte før problemene eskalerer til sykemeldinger.",
            isPartOf: { "@id": "https://peerlo.no" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Hjem", item: "https://peerlo.no" },
                { "@type": "ListItem", position: 2, name: "For HR", item: "https://peerlo.no/for-hr" },
              ],
            },
            "@graph": [
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />
    </>
  );
}
