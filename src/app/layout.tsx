import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const SITE_URL = "https://ellis.com.ng";

const siteTitle = "ELLIS Law Firm | Barristers & Solicitors in Nigeria";

const siteDescription =
  "ELLIS is a modern Nigerian law firm providing strategic legal counsel, advisory services and representation to individuals, businesses and organisations.";

const ogImage = {
  url: "/og-image.png",
  width: 1920,
  height: 1080,
  alt: "ELLIS Law Firm — Every Lawful Liberty Is Significant",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  applicationName: "ELLIS Law Firm",

  title: {
    default: siteTitle,
    template: "%s | ELLIS Law Firm",
  },

  description: siteDescription,

  keywords: [
    "ELLIS Law Firm",
    "law firm Nigeria",
    "Nigerian law firm",
    "barristers and solicitors Nigeria",
    "legal counsel Nigeria",
    "legal services Nigeria",
    "corporate law Nigeria",
    "commercial law Nigeria",
    "technology law Nigeria",
    "real estate law Nigeria",
    "entertainment law Nigeria",
    "litigation Nigeria",
    "dispute resolution Nigeria",
  ],

  authors: [
    {
      name: "ELLIS Law Firm",
      url: SITE_URL,
    },
  ],

  creator: "ELLIS Law Firm",
  publisher: "ELLIS Law Firm",

  category: "Legal Services",

  verification: {
    google: "x8kVfiuza6TxOVTpincafPjmJ1cpNmRjTusErgKjJE8",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "ELLIS Law Firm",
    url: SITE_URL,
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage.url],
  },

  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6B2635",
  colorScheme: "light",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": `${SITE_URL}/#organization`,
      name: "ELLIS Law Firm",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      image: `${SITE_URL}/og-image.png`,
      description: siteDescription,
      areaServed: {
        "@type": "Country",
        name: "Nigeria",
      },
      serviceType: [
        "Corporate & Commercial Law",
        "Entertainment & Media Law",
        "Technology & Digital Law",
        "Property & Real Estate Law",
        "Litigation & Dispute Resolution",
      ],
      knowsAbout: [
        "Corporate Law",
        "Commercial Law",
        "Contract Law",
        "Entertainment Law",
        "Media Law",
        "Technology Law",
        "Digital Law",
        "Data Protection",
        "Privacy Law",
        "Intellectual Property",
        "Real Estate Law",
        "Property Law",
        "Litigation",
        "Arbitration",
        "Mediation",
        "Dispute Resolution",
      ],
    },

    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "ELLIS Law Firm",
      description: siteDescription,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-NG",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NG"
      className={`${cormorant.variable} ${manrope.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>

      <body className="flex min-h-screen flex-col bg-ivory font-sans text-charcoal antialiased">
        <Nav />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
