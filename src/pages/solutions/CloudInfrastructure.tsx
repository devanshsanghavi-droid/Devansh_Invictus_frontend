import React from "react";
import CustomButton from "@/components/ui/CustomButton";
import { Cloud, GitBranch, Boxes, Shield, Monitor } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Seo from "@/components/Seo";

const CloudInfrastructure: React.FC = () => {
  const capabilities = [
    {
      icon: Cloud,
      title: "Cloud Architecture (AWS, Azure, GCP)",
      description: "Multi-cloud and hybrid solutions designed for scalability and performance"
    },
    {
      icon: GitBranch,
      title: "DevOps & CI/CD Pipelines",
      description: "Automated deployment pipelines and continuous integration workflows"
    },
    {
      icon: Boxes,
      title: "Serverless + Microservices Setup",
      description: "Modern architecture patterns for flexibility and cost optimization"
    },
    {
      icon: Shield,
      title: "Data Security, Backup & Compliance",
      description: "Enterprise-grade security measures and regulatory compliance"
    },
    {
      icon: Monitor,
      title: "Cloud Monitoring & Optimization",
      description: "Performance monitoring, cost optimization, and resource management"
    }
  ];

  const useCases = [
    {
      title: "Multi-Region SaaS Architecture Setup",
      description: "Deploy globally distributed applications with high availability and low latency"
    },
    {
      title: "Data Lake Provisioning",
      description: "Set up scalable data storage and processing infrastructure for analytics"
    },
    {
      title: "CI/CD Pipeline Automation for ML Models",
      description: "Streamline machine learning model deployment with automated testing and validation"
    }
  ];

  return (
    <>
      <Seo 
        title="Cloud Infrastructure Services | Invictus Data"
        description="Scalable cloud infrastructure solutions on AWS, Azure, and GCP. Migration, optimization, and management services."
        keywords="cloud infrastructure, AWS services, Azure cloud, GCP solutions, cloud migration, cloud optimization"
      />
      
    <>
      <div className="w-full min-h-screen bg-white overflow-hidden relative">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <AnimatedBackground />
        </div>
        <div className="relative z-10 w-full max-w-[1920px] mx-auto">
          {/* Hero Section */}
          <section className="px-8 py-20 max-md:px-5 max-md:py-12">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl font-bold text-slate-900 mb-6 max-md:text-4xl max-sm:text-3xl font-['Lexend']">
                Cloud & Infrastructure
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-md:text-lg font-['DM_Sans']">
                Design scalable, secure, and cost-efficient cloud infrastructure with top-tier DevOps practices.
              </p>
              <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#93C5FD] rounded-full flex items-center justify-center mx-auto mb-8">
                <Cloud className="w-8 h-8 text-black" />
              </div>
            </div>
          </section>

          {/* Core Capabilities Section */}
          <section className="px-8 py-16 max-md:px-5">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">
                Core Capabilities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {capabilities.map((capability, index) => {
                  const IconComponent = capability.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white backdrop-blur-md border border-slate-200 rounded-xl p-6 hover:bg-white hover:border-[#2563EB]/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#93C5FD] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3 font-['Lexend']">
                        {capability.title}
                      </h3>
                      <p className="text-slate-600 text-sm font-['DM_Sans']">
                        {capability.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Use Cases Section */}
          <section className="px-8 py-16 max-md:px-5">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">
                Real-World Applications
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="bg-white backdrop-blur-md border border-slate-200 rounded-xl p-8 hover:bg-white transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 mb-4 font-['Lexend']">
                      {useCase.title}
                    </h3>
                    <p className="text-slate-600 font-['DM_Sans']">
                      {useCase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Invictus Section */}
          <section className="px-8 py-16 max-md:px-5">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">
                Why Choose Invictus?
              </h2>
              <div className="bg-white backdrop-blur-md border border-slate-200 rounded-xl p-8">
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 font-['Lexend']">
                        Vendor-Agnostic Cloud Experts
                      </h4>
                      <p className="text-slate-600 font-['DM_Sans']">
                        Expertise across all major cloud platforms with unbiased recommendations
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#DBEAFE] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 font-['Lexend']">
                        Infrastructure + Analytics Synergy
                      </h4>
                      <p className="text-slate-600 font-['DM_Sans']">
                        Unified team approach combining cloud infrastructure with data analytics
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 font-['Lexend']">
                        Proven Success in Complex Migrations
                      </h4>
                      <p className="text-slate-600 font-['DM_Sans']">
                        Track record of successful large-scale cloud transformations
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-8 py-16 max-md:px-5">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4 font-['Lexend']">
                  Ready to Scale Your Infrastructure?
                </h2>
                <p className="text-slate-600 mb-6 font-['DM_Sans']">
                  Let's design a cloud strategy that grows with your business needs.
                </p>
                <div className="flex gap-4 justify-center max-sm:flex-col">
                  <CustomButton size="lg" className="bg-[#2563EB] hover:bg-[#1E40AF] text-white border-none">
                    Plan Your Migration
                  </CustomButton>
                  <CustomButton size="lg" variant="secondary" className="border-[#2563EB] text-[#1E40AF] hover:bg-[#2563EB]/10">
                    View Architecture Examples
                  </CustomButton>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
    </>

  );
};

export default CloudInfrastructure;
