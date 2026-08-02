import type { ProductContent } from './types';
import { aiSolutionDevelopmentPlatform } from './ai-solution-development-platform';
import { regulatoryIntelligencePlatform } from './regulatory-intelligence-platform';

// Add a new product by creating src/content/products/<slug>.ts (same shape as
// the others) and registering it here — the [slug] route and nav both pick it up.
const registry: Record<string, ProductContent> = {
  'ai-solution-development-platform': aiSolutionDevelopmentPlatform,
  'regulatory-intelligence-platform': regulatoryIntelligencePlatform,
};

export function getProductContent(slug: string): ProductContent | undefined {
  return registry[slug];
}

export function getAllProductSlugs(): string[] {
  return Object.keys(registry);
}

export function getAllProducts(): ProductContent[] {
  return Object.values(registry);
}
