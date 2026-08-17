import React from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Cloud, Code, Layers, Server } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

const automationCapabilities = [
  { icon: Zap, title: "Workflow Automation", desc: "Digitize and streamline business workflows using tools like Zapier, Make (Integromat), or Camunda — across marketing, HR, finance, and sales." },
  { icon: CheckCircle, title: "Robotic Process Automation (RPA)", desc: "Use bots to automate rule-based tasks like data entry, invoice processing, and report generation using platforms like UiPath, Automation Anywhere, or Power Automate." },
  { icon: Layers, title: "Low-Code & No-Code Integrations", desc: "Enable rapid workflow automation and app creation using platforms like Retool, OutSystems, and Glide without writing extensive code." },
  { icon: Cloud, title: "AI-Driven Process Intelligence", desc: "Analyze workflow data and recommend automation opportunities using AI and process mining tools." },
  { icon: Server, title: "Human-in-the-Loop Systems", desc: "Blend automation with human review for tasks like lead qualification, content moderation, or financial approvals." },
  { icon: Code, title: "Cross-System Integration", desc: "Connect legacy systems, CRMs, ERPs, and third-party apps using custom APIs or pre-built connectors." },
];
const automationTech = [
  "UiPath", "Power Automate", "Automation Anywhere", "Zapier", "Make", "n8n", "Camunda", "Retool", "OutSystems", "Glide", "Appgyver", "OpenAI APIs", "AWS Textract", "Google AutoML", "Webhooks", "REST APIs", "GraphQL", "OAuth2"
];
const automationUseCases = [
  "Auto-routing service tickets and approvals",
  "Invoice digitization and reconciliation",
  "Auto-syncing CRM and marketing tools",
  "Lead enrichment and qualification bots",
  "Chatbots for customer support",
  "Onboarding workflows for employees or vendors"
];

const DigitalAutomation: React.FC = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);
  return (
    <>
      <Seo 
        title="Digital Automation | Invictus Data"
        description="Automate business processes with RPA, workflow automation, and intelligent automation solutions."
        keywords="digital automation, RPA, workflow automation, process automation, business automation, intelligent automation"
      />
      
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="relative z-20">
        <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} logoSize="sm" />
      </div>
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center py-24 px-6 bg-[#1a1a1a]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#93C5FD] rounded-2xl flex items-center justify-center shadow-lg">
                <Zap className="w-8 h-8 text-slate-900" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Lexend']">Digital Automation</h1>
            </div>
            <h2 className="text-2xl md:text-3xl text-[#1E40AF] font-semibold mb-6 font-['Lexend']">Automate Processes. Accelerate Growth.</h2>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed">
              We help businesses automate workflows, tasks, and operations — reducing manual effort, improving accuracy, and boosting speed through low-code, AI, and RPA-powered automation.
            </p>
            <button className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-[#2563EB]/20 border-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all duration-300">
              Explore Automation Opportunities
            </button>
          </div>
        </section>
        {/* Capabilities Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">From Repetition to Optimization</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div key={cap.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                  className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB]/30 to-[#93C5FD]/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#1E40AF] group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 font-['Lexend']">{cap.title}</h3>
                  <p className="text-base text-slate-600 font-['DM_Sans'] leading-relaxed">{cap.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>
        {/* Tech Stack Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Tools & Platforms</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {automationTech.map((tech, i) => (
              <span key={tech} className="px-5 py-2 bg-gradient-to-r from-[#2563EB]/20 to-[#93C5FD]/20 text-[#DBEAFE] rounded-full text-lg font-semibold border border-[#2563EB]/30 shadow-md hover:scale-110 hover:bg-[#2563EB]/30 hover:text-white transition-all duration-300 cursor-pointer">
                {tech}
              </span>
            ))}
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="w-full py-24 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {automationUseCases.map((uc, i) => (
              <div key={uc} className="flex flex-col items-center justify-center bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 shadow-xl p-8">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2" className="mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="text-slate-700 font-['DM_Sans'] text-lg text-center">{uc}</span>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Footer Section */}
        <section className="w-full py-20 px-6 bg-[#1a1a1a] relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Let Your Business Work Smarter, Not Harder</h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">Automate what's slowing you down — and scale what matters.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-[#2563EB]/20 border-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all duration-300">Explore Automation Opportunities</button>
              <button className="border-2 border-[#93C5FD] text-[#1E40AF] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2563EB]/10 transition-all duration-300">Schedule a Discovery Session</button>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>

  );
};

export default DigitalAutomation; 