import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Gabarito } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Peerlo — Snakk med noen som forstår",
  description:
    "Peerlo kobler ansatte med peers som har opplevd lignende utfordringer. Anonymt, tilgjengelig og menneskelig. Ikke terapi — ekte erfaring, delt mellom mennesker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${geistSans.variable} ${gabarito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
