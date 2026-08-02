import type { ProductContent } from './types';

export const aiSolutionDevelopmentPlatform: ProductContent = {
  slug: 'ai-solution-development-platform',
  navLabel: 'Solution Development Platform',
  meta: {
    title: 'AI-Powered Solution Development Platform — InsightBridge Labs',
    description:
      'Describe a requirement in natural language and a controlled agentic pipeline discovers your Salesforce org, designs a solution, builds and tests it — deploying only after explicit human approval.',
  },
  statusLabel: 'MVP — Actively in Development',
  hero: {
    eyebrow: 'PRODUCTS',
    title: 'AI-Powered Solution Development Platform',
    tagline: 'From a plain-language requirement to a deployed Salesforce solution — with a human approving every step.',
    intro:
      "A multi-tenant platform where you connect a Salesforce org, describe what you need in natural language, and a controlled agentic pipeline — powered by the Claude API — discovers the org, designs a solution, generates the metadata and code, validates and tests it, and deploys only after explicit human approval at every gate.",
  },
  problem: {
    heading: 'Why This Matters',
    paragraphs: [
      "Building on Salesforce today means waiting on scarce, expensive expertise: people who understand both the business requirement and the platform's metadata model well enough to design something that won't break in production. Requirements get lost in translation between business and IT, discovery of what already exists in the org is manual and incomplete, and by the time a solution is built, tested and deployed, the business need has often moved on.",
      'This platform compresses that cycle. You describe what you need in plain language; it discovers the relevant parts of your org, proposes a solution design, generates the metadata and code, and runs it through static analysis, security checks and automated tests — all before a person has to review a single line by hand. What used to take a discovery workshop, a design document and a sprint can start as a same-day, reviewable proposal.',
      "None of that means AI writes to your production org unsupervised. Every proposed change is a draft until a person approves it, and sandbox and production are separate, explicit approval gates — not the same button clicked twice. That's the difference between AI that writes code, and AI that's actually safe to put in front of an enterprise change process.",
    ],
  },
  workflow: {
    heading: 'How It Works',
    columns: 3,
    steps: [
      {
        step: '01',
        title: 'Connect',
        description: 'Securely connect a Salesforce org, sandbox or production. ServiceNow, HubSpot and Dynamics are on the roadmap.',
      },
      {
        step: '02',
        title: 'Discover',
        description: 'The platform maps the objects, fields, Apex, flows and permissions relevant to your requirement — never a full org dump.',
      },
      {
        step: '03',
        title: 'Describe',
        description: 'Describe what you need in natural language. The platform asks clarifying questions where it matters.',
      },
      {
        step: '04',
        title: 'Design',
        description: 'Review a proposed solution design — data model, process and security — before any code is generated.',
      },
      {
        step: '05',
        title: 'Build & Test',
        description: 'Generated metadata and code run through static analysis, security checks and automated tests.',
      },
      {
        step: '06',
        title: 'Approve & Deploy',
        description: 'A human reviews the actual diff and approves the change. Sandbox and production are separate approvals, with full traceability.',
      },
    ],
  },
  safeguards: {
    heading: 'Built-In Safeguards',
    items: [
      'Claude proposes, your team disposes — no AI tool in this platform can write directly to your Salesforce org.',
      'Every deployment is gated: static analysis, security checks and automated tests run before any human sees a diff.',
      'Production requires a second, separate approval — never a re-click of the same button used for sandbox.',
      'Least-privilege by design — the platform only requests the metadata and permissions a requirement actually needs.',
      'Every generated artifact is versioned and attributable, tracing back to a requirement, a model version and an approving user.',
    ],
  },
  techStack: {
    eyebrow: 'UNDER THE HOOD',
    heading: 'Built On',
    tags: [
      'Claude API',
      'Next.js',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Git',
      'Salesforce Metadata API',
      'Salesforce CLI',
      'OAuth 2.0 / OIDC',
      'AWS',
      'Docker',
    ],
  },
  disclaimer: {
    heading: 'MVP Status & Responsible AI Use',
    items: [
      'This product is at MVP stage and evolving quickly. Some capabilities described on this page are still in active development.',
      'Like all AI-based systems, it is built to speed up and assist your team, not replace human judgment. AI-generated proposals are drafts, not final answers — they can be incomplete or wrong, and every change requires human review and explicit approval before it reaches a live environment.',
    ],
  },
  cta: {
    heading: 'See it on your own org',
    body: "We're building this in the open with early design partners. If you want a walkthrough or want to be an early adopter on a sandbox org, let's talk.",
    primaryLabel: 'Request Demo',
    primaryHref: '/contact#contact-form',
    secondaryLabel: 'Meet the Team',
    secondaryHref: '/about',
  },
};
