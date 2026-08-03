import type { CaseStudiesContent } from './types';
import { en } from './en';
import { sv } from './sv';
import { defaultLang } from '../../i18n/languages';

const registry: Record<string, CaseStudiesContent> = { en, sv };

export function getCaseStudiesContent(lang: string): CaseStudiesContent {
  return registry[lang] ?? registry[defaultLang];
}
