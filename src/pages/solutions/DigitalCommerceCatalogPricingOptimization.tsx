import React from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import CustomButton from "@/components/ui/CustomButton";
import { Search, Zap, BarChart2, MessageCircle, Layers } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const catalogCapabilities = [
  { icon: Search, title: "Product Catalog Audits", desc: "Identify underperforming SKUs, incomplete listings, and duplicate content across platforms." },
  { icon: Zap, title: "Dynamic Pricing Models", desc: "Deploy rule-based or algorithmic pricing strategies based on competitor pricing, inventory levels, and margin targets." },
  { icon: BarChart2, title: "Assortment Intelligence", desc: "Analyze product performance across regions, categories, and seasons to identify winners, laggards, and gaps." },
  { icon: MessageCircle, title: "SEO & Metadata Optimization", desc: "Enhance visibility on marketplaces and search engines with optimized titles, tags, descriptions, and attributes." },
  { icon: Layers, title: "Variant & Bundle Strategy", desc: "Structure product listings with variants, bundles, and cross-sells to increase AOV and basket size." }
];
const catalogUseCases = [
  "Real-time competitor price tracking + response",
  "Smart bundling strategies for bestsellers",
  "Region-specific pricing and availability",
  "SKU-level margin optimization",
  "Enhanced discoverability on marketplaces",
  "Catalog cleanup and data hygiene at scale"
];

const DigitalCommerceCatalogPricingOptimization: React.FC = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="relative z-20">
        <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} logoSize="sm" />
      </div>
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        <section className="px-8 py-20 max-md:px-5 max-md:py-12 bg-[#1a1a1a]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Lexend'] mb-4">Catalog & Pricing Optimization</h1>
            <h2 className="text-2xl md:text-3xl text-[#1E40AF] font-semibold mb-6 font-['Lexend']">Maximize Visibility, Conversion, and Margin - Automatically</h2>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed">
              We use data-driven strategies to optimize your product catalog and pricing - ensuring you're always competitive, discoverable, and profitable in dynamic markets.
            </p>
            <CustomButton size="lg" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white border-none mb-4">
              Book a Catalog & Pricing Review
            </CustomButton>
            <CustomButton size="lg" variant="secondary" className="border-[#2563EB] text-[#1E40AF] hover:bg-[#2563EB]/10">
              Explore Success Stories
            </CustomButton>
          </div>
        </section>
        <section className="px-8 py-16 max-md:px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {catalogCapabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <div key={cap.title} className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#93C5FD] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 font-['Lexend']">{cap.title}</h3>
                    <p className="text-slate-600 text-sm font-['DM_Sans']">{cap.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="px-8 py-16 max-md:px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {catalogUseCases.map((uc, i) => (
                <div key={uc} className="flex flex-col items-center justify-center bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 shadow-xl p-8">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2" className="mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-slate-700 font-['DM_Sans'] text-lg text-center">{uc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="px-8 py-16 max-md:px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-['Lexend']">Optimize What You Sell, How You Sell, and For How Much.</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CustomButton size="lg" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white border-none">Book a Catalog & Pricing Review</CustomButton>
              <CustomButton size="lg" variant="secondary" className="border-[#2563EB] text-[#1E40AF] hover:bg-[#2563EB]/10">Explore Success Stories</CustomButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DigitalCommerceCatalogPricingOptimization; 
