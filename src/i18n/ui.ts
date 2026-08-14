// Small UI micro-copy that lives inside components rather than page content
// (buttons, labels, toggle text) — kept separate from src/content because it's
// reused across many pages rather than belonging to one page's content file.
export interface UiStrings {
  learnMore: string;
  readOnLinkedIn: string;
  caseChallenge: string;
  caseSolution: string;
  caseOutcome: string;
  langSoon: string;
  languageLabel: string;
  bookACall: string;
  navPrimaryLabel: string;
  navMobileLabel: string;
  toggleMenuLabel: string;
  formName: string;
  formEmail: string;
  formPhoneOptional: string;
  formPhoneRequired: string;
  formPhoneHintOptional: string;
  formPhoneHintRequired: string;
  formPhonePlaceholder: string;
  formCountryCodeLabel: string;
  formCompanyOptional: string;
  formTimeToContact: string;
  formTimeNoPreference: string;
  formTimeMorning: string;
  formTimeAfternoon: string;
  formTimeEvening: string;
  formTimeWeekend: string;
  formTimeHint: string;
  formMessage: string;
  formSending: string;
  formSuccess: string;
  formError: string; // contains {email} placeholder
  formIndustryLabel: string;
  formIndustryHint: string;
  formSubmitDownload: string;
  formPreparingDownload: string;
  formDownloadSuccess: string;
  formDuplicateError: string;
  formDownloadError: string; // contains {email} placeholder
}

const en: UiStrings = {
  learnMore: 'Learn More',
  readOnLinkedIn: 'Read on LinkedIn',
  caseChallenge: 'Challenge',
  caseSolution: 'Solution',
  caseOutcome: 'Outcome',
  langSoon: 'Soon',
  languageLabel: 'Language',
  bookACall: 'Book a call',
  navPrimaryLabel: 'Primary',
  navMobileLabel: 'Mobile',
  toggleMenuLabel: 'Toggle menu',
  formName: 'Name',
  formEmail: 'Email',
  formPhoneOptional: 'Phone (optional)',
  formPhoneRequired: 'Phone',
  formPhoneHintOptional: 'Required if you use a personal email address (Gmail, Hotmail, etc.)',
  formPhoneHintRequired: "You're using a personal email address, so a phone number helps us actually reach you.",
  formPhonePlaceholder: '70 540 90 44',
  formCountryCodeLabel: 'Country code',
  formCompanyOptional: 'Company (optional)',
  formTimeToContact: 'Time to Contact (optional)',
  formTimeNoPreference: 'No preference',
  formTimeMorning: 'Weekday mornings (before 12:00 CET)',
  formTimeAfternoon: 'Weekday afternoons (12:00–17:00 CET)',
  formTimeEvening: 'Weekday evenings (after 17:00 CET)',
  formTimeWeekend: 'Weekends',
  formTimeHint: 'A rough preference for when we call — for a confirmed, bookable slot, use "Schedule a Call" further down this page instead.',
  formMessage: 'Message',
  formSending: 'Sending…',
  formSuccess: "Thanks — your message is on its way. We'll get back to you soon.",
  formError: 'Something went wrong. Please email us directly at {email}.',
  formIndustryLabel: 'Choose one industry',
  formIndustryHint: 'You can download one industry library per registration.',
  formSubmitDownload: 'Register & Download',
  formPreparingDownload: 'Preparing your download…',
  formDownloadSuccess: 'Success — your download should start automatically.',
  formDuplicateError: "Looks like you've already registered and downloaded the library. Contact us if you need help.",
  formDownloadError: 'Something went wrong preparing your download. Please try again or email us at {email}.',
};

const sv: UiStrings = {
  learnMore: 'Läs mer',
  readOnLinkedIn: 'Läs på LinkedIn',
  caseChallenge: 'Utmaning',
  caseSolution: 'Lösning',
  caseOutcome: 'Resultat',
  langSoon: 'Snart',
  languageLabel: 'Språk',
  bookACall: 'Boka ett samtal',
  navPrimaryLabel: 'Primär',
  navMobileLabel: 'Mobil',
  toggleMenuLabel: 'Växla meny',
  formName: 'Namn',
  formEmail: 'E-post',
  formPhoneOptional: 'Telefon (valfritt)',
  formPhoneRequired: 'Telefon',
  formPhoneHintOptional: 'Krävs om du använder en privat e-postadress (Gmail, Hotmail, etc.)',
  formPhoneHintRequired: 'Du använder en privat e-postadress, så ett telefonnummer hjälper oss att nå dig.',
  formPhonePlaceholder: '70 540 90 44',
  formCountryCodeLabel: 'Landskod',
  formCompanyOptional: 'Företag (valfritt)',
  formTimeToContact: 'Önskad tid för kontakt (valfritt)',
  formTimeNoPreference: 'Ingen preferens',
  formTimeMorning: 'Vardagsförmiddagar (före 12:00 CET)',
  formTimeAfternoon: 'Vardagseftermiddagar (12:00–17:00 CET)',
  formTimeEvening: 'Vardagskvällar (efter 17:00 CET)',
  formTimeWeekend: 'Helger',
  formTimeHint: 'En ungefärlig preferens för när vi ringer — för en bekräftad, bokningsbar tid, använd "Boka ett samtal" längre ner på sidan istället.',
  formMessage: 'Meddelande',
  formSending: 'Skickar…',
  formSuccess: 'Tack — ditt meddelande är på väg. Vi återkommer snart.',
  formError: 'Något gick fel. Vänligen mejla oss direkt på {email}.',
  formIndustryLabel: 'Välj en bransch',
  formIndustryHint: 'Du kan ladda ner ett branschbibliotek per registrering.',
  formSubmitDownload: 'Registrera & ladda ner',
  formPreparingDownload: 'Förbereder din nedladdning…',
  formDownloadSuccess: 'Klart — din nedladdning bör starta automatiskt.',
  formDuplicateError: 'Det ser ut som att du redan har registrerat dig och laddat ner biblioteket. Kontakta oss om du behöver hjälp.',
  formDownloadError: 'Något gick fel när vi förberedde din nedladdning. Försök igen eller mejla oss på {email}.',
};

const registry: Record<string, UiStrings> = { en, sv };

export function getUiStrings(lang: string): UiStrings {
  return registry[lang] ?? registry.en;
}
