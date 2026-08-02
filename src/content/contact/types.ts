export interface ContactContent {
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
  form: {
    heading: string;
    email: string;
    submitLabel: string;
    disclaimer: string;
  };
  info: {
    heading: string;
    email: string;
    phone: string;
    location: string;
    linkedinLabel: string;
    linkedinHref: string;
  };
  schedule: {
    heading: string;
    body: string;
    buttonLabel: string;
    href: string;
    embedSrc: string;
  };
  github: {
    heading: string;
    body: string;
    buttonLabel: string;
    href: string;
  };
}
