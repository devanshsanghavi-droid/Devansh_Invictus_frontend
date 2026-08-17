import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import Seo from "@/components/Seo";
import Navbar from "@/components/layout/Navbar";
import CustomButton from "@/components/ui/CustomButton";
import { sanityImageUrl } from "@/lib/sanity.image";
import { BlogPost, fetchBlogBySlug } from "@/services/blogService";
import "./BlogDetail.css";

const portableTextComponents = {
    types: {
        image: ({ value }: { value?: { asset?: { _id?: string; url?: string }; _id?: string; alt?: string; caption?: string } }) => {
            const url = value?.asset?.url ?? (value ? sanityImageUrl(value) : "");
            if (!url) return null;
            return (
                <figure className="my-6">
                    <img
                        src={url}
                        alt={value?.alt ?? ""}
                        className="rounded-lg max-w-full h-auto w-full"
                    />
                    {value?.caption ? (
                        <figcaption className="mt-2 text-sm text-gray-500 text-center font-['DM_Sans']">{value.caption}</figcaption>
                    ) : null}
                </figure>
            );
        },
    },
    block: {
        h2: ({ children }) => <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4 font-['Lexend']">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3 font-['Lexend']">{children}</h3>,
        h4: ({ children }) => <h4 className="text-lg font-bold text-gray-900 mt-4 mb-2 font-['Lexend']">{children}</h4>,
        blockquote: ({ children }) => <blockquote className="border-l-4 border-[#2563EB] pl-4 my-4 italic text-gray-700 font-['DM_Sans']">{children}</blockquote>,
        normal: ({ children }) => <p className="text-gray-700 mb-4 font-['DM_Sans'] leading-relaxed">{children}</p>,
    },
    list: {
        bullet: ({ children }) => <ul className="list-disc pl-6 my-4 space-y-1 font-['DM_Sans'] text-gray-700">{children}</ul>,
        number: ({ children }) => <ol className="list-decimal pl-6 my-4 space-y-1 font-['DM_Sans'] text-gray-700">{children}</ol>,
    },
    listItem: {
        bullet: ({ children }) => <li className="mb-1">{children}</li>,
        number: ({ children }) => <li className="mb-1">{children}</li>,
    },
    marks: {
        strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
        em: ({ children }) => <em className="italic">{children}</em>,
        code: ({ children }) => <code className="px-1.5 py-0.5 rounded bg-gray-100 text-gray-800 font-mono text-sm">{children}</code>,
        link: ({ children, value }) => (
            <a href={value?.href} target="_blank" rel="noopener noreferrer" className="text-[#2563EB] underline hover:no-underline">
                {children}
            </a>
        ),
    },
};

const BlogDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [showContactForm, setShowContactForm] = useState(false);
    const [blog, setBlog] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Array of 19 blog images to rotate through (same as BlogInsights)
    const BLOG_IMAGES = [
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample1.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample2.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample3.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample4.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample5.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample6.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample7.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample8.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample9.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample10.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample11.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample12.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample13.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample14.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample15.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample16.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample17.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample18.jpg',
        'https://assets.channeliq.ai/trilio-landing/Blogs/BlogSample19.jpg',
    ];

    // Helper: placeholder image by id (number or string, e.g. Sanity _id)
    const getRotatedImage = (id: number | string) => {
        const index = typeof id === "number" ? id : Math.abs(String(id).split("").reduce((a, c) => ((a << 5) - a + c.charCodeAt(0)) | 0, 0));
        return BLOG_IMAGES[index % BLOG_IMAGES.length];
    };

    const heroImage = blog ? getRotatedImage(blog.id) : "";

    useEffect(() => {
        const loadBlog = async () => {
            if (!slug) {
                setError("No blog slug provided");
                setLoading(false);
                return;
            }
            try {
                setLoading(true);
                const post = await fetchBlogBySlug(slug);
                setBlog(post ?? null);
                setError(post ? null : "Blog not found");
            } catch (err) {
                console.error("Error fetching blog:", err);
                setError("Failed to load blog post. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        loadBlog();
    }, [slug]);

    if (loading) {
        return (
            <div className="relative min-h-screen bg-white flex flex-col">
                <div className="relative z-20">
                    <Navbar
                        showContactForm={showContactForm}
                        setShowContactForm={setShowContactForm}
                        logoSize="sm"
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                        <p className="text-gray-900 mt-4 font-['DM_Sans']">
                            Loading blog post...
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="relative min-h-screen bg-white flex flex-col">
                <div className="relative z-20">
                    <Navbar
                        showContactForm={showContactForm}
                        setShowContactForm={setShowContactForm}
                        logoSize="sm"
                    />
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center max-w-md mx-auto px-4">
                        <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-6">
                            <p className="text-gray-900 font-['DM_Sans'] mb-4">
                                {error || "Blog not found"}
                            </p>
                            <CustomButton
                                onClick={() => navigate("/blog-insights")}
                                variant="primary"
                            >
                                Back to Blog Insights
                            </CustomButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen bg-white flex flex-col">
            {/* SEO Meta Tags */}
            {blog && (
                <Seo
                    title={`${blog.title} | Invictus Data Blog`}
                    description={blog.summary ? blog.summary.substring(0, 160) : blog.title}
                    canonical={`/blog/${blog.slug}`}
                    image={heroImage}
                    type="article"
                />
            )}

            <div className="relative z-20 bg-[#1a1a1a]">
                <Navbar
                    showContactForm={showContactForm}
                    setShowContactForm={setShowContactForm}
                    logoSize="sm"
                />
            </div>

            {/* Hero Section with Background Image */}
            <div className="relative w-full h-screen min-h-[600px] overflow-hidden">
                {/* Background Image */}
                {blog && (
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${heroImage})`,
                        }}
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/70"></div>
                    </div>
                )}

                {/* Hero Content */}
                <div className="relative z-10 h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
                    {/* Blog Title */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-['Lexend'] leading-tight">
                        {blog?.title}
                    </h1>

                    {/* Metadata */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-800 font-['DM_Sans']">
                        <div className="flex items-center gap-2">
                            {blog?.author_image_url ? (
                                <img
                                    src={blog.author_image_url}
                                    alt={blog.author}
                                    className="w-8 h-8 rounded-full object-cover border border-slate-200"
                                />
                            ) : null}
                            <span className="text-sm sm:text-base">by</span>
                            <span className="font-semibold text-slate-900 text-sm sm:text-base">{blog?.author}</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-slate-600"
                            >
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <span className="text-sm sm:text-base">{blog?.read_time_minutes ? `${blog.read_time_minutes} min read` : '5 min read'}</span>
                        </div>

                        {blog?.published_at && (
                            <div className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-slate-600"
                                >
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                <span className="text-sm sm:text-base">
                                    {new Date(blog.published_at).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Blog Summary */}
                {blog?.summary && (
                    <div className="mb-12 border-b border-gray-200 pb-12">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-1 h-8 bg-gradient-to-b from-indigo-600 to-blue-600 rounded-full"></div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-['Inter']">
                                Summary
                            </h2>
                        </div>
                        <p className="text-gray-700 text-lg md:text-xl font-['Inter'] leading-relaxed">
                            {blog.summary}
                        </p>
                    </div>
                )}

                {/* Blog Content: Sanity Portable Text or legacy HTML (guide: body first, else contentHtml, else message) */}
                {blog?.content_blocks && blog.content_blocks.length > 0 ? (
                    <div className="article-body ecommerce-article prose prose-lg max-w-none">
                        <PortableText value={blog.content_blocks as PortableTextBlock[]} components={portableTextComponents} />
                    </div>
                ) : blog?.content_html ? (
                    <div
                        className="article-body ecommerce-article"
                        dangerouslySetInnerHTML={{ __html: blog.content_html }}
                    />
                ) : (
                    <p className="text-gray-500 font-['DM_Sans']">No content available for this post.</p>
                )}
            </div>
        </div>
    );
};

export default BlogDetail;
