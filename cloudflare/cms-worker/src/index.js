// Admin CMS API for Blog posts + Case Studies.
//
// Auth:  POST /login, POST /logout, GET /admin/session
// Blog:  GET/POST /admin/posts, PUT/DELETE /admin/posts/:id
// Case:  GET/POST /admin/case-studies, PUT/DELETE /admin/case-studies/:id
// Image: POST /admin/upload-image, GET /images/:key
// Public read (used by the build's sync script, no auth):
//        GET /content/blog, GET /content/case-studies
//
// Storage:
//   D1  (env.DB)      - blog_posts, case_studies, login_attempts
//   R2  (env.IMAGES)  - uploaded images
//
// Single admin account, gated by env.ADMIN_EMAIL + env.ADMIN_PASSWORD_HASH
// (PBKDF2-SHA256, see scripts/hash-password.mjs). Session is a signed,
// HttpOnly cookie (HMAC-SHA256 via env.SESSION_SECRET). Every mutating
// route also checks the Origin header against ALLOWED_ORIGINS as an
// authorization gate (not just a CORS convenience) to close the
// SameSite=None CSRF gap.

const ALLOWED_ORIGINS = new Set([
  'https://www.insightbridgelabs.com',
  'https://insightbridgelabs.com',
  'https://www.insightbridgelabs.se',
  'https://insightbridgelabs.se',
  'http://localhost:4321',
]);

const GITHUB_REPO = 'banerjeepradip-crmtoai/insightbridgelabs';
const SESSION_DURATION_MS = 12 * 60 * 60 * 1000; // 12h
const LOGIN_LOCKOUT_WINDOW_MS = 15 * 60 * 1000;
const LOGIN_MAX_ATTEMPTS = 5;
const ALLOWED_IMAGE_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/gif']);
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;

// ---------- generic helpers ----------

function corsHeaders(origin) {
  const allow = ALLOWED_ORIGINS.has(origin) ? origin : '';
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Credentials': 'true',
    Vary: 'Origin',
  };
}

function jsonResponse(body, status, origin, extraHeaders) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(origin),
      ...extraHeaders,
    },
  });
}

async function safeJson(request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

function str(v) {
  return typeof v === 'string' ? v.trim() : '';
}

function clamp(v, max) {
  return v.length > max ? v.slice(0, max) : v;
}

function tagsArray(v) {
  if (!Array.isArray(v)) return [];
  return v.map((t) => String(t).trim()).filter(Boolean).slice(0, 12);
}

function safeParseTags(json) {
  try {
    const t = JSON.parse(json);
    return Array.isArray(t) ? t : [];
  } catch {
    return [];
  }
}

function matchId(pathname, prefix) {
  if (!pathname.startsWith(prefix)) return null;
  const rest = pathname.slice(prefix.length);
  if (!/^\/\d+$/.test(rest)) return null;
  return Number(rest.slice(1));
}

// ---------- base64url / hex ----------

function toBase64Url(bytes) {
  let binary = '';
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(value) {
  let padded = value.replace(/-/g, '+').replace(/_/g, '/');
  while (padded.length % 4) padded += '=';
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

function hexToBytes(hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  return bytes;
}

function timingSafeEqualStr(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

// ---------- password hashing (PBKDF2-SHA256, matches scripts/hash-password.mjs) ----------

async function verifyPassword(password, stored) {
  const parts = stored.split(':');
  if (parts.length !== 3) return false;
  const [iterStr, saltHex, hashHex] = parts;
  const iterations = parseInt(iterStr, 10);
  if (!iterations || !saltHex || !hashHex) return false;

  const salt = hexToBytes(saltHex);
  const keyMaterial = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, [
    'deriveBits',
  ]);
  const derivedBits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', hash: 'SHA-256', salt, iterations },
    keyMaterial,
    256
  );
  const derivedHex = Array.from(new Uint8Array(derivedBits))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return timingSafeEqualStr(derivedHex, hashHex);
}

// ---------- session cookie (HMAC-SHA256 signed) ----------

async function hmacSignBase64url(data, secret) {
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, [
    'sign',
  ]);
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(data));
  return toBase64Url(new Uint8Array(sig));
}

async function createSessionToken(email, env) {
  const payload = toBase64Url(new TextEncoder().encode(JSON.stringify({ email, exp: Date.now() + SESSION_DURATION_MS })));
  const sig = await hmacSignBase64url(payload, env.SESSION_SECRET);
  return `${payload}.${sig}`;
}

