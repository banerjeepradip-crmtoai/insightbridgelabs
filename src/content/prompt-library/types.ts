export interface PromptLibraryContent {
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
  intro: {
    heading: string;
    body: string;
  };
  industries: {
    id: string;
    icon: 'shield-check' | 'cross' | 'cart';
    label: string;
    description: string;
    categoryCount: number;
    promptCount: number;
  }[];
  form: {
    heading: string;
    body: string;
    industryLegend: string;
    consentLabel: string;
    submitLabel: string;
    disclaimer: string;
  };
}
