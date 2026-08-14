import type { ServiceContent } from './types';

export const rapidApplicationDevelopment: ServiceContent = {
  slug: 'rapid-application-development',
  navLabel: 'Rapid Application Development',
  meta: {
    title: 'Rapid Application Development — InsightBridge Labs',
    description:
      'AI-assisted, end-to-end application development — from idea to a deployed, production-ready app with CI/CD, built using Claude and modern AI engineering.',
  },
  hero: {
    eyebrow: 'SERVICES',
    title: 'Rapid Application Development',
    tagline: 'Turn your application idea into a working solution — faster, with AI-assisted engineering.',
    intro:
      'I use Claude and other modern AI development tools to design, build and deploy applications end to end — architecture, code, testing and CI/CD — so a working prototype or MVP can go live in days or weeks, not months.',
  },
  capabilities: {
    eyebrow: 'WHAT WE DO',
    heading: "What's Included",
    items: [
      {
        icon: 'code',
        title: 'AI-Assisted Development',
        description: 'End-to-end build with Claude and modern AI engineering — from architecture to working code.',
      },
      {
        icon: 'nodes',
        title: 'AI Agents & Applications',
        description: 'Design and build intelligent agents, assistants and AI-powered workflows tailored to your business.',
      },
      {
        icon: 'cloud-upload',
        title: 'CI/CD & Deployment',
        description: 'Automated pipelines, testing and cloud deployment so releases are fast, safe and repeatable.',
      },
      {
        icon: 'people',
        title: 'Handover & Enablement',
        description: 'Documentation and training so your team can operate and extend the application after delivery.',
      },
    ],
  },
  process: {
    heading: 'Our Approach',
    steps: [
      { step: '01', title: 'Discover', description: 'Understand the business problem, users and constraints.' },
      { step: '02', title: 'Design', description: 'Define the architecture, workflows and the AI or agent approach.' },
      { step: '03', title: 'Build', description: 'Develop with AI-assisted engineering through short, visible cycles.' },
      { step: '04', title: 'Deploy', description: 'Ship with automated CI/CD and hand over a maintainable application.' },
    ],
  },
  cta: {
    heading: "Let's turn your idea into a working application",
    body: 'From a rapid prototype to a production-ready MVP, get AI-assisted development, testing and deployment — end to end.',
    primaryLabel: 'Discuss Your Application Idea',
    primaryHref: '/contact#contact-form',
    secondaryLabel: 'Meet the Team',
    secondaryHref: '/about',
  },
};
