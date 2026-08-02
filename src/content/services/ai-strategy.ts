import type { ServiceContent } from './types';

export const aiStrategy: ServiceContent = {
  slug: 'ai-strategy',
  navLabel: 'AI Strategy',
  meta: {
    title: 'AI Strategy — InsightBridge Labs',
    description:
      'Roadmaps that align AI with business goals — opportunity assessment, business case and technology strategy tailored to your organization.',
  },
  hero: {
    eyebrow: 'SERVICES',
    title: 'AI Strategy',
    tagline: 'Roadmaps that align AI with business goals.',
    intro:
      "AI succeeds when it's tied to a business outcome, not a technology for its own sake. We work with your leadership team to identify where AI creates real value, sequence the roadmap, and build the case for investment.",
  },
  capabilities: {
    eyebrow: 'WHAT WE DO',
    heading: "What's Included",
    items: [
      {
        icon: 'chart',
        title: 'Opportunity Assessment',
        description: 'Identify and prioritize AI use cases by business impact and feasibility.',
      },
      {
        icon: 'brain',
        title: 'Roadmap & Business Case',
        description: 'Sequence initiatives into a roadmap with clear ROI and resourcing needs.',
      },
      {
        icon: 'cloud',
        title: 'Technology & Platform Strategy',
        description: 'Choose the right mix of models, platforms and vendors for your environment.',
      },
      {
        icon: 'people',
        title: 'Change & Adoption Planning',
        description: 'Prepare teams and processes so AI investments actually get used.',
      },
    ],
  },
  process: {
    heading: 'Our Approach',
    steps: [
      { step: '01', title: 'Discover', description: 'Understand your business goals, data landscape and current AI maturity.' },
      { step: '02', title: 'Prioritize', description: 'Score candidate use cases by value, feasibility and risk.' },
      { step: '03', title: 'Roadmap', description: 'Sequence initiatives into a phased plan with clear milestones.' },
      { step: '04', title: 'Align', description: 'Build the business case and align stakeholders around the plan.' },
    ],
  },
  cta: {
    heading: 'Build an AI roadmap that fits your business',
    body: "Let's identify where AI creates the most value for you, and turn that into a plan you can act on.",
    primaryLabel: 'Request Demo',
    primaryHref: '/contact#contact-form',
    secondaryLabel: 'Meet the Team',
    secondaryHref: '/about',
  },
};
