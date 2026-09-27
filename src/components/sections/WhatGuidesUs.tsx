import { principles } from "@/lib/content";
import { PrincipleBlock } from "@/components/cards/PrincipleBlock";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function WhatGuidesUs() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <SectionEyebrow>What guides us</SectionEyebrow>
          <h2 className="mt-5 font-serif text-[clamp(2.5rem,4.5vw,4rem)] leading-none font-medium tracking-tight">
            Five principles. <span className="text-burgundy italic">One standard.</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12 flex flex-col gap-4 lg:flex-row">
            {principles.map((principle, index) => (
              <PrincipleBlock key={principle.title} {...principle} index={index} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
