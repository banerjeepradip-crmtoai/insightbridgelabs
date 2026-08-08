export interface BlogPost {
  type: string;
  title: string;
  excerpt: string;
  tags: string[];
  href: string;
  image?: string;
}

export interface BlogContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    intro: string;
  };
  items: BlogPost[];
  cta: {
    heading: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel: string;
    secondaryHref: string;
  };
}
