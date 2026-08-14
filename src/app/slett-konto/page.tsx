import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Slett konto og data",
  description:
    "Slik sletter du kontoen og dataene dine i Peerlo, enten du er peer eller anonym søker. Sletting skjer i tråd med GDPR.",
  alternates: {
    canonical: "https://peerlo.no/slett-konto",
    languages: {
      "nb-NO": "https://peerlo.no/slett-konto",
      en: "https://peerlo.no/en/slett-konto",
    },
  },
  openGraph: {
    title: "Slett konto og data | Peerlo",
    description:
      "Slik sletter du kontoen og dataene dine i Peerlo, enten du er peer eller anonym søker.",
    url: "https://peerlo.no/slett-konto",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SlettKontoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-paper pt-16">
        {/* Hero */}
        <section className="bg-evening-forest pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-bright-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
              Personvern
            </p>
            <h1 className="text-4xl md:text-5xl font-normal text-white mb-6 leading-tight">
              Slett konto og data
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Du bestemmer selv over dataene dine. Fremgangsmåten er litt ulik
              avhengig av om du bruker Peerlo som peer eller som anonym søker
              — se hvilken som gjelder deg under.
            </p>
          </div>
        </section>

        {/* Innhold */}
        <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-forest/30 pl-6">
              <h2 className="text-2xl font-medium text-charcoal mb-3">
                Er du peer?
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                Send oss en e-post fra adressen knyttet til kontoen din. Vi
                bekrefter mottak og sletter kontoen og tilhørende data innen
                30 dager.
              </p>
              <a
                href="mailto:ole@peerlo.no?subject=Slett%20konto"
                className="inline-flex h-12 items-center justify-center px-8 rounded-full bg-evening-forest text-white font-[family-name:var(--font-geist-sans)] font-semibold hover:bg-charcoal transition-colors duration-300"
              >
                ole@peerlo.no
              </a>
            </div>

            <div className="border-l-4 border-forest/30 pl-6">
              <h2 className="text-2xl font-medium text-charcoal mb-3">
                Er du søker?
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
                Som søker er du anonym — vi har ingen måte å finne kontoen
                din på herfra. Du sletter dine egne data direkte i appen:
              </p>
              <div className="inline-flex items-center gap-2 rounded-full bg-pastel-forest/20 px-4 py-2 text-sm font-[family-name:var(--font-geist-sans)] font-medium text-charcoal/80">
                <span>Innstillinger</span>
                <ArrowRight size={14} className="text-forest" />
                <span>Slett brukeren</span>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-pastel-forest/30">
            <p className="text-charcoal/60 leading-relaxed">
              Sletting skjer i tråd med GDPR. Vil du vite mer om hvilke data
              vi lagrer og hvorfor, kan du lese vår{" "}
              <Link
                href="/personvern"
                className="text-forest hover:text-evening-forest underline underline-offset-2"
              >
                personvernerklæring
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
