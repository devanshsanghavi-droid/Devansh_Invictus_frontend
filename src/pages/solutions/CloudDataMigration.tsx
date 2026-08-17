import React, { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Zap, Cloud, Layers, Settings, Shield, ArrowRight, Server, Code, Database, TrendingUp, RefreshCw, CheckCircle, Users, Award, ClipboardList, ShieldCheck, Rocket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

const tools = [
  { name: "AWS S3", category: "AWS" },
  { name: "Redshift", category: "AWS" },
  { name: "Glue", category: "AWS" },
  { name: "RDS", category: "AWS" },
  { name: "EC2", category: "AWS" },
  { name: "BigQuery", category: "GCP" },
  { name: "Cloud Storage", category: "GCP" },
  { name: "Dataflow", category: "GCP" },
  { name: "Composer", category: "GCP" },
  { name: "Data Lake", category: "Azure" },
  { name: "Synapse", category: "Azure" },
  { name: "Data Factory", category: "Azure" },
  { name: "Blob Storage", category: "Azure" },
  { name: "Snowflake", category: "Hybrid & Multi-cloud" },
  { name: "Databricks", category: "Hybrid & Multi-cloud" },
  { name: "Fivetran", category: "Hybrid & Multi-cloud" },
  { name: "Stitch", category: "Hybrid & Multi-cloud" },
];
const toolCategories = ["All", "AWS", "GCP", "Azure", "Hybrid & Multi-cloud"];

const capabilities = [
  { icon: Settings, title: "Assessment & Strategy", desc: "Analyze existing infrastructure, workloads, and data flows to develop a tailored migration roadmap aligned with your business goals." },
  { icon: Cloud, title: "Cloud Readiness & Planning", desc: "Ensure compatibility, scalability, and compliance for your workloads before migration with detailed dependency mapping and risk analysis." },
  { icon: Zap, title: "Data Migration Execution", desc: "Execute secure, high-speed data transfers using validated methods — minimizing risk, latency, and business impact." },
  { icon: Layers, title: "Application & Pipeline Migration", desc: "Migrate entire data pipelines, ETL workflows, and analytics applications to the cloud, ensuring seamless function continuity." },
  { icon: ArrowRight, title: "Zero-Downtime Cutover", desc: "Implement blue-green or phased deployments with real-time sync and validation to achieve uninterrupted transitions." },
  { icon: Shield, title: "Post-Migration Optimization", desc: "Tune cloud infrastructure, enable monitoring, and set up auto-scaling, cost controls, and disaster recovery for long-term performance." },
];

const useCases = [
  { icon: "Cloud", title: "On-prem to cloud data warehouse migration" },
  { icon: "RefreshCw", title: "Legacy ETL to modern ELT migration" },
  { icon: "Server", title: "Hadoop/Cloudera to cloud-native platforms" },
  { icon: "Layers", title: "Multi-region and multi-cloud replications" },
  { icon: "Zap", title: "Streaming pipeline migrations (Kafka, Spark, Flink)" },
  { icon: "Database", title: "Data lake re-platforming" },
  { icon: "ShieldCheck", title: "Backup & DR migration for compliance" },
];

const whyUs = [
  "Zero-downtime migration strategy",
  "Enterprise-grade data security",
  "Proven playbooks across industries",
  "Certified engineers across all major cloud platforms",
  "Post-migration support & optimization"
];

const CloudDataMigration: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showContactForm, setShowContactForm] = useState(false);
  const filteredTools = selectedCategory === "All" ? tools : tools.filter(t => t.category === selectedCategory);
  const navigate = useNavigate();

  const CloudDataMigrationImg = "https://assets.channeliq.ai/invictus-landing/Solutions/CloudDataMigration.png";

  return (
    <>
      <Seo 
        title="Cloud Data Migration | Invictus Data"
        description="Seamless cloud data migration services. Move your data to AWS, Azure, or GCP with zero downtime."
        keywords="cloud migration, data migration, AWS migration, Azure migration, GCP migration, database migration"
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
                src={CloudDataMigrationImg}
                alt="Cloud Data Migration"
                className="object-cover w-full h-full rounded-3xl min-h-[340px] max-h-[420px]"
                style={{ objectPosition: 'center' }}
              />
              {/* Overlayed text */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-white/60 to-transparent rounded-3xl">
              </div>
            </div>
            {/* Right: Stat Card */}
            <div className="flex-1 flex flex-col justify-center bg-white rounded-3xl p-10 min-h-[340px] max-h-[420px] shadow-lg">
              <div className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-wide mb-6 unbounded">Cloud Data Migration</div>
              <div className="text-[#1E40AF] text-xl md:text-2xl font-semibold tracking-wide mb-6 unbounded">Seamless, Secure Migration with Zero Downtime</div>
              <div className="text-slate-800 text-base md:text-lg font-normal max-w-xl">
              End-to-end cloud data operations — from orchestration to monitoring — for always-on, optimized data systems.
              </div>
          </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-24 text-center font-['Lexend']">Our Migration Capabilities</h2>
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Cloud Platforms We Support</h2>
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 unbounded">Move to the Cloud with Confidence</h2>
            <div className="text-base md:text-lg text-slate-600 mb-6">We specialize in secure, efficient, and disruption-free data migrations — whether you're transitioning from on-prem to cloud, moving between cloud platforms, or modernizing legacy systems. Our migration strategy ensures data integrity, performance continuity, and zero operational downtime.<br/>From planning to execution and post-migration optimization, we handle the entire lifecycle so your teams can focus on growth, not infrastructure.
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Migration Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((uc, i) => {
              const Icon = {
                Cloud, RefreshCw, Server, Layers, Zap, Database, ShieldCheck
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
                0: RefreshCw,
                1: Shield,
                2: Award,
                3: Users,
                4: CheckCircle
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Ready to Migrate Smarter?</h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">Let’s plan your cloud journey — safely, securely, and without downtime.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="border-2 border-[#93C5FD] text-[#1E40AF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2563EB]/10 transition-all duration-300" onClick={() => navigate('/schedule-consultation')}>Let's Talk</button>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>

  );
};

export default CloudDataMigration; 