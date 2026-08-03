import type { HomeContent } from './types';
import { en } from './en';
import { sv } from './sv';
import { defaultLang } from '../../i18n/languages';

const registry: Record<string, HomeContent> = { en, sv };

export function getHomeContent(lang: string): HomeContent {
  return registry[lang] ?? registry[defaultLang];
}
