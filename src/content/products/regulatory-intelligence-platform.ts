import type { ProductContent } from './types';

export const regulatoryIntelligencePlatform: ProductContent = {
  slug: 'regulatory-intelligence-platform',
  navLabel: 'Regulatory Intelligence',
  meta: {
    title: 'Regulatory Intelligence Platform — InsightBridge Labs',
    description:
      'AI governance and data readiness for the EU AI Act, assessed together — citation-grounded compliance assessments and data-quality scoring for SMBs, self-serve or self-hosted.',
  },
  statusLabel: 'MVP — Actively in Development',
  hero: {
    eyebrow: 'PRODUCTS',
    title: 'Regulatory Intelligence Platform',
    tagline: 'EU AI Act compliance and data readiness, assessed together — because the regulation already treats them as one problem.',
    intro:
      "A self-serve platform that assesses your AI use cases against the EU AI Act and related regulation, and scores whether the data behind them is actually ready to build on — grounded in cited regulatory text, not a static checklist. Available hosted on regintel.eu, or self-hosted on your own cloud.",
  },
  problem: {
    heading: 'Why This Matters',
    paragraphs: [
      "Article 10 of the EU AI Act already requires providers of high-risk AI systems to prove their training data is relevant, representative and error-checked. In practice, that means data readiness isn't a nice-to-have next to AI governance — it's a control the regulation expects you to have evidence for. Most compliance tools don't see it that way: they assess your AI use case and assume clean, well-understood data as a given input.",
      "Enterprise governance platforms and data catalogs both exist today, but they're priced and sold for organizations with dedicated compliance and data teams. For a growing SMB building its first AI use cases, that leaves a gap: no self-serve product owns both halves — is this use case high-risk, and is the data behind it actually ready — in one assessment.",
      'This platform closes that gap with citation-grounded assessments: every regulatory finding is retrieved and cited from the actual regulation text via semantic search, not a static mapping someone curated once and stopped maintaining. Data readiness is scored the same way — against the real schema and field profiles of your connected data source, not a questionnaire.',
    ],
  },
  workflow: {
    heading: 'How It Works',
    columns: 3,
    steps: [
      {
        step: '01',
        title: 'Describe',
        description: 'Describe your AI use case in plain language.',
      },
      {
        step: '02',
        title: 'Confirm Flags',
        description: 'AI infers relevant governance flags from your description — you review and confirm them before anything is assessed.',
      },
      {
        step: '03',
        title: 'Cite & Assess Risk',
        description: 'A rule engine matches confirmed flags to applicable frameworks, retrieves the exact regulation text via semantic search, and grounds the risk assessment in that cited text.',
      },
      {
        step: '04',
        title: 'Connect Your Data',
        description: 'Connect a data source — Postgres or CSV today, more connectors on the roadmap — and select the objects relevant to the use case.',
      },
      {
        step: '05',
        title: 'Score Readiness',
        description: 'The platform maps required data elements to your real fields and scores coverage, completeness and mapping confidence with a deterministic engine, not an LLM guess.',
      },
      {
        step: '06',
        title: 'Build Your Evidence Trail',
        description: 'Every assessment and readiness score is persisted as an append-only record — ready to show as evidence, not just a chat transcript.',
      },
    ],
  },
  safeguards: {
    heading: 'Built-In Safeguards',
    items: [
      'Every regulatory finding is grounded in cited regulation text and similarity scores — never an ungrounded model opinion.',
      'Data readiness scoring runs on a deterministic, pure-TypeScript engine — not an LLM — so the same inputs always produce the same score.',
      'You review and confirm every AI-suggested governance flag before an assessment runs.',
      'Assessments and readiness scores are stored append-only, giving you a durable evidence trail rather than an editable document.',
      'Bring your own data connector — the platform only profiles the objects and fields you select, not your whole database.',
    ],
  },
  techStack: {
    eyebrow: 'UNDER THE HOOD',
    heading: 'Built On',
    tags: [
      'OpenAI GPT-4o mini',
      'pgvector',
      'Semantic Regulation Search',
      'PostgreSQL',
      'TypeScript',
      'Postgres / CSV Connectors',
      'Rule Engine',
      'AWS / GCP / Azure (self-host option)',
    ],
  },
  disclaimer: {
    heading: 'MVP Status & Responsible Use',
    items: [
      'This product is at MVP stage and evolving quickly. Some capabilities described on this page are still in active development.',
      'Like all AI-based systems, it is built to speed up and assist your team, not replace human judgment. AI-generated suggestions and risk assessments are drafts, not final answers — review them before relying on them.',
      'This platform assists with EU AI Act and data-readiness assessment; it does not provide legal advice and is not a substitute for qualified legal counsel on your compliance obligations.',
    ],
  },
  cta: {
    heading: 'Assess your first AI use case',
    body: "See a citation-grounded compliance and data-readiness assessment on one of your own AI use cases — self-serve on regintel.eu, or self-hosted on your own cloud. Consulting engagements via InsightBridge Consulting are available as a separate add-on on any tier.",
    primaryLabel: 'Request Demo',
    primaryHref: '/contact#contact-form',
    secondaryLabel: 'Explore AI Governance Service',
    secondaryHref: '/services/ai-governance',
  },
};
