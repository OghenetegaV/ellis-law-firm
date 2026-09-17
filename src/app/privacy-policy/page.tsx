import type { Metadata } from "next";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ELLIS handles information shared through this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24 sm:px-10 sm:py-32">
        <SectionEyebrow>Legal</SectionEyebrow>
        <h1 className="mt-6 font-serif text-4xl text-charcoal sm:text-5xl">Privacy Policy</h1>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-charcoal/70">
          <p>
            ELLIS respects the privacy of visitors to this website. Information submitted
            through this site, including via the contact form, is used solely to respond to
            enquiries and is not sold or shared with third parties for marketing purposes.
          </p>
          <p>
            This website does not knowingly collect sensitive personal information beyond what
            a visitor voluntarily provides. Any information shared through the contact form is
            treated with appropriate confidentiality.
          </p>
          <p>
            This policy may be updated from time to time. For questions regarding this policy
            or how your information is handled, please contact ELLIS directly.
          </p>
        </div>
      </div>
    </section>
  );
}
