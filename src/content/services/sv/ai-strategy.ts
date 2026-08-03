import type { ServiceContent } from '../types';

export const aiStrategy: ServiceContent = {
  slug: 'ai-strategy',
  navLabel: 'AI-strategi',
  meta: {
    title: 'AI-strategi — InsightBridge Labs',
    description:
      'Färdplaner som förenar AI med affärsmål — möjlighetsbedömning, business case och teknikstrategi anpassad till er organisation.',
  },
  hero: {
    eyebrow: 'TJÄNSTER',
    title: 'AI-strategi',
    tagline: 'Färdplaner som förenar AI med affärsmål.',
    intro:
      'AI lyckas när det är kopplat till ett affärsresultat, inte teknik för teknikens skull. Vi arbetar med er ledningsgrupp för att identifiera var AI skapar verkligt värde, sekvensera färdplanen och bygga investeringskalkylen.',
  },
  capabilities: {
    eyebrow: 'VAD VI GÖR',
    heading: 'Vad som ingår',
    items: [
      {
        icon: 'chart',
        title: 'Möjlighetsbedömning',
        description: 'Identifiera och prioritera AI-användningsfall efter affärspåverkan och genomförbarhet.',
      },
      {
        icon: 'brain',
        title: 'Färdplan och business case',
        description: 'Sekvensera initiativ till en färdplan med tydlig avkastning och resursbehov.',
      },
      {
        icon: 'cloud',
        title: 'Teknik- och plattformsstrategi',
        description: 'Välj rätt kombination av modeller, plattformar och leverantörer för er miljö.',
      },
      {
        icon: 'people',
        title: 'Förändrings- och adoptionsplanering',
        description: 'Förbered team och processer så att AI-investeringarna faktiskt används.',
      },
    ],
  },
  process: {
    heading: 'Vårt tillvägagångssätt',
    steps: [
      { step: '01', title: 'Upptäck', description: 'Förstå era affärsmål, datalandskap och nuvarande AI-mognad.' },
      { step: '02', title: 'Prioritera', description: 'Poängsätt kandidatanvändningsfall efter värde, genomförbarhet och risk.' },
      { step: '03', title: 'Färdplan', description: 'Sekvensera initiativ till en etappindelad plan med tydliga milstolpar.' },
      { step: '04', title: 'Förankra', description: 'Bygg investeringskalkylen och förankra planen hos intressenterna.' },
    ],
  },
  cta: {
    heading: 'Bygg en AI-färdplan som passar er verksamhet',
    body: 'Låt oss identifiera var AI skapar mest värde för er, och omvandla det till en plan ni kan agera på.',
    primaryLabel: 'Boka demo',
    primaryHref: '/sv/contact#contact-form',
    secondaryLabel: 'Möt teamet',
    secondaryHref: '/sv/about',
  },
};