async function verifySessionToken(token, env) {
  if (!token) return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;
  const [payload, sig] = parts;
  const expectedSig = await hmacSignBase64url(payload, env.SESSION_SECRET);
  if (!timingSafeEqualStr(sig, expectedSig)) return null;
  let data;
  try {
    data = JSON.parse(new TextDecoder().decode(fromBase64Url(payload)));
  } catch {
    return null;
  }
  if (!data?.exp || !data?.email || Date.now() > data.exp) return null;
  return data;
}

function getCookie(request, name) {
  const header = request.headers.get('Cookie') || '';
  const match = header
    .split(';')
    .map((s) => s.trim())
    .find((s) => s.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
}

async function getSession(request, env) {
  return verifySessionToken(getCookie(request, 'session'), env);
}

async function withAuth(request, env, origin, handler, { requireOriginCheck = false } = {}) {
  if (requireOriginCheck && !ALLOWED_ORIGINS.has(origin)) {
    return jsonResponse({ error: 'forbidden_origin' }, 403, origin);
  }
  const session = await getSession(request, env);
  if (!session) return jsonResponse({ error: 'unauthorized' }, 401, origin);
  return handler();
}

// ---------- login rate limiting ----------

async function isLockedOut(env, ip) {
  const row = await env.DB.prepare('SELECT count, last_attempt FROM login_attempts WHERE ip = ?').bind(ip).first();
  if (!row) return false;
  const withinWindow = Date.now() - new Date(row.last_attempt).getTime() < LOGIN_LOCKOUT_WINDOW_MS;
  return row.count >= LOGIN_MAX_ATTEMPTS && withinWindow;
}

async function recordFailedAttempt(env, ip) {
  const row = await env.DB.prepare('SELECT count, last_attempt FROM login_attempts WHERE ip = ?').bind(ip).first();
  const now = new Date().toISOString();
  if (!row) {
    await env.DB.prepare('INSERT INTO login_attempts (ip, count, last_attempt) VALUES (?, 1, ?)').bind(ip, now).run();
    return;
  }
  const withinWindow = Date.now() - new Date(row.last_attempt).getTime() < LOGIN_LOCKOUT_WINDOW_MS;
  const newCount = withinWindow ? row.count + 1 : 1;
  await env.DB.prepare('UPDATE login_attempts SET count = ?, last_attempt = ? WHERE ip = ?').bind(newCount, now, ip).run();
}

async function clearLoginAttempts(env, ip) {
  await env.DB.prepare('DELETE FROM login_attempts WHERE ip = ?').bind(ip).run();
}

// ---------- GitHub Actions rebuild trigger ----------

function triggerRebuild(env, ctx) {
  if (!env.GITHUB_TOKEN) return;
  ctx.waitUntil(
    fetch(`https://api.github.com/repos/${GITHUB_REPO}/actions/workflows/deploy.yml/dispatches`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'User-Agent': 'insightbridgelabs-cms-worker',
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify({ ref: 'main' }),
    }).catch(() => {})
  );
}

// ---------- auth routes ----------

async function handleLogin(request, env, ctx, origin) {
  if (!ALLOWED_ORIGINS.has(origin)) return jsonResponse({ error: 'forbidden_origin' }, 403, origin);

  const body = await safeJson(request);
  if (!body) return jsonResponse({ error: 'invalid' }, 400, origin);

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  if (await isLockedOut(env, ip)) {
    return jsonResponse({ error: 'locked_out' }, 429, origin);
  }

  const email = str(body.email).toLowerCase();
  const password = str(body.password);
  const adminEmail = (env.ADMIN_EMAIL || '').toLowerCase();

  const emailMatches = Boolean(email) && Boolean(adminEmail) && timingSafeEqualStr(email, adminEmail);
  const passwordOk = password ? await verifyPassword(password, env.ADMIN_PASSWORD_HASH || '0:00:00') : false;

  if (!emailMatches || !passwordOk) {
    await recordFailedAttempt(env, ip);
    return jsonResponse({ error: 'invalid_credentials' }, 401, origin);
  }

  await clearLoginAttempts(env, ip);
  const token = await createSessionToken(env.ADMIN_EMAIL, env);
  return jsonResponse(
    { ok: true, email: env.ADMIN_EMAIL },
    200,
    origin,
    { 'Set-Cookie': `session=${token}; HttpOnly; Secure; SameSite=None; Path=/; Max-Age=${SESSION_DURATION_MS / 1000}` }
  );
}

