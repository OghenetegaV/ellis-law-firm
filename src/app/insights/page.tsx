import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { InsightsGrid } from "@/components/sections/InsightsGrid";

export const metadata: Metadata = {
  title: "Insights",
  description: "Perspectives on law, business and the issues that matter, from ELLIS.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Perspectives on" accent="law and business." />
      <InsightsGrid variant="full" />
    </>
  );
}
