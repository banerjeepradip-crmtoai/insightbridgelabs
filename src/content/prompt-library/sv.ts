import type { PromptLibraryContent } from './types';

export const sv: PromptLibraryContent = {
  meta: {
    title: 'CRM-promptbibliotek | InsightBridge Labs',
    description:
      'Ett gratis, branschspecifikt bibliotek med färdiga AI-prompter för CRM-processer inom Bank & Försäkring, Sjukvård och Detaljhandel.',
  },
  hero: {
    eyebrow: 'Gratis resurs',
    title: 'Ett färdigt promptbibliotek för CRM-team',
    tagline: 'Sluta skriva om samma instruktioner till din AI-agent.',
    intro:
      '189 strukturerade prompter inom Bank & Försäkring, Sjukvård och Detaljhandel — var och en med tydlig roll, variabler, uppgift, utdataformat och ett exempel, så att ditt team får konsekventa resultat utan att behöva förklara samma sak varje gång.',
  },
  intro: {
    heading: 'Vad ingår',
    body: 'Varje prompt följer samma standardformat (Roll, Variabler, Uppgift, Utdataformat, exempel) och täcker vanliga CRM-steg — leadkvalificering, service, skadeärenden, fakturering, kundlojalitet med mera — för en specifik bransch. Välj den bransch som matchar din verksamhet och ladda ner hela paketet.',
  },
  industries: [
    {
      id: 'banking-insurance',
      icon: 'shield-check',
      label: 'Bank & Försäkring',
      description: 'Leadkvalificering, uppföljning, låneprocesser, försäkringsgivning, skadeärenden, inkasso och regelefterlevnad.',
      categoryCount: 8,
      promptCount: 80,
    },
    {
      id: 'healthcare',
      icon: 'cross',
      label: 'Sjukvård',
      description: 'Patientregistrering, bokningar, klinisk dokumentation, vårdplanering, fakturering och regelefterlevnad.',
      categoryCount: 7,
      promptCount: 52,
    },
    {
      id: 'retail',
      icon: 'cart',
      label: 'Detaljhandel',
      description: 'Kundanskaffning, försäljning, orderhantering, lager, varuexponering och kundlojalitet.',
      categoryCount: 8,
      promptCount: 57,
    },
  ],
  form: {
    heading: 'Hämta din gratis nedladdning',
    body: 'Välj en bransch att ladda ner. En registrering per person.',
    industryLegend: 'Vilket branschbibliotek vill du ha?',
    consentLabel: 'Jag godkänner att bli kontaktad av InsightBridge Labs angående denna nedladdning.',
    submitLabel: 'Registrera & ladda ner',
    disclaimer: 'Vi använder endast dina uppgifter för att leverera nedladdningen och för enstaka uppföljning — ingen spam.',
  },
};
