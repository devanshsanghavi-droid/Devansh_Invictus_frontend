import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Seo from "@/components/Seo";
import { whitepapers } from "@/data/whitepapers";

const Whitepapers: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  // Extract unique categories from whitepapers
  const categories = ["All", ...Array.from(new Set(whitepapers.map(wp => wp.category)))];

  // Filter whitepapers by category and search
  const filteredWhitepapers = whitepapers.filter(wp => {
    const matchesCategory = selectedCategory === "All" || wp.category === selectedCategory;
    const matchesSearch = wp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      wp.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-[#EFF6FF] flex flex-col">
      {/* SEO Meta Tags */}
      <Seo
        title="Whitepapers | Invictus Data"
        description="Download whitepapers and technical resources on AI, machine learning, data engineering, and digital transformation."
        keywords="whitepapers, technical papers, AI research, data engineering guides, technology resources, downloads"
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
          Whitepapers
        </h1>
        <p className="text-xl text-slate-900 mb-12 text-center font-['DM_Sans']">
          Deep Dives into What We Build and Why
          <br />
          Explore our curated whitepapers on the frameworks, strategies, and systems that power modern enterprise data and AI.
          <br />
          Written by our experts — for architects, engineers, and leaders who want to scale responsibly and intelligently.
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
                    onClick={() => setSelectedCategory(category)}
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

          {/* Right Content - Search + Whitepapers */}
          <div>
            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search whitepapers..."
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

            {/* Whitepapers Grid */}
            {filteredWhitepapers.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-slate-600 font-['DM_Sans'] text-lg">
                  No whitepapers found {searchQuery && `for "${searchQuery}"`} {selectedCategory !== "All" && `in ${selectedCategory}`}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredWhitepapers.map((wp) => (
                  <div
                    key={wp.id}
                    onClick={() => navigate(`/whitepapers/${wp.slug}`)}
                    className="flex flex-col bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 shadow-xl overflow-hidden hover:bg-slate-100 transition-all duration-300 hover:scale-105 group cursor-pointer"
                  >
                    {/* Image Section */}
                    <div className="w-full h-48 bg-[#2563EB]/10 flex items-center justify-center overflow-hidden">
                      <img
                        src={wp.image}
                        alt={wp.title}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Text Section */}
                    <div className="flex-1 p-6 flex flex-col">
                      <h2 className="text-xl font-bold text-slate-900 mb-3 font-['Lexend'] line-clamp-2">
                        {wp.title}
                      </h2>

                      <p className="text-sm text-slate-600 font-['DM_Sans'] mb-4 line-clamp-3">
                        {wp.overview}
                      </p>

                      <div className="mb-3">
                        <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-wide">
                          {wp.category}
                        </span>
                      </div>

                      <div className="text-sm text-slate-600 font-['DM_Sans']">
                        <span className="font-semibold text-[#2563EB]">For:</span> {wp.audience}
                      </div>

                      {/* View Details Button (Visual Cue) */}
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <span className="text-[#2563EB] text-sm font-semibold flex items-center group-hover:translate-x-1 transition-transform">
                          Read Whitepaper
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepapers;