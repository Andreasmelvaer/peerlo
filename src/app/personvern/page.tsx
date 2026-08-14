import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Personvern",
  description:
    "Les Peerlos personvernerklæring. Her finner du informasjon om hvilke data vi samler inn, hvordan de brukes og dine rettigheter etter GDPR.",
  alternates: { canonical: "https://peerlo.no/personvern" },
  openGraph: {
    title: "Personvern | Peerlo",
    description: "Peerlos personvernerklæring og informasjon om behandling av personopplysninger.",
    url: "https://peerlo.no/personvern",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    heading: "1. Behandlingsansvarlig",
    body: [
      "Peerlo er en mobilbasert, anonym peer support-plattform. Målet vårt er å tilby et trygt rom for følelsesmessig støtte, samtidig som anonymiteten til den som søker støtte (søkeren) ivaretas.",
      "Peerlo er behandlingsansvarlig for personopplysninger som behandles i forbindelse med bruk av tjenesten. Kontaktinformasjon: Ole Aarre, ole@peerlo.no, +47 988 11 908, Stavanger.",
    ],
  },
  {
    heading: "2. Hvilke opplysninger vi samler inn",
    body: [
      "Søkere: Som søker er du 100 % anonym. Vi samler ikke inn navn, e-postadresse, telefonnummer eller andre direkte identifiserbare opplysninger fra søkere. Vi behandler derimot organisasjonskode (brukes kun til å bekrefte tilgang gjennom arbeidsgiveren din, og til aggregert statistikk for organisasjonen), en teknisk identifikator (en tilfeldig generert kode, UUID) som kobler sammen chatøkter uten å identifisere deg som person, innholdet i samtaler du selv velger å dele, og hvilke temaer du ønsker støtte til, for eksempel arbeidsrelatert stress eller angst.",
      "Peers: Som peer oppgir du personopplysninger for å kunne tilby støtte: navn, e-postadresse, profilbilde og en kort presentasjon. Vi behandler også faglige opplysninger som sertifiseringsstatus og fagområder du har erfaring med, samt din tilgjengelighetsstatus (grønn/gul/rød).",
    ],
  },
  {
    heading: "3. Formål og rettslig grunnlag",
    body: [
      "Vi behandler personopplysninger for å levere tjenesten, herunder å koble søkere med egnede peers. Dette skjer på grunnlag av avtalefullførelse (GDPR artikkel 6 nr. 1 bokstav b).",
      "Innholdet i samtaler kan omfatte sensitive opplysninger om psykisk helse. Denne behandlingen er basert på ditt uttrykkelige samtykke (GDPR artikkel 9 nr. 2 bokstav a).",
      "Vi gir også arbeidsgivere aggregert og anonymisert innsikt i organisasjonens bruk av tjenesten, til statistiske formål for oppfølging av arbeidsmiljøet.",
    ],
  },
  {
    heading: "4. Anonymitet og gradvis identitetsdeling",
    body: [
      "Peerlo er anonymt som standard. Ved 5, 10 og 15 timer med samtale kan systemet invitere søker og peer til å vurdere om de ønsker å gå over til videosamtale eller fysisk møte.",
      "Å dele identitet er alltid frivillig og krever samtykke fra både søker og peer. Frem til et slikt samtykke er gitt, er systemet utformet for å hindre at personlig kontaktinformasjon utveksles.",
    ],
  },
  {
    heading: "5. Deling av data og sikkerhet",
    body: [
      "HR-dashbord: Arbeidsgiver får aldri tilgang til enkeltsamtaler eller informasjon om hvem som har brukt tjenesten. Arbeidsgiver ser kun totaliserte tall, for eksempel hvor mange samtaler som er gjennomført i en gitt periode.",
      "Lagring: Personopplysninger lagres innenfor EØS-området.",
      "Kriseprotokoll: Dersom en peer oppdager en umiddelbar fare for liv og helse, for eksempel fare for selvskading, kan vi involvere en spesialisert eskaleringspartner, som Bjørnson Psykologer.",
    ],
  },
  {
    heading: "6. Lagring og sletting",
    body: [
      "Chatmeldinger lagres i 30 dager etter at en samtale er avsluttet. Etter dette anonymiseres eller slettes de permanent.",
      "Peer-profiler lagres frem til peeren selv sletter kontoen sin.",
    ],
  },
  {
    heading: "7. Dine rettigheter",
    body: [
      "Du har rett til innsyn i, retting av og sletting av dine personopplysninger.",
      <>
        Siden søkere er anonyme, gjøres sletting av søkerdata direkte i
        appen, knyttet til din tekniske identifikator på enheten. Peers kan
        be om sletting ved å kontakte oss på ole@peerlo.no. Se siden{" "}
        <Link
          href="/slett-konto"
          className="text-forest hover:text-evening-forest underline underline-offset-2"
        >
          Slett konto
        </Link>{" "}
        for fremgangsmåte.
      </>,
    ],
  },
  {
    heading: "8. Deling med tredjeparter",
    body: [
      "Vi deler ikke personopplysninger med tredjepart uten samtykke, med unntak av underleverandører som er nødvendige for drift av tjenesten (for eksempel sky-infrastruktur). Alle underleverandører er bundet av databehandleravtaler i henhold til GDPR.",
    ],
  },
  {
    heading: "9. Informasjonskapsler (cookies)",
    body: [
      "Peerlo bruker nødvendige informasjonskapsler for drift av tjenesten. Vi bruker ikke sporingsbaserte reklame-cookies. Du kan styre cookie-innstillinger i nettleseren din.",
    ],
  },
  {
    heading: "10. Endringer i personvernerklæringen",
    body: [
      "Vi kan oppdatere denne erklæringen. Vesentlige endringer varsles på nettsiden. Sist oppdatert: august 2026.",
    ],
  },
  {
    heading: "11. Klage til Datatilsynet",
    body: [
      "Hvis du mener vi behandler dine personopplysninger i strid med GDPR, har du rett til å klage til Datatilsynet (datatilsynet.no).",
    ],
  },
];

export default function PersonvernPage() {
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
              Personvernerklæring
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              Peerlo tar personvern på alvor. Her finner du informasjon om hvilke personopplysninger vi behandler og hvordan vi beskytter dem.
            </p>
          </div>
        </section>

        {/* Innhold */}
        <section className="max-w-3xl mx-auto px-6 py-16 md:py-24">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading} className="border-b border-pastel-forest/30 pb-10 last:border-0">
                <h2 className="text-xl font-semibold text-charcoal mb-3">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-charcoal/70 text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-3xl p-8 border border-pastel-forest/30">
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Kontakt oss om personvern
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              Har du spørsmål om hvordan vi behandler personopplysninger, ta kontakt:
            </p>
            <ul className="space-y-2 text-charcoal/70">
              <li>
                E-post:{" "}
                <a href="mailto:ole@peerlo.no" className="text-forest hover:text-evening-forest underline underline-offset-2">
                  ole@peerlo.no
                </a>
              </li>
              <li>Telefon: +47 988 11 908</li>
              <li>Adresse: Stavanger, Rogaland</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
