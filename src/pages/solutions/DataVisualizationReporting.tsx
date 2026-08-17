import React, { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { BarChart3, Zap, Layers, Settings, Cloud, Eye, Shield, ArrowRight, Users, Target, TrendingUp, PieChart, Rocket, Briefcase, ClipboardList } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

const tools = [
  { name: "Tableau", category: "BI Tools" },
  { name: "Power BI", category: "BI Tools" },
  { name: "Looker", category: "BI Tools" },
  { name: "Superset", category: "BI Tools" },
  { name: "Metabase", category: "BI Tools" },
  { name: "dbt", category: "Data Layer" },
  { name: "SQL", category: "Data Layer" },
  { name: "BigQuery", category: "Data Layer" },
  { name: "Snowflake", category: "Data Layer" },
  { name: "D3.js", category: "Visualization Libraries" },
  { name: "Chart.js", category: "Visualization Libraries" },
  { name: "Plotly", category: "Visualization Libraries" },
  { name: "Streamlit", category: "Dashboard Frameworks" },
  { name: "Dash", category: "Dashboard Frameworks" },
  { name: "Grafana", category: "Dashboard Frameworks" },
  { name: "Looker Embedded", category: "Embedded Analytics" },
  { name: "Power BI Embedded", category: "Embedded Analytics" },
  { name: "Retool", category: "Embedded Analytics" },
];
const toolCategories = ["All", "BI Tools", "Data Layer", "Visualization Libraries", "Dashboard Frameworks", "Embedded Analytics"];

const capabilities = [
  { icon: BarChart3, title: "Dynamic Dashboard Development", desc: "Design and implement custom dashboards that provide real-time visibility into performance metrics, tailored to your audience — executives, analysts, or operational teams." },
  { icon: Users, title: "Self-Service BI Enablement", desc: "Empower non-technical users with drag-and-drop tools and guided analytics to explore data independently and make informed decisions without engineering support." },
  { icon: Settings, title: "KPI & Metric Frameworks", desc: "Define meaningful business metrics, set benchmarks, and create consistent, trustworthy KPIs across departments using metric layers and governed definitions." },
  { icon: Cloud, title: "Cross-Platform Integration", desc: "Pull data from multiple sources — databases, APIs, cloud tools — into unified visual layers for end-to-end business visibility." },
  { icon: Layers, title: "Interactive Visual Storytelling", desc: "Go beyond static charts with filters, drill-downs, and user-friendly narratives that let users explore the 'why' behind the numbers." },
  { icon: Zap, title: "Performance Optimization", desc: "Ensure fast load times and low latency for dashboards handling large datasets and real-time data streams." },
];

const useCases = [
  { icon: "BarChart3", title: "Executive dashboards with real-time KPIs" },
  { icon: "TrendingUp", title: "Sales & marketing performance trackers" },
  { icon: "PieChart", title: "Finance & revenue reporting" },
  { icon: "ClipboardList", title: "Operational monitoring dashboards" },
  { icon: "Target", title: "Customer journey & funnel visualizations" },
  { icon: "Users", title: "Product analytics and user behavior tracking" },
  { icon: "Rocket", title: "Embedded analytics for SaaS platforms" },
  { icon: "Layers", title: "Self-service reporting for business teams" },
];

const DataVisualizationReporting: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showContactForm, setShowContactForm] = useState(false);
  const filteredTools = selectedCategory === "All" ? tools : tools.filter(t => t.category === selectedCategory);
  const navigate = useNavigate();

  const DataVisualizationImg = "/placeholders/team-collaboration.jpg";

  return (
    <>
      <Seo 
        title="Data Visualization & Reporting | Invictus Data"
        description="Transform data into actionable insights with interactive visualizations and automated reporting solutions."
        keywords="data visualization, reporting, dashboards, analytics visualization, BI reporting, data storytelling"
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
                src={DataVisualizationImg}
                alt="Data Visualization & Reporting"
                className="object-cover w-full h-full rounded-3xl min-h-[340px] max-h-[420px]"
                style={{ objectPosition: 'center' }}
              />
              {/* Overlayed text */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-white/60 to-transparent rounded-3xl">
              </div>
            </div>
            {/* Right: Stat Card */}
            <div className="flex-1 flex flex-col justify-center bg-white rounded-3xl p-10 min-h-[340px] max-h-[420px] shadow-lg">
              <div className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-wide mb-6 unbounded">Data Visualization & Reporting</div>
              <div className="text-slate-900 text-xl md:text-2xl font-semibold tracking-wide mb-6 unbounded">Turning Data Into Clear, Actionable Insights</div>
              <div className="text-slate-800 text-base md:text-lg font-normal max-w-xl">
                Transform complex datasets into intuitive dashboards and interactive reports that empower faster, smarter decision-making across your organization.
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Tools & Platforms We Work With</h2>
          {/* Marquee/looping horizontal scroll */}
          <div className="relative w-full overflow-x-hidden py-6">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white to-transparent" />
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent" />
            <div className="marquee-track flex items-center gap-8 animate-marquee whitespace-nowrap">
              {[...filteredTools, ...filteredTools].map((tool, i) => (
                <span key={tool.name + '-' + i} className="flex items-center justify-center min-w-[160px] h-24 px-8 bg-[#EFF6FF] rounded-[2.5rem] border border-slate-200 shadow-md text-slate-900 text-xl font-semibold">
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
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 unbounded">Make Data Make Sense</h2>
            <div className="text-base md:text-lg text-slate-600 mb-6">We help you unlock the full potential of your data by delivering visually compelling, real-time dashboards and self-service reporting tools. Our visualizations bring clarity to complexity — enabling teams to spot trends, track KPIs, and act on insights without delay.<br/>From executive dashboards to operational reports, we craft solutions that are not only insightful but also beautiful, responsive, and aligned with your business goals.
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Key Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((uc, i) => {
              const Icon = {
                BarChart3, TrendingUp, PieChart, ClipboardList, Target, Users, Rocket, Layers
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

        {/* CTA Footer Section */}
        <section className="w-full py-20 px-6  relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Ready to Make Your Data Speak?</h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">Let us help you create a visual data experience your teams will love and rely on.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="border-2 border-[#93C5FD] text-[#1E40AF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2563EB]/10 transition-all duration-300" onClick={() => navigate('/schedule-consultation')}>Get in Touch</button>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>

  );
};

export default DataVisualizationReporting; 