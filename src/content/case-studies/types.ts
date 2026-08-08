export interface CaseStudyEntry {
  category: string;
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
  image?: string;
}

export interface CaseStudiesContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    intro: string;
  };
  items: CaseStudyEntry[];
  cta: {
    heading: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
}
