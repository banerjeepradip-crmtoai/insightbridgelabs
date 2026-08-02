import type { ServiceContent } from './types';

export const aiGovernance: ServiceContent = {
  slug: 'ai-governance',
  navLabel: 'AI Governance',
  meta: {
    title: 'AI Governance — InsightBridge Labs',
    description:
      'Assess, document and monitor enterprise AI use cases against the EU AI Act, GDPR, ISO 42001 and NIST AI RMF. Responsible AI. Trusted outcomes.',
  },
  hero: {
    eyebrow: 'SERVICES',
    title: 'AI Governance',
    tagline: 'Responsible AI. Trusted Outcomes.',
    intro:
      "As AI moves from pilot to production, governance can't be an afterthought. We help you assess, document and monitor AI use cases against the frameworks that matter — so you can innovate with confidence and stand behind every automated decision.",
  },
  capabilities: {
    eyebrow: 'WHAT WE DO',
    heading: "What's Included",
    items: [
      {
        icon: 'shield-check',
        title: 'Regulatory Mapping',
        description: 'Assess AI use cases against the EU AI Act, GDPR, ISO 42001 and NIST AI RMF.',
      },
      {
        icon: 'brain',
        title: 'Explainability & Auditability',
        description: 'Document model decisions and data lineage so every outcome can be traced and explained.',
      },
      {
        icon: 'chart',
        title: 'Risk & Impact Assessment',
        description: 'Classify AI use cases by risk tier and define the controls each tier requires.',
      },
      {
        icon: 'nodes',
        title: 'Ongoing Monitoring',
        description: 'Continuous oversight of AI systems in production, not just a one-time review.',
      },
    ],
  },
  process: {
    heading: 'Our Approach',
    steps: [
      { step: '01', title: 'Discover', description: 'Inventory every AI use case across your organization, from pilots to production.' },
      { step: '02', title: 'Assess', description: 'Score each use case against applicable regulatory frameworks and internal policy.' },
      { step: '03', title: 'Remediate', description: 'Close governance gaps with documentation, controls and technical safeguards.' },
      { step: '04', title: 'Monitor', description: 'Keep governance current as models, data and regulations evolve.' },
    ],
  },
  cta: {
    heading: 'Bring governance to your AI initiatives',
    body: "Whether you're preparing for the EU AI Act or building internal AI policy, let's talk about what governance looks like for your organization.",
    primaryLabel: 'Request Demo',
    primaryHref: '/contact#contact-form',
    secondaryLabel: 'Meet the Team',
    secondaryHref: '/about',
  },
};
