# CMS Worker

Admin API behind the `/admin` pages on the main site — lets
`banerjee.pradip@crmtoai.com` create, edit and delete Blog posts and Case
Studies without touching code. Separate from `prompt-library-worker/` and
`se-proxy-worker.js` — its own Worker, D1 database and R2 bucket.

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

## Data model

- `blog_posts`: type, title, excerpt, tags (JSON array), href, image_key.
- `case_studies`: category, title, challenge, solution, outcome, tags
  (JSON array), image_key.
- `login_attempts`: per-IP failure counter, locks out for 15 minutes after
  5 failed logins.

Query directly if needed:

```
wrangler d1 execute cms-content --remote --command="SELECT id, title FROM blog_posts ORDER BY id DESC"
```
