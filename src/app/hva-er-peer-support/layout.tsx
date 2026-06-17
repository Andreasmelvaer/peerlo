import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hva er peer support? – Peerlo",
  description:
    "Peer support er samtaler med noen som selv har opplevd det du står i. Ikke terapi, ikke behandling – men menneskelig støtte fra noen som forstår. Les mer om hva peer support er og hvordan det fungerer.",
  alternates: { canonical: "https://peerlo.no/hva-er-peer-support" },
  keywords: [
    "hva er peer support",
    "peer support Norge",
    "peer support forklaring",
    "lavterskel støtte psykisk helse",
    "peer support vs terapi",
    "egenerfaring støtte",
    "peer support arbeidsliv",
  ],
  openGraph: {
    title: "Hva er peer support?",
    description:
      "Peer support er samtaler med noen som selv har opplevd det du står i. Ikke terapi – men menneskelig støtte fra noen som forstår.",
    url: "https://peerlo.no/hva-er-peer-support",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hva er peer support?",
    description:
      "Ikke terapi, men menneskelig støtte fra noen som forstår. Peerlo forklarer hva peer support er.",
  },
};

export default function HvaErPeerSupportLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
