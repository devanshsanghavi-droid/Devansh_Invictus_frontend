import React, { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { X, Search } from "lucide-react";

interface CaseStudy {
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "360° Customer Data Platform for a Global Retailer",
    client: "Fortune 500 Fashion & Lifestyle Brand",
    industry: "Retail & eCommerce",
    challenge:
      "The client was struggling with fragmented customer data across their online store, retail outlets, CRM, and marketing tools. This data siloing made personalization and campaign targeting inefficient.",
    solution:
      "We built a centralized Customer Data Lake using Snowflake, Apache Kafka, and dbt - integrating data from 8+ systems and enabling real-time identity resolution.",
    outcome: [
      "40% improvement in personalization accuracy",
      "3× faster campaign segmentation",
      "Unified customer profiles accessible across marketing and sales platforms",
    ],
  },
  {
    title: "Real-Time KPI Monitoring for a Logistics Tech Firm",
    client: "SaaS Provider Specializing in Supply Chain Visibility",
    industry: "Logistics & Transportation",
    challenge:
      "The client’s operations relied on delayed reporting from IoT devices and web-based tools, resulting in slow responses to shipment disruptions and SLA breaches.",
    solution:
      "We deployed a streaming data architecture using Kafka, Spark Streaming, and Apache Superset, enabling real-time analytics across warehouse, fleet, and order data.",
    outcome: [
      "KPI dashboards updated every 15 seconds",
      "90% reduction in incident response time",
      "Intelligent routing logic to proactively handle delays",
    ],
  },
  {
    title: "AI-Driven Fraud Detection for a Fintech Client",
    client: "BNPL Fintech Startup",
    industry: "Financial Services",
    challenge:
      "The client faced rising fraud cases including identity spoofing and referral abuse, with no intelligent mechanisms to score user behavior in real time.",
    solution:
      "We built a fraud detection engine using unsupervised ML models (autoencoders, behavior anomaly detection) with real-time scoring pipelines deployed on a containerized cloud setup.",
    outcome: [
      "60% reduction in fraudulent transactions",
      "Risk scoring API integrated into onboarding flow",
      "Enhanced compliance and audit-ready logs",
    ],
  },
];

const categories = ["All", ...Array.from(new Set(caseStudies.map((cs) => cs.industry)))];

const CaseStudies: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const navigate = useNavigate();

  const filteredCaseStudies = caseStudies.filter((cs) => {
    const matchesCategory = selectedCategory === "All" || cs.industry === selectedCategory;
    const matchesSearch =
      cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.client.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Seo
        title="Case Studies | Invictus Data"
        description="Explore real-world success stories and case studies showcasing how Invictus Data transforms businesses with AI and data solutions."
        keywords="case studies, success stories, client testimonials, project examples, AI implementations, data transformation"
      />

      <div className="relative min-h-screen bg-gradient-to-b from-white to-[#EFF6FF] flex flex-col">
        {/* Background Animation */}
        <div className="fixed inset-0 z-0">
          <AnimatedBackground />
        </div>

        <div className="relative z-20">
          <Navbar
            showContactForm={showContactForm}
            setShowContactForm={setShowContactForm}
            logoSize="sm"
          />
        </div>

        <div className="max-w-[1600px] mx-auto px-6 py-24 pt-32 relative z-10 flex-1 w-full">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center font-['Lexend']">
            Case Studies
          </h1>
          <p className="text-xl text-slate-900 mb-12 text-center font-['DM_Sans']">
            Proven Impact. Real Results.
            <br />
            Explore how our data, AI, and platform engineering expertise helps
            businesses scale smarter and faster.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 xl:gap-12">
            {/* Sidebar - Categories */}
            <div className="lg:sticky lg:top-24 lg:self-start h-fit">
              <div className="bg-white backdrop-blur-xl rounded-2xl border border-[#2563EB]/30 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-['Lexend']">
                  Industries
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg font-['DM_Sans'] transition-all ${selectedCategory === category
                          ? "bg-[#2563EB] text-white font-semibold shadow-lg"
                          : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                        }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Content - Search + Grid */}
            <div>
              {/* Search Bar */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-lg bg-white backdrop-blur-xl border border-[#2563EB]/30 text-slate-900 placeholder-white/50 focus:outline-none focus:border-[#2563EB] transition-all font-['DM_Sans']"
                />
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-500" />
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCaseStudies.map((cs, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedCaseStudy(cs)}
                    className="flex flex-col bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 shadow-xl overflow-hidden cursor-pointer hover:bg-slate-100 transition-all duration-300 hover:scale-105 group h-full"
                  >
                    <div className="h-40 bg-gradient-to-br from-[#2563EB]/20 to-white/40 flex items-center justify-center p-6 relative overflow-hidden group-hover:from-[#2563EB]/30 transition-colors">
                      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                      <h3 className="text-lg font-bold text-slate-900 text-center font-['Lexend'] relative z-10 line-clamp-3">
                        {cs.title}
                      </h3>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="mb-2 text-sm text-slate-600 font-['DM_Sans']">
                          <span className="text-[#2563EB] font-semibold block mb-1">Client</span>
                          {cs.client}
                        </div>
                        <div className="text-sm text-slate-600 font-['DM_Sans']">
                          <span className="text-[#2563EB] font-semibold block mb-1">Industry</span>
                          {cs.industry}
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-200">
                        <span className="text-[#2563EB] text-sm font-semibold hover:underline flex items-center gap-1">
                          View Details
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </span>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

              {filteredCaseStudies.length === 0 && (
                <div className="text-center py-12 text-slate-500 font-['DM_Sans']">
                  No case studies found matching your criteria.
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-['Lexend']">Ready to build your success story?</h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">Let’s discuss how we can solve your most pressing data and AI challenges.</p>
            <button className="bg-[#2563EB] text-white border-none px-8 py-3 rounded-xl font-bold hover:bg-[#8A3325] transition-colors" onClick={() => navigate('/contact')}>Contact Us</button>
          </div>

        </div>
      </div>

      {/* Case Study Detail Modal */}
      <Dialog open={!!selectedCaseStudy} onOpenChange={(open) => !open && setSelectedCaseStudy(null)}>
        <DialogContent className="bg-[#1a1a1a] border border-[#2563EB]/30 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold font-['Lexend'] text-[#2563EB] mb-1">
              {selectedCaseStudy?.title}
            </DialogTitle>
            <DialogDescription className="text-slate-500 font-['DM_Sans']">
              {selectedCaseStudy?.client} • {selectedCaseStudy?.industry}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-6 font-['DM_Sans']">
            <div>
              <h4 className="text-[#2563EB] font-bold mb-2 text-lg">Challenge</h4>
              <p className="text-slate-800 leading-relaxed">{selectedCaseStudy?.challenge}</p>
            </div>

            <div>
              <h4 className="text-[#2563EB] font-bold mb-2 text-lg">Solution</h4>
              <p className="text-slate-800 leading-relaxed">{selectedCaseStudy?.solution}</p>
            </div>

            <div>
              <h4 className="text-[#2563EB] font-bold mb-2 text-lg">Outcome</h4>
              <ul className="list-disc pl-5 space-y-2 text-slate-800">
                {selectedCaseStudy?.outcome.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CaseStudies; 
