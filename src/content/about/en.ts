import type { AboutContent } from './types';

export const en: AboutContent = {
  meta: {
    title: 'About Us — InsightBridge Labs',
    description:
      'InsightBridge Labs is led by Pradip Banerjee, an Enterprise AI Solution Architect with 20+ years designing enterprise CRM and AI-enabled platforms on Salesforce and cloud ecosystems.',
  },
  hero: {
    eyebrow: 'ABOUT INSIGHTBRIDGE LABS',
    name: 'Pradip Banerjee',
    role: 'Founder & Principal AI Solution Architect',
    location: 'Stockholm, Sweden',
    intro:
      'Enterprise AI Solution Architect with 20+ years designing enterprise business platforms and building AI-enabled solutions on Salesforce and cloud ecosystems. InsightBridge Labs is where that experience becomes a dedicated practice — helping organizations combine structured enterprise data with large language models, without losing sight of governance, explainability and compliance.',
    linkedinLabel: 'Connect on LinkedIn',
    linkedinHref: 'https://www.linkedin.com/in/pradipbanerjee1',
    email: 'banerjee.pradip@gmail.com',
  },
  bio: {
    heading: 'Executive Profile',
    paragraphs: [
      'My expertise combines deep Salesforce architecture with modern AI technologies including Agentic AI, Retrieval-Augmented Generation (RAG), Semantic Search, Vector Databases, Enterprise Knowledge Retrieval, AI Governance, and Explainable AI.',
      'Over the last several years I have designed and delivered enterprise CRM and digital transformation solutions across Telecommunications, Manufacturing and IT Services. More recently I have been building enterprise AI platforms that integrate Salesforce, OpenAI, Data Cloud, Snowflake, Databricks and cloud-native backend services to automate decision-making, compliance assessments and intelligent business processes.',
      'My hands-on experience spans the complete AI application lifecycle — from business use case modelling and enterprise data architecture through semantic retrieval, prompt engineering, AI orchestration, backend APIs, cloud deployment, integration design and production-ready enterprise applications. I specialize in designing scalable AI solutions that combine structured enterprise data with large language models while maintaining governance, explainability, auditability and regulatory compliance.',
    ],
  },
  expertise: {
    eyebrow: 'WHAT I BRING',
    heading: 'Areas of Expertise',
    items: [
      {
        icon: 'shield-check',
        title: 'AI Governance & Compliance',
        description: 'Assessing enterprise AI use cases against the EU AI Act, GDPR, ISO 42001 and NIST AI RMF.',
      },
      {
        icon: 'brain',
        title: 'Agentic AI & RAG',
        description: 'Retrieval-augmented generation, semantic search and vector databases for enterprise knowledge retrieval.',
      },
      {
        icon: 'cloud-upload',
        title: 'Salesforce Architecture',
        description: 'Agentforce, Einstein AI, Data Cloud, Apex and LWC across large-scale enterprise CRM platforms.',
      },
      {
        icon: 'nodes',
        title: 'Enterprise Integration',
        description: 'Connecting Salesforce with SAP, Snowflake, Databricks and cloud-native backend services.',
      },
      {
        icon: 'cloud',
        title: 'Cloud & DevOps',
        description: 'AWS, Docker and CI/CD pipelines for production deployment of AI-enabled applications.',
      },
      {
        icon: 'chart',
        title: 'Data & AI Engineering',
        description: 'Enterprise data modelling, embeddings and knowledge base architecture.',
      },
    ],
  },
  experience: {
    eyebrow: 'TRACK RECORD',
    heading: 'Professional Experience',
    entries: [
      {
        company: 'Ericsson AB, Stockholm',
        role: 'Enterprise Solution Architect',
        period: 'Aug 2022 – Present',
        points: [
          'Lead enterprise solution governance, architecture standards and AI-enabled platform modernization.',
          'Designed AI-enabled Salesforce solutions using Agentforce, Einstein AI and Data Cloud.',
          'Reduced quote cycle time by 70% and improved course delivery timelines by 45% through CRM automation.',
        ],
      },
      {
        company: 'Proact Group AB, Stockholm',
        role: 'Salesforce System Owner',
        period: 'May 2019 – Aug 2022',
        points: [
          'Owned enterprise Salesforce platform governance, scalability planning and transformation roadmap.',
          'Led enterprise integration and automation programs connecting the CRM ecosystem with business-critical applications.',
        ],
      },
      {
        company: 'Capgemini, Stockholm',
        role: 'Service Delivery Architect',
        period: 'Sep 2016 – May 2019',
        points: [
          'Provided architecture guidance and governance standards across the CRM Center of Excellence.',
          'Led solution scoping workshops, RFP/RFI responses and bid defense for large transformation programs.',
        ],
      },
      {
        company: 'DXC Technology',
        role: 'Practice Manager',
        period: 'Apr 2015 – Sep 2016',
        points: [
          'Led the Salesforce Practice, managing a portfolio of transformation programs and mentoring architects and consultants.',
          'Partnered with sales teams to shape multi-million-dollar opportunities.',
        ],
      },
      {
        company: 'Deloitte, Malaysia & Singapore',
        role: 'Senior Salesforce Solution Consultant',
        period: 'Jul 2014 – Mar 2016',
        points: ['Managed enterprise CRM workstreams and cross-functional delivery coordination across APAC engagements.'],
      },
      {
        company: 'Multiple Organizations, Multiple Geographies',
        role: 'Early IT Career',
        period: '2000 – 2013',
        points: [
          'Held a variety of IT roles across different countries and industries, building the technical and delivery foundation for the enterprise architecture work that followed.',
        ],
      },
    ],
  },
  featuredProjects: {
    heading: 'Selected AI Projects',
    items: [
      {
        icon: 'shield-check',
        eyebrow: 'PERSONAL PRODUCT DEVELOPMENT — READY TO DEMO',
        title: 'Enterprise AI Governance Platform',
        description:
          'Personally designed and built an AI-powered governance platform that assesses enterprise AI use cases against the EU AI Act, GDPR, ISO 42001 and NIST AI RMF — combining OpenAI, RAG, semantic search and vector databases with a Salesforce, Node.js and PostgreSQL stack, deployed on AWS with full CI/CD.',
        tags: ['OpenAI', 'RAG', 'Vector Database', 'Salesforce', 'Agentforce', 'Data Cloud', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
      },
      {
        icon: 'nodes',
        eyebrow: 'PERSONAL PRODUCT DEVELOPMENT — IN PROGRESS',
        title: 'AI-Powered Solution Development Platform',
        description:
          'Architecting a multi-tenant platform where a user connects a Salesforce org, describes a requirement in natural language, and a controlled agentic pipeline — powered by the Claude API — discovers the org, designs a solution, generates and tests metadata/code, and deploys only after explicit human approval at every gate. Claude never touches the customer org directly: every change is proposed, validated and human-approved before anything reaches a live environment.',
        tags: ['Claude API', 'Next.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Git', 'Salesforce Metadata API', 'OAuth 2.0', 'AWS S3', 'Multi-Tenant'],
      },
    ],
  },
  credentials: {
    certificationsHeading: 'Certifications & Continuous Learning',
    certifications: [
      'Salesforce Ecosystem & Enterprise Architecture',
      'AI & Cloud Transformation',
      'EU AI Act',
      'Enterprise Integration & Data Platforms',
      'Process Intelligence & Automation',
      'AWS & AI Platform Learning Initiatives',
    ],
  },
  differentiators: {
    heading: 'Why Work With Me',
    items: [
      'Combines deep Salesforce technical expertise with enterprise transformation leadership.',
      'Strong understanding of AI-enabled CRM modernization and intelligent business platforms.',
      'Extensive experience across Nordic and global enterprise environments.',
      'Proven ability to align business strategy, enterprise architecture and operational transformation.',
      'Experienced in driving cross-functional collaboration across business, architecture, delivery and vendor organizations.',
      'A strong balance of strategic leadership and technical credibility.',
      'Enterprise Solution Architect experience across architecture, technology and end-to-end delivery — turning complex business requirements into practical, scalable applications, rapidly and responsibly.',
      'Combines strategic thinking with hands-on development to accelerate value realisation, reduce development costs and improve productivity through AI-enabled automation.',
      'Validates business needs early and designs for scale from the outset, so promising concepts can progress from focused prototype to operational solution.',
      'Delivers in days or weeks rather than prolonged development cycles, while maintaining clear scope, predictable delivery and long-term maintainability.',
    ],
  },
  quickFacts: {
    heading: 'Quick Facts',
    location: 'Based in Stockholm, Sweden',
    languages: 'English (fluent), Swedish (working knowledge)',
    memberships: [
      'Active member, Sweden-India Business Council (SIBC)',
      'Member, Red Cross',
      'Member, AIMA (All India Management Association)',
    ],
    workEligibility: 'Swedish citizen — available for remote or hybrid work anywhere in Europe, no sponsorship required.',
  },
  cta: {
    heading: "Let's talk about your AI journey",
    body: 'Whether it\'s AI governance, a Salesforce-integrated AI platform, or a strategy roadmap — get in touch to discuss what InsightBridge Labs can build for you.',
    primaryLabel: 'Request Demo',
    primaryHref: '/contact#contact-form',
    secondaryLabel: 'Explore Services',
    secondaryHref: '/services/ai-governance',
  },
};
