import type { CaseStudiesContent } from './types';

export const sv: CaseStudiesContent = {
  meta: {
    title: 'Fallstudier — InsightBridge Labs',
    description:
      'Referenslösningar för Salesforce inom AI-driven säljoptimering — leadpoängsättning, prediktion av affärsutfall och dynamisk prissättning.',
  },
  hero: {
    eyebrow: 'RESURSER',
    title: 'Fallstudier',
    tagline: 'Referenslösningar, inte presentationsmaterial.',
    intro:
      'Det här är genomarbetade lösningsdesigner för att tillämpa AI i Salesforce — datamodellen, arkitekturen och skyddsräckena, inte bara säljpitchen. Det är mönster vi har designat och kan anpassa till er organisation, snarare än resultat från en specifik namngiven kund.',
  },
  items: [
    {
      category: 'Säljoptimering',
      title: 'Leadpoängsättning och prioritering',
      challenge:
        'Säljteam lade tid på varje lead och affärsmöjlighet lika mycket, utan något datadrivet sätt att veta vilka som faktiskt var värda att prioritera — vilket skadade både konverteringsgrad och säljarnas produktivitet.',
      solution:
        'En automatiserad poängsättningspipeline i Salesforce: standardfält i CRM:et (leadkälla, bransch, företagsstorlek, senaste aktivitet, affärsstadium, prognoskategori med mera) matar en prediktiv modell — Einstein Discovery direkt, eller en extern modell via Apex-anrop — som poängsätter varje lead och affärsmöjlighet från 0–100, och skapar funktioner som dagar sedan senaste aktivitet och affärens ålder längs vägen.',
      outcome:
        'Säljarna får en prioriterad, dashboard-driven vy med en filtrerad lista över högprioriterade poster (poäng > 70), vilket förvandlar en magkänslobaserad process till en repeterbar, datadriven sådan.',
      tags: ['Salesforce', 'Einstein Discovery', 'Prediktiv poängsättning', 'Apex'],
    },
    {
      category: 'Säljoptimering',
      title: 'Prediktion av affärsutfall',
      challenge:
        'Att förutsäga vilka affärer som faktiskt skulle gå igenom byggde enbart på säljarnas intuition och pipeline-stadium, utan någon systematisk signal för var insatserna borde fokuseras för att förbättra vinstfrekvensen.',
      solution:
        'En binär klassificeringsmodell tränad på tre års historik av vunna/förlorade affärer med Salesforces inbyggda Einstein Prediction Builder — endast standardfält, ingen anpassad datapipeline krävs. Modellen ger en vinstpoäng för affären (0–100) och lyfter fram de främsta prediktiva faktorerna bakom varje poäng: engagemangsnivå, affärens storlek, tid till avslut och köpkraft.',
      outcome:
        'Säljledare får en tidig, kvantifierad signal om affärens hälsa, och säljare får vägledning om nästa bästa åtgärd istället för ett statiskt sannolikhetsfält.',
      tags: ['Salesforce', 'Einstein Prediction Builder', 'Maskininlärning', 'Försäljningsprognoser'],
    },
    {
      category: 'Säljoptimering',
      title: 'Dynamiska prisrekommendationer',
      challenge:
        'Säljare hade inget konsekvent sätt att veta hur stor rabatt de kunde erbjuda på en offertrad utan att antingen lämna marginal på bordet eller överrabattera för att avsluta en affär.',
      solution:
        'En prediktionstjänst, anropbar i realtid från offertraden, rekommenderar en rabatt eller målpris med hjälp av Einstein Discovery tränad på historiska avslutade affärer — med anpassade skyddsräcken (maximal rabatt per produktfamilj, minimigränser för marginal, konkurrentprisregler) som tillämpas tillsammans med modellen. Rekommendationer, säkerhetspoäng och resonemang visas direkt i en Lightning Web Component, med möjlighet för säljare att åsidosätta dem.',
      outcome:
        'Prisvägledning som skyddar marginalen samtidigt som säljarna får utrymme att avsluta affärer, där varje rekommendation är förklarbar snarare än en svart låda.',
      tags: ['Salesforce', 'Einstein Discovery', 'Lightning Web Components', 'Prisstrategi'],
    },
  ],
  cta: {
    heading: 'Vill ni ha en liknande lösningsdesign för er organisation?',
    body: 'Dessa mönster anpassas till er data och er Salesforce-instans. Hör av er så pratar vi om var det är mest värdefullt att börja.',
    primaryLabel: 'Boka demo',
    primaryHref: '/sv/contact#contact-form',
    secondaryLabel: 'Utforska CRM till AI',
    secondaryHref: '/sv/services/crm-to-ai',
  },
};
