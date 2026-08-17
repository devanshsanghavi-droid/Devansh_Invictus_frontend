import React, { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Rocket, Cloud, Eye, AlertTriangle, Code, Layers, ShieldCheck, TrendingUp, Zap, Users, Award, RefreshCw, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

const capabilities = [
  { icon: Eye, title: "Observability & Monitoring", desc: "Implement end-to-end observability with metrics, logs, traces, and real-time alerting using Grafana, Prometheus, Datadog, and more." },
  { icon: AlertTriangle, title: "Incident Management & Response", desc: "Set up automated alerting, on-call rotations, playbooks, and root cause analysis to minimize downtime and MTTR." },
  { icon: Code, title: "Infrastructure as Code (IaC)", desc: "Use Terraform, Pulumi, and Helm to manage infrastructure in a repeatable, version-controlled way across environments." },
  { icon: Cloud, title: "Cloud-Native Architecture", desc: "Design and maintain microservices-based and serverless systems optimized for scale, resilience, and low operational overhead." },
  { icon: ShieldCheck, title: "SLA/SLO Definition & Enforcement", desc: "Define and track service-level objectives (SLOs) to measure reliability and enforce SLAs with automation and observability hooks." },
  { icon: TrendingUp, title: "Performance & Cost Optimization", desc: "Continuously monitor system performance, identify bottlenecks, and optimize compute usage and spend." },
];

const tools = [
  { name: "AWS", category: "Cloud Platforms" },
  { name: "GCP", category: "Cloud Platforms" },
  { name: "Azure", category: "Cloud Platforms" },
  { name: "Docker", category: "Containerization" },
  { name: "Kubernetes", category: "Containerization" },
  { name: "Helm", category: "Containerization" },
  { name: "AWS Lambda", category: "Serverless" },
  { name: "Google Cloud Functions", category: "Serverless" },
  { name: "Azure Functions", category: "Serverless" },
  { name: "Terraform", category: "IaC" },
  { name: "Pulumi", category: "IaC" },
  { name: "CloudFormation", category: "IaC" },
  { name: "Prometheus", category: "Monitoring & Observability" },
  { name: "Grafana", category: "Monitoring & Observability" },
  { name: "Datadog", category: "Monitoring & Observability" },
  { name: "ELK Stack", category: "Monitoring & Observability" },
  { name: "New Relic", category: "Monitoring & Observability" },
  { name: "ArgoCD", category: "CI/CD" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "CircleCI", category: "CI/CD" },
  { name: "Jenkins", category: "CI/CD" },
  { name: "HashiCorp Vault", category: "Security & Policy" },
  { name: "Open Policy Agent (OPA)", category: "Security & Policy" },
  { name: "AWS IAM", category: "Security & Policy" },
];
const toolCategories = ["All", "Cloud Platforms", "Containerization", "Serverless", "IaC", "Monitoring & Observability", "CI/CD", "Security & Policy"];

const useCases = [
  { icon: "Rocket", title: "High-availability architecture for mission-critical SaaS" },
  { icon: "Cloud", title: "Production Kubernetes cluster management with autoscaling" },
  { icon: "Eye", title: "Real-time observability for multi-region applications" },
  { icon: "Zap", title: "Chaos engineering for failure recovery readiness" },
  { icon: "RefreshCw", title: "Automated blue/green and canary deployments" },
  { icon: "AlertTriangle", title: "Predictive alerting & on-call automation" },
  { icon: "TrendingUp", title: "Cost-effective scaling strategies for global traffic" },
];

const whyUs = [
  "Deep cloud-native platform expertise",
  "DevOps-first mindset with reliability focus",
  "Proactive incident prevention and response",
  "Tailored SLO/SLA governance for each client",
  "Proven success in scaling production systems under pressure"
];

const SiteReliabilityEngineering: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showContactForm, setShowContactForm] = useState(false);
  const filteredTools = selectedCategory === "All" ? tools : tools.filter(t => t.category === selectedCategory);
  const navigate = useNavigate();

  const SiteReliabilityEngineeringImg = "/placeholders/conference-shoptalk.jpg";

  return (
    <>
      <Seo 
        title="Site Reliability Engineering | Invictus Data"
        description="SRE services to ensure high availability, performance, and reliability of your systems and applications."
        keywords="SRE, site reliability, DevOps, system reliability, infrastructure monitoring, incident management"
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
                src={SiteReliabilityEngineeringImg}
                alt="Site Reliability Engineering"
                className="object-cover w-full h-full rounded-3xl min-h-[340px] max-h-[420px]"
                style={{ objectPosition: 'center' }}
              />
              {/* Overlayed text */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-white/60 to-transparent rounded-3xl">
              </div>
            </div>
            {/* Right: Stat Card */}
            <div className="flex-1 flex flex-col justify-center bg-white rounded-3xl p-10 min-h-[340px] max-h-[420px] shadow-lg">
              <div className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-wide mb-6 unbounded">Site Reliability Engineering</div>
              <div className="text-[#1E40AF] text-xl md:text-2xl font-semibold tracking-wide mb-6 unbounded">Infrastructure That Scales. Reliability That Lasts.</div>
              <div className="text-slate-800 text-base md:text-lg font-normal max-w-xl">
                We ensure robust observability, proactive incident management, and seamless scalability to power your business-critical systems — with cloud-native engineering at the core.
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-24 text-center font-['Lexend']">What We Do</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Core Technologies We Use</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 unbounded">Engineering for Reliability, Resilience & Speed</h2>
            <div className="text-base md:text-lg text-slate-600 mb-6">Our Site Reliability Engineering (SRE) practice blends software engineering with IT operations to deliver highly available, fault-tolerant systems that scale effortlessly.<br/>We build and manage production-grade infrastructure — cloud-native, automated, and resilient by design — so your teams can ship faster and recover smarter. From Kubernetes and serverless to chaos engineering and SLAs, we bring the practices and tooling your business needs to stay always-on.
            </div>
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">SRE in Action — Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((uc, i) => {
              const Icon = {
                Rocket, Cloud, Eye, Zap, RefreshCw, AlertTriangle, TrendingUp
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Why Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyUs.map((item, i) => {
              const iconMap = {
                0: Award,
                1: CheckCircle,
                2: Users,
                3: ShieldCheck,
                4: Rocket
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Build Infrastructure That Just Works</h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">Let us help you scale reliably, recover quickly, and operate with confidence — the SRE way.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="border-2 border-[#93C5FD] text-[#1E40AF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2563EB]/10 transition-all duration-300" onClick={() => navigate('/schedule-consultation')}>Talk to a Reliability Engineer</button>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>

  );
};

export default SiteReliabilityEngineering; 