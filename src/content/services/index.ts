import type { ServiceContent } from './types';
import { aiGovernance } from './ai-governance';
import { aiStrategy } from './ai-strategy';
import { aiConsulting } from './ai-consulting';
import { crmToAi } from './crm-to-ai';
import { aiGovernance as aiGovernanceSv } from './sv/ai-governance';
import { aiStrategy as aiStrategySv } from './sv/ai-strategy';
import { aiConsulting as aiConsultingSv } from './sv/ai-consulting';
import { crmToAi as crmToAiSv } from './sv/crm-to-ai';
import { defaultLang } from '../../i18n/languages';

// Add a new service by creating src/content/services/<slug>.ts (English) and
// src/content/services/sv/<slug>.ts (Swedish) with the same shape, then
// registering both here — the [slug] routes and nav both pick them up.
const registry: Record<string, Record<string, ServiceContent>> = {
  en: {
    'ai-governance': aiGovernance,
    'ai-strategy': aiStrategy,
    'ai-consulting': aiConsulting,
    'crm-to-ai': crmToAi,
  },
  sv: {
    'ai-governance': aiGovernanceSv,
    'ai-strategy': aiStrategySv,
    'ai-consulting': aiConsultingSv,
    'crm-to-ai': crmToAiSv,
  },
};

function langRegistry(lang: string): Record<string, ServiceContent> {
  return registry[lang] ?? registry[defaultLang];
}

export function getServiceContent(lang: string, slug: string): ServiceContent | undefined {
  return langRegistry(lang)[slug];
}

export function getAllServiceSlugs(lang: string): string[] {
  return Object.keys(langRegistry(lang));
}

export function getAllServices(lang: string): ServiceContent[] {
  return Object.values(langRegistry(lang));
}
