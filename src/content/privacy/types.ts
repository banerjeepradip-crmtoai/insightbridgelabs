export interface PrivacyContent {
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
  lastUpdated: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  contactEmail: string;
}
