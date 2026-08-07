# Prompt Library Worker

Registration + gated-download API for the free CRM Prompt Library page
(`/resources/prompt-library`). Separate from `se-proxy-worker.js` at the repo
root — this is its own Worker with its own D1 database and R2 bucket.

## One-time setup

Run these from inside this folder (`cloudflare/prompt-library-worker/`).

**1. Create the D1 database**

```
wrangler d1 create prompt-library-registrations
```

This prints a `database_id`. Copy it into `wrangler.toml`, replacing
`REPLACE_WITH_D1_DATABASE_ID`.

**2. Apply the schema**

```
wrangler d1 execute prompt-library-registrations --remote --file=./schema.sql
```

**3. Create the R2 bucket**

```
wrangler r2 bucket create prompt-library-downloads
```

**4. Upload the three ZIPs**

The ZIPs are already built at `Projects/Prompt Library/_release_zips/` in
your InsightBridge Consulting documents folder (not in this repo — they're
generated output, not source). Upload each one:

```
wrangler r2 object put prompt-library-downloads/banking-insurance.zip --file="<path>/banking-insurance.zip"
wrangler r2 object put prompt-library-downloads/healthcare.zip --file="<path>/healthcare.zip"
wrangler r2 object put prompt-library-downloads/retail.zip --file="<path>/retail.zip"
```

(Re-run the same command to replace a ZIP later, e.g. after adding more
prompts — the object name stays the same, so no code changes needed.)

**5. Deploy the worker**

```
wrangler deploy
```

This gives you a URL like `https://prompt-library-api.<your-subdomain>.workers.dev`.

**6. Point the frontend at it**

Open `src/components/PromptLibraryForm.astro` and update the `WORKER_URL`
constant near the top with the real URL from step 5 (it currently points at
a placeholder `prompt-library-api.insightbridgelabs.workers.dev` — if your
Cloudflare Workers subdomain happens to be `insightbridgelabs`, it may
already be correct; check what `wrangler deploy` printed).

## Optional: custom domain instead of workers.dev

If you'd rather serve this from `api.insightbridgelabs.com/register` instead
of the workers.dev URL:

1. In `wrangler.toml`, uncomment the `routes` block.
2. At your DNS provider for `insightbridgelabs.com`, proxy an `api`
   subdomain through Cloudflare (orange-clouded), same as your existing
   `.se` proxy setup.
3. Re-run `wrangler deploy`.
4. Update `WORKER_URL` in `PromptLibraryForm.astro` to
   `https://api.insightbridgelabs.com/register`.

## Testing locally

```
wrangler dev
```

Then temporarily point `WORKER_URL` at `http://localhost:8787/register`
while running `npm run dev` on the Astro site, so you can test a full
registration → download round trip before deploying.

## Data collected

Each registration stores: name, email, company, phone (only when a
personal email domain was used), industry chosen, and timestamp — in the
`registrations` table in D1. There's no admin UI yet; query it directly:

```
wrangler d1 execute prompt-library-registrations --remote --command="SELECT * FROM registrations ORDER BY created_at DESC"
```

A `(name, email)` pair can only register once, across any industry —
enforced by a unique index in `schema.sql`, so this also blocks retries
even if the API is called directly.

**Before launch:** consider adding a privacy note to the prompt-library page
confirming what's collected and why (name/email/company/phone + consent
checkbox already exist on the form) — a proper legal review is worth doing
given this collects personal data, especially with EU (Swedish) visitors.
