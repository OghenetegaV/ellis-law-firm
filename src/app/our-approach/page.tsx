import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ApproachTimeline } from "@/components/timeline/ApproachTimeline";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "ELLIS works through a structured process: understand, analyse, strategise, advise and represent.",
};

export default function OurApproachPage() {
  return (
    <>
      <section className="border-b border-charcoal/10 bg-white">
        <div className="mx-auto max-w-[90rem] px-6 py-16 sm:px-10 sm:py-24">
          <SectionEyebrow>Our Approach</SectionEyebrow>
          <h1 className="mt-6 max-w-2xl font-serif text-4xl leading-tight text-charcoal sm:text-6xl">
            Five steps. Applied with care.
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[90rem] px-6 py-16 sm:px-10 sm:py-20">
          <ApproachTimeline />
        </div>
      </section>
    </>
  );
}
