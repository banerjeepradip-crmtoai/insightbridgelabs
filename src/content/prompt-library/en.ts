import type { PromptLibraryContent } from './types';

export const en: PromptLibraryContent = {
  meta: {
    title: 'CRM Prompt Library | InsightBridge Labs',
    description:
      'A free, industry-specific library of ready-to-use AI prompts for CRM processes across Banking & Insurance, Healthcare, and Retail.',
  },
  hero: {
    eyebrow: 'Free Resource',
    title: 'A ready-made prompt library for CRM teams',
    tagline: 'Stop rewriting the same instructions to your AI agent.',
    intro:
      "189 structured prompts across Banking & Insurance, Healthcare, and Retail — each with a clear role, variables, task, output format, and worked example, so your team gets consistent results without re-explaining context every time.",
  },
  intro: {
    heading: 'What is inside',
    body: "Every prompt follows the same standard format (Role, Variables, Task, Output Format, worked Example) and covers common CRM stages — lead qualification, service, claims, billing, retention, and more — for a specific industry. Pick the industry that matches your business and download the full set.",
  },
  industries: [
    {
      id: 'banking-insurance',
      icon: 'shield-check',
      label: 'Banking & Insurance',
      description: 'Lead qualification, outreach, loan processing, underwriting, claims, collections, and compliance.',
      categoryCount: 8,
      promptCount: 80,
    },
    {
      id: 'healthcare',
      icon: 'cross',
      label: 'Healthcare',
      description: 'Patient registration, appointments, clinical documentation, care management, billing, and compliance.',
      categoryCount: 7,
      promptCount: 52,
    },
    {
      id: 'retail',
      icon: 'cart',
      label: 'Retail',
      description: 'Customer acquisition, sales, order management, inventory, merchandising, and loyalty.',
      categoryCount: 8,
      promptCount: 57,
    },
  ],
  form: {
    heading: 'Get your free download',
    body: 'Choose one industry to download. One registration per person.',
    industryLegend: 'Which industry library would you like?',
    consentLabel: "I agree to be contacted by InsightBridge Labs about this download.",
    submitLabel: 'Register & Download',
    disclaimer: "We'll only use your details to deliver this download and occasionally follow up about it — no spam.",
  },
};
