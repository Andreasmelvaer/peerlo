import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Om Peerlo",
  description:
    "Peerlo er en norsk peer support-plattform grunnlagt av Ole Aarre i Stavanger. Les om misjon, bakgrunn og hva vi tror på.",
  alternates: { canonical: "https://peerlo.no/om-peerlo" },
  openGraph: {
    title: "Om Peerlo",
    description:
      "Peerlo er en norsk peer support-plattform grunnlagt av Ole Aarre i Stavanger. Les om misjon, bakgrunn og hva vi tror på.",
    url: "https://peerlo.no/om-peerlo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om Peerlo",
    description:
      "Peerlo er en norsk peer support-plattform grunnlagt av Ole Aarre i Stavanger.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://peerlo.no/#organization",
  name: "Peerlo",
  url: "https://peerlo.no",
  logo: {
    "@type": "ImageObject",
    url: "https://peerlo.no/images/peerlo-logo.svg",
    caption: "Peerlo",
  },
  description:
    "Peerlo er en peer support-plattform for norsk arbeidsliv. Vi kobler ansatte med sertifiserte peers som har egenerfaring fra lignende utfordringer, anonymt og tilgjengelig.",
  foundingDate: "2024",
  founder: { "@id": "https://peerlo.no/#ole-aarre" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stavanger",
    addressRegion: "Rogaland",
    addressCountry: "NO",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "ole@peerlo.no",
    telephone: "+4798811908",
    contactType: "customer support",
    availableLanguage: ["Norwegian", "English"],
  },
  areaServed: { "@type": "Country", name: "Norway" },
  sameAs: ["https://www.linkedin.com/company/peerlo"],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://peerlo.no/#ole-aarre",
  name: "Ole Aarre",
  jobTitle: "Gründer og daglig leder",
  worksFor: { "@id": "https://peerlo.no/#organization" },
  url: "https://peerlo.no/om-peerlo",
  email: "ole@peerlo.no",
  telephone: "+4798811908",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stavanger",
    addressRegion: "Rogaland",
    addressCountry: "NO",
  },
  knowsAbout: [
    "Peer support",
    "Psykisk helse i arbeidslivet",
    "Mental helse",
    "Egenerfaring",
    "Forebyggende helsearbeid",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://peerlo.no" },
    { "@type": "ListItem", position: 2, name: "Om Peerlo", item: "https://peerlo.no/om-peerlo" },
  ],
};

