import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Seo from "@/components/Seo";
import Navbar from "@/components/layout/Navbar";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import CustomButton from "@/components/ui/CustomButton";
import { fetchBlogs, BlogPost } from "@/services/blogService";

const BlogInsights: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const BLOGS_PER_PAGE = 12;
  const totalPages = Math.ceil(totalCount / BLOGS_PER_PAGE);

  // Categories for filtering
  const categories = ["All", "Analytics", "Product", "E-commerce", "Marketing", "Leadership", "AI"];

  // Array of 19 blog images to rotate through
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

  // Helper: get placeholder image by id (number or string, e.g. Sanity _id)
  const getRotatedImage = (id: number | string) => {
    const index = typeof id === 'number' ? id : Math.abs(String(id).split('').reduce((a, c) => ((a << 5) - a + c.charCodeAt(0)) | 0, 0));
    return BLOG_IMAGES[index % BLOG_IMAGES.length];
  };

  // Fetch blogs when component mounts or page changes
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        // Calculate offset based on current page
        const offset = (currentPage - 1) * BLOGS_PER_PAGE;

        // Fetch only the blogs for the current page
        const result = await fetchBlogs(BLOGS_PER_PAGE, offset);

        // Set the blogs and total count
        setBlogPosts(result.blogs);
        setTotalCount(result.total);

        setError(null);
      } catch (err) {
        setError("Failed to load blog posts. Please try again later.");
        console.error("Error loading blogs:", err);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, [currentPage]); // Re-fetch when page changes

  const handleBlogClick = (post: BlogPost) => {
    if (post.slug) {
      navigate(`/blog/${post.slug}`);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is less than max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-[#EFF6FF] flex flex-col">
      {/* SEO Meta Tags */}
      <Seo
        title="Blog & Insights | Invictus Data - AI, Data Engineering & Software Expertise"
        description="Expert perspectives from our engineers and data scientists on AI, data platforms, and software engineering. Real insights from building enterprise solutions at scale."
        canonical="/blog-insights"
        type="website"
      />
      <div className="relative z-20">
        <Navbar
          showContactForm={showContactForm}
          setShowContactForm={setShowContactForm}
          logoSize="sm"
        />
      </div>
      <AnimatedBackground />
      <div className="max-w-[1600px] mx-auto px-6 py-24 pt-32 relative z-10 flex-1">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center font-['Lexend']">
          Blog & Insights
        </h1>
        <p className="text-xl text-slate-900 mb-12 text-center font-['DM_Sans']">
          What We’re Thinking. What We’re Solving.
          <br />
          Get expert perspectives from our engineers, architects, and data
          scientists on what’s shaping the future of AI, data platforms, and
          software engineering.
          <br />
          We write about what we build, what we learn, and what actually works
          at scale.
        </p>
        {/* Two Column Layout: Categories Sidebar + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 xl:gap-12">
          {/* Left Sidebar - Categories */}
          <div className="lg:sticky lg:top-24 lg:self-start h-fit">
            <div className="bg-white backdrop-blur-xl rounded-2xl border border-[#2563EB]/30 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 font-['Lexend']">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setCurrentPage(1);
                    }}
                    className={`w-full text-left px-4 py-2.5 rounded-lg font-['DM_Sans'] transition-all ${selectedCategory === category
                      ? "bg-[#2563EB] text-white font-semibold shadow-lg"
                      : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Search + Blogs */}
          <div>
            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-lg bg-white backdrop-blur-xl border border-[#2563EB]/30 text-slate-900 placeholder-white/50 focus:outline-none focus:border-[#2563EB] transition-all font-['DM_Sans']"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-4 top-3.5 h-5 w-5 text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Loading State */}
            {loading && (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-slate-200"></div>
                <p className="text-slate-900 mt-4 font-['DM_Sans']">Loading blog posts...</p>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-6 text-center">
                <p className="text-slate-900 font-['DM_Sans']">{error}</p>
              </div>
            )}

            {/* Blog Posts */}
            {!loading && !error && (() => {
              // Filter blogs by category and search
              const filteredBlogs = blogPosts.filter(blog => {
                const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
                const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase());
                return matchesCategory && matchesSearch;
              });

              return (
                <>
                  {filteredBlogs.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-slate-600 font-['DM_Sans'] text-lg">
                        No blogs found {searchQuery && `for "${searchQuery}"`} {selectedCategory !== "All" && `in ${selectedCategory}`}
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredBlogs.map((post) => {
                          const blogImage = getRotatedImage(post.id);

                          return (
                            <div
                              key={String(post.id)}
                              className="flex flex-col bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 shadow-xl overflow-hidden cursor-pointer hover:bg-slate-100 transition-all duration-300 hover:scale-105 group"
                              onClick={() => handleBlogClick(post)}
                            >
                              {/* Image Section: always use rotating BlogSample placeholder images */}
                              <div className="w-full h-48 bg-[#2563EB]/10 flex items-center justify-center overflow-hidden">
                                <img
                                  src={blogImage}
                                  alt={post.title}
                                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                                />
                              </div>
                              {/* Text Section */}
                              <div className="flex-1 p-6 flex flex-col">
                                <h2 className="text-xl font-bold text-slate-900 mb-3 font-['Lexend'] line-clamp-2">
                                  {post.title}
                                </h2>
                                <div className="mb-2 text-sm text-slate-600 font-['DM_Sans']">
                                  <span className="font-semibold text-[#2563EB]">
                                    Author:
                                  </span>{" "}
                                  {post.author}
                                </div>
                                {post.published_at && (
                                  <div className="text-sm text-slate-600 font-['DM_Sans']">
                                    <span className="font-semibold text-[#2563EB]">
                                      Published:
                                    </span>{" "}
                                    {new Date(post.published_at).toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "long",
                                      day: "numeric",
                                    })}
                                  </div>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Pagination Controls */}
                      {totalPages > 1 && (
                        <div className="mt-12 flex justify-center items-center gap-2">
                          {/* Previous Button */}
                          <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded-lg font-['DM_Sans'] font-semibold transition-all ${currentPage === 1
                              ? "bg-slate-100 text-slate-300 cursor-not-allowed"
                              : "bg-white text-slate-600 border border-slate-200 hover:bg-[#2563EB] hover:text-white hover:scale-105"
                              }`}
                            aria-label="Previous page"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                          </button>

                          {/* Page Numbers */}
                          {getPageNumbers().map((page, idx) => {
                            if (page === "...") {
                              return (
                                <span
                                  key={`ellipsis-${idx}`}
                                  className="px-4 py-2 text-slate-500 font-['DM_Sans']"
                                >
                                  ...
                                </span>
                              );
                            }

                            return (
                              <button
                                key={page}
                                onClick={() => handlePageChange(page as number)}
                                className={`px-4 py-2 rounded-lg font-['DM_Sans'] font-semibold transition-all ${currentPage === page
                                  ? "bg-[#2563EB] text-white scale-110"
                                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:scale-105"
                                  }`}
                              >
                                {page}
                              </button>
                            );
                          })}

                          {/* Next Button */}
                          <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded-lg font-['DM_Sans'] font-semibold transition-all ${currentPage === totalPages
                              ? "bg-slate-100 text-slate-300 cursor-not-allowed"
                              : "bg-white text-slate-600 border border-slate-200 hover:bg-[#2563EB] hover:text-white hover:scale-105"
                              }`}
                            aria-label="Next page"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogInsights;
