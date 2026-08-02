import type { ContactContent } from './types';
import { en } from './en';
import { defaultLang } from '../../i18n/languages';

const registry: Record<string, ContactContent> = { en };

export function getContactContent(lang: string): ContactContent {
  return registry[lang] ?? registry[defaultLang];
}
