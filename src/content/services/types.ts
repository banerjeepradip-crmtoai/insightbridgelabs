export interface CapabilityItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceContent {
  slug: string;
  navLabel: string;
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
  capabilities: {
    eyebrow: string;
    heading: string;
    items: CapabilityItem[];
  };
  process: {
    heading: string;
    steps: ProcessStep[];
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
