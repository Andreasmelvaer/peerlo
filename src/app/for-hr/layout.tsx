import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peerlo for HR – innsikt og støtte som forebygger sykefravær",
  description:
    "Peerlo gir HR-avdelingen løpende, anonymisert innsikt i ansattes psykiske helse, og gir ansatte lavterskel støtte før problemene eskalerer til sykemeldinger.",
  alternates: { canonical: "https://peerlo.no/for-hr" },
  keywords: [
    "HR verktøy psykisk helse",
    "forebygge sykefravær HR",
    "ansattinnsikt anonymisert",
    "psykososialt arbeidsmiljø",
    "peer support HR",
    "arbeidsmiljø innsikt",
    "Peerlo HR",
  ],
  openGraph: {
    title: "Peerlo for HR – innsikt og støtte som forebygger sykefravær",
    description:
      "Anonymisert innsikt for HR, lavterskel støtte for ansatte. Peerlo hjelper HR-avdelingen å handle tidlig, ikke for sent.",
    url: "https://peerlo.no/for-hr",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peerlo for HR",
    description:
      "Anonymisert innsikt for HR, lavterskel støtte for ansatte.",
  },
};

export default function ForHRLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
