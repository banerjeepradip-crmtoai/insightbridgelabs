import type { BlogContent } from './types';
import { en } from './en';
import { sv } from './sv';
import { defaultLang } from '../../i18n/languages';

const registry: Record<string, BlogContent> = { en, sv };

export function getBlogContent(lang: string): BlogContent {
  return registry[lang] ?? registry[defaultLang];
}
