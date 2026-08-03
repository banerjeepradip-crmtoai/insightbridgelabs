import type { ServiceContent } from '../types';

export const aiConsulting: ServiceContent = {
  slug: 'ai-consulting',
  navLabel: 'AI-konsulting',
  meta: {
    title: 'AI-konsulting — InsightBridge Labs',
    description:
      'Strategisk vägledning som omvandlar din AI-vision till mätbar affärsnytta — lösningsarkitektur, piloter, implementation och kompetensöverföring.',
  },
  hero: {
    eyebrow: 'TJÄNSTER',
    title: 'AI-konsulting',
    tagline: 'Strategisk vägledning som omvandlar din AI-vision till mätbar affärsnytta.',
    intro:
      'Från första proof of concept till organisationsomfattande utrullning ger vi praktisk arkitektur- och leveransvägledning — genom att kombinera djup Salesforce- och plattformsexpertis med modern AI-ingenjörskonst.',
  },
  capabilities: {
    eyebrow: 'VAD VI GÖR',
    heading: 'Vad som ingår',
    items: [
      {
        icon: 'nodes',
        title: 'Lösningsarkitektur',
        description: 'Designa AI-drivna lösningar som passar er befintliga företagsarkitektur.',
      },
      {
        icon: 'brain',
        title: 'Proof of concept och piloter',
        description: 'Validera idéer snabbt med fokuserade piloter av produktionskvalitet.',
      },
      {
        icon: 'cloud-upload',
        title: 'Implementation och integration',
        description: 'Bygg och integrera AI-funktionalitet i Salesforce och molnplattformar.',
      },
      {
        icon: 'people',
        title: 'Kompetensöverföring',
        description: 'Utbilda interna team så att kompetensen stannar kvar internt när vi är klara.',
      },
    ],
  },
  process: {
    heading: 'Vårt tillvägagångssätt',
    steps: [
      { step: '01', title: 'Avgränsa', description: 'Definiera problemet, framgångskriterier och begränsningar tillsammans.' },
      { step: '02', title: 'Designa', description: 'Arkitektera en lösning som passar era plattformar, data och styrningsbehov.' },
      { step: '03', title: 'Bygg', description: 'Implementera och integrera, med regelbundna avstämningar och fungerande mjukvara.' },
      { step: '04', title: 'Överlämna', description: 'Överlämna dokumentation och utbildning så att ert team kan äga lösningen framåt.' },
    ],
  },
  cta: {
    heading: 'Låt oss bygga er nästa AI-lösning',
    body: 'Från en fokuserad pilot till full organisationsomfattande utrullning — få praktisk arkitektur- och leveransvägledning från någon som gjort det förut.',
    primaryLabel: 'Boka demo',
    primaryHref: '/sv/contact#contact-form',
    secondaryLabel: 'Möt teamet',
    secondaryHref: '/sv/about',
  },
};
