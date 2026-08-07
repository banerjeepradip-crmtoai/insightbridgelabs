export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceCard {
  icon: string;
  image: string;
  title: string;
  description: string;
  href: string;
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export interface HomeContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    links: NavLink[];
    requestDemo: string;
  };
  hero: {
    heading: string;
    headingAccent: string;
    body: string;
    primaryCta: string;
    primaryCtaHref: string;
    secondaryCta: string;
    secondaryCtaHref: string;
  };
  features: FeatureItem[];
  about: {
    eyebrow: string;
    heading: string;
    body: string;
    cta: string;
    ctaHref: string;
    cards: ServiceCard[];
  };
  stats: StatItem[];
  footer: {
    tagline: string;
    social: { icon: 'linkedin' | 'x' | 'instagram'; label: string; href: string | null }[];
    columns: { heading: string; links: { label: string; href: string }[] }[];
    copyright: string;
    orgNumber: string;
    privacyLabel: string;
    privacyHref: string;
  };
}
