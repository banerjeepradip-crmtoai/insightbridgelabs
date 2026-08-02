# InsightBridge Labs

Marketing site for InsightBridge Labs, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Commands

Run from the project root:

| Command           | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`       | Install dependencies                        |
| `npm run dev`        | Start local dev server at `localhost:4321`  |
| `npm run build`       | Build the production site to `./dist/`       |
| `npm run preview`      | Preview the production build locally         |

## Project structure

```text
src/
  components/       Header, Footer, Hero, Features, About, Stats, Icon, etc.
  layouts/
    BaseLayout.astro  Shared <head> + Header/Footer shell
  content/
    home/
      types.ts       Shape of a page's translatable content
      en.ts           English copy for the homepage (source of truth for now)
      index.ts        Looks up content by language code, falls back to English
  i18n/
    languages.ts      Registry of supported languages and their readiness
  pages/
    index.astro       Homepage (English, served at "/")
```

## Internationalization

The site is being built for four languages: English (default), Swedish,
Norwegian, and Danish. Only English content exists today — the header's
language switcher already lists all four, with the other three shown as
"Soon" until their content is added.

To add a language once translated copy is ready:

1. Create `src/content/<page>/<lang-code>.ts` implementing the same content type
   as the English file (e.g. copy `src/content/home/en.ts` and translate it).
2. Register it in `src/content/<page>/index.ts`.
3. Flip `ready: true` for that language in `src/i18n/languages.ts`.
4. Add a matching route under `src/pages/<lang-code>/` that renders the page
   with that language's content (mirror `src/pages/index.astro`).

### Two domains, two default languages

`www.insightbridgelabs.com` should default to English and `insightbridgelabs.se`
should default to Swedish. GitHub Pages only supports **one custom domain per
repository/Pages site** (set via the `CNAME` file), so serving both domains
with different defaults from a single Pages deployment isn't natively
possible. When we're ready to wire up the `.se` domain, we'll need to decide
between:

- Two separate GitHub Pages deployments (e.g. two repos, or two Pages
  environments) built from the same source, one per domain/default locale.
- A single deployment behind a DNS/proxy layer (e.g. Cloudflare) that routes
  `.se` traffic to the Swedish path.

This hasn't been set up yet — flagging it here so it isn't forgotten when the
`.se` domain is ready to go live.

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes `dist/` to GitHub
Pages on every push to `main`.

### One-time setup

1. In the repo's **Settings → Pages**, set **Source** to "GitHub Actions".
2. Still on that page, under **Custom domain**, enter `www.insightbridgelabs.com`
   and save (GitHub also reads this from `public/CNAME`, but setting it here
   too is what triggers automatic HTTPS certificate provisioning).
3. At your DNS provider for `insightbridgelabs.com`, add:
   - A **CNAME** record: `www` → `<github-org>.github.io`
   - Optionally, for the bare `insightbridgelabs.com` apex domain to also work
     (recommended, so `insightbridgelabs.com` redirects to `www`), four **A**
     records for `@` pointing to GitHub Pages' IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     (plus the equivalent **AAAA** records if you want IPv6:
     `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`,
     `2606:50c0:8003::153`).
4. DNS propagation can take anywhere from a few minutes to ~24 hours. Once it
   resolves, GitHub Pages provisions an HTTPS certificate automatically
   (this can also take a little while after DNS first resolves).

`astro.config.mjs` sets `site: 'https://www.insightbridgelabs.com'` and no
`base`, which assumes this custom domain is attached via `public/CNAME`. If
you ever publish to the default `https://<org>.github.io/insightbridgelabs/`
URL instead, remove `public/CNAME` and set `base: '/insightbridgelabs/'` in
`astro.config.mjs`.
