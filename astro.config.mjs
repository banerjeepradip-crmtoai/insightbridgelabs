// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Custom domain (www.insightbridgelabs.com) is attached via public/CNAME,
  // so the site is served from the root, not a /<repo>/ subpath.
  // If you publish to the default github.io/insightbridgelabs URL instead, set base: '/insightbridgelabs/'.
  site: 'https://www.insightbridgelabs.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin/'),
    }),
  ],
});
