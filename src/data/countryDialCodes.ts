export interface CountryDialCode {
  iso: string;
  name: string;
  dial: string;
}

// Common dial codes, sorted alphabetically by country name. Not exhaustive of
// all 195 ISO countries, but covers the markets this site is realistically
// used from (Nordics/Europe first-class, plus major global markets).
export const countryDialCodes: CountryDialCode[] = [
  { iso: 'AU', name: 'Australia', dial: '+61' },
  { iso: 'AT', name: 'Austria', dial: '+43' },
  { iso: 'BE', name: 'Belgium', dial: '+32' },
  { iso: 'BR', name: 'Brazil', dial: '+55' },
  { iso: 'CA', name: 'Canada', dial: '+1' },
  { iso: 'CN', name: 'China', dial: '+86' },
  { iso: 'HR', name: 'Croatia', dial: '+385' },
  { iso: 'CZ', name: 'Czech Republic', dial: '+420' },
  { iso: 'DK', name: 'Denmark', dial: '+45' },
  { iso: 'EE', name: 'Estonia', dial: '+372' },
  { iso: 'FI', name: 'Finland', dial: '+358' },
  { iso: 'FR', name: 'France', dial: '+33' },
  { iso: 'DE', name: 'Germany', dial: '+49' },
  { iso: 'GR', name: 'Greece', dial: '+30' },
  { iso: 'HK', name: 'Hong Kong', dial: '+852' },
  { iso: 'HU', name: 'Hungary', dial: '+36' },
  { iso: 'IS', name: 'Iceland', dial: '+354' },
  { iso: 'IN', name: 'India', dial: '+91' },
  { iso: 'ID', name: 'Indonesia', dial: '+62' },
  { iso: 'IE', name: 'Ireland', dial: '+353' },
  { iso: 'IL', name: 'Israel', dial: '+972' },
  { iso: 'IT', name: 'Italy', dial: '+39' },
  { iso: 'JP', name: 'Japan', dial: '+81' },
  { iso: 'LV', name: 'Latvia', dial: '+371' },
  { iso: 'LT', name: 'Lithuania', dial: '+370' },
  { iso: 'LU', name: 'Luxembourg', dial: '+352' },
  { iso: 'MY', name: 'Malaysia', dial: '+60' },
  { iso: 'MX', name: 'Mexico', dial: '+52' },
  { iso: 'NL', name: 'Netherlands', dial: '+31' },
  { iso: 'NZ', name: 'New Zealand', dial: '+64' },
  { iso: 'NO', name: 'Norway', dial: '+47' },
  { iso: 'PH', name: 'Philippines', dial: '+63' },
  { iso: 'PL', name: 'Poland', dial: '+48' },
  { iso: 'PT', name: 'Portugal', dial: '+351' },
  { iso: 'RO', name: 'Romania', dial: '+40' },
  { iso: 'SG', name: 'Singapore', dial: '+65' },
  { iso: 'SK', name: 'Slovakia', dial: '+421' },
  { iso: 'SI', name: 'Slovenia', dial: '+386' },
  { iso: 'ZA', name: 'South Africa', dial: '+27' },
  { iso: 'KR', name: 'South Korea', dial: '+82' },
  { iso: 'ES', name: 'Spain', dial: '+34' },
  { iso: 'SE', name: 'Sweden', dial: '+46' },
  { iso: 'CH', name: 'Switzerland', dial: '+41' },
  { iso: 'AE', name: 'United Arab Emirates', dial: '+971' },
  { iso: 'GB', name: 'United Kingdom', dial: '+44' },
  { iso: 'US', name: 'United States', dial: '+1' },
];