function handleLogout(origin) {
  return jsonResponse({ ok: true }, 200, origin, {
    'Set-Cookie': 'session=; HttpOnly; Secure; SameSite=None; Path=/; Max-Age=0',
  });
}

async function handleSession(request, env, origin) {
  const session = await getSession(request, env);
  if (!session) return jsonResponse({ error: 'unauthorized' }, 401, origin);
  return jsonResponse({ email: session.email }, 200, origin);
}

// ---------- blog posts ----------

function rowToPost(r, base) {
  return {
    id: r.id,
    type: r.type,
    title: r.title,
    excerpt: r.excerpt,
    tags: safeParseTags(r.tags),
    href: r.href || '',
    image: r.image_key ? `${base}/images/${r.image_key}` : null,
    imageKey: r.image_key || null,
    createdAt: r.created_at,
    updatedAt: r.updated_at,
  };
}

async function listPosts(request, env, origin) {
  const { results } = await env.DB.prepare('SELECT * FROM blog_posts ORDER BY id DESC').all();
  const base = new URL(request.url).origin;
  return jsonResponse({ items: results.map((r) => rowToPost(r, base)) }, 200, origin);
}

async function createPost(request, env, ctx, origin) {
  const body = await safeJson(request);
  if (!body) return jsonResponse({ error: 'invalid' }, 400, origin);

  const type = clamp(str(body.type) || 'Article', 120);
  const title = clamp(str(body.title), 300);
  const excerpt = clamp(str(body.excerpt), 4000);
  const href = clamp(str(body.href), 2000) || null;
  const tags = tagsArray(body.tags);
  const imageKey = str(body.imageKey) || null;

  if (!title || !excerpt) return jsonResponse({ error: 'invalid', message: 'title and excerpt are required' }, 400, origin);

  const result = await env.DB.prepare(
    `INSERT INTO blog_posts (type, title, excerpt, tags, href, image_key) VALUES (?, ?, ?, ?, ?, ?)`
  )
    .bind(type, title, excerpt, JSON.stringify(tags), href, imageKey)
    .run();

  triggerRebuild(env, ctx);
  return jsonResponse({ id: result.meta.last_row_id }, 201, origin);
}

async function updatePost(request, env, ctx, origin, id) {
  const body = await safeJson(request);
  if (!body) return jsonResponse({ error: 'invalid' }, 400, origin);

  const type = clamp(str(body.type) || 'Article', 120);
  const title = clamp(str(body.title), 300);
  const excerpt = clamp(str(body.excerpt), 4000);
  const href = clamp(str(body.href), 2000) || null;
  const tags = tagsArray(body.tags);
  const imageKey = body.imageKey === undefined ? undefined : str(body.imageKey) || null;

  if (!title || !excerpt) return jsonResponse({ error: 'invalid' }, 400, origin);

  if (imageKey === undefined) {
    await env.DB.prepare(
      `UPDATE blog_posts SET type=?, title=?, excerpt=?, tags=?, href=?, updated_at=datetime('now') WHERE id=?`
    )
      .bind(type, title, excerpt, JSON.stringify(tags), href, id)
      .run();
  } else {
    await env.DB.prepare(
      `UPDATE blog_posts SET type=?, title=?, excerpt=?, tags=?, href=?, image_key=?, updated_at=datetime('now') WHERE id=?`
    )
      .bind(type, title, excerpt, JSON.stringify(tags), href, imageKey, id)
      .run();
  }

  triggerRebuild(env, ctx);
  return jsonResponse({ ok: true }, 200, origin);
}

async function deletePost(request, env, ctx, origin, id) {
  const row = await env.DB.prepare('SELECT image_key FROM blog_posts WHERE id = ?').bind(id).first();
  await env.DB.prepare('DELETE FROM blog_posts WHERE id = ?').bind(id).run();
  if (row?.image_key) ctx.waitUntil(env.IMAGES.delete(row.image_key).catch(() => {}));
  triggerRebuild(env, ctx);
  return jsonResponse({ ok: true }, 200, origin);
}

// ---------- case studies ----------

function rowToCaseStudy(r, base) {
  return {
    id: r.id,
    category: r.category,
    title: r.title,
    challenge: r.challenge,
    solution: r.solution,
    outcome: r.outcome,
    tags: safeParseTags(r.tags),
    image: r.image_key ? `${base}/images/${r.image_key}` : null,
    imageKey: r.image_key || null,
    createdAt: r.created_at,
    updatedAt: r.updated_at,
  };
}

