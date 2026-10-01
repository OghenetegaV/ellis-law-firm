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
    description: "Protecting your rights and lawful freedoms.",
  },
  {
    title: "Businesses",
    description: "Contracts, compliance, disputes and growth.",
  },
  {
    title: "Organisations",
    description: "Governance, obligations and complex decisions.",
  },
];

export const practiceAreas: PracticeArea[] = [
  {
    slug: "corporate-commercial-law",
    title: "Corporate & Commercial Law",
    description:
      "We advise businesses and organisations on incorporation, corporate structuring, governance, regulatory compliance, commercial transactions, contracts, partnerships, mergers and acquisitions, due diligence, and general corporate advisory.",
  },
  {
    slug: "entertainment-media-law",
    title: "Entertainment & Media Law",
    description:
      "We advise creatives, talent, media companies and entertainment businesses on contracts, licensing, intellectual property, publishing, production, endorsements, sponsorships, management arrangements, content creation, image rights and entertainment-related disputes.",
  },
  {
    slug: "technology-digital-law",
    title: "Technology & Digital Law",
    description:
      "We provide legal support for technology-driven businesses, digital platforms and emerging ventures, covering technology contracts, software and licensing arrangements, data protection, privacy, artificial intelligence, fintech, e-commerce, intellectual property and other digital legal matters.",
  },
  {
    slug: "property-real-estate-law",
    title: "Property & Real Estate Law",
    description:
      "We advise on the acquisition, sale, development, leasing and management of real estate, including property due diligence, title and documentation, tenancy matters, mortgages, property transactions, development arrangements and disputes relating to land and property.",
  },
  {
    slug: "litigation-dispute-resolution",
    title: "Litigation & Dispute Resolution",
    description:
      "We represent individuals, businesses and organisations in civil and commercial disputes, with services spanning litigation, arbitration, mediation, negotiation, debt recovery, contractual and property disputes, enforcement of judgments and appellate proceedings.",
  },
];

export const principles: Principle[] = [
  { title: "Clarity", description: "Complex issues, made simple." },
  { title: "Precision", description: "Attention to every detail." },
  { title: "Strategy", description: "The issue and the bigger goal." },
  { title: "Integrity", description: "Candid, principled counsel." },
  { title: "Discretion", description: "Your matters stay confidential." },
];

export const approachSteps: ApproachStep[] = [
  {
    number: "01",
    step: "Understand",
    description: "We listen and identify what matters.",
  },
  {
    number: "02",
    step: "Analyse",
    description: "We weigh the law, facts and risks.",
  },
  {
    number: "03",
    step: "Strategise",
    description: "We plan around your objectives.",
  },
  {
    number: "04",
    step: "Advise",
    description: "Clear, candid guidance.",
  },
  {
    number: "05",
    step: "Represent",
    description: "We act on your behalf.",
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
