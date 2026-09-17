import type {
  ApproachStep,
  InsightArticle,
  NavLink,
  PracticeArea,
  Principle,
  RepresentGroup,
} from "@/types/content";

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const primaryNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  ...navLinks,
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export const socialLinks: NavLink[] = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

export const representGroups: RepresentGroup[] = [
  {
    title: "Individuals",
    description:
      "Legal counsel and representation focused on protecting rights, interests and lawful freedoms.",
  },
  {
    title: "Businesses",
    description:
      "Practical legal guidance for businesses navigating transactions, contracts, compliance, disputes and growth.",
  },
  {
    title: "Organisations",
    description:
      "Strategic legal support for organisations dealing with governance, legal obligations, disputes and complex decisions.",
  },
];

export const practiceAreas: PracticeArea[] = [
  {
    slug: "litigation-dispute-resolution",
    title: "Litigation & Dispute Resolution",
    description: "Strategic representation in civil and commercial disputes.",
  },
  {
    slug: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    description: "Legal guidance for businesses, transactions and commercial relationships.",
  },
  {
    slug: "real-estate-property-law",
    title: "Real Estate & Property Law",
    description:
      "Advice and representation relating to property transactions, documentation and disputes.",
  },
  {
    slug: "contracts-agreements",
    title: "Contracts & Agreements",
    description: "Drafting, review and negotiation of legally sound agreements.",
  },
  {
    slug: "business-regulatory-compliance",
    title: "Business & Regulatory Compliance",
    description: "Helping businesses understand and navigate applicable legal obligations.",
  },
  {
    slug: "alternative-dispute-resolution",
    title: "Alternative Dispute Resolution",
    description: "Practical and strategic approaches to resolving disputes.",
  },
  {
    slug: "employment-workplace-matters",
    title: "Employment & Workplace Matters",
    description: "Legal guidance concerning employment relationships and workplace disputes.",
  },
  {
    slug: "intellectual-property",
    title: "Intellectual Property",
    description: "Advice concerning the protection and management of intellectual property rights.",
  },
];

export const principles: Principle[] = [
  { title: "Clarity", description: "Making complex legal issues understandable." },
  { title: "Precision", description: "Approaching every matter with careful attention to detail." },
  {
    title: "Strategy",
    description: "Considering both the immediate legal issue and the broader objective.",
  },
  {
    title: "Integrity",
    description: "Providing candid, principled and responsible legal counsel.",
  },
  {
    title: "Discretion",
    description: "Treating sensitive matters with professionalism and appropriate confidentiality.",
  },
];

export const approachSteps: ApproachStep[] = [
  {
    number: "01",
    step: "Understand",
    description: "We listen carefully and identify the legal issues that matter.",
  },
  {
    number: "02",
    step: "Analyse",
    description: "We examine the law, facts, risks and available options.",
  },
  {
    number: "03",
    step: "Strategise",
    description: "We develop a practical approach aligned with the client's objectives.",
  },
  {
    number: "04",
    step: "Advise",
    description: "We provide clear and candid legal guidance.",
  },
  {
    number: "05",
    step: "Represent",
    description: "Where appropriate, we advocate and act on the client's behalf.",
  },
];

export const insightArticles: InsightArticle[] = [
  {
    slug: "before-registering-a-company",
    category: "Corporate & Commercial",
    title: "What Every Business Owner Should Know Before Registering a Company",
    excerpt:
      "Registering a company is a foundational legal step with lasting implications for ownership, liability and governance. Here is what deserves careful thought before you file.",
    date: "March 2026",
  },
  {
    slug: "property-transaction-essentials",
    category: "Real Estate & Property",
    title: "Understanding the Legal Essentials of a Property Transaction",
    excerpt:
      "From title verification to documentation, a property transaction carries risks that are easy to overlook. A clear view of the essentials protects your interests.",
    date: "February 2026",
  },
  {
    slug: "before-you-sign-a-contract",
    category: "Contracts & Agreements",
    title: "Contracts: What to Consider Before You Sign",
    excerpt:
      "A contract defines your rights and obligations long after the signing. Understanding its terms, risks and remedies before you commit is essential.",
    date: "January 2026",
  },
];
