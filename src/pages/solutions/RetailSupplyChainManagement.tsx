import React from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import CustomButton from "@/components/ui/CustomButton";
import { Truck, BarChart2, Layers, Repeat, Gauge, Users, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const scmCapabilities = [
  { icon: BarChart2, title: "Real-Time Supply Chain Visibility", desc: "Track inventory, orders, shipments, and partner performance with centralized dashboards and alerting systems." },
  { icon: Gauge, title: "Demand Forecasting & Planning", desc: "Use machine learning models and historical trends to accurately predict demand, reduce stockouts, and prevent overstock." },
  { icon: Layers, title: "Order & Inventory Management", desc: "Automate order routing, inventory allocation, and replenishment strategies across warehouses and sales channels." },
  { icon: Users, title: "Supplier Performance Analytics", desc: "Monitor vendor SLAs, fulfillment accuracy, and lead times to make data-backed sourcing decisions." },
  { icon: Truck, title: "Logistics & Fulfillment Optimization", desc: "Route deliveries, manage reverse logistics, and optimize shipping timelines with live data and performance metrics." },
  { icon: Zap, title: "Supply Chain Automation", desc: "Integrate workflows across ERP, WMS, TMS, and eCommerce systems to reduce manual interventions and improve accuracy." }
];
const scmTools = [
  { name: "SAP", category: "ERP Integrations" },
  { name: "NetSuite", category: "ERP Integrations" },
  { name: "Oracle", category: "ERP Integrations" },
  { name: "Shiprocket", category: "Logistics" },
  { name: "Delhivery", category: "Logistics" },
  { name: "ShipStation", category: "Logistics" },
  { name: "AfterShip", category: "Logistics" },
  { name: "Zoho Inventory", category: "Inventory Platforms" },
  { name: "Unicommerce", category: "Inventory Platforms" },
  { name: "Skubana", category: "Inventory Platforms" },
  { name: "Prophet", category: "Forecasting Tools" },
  { name: "Amazon Forecast", category: "Forecasting Tools" },
  { name: "Google AutoML", category: "Forecasting Tools" },
  { name: "Looker", category: "Dashboards" },
  { name: "Power BI", category: "Dashboards" },
  { name: "Superset", category: "Dashboards" }
];
const scmToolCategories = ["All", "ERP Integrations", "Logistics", "Inventory Platforms", "Forecasting Tools", "Dashboards"];
const scmUseCases = [
  "Real-time multi-warehouse inventory sync",
  "Predictive inventory restocking based on sales data",
  "Dynamic order routing based on availability & location",
  "Supply disruption alerts & risk assessment",
  "Freight cost optimization & logistics SLAs",
  "Vendor performance benchmarking"
];

const RetailSupplyChainManagement: React.FC = () => {
  const [toolCategory, setToolCategory] = React.useState("All");
  const filteredTools = toolCategory === "All" ? scmTools : scmTools.filter(t => t.category === toolCategory);
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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Lexend'] mb-4">Supply Chain Management</h1>
            <h2 className="text-2xl md:text-3xl text-[#1E40AF] font-semibold mb-6 font-['Lexend']">Smarter, Streamlined, and Resilient Supply Chains</h2>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed">
              We empower businesses to modernize their supply chain operations with real-time visibility, predictive analytics, and intelligent automation - ensuring agility, accuracy, and cost-efficiency at scale.
            </p>
            <CustomButton size="lg" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white border-none mb-4">
              Schedule a Supply Chain Audit
            </CustomButton>
            <CustomButton size="lg" variant="secondary" className="border-[#2563EB] text-[#1E40AF] hover:bg-[#2563EB]/10">
              Talk to a Logistics Expert
            </CustomButton>
          </div>
        </section>
        <section className="px-8 py-16 max-md:px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {scmCapabilities.map((cap, i) => {
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Technology Stack</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {scmToolCategories.map(cat => (
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
              {scmUseCases.map((uc, i) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-['Lexend']">Make Your Supply Chain a Competitive Advantage</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CustomButton size="lg" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white border-none">Schedule a Supply Chain Audit</CustomButton>
              <CustomButton size="lg" variant="secondary" className="border-[#2563EB] text-[#1E40AF] hover:bg-[#2563EB]/10">Talk to a Logistics Expert</CustomButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RetailSupplyChainManagement; 