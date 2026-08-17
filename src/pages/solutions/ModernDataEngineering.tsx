import React, { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Database, Zap, Layers, Settings, Cloud, Eye, Shield, ArrowRight, Server, Code, BarChart3, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

const DataEngineeringImg = "https://assets.channeliq.ai/invictus-landing/Solutions/DataEngineering.png";

const techStack = [
  { name: "AWS", category: "Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "GCP", category: "Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Azure", category: "Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Fivetran", category: "Data Integration", logo: "https://seeklogo.com/images/F/fivetran-logo-6B6B5B6B6B-seeklogo.com.png" },
  { name: "Airbyte", category: "Data Integration", logo: "https://avatars.githubusercontent.com/u/65683151?s=200&v=4" },
  { name: "Apache NiFi", category: "Data Integration", logo: "https://nifi.apache.org/assets/images/apache-nifi-logo.svg" },
  { name: "dbt", category: "Data Transformation", logo: "https://avatars.githubusercontent.com/u/36370496?s=200&v=4" },
  { name: "Spark", category: "Data Transformation", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
  { name: "SQL", category: "Data Transformation", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Airflow", category: "Orchestration", logo: "https://airflow.apache.org/images/airflow_logo.png" },
  { name: "Prefect", category: "Orchestration", logo: "https://avatars.githubusercontent.com/u/39988180?s=200&v=4" },
  { name: "Snowflake", category: "Data Lake/Warehouse", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/snowflake/snowflake-original.svg" },
  { name: "BigQuery", category: "Data Lake/Warehouse", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  { name: "Redshift", category: "Data Lake/Warehouse", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "Delta Lake", category: "Data Lake/Warehouse", logo: "https://delta.io/images/delta-lake-logo.png" },
  { name: "Kafka", category: "Streaming", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
  { name: "Flink", category: "Streaming", logo: "https://flink.apache.org/img/flink-logo.png" },
  { name: "Spark Streaming", category: "Streaming", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" },
  { name: "Docker", category: "Containers/Infra", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", category: "Containers/Infra", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Terraform", category: "Containers/Infra", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "Python", category: "Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "SQL", category: "Languages", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];
const techCategories = ["All", "Cloud", "Data Integration", "Data Transformation", "Orchestration", "Data Lake/Warehouse", "Streaming", "Containers/Infra", "Languages"];

const capabilities = [
  { icon: Zap, title: "Data Ingestion & Integration", desc: "Streamline data collection from structured, semi-structured, and unstructured sources — in real-time or batch — using scalable, resilient ingestion pipelines." },
  { icon: Layers, title: "Data Transformation & Modeling", desc: "Leverage ELT best practices to clean, enrich, and model your data using modular, reusable workflows — optimized for analytics, ML, and business reporting." },
  { icon: BarChart3, title: "Data Activation", desc: "Operationalize your data by syncing it with business tools and downstream applications for actionable insights and smarter decision-making." },
  { icon: Cloud, title: "Cloud-Native Architecture", desc: "Design data platforms that leverage the best of the cloud (AWS, GCP, Azure) — with serverless components, autoscaling, and infrastructure-as-code." },
  { icon: Eye, title: "Metadata Management & Observability", desc: "Enable full visibility into your data lifecycle with built-in lineage tracking, quality checks, alerts, and real-time monitoring dashboards." },
  { icon: Shield, title: "Security & Compliance", desc: "Implement strong access control, encryption, and data masking to ensure privacy and meet regulatory requirements like GDPR, HIPAA, and SOC2." },
];

const useCases = [
  { icon: "Rocket", title: "Unified analytics platforms", desc: "Integrate data from multiple sources into a single analytics-ready platform for holistic business insights." },
  { icon: "Database", title: "Cloud data warehouse modernization", desc: "Upgrade legacy data warehouses to modern, scalable, cloud-native solutions." },
  { icon: "BarChart3", title: "Near real-time dashboards & alerts", desc: "Deliver up-to-the-minute business intelligence with streaming data pipelines and alerting." },
  { icon: "Settings", title: "ML-ready data pipelines", desc: "Prepare and deliver high-quality data for machine learning and advanced analytics." },
  { icon: "ArrowRight", title: "Reverse ETL & data activation", desc: "Sync analytics data back to business tools for operational use and automation." },
  { icon: "Layers", title: "Data mesh and domain-oriented architectures", desc: "Empower teams with decentralized, domain-driven data ownership and architecture." },
  { icon: "Shield", title: "Data quality monitoring at scale", desc: "Automate data quality checks and monitoring across large, complex data environments." },
  { icon: "Cloud", title: "Compliance-driven data pipelines", desc: "Build pipelines that meet strict regulatory and compliance requirements." },
];

const ModernDataEngineering: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showContactForm, setShowContactForm] = useState(false);
  const filteredTech = selectedCategory === "All" ? techStack : techStack.filter(t => t.category === selectedCategory);
  const navigate = useNavigate();

  return (
    <>
      <Seo 
        title="Modern Data Engineering | Invictus Data"
        description="Build scalable data pipelines, warehouses, and lakes with modern data engineering practices and tools."
        keywords="data engineering, data pipelines, data warehouse, data lake, ETL, data architecture"
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
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex flex-col items-center justify-center py-24 px-6"
        >
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left: Image with overlayed text */}
            <div className="flex-[2] relative flex items-stretch min-h-[340px]">
              <img
                src={DataEngineeringImg}
                alt="Modern Data Engineering"
                className="object-cover w-full h-full rounded-3xl min-h-[340px] max-h-[420px]"
                style={{ objectPosition: 'center' }}
              />
              {/* Overlayed text */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-white/60 to-transparent rounded-3xl">
              </div>
            </div>
            {/* Right: Stat Card */}
            <div className="flex-1 flex flex-col justify-center bg-white rounded-3xl p-10 min-h-[340px] max-h-[420px] shadow-lg">
            <div className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-wide mb-6 unbounded">Modern Data Engineering</div>
            <div className="text-slate-900 text-xl md:text-2xl font-semibold tracking-wide mb-6 unbounded">Cloud-Native Platforms Built for Scale & Speed</div>
              <div className="text-slate-800 text-base md:text-lg font-normal max-w-xl">
              End-to-end data engineering from ingestion to transformation to activation built for analytics, AI, and smarter decisions.
              </div>
            </div>
          </div>
        </motion.section>

        {/* Capabilities Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-24 text-center font-['Lexend']">Our Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[250px] relative"
                >
                  {/* Icon Avatar */}
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#EFF6FF] absolute -top-5 left-5 shadow-md">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">{cap.title}</h3>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">{cap.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Tech Stack We Work With</h2>
          {/* Marquee/looping horizontal scroll */}
          <div className="relative w-full overflow-x-hidden py-6">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white to-transparent" />
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent" />
            <div className="marquee-track flex items-center gap-8 animate-marquee whitespace-nowrap">
              {[...filteredTech, ...filteredTech].map((tech, i) => (
                <span key={tech.name + '-' + i} className="flex items-center justify-center min-w-[160px] h-24 px-8 bg-[#EFF6FF] rounded-[2.5rem] border border-slate-200 shadow-md text-slate-900 text-xl font-semibold">
                  {tech.name}
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 unbounded">Build Modern Data Foundations</h2>
            <div className="text-base md:text-lg text-slate-600 mb-6">We design and implement modern cloud native data platforms that scale with your business, unifying fragmented data pipelines and delivering high quality analytics ready data to empower your teams and drive innovation. Built on automation, scalability, and performance, our modern data engineering practice ensures your infrastructure is future proof, secure, and aligned with your business objectives.
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 80 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, ease: "easeOut" }} 
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center unbounded"
          >
            Common Use Cases
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((uc, i) => {
              const Icon = {
                Rocket, Database, BarChart3, Settings, ArrowRight, Layers, Shield, Cloud
              }[uc.icon];
              return (
                <motion.div 
                  key={uc.title} 
                  initial={{ opacity: 0, y: 40 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }} 
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center bg-white rounded-3xl px-8 py-8 shadow-lg border border-slate-200 relative"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl border-2 border-[#2563EB] mb-4">
                    {Icon && <Icon className="w-6 h-6 text-[#2563EB]" />}
                  </div>
                  <span className="text-slate-900 text-lg md:text-lg font-normal mb-3 unbounded text-center">
                    {uc.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA Footer Section */}
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="w-full py-20 px-6  relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Let’s Build Together</h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">We’ll partner with you to build a modern data foundation that scales with your business and empowers your teams.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="border-2 border-[#2563EB] text-[#1E40AF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#3B82F6]/10 transition-all duration-300" onClick={() => navigate('/schedule-consultation')}>Schedule a Call</button>
            </div>
          </div>
          {/* Subtle animated particles or pattern can be added here if desired */}
        </motion.section>
      </div>
    </div>
    </>

  );
};

export default ModernDataEngineering; 