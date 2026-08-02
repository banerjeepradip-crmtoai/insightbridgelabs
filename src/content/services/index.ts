import type { ServiceContent } from './types';
import { aiGovernance } from './ai-governance';
import { aiStrategy } from './ai-strategy';
import { aiConsulting } from './ai-consulting';
import { crmToAi } from './crm-to-ai';

// Add a new service by creating src/content/services/<slug>.ts (same shape as
// the others) and registering it here — the [slug] route and nav both pick it up.
const registry: Record<string, ServiceContent> = {
  'ai-governance': aiGovernance,
  'ai-strategy': aiStrategy,
  'ai-consulting': aiConsulting,
  'crm-to-ai': crmToAi,
};

export function getServiceContent(slug: string): ServiceContent | undefined {
  return registry[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(registry);
}

export function getAllServices(): ServiceContent[] {
  return Object.values(registry);
}
