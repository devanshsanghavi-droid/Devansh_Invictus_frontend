import React from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import CustomButton from "@/components/ui/CustomButton";
import { Smartphone, Users, Truck, Layers, ShoppingCart, Repeat, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const mobilityCapabilities = [
  { icon: ShoppingCart, title: "Mobile Point-of-Sale (mPOS) Solutions", desc: "Enable in-store teams to check out customers, manage inventory, and handle returns on the go - improving service speed and flexibility." },
  { icon: Users, title: "Sales Associate Enablement Apps", desc: "Equip floor teams with real-time product data, customer history, and recommendations to drive in-store conversions." },
  { icon: Truck, title: "Field Force & Retail Ops Apps", desc: "Custom mobile apps for territory management, route planning, inventory audits, and reporting - all offline-capable." },
  { icon: Star, title: "Customer Loyalty & Shopping Apps", desc: "Branded apps for consumers with features like offers, wishlists, push notifications, digital wallets, and store locators." },
  { icon: Layers, title: "Order Management & Fulfillment", desc: "Mobile dashboards for order tracking, stock allocation, BOPIS (Buy Online, Pick Up In-Store), and delivery workflows." },
  { icon: Smartphone, title: "Cross-Platform Development", desc: "Build once, deploy anywhere - using React Native, Flutter, and PWA to serve iOS, Android, and in-store kiosks." }
];
const mobilityTools = [
  { name: "Flutter", category: "Mobile Frameworks" },
  { name: "React Native", category: "Mobile Frameworks" },
  { name: "Kotlin", category: "Mobile Frameworks" },
  { name: "Swift", category: "Mobile Frameworks" },
  { name: "Firebase", category: "Backend" },
  { name: "Supabase", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "Square", category: "APIs & Integrations" },
  { name: "Shopify POS", category: "APIs & Integrations" },
  { name: "CRM", category: "APIs & Integrations" },
  { name: "ERP", category: "APIs & Integrations" },
  { name: "Fastlane", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Firebase App Distribution", category: "DevOps" }
];
const mobilityToolCategories = ["All", "Mobile Frameworks", "Backend", "APIs & Integrations", "DevOps"];
const mobilityUseCases = [
  "Mobile checkout for pop-ups and events",
  "Associate app for large-format retail",
  "Branded app for loyalty and engagement",
  "Retail ops tracking for regional managers",
  "Store analytics and feedback capture via tablets",
  "PWA for seamless cross-device shopping"
];

const RetailMobilitySolutions: React.FC = () => {
  const [toolCategory, setToolCategory] = React.useState("All");
  const filteredTools = toolCategory === "All" ? mobilityTools : mobilityTools.filter(t => t.category === toolCategory);
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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Lexend'] mb-4">Retail Mobility Solutions</h1>
            <h2 className="text-2xl md:text-3xl text-[#1E40AF] font-semibold mb-6 font-['Lexend']">Anywhere. Anytime. Always Connected Retail.</h2>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed">
              We build mobile-first retail solutions that empower staff, engage customers, and optimize operations - across devices, locations, and use cases.
            </p>
            <CustomButton size="lg" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white border-none mb-4">
              Explore Our Mobile Solutions
            </CustomButton>
            <CustomButton size="lg" variant="secondary" className="border-[#2563EB] text-[#1E40AF] hover:bg-[#2563EB]/10">
              Schedule a Demo
            </CustomButton>
          </div>
        </section>
        <section className="px-8 py-16 max-md:px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mobilityCapabilities.map((cap, i) => {
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Tech Stack & Platforms</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {mobilityToolCategories.map(cat => (
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
              {mobilityUseCases.map((uc, i) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-['Lexend']">Mobility That Moves Retail Forward</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CustomButton size="lg" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white border-none">Explore Our Mobile Solutions</CustomButton>
              <CustomButton size="lg" variant="secondary" className="border-[#2563EB] text-[#1E40AF] hover:bg-[#2563EB]/10">Schedule a Demo</CustomButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RetailMobilitySolutions; 