import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { WhoWeRepresent } from "@/components/sections/WhoWeRepresent";
import { PracticeAreasGrid } from "@/components/sections/PracticeAreasGrid";
import { SignatureStatement } from "@/components/sections/SignatureStatement";
import { WhatGuidesUs } from "@/components/sections/WhatGuidesUs";
import { InsightsGrid } from "@/components/sections/InsightsGrid";
import { LegalEducation } from "@/components/sections/LegalEducation";

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
