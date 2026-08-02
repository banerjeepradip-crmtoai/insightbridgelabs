export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface ProductContent {
  slug: string;
  navLabel: string;
  meta: {
    title: string;
    description: string;
  };
  statusLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    intro: string;
  };
  problem: {
    heading: string;
    paragraphs: string[];
  };
  workflow: {
    heading: string;
    columns: 3 | 4;
    steps: WorkflowStep[];
  };
  safeguards: {
    heading: string;
    items: string[];
  };
  techStack: {
    eyebrow: string;
    heading: string;
    tags: string[];
  };
  disclaimer: {
    heading: string;
    items: string[];
  };
  cta: {
    heading: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
}
