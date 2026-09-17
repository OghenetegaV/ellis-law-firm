export type PracticeArea = {
  slug: string;
  title: string;
  description: string;
};

export type InsightArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
};

export type Principle = {
  title: string;
  description: string;
};

export type RepresentGroup = {
  title: string;
  description: string;
};

export type ApproachStep = {
  step: string;
  number: string;
  description: string;
};

export type NavLink = {
  label: string;
  href: string;
};
