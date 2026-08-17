import React from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import CustomButton from "@/components/ui/CustomButton";
import { Zap, BarChart2, Layers, Repeat, DollarSign, Users, Eye, Shield } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const aiCapabilities = [
  { icon: BarChart2, title: "AI-Powered Demand Forecasting", desc: "Predict future demand by analyzing past sales, seasonality, events, and promotions - reducing stockouts and overstock." },
  { icon: Repeat, title: "Retail Process Automation", desc: "Automate repetitive tasks like product tagging, inventory updates, campaign rollouts, and support ticket handling." },
  { icon: DollarSign, title: "Dynamic Pricing & Promotion Optimization", desc: "Leverage real-time data to adjust prices and offers dynamically based on demand, inventory levels, and competitor activity." },
  { icon: Users, title: "Personalized Product Recommendations", desc: "Serve customers personalized suggestions using AI models trained on behavior, preferences, and purchase history." },
  { icon: Eye, title: "Visual Search & Smart Filters", desc: "Implement AI-based visual search and intelligent filtering to improve product discovery and UX." },
  { icon: Shield, title: "Fraud Detection & Loss Prevention", desc: "Detect anomalies in transactions and logistics to prevent fraud, reduce shrinkage, and safeguard operations." }
];
const aiTools = [
  { name: "Scikit-learn", category: "ML Models" },
  { name: "TensorFlow", category: "ML Models" },
  { name: "Prophet", category: "ML Models" },
  { name: "XGBoost", category: "ML Models" },
  { name: "Python", category: "Automation" },
  { name: "Zapier", category: "Automation" },
  { name: "Power Automate", category: "Automation" },
  { name: "UiPath", category: "RPA" },
  { name: "Automation Anywhere", category: "RPA" },
  { name: "AWS Personalize", category: "Recommendation Engines" },
  { name: "Google Recommendations AI", category: "Recommendation Engines" },
  { name: "Google Vision", category: "Vision AI" },
  { name: "Amazon Rekognition", category: "Vision AI" },
  { name: "OpenCV", category: "Vision AI" },
  { name: "Snowflake", category: "Data Platforms" },
  { name: "BigQuery", category: "Data Platforms" },
  { name: "dbt", category: "Data Platforms" },
  { name: "Airflow", category: "Data Platforms" }
];
const aiToolCategories = ["All", "ML Models", "Automation", "RPA", "Recommendation Engines", "Vision AI", "Data Platforms"];
const aiUseCases = [
  "AI-driven merchandising strategy",
  "Automated reordering and stock adjustments",
  "Real-time pricing rules based on demand elasticity",
  "Chatbots and AI support agents for customer service",
  "Visual product match (upload image, find similar)",
  "Fraud flagging in order and return data"
];

const RetailAIAutomation: React.FC = () => {
  const [toolCategory, setToolCategory] = React.useState("All");
  const filteredTools = toolCategory === "All" ? aiTools : aiTools.filter(t => t.category === toolCategory);
  const [showContactForm, setShowContactForm] = React.useState(false);
  return (
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="relative z-20">
        <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} logoSize="sm" />
      </div>
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        <section className="px-8 py-20 max-md:px-5 max-md:py-12 bg-[#1a1a1a]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Lexend'] mb-4">AI & Automation for Retail</h1>
            <h2 className="text-2xl md:text-3xl text-[#1E40AF] font-semibold mb-6 font-['Lexend']">Smarter Retail, Powered by AI</h2>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed">
              We empower retailers with AI-driven insights, automation, and intelligent workflows - transforming operations, personalization, and decision-making across the retail value chain.
            </p>
            <CustomButton size="lg" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white border-none mb-4">
              Book a Retail AI Consultation
            </CustomButton>
            <CustomButton size="lg" variant="secondary" className="border-[#2563EB] text-[#1E40AF] hover:bg-[#2563EB]/10">
              See AI Use Cases in Action
            </CustomButton>
          </div>
        </section>
        <section className="px-8 py-16 max-md:px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiCapabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <div key={cap.title} className="bg-white border border-slate-200 rounded-xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#93C5FD] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 font-['Lexend']">{cap.title}</h3>
                    <p className="text-slate-600 text-sm font-['DM_Sans']">{cap.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="px-8 py-16 max-md:px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Technologies & Tools</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {aiToolCategories.map(cat => (
                <button key={cat} onClick={() => setToolCategory(cat)} className={`px-4 py-2 rounded-full font-semibold text-sm border transition-all duration-200 ${toolCategory === cat ? "bg-[#2563EB] text-white border-[#2563EB]" : "bg-white text-[#DBEAFE] border-[#93C5FD]/30 hover:bg-[#2563EB]/20"}`}>
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {filteredTools.map((tool, i) => (
                <span key={tool.name} className="px-5 py-2 bg-gradient-to-r from-[#2563EB]/20 to-[#93C5FD]/20 text-[#DBEAFE] rounded-full text-lg font-semibold border border-[#2563EB]/30 shadow-md hover:scale-110 hover:bg-[#2563EB]/30 hover:text-white transition-all duration-300 cursor-pointer">
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </section>
        <section className="px-8 py-16 max-md:px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aiUseCases.map((uc, i) => (
                <div key={uc} className="flex flex-col items-center justify-center bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 shadow-xl p-8">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2" className="mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-slate-700 font-['DM_Sans'] text-lg text-center">{uc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="px-8 py-16 max-md:px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-['Lexend']">Ready to Automate and Scale with AI?</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CustomButton size="lg" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white border-none">Book a Retail AI Consultation</CustomButton>
              <CustomButton size="lg" variant="secondary" className="border-[#2563EB] text-[#1E40AF] hover:bg-[#2563EB]/10">See AI Use Cases in Action</CustomButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RetailAIAutomation; 