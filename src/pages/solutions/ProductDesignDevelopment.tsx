import React, { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Palette, Cloud, Layers, Settings, Zap, ArrowRight, Server, Code, Database, TrendingUp, RefreshCw, CheckCircle, Users, Award, ClipboardList, Rocket, Smartphone, Lightbulb, ShieldCheck, Bug } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";
const ProductDesignDevelopmentImg = "https://assets.channeliq.ai/invictus-landing/Solutions/ProductDesign&Development.png";
const ApplicationMaintenanceImg = "https://assets.channeliq.ai/invictus-landing/Solutions/ApplicationMaintenance.png";

// --- Product Design & Development Data ---
const designDevTools = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue", category: "Frontend" },
  { name: "Tailwind", category: "Frontend" },
  { name: "Flutter", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Go", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Flutter", category: "Mobile" },
  { name: "React Native", category: "Mobile" },
  { name: "Swift", category: "Mobile" },
  { name: "Kotlin", category: "Mobile" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Firebase", category: "Database" },
  { name: "Supabase", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  { name: "Netlify", category: "Cloud" },
  { name: "Figma", category: "Design Tools" },
  { name: "Adobe XD", category: "Design Tools" },
  { name: "Zeplin", category: "Design Tools" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Terraform", category: "DevOps" },
];
const designDevToolCategories = ["All", "Frontend", "Backend", "Mobile", "Database", "Cloud", "Design Tools", "DevOps"];

const capabilities = [
  { icon: Settings, title: "Product Strategy & Roadmapping", desc: "Collaborate on defining product vision, user flows, and release plans aligned with business goals and user needs." },
  { icon: Palette, title: "UI/UX Design & Prototyping", desc: "Design beautiful, intuitive interfaces that deliver seamless user experiences — from wireframes and interactive prototypes to design systems." },
  { icon: Code, title: "Full-Stack Development", desc: "Develop robust web and mobile applications using modern, scalable tech stacks. Clean architecture, test coverage, and modularity included." },
  { icon: Zap, title: "MVP Development & Validation", desc: "Build fast, lean MVPs to validate ideas with real users and iterate quickly based on feedback and usage data." },
  { icon: Cloud, title: "End-to-End DevOps & Deployment", desc: "Set up CI/CD pipelines, scalable cloud infrastructure, containerization, and automated deployment workflows for reliable product launches." },
  { icon: ArrowRight, title: "Post-Launch Support & Iteration", desc: "Provide ongoing product improvements, bug fixes, performance tuning, and feature rollouts based on evolving user needs." },
];

const useCases = [
  { icon: "Lightbulb", title: "Startup MVPs and PoCs" },
  { icon: "Server", title: "SaaS product design & engineering" },
  { icon: "RefreshCw", title: "Web app modernization and rebuilds" },
  { icon: "Smartphone", title: "Mobile-first product launches" },
  { icon: "ClipboardList", title: "Internal tools and dashboards" },
  { icon: "Zap", title: "AI/ML-powered app development" },
  { icon: "Users", title: "Consumer-facing platforms (marketplaces, D2C, fintech)" },
  { icon: "Palette", title: "Rapid prototyping and user testing" },
];

const whyUs = [
  "Full-cycle design and development expertise",
  "User-first mindset and business-aligned execution",
  "Lean/agile workflows for rapid iteration",
  "Scalable architecture and clean code standards",
  "Seamless collaboration between design, dev, and product"
];

// --- Application Maintenance Data ---
const maintenanceOfferings = [
  { icon: RefreshCw, title: "24/7 Monitoring & Incident Response", desc: "Proactively monitor performance, errors, uptime, and logs. Detect and resolve issues before they impact users." },
  { icon: Bug, title: "Bug Fixing & Issue Resolution", desc: "Diagnose and fix critical bugs, crashes, or regressions across platforms and versions with fast turnaround times." },
  { icon: Cloud, title: "OS & Platform Compatibility Updates", desc: "Keep your applications compatible with the latest iOS, Android, browser, and cloud platform updates — without disruption." },
  { icon: TrendingUp, title: "Performance Optimization", desc: "Analyze and enhance speed, responsiveness, memory usage, and overall stability across devices." },
  { icon: ShieldCheck, title: "Security Patching & Compliance", desc: "Implement vulnerability fixes, encryption upgrades, and data protection improvements to meet evolving compliance standards." },
  { icon: Zap, title: "Feature Enhancements", desc: "Implement small-to-medium improvements, UX refinements, and incremental feature rollouts based on user feedback or product needs." },
];

const maintenanceScenarios = [
  { icon: "TrendingUp", title: "Performance drops during traffic spikes" },
  { icon: "RefreshCw", title: "OS version updates causing layout/UI issues" },
  { icon: "Bug", title: "Bugs reported by users across devices" },
  { icon: "ShieldCheck", title: "Security vulnerabilities flagged by audit tools" },
  { icon: "ClipboardList", title: "Legacy codebase needing technical debt cleanup" },
  { icon: "Zap", title: "Minor feature requests and UX improvements" },
  { icon: "Cloud", title: "Broken third-party integrations" },
];

const maintenanceWhyUs = [
  "24/7 proactive monitoring & support",
  "Dedicated maintenance team & SLAs",
  "Flexible plans for startups to enterprises",
  "DevOps-enabled release automation",
  "Security-first approach with compliance in mind"
];

const ProductDesignDevelopment: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showContactForm, setShowContactForm] = useState(false);
  const allTools = designDevTools; // Only show design/dev tools in the tech stack section for clarity
  const navigate = useNavigate();

  return (
    <>
      <Seo 
        title="Product Design & Development | Invictus Data"
        description="User-centric product design and development services. From concept to launch with agile methodologies."
        keywords="product design, UX design, product development, user experience, design thinking, agile development"
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
                src={ProductDesignDevelopmentImg}
                alt="Product Design & Development"
                className="object-cover w-full h-full rounded-3xl min-h-[340px] max-h-[420px]"
                style={{ objectPosition: 'center' }}
              />
              {/* Overlayed text */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-white/60 to-transparent rounded-3xl">
              </div>
            </div>
            {/* Right: Stat Card */}
            <div className="flex-1 flex flex-col justify-center bg-white rounded-3xl p-10 min-h-[340px] max-h-[420px] shadow-lg">
              <div className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-wide mb-6 unbounded">Product Design, Development & Maintenance</div>
              <div className="text-[#1E40AF] text-xl md:text-2xl font-semibold tracking-wide mb-6 unbounded">From Idea to Launch — and Beyond</div>
              <div className="text-slate-800 text-base md:text-lg font-normal max-w-xl">
                We turn ideas into scalable, high-impact digital products through end-to-end design, development, deployment, and ongoing maintenance — built for usability, performance, and growth.
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-24 text-center font-['Lexend']">Our Core Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[250px] relative">
                  {/* Icon Avatar */}
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#EFF6FF] absolute -top-5 left-5 shadow-md">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">{cap.title}</h3>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tech Stack Section (Marquee) */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Technologies We Use</h2>
          {/* Marquee/looping horizontal scroll */}
          <div className="relative w-full overflow-x-hidden py-6">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white to-transparent" />
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent" />
            <div className="marquee-track flex items-center gap-8 animate-marquee whitespace-nowrap">
              {[...allTools, ...allTools].map((tool, i) => (
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

        {/* Use Cases Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Typical Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((uc, i) => {
              const Icon = {
                Lightbulb, Server, RefreshCw, Smartphone, ClipboardList, Zap, Users, Palette
              }[uc.icon];
              return (
                <div key={uc.title} className="flex flex-col items-center justify-center bg-white rounded-3xl px-8 py-8 shadow-lg border border-slate-200 relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl border-2 border-[#2563EB] mb-4">
                    {Icon && <Icon className="w-6 h-6 text-[#2563EB]" />}
                  </div>
                  <span className="text-slate-900 text-lg md:text-lg font-normal mb-3 unbounded text-center">
                    {uc.title}
                  </span>
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
                2: Rocket,
                3: Users,
                4: Layers
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

        {/* --- Maintenance Section --- */}
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
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-white/60 to-transparent rounded-3xl"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-24 text-center font-['Lexend']">What We Offer (Maintenance)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {maintenanceOfferings.map((item, i) => {
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

        {/* Scenarios Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Common Scenarios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceScenarios.map((sc, i) => {
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

        {/* Why Us Section (Maintenance) */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Why Choose Us (Maintenance)</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceWhyUs.map((item, i) => {
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Let’s Build, Launch, and Maintain Great Products</h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">From concept to ongoing support, our team is ready to help you succeed at every stage of your product journey.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="border-2 border-[#93C5FD] text-[#1E40AF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2563EB]/10 transition-all duration-300" onClick={() => navigate('/schedule-consultation')}>Talk to Our Team</button>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>

  );
};

export default ProductDesignDevelopment; 