"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Heart,
  Users,
  Activity,
  Coffee,
  Zap,
  ChevronDown,
  AlertCircle,
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

const useCases = [
  { icon: Briefcase, label: "Stress og press på jobben" },
  { icon: Activity, label: "Angst og uro i hverdagen" },
  { icon: Heart, label: "Samlivsbrudd eller familiesituasjoner" },
  { icon: Users, label: "Sykdom, hos deg selv eller nære" },
  { icon: Coffee, label: "Ensomhet og utenforskap" },
  { icon: Zap, label: "Utbrenthet og utmattelse" },
];

const steps = [
  {
    step: "1",
    title: "Du beskriver hva du trenger støtte med",
    desc: "Kort og anonymt. Du velger selv hvor mye du vil dele.",
    color: "bg-bright-forest",
  },
  {
    step: "2",
    title: "Du matches med en peer",
    desc: "Peerlo kobler deg med en sertifisert peer som har relevant egenerfaring.",
    color: "bg-bright-sky",
  },
  {
    step: "3",
    title: "Dere snakker trygt og anonymt",
    desc: "En samtale med noen som forstår hva du står i, uten venteliste.",
    color: "bg-pastel-forest",
  },
];

const faqs = [
  {
    q: "Er peer support det samme som terapi?",
    a: "Nei. Terapi er behandling utført av autorisert helsepersonell. Peer support er en samtale med et medmenneske som har egenerfaring. De to fyller ulike behov og bør ikke forveksles.",
  },
  {
    q: "Hvem kan bli peer?",
    a: "Alle som har opplevd noe vanskelig og ønsker å hjelpe andre gjennom lignende situasjoner. Peers gjennomgår opplæring og sertifisering før de kan støtte andre via Peerlo.",
  },
  {
    q: "Er det gratis for ansatte?",
    a: "Ja. Ansatte bruker Peerlo uten kostnad. Det er bedriften som abonnerer på tjenesten og gjør den tilgjengelig for sine ansatte.",
  },
  {
    q: "Hva om jeg trenger mer hjelp enn en peer kan gi?",
    a: "Peers er opplært til å kjenne grensene for hva de kan hjelpe med. Trenger du profesjonell hjelp, vil peeren oppfordre deg til å kontakte fastlege eller psykolog. Peerlo er ikke et krisetilbud.",
  },
];

