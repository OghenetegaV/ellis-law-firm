import type { Metadata } from "next";
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

const siteTitle = "ELLIS | Barristers & Solicitors | Nigeria";
const siteDescription =
  "ELLIS provides strategic legal counsel and representation to individuals, businesses and organisations in Nigeria.";
const ogImage = {
  url: "/og-image.png",
  width: 1920,
  height: 1080,
  alt: "Every Lawful Liberty Is Significant — an ELLIS folio held with quiet confidence",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ellis-firm.vercel.app"),
  title: {
    default: siteTitle,
    template: "%s | ELLIS",
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage.url],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} ${dmSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-ivory font-sans text-charcoal antialiased">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
