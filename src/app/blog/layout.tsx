import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Peerlo Blogg",
    default: "Blogg | Peerlo",
  },
  description:
    "Tanker om peer support, psykisk helse og det å tørre å snakke med noen som forstår.",
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
