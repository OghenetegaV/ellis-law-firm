import type { Metadata } from "next";
import { InsightsGrid } from "@/components/sections/InsightsGrid";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives on law, business and the issues that matter, from ELLIS.",
};

export default function InsightsPage() {
  return <InsightsGrid variant="full" />;
}
