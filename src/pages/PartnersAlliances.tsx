import React from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { motion } from "framer-motion";
import { Cloud, Database, Brain, Link, Building2, Users } from "lucide-react";
import Seo from "@/components/Seo";

const partners = [
  { category: "Cloud Providers", names: ["AWS", "Microsoft Azure", "Google Cloud"], icon: Cloud },
  { category: "Data Stack Leaders", names: ["Snowflake", "dbt Labs", "Apache Airflow"], icon: Database },
  { category: "AI & ML Platforms", names: ["OpenAI", "Hugging Face", "Vertex AI"], icon: Brain },
  { category: "Integration Tools", names: ["Kafka", "Fivetran", "Segment"], icon: Link },
  { category: "Enterprise Systems", names: ["Salesforce", "SAP", "Shopify"], icon: Building2 },
];

const benefits = [
  "Faster time-to-market for data & AI solutions",
  "Scalable and secure deployments on cloud-native platforms",
  "Seamless integration with modern enterprise tools",
  "Access to innovation, beta features, and co-sell opportunities"
];

const PartnersAlliances: React.FC = () => (
  <>
    <Seo
      title="Partners & Alliances | Invictus Data"
      description="Strategic partnerships and alliances that enable Invictus Data to deliver world-class AI and data engineering solutions."
      keywords="technology partners, strategic alliances, partner ecosystem, technology partnerships, collaboration"
    />
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center py-24 px-6 bg-[#1a1a1a]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#93C5FD] rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-slate-900" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Lexend']">Partners & Alliances</h1>
            </div>
            <h2 className="text-2xl md:text-3xl text-[#1E40AF] font-semibold mb-6 font-['Lexend']">Stronger Together. Smarter by Design.</h2>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed">
              At Invictus, we collaborate with industry leaders and innovative platforms to expand the possibilities of what we can deliver. Our ecosystem of strategic partnerships helps us co-create scalable, future-ready solutions that deliver real business impact.
            </p>
          </div>
        </section>

        {/* Partners Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">🤝 Who We Partner With</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={p.category} className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB]/30 to-[#93C5FD]/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#1E40AF] group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 font-['Lexend']">{p.category}</h3>
                  <ul className="text-base text-slate-700 font-['DM_Sans'] space-y-1">
                    {p.names.map(n => <li key={n}>{n}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full py-24 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">🛠 What These Alliances Enable</h2>
          <ul className="text-lg text-slate-700 font-['DM_Sans'] space-y-3 mb-8 list-disc list-inside max-w-2xl mx-auto">
            {benefits.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-24 px-6 max-w-3xl mx-auto">
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 shadow-xl p-8 flex flex-col items-center">
            <p className="text-lg text-slate-700 italic mb-4 text-center">"Partnerships aren't just business for us - they're how we stay ahead of the curve and deliver better results for clients."</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 px-6 bg-[#1a1a1a] relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col gap-6 items-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-['Lexend']">Want to partner with us?</h2>
            <a href="#" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-[#2563EB]/20 border-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all duration-300">Become a Partner →</a>
          </div>
        </section>
      </div>
    </div>
  </>
);

export default PartnersAlliances;