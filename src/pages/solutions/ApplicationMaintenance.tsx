import React, { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Server, Settings, ShieldCheck, Bug, TrendingUp, RefreshCw, Cloud, Zap, CheckCircle, Users, Award, ClipboardList, Rocket } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

const offerings = [
  { icon: RefreshCw, title: "24/7 Monitoring & Incident Response", desc: "Proactively monitor performance, errors, uptime, and logs. Detect and resolve issues before they impact users." },
  { icon: Bug, title: "Bug Fixing & Issue Resolution", desc: "Diagnose and fix critical bugs, crashes, or regressions across platforms and versions with fast turnaround times." },
  { icon: Cloud, title: "OS & Platform Compatibility Updates", desc: "Keep your applications compatible with the latest iOS, Android, browser, and cloud platform updates — without disruption." },
  { icon: TrendingUp, title: "Performance Optimization", desc: "Analyze and enhance speed, responsiveness, memory usage, and overall stability across devices." },
  { icon: ShieldCheck, title: "Security Patching & Compliance", desc: "Implement vulnerability fixes, encryption upgrades, and data protection improvements to meet evolving compliance standards." },
  { icon: Zap, title: "Feature Enhancements", desc: "Implement small-to-medium improvements, UX refinements, and incremental feature rollouts based on user feedback or product needs." },
];

const tools = [
  { name: "React", category: "Web Apps" },
  { name: "Vue", category: "Web Apps" },
  { name: "Node", category: "Web Apps" },
  { name: "Django", category: "Web Apps" },
  { name: "FastAPI", category: "Web Apps" },
  { name: "iOS", category: "Mobile Apps" },
  { name: "Android", category: "Mobile Apps" },
  { name: "Flutter", category: "Mobile Apps" },
  { name: "React Native", category: "Mobile Apps" },
  { name: "REST", category: "APIs & Services" },
  { name: "GraphQL", category: "APIs & Services" },
  { name: "Microservices", category: "APIs & Services" },
  { name: "AWS", category: "Cloud Infrastructure" },
  { name: "GCP", category: "Cloud Infrastructure" },
  { name: "Azure", category: "Cloud Infrastructure" },
  { name: "Docker", category: "Cloud Infrastructure" },
  { name: "Kubernetes", category: "Cloud Infrastructure" },
  { name: "Sentry", category: "Monitoring Tools" },
  { name: "Datadog", category: "Monitoring Tools" },
  { name: "New Relic", category: "Monitoring Tools" },
  { name: "CloudWatch", category: "Monitoring Tools" },
];
const toolCategories = ["All", "Web Apps", "Mobile Apps", "APIs & Services", "Cloud Infrastructure", "Monitoring Tools"];

const scenarios = [
  { icon: "TrendingUp", title: "Performance drops during traffic spikes" },
  { icon: "RefreshCw", title: "OS version updates causing layout/UI issues" },
  { icon: "Bug", title: "Bugs reported by users across devices" },
  { icon: "ShieldCheck", title: "Security vulnerabilities flagged by audit tools" },
  { icon: "ClipboardList", title: "Legacy codebase needing technical debt cleanup" },
  { icon: "Zap", title: "Minor feature requests and UX improvements" },
  { icon: "Cloud", title: "Broken third-party integrations" },
];

const whyUs = [
  "24/7 proactive monitoring & support",
  "Dedicated maintenance team & SLAs",
  "Flexible plans for startups to enterprises",
  "DevOps-enabled release automation",
  "Security-first approach with compliance in mind"
];

