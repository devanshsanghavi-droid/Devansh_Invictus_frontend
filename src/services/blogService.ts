// Blog Service
// Using hardcoded data for blog posts.

export interface BlogPost {
  id: number | string;
  slug: string;
  title: string;
  author: string;
  category: string;
  summary: string;
  featured_image_url: string;
  published_at: string;
  status: string;
}

const HARDCODED_BLOGS: BlogPost[] = [
  {
    id: 1,
    slug: "case-study-how-data-analytics-is-revolutionizing-food-distribution",
    title: "Case Study: How Data Analytics Is Revolutionizing Food Distribution",
    author: "Nirjar Sanghavi, CEO",
    category: "Analytics",
    summary: "In the complex and fast-paced world of food distribution, companies face enormous pressure to deliver fresh, safe, and high-quality products on time while managing rising costs, fluctuating demand, and increasingly strict sustainability standards.",
    featured_image_url: "https://assets.channeliq.ai/invictus-landing/Solutions/CaseStudy.png",
    published_at: "2025-01-20T00:00:00Z",
    status: "published"
  },
  {
    id: 2,
    slug: "spark-optimization-gcp-dataproc",
    title: "Spark Optimization on GCP Dataproc",
    author: "Nirjar Sanghavi, CEO",
    category: "AI",
    summary: "Optimizing Apache Spark on Google Cloud Platform's Dataproc can lead to significant cost savings and performance improvements. This guide explores best practices for cluster configuration and job tuning.",
    featured_image_url: "https://assets.channeliq.ai/invictus-landing/Solutions/SparkOptimization.png",
    published_at: "2025-01-21T00:00:00Z",
    status: "published"
  }
];

/**
 * Fetches blog posts from hardcoded data.
 */
export const fetchBlogs = async (
  limit: number = 12,
  offset: number = 0
): Promise<{ blogs: BlogPost[]; total: number }> => {
  const startIndex = offset;
  const endIndex = offset + limit;
  const blogs = HARDCODED_BLOGS.slice(startIndex, endIndex);
  
  return {
    blogs: blogs,
    total: HARDCODED_BLOGS.length,
  };
};

/**
 * Fetches a single blog post by slug from hardcoded data.
 */
export const fetchBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
  const post = HARDCODED_BLOGS.find(b => b.slug === slug);
  return post || null;
};

/** Slug + title for each published post. */
export interface BlogSlugItem {
  id: number | string;
  title: string;
  slug: string;
}

/**
 * Fetches all blog slugs from hardcoded data.
 */
export const fetchAllBlogSlugs = async (): Promise<BlogSlugItem[]> => {
  return HARDCODED_BLOGS.map(b => ({
    id: b.id,
    title: b.title,
    slug: b.slug
  }));
};

