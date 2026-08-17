import React from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { motion } from "framer-motion";
import { Megaphone, Award, Rocket, BookOpen, Mail } from "lucide-react";
import Seo from "@/components/Seo";

const highlights = [
  {
    icon: Rocket,
    title: "AI Summit: Bangalore Edition",
    desc: 'Our CTO Rafael Herrera spoke on "Scaling Generative AI with Robust Data Foundations" — highlighting how AI-ready pipelines are the backbone of every successful LLM deployment.'
  },
  {
    icon: Rocket,
    title: "Product Launch: Retail Automation Suite",
    desc: "We unveiled a new solution stack for retail operations — including demand forecasting, fraud detection, and omnichannel data orchestration."
  },
  {
    icon: Award,
    title: "Recognition: Fastest-Growing AI Partner (APAC)",
    desc: "Recognized by a leading cloud platform for rapid delivery and engineering excellence in the retail and logistics domain."
  }
];

const thoughtLeadership = [
  '"The New Blueprint for Data-Driven Enterprises" — by Nirjar Sanghavi',
  '"Why AI Projects Fail (and How to Prevent It)" — Panel with Invictus & AWS',
  '"Modernizing APIs for Omnichannel Retail" — Blog Series'
];

const NewsMedia: React.FC = () => (
  <>
    <Seo
      title="News & Media | Invictus Data"
      description="Latest news, press releases, and media coverage about Invictus Data. Stay updated on our innovations and achievements."
      keywords="company news, press releases, media coverage, technology news, AI announcements, data engineering news"
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
                <Megaphone className="w-8 h-8 text-slate-900" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Lexend']">News & Media</h1>
            </div>
            <h2 className="text-2xl md:text-3xl text-[#1E40AF] font-semibold mb-6 font-['Lexend']">What We're Building. Where We're Featured.</h2>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest stories, product milestones, and thought leadership from Invictus.
            </p>
          </div>
        </section>

        {/* Recent Highlights Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">📢 Recent Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((h, i) => {
              const Icon = h.icon;
              return (
                <div key={h.title} className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB]/30 to-[#93C5FD]/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#1E40AF] group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 font-['Lexend']">{h.title}</h3>
                  <p className="text-base text-slate-700 font-['DM_Sans'] leading-relaxed">{h.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Thought Leadership Section */}
        <section className="w-full py-24 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">🖋 Thought Leadership</h2>
          <ul className="text-lg text-slate-700 font-['DM_Sans'] space-y-3 mb-8 list-disc list-inside max-w-2xl mx-auto">
            {thoughtLeadership.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
        </section>

        {/* Media Contact Section */}
        <section className="w-full py-24 px-6 max-w-3xl mx-auto">
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 shadow-xl p-8 flex flex-col items-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 font-['Lexend']">For media inquiries or speaking opportunities:</h3>
            <a href="mailto:media@invictusdata.ai" className="flex items-center gap-2 text-[#1E40AF] text-lg font-semibold hover:underline"><Mail className="w-5 h-5" /> media@invictusdata.ai</a>
          </div>
        </section>
      </div>
    </div>
  </>
);

export default NewsMedia;