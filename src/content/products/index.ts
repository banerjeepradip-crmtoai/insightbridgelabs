import type { ProductContent } from './types';
import { aiSolutionDevelopmentPlatform } from './ai-solution-development-platform';
import { regulatoryIntelligencePlatform } from './regulatory-intelligence-platform';
import { aiSolutionDevelopmentPlatform as aiSolutionDevelopmentPlatformSv } from './sv/ai-solution-development-platform';
import { regulatoryIntelligencePlatform as regulatoryIntelligencePlatformSv } from './sv/regulatory-intelligence-platform';
import { defaultLang } from '../../i18n/languages';

// Add a new product by creating src/content/products/<slug>.ts (English) and
// src/content/products/sv/<slug>.ts (Swedish) with the same shape, then
// registering both here — the [slug] routes and nav both pick them up.
const registry: Record<string, Record<string, ProductContent>> = {
  en: {
    'ai-solution-development-platform': aiSolutionDevelopmentPlatform,
    'regulatory-intelligence-platform': regulatoryIntelligencePlatform,
  },
  sv: {
    'ai-solution-development-platform': aiSolutionDevelopmentPlatformSv,
    'regulatory-intelligence-platform': regulatoryIntelligencePlatformSv,
  },
};

function langRegistry(lang: string): Record<string, ProductContent> {
  return registry[lang] ?? registry[defaultLang];
}

export function getProductContent(lang: string, slug: string): ProductContent | undefined {
  return langRegistry(lang)[slug];
}

export function getAllProductSlugs(lang: string): string[] {
  return Object.keys(langRegistry(lang));
}

export function getAllProducts(lang: string): ProductContent[] {
  return Object.values(langRegistry(lang));
}
