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
    body: "ELLIS was founded on a simple but deliberate conviction: that every lawful liberty is significant, and that legal counsel should reflect the weight of what is at stake for the people who seek it. From individual concerns to complex commercial matters, the firm was built to bring clarity and purpose to legal questions that matter.",
  },
  {
    title: "Our Philosophy",
    body: "Law is not only a technical discipline but a means of protecting what people and organisations value most: their rights, their interests and their lawful freedoms. ELLIS approaches every matter with the understanding that behind each legal question is a person, a business or an organisation with something significant at stake.",
  },
  {
    title: "Our Approach",
    body: "ELLIS works through a structured, deliberate process: understanding the matter, analysing the law and the facts, developing a strategy aligned with the client's objectives, advising clearly, and representing where appropriate. A fuller account of this process is set out on our Our Approach page.",
    link: { href: "/our-approach", label: "See Our Approach" },
  },
  {
    title: "Our Commitment",
    body: "ELLIS is committed to clarity, precision, strategy, integrity and discretion in every matter it handles. The firm works with individuals, businesses and organisations, providing legal guidance intended to be practical, candid and responsible.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-charcoal/10 bg-white">
        <div className="mx-auto max-w-[90rem] px-6 py-24 sm:px-10 sm:py-32">
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
