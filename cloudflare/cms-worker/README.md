# CMS Worker

Admin API behind the `/admin` pages on the main site — lets
`banerjee.pradip@crmtoai.com` create, edit and delete Blog posts and Case
Studies without touching code. Separate from `prompt-library-worker/` and
`se-proxy-worker.js` — its own Worker, D1 database and R2 bucket.

Also serves `POST /contact/submit`, which the site's contact form (English
and Swedish) posts to directly. It sends the email itself via Resend,
replacing third-party form backends (FormSubmit, Web3Forms) after both
turned out unreliable — FormSubmit's origin started returning HTTP 521, and
a fresh Web3Forms access key was silently CORS-blocked pending their manual
domain approval. See "Contact form setup" below.

The live site stays fully static (GitHub Pages): this Worker is the source
of truth for content, and `scripts/sync-cms-content.mjs` (repo root) reads
it at build time to regenerate the `items` array in `src/content/blog/en.ts`
and `src/content/case-studies/en.ts`, before `astro build` runs. The CMS
only stores one (English) version of each item, and that same content is
also mirrored into `sv.ts`, so every post/case study shows up on both
insightbridgelabs.com and insightbridgelabs.se. Only the surrounding
meta/hero/cta copy in `sv.ts` stays hand-translated.

## One-time setup

Run these from inside this folder (`cloudflare/cms-worker/`).

**1. Create the D1 database**

```
wrangler d1 create cms-content
```

Paste the printed `database_id` into `wrangler.toml`, replacing
`REPLACE_WITH_D1_DATABASE_ID`.

**2. Apply the schema, then seed existing content**

```
wrangler d1 execute cms-content --remote --file=./schema.sql
wrangler d1 execute cms-content --remote --file=./seed.sql
```

`seed.sql` inserts the 7 blog posts and 3 case studies that were previously
hardcoded in `en.ts` — run it once so the live site doesn't lose that
content the first time the build switches over to reading from D1. Skip it
only if you want to start from an empty CMS.

**3. Create the R2 bucket**

```
wrangler r2 bucket create cms-images
```

**4. Generate the admin password hash**

```
node scripts/hash-password.mjs "your-chosen-password"
```

This prints an `ADMIN_PASSWORD_HASH` value. The plaintext password is never
stored or transmitted anywhere by this script — only the hash gets pasted
into a secret in the next step.

**5. Set the Worker secrets**

```
wrangler secret put ADMIN_EMAIL
# value: banerjee.pradip@crmtoai.com

wrangler secret put ADMIN_PASSWORD_HASH
# value: the string printed by hash-password.mjs

wrangler secret put SESSION_SECRET
# value: any long random string, e.g. output of:
#   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

wrangler secret put GITHUB_TOKEN
# value: a fine-grained GitHub PAT scoped ONLY to this repo
# (banerjeepradip-crmtoai/insightbridgelabs) with "Actions: write" permission.
# Used to trigger a rebuild (workflow_dispatch) after every content change.

wrangler secret put RESEND_API_KEY
# value: an API key from https://resend.com (free tier: 3,000 emails/month).
# Used by POST /contact/submit to actually send the email.

wrangler secret put CONTACT_TO_EMAIL
# value: banerjee.pradip@crmtoai.com
# Where contact-form submissions get delivered.

wrangler secret put CONTACT_FROM_EMAIL
# optional. Defaults to "InsightBridge Labs <onboarding@resend.dev>" (Resend's
# shared sandbox sender, works immediately, lower deliverability/branding).
# Once a sending domain is verified in Resend (DNS records added at Loopia,
# same idea as the Google Search Console TXT record), set this to e.g.
# "InsightBridge Labs <contact@insightbridgelabs.com>" for better inbox
# placement and a branded From address.
```

**6. Deploy the worker**

```
wrangler deploy
```

This gives you a URL like `https://cms-api.<your-subdomain>.workers.dev`.

**7. Point the frontend at it**

Update the `WORKER_URL` constant in:
- `src/pages/admin/login.astro`
- `src/pages/admin/index.astro`
- `scripts/sync-cms-content.mjs` (repo root)

with the real URL from step 6.

## Optional: custom domain instead of workers.dev

Same pattern as `prompt-library-worker/` — uncomment the `routes` block in
`wrangler.toml`, add a proxied DNS record for the chosen subdomain, and
re-deploy.

## Testing locally

```
wrangler dev
```

Then point `WORKER_URL` at `http://localhost:8787` in the admin pages and
`scripts/sync-cms-content.mjs` while running `astro dev --background` on
the site, so you can test the full login → create/edit/delete → rebuild
flow before deploying.

## Contact form setup

This Worker is already deployed, so adding `/contact/submit` to an existing
install needs one extra migration plus the three secrets above:

```
wrangler d1 execute cms-content --remote --file=./migrate-contact-rate-limit.sql
wrangler secret put RESEND_API_KEY
wrangler secret put CONTACT_TO_EMAIL
wrangler deploy
```

Then point the frontend's `WORKER_URL`-style constant (the `fetch()` target
in `src/components/ContactForm.astro` and `src/approved/contact/index.html`)
at `https://cms-api.<your-subdomain>.workers.dev/contact/submit`.

The endpoint rejects any `Origin` not in `ALLOWED_ORIGINS`, silently no-ops
on a filled honeypot field (`botcheck`), and rate-limits to 5 submissions
per IP per 30 minutes via `contact_rate_limit` — the same shape as
`login_attempts`, just a separate table/window since login lockouts and
contact-form abuse are different thresholds.

## Data model

- `blog_posts`: type, title, excerpt, tags (JSON array), href, image_key.
- `case_studies`: category, title, challenge, solution, outcome, tags
  (JSON array), image_key.
- `login_attempts`: per-IP failure counter, locks out for 15 minutes after
  5 failed logins.
- `contact_rate_limit`: per-IP counter for `/contact/submit`, resets after
  30 minutes, caps at 5 submissions.

Query directly if needed:

```
wrangler d1 execute cms-content --remote --command="SELECT id, title FROM blog_posts ORDER BY id DESC"
```
