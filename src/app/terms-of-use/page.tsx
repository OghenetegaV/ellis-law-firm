import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing use of the ELLIS website.",
};

export default function TermsOfUsePage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:px-10 sm:py-32">
        <SectionEyebrow>Legal</SectionEyebrow>
        <h1 className="mt-6 font-serif text-4xl text-charcoal sm:text-5xl">Terms of Use</h1>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-charcoal/70">
          <p>
            This website is provided by ELLIS for general informational purposes. By using this
            website, you agree to use it lawfully and in a manner that does not infringe the
            rights of, or restrict or inhibit the use and enjoyment of, this site by any third
            party.
          </p>
          <p>
            The content of this website, including text, graphics and the ELLIS name and
            wordmark, is the property of ELLIS and may not be reproduced without permission.
          </p>
          <p>
            ELLIS reserves the right to amend these terms at any time. Continued use of this
            website following any changes constitutes acceptance of those changes.
          </p>
        </div>
      </div>
    </section>
  );
}
