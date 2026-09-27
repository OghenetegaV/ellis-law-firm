import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important information about the legal information provided on this website.",
};

export default function DisclaimerPage() {
  return (
    <section className="pb-20 pt-36 sm:pt-44">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <div className="rounded-[2rem] bg-white p-8 shadow-card sm:p-14">
          <SectionEyebrow>Legal</SectionEyebrow>
          <h1 className="mt-6 font-serif text-4xl text-charcoal sm:text-5xl">Disclaimer</h1>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-charcoal/70">
            <p>
              The information provided on this website is for general informational purposes only
              and does not constitute legal advice. Viewing this website, or submitting an enquiry
              through it, does not by itself establish a lawyer-client relationship with ELLIS.
            </p>
            <p>
              Legal outcomes depend on the specific facts and circumstances of each matter. ELLIS
              does not guarantee any particular outcome, and nothing on this website should be
              relied upon as a substitute for individualised legal advice from a qualified legal
              practitioner.
            </p>
            <p>
              Any educational programmes, seminars or webinars referenced on this website are
              developed by ELLIS for general educational purposes and are not represented as
              NBA-accredited Continuing Professional Development (CPD) programmes unless formally
              approved as such.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
