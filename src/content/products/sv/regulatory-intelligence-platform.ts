import type { ProductContent } from '../types';

export const regulatoryIntelligencePlatform: ProductContent = {
  slug: 'regulatory-intelligence-platform',
  navLabel: 'Regulatorisk intelligens',
  meta: {
    title: 'Plattform för regulatorisk intelligens — InsightBridge Labs',
    description:
      'AI-styrning och databeredskap för EU:s AI-förordning, bedömda tillsammans — källbaserade regelefterlevnadsbedömningar och datakvalitetspoängsättning för mindre företag, självbetjäning eller egen driftsättning.',
  },
  statusLabel: 'MVP — Under aktiv utveckling',
  hero: {
    eyebrow: 'PRODUKTER',
    title: 'Plattform för regulatorisk intelligens',
    tagline: 'Regelefterlevnad för EU:s AI-förordning och databeredskap, bedömda tillsammans — eftersom regelverket redan behandlar dem som ett och samma problem.',
    intro:
      'En självbetjäningsplattform som bedömer era AI-användningsfall mot EU:s AI-förordning och relaterade regelverk, och poängsätter om datan bakom dem faktiskt är redo att bygga på — grundad i citerad regeltext, inte en statisk checklista. Finns värdbaserad på regintel.eu, eller självdriftsatt i ert eget moln.',
  },
  problem: {
    heading: 'Varför detta är viktigt',
    paragraphs: [
      'Artikel 10 i EU:s AI-förordning kräver redan idag att leverantörer av högrisk-AI-system kan bevisa att deras träningsdata är relevant, representativ och felkontrollerad. I praktiken innebär det att databeredskap inte är något trevligt-att-ha vid sidan av AI-styrning — det är en kontroll som regelverket förväntar sig att ni har bevis för. De flesta verktyg för regelefterlevnad ser det inte på det sättet: de bedömer ert AI-användningsfall och förutsätter ren, välförstådd data som given indata.',
      'Både företagsstyrningsplattformar och datakataloger finns idag, men de är prissatta och säljs till organisationer med dedikerade team för regelefterlevnad och data. För ett växande mindre företag som bygger sina första AI-användningsfall lämnar det en lucka: ingen självbetjäningsprodukt äger båda halvorna — är detta användningsfall högrisk, och är datan bakom det faktiskt redo — i en och samma bedömning.',
      'Den här plattformen sluter den luckan med källbaserade bedömningar: varje regulatoriskt fynd hämtas och citeras från den faktiska regeltexten via semantisk sökning, inte en statisk mappning som någon kurerade en gång och sedan slutade underhålla. Databeredskap poängsätts på samma sätt — mot det verkliga schemat och fältprofilerna i er anslutna datakälla, inte ett frågeformulär.',
    ],
  },
  workflow: {
    heading: 'Så fungerar det',
    columns: 3,
    steps: [
      {
        step: '01',
        title: 'Beskriv',
        description: 'Beskriv ert AI-användningsfall i vanligt språk.',
      },
      {
        step: '02',
        title: 'Bekräfta flaggor',
        description: 'AI härleder relevanta styrningsflaggor från er beskrivning — ni granskar och bekräftar dem innan något bedöms.',
      },
      {
        step: '03',
        title: 'Citera och bedöm risk',
        description: 'En regelmotor matchar bekräftade flaggor mot tillämpliga regelverk, hämtar den exakta regeltexten via semantisk sökning, och grundar riskbedömningen i den citerade texten.',
      },
      {
        step: '04',
        title: 'Anslut er data',
        description: 'Anslut en datakälla — Postgres eller CSV idag, fler kopplingar på färdplanen — och välj de objekt som är relevanta för användningsfallet.',
      },
      {
        step: '05',
        title: 'Poängsätt beredskap',
        description: 'Plattformen mappar nödvändiga dataelement mot era verkliga fält och poängsätter täckning, fullständighet och mappningssäkerhet med en deterministisk motor, inte en gissning från en språkmodell.',
      },
      {
        step: '06',
        title: 'Bygg er beviskedja',
        description: 'Varje bedömning och beredskapspoäng sparas som en tillägg-bara-post — redo att visas som bevis, inte bara en chattlogg.',
      },
    ],
  },
  safeguards: {
    heading: 'Inbyggda skyddsåtgärder',
    items: [
      'Varje regulatoriskt fynd är grundat i citerad regeltext och likhetspoäng — aldrig en ogrundad modellåsikt.',
      'Poängsättningen av databeredskap körs på en deterministisk, ren TypeScript-motor — inte en språkmodell — så samma indata ger alltid samma poäng.',
      'Ni granskar och bekräftar varje AI-föreslagen styrningsflagga innan en bedömning körs.',
      'Bedömningar och beredskapspoäng lagras tillägg-bara, vilket ger er en varaktig beviskedja istället för ett redigerbart dokument.',
      'Ta med er egen datakoppling — plattformen profilerar endast de objekt och fält ni väljer, inte hela er databas.',
    ],
  },
  techStack: {
    eyebrow: 'UNDER HUVEN',
    heading: 'Byggt på',
    tags: [
      'OpenAI GPT-4o mini',
      'pgvector',
      'Semantisk regelsökning',
      'PostgreSQL',
      'TypeScript',
      'Postgres / CSV-kopplingar',
      'Regelmotor',
      'AWS / GCP / Azure (egen driftsättning)',
    ],
  },
  disclaimer: {
    heading: 'MVP-status och ansvarsfull användning',
    items: [
      'Denna produkt befinner sig i MVP-stadiet och utvecklas snabbt. Vissa funktioner som beskrivs på denna sida är fortfarande under aktiv utveckling.',
      'Precis som alla AI-baserade system är den byggd för att snabba upp och stödja ert team, inte ersätta mänskligt omdöme. AI-genererade förslag och riskbedömningar är utkast, inte slutgiltiga svar — granska dem innan ni förlitar er på dem.',
      'Denna plattform hjälper till med bedömning av EU:s AI-förordning och databeredskap; den ger inte juridisk rådgivning och ersätter inte kvalificerad juridisk rådgivning gällande era regelefterlevnadsskyldigheter.',
    ],
  },
  cta: {
    heading: 'Bedöm ert första AI-användningsfall',
    body: 'Se en källbaserad bedömning av regelefterlevnad och databeredskap för ett av era egna AI-användningsfall — självbetjäning på regintel.eu, eller självdriftsatt i ert eget moln. Konsultuppdrag via InsightBridge Consulting finns tillgängliga som ett separat tillägg på alla nivåer.',
    primaryLabel: 'Boka demo',
    primaryHref: '/sv/contact#contact-form',
    secondaryLabel: 'Utforska tjänsten AI-styrning',
    secondaryHref: '/sv/services/ai-governance',
  },
};
