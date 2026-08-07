// Registration + gated-download API for the free CRM Prompt Library.
//
// POST /register  { name, email, company, phone, industry }
//   -> 200, application/zip body (the requested industry's prompt library)
//   -> 400 { error: "invalid" | "phone_required" }
//   -> 409 { error: "duplicate" }
//   -> 500 { error: "file_missing" | "server_error" }
//
// Storage:
//   D1  (env.DB)         - one row per registration, unique on (name, email)
//   R2  (env.DOWNLOADS)  - one object per industry: "<industry>.zip"

const ALLOWED_ORIGINS = new Set([
  'https://www.insightbridgelabs.com',
  'https://insightbridgelabs.com',
  'https://www.insightbridgelabs.se',
  'https://insightbridgelabs.se',
  'http://localhost:4321',
]);

const ALLOWED_INDUSTRIES = new Set(['banking-insurance', 'healthcare', 'retail']);

// Keep this in sync with the client-side list in PromptLibraryForm.astro —
// this copy is the one that's actually enforced.
const GENERIC_EMAIL_DOMAINS = new Set([
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'yahoo.co.uk',
  'hotmail.com',
  'outlook.com',
  'live.com',
  'msn.com',
  'aol.com',
  'icloud.com',
  'me.com',
  'mac.com',
  'protonmail.com',
  'proton.me',
  'gmx.com',
  'gmx.net',
  'mail.com',
  'yandex.com',
  'yandex.ru',
  'zoho.com',
  'hey.com',
]);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.has(origin) ? origin : '';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

function jsonResponse(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(origin),
    },
  });
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

function normalizeName(name) {
  return name.trim().toLowerCase().replace(/\s+/g, ' ');
}

function isGenericEmail(email) {
  const domain = email.split('@')[1]?.toLowerCase().trim();
  return !!domain && GENERIC_EMAIL_DOMAINS.has(domain);
}

async function handleRegister(request, env, origin) {
  let payload;
  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: 'invalid' }, 400, origin);
  }

  const name = String(payload?.name ?? '').trim();
  const email = String(payload?.email ?? '').trim();
  const company = String(payload?.company ?? '').trim();
  const phone = String(payload?.phone ?? '').trim();
  const industry = String(payload?.industry ?? '').trim();

  // Honeypot: a filled hidden field means a bot filled the form.
  if (String(payload?._honey ?? '').trim()) {
    return jsonResponse({ error: 'invalid' }, 400, origin);
  }

  if (!name || !email || !company || !ALLOWED_INDUSTRIES.has(industry) || !EMAIL_RE.test(email)) {
    return jsonResponse({ error: 'invalid' }, 400, origin);
  }

  if (isGenericEmail(email) && !phone) {
    return jsonResponse({ error: 'phone_required' }, 400, origin);
  }

  const nameNorm = normalizeName(name);
  const emailNorm = normalizeEmail(email);

  try {
    await env.DB.prepare(
      `INSERT INTO registrations (name, email, name_normalized, email_normalized, company, phone, industry)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(name, email, nameNorm, emailNorm, company, phone || null, industry)
      .run();
  } catch (err) {
    const message = String(err?.message ?? '');
    if (message.includes('UNIQUE')) {
      return jsonResponse({ error: 'duplicate' }, 409, origin);
    }
    return jsonResponse({ error: 'server_error' }, 500, origin);
  }

  const object = await env.DOWNLOADS.get(`${industry}.zip`);
  if (!object) {
    return jsonResponse({ error: 'file_missing' }, 500, origin);
  }

  const headers = new Headers(corsHeaders(origin));
  headers.set('Content-Type', 'application/zip');
  headers.set('Content-Disposition', `attachment; filename="${industry}-prompt-library.zip"`);
  headers.set('Cache-Control', 'no-store');

  return new Response(object.body, { status: 200, headers });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') ?? '';
    const url = new URL(request.url);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (url.pathname === '/register' && request.method === 'POST') {
      return handleRegister(request, env, origin);
    }

    return jsonResponse({ error: 'not_found' }, 404, origin);
  },
};
