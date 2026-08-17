import React, { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import CustomButton from "@/components/ui/CustomButton";
import { Sparkles, Search, Map, TrendingUp, Lightbulb, BarChart2, CheckCircle, Users, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

const capabilities = [
  {
    icon: Search,
    title: "AI Opportunity Assessment",
    description: "Identify high-impact use cases and evaluate AI readiness across your business."
  },
  {
    icon: Map,
    title: "Strategic Roadmapping",
    description: "Define a clear, actionable AI roadmap aligned with business goals and resources."
  },
  {
    icon: TrendingUp,
    title: "Value & Feasibility Analysis",
    description: "Prioritize initiatives based on ROI, technical feasibility, and market fit."
  },
  {
    icon: Lightbulb,
    title: "AI Ideation & Prototyping",
    description: "Rapidly validate concepts with PoCs, pilots, and user feedback."
  },
  {
    icon: BarChart2,
    title: "Change Management & Enablement",
    description: "Prepare teams for AI adoption with training, governance, and best practices."
  }
];

const useCases = [
  {
    title: "AI Readiness Assessment",
    description: "Evaluate data, tech, and culture to set a strong foundation for AI."
  },
  {
    title: "AI Roadmap for Digital Transformation",
    description: "Chart a step-by-step plan for AI adoption and scaling."
  },
  {
    title: "Proof-of-Concept Pilots",
    description: "Test and validate AI ideas before full investment."
  },
  {
    title: "AI Strategy Workshops",
    description: "Align stakeholders and define success metrics for AI initiatives."
  }
];

const whyUs = [
  "Proven AI strategy and consulting expertise",
  "Business-aligned, value-driven approach",
  "Rapid PoC and prototyping capabilities",
  "Cross-functional team of strategists and engineers",
  "Focus on responsible, explainable AI"
];

const AIStrategyDiscovery: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const navigate = useNavigate();
  const AIStrategyDiscoveryImg = "/placeholders/brand-kit.jpg";
  return (
    <>
      <Seo 
        title="AI Strategy & Discovery | Invictus Data"
        description="Define your AI strategy and discover opportunities for AI implementation in your business."
        keywords="AI strategy, AI consulting, AI discovery, AI roadmap, AI transformation, AI planning"
      />
      
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} logoSize="sm" />
      </div>
      <div className="relative z-10 w-full max-w-[1920px] mx-auto pt-24 ">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center py-24 px-6">
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left: Image with overlayed text */}
            <div className="flex-[2] relative flex items-stretch min-h-[340px]">
              <img
                src={AIStrategyDiscoveryImg}
                alt="AI Strategy & Discovery"
                className="object-cover w-full h-full rounded-3xl min-h-[340px] max-h-[420px]"
                style={{ objectPosition: 'center' }}
              />
              {/* Overlayed text */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-white/60 to-transparent rounded-3xl">
              </div>
            </div>
            {/* Right: Stat Card */}
            <div className="flex-1 flex flex-col justify-center bg-white rounded-3xl p-10 min-h-[340px] max-h-[420px] shadow-lg">
              <div className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-wide mb-6 unbounded">AI Strategy & Discovery</div>
              <div className="text-[#1E40AF] text-xl md:text-2xl font-semibold tracking-wide mb-6 unbounded">Unlock High-Impact AI Opportunities</div>
              <div className="text-slate-800 text-base md:text-lg font-normal max-w-xl">
                We help you identify high-impact AI opportunities, define a clear roadmap, and align AI initiatives with your business goals. Our experts guide you from ideation to proof-of-concept, ensuring your AI investments deliver real value and competitive advantage.
              </div>
            </div>
          </div>
        </section>
        {/* Capabilities Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-24 text-center font-['Lexend']">Core Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[250px] relative">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#EFF6FF] absolute -top-5 left-5 shadow-md">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">{cap.title}</h3>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* Intro Section */}
        <section className="w-full flex flex-col items-center justify-center py-2 px-6 max-w-7xl mx-auto">
          <div className="w-full bg-white rounded-3xl p-8 md:p-12 flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 unbounded">AI Strategy for Real-World Impact</h2>
            <div className="text-base md:text-lg text-slate-600 mb-6">We help you identify high-impact AI opportunities, define a clear roadmap, and align AI initiatives with your business goals. Our experts guide you from ideation to proof-of-concept, ensuring your AI investments deliver real value and competitive advantage.</div>
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((uc, i) => {
              const iconMap = {
                0: Search,
                1: Map,
                2: Sparkles,
                3: Lightbulb
              };
              const Icon = iconMap[i] || Award;
              return (
                <div key={uc.title} className="flex flex-col items-center justify-center bg-white rounded-3xl px-8 py-8 shadow-lg border border-slate-200 relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl border-2 border-[#2563EB] mb-4">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <span className="text-slate-900 text-lg md:text-lg font-normal mb-3 unbounded text-center">
                    {uc.title}
                  </span>
                  {uc.description && (
                    <span className="text-slate-600 text-sm text-center">{uc.description}</span>
                  )}
                </div>
              );
            })}
          </div>
        </section>
        {/* Why Us Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Why Work With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => {
              const iconMap = {
                0: Award,
                1: CheckCircle,
                2: Users,
                3: Sparkles,
                4: TrendingUp
              };
              const Icon = iconMap[i] || Award;
              return (
                <div key={item} className="flex flex-col items-center justify-center bg-white rounded-3xl px-8 py-8 shadow-lg border border-slate-200 relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl border-2 border-[#2563EB] mb-4">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <span className="text-slate-900 text-lg md:text-lg font-normal mb-3 unbounded text-center">
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
        {/* CTA Footer Section */}
        <section className="w-full py-20 px-6  relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Ready to Define Your AI Roadmap?</h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">Let’s unlock the full potential of AI for your business—starting with a clear strategy.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CustomButton size="lg" className="border-2 border-[#93C5FD] text-[#1E40AF] px-8 py-4 rounded-xl font-semibold text-lg bg-transparent hover:bg-[#2563EB]/10 transition-all duration-300" onClick={() => navigate('/schedule-consultation')}>Talk to an AI Strategist</CustomButton>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>

  );
};

export default AIStrategyDiscovery; 