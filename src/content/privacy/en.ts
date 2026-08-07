import type { PrivacyContent } from './types';

export const en: PrivacyContent = {
  meta: {
    title: 'Privacy Policy | InsightBridge Labs',
    description: 'How InsightBridge Labs collects, uses, and protects your personal information.',
  },
  hero: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    tagline: 'What we collect, why, and what you can do about it.',
    intro:
      'This page explains what personal information InsightBridge Labs collects through this website — including the Contact form and the free Prompt Library download — and how it is used, stored, and protected.',
  },
  lastUpdated: '7 August 2026',
  contactEmail: 'banerjee.pradip@crmtoai.com',
  sections: [
    {
      heading: 'Who we are',
      body: [
        'InsightBridge Labs (part of InsightBridge Consulting) operates this website. For any question about this policy or your data, contact us at the email address at the bottom of this page.',
      ],
    },
    {
      heading: 'What we collect',
      body: [
        'When you use the Contact form, we collect the name, email, phone number (if provided), company, and message you submit.',
        'When you register to download the Prompt Library, we collect your name, email, company, phone number (required only if you use a personal email address such as Gmail or Hotmail, so we have a reliable way to reach you), and the industry library you chose, along with the date and time of your registration.',
        'Like most websites, our hosting and infrastructure providers (see "Where your data is processed" below) may automatically log basic technical information such as IP address and browser type as part of normal, standard operation.',
      ],
    },
    {
      heading: 'Why we collect it',
      body: [
        'To respond to messages sent through the Contact form.',
        'To deliver the Prompt Library download you requested, and to prevent the same person from registering more than once for it.',
        'Where you have ticked the consent box, to follow up with you about the resource you downloaded or the inquiry you sent. We do not add you to a general marketing list without that consent.',
      ],
    },
    {
      heading: 'Our legal basis for processing',
      body: [
        'We process Contact form submissions to respond to a request you initiated (legitimate interest in communicating with people who contact us).',
        'We process Prompt Library registrations on the basis of your consent (the checkbox on the form) for follow-up contact, and on the basis of legitimate interest for the registration record itself, which exists to prevent abuse of a free, gated resource.',
        'You can withdraw consent at any time — see "Your rights" below.',
      ],
    },
    {
      heading: 'Where your data is processed',
      body: [
        'This site is hosted on GitHub Pages. The Prompt Library registration and download system runs on Cloudflare (Workers, D1 database, and R2 storage). These providers act as data processors on our behalf under their own standard data processing terms.',
        'We do not sell your information, and we do not share it with third parties for their own marketing purposes.',
      ],
    },
    {
      heading: 'How long we keep it',
      body: [
        'We keep registration and contact records for as long as necessary for the purposes described above, or until you ask us to delete them, whichever comes first.',
      ],
    },
    {
      heading: 'Your rights',
      body: [
        'Depending on where you live, you may have the right to access, correct, or delete your personal information, to object to or restrict certain processing, and to withdraw consent at any time.',
        'To exercise any of these rights, email us at the address below and we will respond as required by applicable law.',
        'If you are in the EU/EEA and believe we have not handled your data properly, you also have the right to lodge a complaint with your local data protection authority (in Sweden, the IMY — Integritetsskyddsmyndigheten).',
      ],
    },
    {
      heading: 'Cookies and tracking',
      body: [
        'This site does not currently use cookies or third-party analytics/tracking scripts. If that changes, this policy will be updated accordingly.',
      ],
    },
    {
      heading: 'Changes to this policy',
      body: [
        'We may update this policy from time to time. The "last updated" date at the top of this page reflects the most recent revision.',
      ],
    },
  ],
};