async function listCaseStudies(request, env, origin) {
  const { results } = await env.DB.prepare('SELECT * FROM case_studies ORDER BY id DESC').all();
  const base = new URL(request.url).origin;
  return jsonResponse({ items: results.map((r) => rowToCaseStudy(r, base)) }, 200, origin);
}

async function createCaseStudy(request, env, ctx, origin) {
  const body = await safeJson(request);
  if (!body) return jsonResponse({ error: 'invalid' }, 400, origin);

  const category = clamp(str(body.category) || 'Case Study', 120);
  const title = clamp(str(body.title), 300);
  const challenge = clamp(str(body.challenge), 4000);
  const solution = clamp(str(body.solution), 4000);
  const outcome = clamp(str(body.outcome), 4000);
  const tags = tagsArray(body.tags);
  const imageKey = str(body.imageKey) || null;

  if (!title || !challenge || !solution || !outcome) {
    return jsonResponse({ error: 'invalid', message: 'title, challenge, solution and outcome are required' }, 400, origin);
  }

  const result = await env.DB.prepare(
    `INSERT INTO case_studies (category, title, challenge, solution, outcome, tags, image_key) VALUES (?, ?, ?, ?, ?, ?, ?)`
  )
    .bind(category, title, challenge, solution, outcome, JSON.stringify(tags), imageKey)
    .run();

  triggerRebuild(env, ctx);
  return jsonResponse({ id: result.meta.last_row_id }, 201, origin);
}

async function updateCaseStudy(request, env, ctx, origin, id) {
  const body = await safeJson(request);
  if (!body) return jsonResponse({ error: 'invalid' }, 400, origin);

  const category = clamp(str(body.category) || 'Case Study', 120);
  const title = clamp(str(body.title), 300);
  const challenge = clamp(str(body.challenge), 4000);
  const solution = clamp(str(body.solution), 4000);
  const outcome = clamp(str(body.outcome), 4000);
  const tags = tagsArray(body.tags);
  const imageKey = body.imageKey === undefined ? undefined : str(body.imageKey) || null;

  if (!title || !challenge || !solution || !outcome) {
    return jsonResponse({ error: 'invalid' }, 400, origin);
  }

  if (imageKey === undefined) {
    await env.DB.prepare(
      `UPDATE case_studies SET category=?, title=?, challenge=?, solution=?, outcome=?, tags=?, updated_at=datetime('now') WHERE id=?`
    )
      .bind(category, title, challenge, solution, outcome, JSON.stringify(tags), id)
      .run();
  } else {
    await env.DB.prepare(
      `UPDATE case_studies SET category=?, title=?, challenge=?, solution=?, outcome=?, tags=?, image_key=?, updated_at=datetime('now') WHERE id=?`
    )
      .bind(category, title, challenge, solution, outcome, JSON.stringify(tags), imageKey, id)
      .run();
  }

  triggerRebuild(env, ctx);
  return jsonResponse({ ok: true }, 200, origin);
}

async function deleteCaseStudy(request, env, ctx, origin, id) {
  const row = await env.DB.prepare('SELECT image_key FROM case_studies WHERE id = ?').bind(id).first();
  await env.DB.prepare('DELETE FROM case_studies WHERE id = ?').bind(id).run();
  if (row?.image_key) ctx.waitUntil(env.IMAGES.delete(row.image_key).catch(() => {}));
  triggerRebuild(env, ctx);
  return jsonResponse({ ok: true }, 200, origin);
}

// ---------- images ----------

async function uploadImage(request, env, origin) {
  const contentType = request.headers.get('Content-Type') || '';
  if (!contentType.includes('multipart/form-data')) return jsonResponse({ error: 'invalid' }, 400, origin);

  const form = await request.formData();
  const file = form.get('image');
  if (!file || typeof file.arrayBuffer !== 'function') return jsonResponse({ error: 'no_file' }, 400, origin);
  if (!ALLOWED_IMAGE_TYPES.has(file.type)) return jsonResponse({ error: 'invalid_type' }, 400, origin);
  if (file.size > MAX_IMAGE_BYTES) return jsonResponse({ error: 'too_large' }, 400, origin);

  const kind = form.get('kind') === 'case-study' ? 'case-studies' : 'blog';
  const ext = (file.type.split('/')[1] || 'bin').replace('jpeg', 'jpg');
  const key = `${kind}/${crypto.randomUUID()}.${ext}`;

  await env.IMAGES.put(key, file.stream(), { httpMetadata: { contentType: file.type } });

  const base = new URL(request.url).origin;
  return jsonResponse({ key, url: `${base}/images/${key}` }, 201, origin);
}