export default function OmPeerloPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-paper pt-16">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

        {/* Hero */}
        <section className="bg-evening-forest pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-bright-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
              Hvem vi er
            </p>
            <h1 className="text-4xl md:text-5xl font-normal text-white mb-6 leading-tight">
              Om Peerlo
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Vi tror på kraften i egenerfaring. At det å snakke med noen som virkelig har vært der, kan utgjøre en stor forskjell for den som står midt i det.
            </p>
          </div>
        </section>

        {/* Misjon */}
        <section className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <div className="prose-custom space-y-8">
            <div>
              <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-3">
                Vår misjon
              </p>
              <h2 className="text-3xl md:text-4xl font-normal text-charcoal mb-6 leading-snug">
                Lavterskel støtte for alle som står i noe vanskelig
              </h2>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-4">
                Hvert år er over 70 000 nordmenn sykemeldt på grunn av psykiske lidelser. Mange av disse hadde profittert på å snakke med noen tidlig, men terskelen for å søke profesjonell hjelp er fortsatt høy. Mange venter til problemene er store.
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed mb-4">
                Peerlo ble grunnlagt for å fylle det gapet. Vi tror at det å snakke med et menneske som har vært gjennom noe lignende, er en kraftfull form for støtte. Ikke terapi, men ekte menneskelig forståelse.
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed">
                Vi kobler ansatte i norske bedrifter med sertifiserte peers som har egenerfaring fra utfordringer som stress, utbrenthet, angst, sorg og andre livshendelser. Alt er anonymt. Alt er tilgjengelig når du trenger det.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 border border-pastel-forest/30">
              <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-3">
                Hva vi tror på
              </p>
              <h2 className="text-2xl md:text-3xl font-normal text-charcoal mb-6 leading-snug">
                Våre verdier
              </h2>
              <ul className="space-y-5">
                {[
                  {
                    title: "Egenerfaring har verdi",
                    desc: "Det å ha vært gjennom noe vanskelig gir en forståelse som ingen utdanning kan erstatte.",
                  },
                  {
                    title: "Lavterskel er kritisk",
                    desc: "Støtte må være tilgjengelig for at den skal bli brukt. Vi fjerner barrierer, ikke legger til dem.",
                  },
                  {
                    title: "Anonymitet muliggjør åpenhet",
                    desc: "Folk snakker friere når de vet at det ikke kan spores tilbake til dem.",
                  },
                  {
                    title: "Tidlig støtte gir størst effekt",
                    desc: "Jo tidligere man får hjelp, desto lettere er det å snu en negativ utvikling.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span className="w-2 h-2 rounded-full bg-forest/60 mt-2.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-charcoal mb-1">{item.title}</p>
                      <p className="text-charcoal/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Grunder */}
        <section className="bg-white border-t border-pastel-forest/20 py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-forest font-[family-name:var(--font-geist-sans)] font-semibold text-sm uppercase tracking-widest mb-4">
              Gründeren
            </p>
            <h2 className="text-3xl md:text-4xl font-normal text-charcoal mb-8 leading-snug">
              Ole Aarre
            </h2>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="shrink-0">
                <div className="w-32 h-32 rounded-2xl bg-evening-forest/10 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/peerlo-hero-logo.png"
                    alt="Ole Aarre, grunder av Peerlo"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4 text-charcoal/70 text-lg leading-relaxed">
                <p>
                  Ole Aarre er gründer og daglig leder i Peerlo, og er basert i Stavanger. Han grunnla Peerlo etter å ha sett behovet for lavterskel støtte i arbeidslivet på nært hold.
                </p>
                <p>
                  Ole er opptatt av at psykisk helse ikke bare er et helseproblem, men et arbeidsmiljøproblem. Han mener at bedrifter som investerer i tidlig støtte, ikke bare tar vare på menneskene sine, men også bygger mer robuste og produktive organisasjoner.
                </p>
                <p>
                  Peerlo ble tatt opp i Næringsforeningen i Stavanger som deres hundrede medlem i 2026.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href="mailto:ole@peerlo.no"
                    className="inline-flex h-11 items-center justify-center px-6 rounded-full bg-evening-forest text-white font-[family-name:var(--font-geist-sans)] font-semibold text-sm hover:bg-charcoal transition-colors duration-300"
                  >
                    ole@peerlo.no
                  </a>
                  <a
                    href="tel:+4798811908"
                    className="inline-flex h-11 items-center justify-center px-6 rounded-full border-2 border-evening-forest/30 text-evening-forest font-[family-name:var(--font-geist-sans)] font-medium text-sm hover:bg-evening-forest/5 transition-colors duration-300"
                  >
                    +47 988 11 908
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fakta */}
        <section className="bg-paper border-t border-pastel-forest/20 py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-normal text-charcoal mb-8">
              Peerlo i tall
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { dt: "Grunnlagt", dd: "2024" },
                { dt: "Lokasjon", dd: "Stavanger, Rogaland" },
                { dt: "Marked", dd: "Norge" },
              ].map((item) => (
                <div key={item.dt} className="bg-white rounded-2xl p-6 border border-pastel-forest/20">
                  <dt className="text-sm font-[family-name:var(--font-geist-sans)] font-semibold uppercase tracking-wider text-charcoal/40 mb-1">
                    {item.dt}
                  </dt>
                  <dd className="text-2xl font-medium text-charcoal">{item.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-evening-forest py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-normal text-white mb-4">
              Vil du vite mer?
            </h2>
            <p className="text-white/60 mb-8">
              Book en uforpliktende demo og se hvordan Peerlo kan fungere for din bedrift.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#cta"
                className="inline-flex h-12 items-center justify-center px-8 rounded-full bg-white text-evening-forest font-[family-name:var(--font-geist-sans)] font-semibold hover:bg-bright-forest transition-colors duration-300"
              >
                Book en demo
              </Link>
              <Link
                href="/faq"
                className="inline-flex h-12 items-center justify-center px-8 rounded-full border-2 border-white/30 text-white font-[family-name:var(--font-geist-sans)] font-medium hover:bg-white/10 transition-colors duration-300"
              >
                Les FAQ
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
