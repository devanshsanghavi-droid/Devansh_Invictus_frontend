import React from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { motion } from "framer-motion";
import { CheckCircle, Zap, Cloud, Code, Layers, Server } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

const apiCapabilities = [
  { icon: CheckCircle, title: "Legacy API Re-engineering", desc: "Refactor outdated SOAP/XML, monolithic, or on-prem APIs into RESTful or GraphQL services built for cloud and mobile-first environments." },
  { icon: Layers, title: "Microservices & Containerized APIs", desc: "Decompose legacy platforms into containerized microservices using Docker, Kubernetes, and service mesh architecture." },
  { icon: Server, title: "API Gateway Setup & Governance", desc: "Implement centralized authentication, rate limiting, throttling, logging, and analytics with platforms like Kong, AWS API Gateway, or Apigee." },
  { icon: Code, title: "GraphQL Adoption", desc: "Introduce GraphQL for flexible, client-driven data access across mobile and frontend teams - reducing over-fetching and under-fetching." },
  { icon: Zap, title: "CI/CD for API Deployment", desc: "Enable rapid deployment, versioning, rollback, and testing pipelines to ship APIs reliably and often." },
  { icon: CheckCircle, title: "Developer Experience (DX)", desc: "Design rich API documentation with Swagger/OpenAPI, Postman collections, and developer portals for easier adoption and onboarding." },
];
const apiTech = [
  "FastAPI", "Express.js", "Spring Boot", "Flask", "AWS API Gateway", "Apigee", "Kong", "Postman", "REST", "GraphQL", "gRPC", "Docker", "Kubernetes", "Istio", "Postman", "Swagger", "API Fortress", "DataDog", "Sentry"
];
const apiUseCases = [
  "Migrating SOAP APIs to REST/GraphQL",
  "Containerizing APIs for elastic scalability",
  "Centralizing API auth & analytics with gateways",
  "Enabling headless CMS with GraphQL APIs",
  "Rapid prototyping and public API publishing",
  "DX enhancement for internal dev teams"
];

const APIModernization: React.FC = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);
  return (
    <>
      <Seo 
        title="API Modernization | Invictus Data"
        description="Modernize legacy APIs with RESTful, GraphQL, and microservices architectures for better performance and scalability."
        keywords="API modernization, REST API, GraphQL, microservices, API design, API development"
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
                <Code className="w-8 h-8 text-slate-900" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Lexend']">API Modernization</h1>
            </div>
            <h2 className="text-2xl md:text-3xl text-[#1E40AF] font-semibold mb-6 font-['Lexend']">Modern APIs. Future-Ready Systems.</h2>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed">
              We modernize legacy APIs and architect next-gen API ecosystems - enabling secure, scalable, and high-performance integrations that power digital transformation.
            </p>
            <button className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-[#2563EB]/20 border-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all duration-300">
              Request an API Audit
            </button>
          </div>
        </section>
        {/* Capabilities Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">Unlock Agility with Modern API Architecture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {apiCapabilities.map((cap, i) => {
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Tools & Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {apiTech.map((tech, i) => (
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
            {apiUseCases.map((uc, i) => (
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Modern APIs. Better Products. Faster Delivery.</h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">Let’s reimagine your APIs for today’s and tomorrow’s needs.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-[#2563EB]/20 border-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all duration-300">Request an API Audit</button>
              <button className="border-2 border-[#93C5FD] text-[#1E40AF] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2563EB]/10 transition-all duration-300">Talk to Our Engineering Team</button>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>

  );
};

export default APIModernization; 