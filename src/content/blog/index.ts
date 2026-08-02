import type { BlogContent } from './types';
import { en } from './en';
import { defaultLang } from '../../i18n/languages';

const registry: Record<string, BlogContent> = { en };

export function getBlogContent(lang: string): BlogContent {
  return registry[lang] ?? registry[defaultLang];
}
