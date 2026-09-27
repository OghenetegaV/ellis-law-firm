import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ApproachTimeline } from "@/components/timeline/ApproachTimeline";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "ELLIS works through a structured process: understand, analyse, strategise, advise and represent.",
};

export default function OurApproachPage() {
  return (
    <>
      <PageHero eyebrow="Our approach" title="Five steps." accent="Applied with care." />
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-5xl px-6 sm:px-10">
          <ApproachTimeline />
        </div>
      </section>
    </>
  );
}
