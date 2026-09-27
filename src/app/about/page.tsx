import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { LineComposition } from "@/components/graphics/LineComposition";

export const metadata: Metadata = {
  title: "About",
  description:
    "ELLIS is built on the belief that every lawful liberty is significant, providing strategic legal counsel grounded in clarity, precision and purpose.",
};

const sections = [
  {
    title: "Our Story",
    body: "ELLIS was founded on one conviction: every lawful liberty is significant.",
  },
  {
    title: "Our Philosophy",
    body: "Behind every legal question is someone with something significant at stake.",
  },
  {
    title: "Our Approach",
    body: "A structured process: understand, analyse, strategise, advise, represent.",
    link: { href: "/our-approach", label: "See Our Approach" },
  },
  {
    title: "Our Commitment",
    body: "Clarity, precision, strategy, integrity and discretion in every matter.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-charcoal/10 bg-white">
        <div className="mx-auto max-w-[90rem] px-6 py-16 sm:px-10 sm:py-24">
          <SectionEyebrow>About ELLIS</SectionEyebrow>
          <h1 className="mt-6 max-w-3xl font-serif text-4xl leading-tight text-charcoal sm:text-6xl">
            Built on principle. Guided by purpose.
          </h1>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[90rem] px-6 py-20 sm:px-10 sm:py-24">
          <div className="grid gap-16 lg:grid-cols-[1px_1fr] lg:gap-16">
            <div className="hidden lg:block">
              <LineComposition orientation="vertical" strokeOpacity={0.7} />
            </div>
            <div className="max-w-2xl space-y-16">
              {sections.map((section) => (
                <Reveal key={section.title}>
                  <h2 className="font-serif text-2xl text-charcoal sm:text-3xl">{section.title}</h2>
                  <p className="mt-5 text-base leading-relaxed text-charcoal/70">{section.body}</p>
                  {section.link && (
                    <a
                      href={section.link.href}
                      className="link-underline mt-5 inline-flex w-fit text-xs font-semibold uppercase tracking-wide-cap text-burgundy"
                    >
                      {section.link.label}
                    </a>
                  )}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
