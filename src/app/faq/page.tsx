import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ofte stilte spørsmål om Peerlo",
  description:
    "Svar på de vanligste spørsmålene om Peerlo: hva er peer support, hvordan fungerer anonymitet, hva koster det for bedrifter, og hvem passer Peerlo for.",
  alternates: { canonical: "https://peerlo.no/faq" },
  openGraph: {
    title: "Ofte stilte spørsmål | Peerlo",
    description:
      "Svar på de vanligste spørsmålene om Peerlo og peer support i norsk arbeidsliv.",
    url: "https://peerlo.no/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ofte stilte spørsmål | Peerlo",
    description:
      "Svar på de vanligste spørsmålene om Peerlo og peer support i norsk arbeidsliv.",
  },
};

const faqs = [
  {
    question: "Hva er Peerlo?",
    answer:
      "Peerlo er en norsk digital plattform for peer support i arbeidslivet. Gjennom Peerlo kan ansatte anonymt koble seg med sertifiserte peers som har egenerfaring fra lignende utfordringer. Peerlo er ikke terapi, men lavterskel menneskelig støtte tilgjengelig når du trenger det. Peerlo tilbys av bedrifter som vil ta vare på sine ansatte og forebygge sykefravær.",
  },
  {
    question: "Hvordan fungerer Peerlo?",
    answer:
      "Prosessen er enkel: Du beskriver kort hva du trenger støtte med, anonymt. Peerlo matcher deg deretter med en sertifisert peer som har relevant egenerfaring. Deretter kan du starte en samtale direkte i appen. Du velger selv hva du vil snakke om og hvor mye du vil dele. Peers er tilgjengelige på ulike tider, inkludert kvelder og helger.",
  },
  {
    question: "Er Peerlo terapi?",
    answer:
      "Nei. Peerlo er ikke terapi, psykologbehandling eller krisehjelp. Peerlo er et supplement til profesjonell hjelp, ikke en erstatning. Peers er vanlige mennesker med egenerfaring, ikke helsepersonell. Hvis du er i krise eller trenger profesjonell hjelp, ber vi deg ta kontakt med fastlege, psykolog eller krisetelefonen.",
  },
  {
    question: "Hvem passer Peerlo for?",
    answer:
      "Peerlo passer for ansatte i norske bedrifter som står i noe vanskelig og ønsker å snakke med noen som forstår, uten at det føles som en stor terskel. Det kan være stress, arbeidspress, relasjonsproblemer, sorg, utbrenthet, angst eller andre livshendelser. Peerlo passer også for bedrifter og HR-avdelinger som vil gi ansatte et lavterskel støtteverktøy.",
  },
  {
    question: "Hvordan fungerer anonymiteten?",
    answer:
      "Ansatte kan bruke Peerlo uten at arbeidsgiver får vite hvem som har brukt tjenesten eller hva de har snakket om. Arbeidsgiver mottar kun anonymisert og aggregert innsikt, for eksempel hvilke temaer som er vanlige i organisasjonen, aldri informasjon om enkeltpersoner. Din samtale er mellom deg og peeren.",
  },
  {
    question: "Hva koster Peerlo for bedrifter?",
    answer:
      "Peerlo er i pilotfase og prisen avtales direkte med bedriften. Ta kontakt med Ole Aarre på ole@peerlo.no eller ring +47 988 11 908 for å diskutere en løsning som passer for din virksomhet.",
  },
  {
    question: "Hva er peer support?",
    answer:
      "Peer support er støtte fra et menneske som selv har hatt lignende erfaringer. Forskning viser at denne typen støtte kan være svært effektiv, særlig som et tidlig tiltak for dem som ikke ønsker eller er klare for profesjonell hjelp. En peer tilbyr ikke råd eller behandling, men lytter, deler og hjelper deg å finne veien videre.",
  },
  {
    question: "Hvordan blir man peer?",
    answer:
      "For å bli peer i Peerlo må du ha egenerfaring med utfordringer som andre kan dra nytte av, være personlig egnet til å lytte og støtte, og gjennom et kort intervju med oss. Etter godkjenning gjennomfører du et sertifiseringskurs. Du bestemmer selv når du er tilgjengelig og hva du vil snakke om. Meld din interesse på siden Bli en peer.",
  },
  {
    question: "Hvordan kan bedrifter bruke Peerlo?",
    answer:
      "Bedrifter lisenser Peerlo som et personalgode og forebyggende tiltak. Ansatte får tilgang gjennom appen og kan bruke den når de ønsker, anonymt. HR-avdelingen får et dashbord med anonymisert innsikt i organisasjonens psykiske helse-tendenser. Peerlo kan kombineres med eksisterende EAP-program, BHT og andre tilbud.",
  },
  {
    question: "Oppfyller Peerlo kravene i arbeidsmiljøloven?",
    answer:
      "Arbeidsmiljølovens paragraf 4-3 stiller krav til det psykososiale arbeidsmiljøet. Peerlo er et tiltak som hjelper bedrifter med å oppfylle dette kravet ved å gi ansatte tilgang til lavterskel støtte. Peerlo erstatter ikke andre plikter etter loven, men er et godt supplement til et helhetlig arbeidsmiljøarbeid.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://peerlo.no/faq#faqpage",
  name: "Ofte stilte spørsmål om Peerlo",
  url: "https://peerlo.no/faq",
  inLanguage: "nb-NO",
  isPartOf: { "@id": "https://peerlo.no/#website" },
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://peerlo.no" },
    { "@type": "ListItem", position: 2, name: "Ofte stilte spørsmål", item: "https://peerlo.no/faq" },
  ],
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-paper pt-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Hero */}
        <section className="bg-evening-forest pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-bright-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
              Svar på det du lurer på
            </p>
            <h1 className="text-4xl md:text-5xl font-normal text-white mb-6 leading-tight">
              Ofte stilte spørsmål om Peerlo
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Her finner du svar på de vanligste spørsmålene om Peerlo, peer support og hvordan tjenesten fungerer for ansatte og bedrifter.
            </p>
          </div>
        </section>

        {/* FAQ-liste */}
        <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border-b border-pastel-forest/30 py-8 first:pt-0"
              >
                <h2 className="text-xl md:text-2xl font-medium text-charcoal mb-4 leading-snug">
                  {faq.question}
                </h2>
                <p className="text-charcoal/70 text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white border-t border-pastel-forest/20 py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-normal text-charcoal mb-4">
              Fant du ikke svaret du lette etter?
            </h2>
            <p className="text-charcoal/60 text-lg mb-8 max-w-lg mx-auto">
              Ta gjerne kontakt direkte. Vi svarer raskt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ole@peerlo.no"
                className="inline-flex h-12 items-center justify-center px-8 rounded-full bg-evening-forest text-white font-[family-name:var(--font-geist-sans)] font-semibold hover:bg-charcoal transition-colors duration-300"
              >
                Send oss en e-post
              </a>
              <Link
                href="/om-peerlo"
                className="inline-flex h-12 items-center justify-center px-8 rounded-full border-2 border-evening-forest/30 text-evening-forest font-[family-name:var(--font-geist-sans)] font-medium hover:bg-evening-forest/5 transition-colors duration-300"
              >
                Les om Peerlo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
