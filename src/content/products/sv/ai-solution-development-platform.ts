import type { ProductContent } from '../types';

export const aiSolutionDevelopmentPlatform: ProductContent = {
  slug: 'ai-solution-development-platform',
  navLabel: 'Plattform för lösningsutveckling',
  meta: {
    title: 'AI-driven plattform för lösningsutveckling — InsightBridge Labs',
    description:
      'Beskriv ett behov i naturligt språk och en kontrollerad agentisk pipeline utforskar din Salesforce-organisation, designar en lösning, bygger och testar den — och distribuerar endast efter uttryckligt mänskligt godkännande.',
  },
  statusLabel: 'MVP — Under aktiv utveckling',
  hero: {
    eyebrow: 'PRODUKTER',
    title: 'AI-driven plattform för lösningsutveckling',
    tagline: 'Från ett behov beskrivet i vanligt språk till en driftsatt Salesforce-lösning — med en människa som godkänner varje steg.',
    intro:
      'En multi-tenant-plattform där du kopplar en Salesforce-organisation, beskriver vad du behöver i naturligt språk, och en kontrollerad agentisk pipeline — driven av Claude API — utforskar organisationen, designar en lösning, genererar metadata och kod, validerar och testar den, och distribuerar endast efter uttryckligt mänskligt godkännande vid varje kontrollpunkt.',
  },
  problem: {
    heading: 'Varför detta är viktigt',
    paragraphs: [
      "Att bygga på Salesforce idag innebär att vänta på knapp, dyr expertis: personer som förstår både affärsbehovet och plattformens metadatamodell tillräckligt väl för att designa något som inte går sönder i produktion. Behov går förlorade i översättningen mellan verksamhet och IT, kartläggning av vad som redan finns i organisationen är manuell och ofullständig, och när en lösning väl är byggd, testad och driftsatt har affärsbehovet ofta hunnit förändras.",
      'Den här plattformen komprimerar den cykeln. Du beskriver vad du behöver i vanligt språk; plattformen kartlägger de relevanta delarna av din organisation, föreslår en lösningsdesign, genererar metadata och kod, och kör den genom statisk analys, säkerhetskontroller och automatiserade tester — allt innan en människa behöver granska en enda rad för hand. Det som tidigare krävde en kartläggningsworkshop, ett designdokument och en sprint kan börja som ett granskningsbart förslag samma dag.',
      "Inget av detta innebär att AI skriver till er produktionsorganisation utan tillsyn. Varje föreslagen ändring är ett utkast tills en människa godkänner den, och sandbox och produktion är separata, uttryckliga godkännandesteg — inte samma knapp klickad två gånger. Det är skillnaden mellan AI som skriver kod och AI som faktiskt är säker att sätta framför en företagsförändringsprocess.",
    ],
  },
  workflow: {
    heading: 'Så fungerar det',
    columns: 3,
    steps: [
      {
        step: '01',
        title: 'Anslut',
        description: 'Anslut säkert en Salesforce-organisation, sandbox eller produktion. ServiceNow, HubSpot och Dynamics finns på färdplanen.',
      },
      {
        step: '02',
        title: 'Kartlägg',
        description: 'Plattformen kartlägger objekt, fält, Apex, flöden och behörigheter som är relevanta för ert behov — aldrig en fullständig export av organisationen.',
      },
      {
        step: '03',
        title: 'Beskriv',
        description: 'Beskriv vad ni behöver i naturligt språk. Plattformen ställer förtydligande frågor där det behövs.',
      },
      {
        step: '04',
        title: 'Designa',
        description: 'Granska en föreslagen lösningsdesign — datamodell, process och säkerhet — innan någon kod genereras.',
      },
      {
        step: '05',
        title: 'Bygg och testa',
        description: 'Genererad metadata och kod körs genom statisk analys, säkerhetskontroller och automatiserade tester.',
      },
      {
        step: '06',
        title: 'Godkänn och driftsätt',
        description: 'En människa granskar den faktiska ändringen och godkänner den. Sandbox och produktion är separata godkännanden, med full spårbarhet.',
      },
    ],
  },
  safeguards: {
    heading: 'Inbyggda skyddsåtgärder',
    items: [
      'Claude föreslår, ert team beslutar — inget AI-verktyg i den här plattformen kan skriva direkt till er Salesforce-organisation.',
      'Varje driftsättning har kontrollpunkter: statisk analys, säkerhetskontroller och automatiserade tester körs innan någon människa ser en ändring.',
      'Produktion kräver ett andra, separat godkännande — aldrig ett nytt klick på samma knapp som användes för sandbox.',
      'Minsta privilegium som designprincip — plattformen begär endast den metadata och de behörigheter ett behov faktiskt kräver.',
      'Varje genererad artefakt är versionshanterad och spårbar, tillbaka till ett behov, en modellversion och en godkännande användare.',
    ],
  },
  techStack: {
    eyebrow: 'UNDER HUVEN',
    heading: 'Byggt på',
    tags: [
      'Claude API',
      'Next.js',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Git',
      'Salesforce Metadata API',
      'Salesforce CLI',
      'OAuth 2.0 / OIDC',
      'AWS',
      'Docker',
    ],
  },
  disclaimer: {
    heading: 'MVP-status och ansvarsfull AI-användning',
    items: [
      'Denna produkt befinner sig i MVP-stadiet och utvecklas snabbt. Vissa funktioner som beskrivs på denna sida är fortfarande under aktiv utveckling.',
      'Precis som alla AI-baserade system är den byggd för att snabba upp och stödja ert team, inte ersätta mänskligt omdöme. AI-genererade förslag är utkast, inte slutgiltiga svar — de kan vara ofullständiga eller felaktiga, och varje ändring kräver mänsklig granskning och uttryckligt godkännande innan den når en driftsatt miljö.',
    ],
  },
  cta: {
    heading: 'Se den på er egen organisation',
    body: 'Vi bygger detta öppet tillsammans med tidiga designpartners. Om ni vill ha en genomgång eller vill vara en tidig användare på en sandbox-organisation, hör av er.',
    primaryLabel: 'Boka demo',
    primaryHref: '/sv/contact#contact-form',
    secondaryLabel: 'Möt teamet',
    secondaryHref: '/sv/about',
  },
};
