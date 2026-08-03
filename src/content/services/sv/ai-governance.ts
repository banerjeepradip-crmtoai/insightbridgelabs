import type { ServiceContent } from '../types';

export const aiGovernance: ServiceContent = {
  slug: 'ai-governance',
  navLabel: 'AI-styrning',
  meta: {
    title: 'AI-styrning — InsightBridge Labs',
    description:
      'Bedöm, dokumentera och övervaka AI-användningsfall mot EU:s AI-förordning, GDPR, ISO 42001 och NIST AI RMF. Ansvarsfull AI. Pålitliga resultat.',
  },
  hero: {
    eyebrow: 'TJÄNSTER',
    title: 'AI-styrning',
    tagline: 'Ansvarsfull AI. Pålitliga resultat.',
    intro:
      'När AI går från pilot till produktion kan styrning inte vara en eftertanke. Vi hjälper dig att bedöma, dokumentera och övervaka AI-användningsfall mot de regelverk som gäller — så att du kan innovera med förtroende och stå bakom varje automatiserat beslut.',
  },
  capabilities: {
    eyebrow: 'VAD VI GÖR',
    heading: 'Vad som ingår',
    items: [
      {
        icon: 'shield-check',
        title: 'Regelverkskartläggning',
        description: 'Bedöm AI-användningsfall mot EU:s AI-förordning, GDPR, ISO 42001 och NIST AI RMF.',
      },
      {
        icon: 'brain',
        title: 'Förklarbarhet och spårbarhet',
        description: 'Dokumentera modellbeslut och datahärkomst så att varje resultat kan spåras och förklaras.',
      },
      {
        icon: 'chart',
        title: 'Risk- och konsekvensbedömning',
        description: 'Klassificera AI-användningsfall efter risknivå och definiera de kontroller varje nivå kräver.',
      },
      {
        icon: 'nodes',
        title: 'Löpande övervakning',
        description: 'Kontinuerlig tillsyn av AI-system i produktion, inte bara en engångsgranskning.',
      },
    ],
  },
  process: {
    heading: 'Vårt tillvägagångssätt',
    steps: [
      { step: '01', title: 'Upptäck', description: 'Inventera varje AI-användningsfall i organisationen, från pilot till produktion.' },
      { step: '02', title: 'Bedöm', description: 'Poängsätt varje användningsfall mot tillämpliga regelverk och intern policy.' },
      { step: '03', title: 'Åtgärda', description: 'Täta styrningsluckor med dokumentation, kontroller och tekniska skyddsåtgärder.' },
      { step: '04', title: 'Övervaka', description: 'Håll styrningen aktuell i takt med att modeller, data och regelverk utvecklas.' },
    ],
  },
  cta: {
    heading: 'För in styrning i era AI-initiativ',
    body: 'Oavsett om ni förbereder er för EU:s AI-förordning eller bygger en intern AI-policy — hör av er för att diskutera hur styrning ser ut för er organisation.',
    primaryLabel: 'Boka demo',
    primaryHref: '/sv/contact#contact-form',
    secondaryLabel: 'Möt teamet',
    secondaryHref: '/sv/about',
  },
};
