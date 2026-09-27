import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { PracticeAreasGrid } from "@/components/sections/PracticeAreasGrid";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "ELLIS provides legal guidance and representation across litigation, corporate and commercial law, real estate, contracts, compliance, dispute resolution, employment and intellectual property.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <PageHero eyebrow="Our practice" title="Focused counsel," accent="across every matter." />
      <PracticeAreasGrid variant="full" />
    </>
  );
}
