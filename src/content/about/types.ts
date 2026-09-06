export interface PillarItem {
  title: string;
  description: string;
}

export interface ContributionItem {
  number: string;
  title: string;
  description: string;
}

export interface FeaturedProjectItem {
  icon: string;
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
}

export interface AboutContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    role: string;
    location: string;
    intro: string;
    linkedinLabel: string;
    linkedinHref: string;
    email: string;
  };
  bio: {
    heading: string;
    paragraphs: string[];
    pillars: PillarItem[];
  };
  enterpriseGap: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: string[];
  };
  contributions: {
    heading: string;
    items: ContributionItem[];
  };
  featuredProjects: {
    heading: string;
    items: FeaturedProjectItem[];
  };
  credentials: {
    certificationsHeading: string;
    certifications: string[];
  };
  differentiators: {
    heading: string;
    items: string[];
  };
  quickFacts: {
    heading: string;
    location: string;
    languages: string;
    memberships: string[];
    workEligibility: string;
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
