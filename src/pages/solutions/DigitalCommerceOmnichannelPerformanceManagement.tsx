import React from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import CustomButton from "@/components/ui/CustomButton";
import { Layers, BarChart2, Zap, Users, Gauge } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const omniCapabilities = [
  { icon: Layers, title: "Cross-Channel Data Unification", desc: "Ingest and normalize data across website, app, marketplaces, POS, CRM, and ad platforms into a centralized performance layer." },
  { icon: BarChart2, title: "Custom Dashboards & KPI Tracking", desc: "Create dynamic views of business-critical metrics like ROAS, CAC, conversion rate, sell-through rate, and offline-to-online attribution." },
  { icon: Zap, title: "Campaign & Spend Optimization", desc: "Track campaign effectiveness across platforms and reallocate budgets for maximum ROI using real-time signals." },
  { icon: Users, title: "Customer Journey Analytics", desc: "Understand user behavior across digital and physical touchpoints to deliver a seamless omnichannel experience." },
  { icon: Gauge, title: "Operational Efficiency Insights", desc: "Monitor fulfillment, logistics, and service metrics across regions, stores, or partners to uncover cost and time optimizations." }
];
const omniUseCases = [
  "Multi-location retail + D2C performance tracking",
  "Online/offline channel attribution",
  "Regional product mix optimization",
  "Unified CAC + LTV reporting",
  "Store-level ops + service analytics",
  "Marketplace & brand.com spend benchmarking"
];

const DigitalCommerceOmnichannelPerformanceManagement: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Lexend'] mb-4">Omnichannel Performance Management</h1>
            <h2 className="text-2xl md:text-3xl text-[#1E40AF] font-semibold mb-6 font-['Lexend']">A 360° View of Performance Across Every Touchpoint</h2>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed">
              We unify performance data across web, mobile, social, offline, and retail channels — giving you the insights needed to optimize spend, drive engagement, and improve operational efficiency.
            </p>
            <CustomButton size="lg" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white border-none mb-4">
              Talk to Our Analytics Experts
            </CustomButton>
            <CustomButton size="lg" variant="secondary" className="border-[#2563EB] text-[#1E40AF] hover:bg-[#2563EB]/10">
              Explore Use Case Demos
            </CustomButton>
          </div>
        </section>
        <section className="px-8 py-16 max-md:px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {omniCapabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <div key={cap.title} className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#93C5FD] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-black" />
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
              {omniUseCases.map((uc, i) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-['Lexend']">Gain Full Visibility. Drive Omnichannel Growth.</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CustomButton size="lg" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white border-none">Talk to Our Analytics Experts</CustomButton>
              <CustomButton size="lg" variant="secondary" className="border-[#2563EB] text-[#1E40AF] hover:bg-[#2563EB]/10">Explore Use Case Demos</CustomButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DigitalCommerceOmnichannelPerformanceManagement; 