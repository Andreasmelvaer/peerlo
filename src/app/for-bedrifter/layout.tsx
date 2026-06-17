import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peerlo for bedrifter – forebygg sykefravær med peer support",
  description:
    "Gi ansatte lavterskel støtte før problemene eskalerer. Peerlo er peer support-løsningen for norske bedrifter som vil ta psykisk helse på alvor og redusere sykefravær.",
  alternates: { canonical: "https://peerlo.no/for-bedrifter" },
  keywords: [
    "peer support bedrift",
    "forebygge sykefravær",
    "psykisk helse arbeidslivet",
    "ansattstøtte",
    "HR-verktøy psykisk helse",
    "lavterskel støtte ansatte",
    "samtaleapp bedrift",
    "Peerlo bedrift",
  ],
  openGraph: {
    title: "Peerlo for bedrifter – forebygg sykefravær med peer support",
    description:
      "Gi ansatte et sted å gå – anonymt og uten venteliste. Peerlo kobler ansatte med peers som har egenerfaring, og gir HR aggregert innsikt.",
    url: "https://peerlo.no/for-bedrifter",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peerlo for bedrifter",
    description:
      "Peer support for norske bedrifter. Anonymt for ansatte, innsikt for HR.",
  },
};

export default function ForBedrifterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
