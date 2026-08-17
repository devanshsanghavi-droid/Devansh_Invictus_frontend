/**
 * Create Author documents (Om Rathod, Nirjar) and assign existing posts to Om Rathod.
 * Run after deploying the author schema.
 *
 * Prerequisites: .env.local with VITE_SANITY_PROJECT_ID, VITE_SANITY_DATASET, SANITY_API_TOKEN
 * Run from project root: node scripts/seed-sanity-authors.js
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

const projectId = process.env.VITE_SANITY_PROJECT_ID;
const dataset = process.env.VITE_SANITY_DATASET || 'production';
const token = process.env.SANITY_API_TOKEN;

if (!projectId || projectId === 'your-project-id') {
  console.error('Missing or invalid VITE_SANITY_PROJECT_ID in .env.local');
  process.exit(1);
}
if (!token) {
  console.error('Missing SANITY_API_TOKEN in .env.local');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
});

const AUTHOR_OM_RATHOD = 'author-om-rathod';
const AUTHOR_NIRJAR = 'author-nirjar';

async function run() {
  console.log('Creating authors: Om Rathod, Nirjar...');

  await client.createOrReplace({
    _id: AUTHOR_OM_RATHOD,
    _type: 'author',
    name: 'Om Rathod',
    slug: { _type: 'slug', current: 'om-rathod' },
  });
  console.log('  ✓ Om Rathod');

  await client.createOrReplace({
    _id: AUTHOR_NIRJAR,
    _type: 'author',
    name: 'Nirjar',
    slug: { _type: 'slug', current: 'nirjar' },
  });
  console.log('  ✓ Nirjar');

  const postIds = await client.fetch(
    `*[_type == "post" && (!defined(author) || author == null || !defined(author._ref))]._id`
  );
  if (postIds.length === 0) {
    console.log('\nNo posts need author assignment.');
    return;
  }

  console.log(`\nAssigning author "Om Rathod" to ${postIds.length} post(s)...`);
  const tx = client.transaction();
  for (const id of postIds) {
    tx.patch(id, { set: { author: { _type: 'reference', _ref: AUTHOR_OM_RATHOD } } });
  }
  await tx.commit();
  console.log('Done.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
