import React from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import CustomButton from "@/components/ui/CustomButton";
import { Users, Zap, BarChart2, MessageCircle, Layers, Repeat, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";

const cxCapabilities = [
  { icon: Layers, title: "Unified Customer Profiles", desc: "Consolidate customer data from web, mobile, CRM, and offline systems to create 360° profiles that fuel better engagement." },
  { icon: Repeat, title: "Journey Orchestration", desc: "Design, automate, and optimize user journeys across email, SMS, push, social, and in-app - based on real-time behaviors and triggers." },
  { icon: Zap, title: "Personalization & Recommendations", desc: "Use AI/ML to deliver personalized content, product recommendations, and offers tailored to user preferences and intent." },
  { icon: BarChart2, title: "CX Analytics & Feedback Loops", desc: "Track CSAT, NPS, usage behavior, and support interactions to continuously improve experience design and satisfaction." },
  { icon: MessageCircle, title: "CX Automation & Support Integration", desc: "Automate FAQs, live chat, ticketing, and support workflows through AI-driven bots and integrated helpdesk systems." },
  { icon: Star, title: "Campaign & Loyalty Platform Integration", desc: "Connect with marketing automation, loyalty, and CRM tools to deliver consistent branded experiences." }
];
const cxTools = [
  { name: "Segment", category: "CX & CDP Tools" },
  { name: "Salesforce", category: "CX & CDP Tools" },
  { name: "MoEngage", category: "CX & CDP Tools" },
  { name: "Twilio", category: "CX & CDP Tools" },
  { name: "Clevertap", category: "CX & CDP Tools" },
  { name: "Zendesk", category: "Support Tools" },
  { name: "Intercom", category: "Support Tools" },
  { name: "Freshdesk", category: "Support Tools" },
  { name: "Drift", category: "Support Tools" },
  { name: "HubSpot", category: "Marketing Automation" },
  { name: "Mailchimp", category: "Marketing Automation" },
  { name: "ActiveCampaign", category: "Marketing Automation" },
  { name: "Mixpanel", category: "Analytics" },
  { name: "Amplitude", category: "Analytics" },
  { name: "GA4", category: "Analytics" },
  { name: "Hotjar", category: "Analytics" }
];
const cxToolCategories = ["All", "CX & CDP Tools", "Support Tools", "Marketing Automation", "Analytics"];
const cxUseCases = [
  "Unified customer engagement across web, app, and social",
  "Personalized journeys with automated drip campaigns",
  "Dynamic product recommendation engines",
  "Real-time customer feedback capture and response",
  "Smart support bots reducing human ticket load",
  "Loyalty program optimization with CX metrics"
];

const RetailCustomerExperiencePlatforms: React.FC = () => {
  const [toolCategory, setToolCategory] = React.useState("All");
  const filteredTools = toolCategory === "All" ? cxTools : cxTools.filter(t => t.category === toolCategory);
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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Lexend'] mb-4">Customer Experience (CX) Platforms</h1>
            <h2 className="text-2xl md:text-3xl text-[#1E40AF] font-semibold mb-6 font-['Lexend']">Deliver Consistent, Personalized Experiences at Scale</h2>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed">
              We build and integrate customer experience platforms that unify data, automate engagement, and personalize every touchpoint - turning casual users into loyal customers.
            </p>
            <CustomButton size="lg" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white border-none mb-4">
              Explore Our CX Solutions
            </CustomButton>
            <CustomButton size="lg" variant="secondary" className="border-[#2563EB] text-[#1E40AF] hover:bg-[#2563EB]/10">
              Schedule a Platform Demo
            </CustomButton>
          </div>
        </section>
        <section className="px-8 py-16 max-md:px-5">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cxCapabilities.map((cap, i) => {
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Platforms We Work With</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {cxToolCategories.map(cat => (
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
              {cxUseCases.map((uc, i) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-['Lexend']">Turn Customer Interactions Into Long-Term Relationships</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CustomButton size="lg" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white border-none">Explore Our CX Solutions</CustomButton>
              <CustomButton size="lg" variant="secondary" className="border-[#2563EB] text-[#1E40AF] hover:bg-[#2563EB]/10">Schedule a Platform Demo</CustomButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RetailCustomerExperiencePlatforms; 