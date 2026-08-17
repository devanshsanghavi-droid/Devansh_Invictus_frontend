import React from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import CustomButton from "@/components/ui/CustomButton";
import { TrendingUp, UserCheck, Gauge, FlaskConical, MousePointerClick, Layers } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const funnelCapabilities = [
  { icon: TrendingUp, title: "Funnel Auditing & Drop-Off Analysis", desc: "Map the user journey from entry to conversion and identify weak spots in the funnel using behavioral data, heatmaps, and user flows." },
  { icon: UserCheck, title: "UX/UI Enhancements", desc: "Revise page layouts, CTAs, form elements, navigation, and product displays to improve visual hierarchy and usability." },
  { icon: Gauge, title: "Page Speed & Performance Optimization", desc: "Improve load times, Core Web Vitals, and responsiveness - especially for mobile users - using lazy loading, code splitting, and CDN tuning." },
  { icon: FlaskConical, title: "A/B & Multivariate Testing", desc: "Implement and run experiments to measure the impact of different variations on conversion rates, bounce rates, and cart completions." },
  { icon: MousePointerClick, title: "Checkout & Cart Optimization", desc: "Streamline cart interactions, simplify checkout flows, enable guest checkouts, and remove distractions that cause abandonment." },
  { icon: Layers, title: "Personalized Experiences", desc: "Serve tailored content, offers, and messages to different segments using intent-based triggers and audience targeting." }
];
const funnelUseCases = [
  "Reducing cart abandonment",
  "Optimizing landing page conversion",
  "Improving product page engagement",
  "Boosting mobile checkout rates",
  "Fixing funnel drop-offs in marketing campaigns",
  "Increasing lead form completions"
];

const DigitalCommerceConversionFunnelOptimization: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Lexend'] mb-4">Conversion Funnel Optimization</h1>
            <h2 className="text-2xl md:text-3xl text-[#1E40AF] font-semibold mb-6 font-['Lexend']">Turn Traffic into Revenue - Smoothly and Strategically</h2>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed">
              We help you map, analyze, and optimize every step of your customer journey - from first click to final purchase - using data-driven insights and proven UX strategies.
            </p>
            <CustomButton size="lg" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white border-none mb-4">
              Talk to Our Funnel Experts
            </CustomButton>
          </div>
        </section>
        <section className="px-8 py-16 max-md:px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {funnelCapabilities.map((cap, i) => {
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
              {funnelUseCases.map((uc, i) => (
                <div key={uc} className="flex flex-col items-center justify-center bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 shadow-xl p-8">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2" className="mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-slate-700 font-['DM_Sans'] text-lg text-center">{uc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DigitalCommerceConversionFunnelOptimization; 