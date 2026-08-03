import type { ServiceContent } from '../types';

export const crmToAi: ServiceContent = {
  slug: 'crm-to-ai',
  navLabel: 'CRM till AI',
  meta: {
    title: 'CRM till AI — InsightBridge Labs',
    description:
      'Omvandla data från Salesforce, Dynamics eller HubSpot till handlingsbar AI — prediktiv analys, säljproduktivitet, serviceoptimering och AI-förstärkta CRM-applikationer.',
  },
  hero: {
    eyebrow: 'TJÄNSTER',
    title: 'CRM till AI',
    tagline: 'Förvandla ert CRM till en AI-driven tillväxtmotor.',
    intro:
      'Ert CRM rymmer en guldgruva av kund-, sälj- och servicedata — men rådata i sig gör ingen skillnad. Handlingsbar AI omvandlar den datan till automatiserade processer, förutsagt beteende och rekommendationer för nästa bästa åtgärd, så att ert team fattar smartare beslut, snabbare.',
  },
  capabilities: {
    eyebrow: 'DÄR AI MÖTER ERT CRM',
    heading: 'Vad som ingår',
    items: [
      {
        icon: 'trending',
        title: 'Säljoptimering',
        description:
          'Öka intäkterna genom bättre targeting, prioritering och avslutseffektivitet: leadpoängsättning, prediktion av affärsutfall, dynamisk prissättning och försäljningsprognoser.',
      },
      {
        icon: 'people',
        title: 'Kundinsikter och personalisering',
        description:
          'Bygg en 360°-vy av varje kund och personalisera varje interaktion med rekommendationer för nästa bästa åtgärd, segmentering och prediktion av kundbortfall.',
      },
      {
        icon: 'chart',
        title: 'Marknadsföringsintelligens',
        description:
          'Förbättra kampanjeffektivitet och avkastning med prestandaprediktion, innehållspersonalisering samt optimering av kanaler och annonsbudget.',
      },
      {
        icon: 'nodes',
        title: 'Kundservice och support',
        description:
          'Sänk kostnaden per ärende och förbättra nöjdheten med AI-drivna chattbottar, intelligent ärenderouting, sentimentanalys och proaktiv service.',
      },
      {
        icon: 'cloud-upload',
        title: 'Processautomation och produktivitet',
        description:
          'Minska manuellt arbete och öka tempot med sammanfattning av samtal och e-post, automatisk databerikning, smarta uppgiftsförslag och dokumenthantering.',
      },
      {
        icon: 'brain',
        title: 'AI-förstärkta CRM-applikationer',
        description:
          'För in AI direkt i CRM-gränssnittet: copiloter inbyggda i CRM:et, automatiserad offertbyggnad, röststyrda uppdateringar och prediktiv SLA-hantering.',
      },
    ],
  },
  process: {
    heading: 'Vårt tillvägagångssätt',
    steps: [
      {
        step: '01',
        title: 'Bedöm',
        description: 'Kartlägg er CRM-datamodell och identifiera de mest värdefulla platserna att tillämpa AI — poängsättning, prognoser, routing och mer.',
      },
      {
        step: '02',
        title: 'Designa',
        description: 'Arkitektera AI-lagret: modeller, integrationer och skyddsräcken som passar naturligt in i Salesforce, Dynamics eller HubSpot.',
      },
      {
        step: '03',
        title: 'Bygg',
        description: 'Implementera och integrera — från prediktiva modeller till copiloter i CRM:et — med ert befintliga CRM som huvudkälla.',
      },
      {
        step: '04',
        title: 'Mät',
        description: 'Följ upp adoption och affärsnytta, och iterera i takt med att nya användningsfall och data blir tillgängliga.',
      },
    ],
  },
  cta: {
    heading: 'Redo att göra ert CRM handlingsbart?',
    body: 'Oavsett om det gäller prediktiv analys, en copilot i CRM:et eller styrning av ert AI-förstärkta CRM — hör av er för att diskutera var det är mest värdefullt att börja.',
    primaryLabel: 'Boka demo',
    primaryHref: '/sv/contact#contact-form',
    secondaryLabel: 'Möt teamet',
    secondaryHref: '/sv/about',
  },
};
