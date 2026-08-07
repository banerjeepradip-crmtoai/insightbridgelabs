import type { PromptLibraryContent } from './types';
import { en } from './en';
import { sv } from './sv';
import { defaultLang } from '../../i18n/languages';

const registry: Record<string, PromptLibraryContent> = { en, sv };

export function getPromptLibraryContent(lang: string): PromptLibraryContent {
  return registry[lang] ?? registry[defaultLang];
}
