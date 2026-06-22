"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Users,
  TrendingDown,
  BarChart3,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
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

const stats = [
  {
    number: "16",
    unit: "dager",
    label: "Gjennomsnittlig lengde på psykisk relatert sykemelding i Norge",
  },
  {
    number: "70%",
    unit: "",
    label: "av ansatte sier de ikke ville snakke med leder om psykiske utfordringer",
  },
  {
    number: "6–8x",
    unit: "",
    label: "høyere kostnad ved sykemelding sammenlignet med tidlig forebygging",
  },
];

const features = [
  {
    icon: Shield,
    title: "Anonymt for ansatte",
    desc: "Ansatte bruker Peerlo anonymt. Arbeidsgiver får aldri vite hvem som bruker tjenesten.",
  },
  {
    icon: BarChart3,
    title: "Aggregert innsikt for HR",
    desc: "HR-dashbordet viser trender, temaer og bruksmønstre uten å eksponere enkeltpersoner.",
  },
  {
    icon: Clock,
    title: "Tilgjengelig hele døgnet",
    desc: "Ingen venteliste. Ansatte får støtte når de trenger det, også på kveld og i helger.",
  },
  {
    icon: Users,
    title: "Sertifiserte peers",
    desc: "Alle peers er sertifiserte og har egenerfaring med lignende utfordringer.",
  },
  {
    icon: TrendingDown,
    title: "Lavere sykefravær",
    desc: "Tidlig støtte reduserer risikoen for at utfordringer utvikler seg til langvarig fravær.",
  },
  {
    icon: HeartHandshake,
    title: "GDPR-trygt",
    desc: "Peerlo er bygget med personvern i kjernen og etterlever norsk og europeisk lovgivning.",
  },
];

const steps = [
  {
    step: "1",
    title: "Onboarding",
    desc: "Vi setter opp Peerlo for din bedrift, tilpasser løsningen og hjelper dere å rulle det ut til de ansatte.",
    color: "bg-bright-forest",
  },
  {
    step: "2",
    title: "Ansatte bruker Peerlo",
    desc: "Ansatte logger inn anonymt, velger hva de trenger støtte med, og blir matchet med en peer.",
    color: "bg-bright-sky",
  },
  {
    step: "3",
    title: "HR får innsikt",
    desc: "Via dashbordet ser HR aggregerte trender, uten at enkeltansatte kan identifiseres.",
    color: "bg-pastel-forest",
  },
];

const forWhom = [
  "Bedrifter med 50 ansatte og oppover",
  "Kommuner og offentlig sektor",
  "HR-avdelinger som vil forebygge sykefravær",
  "Ledere som ønsker en tryggere samtalekultur",
  "Organisasjoner med høyt arbeidspress eller hyppige omstillinger",
];

