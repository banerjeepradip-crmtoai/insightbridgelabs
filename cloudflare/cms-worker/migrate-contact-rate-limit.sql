-- Run once against the existing remote D1 database to add the table the
-- new /contact/submit endpoint needs (already included in schema.sql for
-- any fresh install):
--
--   wrangler d1 execute cms-content --remote --file=./migrate-contact-rate-limit.sql

CREATE TABLE IF NOT EXISTS contact_rate_limit (
  ip TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0,
  last_attempt TEXT NOT NULL
);
