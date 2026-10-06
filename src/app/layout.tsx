```tsx
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

// IMPORTANT: Replace this with the official custom domain
// when it is ready and configured.
const SITE_URL = "https://ellis.com.ng";

const siteTitle = "ELLIS Law Firm | Barristers & Solicitors in Nigeria";

const siteDescription =
  "ELLIS is a Nigerian law firm providing strategic legal counsel, " +
  "legal advisory services and representation to individuals, " +
  "businesses and organisations.";

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

  // Google Search Console verification
  verification: {
    google: "x8kVfiuza6TxOVTpincafPjmJ1cpNmRjTusErgKjJE8",
  },

  // Do not set a global canonical URL here.
  // Define the correct canonical URL for each indexable page.

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
    url: SITE_URL,
    siteName: "ELLIS Law Firm",
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

  category: "legal services",

  // These paths should exist in your public directory.
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6B2635",
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
```
