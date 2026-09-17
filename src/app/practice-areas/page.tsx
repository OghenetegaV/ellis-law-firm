import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { PracticeAreasGrid } from "@/components/sections/PracticeAreasGrid";

export const metadata: Metadata = {
  title: "Practice Areas",
  description:
    "ELLIS provides legal guidance and representation across litigation, corporate and commercial law, real estate, contracts, compliance, dispute resolution, employment and intellectual property.",
};

export default function PracticeAreasPage() {
  return (
    <>
      <section className="border-b border-charcoal/10 bg-white">
        <div className="mx-auto max-w-[90rem] px-6 py-24 sm:px-10 sm:py-32">
          <SectionEyebrow>Our Practice</SectionEyebrow>
          <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-tight text-charcoal sm:text-6xl">
            Focused counsel across the matters that shape your interests.
          </h1>
        </div>
      </section>
      <PracticeAreasGrid variant="full" />
    </>
  );
}
