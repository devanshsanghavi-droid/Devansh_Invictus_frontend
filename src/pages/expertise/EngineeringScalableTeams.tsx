import React from "react";
import CustomButton from "@/components/ui/CustomButton";
import { Code, Zap } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";

const EngineeringScalableTeams: React.FC = () => {
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
      title: "Product Engineering (Web, Mobile, SaaS)",
      description: "Full-stack development across platforms with modern frameworks and best practices.",
      icon: "smartphone",
      href: "/expertise/engineering/product-engineering"
    },
    {
      title: "Custom AI Tool Development",
      description: "Bespoke AI solutions and tool development that integrate seamlessly with your workflows.",
      icon: "wrench",
      href: "/expertise/engineering/custom-ai-tool-development"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud-native architectures that grow with your business demands.",
      icon: "cloud",
      href: "/expertise/engineering/cloud-infrastructure"
    },
    {
      title: "DevOps & MLOps",
      description: "Continuous integration and ML operations for streamlined deployment pipelines.",
      icon: "settings",
      href: "/expertise/engineering/devops-mlops"
    },
    {
      title: "Customer Success & Operations",
      description: "Support and operational excellence that ensures customer satisfaction and retention.",
      icon: "headphones",
      href: "/expertise/engineering/customer-success-operations"
    },
    {
      title: "Tech Hiring & Team Augmentation",
      description: "Talent acquisition and team scaling with high-performance engineers and specialists.",
      icon: "users",
      href: "/expertise/engineering/tech-hiring-team-augmentation",
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
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-5xl font-bold font-['Lexend'] bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#93C5FD] bg-clip-text text-transparent">
                  Engineering & Scalable Teams
                </h1>
              </div>
              
              <p className="text-xl font-['DM_Sans'] text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Accelerate innovation with custom AI tools, product development, and high-performing teams at scale.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-[#1E40AF] bg-[#2563EB]/10 backdrop-blur-md rounded-full px-6 py-3 border border-[#2563EB]/20">
                <Zap className="w-5 h-5" />
                <span className="font-medium font-['Lexend']">From MVPs to full-stack products - engineered with precision.</span>
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
                          <Code className="w-8 h-8 text-[#1E40AF] group-hover:text-[#2563EB] transition-colors duration-300" />
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
                          <Zap className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
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
                Combine multiple engineering capabilities for end-to-end product development and team augmentation solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CustomButton size="lg" className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#93C5FD] hover:from-[#1E3A8A]/80 hover:via-[#2563EB]/80 hover:to-[#93C5FD]/80 text-white">
                  Explore All Solutions
                </CustomButton>
                <CustomButton variant="secondary" size="lg" className="border-[#2563EB] text-[#1E40AF] hover:bg-[#2563EB]/10">
                  Let's Talk
                </CustomButton>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky CTA */}
        <div className="fixed bottom-6 right-6 z-50">
          <CustomButton className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#93C5FD] shadow-2xl shadow-[#2563EB]/20 hover:scale-105 transition-transform duration-300 text-white">
            Let's Talk
          </CustomButton>
        </div>
      </div>
  );
};

export default EngineeringScalableTeams;