const ApplicationMaintenance: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showContactForm, setShowContactForm] = useState(false);
  const filteredTools = selectedCategory === "All" ? tools : tools.filter(t => t.category === selectedCategory);

  const ApplicationMaintenanceImg = "https://assets.channeliq.ai/invictus-landing/Solutions/ApplicationMaintenance.png";

  return (
    <>
      <Seo 
        title="Application Maintenance | Invictus Data"
        description="Comprehensive application maintenance and support services. Keep your applications running smoothly."
        keywords="application maintenance, software support, app maintenance, bug fixes, performance optimization, updates"
      />
      
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} />
      </div>
      <div className="relative z-10 w-full max-w-[1920px] mx-auto pt-24 ">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center py-24 px-6">
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left: Image with overlayed text */}
            <div className="flex-[2] relative flex items-stretch min-h-[340px]">
              <img
                src={ApplicationMaintenanceImg}
                alt="Application Maintenance"
                className="object-cover w-full h-full rounded-3xl min-h-[340px] max-h-[420px]"
                style={{ objectPosition: 'center' }}
              />
              {/* Overlayed text */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-white/60 to-transparent rounded-3xl">
              </div>
            </div>
            {/* Right: Stat Card */}
            <div className="flex-1 flex flex-col justify-center bg-white rounded-3xl p-10 min-h-[340px] max-h-[420px] shadow-lg">
              <div className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-wide mb-6 unbounded">Application Maintenance</div>
              <div className="text-[#1E40AF] text-xl md:text-2xl font-semibold tracking-wide mb-6 unbounded">Reliable, Continuous Application Lifecycle Management</div>
              <div className="text-slate-800 text-base md:text-lg font-normal max-w-xl">
                Ensure your applications stay stable, high-performing, and up-to-date across devices, platforms, and OS versions — with 24/7 monitoring, support, and enhancement.
              </div>
            </div>
          </div>
        </section>

        {/* Offerings Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-24 text-center font-['Lexend']">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[250px] relative">
                  {/* Icon Avatar */}
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#EFF6FF] absolute -top-5 left-5 shadow-md">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">{item.title}</h3>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* Tech Stack Section (Marquee) */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">What We Maintain</h2>
          {/* Marquee/looping horizontal scroll */}
          <div className="relative w-full overflow-x-hidden py-6">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white to-transparent" />
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent" />
            <div className="marquee-track flex items-center gap-8 animate-marquee whitespace-nowrap">
              {[...filteredTools, ...filteredTools].map((tool, i) => (
                <span key={tool.name + '-' + i} className="flex items-center justify-center min-w-[200px] h-24 px-10 bg-[#EFF6FF] rounded-[2.5rem] border border-slate-200 shadow-md text-slate-900 text-xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis unbounded">
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 5s linear infinite;
            }
          `}</style>
        </section>

                {/* Intro Section */}
                <section className="w-full flex flex-col items-center justify-center py-2 px-6 max-w-7xl mx-auto">
          <div className="w-full bg-white rounded-3xl p-8 md:p-12 flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 unbounded">Keep Your Applications Running at Their Best</h2>
            <div className="text-base md:text-lg text-slate-600 mb-6">Applications don’t stop evolving after launch — and neither do we. Our application maintenance services ensure your software remains secure, compatible, and optimized, while continuously adapting to changing business and user needs.<br/>Whether it’s bug fixing, performance tuning, platform updates, or new feature rollouts — we ensure smooth day-to-day operations and long-term sustainability for your digital products.
            </div>
          </div>
        </section>
        {/* Scenarios Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Common Scenarios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {scenarios.map((sc, i) => {
              const Icon = {
                TrendingUp, RefreshCw, Bug, ShieldCheck, ClipboardList, Zap, Cloud
              }[sc.icon];
              return (
                <div key={sc.title} className="flex flex-col items-center justify-center bg-white rounded-3xl px-8 py-8 shadow-lg border border-slate-200 relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl border-2 border-[#2563EB] mb-4">
                    {Icon && <Icon className="w-6 h-6 text-[#2563EB]" />}
                  </div>
                  <span className="text-slate-900 text-lg md:text-lg font-normal mb-3 unbounded text-center">
                    {sc.title}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
        {/* Why Us Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => {
              const iconMap = {
                0: Award,
                1: CheckCircle,
                2: Rocket,
                3: Users,
                4: ShieldCheck
              };
              const Icon = iconMap[i] || Rocket;
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Keep Your App Running Smoothly</h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">Let’s ensure your product continues to perform, scale, and delight users — without interruption.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="border-2 border-[#93C5FD] text-[#1E40AF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2563EB]/10 transition-all duration-300">Talk to Our Support Team</button>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>

  );
};

export default ApplicationMaintenance; 