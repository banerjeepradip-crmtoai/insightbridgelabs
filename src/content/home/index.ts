import type { HomeContent } from './types';
import { en } from './en';
import { defaultLang } from '../../i18n/languages';

const registry: Record<string, HomeContent> = { en };

export function getHomeContent(lang: string): HomeContent {
  return registry[lang] ?? registry[defaultLang];
}
