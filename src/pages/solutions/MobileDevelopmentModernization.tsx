import React, { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Smartphone, Cloud, Layers, Settings, Zap, ArrowRight, Server, Code, Database, TrendingUp, RefreshCw, CheckCircle, Users, Award, ClipboardList, Rocket, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

const tools = [
  { name: "Swift", category: "Native" },
  { name: "Kotlin", category: "Native" },
  { name: "Flutter", category: "Cross-Platform" },
  { name: "React Native", category: "Cross-Platform" },
  { name: "Jetpack Compose", category: "UI Libraries" },
  { name: "SwiftUI", category: "UI Libraries" },
  { name: "Tailwind Mobile", category: "UI Libraries" },
  { name: "REST", category: "Backend Integration" },
  { name: "GraphQL", category: "Backend Integration" },
  { name: "Firebase", category: "Backend Integration" },
  { name: "Supabase", category: "Backend Integration" },
  { name: "Fastlane", category: "DevOps Tools" },
  { name: "GitHub Actions", category: "DevOps Tools" },
  { name: "Bitrise", category: "DevOps Tools" },
  { name: "Firebase App Distribution", category: "DevOps Tools" },
  { name: "XCTest", category: "Testing & QA" },
  { name: "Espresso", category: "Testing & QA" },
  { name: "Detox", category: "Testing & QA" },
  { name: "Appium", category: "Testing & QA" },
];
const toolCategories = ["All", "Native", "Cross-Platform", "UI Libraries", "Backend Integration", "DevOps Tools", "Testing & QA"];

const capabilities = [
  { icon: Smartphone, title: "Native & Cross-Platform App Development", desc: "Build secure, high-performance apps using Swift, Kotlin, Flutter, or React Native — tailored to your goals and tech stack preferences." },
  { icon: ArrowRight, title: "Legacy App Modernization", desc: "Refactor, re-architect, or rewrite outdated mobile apps to improve performance, maintainability, and user experience." },
  { icon: Layers, title: "UI/UX Revamp & Optimization", desc: "Redesign interfaces using modern design principles and frameworks like Material You or iOS Human Interface Guidelines for better engagement and usability." },
  { icon: Cloud, title: "Scalable Mobile Architecture", desc: "Implement modular, future-ready mobile app architectures that support rapid iteration, multi-team collaboration, and feature scalability." },
  { icon: Zap, title: "Mobile DevOps & CI/CD", desc: "Automate builds, testing, deployment, and release management with tools like Fastlane, Firebase, GitHub Actions, and Bitrise." },
  { icon: Settings, title: "App Store & Play Store Optimization", desc: "Ensure smooth publishing, versioning, metadata management, and compliance with App Store and Google Play policies." },
];

const useCases = [
  { icon: "Smartphone", title: "Greenfield app development (MVPs to enterprise-grade)" },
  { icon: "Users", title: "Cross-platform apps for startups and D2C brands" },
  { icon: "RefreshCw", title: "Rewriting legacy apps to Flutter or React Native" },
  { icon: "Layers", title: "UI/UX redesigns for engagement and retention" },
  { icon: "TrendingUp", title: "Performance tuning and crash reduction" },
  { icon: "Zap", title: "Mobile CI/CD pipeline implementation" },
  { icon: "ArrowRight", title: "Migration to latest OS versions (iOS 17+, Android 14+)" },
  { icon: "Cloud", title: "Integration with AI, location services, payments, and more" },
];

const whyUs = [
  "Expertise in both native and cross-platform stacks",
  "Focus on performance, UX, and long-term maintainability",
  "Mobile-first design and cloud-native backend support",
  "Agile delivery with code quality and testing best practices",
  "Proven success across consumer, B2B, and enterprise apps"
];

const whyUsIcons = [
  "Award", "CheckCircle", "Rocket", "Users", "ShieldCheck"
];

const MobileDevelopmentModernization: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showContactForm, setShowContactForm] = useState(false);
  const filteredTools = selectedCategory === "All" ? tools : tools.filter(t => t.category === selectedCategory);
  const navigate = useNavigate();

  const MobileDevelopmentModernizationImg = "https://assets.channeliq.ai/invictus-landing/Solutions/MobileDevelopment&Modernization.png";

  return (
    <>
      <Seo 
        title="Mobile Development & Modernization | Invictus Data"
        description="Build modern mobile applications or modernize legacy apps. iOS, Android, and cross-platform development."
        keywords="mobile development, iOS development, Android development, mobile apps, app modernization, cross-platform"
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
                src={MobileDevelopmentModernizationImg}
                alt="Mobile Development & Modernization"
                className="object-cover w-full h-full rounded-3xl min-h-[340px] max-h-[420px]"
                style={{ objectPosition: 'center' }}
              />
              {/* Overlayed text */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-white/60 to-transparent rounded-3xl">
              </div>
            </div>
            {/* Right: Stat Card */}
            <div className="flex-1 flex flex-col justify-center bg-white rounded-3xl p-10 min-h-[340px] max-h-[420px] shadow-lg">
              <div className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-wide mb-6 unbounded">Mobile Development & Modernization</div>
              <div className="text-[#1E40AF] text-xl md:text-2xl font-semibold tracking-wide mb-6 unbounded">Build, Modernize, and Scale High-Performance Mobile Experiences</div>
              <div className="text-slate-800 text-base md:text-lg font-normal max-w-xl">
                From iOS and Android to Flutter and React Native — we design, develop, and modernize mobile applications that are scalable, user-centric, and aligned with your business vision.
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-24 text-center font-['Lexend']">Our Capabilities</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Technologies & Frameworks We Use</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 unbounded">Future-Proof Your Mobile Presence</h2>
            <div className="text-base md:text-lg text-slate-600 mb-6">Whether you're starting from scratch or looking to modernize a legacy app, we bring the right blend of design thinking, performance optimization, and cross-platform expertise. Our team builds mobile solutions that are intuitive, fast, secure — and ready to evolve with every OS update and user expectation.<br/>From sleek UI to resilient backend integration, we ensure your app delivers on both form and function — now and in the future.
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Key Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((uc, i) => {
              const Icon = {
                Smartphone, Users, RefreshCw, Layers, TrendingUp, Zap, ArrowRight, Cloud
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Ready to Build or Modernize Your Mobile App?</h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">Let’s create a mobile experience your users will love — and your business can grow with.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="border-2 border-[#93C5FD] text-[#1E40AF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2563EB]/10 transition-all duration-300" onClick={() => navigate('/schedule-consultation')}>Schedule a Mobile Audit</button>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>

  );
};

export default MobileDevelopmentModernization; 