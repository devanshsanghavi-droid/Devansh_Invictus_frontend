import React, { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import CustomButton from "@/components/ui/CustomButton";
import { Cpu, Users, Zap, Network, Settings, Eye, CheckCircle, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

const capabilities = [
  {
    icon: Users,
    title: "Multi-Agent Architectures",
    description: "Design and deploy systems where multiple AI agents collaborate or compete to achieve goals."
  },
  {
    icon: Network,
    title: "Orchestration & Coordination",
    description: "Implement agent orchestration, task allocation, and real-time communication frameworks."
  },
  {
    icon: Zap,
    title: "Autonomous Decision-Making",
    description: "Enable agents to perceive, reason, and act independently in dynamic environments."
  },
  {
    icon: Settings,
    title: "Integration with Business Workflows",
    description: "Connect agentic AI to your apps, APIs, and data for seamless automation."
  },
  {
    icon: Eye,
    title: "Monitoring & Explainability",
    description: "Track agent actions, ensure transparency, and maintain control over autonomous systems."
  }
];

const useCases = [
  {
    title: "Autonomous Customer Support Agents",
    description: "AI agents that resolve tickets, escalate issues, and learn from interactions."
  },
  {
    title: "Automated Research & Data Gathering",
    description: "Agents that autonomously search, summarize, and synthesize information."
  },
  {
    title: "Multi-Agent Process Automation",
    description: "Orchestrate complex workflows with specialized agents for each task."
  },
  {
    title: "Real-Time Decision Systems",
    description: "Deploy agents that make split-second decisions in trading, logistics, or IoT."
  }
];

const whyUs = [
  "Expertise in agentic and autonomous AI systems",
  "Experience with LangChain, AutoGen, and orchestration frameworks",
  "Focus on safety, monitoring, and explainability",
  "Custom integration with your business stack",
  "Rapid prototyping and iterative delivery"
];

const AgenticAIImplementation: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const navigate = useNavigate();
  const AgenticAIImplementationImg = "https://assets.channeliq.ai/invictus-landing/Solutions/AgenticAIImplementation.png";
  return (
    <>
      <Seo 
        title="Agentic AI Implementation | Invictus Data"
        description="Implement autonomous AI agents to automate complex workflows and decision-making processes."
        keywords="agentic AI, AI agents, autonomous AI, AI automation, intelligent agents, AI workflows"
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
                src={AgenticAIImplementationImg}
                alt="Agentic AI Implementation"
                className="object-cover w-full h-full rounded-3xl min-h-[340px] max-h-[420px]"
                style={{ objectPosition: 'center' }}
              />
              {/* Overlayed text */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-white/60 to-transparent rounded-3xl">
              </div>
            </div>
            {/* Right: Stat Card */}
            <div className="flex-1 flex flex-col justify-center bg-white rounded-3xl p-10 min-h-[340px] max-h-[420px] shadow-lg">
              <div className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-wide mb-6 unbounded">Agentic AI Implementation</div>
              <div className="text-[#1E40AF] text-xl md:text-2xl font-semibold tracking-wide mb-6 unbounded">Autonomous AI for Next-Gen Automation</div>
              <div className="text-slate-800 text-base md:text-lg font-normal max-w-xl">
                We design and deploy agentic AI systems that autonomously perceive, reason, and act to achieve business objectives. Our solutions leverage the latest in multi-agent architectures, orchestration, and real-time decision-making for next-generation automation.
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 unbounded">Agentic AI for Real-World Impact</h2>
            <div className="text-base md:text-lg text-slate-600 mb-6">We design and deploy agentic AI systems that autonomously perceive, reason, and act to achieve business objectives. Our solutions leverage the latest in multi-agent architectures, orchestration, and real-time decision-making for next-generation automation.</div>
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((uc, i) => {
              const iconMap = {
                0: Users,
                1: Cpu,
                2: Network,
                3: Zap
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
                2: Settings,
                3: Eye,
                4: Zap
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Ready for Autonomous AI?</h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">Let’s build agentic AI systems that drive next-generation automation and business value.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CustomButton size="lg" className="border-2 border-[#93C5FD] text-[#1E40AF] px-8 py-4 rounded-xl font-semibold text-lg bg-transparent hover:bg-[#2563EB]/10 transition-all duration-300" onClick={() => navigate('/schedule-consultation')}>Talk to an AI Architect</CustomButton>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>

  );
};

export default AgenticAIImplementation; 