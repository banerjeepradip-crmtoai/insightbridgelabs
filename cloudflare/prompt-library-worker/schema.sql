CREATE TABLE IF NOT EXISTS registrations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  name_normalized TEXT NOT NULL,
  email_normalized TEXT NOT NULL,
  company TEXT NOT NULL,
  phone TEXT,
  industry TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE UNIQUE INDEX IF NOT EXISTS idx_registrations_name_email
  ON registrations (name_normalized, email_normalized);
