import React from "react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import { FileText, FileCheck, PenTool, Download, ExternalLink, Calendar, User, ArrowRight, BookOpen, TrendingUp, Lightbulb, Award } from "lucide-react";
import { motion } from "framer-motion";
import Seo from "@/components/Seo";

// Resource image URLs from S3
const WhyMostDataProjectsFail = "https://assets.channeliq.ai/invictus-landing/Resources/WhyMostDataProjectsFail.png";
const Sre = "https://assets.channeliq.ai/invictus-landing/Resources/Sre.png";
const ModernizingLegacyAPIs = "https://assets.channeliq.ai/invictus-landing/Resources/ModernizingLegacyAPIs.png";
const BuildingaStreamingDataStack = "https://assets.channeliq.ai/invictus-landing/Resources/BuildingaStreamingDataStack.png";
const DesigningAIReadyDataPlatforms = "https://assets.channeliq.ai/invictus-landing/Resources/DesigningAIReadyDataPlatforms.png";
const LLMsinEnterprise = "https://assets.channeliq.ai/invictus-landing/Resources/LLMsinEnterprise.png";

const resourceCategories = [
  {
    name: "Case Studies",
    description: "Real-world success stories and implementations",
    icon: FileText,
    href: "/case-studies",
    color: "from-[#2563eb] to-[#1d4ed8]",
    bgColor: "bg-[#1e40af]"
  },
  {
    name: "Whitepapers",
    description: "In-depth research and technical insights",
    icon: FileCheck,
    href: "/whitepapers",
    color: "from-[#059669] to-[#047857]",
    bgColor: "bg-[#065f46]"
  },
  {
    name: "Blog & Insights",
    description: "Latest trends and perspectives from our experts",
    icon: Lightbulb,
    href: "/blog-insights",
    color: "from-[#1E3A8A] to-[#2563EB]",
    bgColor: "bg-[#1E3A8A]"
  }
];

const downloadableResources = [
  {
    title: "Why Most Data Projects Fail",
    description: "Learn the common pitfalls and how to avoid them in your data initiatives",
    image: WhyMostDataProjectsFail,
    category: "Data Analytics",
    downloadUrl: "#",
    date: "2024",
    author: "Invictus Team"
  },
  {
    title: "Site Reliability Engineering Guide",
    description: "Best practices for building reliable, scalable systems",
    image: Sre,
    category: "Engineering",
    downloadUrl: "#",
    date: "2024",
    author: "Invictus Team"
  },
  {
    title: "Modernizing Legacy APIs",
    description: "Strategies for transforming legacy systems into modern, scalable APIs",
    image: ModernizingLegacyAPIs,
    category: "Engineering",
    downloadUrl: "#",
    date: "2024",
    author: "Invictus Team"
  },
  {
    title: "LLMs in Enterprise",
    description: "Implementing large language models in enterprise environments",
    image: LLMsinEnterprise,
    category: "AI & ML",
    downloadUrl: "#",
    date: "2024",
    author: "Invictus Team"
  },
  {
    title: "Designing AI-Ready Data Platforms",
    description: "Architecture patterns for data platforms that support AI workloads",
    image: DesigningAIReadyDataPlatforms,
    category: "Data Analytics",
    downloadUrl: "#",
    date: "2024",
    author: "Invictus Team"
  },
  {
    title: "Building a Streaming Data Stack",
    description: "Real-time data processing and analytics architecture",
    image: BuildingaStreamingDataStack,
    category: "Data Analytics",
    downloadUrl: "#",
    date: "2024",
    author: "Invictus Team"
  }
];

const featuredInsights = [
  {
    title: "The Future of Data Engineering",
    excerpt: "How modern data platforms are evolving to support AI and real-time analytics",
    category: "Data Analytics",
    readTime: "5 min read",
    date: "Dec 2024"
  },
  {
    title: "AI Strategy for Enterprise",
    excerpt: "Building a comprehensive AI strategy that aligns with business objectives",
    category: "AI & ML",
    readTime: "7 min read",
    date: "Nov 2024"
  },
  {
    title: "Cloud Migration Best Practices",
    excerpt: "Lessons learned from successful cloud migration projects",
    category: "Engineering",
    readTime: "6 min read",
    date: "Oct 2024"
  }
];

const Resources: React.FC = () => {
  return (
    <>
      <Seo 
        title="Resources | Invictus Data"
        description="Access case studies, whitepapers, and insights on AI, data engineering, and digital transformation from Invictus Data experts."
        keywords="AI resources, data engineering insights, case studies, whitepapers, technology resources, business intelligence"
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
              <BookOpen className="w-4 h-4 text-[#2563EB]" />
              <span className="text-sm font-medium text-slate-900">Knowledge Hub</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-['Lexend']"
            >
              Resources & Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed"
            >
              Access our latest research, case studies, and thought leadership content to stay ahead in the digital transformation journey.
            </motion.p>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="w-full py-16 px-6 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']"
          >
            Explore Our Resources
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resourceCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link
                    to={category.href}
                    className="block bg-white backdrop-blur-xl rounded-3xl border border-slate-200 
                             hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 
                             transition-all duration-500 overflow-hidden h-[300px]"
                  >
                    <div className={`h-full bg-gradient-to-br ${category.color} p-8 flex flex-col justify-between`}>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-12 h-12 bg-slate-100 backdrop-blur-sm rounded-xl 
                                       flex items-center justify-center border border-slate-200">
                          <Icon className="w-6 h-6 text-slate-900" />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                          {category.name}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          {category.description}
                        </p>
                        <div className="flex items-center gap-2 text-slate-800 text-sm font-medium">
                          Explore <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Downloadable Resources */}
        <section className="w-full py-16 px-6 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']"
          >
            Downloadable Resources
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {downloadableResources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white backdrop-blur-xl rounded-3xl border border-slate-200 
                         hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 
                         transition-all duration-500 overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-[#2563EB]/20 text-[#2563EB] text-xs font-medium rounded-full">
                      {resource.category}
                    </span>
                    <span className="text-slate-500 text-xs">{resource.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  {/* <div className="flex items-center justify-between">
                    <span className="text-slate-500 text-xs">By {resource.author}</span>
                    <button className="flex items-center gap-2 text-[#1E40AF] text-sm font-medium hover:text-slate-900 transition-colors">
                      <Download className="w-4 h-4" />
                      Download
                    </button>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Insights */}
        <section className="w-full py-16 px-6 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']"
          >
            Featured Insights
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredInsights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white backdrop-blur-xl rounded-3xl border border-slate-200 p-6 
                         hover:scale-[1.02] hover:shadow-2xl hover:shadow-black/20 
                         transition-all duration-500"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#2563EB]/20 text-[#2563EB] text-xs font-medium rounded-full">
                    {insight.category}
                  </span>
                  <span className="text-slate-500 text-xs">{insight.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {insight.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-xs">{insight.date}</span>
                  <button className="flex items-center gap-2 text-[#1E40AF] text-sm font-medium hover:text-slate-900 transition-colors">
                    Read More <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
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
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">
              Subscribe to our newsletter for the latest research, insights, and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/case-studies"
                className="border-2 border-[#2563EB] text-[#2563EB] px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#2563EB]/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
              <Link
                to="/blog-insights"
                className="bg-[#2563EB] text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-[#1E40AF] transition-all duration-300 shadow-lg shadow-[#2563EB]/20"
              >
                Explore Blog
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
    </>

  );
};

export default Resources; 