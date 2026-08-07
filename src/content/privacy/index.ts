import type { PrivacyContent } from './types';
import { en } from './en';
import { sv } from './sv';
import { defaultLang } from '../../i18n/languages';

const registry: Record<string, PrivacyContent> = { en, sv };

export function getPrivacyContent(lang: string): PrivacyContent {
  return registry[lang] ?? registry[defaultLang];
}
