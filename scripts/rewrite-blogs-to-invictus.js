/**
 * Rewrite all Sanity blog posts from Trivas/trivia theme to Invictus Data theme.
 * Strategy A: full content rewrite — replaces branding and reframes for data/AI/enterprise.
 *
 * Prerequisites:
 *   .env.local with VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET, SANITY_API_TOKEN
 *
 * Run from project root: node scripts/rewrite-blogs-to-invictus.js
 *
 * First 10 posts were already hand-rewritten via MCP; this script processes all posts
 * (idempotent — safe to run again; already-Invictus content is lightly normalized).
 */

import { createClient } from '@sanity/client';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

function loadEnvLocal() {
  const path = resolve(root, '.env.local');
  if (!existsSync(path)) return;
  const content = readFileSync(path, 'utf8');
  content.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const eq = trimmed.indexOf('=');
      if (eq > 0) {
        const key = trimmed.slice(0, eq).trim();
        const value = trimmed.slice(eq + 1).trim();
        if (key && value !== undefined) process.env[key] = value;
      }
    }
  });
}

loadEnvLocal();

// Match frontend fallback (src/lib/sanity.ts) when .env.local is missing
const projectId = process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || '4x879wbh';
const dataset = process.env.VITE_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;

if (projectId === 'your-project-id') {
  console.error('Set VITE_SANITY_PROJECT_ID or SANITY_STUDIO_PROJECT_ID in .env.local (or env) to your Sanity project ID.');
  process.exit(1);
}
if (!token) {
  console.error('Missing SANITY_API_TOKEN. Add it to .env.local or set it in the environment.');
  console.error('Create a token at https://sanity.io/manage → API → Tokens (Editor access).');
  process.exit(1);
}

const sanity = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
});

const GROQ_ALL_POST_IDS = `*[_type == "post"]._id`;

// First 10 posts were fully hand-rewritten via MCP; skip them so we don't overwrite.
const SKIP_IDS = new Set([
  'post-best-triple-whale-alternatives',
  'post-switching-from-triple-whale',
  'post-triple-whale-alternative-complete-guide',
  'post-triple-whale-alternatives',
  'post-best-triple-whale-alternatives-for-shopify-sellers-2026',
  'post-google-analytics-4-vs-trivas-ecommerce-analytics-2026',
  'post-how-to-reduce-cac-ecommerce-2026',
  'post-what-is-marketing-efficiency-ratio-mer',
  'post-what-is-mer',
  'post-implementation-strategies-for-ai-ecommerce-insights',
]);

const GROQ_POST_FIELDS = `{ _id, title, summary, content_html }`;

function rewriteTitle(title) {
  if (!title || typeof title !== 'string') return title;
  let t = title
    .replace(/\bTriple Whale\b/gi, 'Data & Analytics')
    .replace(/\bTrivas\.ai\b/gi, 'Invictus Data')
    .replace(/\bTrivas\b/gi, 'Invictus Data')
    .replace(/\bTrilio\b/gi, 'Invictus Data')
    .replace(/\becommerce\b/gi, 'enterprise')
    .replace(/\bEcommerce\b/g, 'Enterprise')
    .replace(/\bE-commerce\b/g, 'Enterprise')
    .replace(/\bDTC\b/g, 'data-driven')
    .replace(/\bShopify\s+(sellers?|brands?|stores?)\b/gi, 'modern businesses')
    .replace(/\bfor Ecommerce\b/gi, 'for Enterprises')
    .replace(/\bfor ecommerce\b/gi, 'for enterprises');
  return t.trim();
}

function rewriteSummary(summary) {
  if (!summary || typeof summary !== 'string') return summary;
  return summary
    .replace(/\bTrivas\.ai\b/gi, 'Invictus Data')
    .replace(/\bTrivas\b/gi, 'Invictus Data')
    .replace(/\bTriple Whale\b/gi, 'analytics platforms')
    .replace(/\bTrilio\b/gi, 'Invictus Data')
    .replace(/\becommerce\b/gi, 'enterprise')
    .replace(/\bDTC\b/g, 'data-driven');
}

