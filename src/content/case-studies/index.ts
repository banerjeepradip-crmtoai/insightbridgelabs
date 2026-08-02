import type { CaseStudiesContent } from './types';
import { en } from './en';
import { defaultLang } from '../../i18n/languages';

const registry: Record<string, CaseStudiesContent> = { en };

export function getCaseStudiesContent(lang: string): CaseStudiesContent {
  return registry[lang] ?? registry[defaultLang];
}
