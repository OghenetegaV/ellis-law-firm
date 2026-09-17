import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { ContactForm } from "@/components/forms/ContactForm";
import { LineComposition } from "@/components/graphics/LineComposition";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "ELLIS welcomes enquiries from individuals, businesses and organisations seeking legal advice, representation or guidance.",
};

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[90rem] px-6 py-24 sm:px-10 sm:py-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1px_1.1fr] lg:gap-16">
          <div>
            <SectionEyebrow>Contact ELLIS</SectionEyebrow>
            <h1 className="mt-6 max-w-md font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
              Start with clarity.
            </h1>
            <p className="mt-8 max-w-sm text-base leading-relaxed text-charcoal/70">
              Whether you require legal advice, representation or guidance on a developing
              matter, ELLIS welcomes enquiries from individuals, businesses and organisations.
            </p>
          </div>

          <div className="hidden lg:block">
            <LineComposition orientation="vertical" strokeOpacity={0.7} />
          </div>

          <div className="max-w-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
