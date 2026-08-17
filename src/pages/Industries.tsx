import React from "react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import { ShoppingBag, DollarSign, Truck, Factory, BarChart3, Users, Zap, Shield, TrendingUp, Target, Globe, Award } from "lucide-react";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";

const industries = [
  {
    name: "E-commerce",
    description: "Advanced analytics and automation for online storefronts across Shopify, WooCommerce, and Amazon, driving growth and customer retention.",
    icon: ShoppingBag,
    mainMetric: "150%",
    mainMetricLabel: "AVERAGE TRAFFIC INCREASE",
    subText: "We empower digital-first brands with tools that drive visibility, engagement, and conversions across channels.",
    achievements: ["25% increase in sales conversion", "Real-time demand forecasting", "30% uplift in customer retention"],
    technologies: ["Shopify Plus", "Amazon API", "BigQuery"],
    clientCount: "10+ E-commerce Brands",
    gradient: "from-[#2563eb] to-[#1d4ed8]",
    bgColor: "bg-[#1e40af]",
    solutions: ["Funnel Optimization", "Customer Analytics", "Dynamic Pricing", "Inventory Management"],
    href: "/solutions/ecommerce"
  },
  {
    name: "Retail",
    description: "Omnichannel retail intelligence with real-time inventory optimization and supply chain insights for physical and digital storefronts.",
    icon: ShoppingBag,
    mainMetric: "40%",
    mainMetricLabel: "INVENTORY COST REDUCTION",
    subText: "Brick-and-mortar brands rely on us to streamline operations, reduce waste, and align supply with demand.",
    achievements: ["40% reduction in inventory costs", "Optimized store-level stocking", "Integrated POS analytics"],
    technologies: ["BigQuery", "Looker", "Retail ERP Integrations"],
    clientCount: "5+ Enterprise Retailers",
    gradient: "from-[#059669] to-[#047857]",
    bgColor: "bg-[#065f46]",
    solutions: ["Supply Chain Analytics", "Customer Experience", "Mobile Solutions", "AI & Automation"],
    href: "/solutions/retail"
  },
  {
    name: "Finance & Fintech",
    description: "Real-time risk analytics, regulatory compliance, and fraud detection with enterprise-grade security",
    icon: DollarSign,
    mainMetric: "$74M",
    mainMetricLabel: "REVENUE GENERATED",
    subText: "We help generated $74M revenue for our clients around the globe",
    achievements: ["99.9% fraud detection accuracy", "50% faster compliance reporting", "Real-time risk monitoring"],
    technologies: ["Snowflake", "Apache Kafka", "TensorFlow"],
    clientCount: "8+ Financial Institutions",
    gradient: "from-[#3B82F6] to-[#1D4ED8]",
    bgColor: "bg-[#3B82F6]",
    solutions: ["Risk Analytics", "Fraud Detection", "Compliance Automation", "Real-time Monitoring"],
    href: "/solutions/finance"
  },
  {
    name: "Logistics & Supply Chain",
    description: "End-to-end visibility, predictive maintenance, and route optimization with IoT integration",
    icon: Truck,
    mainMetric: "200%",
    mainMetricLabel: "EFFICIENCY IMPROVEMENT",
    subText: "End-to-end supply chain optimization delivering unprecedented operational efficiency gains across global logistics networks.",
    achievements: ["35% reduction in delivery times", "Predictive maintenance savings", "Real-time fleet tracking"],
    technologies: ["AWS IoT", "Apache Spark", "Tableau"],
    clientCount: "10+ Logistics Companies",
    gradient: "from-[#16a34a] to-[#15803d]",
    bgColor: "bg-[#16a34a]",
    solutions: ["Route Optimization", "Predictive Analytics", "IoT Integration", "Real-time Tracking"],
    href: "/solutions/cloud-data-migration"
  }
];

