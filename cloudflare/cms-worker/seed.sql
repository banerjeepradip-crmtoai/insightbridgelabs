-- One-time seed: mirrors the blog posts and case studies that were
-- hardcoded in src/content/blog/en.ts and src/content/case-studies/en.ts
-- before the CMS existed. Run this once, right after schema.sql, so the
-- live site doesn't lose existing content the first time
-- scripts/sync-cms-content.mjs switches the build over to reading from D1.
--
--   wrangler d1 execute cms-content --remote --file=./seed.sql

INSERT INTO blog_posts (type, title, excerpt, tags, href) VALUES
('LinkedIn Post',
 'Why Understanding Token Consumption Is Critical for Business Success with AI',
 'AI success isn''t measured by token volume, but by the business value each token generates. The right model for the task, well-designed prompts, and prompt caching all compound into real cost and ROI advantages.',
 '["AI Strategy","Cost Optimization"]',
 'https://www.linkedin.com/posts/pradipbanerjee1_why-understanding-token-consumption-is-critical-activity-7486150898281353217-QRiE'),

('LinkedIn Post',
 'AI ROI Starts with Data, Not AI',
 'Your AI is only as intelligent as the data, processes and business knowledge it can access. Before investing further in models and agents, invest in data strategy — AI maturity follows data maturity.',
 '["Data Strategy","AI ROI"]',
 'https://www.linkedin.com/posts/pradipbanerjee1_ai-roi-starts-with-data-not-ai-every-boardroom-activity-7478163576902541312-wnnA'),

('LinkedIn Post',
 'AI That Writes vs AI That Works: Where Enterprises Will Actually Win',
 'AI that writes improves productivity. AI that works transforms business. A look at the distinction enterprises need to make to actually win with AI.',
 '["Enterprise AI"]',
 'https://www.linkedin.com/posts/pradipbanerjee1_this-post-is-my-thoughts-on-ai-that-writes-activity-7451743160604454912-Q9zs'),

('LinkedIn Post',
 'Innovation Is the Key to Survival in the Era of AI',
 'Why innovation, not access to AI itself, is the ultimate competitive advantage in the age of AI, and how leaders can stay ahead.',
 '["Innovation","Leadership"]',
 'https://www.linkedin.com/posts/pradipbanerjee1_ive-shared-my-perspective-on-why-innovation-activity-7381797687261581313-4urQ'),

('LinkedIn Post',
 'Sustainable AI: Balancing Progress and the Planet',
 'Training a large model can use over a thousand megawatt-hours of electricity. A look at AI’s environmental costs, and how organizations can pursue AI progress responsibly.',
 '["Sustainability","AI Ethics"]',
 'https://www.linkedin.com/posts/pradipbanerjee1_sustainable-ai-balancing-progress-and-activity-7374559948145348608-wWzq'),

('Whitepaper',
 'AI in CRM: Navigating the Regulatory Landscape and Data Privacy Challenges',
 'As CRM platforms embed AI across the customer lifecycle, the regulatory, ethical and privacy stakes rise fast. A practical look at the EU AI Act, US FTC guidance and India’s DPDP Act, and how CRM teams should respond.',
 '["AI Governance","CRM","EU AI Act"]',
 'https://media.licdn.com/dms/document/media/v2/D561FAQFQR2P1DnAeKA/feedshare-document-url-metadata-scrapper-pdf/B56ZdRFjF_GsA0-/0/1749412101784?e=1786233600&v=beta&t=O-NdDofM2aQ2aFGUmw7aQvKwm_LIlCnwWaiQWY49aJs'),

('Whitepaper',
 'How Does Prompt Engineering Help in CRM Processes?',
 'A practical breakdown of where prompt engineering earns its keep inside CRM: customer service, personalization, lead qualification, analytics, training and marketing, each with a concrete example prompt.',
 '["Prompt Engineering","CRM"]',
 'https://media.licdn.com/dms/document/media/v2/D561FAQFreLX1txsVfA/feedshare-document-url-metadata-scrapper-pdf/B56ZQ7Teg8HQA4-/0/1736161750963?e=1786233600&v=beta&t=b5Y_CIAlBkFRmsShBPiRq4ElqZ_av3imNRjftiHv2Y0');

INSERT INTO case_studies (category, title, challenge, solution, outcome, tags) VALUES
('Sales Optimization',
 'Lead Scoring & Prioritization',
 'Sales teams were spending time on every lead and opportunity equally, with no data-driven way to know which ones were actually worth prioritizing — hurting both conversion rates and rep productivity.',
 'An automated scoring pipeline inside Salesforce: standard CRM fields (lead source, industry, company size, engagement recency, deal stage, forecast category and more) feed a predictive model — Einstein Discovery natively, or an external model via Apex callout — that scores every lead and opportunity from 0–100, engineering features like days since last activity and opportunity age along the way.',
 'Reps get a prioritized, dashboard-driven view with a filtered list of high-priority records (score > 70), turning a gut-feel triage process into a repeatable, data-driven one.',
 '["Salesforce","Einstein Discovery","Predictive Scoring","Apex"]'),

('Sales Optimization',
 'Opportunity Win Prediction',
 'Forecasting which deals would actually close was based on rep intuition and pipeline stage alone, with no systematic signal for where to focus effort to improve win rate.',
 'A binary classification model trained on three years of closed-won/closed-lost opportunity history using Salesforce''s native Einstein Prediction Builder — standard fields only, no custom data pipeline required. The model outputs an Opportunity Win Score (0–100) and surfaces the top predictive factors behind each score: engagement level, deal size, time-to-close and buying power.',
 'Sales leaders get an early, quantified signal on deal health, and reps get next-best-action guidance instead of a static probability field.',
 '["Salesforce","Einstein Prediction Builder","Machine Learning","Sales Forecasting"]'),

('Sales Optimization',
 'Dynamic Pricing Recommendations',
 'Reps had no consistent way to know how much discount they could offer on a quote line item without either leaving margin on the table or over-discounting to close a deal.',
 'A prediction service, callable in real time from the Quote Line Item, recommends a discount or target price using Einstein Discovery trained on historical closed deals — with custom guardrails (maximum discount per product family, minimum margin thresholds, competitor pricing rules) enforced alongside the model. Recommendations, confidence scores and reasoning surface directly in a Lightning Web Component, with reps able to override.',
 'Pricing guidance that protects margin while still giving reps room to close, with every recommendation explainable rather than a black box.',
 '["Salesforce","Einstein Discovery","Lightning Web Components","Pricing Strategy"]');
