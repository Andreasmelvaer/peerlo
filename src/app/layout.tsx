import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#305043",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://peerlo.no"),
  title: {
    default: "Peerlo — Snakk med noen som forstår",
    template: "%s | Peerlo",
  },
  description:
    "Peerlo kobler ansatte med peers som har opplevd lignende utfordringer. Anonymt, tilgjengelig og menneskelig. Ikke terapi — ekte erfaring, delt mellom mennesker.",
  openGraph: {
    siteName: "Peerlo",
    locale: "nb_NO",
    type: "website",
    url: "https://peerlo.no",
    title: "Peerlo — Snakk med noen som forstår",
    description:
      "Peerlo kobler ansatte med peers som har opplevd lignende utfordringer. Anonymt, tilgjengelig og menneskelig.",
    images: [
      {
        url: "/images/peerlo-hero-logo.png",
        width: 1200,
        height: 630,
        alt: "Peerlo — Snakk med noen som forstår",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peerlo — Snakk med noen som forstår",
    description:
      "Peerlo kobler ansatte med peers som har opplevd lignende utfordringer.",
    images: ["/images/peerlo-hero-logo.png"],
  },
  alternates: {
    canonical: "https://peerlo.no",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Peerlo",
  url: "https://peerlo.no",
  logo: "https://peerlo.no/images/peerlo-logo.svg",
  description:
    "Peerlo kobler mennesker som står i noe vanskelig med peers som har vært gjennom lignende utfordringer.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "ole@peerlo.no",
    contactType: "customer support",
    availableLanguage: "Norwegian",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={`${geistSans.variable} ${gabarito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </body>
    </html>
  );
}
