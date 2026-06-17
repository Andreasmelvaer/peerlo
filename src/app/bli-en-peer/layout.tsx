import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bli en peer",
  description:
    "Har du statt i noe vanskelig og kommet deg gjennom det? Bli en sertifisert peer i Peerlo og hjelp andre i norsk arbeidsliv med din egenerfaring.",
  alternates: { canonical: "https://peerlo.no/bli-en-peer" },
  openGraph: {
    title: "Bli en peer | Peerlo",
    description:
      "Har du statt i noe vanskelig og kommet deg gjennom det? Bli en sertifisert peer og hjelp andre med din egenerfaring.",
    url: "https://peerlo.no/bli-en-peer",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bli en peer | Peerlo",
    description:
      "Har du statt i noe vanskelig og kommet deg gjennom det? Bli en sertifisert peer og hjelp andre med din egenerfaring.",
  },
};

export default function BliEnPeerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
