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
    default: "Peerlo – Snakk med noen som forstår",
    template: "%s | Peerlo",
  },
  description:
    "Peerlo kobler ansatte med peers som har opplevd lignende utfordringer. Anonymt, tilgjengelig og menneskelig. Peer support for norsk arbeidsliv.",
  keywords: [
    "peer support",
    "peer support norsk arbeidsliv",
    "psykisk helse på jobben",
    "psykisk helse arbeidsplass",
    "psykososialt arbeidsmiljø",
    "arbeidsmiljøloven 2026",
    "sykefravær psykisk helse",
    "tidlig støtte ansatte",
    "peer support plattform",
    "egenerfaring støtte",
    "lavterskel psykisk helse",
    "psykisk uhelse arbeidsliv",
    "kostnad psykisk helse bedrift",
    "pårørende støtte",
    "tall psykisk helse Norge",
  ],
  openGraph: {
    siteName: "Peerlo",
    locale: "nb_NO",
    type: "website",
    url: "https://peerlo.no",
    title: "Peerlo – Snakk med noen som forstår",
    description:
      "Peerlo kobler ansatte med peers som har opplevd lignende utfordringer. Anonymt, tilgjengelig og menneskelig.",
    images: [
      {
        url: "/images/peerlo-hero-logo.png",
        width: 1200,
        height: 630,
        alt: "Peerlo – Snakk med noen som forstår",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peerlo – Snakk med noen som forstår",
    description:
      "Peerlo kobler ansatte med peers som har opplevd lignende utfordringer. Peer support for norsk arbeidsliv.",
    images: ["/images/peerlo-hero-logo.png"],
  },
  alternates: {
    canonical: "https://peerlo.no",
    languages: { "nb-NO": "https://peerlo.no" },
  },
};

const siteSchemas = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://peerlo.no/#organization",
      name: "Peerlo",
      url: "https://peerlo.no",
      logo: {
        "@type": "ImageObject",
        "@id": "https://peerlo.no/#logo",
        url: "https://peerlo.no/images/peerlo-logo.svg",
        caption: "Peerlo",
      },
      description:
        "Peerlo er en peer support-plattform for norsk arbeidsliv. Vi kobler ansatte med peers som har opplevd lignende utfordringer, anonymt og tilgjengelig.",
      foundingDate: "2024",
      founder: { "@id": "https://peerlo.no/#ole-aarre" },
      contactPoint: {
        "@type": "ContactPoint",
        email: "ole@peerlo.no",
        telephone: "+4798811908",
        contactType: "sales",
        availableLanguage: ["Norwegian", "English"],
      },
      areaServed: { "@type": "Country", name: "Norway" },
      disambiguatingDescription:
        "Peerlo er ikke terapi, men en digital plattform som kobler ansatte med sertifiserte peers med egenerfaring.",
      sameAs: ["https://www.linkedin.com/company/peerlo"],
    },
    {
      "@type": "WebSite",
      "@id": "https://peerlo.no/#website",
      url: "https://peerlo.no",
      name: "Peerlo",
      description:
        "Peer support-plattform for norsk arbeidsliv. Kobler ansatte med peers som har opplevd lignende utfordringer.",
      inLanguage: "nb-NO",
      publisher: { "@id": "https://peerlo.no/#organization" },
    },
    {
      "@type": "Service",
      "@id": "https://peerlo.no/#peer-support-tjeneste",
      name: "Peerlo Peer Support",
      description:
        "Digital peer support-plattform som kobler ansatte med sertifiserte peers med egenerfaring. Anonymt, tilgjengelig og menneskelig.",
      provider: { "@id": "https://peerlo.no/#organization" },
      serviceType: "Peer Support",
      areaServed: { "@type": "Country", name: "Norway" },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://peerlo.no",
        servicePhone: "+4798811908",
        availableLanguage: ["Norwegian"],
      },
      audience: {
        "@type": "Audience",
        audienceType: "Bedrifter og HR-avdelinger i Norge",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://peerlo.no/#webpage",
      url: "https://peerlo.no",
      name: "Peerlo – Snakk med noen som forstår",
      description:
        "Peer support-plattform for norsk arbeidsliv. Kobler ansatte med sertifiserte peers med egenerfaring – anonymt og tilgjengelig.",
      isPartOf: { "@id": "https://peerlo.no/#website" },
      about: { "@id": "https://peerlo.no/#peer-support-tjeneste" },
      inLanguage: "nb-NO",
    },
    {
      "@type": "Person",
      "@id": "https://peerlo.no/#ole-aarre",
      name: "Ole Aarre",
      jobTitle: "Gründer",
      worksFor: { "@id": "https://peerlo.no/#organization" },
      url: "https://peerlo.no",
      email: "ole@peerlo.no",
      telephone: "+4798811908",
      knowsAbout: [
        "Peer support",
        "Psykisk helse",
        "Mental helse i arbeidslivet",
        "Egenerfaring",
      ],
    },
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchemas) }}
        />
      </body>
    </html>
  );
}
