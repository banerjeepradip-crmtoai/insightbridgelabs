import type { ServiceContent } from '../types';

export const rapidApplicationDevelopment: ServiceContent = {
  slug: 'rapid-application-development',
  navLabel: 'Snabb applikationsutveckling',
  meta: {
    title: 'Snabb applikationsutveckling — InsightBridge Labs',
    description:
      'AI-assisterad applikationsutveckling från start till mål — från idé till en driftsatt, produktionsklar app med CI/CD, byggd med Claude och modern AI-ingenjörskonst.',
  },
  hero: {
    eyebrow: 'TJÄNSTER',
    title: 'Snabb applikationsutveckling',
    tagline: 'Förvandla din applikationsidé till en fungerande lösning — snabbare, med AI-assisterad utveckling.',
    intro:
      'Jag använder Claude och andra moderna AI-utvecklingsverktyg för att designa, bygga och driftsätta applikationer från start till mål — arkitektur, kod, testning och CI/CD — så att en fungerande prototyp eller MVP kan lanseras på dagar eller veckor, inte månader.',
  },
  capabilities: {
    eyebrow: 'VAD VI GÖR',
    heading: 'Vad som ingår',
    items: [
      {
        icon: 'code',
        title: 'AI-assisterad utveckling',
        description: 'Utveckling från start till mål med Claude och modern AI-ingenjörskonst — från arkitektur till fungerande kod.',
      },
      {
        icon: 'nodes',
        title: 'AI-agenter och applikationer',
        description: 'Design och byggande av intelligenta agenter, assistenter och AI-drivna arbetsflöden anpassade för din verksamhet.',
      },
      {
        icon: 'cloud-upload',
        title: 'CI/CD och driftsättning',
        description: 'Automatiserade pipelines, testning och molndriftsättning för snabba, säkra och repeterbara releaser.',
      },
      {
        icon: 'people',
        title: 'Överlämning och kompetensöverföring',
        description: 'Dokumentation och utbildning så att ert team kan drifta och vidareutveckla applikationen efter leverans.',
      },
    ],
  },
  process: {
    heading: 'Vårt tillvägagångssätt',
    steps: [
      { step: '01', title: 'Utforska', description: 'Förstå affärsproblemet, användarna och begränsningarna.' },
      { step: '02', title: 'Designa', description: 'Definiera arkitekturen, arbetsflödena och AI- eller agentansatsen.' },
      { step: '03', title: 'Bygg', description: 'Utveckla med AI-assisterad ingenjörskonst genom korta, synliga cykler.' },
      { step: '04', title: 'Driftsätt', description: 'Lansera med automatiserad CI/CD och överlämna en applikation som går att underhålla.' },
    ],
  },
  cta: {
    heading: 'Låt oss förvandla din idé till en fungerande applikation',
    body: 'Från en snabb prototyp till en produktionsklar MVP — få AI-assisterad utveckling, testning och driftsättning, från start till mål.',
    primaryLabel: 'Diskutera din applikationsidé',
    primaryHref: '/sv/contact#contact-form',
    secondaryLabel: 'Möt teamet',
    secondaryHref: '/sv/about',
  },
};
