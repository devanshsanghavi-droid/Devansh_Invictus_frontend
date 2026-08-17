import { createClient } from '@sanity/client';

// Always use Sanity for blogs, in all environments.
// Prefer env vars but fall back to the known projectId/dataset for Invictus blog.
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID ?? '4x879wbh';
const dataset = import.meta.env.VITE_SANITY_DATASET ?? 'production';
const apiVersion = '2024-01-01';

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

