import { principles } from "@/lib/content";
import { PrincipleBlock } from "@/components/cards/PrincipleBlock";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function WhatGuidesUs() {
  return (
    <section className="bg-charcoal">
      <div className="mx-auto max-w-[90rem] px-6 py-24 sm:px-10 sm:py-28">
        <Reveal>
          <SectionEyebrow tone="gold">What Guides Us</SectionEyebrow>
        </Reveal>
        <div className="mt-12 grid gap-x-16 sm:grid-cols-2">
          {principles.map((principle, index) => (
            <PrincipleBlock key={principle.title} {...principle} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
