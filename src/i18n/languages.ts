// Registry of every language the site is intended to support.
// `ready: true` means content files exist for it and it is linked/selectable in the UI.
// Add a new language by creating src/content/home/<code>.ts and flipping ready to true.
export interface LanguageInfo {
  code: string;
  label: string;
  nativeLabel: string;
  ready: boolean;
}

export const languages: LanguageInfo[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', ready: true },
  { code: 'sv', label: 'Swedish', nativeLabel: 'Svenska', ready: true },
  { code: 'no', label: 'Norwegian', nativeLabel: 'Norsk', ready: false },
  { code: 'da', label: 'Danish', nativeLabel: 'Dansk', ready: false },
];

export const defaultLang = 'en';