async function serveImage(env, pathname) {
  const key = decodeURIComponent(pathname.slice('/images/'.length));
  if (!key) return new Response('not found', { status: 404 });
  const object = await env.IMAGES.get(key);
  if (!object) return new Response('not found', { status: 404 });
  const headers = new Headers();
  headers.set('Content-Type', object.httpMetadata?.contentType || 'application/octet-stream');
  headers.set('Cache-Control', 'public, max-age=31536000, immutable');
  headers.set('Access-Control-Allow-Origin', '*');
  return new Response(object.body, { status: 200, headers });
}

// ---------- public content export (read by scripts/sync-cms-content.mjs) ----------

async function contentBlog(env, origin, url) {
  const { results } = await env.DB.prepare('SELECT * FROM blog_posts ORDER BY id ASC').all();
  const items = results.map((r) => ({
    type: r.type,
    title: r.title,
    excerpt: r.excerpt,
    tags: safeParseTags(r.tags),
    href: r.href || '',
    image: r.image_key ? `${url.origin}/images/${r.image_key}` : undefined,
  }));
  return jsonResponse({ items }, 200, origin);
}

async function contentCaseStudies(env, origin, url) {
  const { results } = await env.DB.prepare('SELECT * FROM case_studies ORDER BY id ASC').all();
  const items = results.map((r) => ({
    category: r.category,
    title: r.title,
    challenge: r.challenge,
    solution: r.solution,
    outcome: r.outcome,
    tags: safeParseTags(r.tags),
    image: r.image_key ? `${url.origin}/images/${r.image_key}` : undefined,
  }));
  return jsonResponse({ items }, 200, origin);
}

// ---------- router ----------

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get('Origin') ?? '';
    const url = new URL(request.url);
    const { pathname } = url;
    const method = request.method;

    if (method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    try {
      if (pathname === '/login' && method === 'POST') return handleLogin(request, env, ctx, origin);
      if (pathname === '/logout' && method === 'POST') return handleLogout(origin);
      if (pathname === '/admin/session' && method === 'GET') return handleSession(request, env, origin);

      if (pathname === '/admin/posts' && method === 'GET') {
        return withAuth(request, env, origin, () => listPosts(request, env, origin));
      }
      if (pathname === '/admin/posts' && method === 'POST') {
        return withAuth(request, env, origin, () => createPost(request, env, ctx, origin), { requireOriginCheck: true });
      }
      const postId = matchId(pathname, '/admin/posts');
      if (postId !== null && method === 'PUT') {
        return withAuth(request, env, origin, () => updatePost(request, env, ctx, origin, postId), { requireOriginCheck: true });
      }
      if (postId !== null && method === 'DELETE') {
        return withAuth(request, env, origin, () => deletePost(request, env, ctx, origin, postId), { requireOriginCheck: true });
      }

      if (pathname === '/admin/case-studies' && method === 'GET') {
        return withAuth(request, env, origin, () => listCaseStudies(request, env, origin));
      }
      if (pathname === '/admin/case-studies' && method === 'POST') {
        return withAuth(request, env, origin, () => createCaseStudy(request, env, ctx, origin), { requireOriginCheck: true });
      }
      const csId = matchId(pathname, '/admin/case-studies');
      if (csId !== null && method === 'PUT') {
        return withAuth(request, env, origin, () => updateCaseStudy(request, env, ctx, origin, csId), {
          requireOriginCheck: true,
        });
      }
      if (csId !== null && method === 'DELETE') {
        return withAuth(request, env, origin, () => deleteCaseStudy(request, env, ctx, origin, csId), {
          requireOriginCheck: true,
        });
      }

      if (pathname === '/admin/upload-image' && method === 'POST') {
        return withAuth(request, env, origin, () => uploadImage(request, env, origin), { requireOriginCheck: true });
      }

      if (pathname.startsWith('/images/') && method === 'GET') return serveImage(env, pathname);

      if (pathname === '/content/blog' && method === 'GET') return contentBlog(env, origin, url);
      if (pathname === '/content/case-studies' && method === 'GET') return contentCaseStudies(env, origin, url);

      return jsonResponse({ error: 'not_found' }, 404, origin);
    } catch (err) {
      console.error(err);
      return jsonResponse({ error: 'server_error' }, 500, origin);
    }
  },
};
