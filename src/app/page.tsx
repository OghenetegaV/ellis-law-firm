import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { WhoWeRepresent } from "@/components/sections/WhoWeRepresent";
import { PracticeAreasGrid } from "@/components/sections/PracticeAreasGrid";
import { SignatureStatement } from "@/components/sections/SignatureStatement";
import { WhatGuidesUs } from "@/components/sections/WhatGuidesUs";
import { InsightsGrid } from "@/components/sections/InsightsGrid";
import { LegalEducation } from "@/components/sections/LegalEducation";

export const metadata: Metadata = {
  title: "ELLIS Law Firm | Strategic Legal Counsel in Nigeria",
  description:
    "ELLIS is a modern Nigerian law firm providing strategic legal counsel, advisory services and representation to individuals, businesses and organisations.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ELLIS Law Firm | Strategic Legal Counsel in Nigeria",
    description:
      "Strategic legal counsel and representation for individuals, businesses and organisations in Nigeria.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1920,
        height: 1080,
        alt: "ELLIS Law Firm — Every Lawful Liberty Is Significant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELLIS Law Firm | Strategic Legal Counsel in Nigeria",
    description:
      "Strategic legal counsel and representation for individuals, businesses and organisations in Nigeria.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <WhoWeRepresent />
      <PracticeAreasGrid variant="preview" />
      <SignatureStatement />
      <WhatGuidesUs />
      <InsightsGrid variant="preview" />
      <LegalEducation />
    </>
  );
}