export default function ForBedrifter() {
  return (
    <>
      <Navbar />

      {/* ===== HERO ===== */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-16 bg-evening-forest">
        <div className="relative w-full max-w-6xl mx-auto px-6 py-24 md:py-32 flex flex-col md:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: smoothEase }}
            className="flex-1 text-center md:text-left"
          >
            <motion.p
              className="text-bright-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Peerlo for bedrifter
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl font-normal text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: smoothEase }}
            >
              Før det blir
              <br />
              <span className="text-bright-forest">en sykemelding</span>
            </motion.h1>
            <motion.p
              className="text-xl text-white/70 max-w-xl leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.9, ease: smoothEase }}
            >
              Peerlo gir ansatte et sted å gå, anonymt, tilgjengelig og uten venteliste.
              En investering i menneskene som driver bedriften din.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: smoothEase }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={springTransition}>
                <Link
                  href="/#kontakt"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-full bg-white text-evening-forest font-[family-name:var(--font-geist-sans)] font-semibold text-lg hover:bg-bright-forest transition-colors duration-300 gap-2"
                >
                  Book en demo
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} transition={springTransition}>
                <Link
                  href="#hvordan"
                  className="inline-flex h-14 items-center justify-center px-8 rounded-full border-2 border-white/30 text-white font-[family-name:var(--font-geist-sans)] font-medium text-lg hover:bg-white/10 transition-colors duration-300"
                >
                  Se hvordan det fungerer
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden md:flex flex-col gap-3 flex-shrink-0 w-64"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: smoothEase }}
          >
            <div className="self-start max-w-[85%] bg-white/10 text-white/75 rounded-2xl rounded-bl-sm px-4 py-3 text-base leading-relaxed">
              Hei! Hva fikk deg til å logge inn i dag?
            </div>
            <div className="self-end max-w-[85%] bg-bright-forest/20 text-bright-forest/90 rounded-2xl rounded-br-sm px-4 py-3 text-base leading-relaxed">
              Vet ikke helt om dette er noe for meg egentlig
            </div>
            <div className="self-start max-w-[85%] bg-white/10 text-white/75 rounded-2xl rounded-bl-sm px-4 py-3 text-base leading-relaxed">
              Det er helt greit. Hva skjer hos deg for tida?
            </div>
            <div className="self-end max-w-[85%] bg-bright-forest/20 text-bright-forest/90 rounded-2xl rounded-br-sm px-4 py-3 text-base leading-relaxed">
              Har bare ikke sovet ordentlig på lenge
            </div>
            <div className="self-start max-w-[85%] bg-white/10 text-white/75 rounded-2xl rounded-bl-sm px-4 py-3 text-base leading-relaxed">
              Skjer det noe spesielt, eller bare generelt urolig?
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== STATISTIKK ===== */}
      <section className="py-20 bg-paper">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.12}>
                <motion.div
                  className="bg-white rounded-3xl p-8 text-center border border-pastel-forest/20"
                  whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(56,133,102,0.12)" }}
                  transition={{ duration: 0.35, ease: smoothEase }}
                >
                  <p className="text-4xl md:text-5xl font-normal text-forest mb-1">
                    {stat.number}
                    {stat.unit && <span className="text-2xl ml-1">{stat.unit}</span>}
                  </p>
                  <p className="text-charcoal/60 text-sm leading-relaxed mt-3">{stat.label}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HVORDAN DET FUNGERER ===== */}
      <section id="hvordan" className="py-24 md:py-32 bg-paper scroll-mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
              For bedriften
            </p>
            <h2 className="text-4xl md:text-5xl font-normal">
              Slik fungerer Peerlo for bedriften
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.15}>
                <motion.div
                  className="bg-white rounded-3xl p-8 h-full border border-pastel-forest/10"
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

      {/* ===== DASHBOARD ===== */}
      <section className="py-24 md:py-32 bg-evening-forest overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <p className="text-bright-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
              HR-innsikt
            </p>
            <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">
              Forstå hva som rører seg i organisasjonen
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Peerlo-dashbordet gir HR aggregert, anonymisert innsikt i hvilke temaer som
              preger arbeidsplassen, slik at dere kan handle tidlig.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: smoothEase }}
            >
              <img
                src="/images/dashboard-tablet.png"
                alt="Peerlo HR-dashboard med anonymisert innsikt om ansattes psykiske helse"
                className="w-full max-w-4xl mx-auto"
                loading="lazy"
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-normal">
              Hva bedriften får med Peerlo
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.1}>
                <motion.div
                  className="bg-paper rounded-3xl p-8 h-full border border-pastel-forest/20"
                  whileHover={{ y: -4, boxShadow: "0 20px 40px -12px rgba(56,133,102,0.10)" }}
                  transition={{ duration: 0.35, ease: smoothEase }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-bright-forest/40 flex items-center justify-center mb-5"
                    whileHover={{ scale: 1.15, rotate: -6 }}
                    transition={springTransition}
                  >
                    <f.icon size={22} className="text-forest" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-charcoal/60 leading-relaxed text-sm">{f.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HVEM PASSER DET FOR ===== */}
      <section className="py-24 md:py-32 bg-paper">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
                Hvem passer Peerlo for?
              </p>
              <h2 className="text-4xl font-normal mb-6">
                For virksomheter som tar ansatte på alvor
              </h2>
              <p className="text-charcoal/70 leading-relaxed">
                Peerlo passer best for virksomheter der det er krevende å ha full oversikt
                over hvordan ansatte faktisk har det, og der tidlig støtte kan utgjøre en
                stor forskjell.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <ul className="space-y-4">
                {forWhom.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease: smoothEase }}
                  >
                    <CheckCircle2 size={20} className="text-forest shrink-0 mt-0.5" />
                    <span className="text-charcoal/80 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== FOR HR LENKE ===== */}
      <section className="py-12 bg-white border-t border-pastel-forest/20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <motion.div
              className="flex flex-col md:flex-row items-center justify-between gap-6 bg-paper rounded-3xl px-8 py-6 border border-pastel-forest/20"
              whileHover={{ boxShadow: "0 12px 30px -8px rgba(56,133,102,0.10)" }}
              transition={{ duration: 0.3, ease: smoothEase }}
            >
              <div>
                <p className="font-semibold text-charcoal mb-1">Er du HR-ansvarlig?</p>
                <p className="text-charcoal/60 text-sm leading-relaxed">
                  Vi har en egen side med informasjon om dashbordet, utrulling og spørsmål fra HR-avdelinger.
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} transition={springTransition} className="shrink-0">
                <Link
                  href="/for-hr"
                  className="inline-flex h-11 items-center justify-center px-6 rounded-full bg-forest text-white font-[family-name:var(--font-geist-sans)] font-medium text-sm hover:bg-evening-forest transition-colors duration-300 gap-2"
                >
                  Se siden for HR
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </motion.div>
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
              Klar for å gi ansatte bedre støtte?
            </h2>
            <p className="text-xl text-charcoal/70 mb-10 max-w-xl mx-auto">
              Ta kontakt for en uforpliktende prat om hvordan Peerlo kan passe for din virksomhet.
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
                Book en demo
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
            "@id": "https://peerlo.no/for-bedrifter",
            url: "https://peerlo.no/for-bedrifter",
            name: "Peerlo for bedrifter",
            description:
              "Gi ansatte lavterskel peer support-støtte før problemene eskalerer. Peerlo er løsningen for norske bedrifter som vil forebygge sykefravær og bygge en sterkere samtalekultur.",
            isPartOf: { "@id": "https://peerlo.no" },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Hjem", item: "https://peerlo.no" },
                { "@type": "ListItem", position: 2, name: "For bedrifter", item: "https://peerlo.no/for-bedrifter" },
              ],
            },
          }),
        }}
      />
    </>
  );
}
