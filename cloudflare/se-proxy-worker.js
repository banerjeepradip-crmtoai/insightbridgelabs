// Cloudflare Worker: serves insightbridgelabs.se by proxying to the Swedish
// (/sv/) content on the www.insightbridgelabs.com GitHub Pages origin, while
// keeping insightbridgelabs.se in the visitor's address bar.
//
// Deploy: paste this into a Cloudflare Worker (Workers & Pages > Create) and
// attach it to routes: insightbridgelabs.se/* and www.insightbridgelabs.se/*

const ORIGIN_HOST = 'www.insightbridgelabs.com';

export default {
  async fetch(request) {
    const url = new URL(request.url);

    // Static build assets (hashed CSS/JS under /_astro/, images, favicon.svg,
    // robots.txt, ...) are shared between languages and must NOT get a /sv
    // prefix. Anything with a file extension in the last path segment is
    // treated as an asset; page routes (/, /about, /services/x) have none.
    const isAsset = /\.[a-z0-9]+$/i.test(url.pathname);
    const alreadyPrefixed = url.pathname === '/sv' || url.pathname.startsWith('/sv/');

    const targetPath = isAsset || alreadyPrefixed
      ? url.pathname
      : url.pathname === '/'
        ? '/sv/'
        : `/sv${url.pathname}`;

    const targetUrl = `https://${ORIGIN_HOST}${targetPath}${url.search}`;

    const originRequest = new Request(targetUrl, request);
    originRequest.headers.set('Host', ORIGIN_HOST);

    return fetch(originRequest);
  },
};