function rewriteContentHtml(html) {
  if (!html || typeof html !== 'string') return html;
  return html
    .replace(/\bTrivas\.ai\b/gi, 'Invictus Data')
    .replace(/\bTrivas\b/gi, 'Invictus Data')
    .replace(/\bTriple Whale\b/gi, 'data and analytics platform')
    .replace(/\bTrilio\b/gi, 'Invictus Data')
    .replace(/\becommerce\b/gi, 'enterprise')
    .replace(/\bEcommerce\b/g, 'Enterprise')
    .replace(/\bE-commerce\b/g, 'Enterprise')
    .replace(/\bDTC\b/g, 'data-driven')
    .replace(/\bShopify\s+(sellers?|brands?|stores?|first|native)\b/gi, 'modern businesses')
    .replace(/\bShopify\b/gi, 'core platforms')
    .replace(/\btrivas\.ai\b/gi, 'invictusdata.com')
    .replace(/\bVisit trivas\.ai\b/gi, 'Visit invictusdata.com')
    .replace(/\bTry Trivas\.ai\b/gi, 'Partner with Invictus Data')
    .replace(/\bTry Trivas\b/gi, 'Partner with Invictus Data')
    .replace(/founder(s)?/gi, (_, s) => (s ? 'leaders' : 'leader'))
    .replace(/\bFounder(s)?\b/g, 'Leaders')
    .replace(/\bfounders\b/gi, 'leaders')
    .replace(/\bEcommerce brands\b/gi, 'Enterprises')
    .replace(/\becommerce brands\b/gi, 'enterprises')
    .replace(/\bmulti-channel\b/gi, 'multi-source')
    .replace(/\bmultichannel\b/gi, 'multi-source');
}

async function main() {
  console.log('Fetching all post IDs...');
  const ids = await sanity.fetch(GROQ_ALL_POST_IDS);
  const total = ids.length;
  console.log(`Found ${total} posts.`);

  let updated = 0;
  let skipped = 0;
  let errors = 0;

  for (let i = 0; i < ids.length; i++) {
    const _id = ids[i];
    if (!_id || _id.startsWith('drafts.') || SKIP_IDS.has(_id)) {
      skipped++;
      continue;
    }

    try {
      const docs = await sanity.fetch(
        `*[_type == "post" && _id == $id][0] ${GROQ_POST_FIELDS}`,
        { id: _id }
      );
      if (!docs) {
        skipped++;
        continue;
      }

      const title = rewriteTitle(docs.title);
      const summary = rewriteSummary(docs.summary);
      const content_html = rewriteContentHtml(docs.content_html);

      const titleChanged = title !== docs.title;
      const summaryChanged = summary !== (docs.summary || '');
      const contentChanged = content_html !== (docs.content_html || '');

      if (!titleChanged && !summaryChanged && !contentChanged) {
        skipped++;
        if ((i + 1) % 50 === 0) console.log(`  [${i + 1}/${total}] skipped (no changes)`);
        continue;
      }

      await sanity
        .patch(_id)
        .set({
          ...(titleChanged && { title }),
          ...(summaryChanged && { summary: summary || '' }),
          ...(contentChanged && { content_html }),
        })
        .commit();

      updated++;
      if (updated <= 20 || (updated % 50 === 0)) {
        console.log(`  [${i + 1}/${total}] updated: ${title?.slice(0, 50)}...`);
      }
    } catch (err) {
      errors++;
      console.error(`  ERROR ${_id}:`, err.message);
    }
  }

  console.log('\nDone.');
  console.log(`  Updated: ${updated}`);
  console.log(`  Skipped: ${skipped}`);
  if (errors) console.log(`  Errors: ${errors}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