const Industries: React.FC = () => {
  return (
    <>
      <Seo
        title="Industries We Serve | Invictus Data"
        description="Industry-specific AI and data solutions for ecommerce, retail, finance, and logistics. Tailored expertise delivering measurable business outcomes across diverse verticals."
        keywords="ecommerce solutions, retail analytics, finance AI, logistics optimization, industry expertise, vertical solutions, business intelligence"
      />
      <div className="w-full min-h-screen bg-white overflow-hidden relative">
        <div className="fixed inset-0 z-0">
          <AnimatedBackground />
        </div>
        {/* Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>
        <div className="relative z-10 w-full max-w-[1920px] mx-auto pt-24">
          {/* Hero Section */}
          <section className="w-full flex flex-col items-center justify-center py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white backdrop-blur-sm rounded-full px-6 py-2 mb-6
                        border border-slate-200 hover:bg-slate-100 hover:border-[#2563EB]/30 transition-all duration-300"
              >
                <Factory className="w-4 h-4 text-[#2563EB]" />
                <span className="text-sm font-medium text-slate-900">Industry Expertise</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-['Lexend']"
              >
                Industries We Transform
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed"
              >
                Deep domain expertise across diverse verticals with proven track records of delivering measurable business outcomes.
              </motion.p>
            </div>
          </section>

          {/* Industries Grid */}
          <section className="w-full py-16 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {industries.map((industry, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white backdrop-blur-xl rounded-3xl border border-slate-200 
                           hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 
                           transition-all duration-500 overflow-hidden h-[500px]"
                  >
                    <div className={`flex h-full ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                      {/* Gradient Background Section */}
                      <div className="flex-1 relative overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-90`} />
                        <div className="absolute inset-0 bg-black/30" />

                        {/* Content */}
                        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-slate-100 backdrop-blur-sm rounded-xl 
                                         flex items-center justify-center border border-slate-200">
                              <industry.icon className="w-6 h-6 text-slate-900" />
                            </div>
                            <div className="bg-white backdrop-blur-sm rounded-full px-1 py-0.5 border border-slate-200">
                              <span className="text-[11px] font-normal text-slate-900 flex justify-center items-center w-full text-center">{industry.clientCount}</span>
                            </div>
                          </div>

                          <div>
                            {/* This panel sits on a dark gradient - text must be light. */}
                            <div className="text-4xl font-bold text-white mb-2 leading-none">
                              {industry.mainMetric}
                            </div>
                            <div className="text-xs font-semibold text-white/90 uppercase tracking-wide mb-4">
                              {industry.mainMetricLabel}
                            </div>
                            <p className="text-sm text-white/80 leading-relaxed">
                              {industry.subText}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 p-8 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-4 leading-tight">
                            {industry.name}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed mb-6">
                            {industry.description}
                          </p>

                          <div className="space-y-3 mb-6">
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                              Key Solutions
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                              {industry.solutions.map((solution, solutionIndex) => (
                                <div key={solutionIndex} className="flex items-center text-xs text-slate-600">
                                  <div className="w-1 h-1 bg-[#DBEAFE] rounded-full mr-2 flex-shrink-0" />
                                  {solution}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <Link
                          to={industry.href}
                          className="inline-flex items-center gap-2 text-[#1E40AF] text-sm font-medium hover:text-slate-900 transition-colors"
                        >
                          Explore Solutions <BarChart3 className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="w-full py-24 px-6 max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-['Lexend']">
                Why Choose Our Industry Expertise?
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto font-['DM_Sans']">
                We combine deep industry knowledge with cutting-edge technology to deliver solutions that drive real business impact.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Target, title: "Domain Expertise", desc: "Deep understanding of industry-specific challenges and regulatory requirements." },
                { icon: Zap, title: "Proven Results", desc: "Track record of delivering measurable business outcomes across industries." },
                { icon: Shield, title: "Enterprise Security", desc: "Bank-grade security and compliance standards for sensitive data." },
                { icon: Users, title: "Dedicated Teams", desc: "Specialized teams with industry experience and technical expertise." }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#EFF6FF] mb-4">
                      <Icon className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full py-20 px-6 relative overflow-hidden"
          >
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">
                Ready to Transform Your Industry?
              </h2>
              <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">
                Let's discuss how our industry expertise can drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  to="/schedule-consultation"
                  className="bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#2563EB] text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-[#2563EB]/20 border-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
                <Link
                  to="/solutions"
                  className="border-2 border-[#2563EB] text-[#2563EB] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#2563EB]/10 transition-all duration-300"
                >
                  Explore Solutions
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </>
  );
};

export default Industries; 