/**
 * Migrate all published blogs from the legacy API to Sanity.
 *
 * Prerequisites:
 * 1. Sanity schema deployed (cd sanity && npx sanity schema deploy)
 * 2. Env in project root .env.local:
 *    - VITE_SANITY_PROJECT_ID
 *    - VITE_SANITY_DATASET
 *    - SANITY_API_TOKEN (create at sanity.io/manage → API → Tokens, Editor access)
 *    - VITE_API_BASE_URL (optional; default https://staging.trilio.ai/api/auth/v1)
 *
 * Run from project root: node scripts/migrate-blogs-to-sanity.js
 */

import { createClient } from '@sanity/client';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

// Load .env.local into process.env
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

const projectId = process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;
const apiBase = process.env.VITE_API_BASE_URL || 'https://staging.trilio.ai/api/auth/v1';

if (!projectId || projectId === 'your-project-id') {
  console.error('Missing or invalid VITE_SANITY_PROJECT_ID in .env.local');
  process.exit(1);
}
if (!token) {
  console.error('Missing SANITY_API_TOKEN in .env.local. Create a token at https://sanity.io/manage → API → Tokens (Editor).');
  process.exit(1);
}

const sanity = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
});

const LIMIT = 100;

async function fetchAllApiBlogs() {
  const blogs = [];
  let offset = 0;
  let hasMore = true;
  while (hasMore) {
    const url = `${apiBase}/blogs?limit=${LIMIT}&offset=${offset}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`API ${res.status}: ${url}`);
    const data = await res.json();
    if (data.status_code !== 'ELE_OK') throw new Error(data.message || 'API error');
    const chunk = (data.data?.blogs || []).filter((b) => b.status === 'published');
    blogs.push(...chunk);
    hasMore = chunk.length === LIMIT;
    offset += LIMIT;
  }
  return blogs;
}

function slugToId(slug) {
  return `post-${String(slug).replace(/^drafts\./, '').replace(/\s+/g, '-').slice(0, 150)}`;
}

async function migrate() {
  console.log('Fetching blogs from API...');
  const blogs = await fetchAllApiBlogs();
  console.log(`Found ${blogs.length} published blogs.`);

  if (blogs.length === 0) {
    console.log('Nothing to migrate.');
    return;
  }

  let created = 0;
  let skipped = 0;
  let errors = 0;

  for (const blog of blogs) {
    const slug = blog.slug?.trim();
    if (!slug) {
      console.warn(`Skipping blog id=${blog.id} (no slug).`);
      skipped++;
      continue;
    }

    const _id = slugToId(slug);
    const doc = {
      _type: 'post',
      _id,
      title: blog.title || 'Untitled',
      slug: { _type: 'slug', current: slug },
      author: blog.author || 'Invictus',
      category: blog.category || '',
      summary: blog.summary || '',
      publishedAt: blog.published_at || new Date().toISOString(),
      status: 'published',
      content_html: blog.content_html || undefined,
      featured_image_url: blog.featured_image_url || undefined,
    };

    try {
      await sanity.createOrReplace(doc);
      created++;
      console.log(`  [${created}/${blogs.length}] ${slug}`);
    } catch (err) {
      errors++;
      console.error(`  ERROR ${slug}:`, err.message);
    }
  }

  console.log('\nDone.');
  console.log(`  Created/updated: ${created}`);
  if (skipped) console.log(`  Skipped: ${skipped}`);
  if (errors) console.log(`  Errors: ${errors}`);
}

migrate().catch((err) => {
  console.error(err);
  process.exit(1);
});
