import type { AboutContent } from './types';
import { en } from './en';
import { defaultLang } from '../../i18n/languages';

const registry: Record<string, AboutContent> = { en };

export function getAboutContent(lang: string): AboutContent {
  return registry[lang] ?? registry[defaultLang];
}
