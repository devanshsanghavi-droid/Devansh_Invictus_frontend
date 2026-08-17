import React from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "@/components/ui/CustomButton";
import { Database, Brain, Cloud, Code, ShoppingCart, BarChart3 } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

const Solutions: React.FC = () => {
  const navigate = useNavigate();
  const solutions = [
    {
      title: "Data & Analytics",
      description: "Build your data foundation, unlock actionable insights, and drive business decisions with confidence.",
      icon: Database,
      href: "/solutions/data-analytics", 
      featured: true
    },
    {
      title: "AI & Machine Learning",
      description: "Build intelligent systems that learn from data and unlock exponential outcomes.",
      icon: Brain,
      href: "/solutions/ai-ml"
    },
    {
      title: "Cloud & Infrastructure",
      description: "Design scalable, secure, and cost-efficient cloud infrastructure with top-tier DevOps practices.",
      icon: Cloud,
      href: "/solutions/cloud-data-migration"
    },
    {
      title: "Product Engineering",
      description: "Build robust web, mobile, and SaaS applications with speed, precision, and scale.",
      icon: Code,
      href: "/solutions/product-design-development"
    },
    {
      title: "Digital Commerce",
      description: "Grow your online business using insights-driven digital shelf management and retail media.",
      icon: ShoppingCart,
      href: "/solutions/digital-commerce",
      popular: true
    },
    {
      title: "Custom Dashboards & BI",
      description: "Tell better stories with real-time dashboards tailored to your KPIs, roles, and decisions.",
      icon: BarChart3,
      href: "/solutions/custom-dashboards-bi"
    }
  ];

  return (
    <>
      <Seo 
        title="Solutions | Invictus Data"
        description="Comprehensive AI and data engineering solutions for modern businesses. From data analytics to cloud infrastructure and product engineering."
        keywords="AI solutions, data engineering solutions, cloud solutions, enterprise solutions, technology services"
      />
      
    <>
      <Navbar />
      <div className="w-full min-h-screen bg-white overflow-hidden relative">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <AnimatedBackground />
        </div>
        <div className="relative z-10 w-full max-w-[1920px] mx-auto">
          {/* Hero Section */}
          <section className="px-8 py-20 max-md:px-5 max-md:py-12">
            <div className="max-w-4xl mx-auto text-center  border border-[#2563EB]/20 rounded-2xl shadow-2xl p-8">
              <h1 className="text-6xl font-bold text-slate-900 mb-6 max-md:text-4xl max-sm:text-3xl font-['Lexend']">
                Solutions
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-md:text-lg font-['DM_Sans']">
                Comprehensive technology solutions designed to transform your business and unlock new possibilities
              </p>
            </div>
          </section>

          {/* Solutions Grid */}
          <section className="px-8 py-16 max-md:px-5">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solutions.map((solution, index) => {
                  const IconComponent = solution.icon;
                  return (
                    <Link
                      key={index}
                      to={solution.href}
                      className="group relative bg-slate-50/95 border border-[#2563EB]/20 rounded-xl p-6 hover:bg-[#2563EB]/10 hover:border-[#2563EB]/40 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <div className="absolute top-4 right-4">
                        {solution.featured && (
                          <span className="px-2 py-1 text-xs font-medium bg-[#2563EB]/20 text-[#2563EB] border border-[#2563EB]/30 rounded-full">
                            Featured
                          </span>
                        )}
                        {solution.popular && (
                          <span className="px-2 py-1 text-xs font-medium bg-[#3B82F6]/20 text-[#3B82F6] border border-[#3B82F6]/30 rounded-full">
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#3B82F6] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-slate-900" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3 font-['Lexend'] group-hover:text-[#2563EB] transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed font-['DM_Sans']">
                        {solution.description}
                      </p>
                      <div className="mt-4 text-[#2563EB] text-sm font-medium group-hover:text-[#3B82F6] transition-colors">
                        Learn more →
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-8 py-16 max-md:px-5">
            <div className="max-w-4xl mx-auto text-center bg-slate-50/95 border border-[#2563EB]/20 rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 font-['Lexend']">
                Need a Custom Solution?
              </h2>
              <p className="text-slate-600 mb-6 font-['DM_Sans']">
                Our experts can design a tailored approach that combines multiple solutions to meet your unique business needs.
              </p>
              <div className="flex gap-4 justify-center max-sm:flex-col">
                <button
                  className="bg-[#2563EB] p-4 text-white border-none rounded-3xl"
                  onClick={() => navigate('/schedule-consultation')}
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
    </>

  );
};

export default Solutions;
