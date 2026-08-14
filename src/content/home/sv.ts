import type { HomeContent } from './types';

export const sv: HomeContent = {
  meta: {
    title: 'InsightBridge Labs — Broar till insikt. Vi bygger intelligenta framtider.',
    description:
      'InsightBridge Labs hjälper organisationer att omvandla data och AI till verkligt affärsvärde genom styrning, strategi och lösningar i företagsklass.',
  },
  nav: {
    links: [
      { label: 'Hem', href: '/sv/' },
      { label: 'Om oss', href: '/sv/about' },
      {
        label: 'Tjänster',
        href: '/sv/services',
        children: [
          { label: 'AI-styrning', href: '/sv/services/ai-governance' },
          { label: 'AI-strategi', href: '/sv/services/ai-strategy' },
          { label: 'AI-konsulting', href: '/sv/services/ai-consulting' },
          { label: 'CRM till AI', href: '/sv/services/crm-to-ai' },
          { label: 'Snabb applikationsutveckling', href: '/sv/services/rapid-application-development' },
        ],
      },
      {
        label: 'Produkter',
        href: '/sv/products',
        children: [
          { label: 'Plattform för lösningsutveckling', href: '/sv/products/ai-solution-development-platform' },
          { label: 'Regulatorisk intelligens', href: '/sv/products/regulatory-intelligence-platform' },
        ],
      },
      {
        label: 'Resurser',
        href: '/sv/resources',
        children: [
          { label: 'Blogg', href: '/sv/resources/blog' },
          { label: 'Fallstudier', href: '/sv/resources/case-studies' },
          { label: 'Promptbibliotek', href: '/sv/resources/prompt-library' },
        ],
      },
      { label: 'Kontakt', href: '/sv/contact' },
    ],
    requestDemo: 'Boka demo',
  },
  hero: {
    heading: 'Broar till insikt.\nVi bygger ',
    headingAccent: 'intelligenta framtider.',
    body: 'InsightBridge Labs hjälper organisationer att omvandla data och AI till verkligt affärsvärde genom styrning, strategi och lösningar i företagsklass.',
    primaryCta: 'Utforska tjänster',
    primaryCtaHref: '/sv/services/ai-governance',
    secondaryCta: 'Boka demo',
    secondaryCtaHref: '/sv/contact#contact-form',
  },
  features: [
    {
      icon: 'shield',
      title: 'AI-styrning',
      description: 'Ansvarsfull AI. Pålitliga resultat.',
    },
    {
      icon: 'brain',
      title: 'AI-strategi',
      description: 'Färdplaner som förenar AI med affärsmål.',
    },
    {
      icon: 'cloud',
      title: 'AI- och datalösningar',
      description: 'Skalbara lösningar byggda för prestanda.',
    },
    {
      icon: 'chart',
      title: 'CRM till AI',
      description: 'Maximera avkastningen med intelligent automation.',
    },
    {
      icon: 'cloud-upload',
      title: 'Salesforce-expertis',
      description: 'Transformera med kraften i Salesforce.',
    },
  ],
  rapidDev: {
    eyebrow: 'NYHET · AI-DRIVEN UTVECKLING',
    heading: 'Från idé till fungerande app — på dagar, inte månader',
    body: 'Vi bygger applikationer, AI-agenter och intelligenta assistenter från start till mål med Claude och modern AI-assisterad ingenjörskonst — arkitektur, kod, testning och CI/CD ingår.',
    primaryCta: 'Utforska snabb applikationsutveckling',
    primaryCtaHref: '/sv/services/rapid-application-development',
    secondaryCta: 'Diskutera din idé',
    secondaryCtaHref: '/sv/contact#contact-form',
    diagram: {
      hub: 'Claude',
      code: 'Kod',
      agents: 'Agenter',
      cicd: 'CI/CD',
      enable: 'Drift',
    },
  },
  about: {
    eyebrow: 'OM INSIGHTBRIDGE LABS',
    heading: 'Din bro till AI-driven affärstransformation',
    body: "På InsightBridge Labs kombinerar vi djup branschexpertis med den senaste AI-tekniken för att hjälpa företag att innovera, automatisera och växa på ett ansvarsfullt sätt. Från strategi till genomförande finns vi med dig hela vägen.",
    cta: 'Läs mer om oss',
    ctaHref: '/sv/about',
    cards: [
      {
        icon: 'shield-check',
        image: 'governance',
        title: 'AI-styrningsplattform',
        description: 'Säkerställ transparens, rättvisa och regelefterlevnad i varje AI-initiativ.',
        href: '/sv/services/ai-governance',
      },
      {
        icon: 'nodes',
        image: 'consulting',
        title: 'AI-konsulting',
        description: 'Strategisk vägledning som omvandlar din AI-vision till mätbar affärsnytta.',
        href: '/sv/services/ai-consulting',
      },
      {
        icon: 'cloud',
        image: 'solutions',
        title: 'AI-lösningar',
        description: 'Färdiga och skräddarsydda lösningar som accelererar produktivitet och tillväxt.',
        href: '/sv/products/regulatory-intelligence-platform',
      },
    ],
  },
  stats: [
    { icon: 'trophy', value: '20+', label: 'Års erfarenhet' },
    { icon: 'trending', value: '50+', label: 'Levererade projekt' },
    { icon: 'globe', value: '5+', label: 'Betjänade branscher' },
  ],
  footer: {
    tagline: 'Broar till insikt. Vi bygger intelligenta framtider.',
    social: [
      { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/company/insight-bridge-consulting-ab/' },
      { icon: 'x', label: 'X', href: null },
      { icon: 'instagram', label: 'Instagram', href: null },
    ],
    columns: [
      {
        heading: 'Företag',
        links: [
          { label: 'Om oss', href: '/sv/about' },
          { label: 'Kontakt', href: '/sv/contact' },
        ],
      },
      {
        heading: 'Tjänster',
        links: [
          { label: 'AI-styrning', href: '/sv/services/ai-governance' },
          { label: 'AI-strategi', href: '/sv/services/ai-strategy' },
          { label: 'AI-konsulting', href: '/sv/services/ai-consulting' },
          { label: 'CRM till AI', href: '/sv/services/crm-to-ai' },
          { label: 'Snabb applikationsutveckling', href: '/sv/services/rapid-application-development' },
        ],
      },
      {
        heading: 'Produkter',
        links: [
          { label: 'Plattform för lösningsutveckling', href: '/sv/products/ai-solution-development-platform' },
          { label: 'Regulatorisk intelligens', href: '/sv/products/regulatory-intelligence-platform' },
        ],
      },
      {
        heading: 'Resurser',
        links: [
          { label: 'Blogg', href: '/sv/resources/blog' },
          { label: 'Fallstudier', href: '/sv/resources/case-studies' },
          { label: 'Promptbibliotek', href: '/sv/resources/prompt-library' },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} InsightBridge Labs. Alla rättigheter förbehållna.`,
    orgNumber: 'Org.nr: 559595-5419',
    privacyLabel: 'Integritetspolicy',
    privacyHref: '/sv/privacy',
  },
};
