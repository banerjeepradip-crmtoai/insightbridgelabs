import type { ServiceContent } from './types';

export const crmToAi: ServiceContent = {
  slug: 'crm-to-ai',
  navLabel: 'CRM to AI',
  meta: {
    title: 'CRM to AI — InsightBridge Labs',
    description:
      'Turn Salesforce, Dynamics or HubSpot data into actionable AI — predictive analytics, sales productivity, service optimization and AI-augmented CRM applications.',
  },
  hero: {
    eyebrow: 'SERVICES',
    title: 'CRM to AI',
    tagline: 'Turn Your CRM Into an AI-Driven Growth Engine.',
    intro:
      "Your CRM holds a goldmine of customer, sales and service data — but raw data alone doesn't move the needle. Actionable AI turns that data into automated processes, predicted behavior and next-best-action recommendations, so your team makes smarter decisions, faster.",
  },
  capabilities: {
    eyebrow: 'WHERE AI MEETS YOUR CRM',
    heading: "What's Included",
    items: [
      {
        icon: 'trending',
        title: 'Sales Optimization',
        description:
          'Increase revenue through better targeting, prioritization and closing efficiency: lead scoring, opportunity win prediction, dynamic pricing and sales forecasting.',
      },
      {
        icon: 'people',
        title: 'Customer Insights & Personalization',
        description:
          'Build a 360° view of every customer and personalize every interaction with next-best-action recommendations, segmentation and churn prediction.',
      },
      {
        icon: 'chart',
        title: 'Marketing Intelligence',
        description:
          'Improve campaign effectiveness and ROI with performance prediction, content personalization, and channel and ad-spend optimization.',
      },
      {
        icon: 'nodes',
        title: 'Customer Service & Support',
        description:
          'Reduce cost-to-serve and improve satisfaction with AI-powered chatbots, intelligent case routing, sentiment analysis and proactive service.',
      },
      {
        icon: 'cloud-upload',
        title: 'Process Automation & Productivity',
        description:
          'Cut manual work and speed up execution with call and email summarization, auto data enrichment, smart task suggestions and document processing.',
      },
      {
        icon: 'brain',
        title: 'AI-Augmented CRM Applications',
        description:
          'Bring AI natively into the CRM UI: in-CRM copilots, automated quote building, voice-activated updates and predictive SLA management.',
      },
    ],
  },
  process: {
    heading: 'Our Approach',
    steps: [
      {
        step: '01',
        title: 'Assess',
        description: 'Map your CRM data model and identify the highest-value places to apply AI — scoring, forecasting, routing and beyond.',
      },
      {
        step: '02',
        title: 'Design',
        description: 'Architect the AI layer: models, integrations and guardrails that fit natively inside Salesforce, Dynamics or HubSpot.',
      },
      {
        step: '03',
        title: 'Build',
        description: 'Implement and integrate — from predictive models to in-CRM copilots — using your existing CRM as the system of record.',
      },
      {
        step: '04',
        title: 'Measure',
        description: 'Track adoption and business impact, and iterate as new use cases and data become available.',
      },
    ],
  },
  cta: {
    heading: 'Ready to make your CRM actionable?',
    body: "Whether it's predictive analytics, an in-CRM copilot, or governance for your AI-augmented CRM, let's talk about the highest-value place to start.",
    primaryLabel: 'Request Demo',
    primaryHref: '/contact#contact-form',
    secondaryLabel: 'Meet the Team',
    secondaryHref: '/about',
  },
};