export default function HvaErPeerSupport() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-20 bg-paper">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.p
            className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Forklart
          </motion.p>
          <motion.h1
            className="text-4xl md:text-6xl font-normal text-charcoal mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: smoothEase }}
          >
            Hva er peer support?
          </motion.h1>
          <motion.p
            className="text-xl text-charcoal/70 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9, ease: smoothEase }}
          >
            Peer support er samtaler med noen som selv har opplevd det du står i.
            Ikke behandling, ikke terapi – men menneskelig støtte fra noen som forstår.
          </motion.p>
        </div>
      </section>

      {/* ===== HVA ER EN PEER ===== */}
      <section className="py-16 md:py-20 bg-paper">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-pastel-forest/30">
              <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-xs uppercase tracking-widest mb-4">
                Hva er en peer?
              </p>
              <h2 className="text-2xl md:text-3xl font-normal mb-4 leading-snug">
                Et vanlig menneske med egenerfaring.
              </h2>
              <p className="text-charcoal/70 leading-relaxed">
                En peer har stått i noe av det samme som deg – stress, angst, samlivsbrudd,
                sykdom eller andre livssituasjoner – og ønsker å hjelpe andre gjennom det.
                En peer er ikke utdannet terapeut, og Peerlo er ikke et behandlingstilbud.
                Peers er opplært og sertifisert til å lytte og støtte, ikke til å behandle.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== BRUKSOMRÅDER ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-normal">
              Hva brukes peer support til?
            </h2>
            <p className="text-charcoal/60 mt-4 text-lg max-w-xl mx-auto leading-relaxed">
              Peer support passer for de fleste ting vi bærer på i hverdagen, men som
              ikke nødvendigvis krever profesjonell behandling.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {useCases.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.08}>
                <motion.div
                  className="bg-paper rounded-3xl p-6 flex items-center gap-4 border border-pastel-forest/20"
                  whileHover={{ y: -4, boxShadow: "0 16px 32px -8px rgba(56,133,102,0.12)" }}
                  transition={{ duration: 0.3, ease: smoothEase }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-bright-forest/40 flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.15, rotate: -6 }}
                    transition={springTransition}
                  >
                    <item.icon size={18} className="text-forest" />
                  </motion.div>
                  <span className="text-charcoal/80 font-medium text-sm leading-snug">
                    {item.label}
                  </span>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IKKE TERAPI ===== */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-normal mb-8 text-center">
              Peer support er ikke terapi
            </h2>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-pastel-forest/30 space-y-4">
              <p className="text-charcoal/70 leading-relaxed">
                Peer support og terapi er to forskjellige ting, og de fyller ulike behov.
                Terapi er behandling utført av autorisert helsepersonell, med mål om å
                behandle psykiske lidelser eller diagnoser. Peer support er en samtale
                med et medmenneske som har egenerfaring, uten behandlingsformål.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Peerlo er et lavterskeltilbud for deg som trenger noen å snakke med,
                ikke en erstatning for profesjonell hjelp. Trenger du behandling,
                oppfordrer vi deg til å kontakte fastlege eller psykolog.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FORSKNING ===== */}
      <section className="py-16 bg-paper">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-bright-forest/20 rounded-3xl p-8 border border-forest/10">
              <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-xs uppercase tracking-widest mb-3">
                Forskning og anerkjennelse
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Peer support er anerkjent som et lavterskeltilbud av blant andre WHO og
                flere nordiske helseorganisasjoner. Det er ikke et behandlingstilbud,
                men et supplement til eksisterende hjelpetilbud som kan bidra til at
                færre havner i krise.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== SLIK FUNGERER DET I PEERLO ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal">
              Slik fungerer det i Peerlo
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
                  <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-normal">Ofte stilte spørsmål</h2>
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

      {/* ===== ANSVARSFRASKRIVELSE ===== */}
      <section className="py-12 bg-paper">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex gap-4 items-start bg-white rounded-2xl p-6 border border-pastel-forest/30">
              <AlertCircle size={20} className="text-forest shrink-0 mt-0.5" />
              <p className="text-charcoal/60 text-sm leading-relaxed">
                Peerlo er ikke helsehjelp og erstatter ikke profesjonell behandling
                eller oppfølging. Trenger du akutt hjelp, kontakt fastlege, legevakt
                eller Mental Helse på 116 123.
              </p>
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
              Peer support, gjort tilgjengelig.
            </h2>
            <p className="text-xl text-charcoal/70 mb-10 max-w-xl mx-auto">
              Peerlo gjør peer support tilgjengelig for alle ansatte, anonymt og uten venteliste.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={springTransition}
              className="inline-block"
            >
              <Link
                href="/"
                className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-evening-forest text-white font-[family-name:var(--font-geist-sans)] font-semibold text-lg hover:bg-charcoal transition-colors duration-300 gap-2"
              >
                Se hvordan Peerlo fungerer
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
            "@type": "Article",
            "@id": "https://peerlo.no/hva-er-peer-support",
            url: "https://peerlo.no/hva-er-peer-support",
            headline: "Hva er peer support?",
            description:
              "Peer support er samtaler med noen som selv har opplevd det du star i. Ikke behandling, ikke terapi, men menneskelig stotte fra noen som forstar.",
            author: {
              "@type": "Organization",
              name: "Peerlo",
              url: "https://peerlo.no",
            },
            publisher: {
              "@type": "Organization",
              name: "Peerlo",
              url: "https://peerlo.no",
            },
            isPartOf: { "@id": "https://peerlo.no" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Hjem", item: "https://peerlo.no" },
                { "@type": "ListItem", position: 2, name: "Hva er peer support?", item: "https://peerlo.no/hva-er-peer-support" },
              ],
            },
            mainEntity: {
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          }),
        }}
      />
    </>
  );
}
