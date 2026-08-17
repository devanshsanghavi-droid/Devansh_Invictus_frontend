import React, { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Shield, Cloud, Layers, Settings, Zap, ArrowRight, Server, Code, Database, TrendingUp, RefreshCw, CheckCircle, Users, Award, ClipboardList, ShieldCheck, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

const tools = [
  { name: "Snowflake", category: "Data Warehouses" },
  { name: "BigQuery", category: "Data Warehouses" },
  { name: "Redshift", category: "Data Warehouses" },
  { name: "Azure Synapse", category: "Data Warehouses" },
  { name: "Airflow", category: "Pipelines & Orchestration" },
  { name: "dbt", category: "Pipelines & Orchestration" },
  { name: "AWS Glue", category: "Pipelines & Orchestration" },
  { name: "Prefect", category: "Pipelines & Orchestration" },
  { name: "S3", category: "Data Lakes" },
  { name: "Delta Lake", category: "Data Lakes" },
  { name: "Data Lake Gen2", category: "Data Lakes" },
  { name: "Kafka", category: "Streaming" },
  { name: "Spark Streaming", category: "Streaming" },
  { name: "Flink", category: "Streaming" },
  { name: "Datadog", category: "Monitoring Tools" },
  { name: "Grafana", category: "Monitoring Tools" },
  { name: "Prometheus", category: "Monitoring Tools" },
  { name: "CloudWatch", category: "Monitoring Tools" },
  { name: "AWS", category: "Cloud Providers" },
  { name: "GCP", category: "Cloud Providers" },
  { name: "Azure", category: "Cloud Providers" },
];
const toolCategories = ["All", "Data Warehouses", "Pipelines & Orchestration", "Data Lakes", "Streaming", "Monitoring Tools", "Cloud Providers"];

const capabilities = [
  { icon: Zap, title: "24/7 Monitoring & Alerting", desc: "Real-time observability into your data systems with automated alerts, anomaly detection, and root cause diagnostics." },
  { icon: ArrowRight, title: "Incident Response & Resolution", desc: "Rapid response and resolution of data pipeline failures, slow queries, cloud outages, and system degradation — minimizing business disruption." },
  { icon: Settings, title: "Performance Tuning", desc: "Continuously optimize pipelines, queries, and compute usage to reduce costs and improve throughput, latency, and availability." },
  { icon: Layers, title: "Platform Maintenance & Upgrades", desc: "Apply platform patches, dependency upgrades, version migrations, and infrastructure hardening — with minimal downtime." },
  { icon: Shield, title: "Security & Compliance Monitoring", desc: "Enforce policies around access, encryption, auditing, and compliance with standards like SOC2, HIPAA, GDPR." },
  { icon: Cloud, title: "Change Management & Deployment Support", desc: "Safely roll out updates and new features using CI/CD best practices, rollback plans, and version control." },
];

const useCases = [
  { icon: "CheckCircle", title: "SLA-driven pipeline support for production workloads" },
  { icon: "TrendingUp", title: "Query performance optimization in large-scale warehouses" },
  { icon: "Zap", title: "Real-time issue triage during analytics outages" },
  { icon: "Cloud", title: "Scaling platform resources during traffic spikes" },
  { icon: "RefreshCw", title: "Migration support from legacy platforms" },
  { icon: "Database", title: "Continuous cost monitoring and rightsizing" },
  { icon: "ShieldCheck", title: "Governance and audit trail support for compliance" },
];

const whyUs = [
  "Certified experts across platforms",
  "Proactive support with performance SLAs",
  "DevOps & DataOps automation",
  "Transparent monitoring and reporting",
  "Dedicated support team and escalation path"
];

const DataPlatformSupport: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showContactForm, setShowContactForm] = useState(false);
  const filteredTools = selectedCategory === "All" ? tools : tools.filter(t => t.category === selectedCategory);
  const navigate = useNavigate();
  const DataPlatformSupportImg = "https://assets.channeliq.ai/invictus-landing/Solutions/DataPlatformSupport.png";

  return (
    <>
      <Seo 
        title="Data Platform Support | Invictus Data"
        description="24/7 support and maintenance for your data platforms. Ensure reliability, performance, and security."
        keywords="data platform support, platform maintenance, 24/7 support, data infrastructure support, managed services"
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
                src={DataPlatformSupportImg}
                alt="Data Platform Support"
                className="object-cover w-full h-full rounded-3xl min-h-[340px] max-h-[420px]"
                style={{ objectPosition: 'center' }}
              />
              {/* Overlayed text */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-white/60 to-transparent rounded-3xl">
              </div>
            </div>
            {/* Right: Stat Card */}
            <div className="flex-1 flex flex-col justify-center bg-white rounded-3xl p-10 min-h-[340px] max-h-[420px] shadow-lg">
              <div className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-wide mb-6 unbounded">Data Platform Support</div>
              <div className="text-[#1E40AF] text-xl md:text-2xl font-semibold tracking-wide mb-6 unbounded">End-to-End Support for Reliable, Scalable Data Systems</div>
              <div className="text-slate-800 text-base md:text-lg font-normal max-w-xl">
                We manage and optimize your data infrastructure — from pipelines to platforms — ensuring always-on performance, security, and reliability.
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-24 text-center font-['Lexend']">Our Support Capabilities</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Platforms We Support</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 unbounded">Keep Your Data Operations Running Smoothly</h2>
            <div className="text-base md:text-lg text-slate-600 mb-6">Your data platform is the foundation of your analytics, AI, and business intelligence. We ensure it stays fast, reliable, and resilient. Our expert teams provide 24/7 operational support, proactive monitoring, and continuous tuning — so you never miss a beat.<br/>From troubleshooting data issues to optimizing pipeline performance, we work as an extension of your team to ensure your data systems deliver consistent value and scale with your business.
            </div>
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Common Support Scenarios</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((uc, i) => {
              const Icon = {
                CheckCircle, TrendingUp, Zap, Cloud, RefreshCw, Database, ShieldCheck
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
                4: Shield
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Let’s Keep Your Data Always-On</h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">Your business depends on reliable data operations — and we're here to make sure they stay that way.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="border-2 border-[#93C5FD] text-[#1E40AF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2563EB]/10 transition-all duration-300" onClick={() => navigate('/schedule-consultation')}>Explore Support Plans</button>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>

  );
};

export default DataPlatformSupport; 