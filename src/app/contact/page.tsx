import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "ELLIS welcomes enquiries from individuals, businesses and organisations seeking legal advice, representation or guidance.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact ELLIS" title="Start with" accent="clarity." />
      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl px-6 sm:px-10">
          <div className="rounded-[2rem] bg-white p-6 shadow-card sm:rounded-[2.5rem] sm:p-12">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
