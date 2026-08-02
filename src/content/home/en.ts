import type { HomeContent } from './types';

export const en: HomeContent = {
  meta: {
    title: 'InsightBridge Labs — Bridging Insights. Building Intelligent Futures.',
    description:
      'InsightBridge Labs helps organizations transform data and AI into real business value with governance, strategy, and enterprise-grade solutions.',
  },
  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      {
        label: 'Services',
        href: '/services',
        children: [
          { label: 'AI Governance', href: '/services/ai-governance' },
          { label: 'AI Strategy', href: '/services/ai-strategy' },
          { label: 'AI Consulting', href: '/services/ai-consulting' },
          { label: 'CRM to AI', href: '/services/crm-to-ai' },
        ],
      },
      {
        label: 'Products',
        href: '/products',
        children: [
          { label: 'Solution Development Platform', href: '/products/ai-solution-development-platform' },
          { label: 'Regulatory Intelligence', href: '/products/regulatory-intelligence-platform' },
        ],
      },
      {
        label: 'Resources',
        href: '/resources',
        children: [
          { label: 'Blog', href: '/resources/blog' },
          { label: 'Case Studies', href: '/resources/case-studies' },
        ],
      },
      { label: 'Contact', href: '/contact' },
    ],
    requestDemo: 'Request Demo',
  },
  hero: {
    heading: 'Bridging Insights.\nBuilding ',
    headingAccent: 'Intelligent Futures.',
    body: 'InsightBridge Labs helps organizations transform data and AI into real business value with governance, strategy, and enterprise-grade solutions.',
    primaryCta: 'Explore Services',
    secondaryCta: 'Request Demo',
  },
  features: [
    {
      icon: 'shield',
      title: 'AI Governance',
      description: 'Responsible AI. Trusted Outcomes.',
    },
    {
      icon: 'brain',
      title: 'AI Strategy',
      description: 'Roadmaps that align AI with business goals.',
    },
    {
      icon: 'cloud',
      title: 'AI & Data Solutions',
      description: 'Scalable solutions built for performance.',
    },
    {
      icon: 'chart',
      title: 'CRM to AI',
      description: 'Maximize ROI with intelligent automation.',
    },
    {
      icon: 'cloud-upload',
      title: 'Salesforce Expertise',
      description: 'Transform with the power of Salesforce.',
    },
  ],
  about: {
    eyebrow: 'ABOUT INSIGHTBRIDGE LABS',
    heading: 'Your Bridge to AI-Powered Business Transformation',
    body: "At InsightBridge Labs, we combine deep industry expertise with cutting-edge AI to help businesses innovate, automate, and scale responsibly. From strategy to implementation, we're with you at every step.",
    cta: 'Learn More About Us',
    cards: [
      {
        icon: 'shield-check',
        image: 'governance',
        title: 'AI Governance Platform',
        description: 'Ensure transparency, fairness, and compliance in every AI initiative.',
        href: '/products/ai-governance-platform',
      },
      {
        icon: 'nodes',
        image: 'consulting',
        title: 'AI Consulting',
        description: 'Strategic guidance to turn your AI vision into measurable business impact.',
        href: '/services/ai-consulting',
      },
      {
        icon: 'cloud',
        image: 'solutions',
        title: 'AI Solutions',
        description: 'Pre-built and custom solutions that accelerate productivity and growth.',
        href: '/products/ai-solutions',
      },
    ],
  },
  stats: [
    { icon: 'trophy', value: '20+', label: 'Years of Experience' },
    { icon: 'trending', value: '50+', label: 'Projects Delivered' },
    { icon: 'globe', value: '5+', label: 'Industries Served' },
  ],
  footer: {
    tagline: 'Bridging Insights. Building Intelligent Futures.',
    columns: [
      {
        heading: 'Company',
        links: [
          { label: 'About Us', href: '/about' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        heading: 'Services',
        links: [
          { label: 'AI Governance', href: '/services/ai-governance' },
          { label: 'AI Strategy', href: '/services/ai-strategy' },
          { label: 'AI Consulting', href: '/services/ai-consulting' },
          { label: 'CRM to AI', href: '/services/crm-to-ai' },
        ],
      },
      {
        heading: 'Products',
        links: [
          { label: 'Solution Development Platform', href: '/products/ai-solution-development-platform' },
          { label: 'Regulatory Intelligence', href: '/products/regulatory-intelligence-platform' },
        ],
      },
      {
        heading: 'Resources',
        links: [
          { label: 'Blog', href: '/resources/blog' },
          { label: 'Case Studies', href: '/resources/case-studies' },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} InsightBridge Labs. All rights reserved.`,
    orgNumber: 'Org. Number: 559595-5419',
  },
};
