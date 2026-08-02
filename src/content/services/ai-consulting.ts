import type { ServiceContent } from './types';

export const aiConsulting: ServiceContent = {
  slug: 'ai-consulting',
  navLabel: 'AI Consulting',
  meta: {
    title: 'AI Consulting — InsightBridge Labs',
    description:
      'Strategic guidance to turn your AI vision into measurable business impact — solution architecture, pilots, implementation and enablement.',
  },
  hero: {
    eyebrow: 'SERVICES',
    title: 'AI Consulting',
    tagline: 'Strategic guidance to turn your AI vision into measurable business impact.',
    intro:
      'From first proof of concept to enterprise-wide rollout, we provide hands-on architecture and delivery guidance — combining deep Salesforce and enterprise platform expertise with modern AI engineering.',
  },
  capabilities: {
    eyebrow: 'WHAT WE DO',
    heading: "What's Included",
    items: [
      {
        icon: 'nodes',
        title: 'Solution Architecture',
        description: 'Design AI-enabled solutions that fit your existing enterprise architecture.',
      },
      {
        icon: 'brain',
        title: 'Proof of Concept & Pilots',
        description: 'Validate ideas quickly with focused, production-quality pilots.',
      },
      {
        icon: 'cloud-upload',
        title: 'Implementation & Integration',
        description: 'Build and integrate AI capabilities into Salesforce and cloud platforms.',
      },
      {
        icon: 'people',
        title: 'Enablement & Handover',
        description: 'Train internal teams so capability stays in-house after we\'re gone.',
      },
    ],
  },
  process: {
    heading: 'Our Approach',
    steps: [
      { step: '01', title: 'Scope', description: 'Define the problem, success criteria and constraints together.' },
      { step: '02', title: 'Design', description: 'Architect a solution that fits your platforms, data and governance needs.' },
      { step: '03', title: 'Build', description: 'Implement and integrate, with regular checkpoints and working software.' },
      { step: '04', title: 'Enable', description: 'Hand over documentation and training so your team can own it going forward.' },
    ],
  },
  cta: {
    heading: "Let's build your next AI solution",
    body: 'From a focused pilot to full enterprise rollout, get hands-on architecture and delivery guidance from someone who\'s done it before.',
    primaryLabel: 'Request Demo',
    primaryHref: '/contact#contact-form',
    secondaryLabel: 'Meet the Team',
    secondaryHref: '/about',
  },
};
