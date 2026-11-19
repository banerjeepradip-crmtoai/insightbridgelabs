// Search-engine and social-sharing tags shared by the English (approved HTML)
// and Swedish (BaseLayout) pages: canonical URL, hreflang alternates,
// Open Graph / Twitter card tags and Organization structured data.

export const SITE = 'https://www.insightbridgelabs.com';
const OG_IMAGE = `${SITE}/assets/enterprise-decisions.webp`;

// English routes whose Swedish page lives at a different path, or has none (null).
const EN_TO_SV: Record<string, string | null> = {
  '/': '/sv/',
  '/about-us/': '/sv/about/',
  '/resources/': null,
};

const SV_PAGES = new Set([
  '/contact/', '/privacy/',
  '/products/ai-solution-development-platform/', '/products/regulatory-intelligence-platform/',
  '/resources/blog/', '/resources/case-studies/', '/resources/prompt-library/',
  '/services/ai-consulting/', '/services/ai-governance/', '/services/ai-strategy/',
  '/services/crm-to-ai/', '/services/rapid-application-development/',
]);

function svFor(enRoute: string): string | null {
  if (enRoute in EN_TO_SV) return EN_TO_SV[enRoute];
  return SV_PAGES.has(enRoute) ? `/sv${enRoute}` : null;
}

function enFor(svRoute: string): string | null {
  for (const [en, sv] of Object.entries(EN_TO_SV)) if (sv === svRoute) return en;
  const en = svRoute.replace(/^\/sv/, '');
  return SV_PAGES.has(en) ? en : null;
}

const esc = (v: string) => v.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));

const ORG_JSON_LD = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'InsightBridge Labs',
  legalName: 'Insight Bridge Consulting AB',
  url: `${SITE}/`,
  logo: `${SITE}/assets/brand-mark.svg`,
  taxID: '559595-5419',
  address: { '@type': 'PostalAddress', addressLocality: 'Stockholm', addressCountry: 'SE' },
  sameAs: [
    'https://www.linkedin.com/company/insight-bridge-consulting-ab/',
    'https://www.regintel.eu/',
  ],
});

interface SeoInput {
  route: string; // path of this page, e.g. "/services/ai-governance/" or "/sv/"
  lang: 'en' | 'sv';
  title: string;
  description: string;
  includeCanonical?: boolean; // English templates already carry their own canonical
}

export function seoTags({ route, lang, title, description, includeCanonical = true }: SeoInput): string {
  const en = lang === 'en' ? route : enFor(route);
  const sv = lang === 'sv' ? route : svFor(route);
  const tags: string[] = [];
  if (includeCanonical) tags.push(`<link rel="canonical" href="${SITE}${route}">`);
  if (en && sv) {
    tags.push(
      `<link rel="alternate" hreflang="en" href="${SITE}${en}">`,
      `<link rel="alternate" hreflang="sv" href="${SITE}${sv}">`,
      `<link rel="alternate" hreflang="x-default" href="${SITE}${en}">`,
    );
  }
  tags.push(
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="InsightBridge Labs">`,
    `<meta property="og:locale" content="${lang === 'sv' ? 'sv_SE' : 'en_GB'}">`,
    `<meta property="og:title" content="${esc(title)}">`,
    `<meta property="og:description" content="${esc(description)}">`,
    `<meta property="og:url" content="${SITE}${route}">`,
    `<meta property="og:image" content="${OG_IMAGE}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
  );
  if (route === '/' || route === '/sv/') {
    tags.push(`<script type="application/ld+json">${ORG_JSON_LD.replace(/</g, '\\u003c')}</script>`);
  }
  return tags.join('');
}

// Pull title and meta description out of a raw approved HTML template.
export function headInfo(html: string): { title: string; description: string } {
  const decode = (s: string) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim() ?? 'InsightBridge Labs');
  const meta = html.match(/<meta\b[^>]*\bname="description"[^>]*>/)?.[0] ?? '';
  const description = decode(meta.match(/\bcontent="([^"]*)"/)?.[1] ?? '');
  return { title, description };
}
