import type { Metadata } from "next";
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
    body: "Peerlo er behandlingsansvarlig for personopplysninger som behandles i forbindelse med bruk av tjenesten. Kontaktinformasjon: Ole Aarre, ole@peerlo.no, +47 988 11 908, Stavanger.",
  },
  {
    heading: "2. Hvilke opplysninger vi samler inn",
    body: "Nar du bruker Peerlo, kan vi behandle folgende typer opplysninger: e-postadresse og navn ved registrering, tekniske opplysninger som IP-adresse og enhetstype for drift av tjenesten, og anonymiserte bruksdata for statistikk. Peers som registrerer seg for a gi stotte, behandler ogsa informasjon om egenerfaring.",
  },
  {
    heading: "3. Formal med behandlingen",
    body: "Vi behandler personopplysninger for a levere og forbedre tjenesten, for a matche brukere med egnede peers, for fakturering og administrasjon av bedriftskunder, og for a overholde lovpakrevde forpliktelser.",
  },
  {
    heading: "4. Anonymitet for ansatte",
    body: "Ansatte som bruker Peerlo som sluttbrukere, kan benytte tjenesten anonymt. Arbeidsgiver far aldri tilgang til individuelle samtaler eller opplysninger om hvem som har brukt tjenesten. Kun aggregert og anonymisert statistikk deles med arbeidsgiver.",
  },
  {
    heading: "5. Rettslig grunnlag",
    body: "Behandlingen er basert pa samtykke fra den registrerte, avtalefullforelse (leveranse av tjenesten), berettiget interesse for drift og forbedring av plattformen, og lovpakrevde forpliktelser.",
  },
  {
    heading: "6. Lagring og sletting",
    body: "Personopplysninger lagres sa lenge det er nodvendig for formalet, eller sa lenge loven krever det. Brukere kan be om sletting av sine opplysninger ved a kontakte oss pa ole@peerlo.no.",
  },
  {
    heading: "7. Deling med tredjeparter",
    body: "Vi deler ikke personopplysninger med tredjepart uten samtykke, med unntak av underleverandorer som er nodvendige for drift av tjenesten (for eksempel sky-infrastruktur). Alle underleverandorer er bundet av databehandleravtaler i henhold til GDPR.",
  },
  {
    heading: "8. Dine rettigheter",
    body: "Du har rett til innsyn i dine personopplysninger, rett til retting av feilaktige opplysninger, rett til sletting (retten til a bli glemt), rett til a protestere mot behandlingen, og rett til dataportabilitet. For a bruke dine rettigheter, ta kontakt pa ole@peerlo.no.",
  },
  {
    heading: "9. Informasjonskapsler (cookies)",
    body: "Peerlo bruker nodvendige informasjonskapsler for drift av tjenesten. Vi bruker ikke sporingsbaserte reklame-cookies. Du kan styre cookie-innstillinger i nettleseren din.",
  },
  {
    heading: "10. Endringer i personvernerklæringen",
    body: "Vi kan oppdatere denne erklæringen. Vesentlige endringer varsles pa nettsiden. Siste oppdatering: juni 2025.",
  },
  {
    heading: "11. Klage til Datatilsynet",
    body: "Hvis du mener vi behandler dine personopplysninger i strid med GDPR, har du rett til a klage til Datatilsynet (datatilsynet.no).",
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
              Peerlo tar personvern pa alvor. Her finner du informasjon om hvilke personopplysninger vi behandler og hvordan vi beskytter dem.
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
                <p className="text-charcoal/70 text-lg leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-3xl p-8 border border-pastel-forest/30">
            <h2 className="text-xl font-semibold text-charcoal mb-3">
              Kontakt oss om personvern
            </h2>
            <p className="text-charcoal/70 leading-relaxed mb-4">
              Har du sporsmal om hvordan vi behandler personopplysninger, ta kontakt:
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
