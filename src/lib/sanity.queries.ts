/**
 * GROQ queries for Invictus blog posts (Sanity).
 * Only published posts with a slug are returned.
 */

/** List view: compact author (name, role, image) */
const postListFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  author->{ _id, name, role, image { asset->{ _id, url }, alt } },
  category,
  summary,
  readTime,
  mainImage {
    asset->{ _id, url },
    alt
  },
  publishedAt,
  status,
  content_html,
  featured_image_url
`;

/** Single post: full author + body for Portable Text / contentHtml */
const postDetailFields = /* groq */ `
  _id,
  title,
  "slug": slug.current,
  author->{
    _id,
    name,
    role,
    bio,
    linkedIn,
    image { asset->{ _id, url }, alt }
  },
  category,
  summary,
  readTime,
  mainImage {
    asset->{ _id, url },
    alt
  },
  publishedAt,
  status,
  body[] {
    ...,
    _type == "image" => {
      ...,
      asset->{ _id, url }
    }
  },
  content_html,
  featured_image_url
`;

/** List posts with pagination; ordered by publishedAt desc. Params: offset, end (= offset + limit) */
export const postsListQuery = /* groq */ `
  *[_type == "post" && status == "published" && defined(slug.current)]
  | order(publishedAt desc)
  [$offset...$end]
  {
    ${postListFields}
  }
`;

/** Total count of published posts (for pagination) */
export const postsCountQuery = /* groq */ `
  count(*[_type == "post" && status == "published" && defined(slug.current)])
`;

/** Single post by slug (full author + body for detail page) */
export const postBySlugQuery = /* groq */ `
  *[_type == "post" && status == "published" && slug.current == $slug][0]
  {
    ${postDetailFields}
  }
`;

/** All post slugs (for prev/next nav or sitemap). Params: none. */
export const allBlogSlugsQuery = /* groq */ `
  *[_type == "post" && status == "published" && defined(slug.current)]
  | order(publishedAt desc)
  { _id, title, "slug": slug.current }
`;

/** Posts by category. Params: category (string). Same shape as list. */
export const postsByCategoryQuery = /* groq */ `
  *[_type == "post" && status == "published" && defined(slug.current) && category == $category]
  | order(publishedAt desc)
  {
    ${postListFields}
  }
`;
