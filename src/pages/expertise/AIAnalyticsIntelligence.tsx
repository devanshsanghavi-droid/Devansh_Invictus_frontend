import React from "react";
import CustomButton from "@/components/ui/CustomButton";
import { Brain, Sparkles } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";

const AIAnalyticsIntelligence: React.FC = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);
  const expertiseAreas: Array<{
    title: string;
    description: string;
    icon: string;
    href: string;
    featured?: boolean;
    popular?: boolean;
  }> = [
    {
      title: "Data Engineering",
      description: "Build robust data pipelines and infrastructure that scale with your business needs.",
      icon: "database",
      href: "/expertise/ai-analytics/data-engineering"
    },
    {
      title: "Data Science & Machine Learning",
      description: "Advanced analytics and machine learning solutions that drive intelligent decisions.",
      icon: "cpu",
      href: "/expertise/ai-analytics/data-science-ml"
    },
    {
      title: "Data Visualization & Dashboards",
      description: "Transform complex data into actionable insights through stunning visualizations.",
      icon: "bar-chart-3",
      href: "/expertise/ai-analytics/data-visualization"
    },
    {
      title: "Revenue Growth & Customer Analytics",
      description: "Pricing optimization and customer behavior analysis to maximize growth.",
      icon: "trending-up",
      href: "/expertise/ai-analytics/revenue-growth-analytics",
      popular: true
    },
    {
      title: "Finance & Risk Analytics",
      description: "Financial planning and risk analysis powered by predictive modeling.",
      icon: "calculator",
      href: "/expertise/ai-analytics/finance-risk-analytics"
    },
    {
      title: "Digital Commerce & Retail Media",
      description: "E-commerce optimization and retail media strategies that drive conversions.",
      icon: "shopping-cart",
      href: "/expertise/ai-analytics/digital-commerce-retail-media",
      featured: true
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} />
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-10 pt-20">
        {/* Hero Section */}
          <div className="w-full max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#93C5FD] rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-5xl font-bold font-['Lexend'] bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">
                  AI & Analytics Intelligence
                </h1>
              </div>
              
              <p className="text-xl font-['DM_Sans'] text-slate-900 max-w-4xl mx-auto leading-relaxed mb-8">
                Transform your business with intelligent systems powered by data, algorithms, and predictive modeling.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-[#1E40AF] bg-[#2563EB]/10 backdrop-blur-md rounded-full px-6 py-3 border border-[#2563EB]/20">
                <Sparkles className="w-5 h-5" />
                <span className="font-medium font-['Lexend']">6 Specialized Analytics Tracks | Unified by AI & Domain Expertise</span>
              </div>
            </div>

            {/* Expertise Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="group block">
                    <div className="relative h-full bg-white backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg p-8 hover:bg-white hover:border-[#2563EB]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#2563EB]/20">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB]/5 to-[#93C5FD]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Badge */}
                      {(area.featured || area.popular) && (
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                            area.featured 
                              ? 'bg-[#2563EB]/20 text-[#1E40AF] border border-[#2563EB]/30' 
                              : 'bg-[#EFF6FF] text-[#1E40AF] border border-[#2563EB]/20'
                          }`}>
                            {area.featured ? 'Featured' : 'Popular'}
                          </span>
                        </div>
                      )}
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB]/20 to-[#93C5FD]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Brain className="w-8 h-8 text-[#1E40AF] group-hover:text-[#2563EB] transition-colors duration-300" />
                        </div>
                        
                        {/* Content */}
                        <h3 className="text-xl font-semibold font-['Lexend'] text-slate-900 mb-4 group-hover:text-[#1E40AF] transition-colors duration-300">
                          {area.title}
                        </h3>
                        
                        <p className="text-slate-600 font-['DM_Sans'] text-sm leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300">
                          {area.description}
                        </p>
                        
                        {/* Arrow */}
                        <div className="flex items-center text-[#1E40AF] group-hover:text-[#2563EB] transition-colors duration-300">
                          <span className="text-sm font-medium mr-2">Learn More</span>
                          <Sparkles className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center bg-white backdrop-blur-md rounded-2xl border border-[#2563EB]/20 shadow-lg p-12">
              <h2 className="text-3xl font-bold font-['Lexend'] text-slate-900 mb-4">
                Want a 360° Solution?
              </h2>
              <p className="text-slate-600 font-['DM_Sans'] mb-8 max-w-2xl mx-auto">
                Combine multiple analytics tracks for comprehensive business intelligence that drives growth across all departments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button  className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#93C5FD] hover:from-[#1E3A8A]/80 hover:via-[#2563EB]/80 hover:to-[#93C5FD]/80 text-white">
                  Explore All Solutions
                </button>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
};

export default AIAnalyticsIntelligence;
