import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Peerlo Blogg",
    default: "Blogg | Peerlo",
  },
  description:
    "Artikler om peer support, psykisk helse i arbeidslivet og arbeidsmiljøloven. Peerlo hjelper bedrifter med å gi ansatte tidlig støtte – anonymt og tilgjengelig.",
  keywords: [
    "peer support",
    "psykisk helse arbeidsplass",
    "psykososialt arbeidsmiljø",
    "arbeidsmiljøloven 2026",
    "sykefravær psykisk helse",
    "peer support norsk arbeidsliv",
    "tidlig støtte ansatte",
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16">{children}</main>
      <Footer />
    </>
  );
}
