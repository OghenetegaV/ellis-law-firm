import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export const metadata: Metadata = {
  title: "About",
  description:
    "ELLIS is built on the belief that every lawful liberty is significant, providing strategic legal counsel grounded in clarity, precision and purpose.",
};

const story = [
  "ELLIS was built from a simple idea: legal practice can be serious without becoming distant. We wanted to create a firm that understands the law, understands people and is willing to approach both with fresh eyes.",
  "Our work spans business, creativity, technology, property and disputes because the lives and interests of our clients rarely fit neatly into one category. ELLIS is built to meet them where they are.",
];

const sections = [
  {
    title: "Our philosophy",
    body: [
      "We believe every matter deserves to be understood on its own terms. There is usually more to a legal issue than the question on the surface, and good counsel begins with knowing what actually matters.",
      "We believe in listening before assuming, thinking beyond the obvious and treating our clients' interests with the seriousness they deserve.",
    ],
  },
  {
    title: "Our approach",
    body: [
      "Our approach is practical, strategic and thorough. We take the time to understand the circumstances, identify what matters and give advice that is clear, considered and purposeful.",
      "Whether we are advising on a transaction, protecting an interest or navigating a dispute, we aim to make the law work in a way that is useful to the person or organisation in front of us.",
    ],
    link: { href: "/our-approach", label: "See our approach" },
  },
  {
    title: "Our commitment",
    body: [
      "We are committed to doing the work properly. That means being attentive to detail, honest about the position and deliberate about every step we take.",
      "We want our clients to feel heard, well advised and confident that their matters are being handled with care. For us, that is not an added feature of good legal practice. It is the standard.",
    ],
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About ELLIS" title="Built on principle." accent="Guided by purpose." />

      <section className="pb-16 sm:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div
              className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] border border-antique-gold/50"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-card">
              <Image
                src="/founder-2.jpeg"
                alt="ELLIS founder at her desk, in barrister's wig and gown"
                fill
                sizes="(min-width: 1024px) 32rem, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionEyebrow>Our story</SectionEyebrow>
            <h2 className="mt-5 max-w-lg font-serif text-4xl leading-[1.05] font-medium tracking-tight text-charcoal sm:text-5xl">
              A firm built around <span className="text-burgundy italic">people, not just cases.</span>
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-charcoal/65">
              {story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-4xl border-t border-charcoal/10 px-6 sm:px-10">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={index * 100}>
              <div className="grid gap-5 border-b border-charcoal/10 py-12 sm:grid-cols-[auto_1fr] sm:gap-12 sm:py-16">
                <span className="font-serif text-6xl italic leading-none text-antique-gold/60 sm:text-7xl">
                  0{index + 2}
                </span>
                <div>
                  <h2 className="font-serif text-3xl text-charcoal sm:text-4xl">{section.title}</h2>
                  <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-charcoal/65">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {section.link && (
                    <Link
                      href={section.link.href}
                      className="link-underline mt-5 inline-block text-sm font-semibold text-burgundy"
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
