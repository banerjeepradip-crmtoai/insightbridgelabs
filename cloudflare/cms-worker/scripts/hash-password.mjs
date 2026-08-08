// One-off local helper: turns a plaintext password into the
// PBKDF2-SHA256 hash format the Worker expects for ADMIN_PASSWORD_HASH.
// The plaintext password never leaves your machine — only the printed
// hash gets pasted into `wrangler secret put ADMIN_PASSWORD_HASH`.
//
// Usage:
//   node hash-password.mjs "your-chosen-password"

import { randomBytes, pbkdf2Sync } from 'node:crypto';

// Cloudflare Workers' crypto.subtle enforces a hard cap of 100,000 PBKDF2
// iterations (the Worker throws "iteration counts above 100000 are not
// supported" above that) — must stay at or below it since the Worker is
// what verifies this hash.
const ITERATIONS = 100000;
const KEYLEN = 32; // bytes

const password = process.argv[2];
if (!password) {
  console.error('Usage: node hash-password.mjs "your-chosen-password"');
  process.exit(1);
}

const salt = randomBytes(16);
const hash = pbkdf2Sync(password, salt, ITERATIONS, KEYLEN, 'sha256');

const stored = `${ITERATIONS}:${salt.toString('hex')}:${hash.toString('hex')}`;

console.log('\nADMIN_PASSWORD_HASH value (paste this when `wrangler secret put ADMIN_PASSWORD_HASH` prompts):\n');
console.log(stored);
console.log('');
