#!/usr/bin/env node
// Fetches live content from the CMS worker (cloudflare/cms-worker/) and
// regenerates the `items` array inside src/content/blog/en.ts and
// src/content/case-studies/en.ts, between the `CMS:ITEMS:START` /
// `CMS:ITEMS:END` marker comments, before `astro build` runs.
//
// Runs as a `prebuild` npm script (see package.json) so it fires
// automatically for both local builds and the GitHub Actions deploy.
// Never commits the result — it's purely ephemeral within the build.
//
// If the worker is unreachable (offline, not deployed yet), each target
// file is left exactly as checked into git, so `npm run build` never
// hard-depends on the worker being up.
//
// The CMS only stores one (English) version of each item — sv.ts gets the
// same English item text mirrored in, so every post/case study appears on
// both insightbridgelabs.com and insightbridgelabs.se. Only meta/hero/cta
// (outside the markers) stay hand-translated.

import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// Same URL as in src/pages/admin/login.astro, src/pages/admin/index.astro
// and cloudflare/cms-worker/README.md — update all four together.
const WORKER_URL = 'https://cms-api.banerjee-pradip.workers.dev';

const START_MARKER = '// CMS:ITEMS:START';
const END_MARKER = '// CMS:ITEMS:END';

const TARGETS = [
  { file: 'src/content/blog/en.ts', endpoint: '/content/blog' },
  { file: 'src/content/blog/sv.ts', endpoint: '/content/blog' },
  { file: 'src/content/case-studies/en.ts', endpoint: '/content/case-studies' },
  { file: 'src/content/case-studies/sv.ts', endpoint: '/content/case-studies' },
];

function indent(block, spaces) {
  const pad = ' '.repeat(spaces);
  return block
    .split('\n')
    .map((line) => `${pad}${line}`)
    .join('\n');
}

function serializeItems(items) {
  return items.map((item) => indent(JSON.stringify(item, null, 2), 4)).join(',\n');
}

async function syncFile({ file, endpoint }) {
  const filePath = path.join(ROOT, file);
  const original = await readFile(filePath, 'utf-8');

  const startIdx = original.indexOf(START_MARKER);
  const endIdx = original.indexOf(END_MARKER);
  if (startIdx === -1 || endIdx === -1) {
    console.warn(`[sync-cms-content] Markers not found in ${file}, skipping.`);
    return;
  }

  let items;
  try {
    const res = await fetch(`${WORKER_URL}${endpoint}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    items = Array.isArray(data.items) ? data.items : [];
  } catch (err) {
    console.warn(`[sync-cms-content] Could not fetch ${endpoint} (${err.message}). Leaving ${file} unchanged.`);
    return;
  }

  const before = original.slice(0, startIdx + START_MARKER.length);
  const after = original.slice(endIdx);
  const body = items.length ? `\n${serializeItems(items)},\n    ` : '\n    ';

  await writeFile(filePath, `${before}${body}${after}`, 'utf-8');
  console.log(`[sync-cms-content] Synced ${items.length} item(s) into ${file}.`);
}

for (const target of TARGETS) {
  await syncFile(target);
}
