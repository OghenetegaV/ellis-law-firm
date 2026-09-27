import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "ELLIS is built on the belief that every lawful liberty is significant, providing strategic legal counsel grounded in clarity, precision and purpose.",
};

const sections = [
  {
    title: "Our story",
    body: "ELLIS was founded on one conviction: every lawful liberty is significant.",
  },
  {
    title: "Our philosophy",
    body: "Behind every legal question is someone with something significant at stake.",
  },
  {
    title: "Our approach",
    body: "A structured process: understand, analyse, strategise, advise, represent.",
    link: { href: "/our-approach", label: "See our approach" },
  },
  {
    title: "Our commitment",
    body: "Clarity, precision, strategy, integrity and discretion in every matter.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About ELLIS" title="Built on principle." accent="Guided by purpose." />

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:px-10 md:grid-cols-2">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 100} className="h-full">
              <div className="flex h-full min-h-[16rem] flex-col justify-between rounded-[2rem] bg-white p-8 shadow-card sm:p-10">
                <span className="font-serif text-5xl italic text-antique-gold">0{index + 1}</span>
                <div>
                  <h2 className="font-serif text-4xl text-charcoal">{section.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-charcoal/65">{section.body}</p>
                  {section.link && (
                    <Link
                      href={section.link.href}
                      className="link-underline mt-5 text-sm font-semibold text-burgundy"
                    >
                      {section.link.label} &rarr;
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
