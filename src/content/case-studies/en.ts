import type { CaseStudiesContent } from './types';

export const en: CaseStudiesContent = {
  meta: {
    title: 'Case Studies — InsightBridge Labs',
    description:
      'Reference Salesforce solution designs for AI-driven sales optimization — lead scoring, opportunity win prediction and dynamic pricing.',
  },
  hero: {
    eyebrow: 'RESOURCES',
    title: 'Case Studies',
    tagline: 'Reference solution designs, not slideware.',
    intro:
      "These are worked solution designs for applying AI inside Salesforce — the data model, the architecture and the guardrails, not just the pitch. They're patterns we've designed and can adapt to your org, rather than results from a specific named client.",
  },
  items: [
    {
      category: 'Sales Optimization',
      title: 'Lead Scoring & Prioritization',
      challenge:
        'Sales teams were spending time on every lead and opportunity equally, with no data-driven way to know which ones were actually worth prioritizing — hurting both conversion rates and rep productivity.',
      solution:
        'An automated scoring pipeline inside Salesforce: standard CRM fields (lead source, industry, company size, engagement recency, deal stage, forecast category and more) feed a predictive model — Einstein Discovery natively, or an external model via Apex callout — that scores every lead and opportunity from 0–100, engineering features like days since last activity and opportunity age along the way.',
      outcome:
        'Reps get a prioritized, dashboard-driven view with a filtered list of high-priority records (score > 70), turning a gut-feel triage process into a repeatable, data-driven one.',
      tags: ['Salesforce', 'Einstein Discovery', 'Predictive Scoring', 'Apex'],
    },
    {
      category: 'Sales Optimization',
      title: 'Opportunity Win Prediction',
      challenge:
        'Forecasting which deals would actually close was based on rep intuition and pipeline stage alone, with no systematic signal for where to focus effort to improve win rate.',
      solution:
        "A binary classification model trained on three years of closed-won/closed-lost opportunity history using Salesforce's native Einstein Prediction Builder — standard fields only, no custom data pipeline required. The model outputs an Opportunity Win Score (0–100) and surfaces the top predictive factors behind each score: engagement level, deal size, time-to-close and buying power.",
      outcome:
        'Sales leaders get an early, quantified signal on deal health, and reps get next-best-action guidance instead of a static probability field.',
      tags: ['Salesforce', 'Einstein Prediction Builder', 'Machine Learning', 'Sales Forecasting'],
    },
    {
      category: 'Sales Optimization',
      title: 'Dynamic Pricing Recommendations',
      challenge:
        'Reps had no consistent way to know how much discount they could offer on a quote line item without either leaving margin on the table or over-discounting to close a deal.',
      solution:
        'A prediction service, callable in real time from the Quote Line Item, recommends a discount or target price using Einstein Discovery trained on historical closed deals — with custom guardrails (maximum discount per product family, minimum margin thresholds, competitor pricing rules) enforced alongside the model. Recommendations, confidence scores and reasoning surface directly in a Lightning Web Component, with reps able to override.',
      outcome:
        'Pricing guidance that protects margin while still giving reps room to close, with every recommendation explainable rather than a black box.',
      tags: ['Salesforce', 'Einstein Discovery', 'Lightning Web Components', 'Pricing Strategy'],
    },
  ],
  cta: {
    heading: 'Want a solution design like this for your org?',
    body: "These patterns adapt to your data and your Salesforce instance. Let's talk about the highest-value place to start.",
    primaryLabel: 'Request Demo',
    primaryHref: '/contact#contact-form',
    secondaryLabel: 'Explore CRM to AI',
    secondaryHref: '/services/crm-to-ai',
  },
};
