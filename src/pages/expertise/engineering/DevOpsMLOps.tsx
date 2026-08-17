import React, { useState } from "react";
import CustomButton from "@/components/ui/CustomButton";
import { ArrowLeft, CheckCircle, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";

const DevOpsMLOps: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const tools = [
    "Jenkins", "GitLab CI/CD", "Docker", "Kubernetes", "MLflow", "Kubeflow",
    "Terraform", "Ansible", "Prometheus", "Grafana", "GitHub Actions", "Azure DevOps"
  ];

  const useCases = [
    "Continuous integration and deployment pipelines",
    "ML model deployment and versioning", 
    "Infrastructure automation and provisioning",
    "Monitoring and logging systems",
    "Automated testing frameworks",
    "Configuration management",
    "Security scanning and compliance",
    "Performance monitoring and optimization"
  ];

  return (
    <>
      <div className="w-full min-h-screen bg-white overflow-hidden relative">
        {/* Animated Background */}
        <div className="fixed inset-0 z-0">
          <AnimatedBackground />
        </div>
        {/* Navbar */}
        <div className="relative z-20">
          <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} />
        </div>
        <div className="relative z-10">
          <div className="w-full max-w-6xl mx-auto px-6 py-12 pt-40">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#93C5FD] rounded-2xl flex items-center justify-center">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold font-['Lexend'] text-slate-900">
                  DevOps & MLOps
                </h1>
              </div>
              
              <p className="text-xl font-['DM_Sans'] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                From Code to Deployment, Seamlessly
              </p>
            </div>

            {/* Content */}
            <div className="mb-16 space-y-8">
              <div className="bg-white backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg p-8">
                <h2 className="text-2xl font-bold font-['Lexend'] text-slate-900 mb-6">Streamlined Operations</h2>
                <div className="space-y-4 text-slate-600 font-['DM_Sans'] leading-relaxed">
                  <p>
                    Implement robust DevOps and MLOps practices for efficient, reliable software delivery.
                    Our automation experts create seamless pipelines that accelerate development cycles.
                  </p>
                  <p>
                    From code commit to production deployment, we build comprehensive DevOps workflows
                    that ensure quality, security, and reliability at every stage.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg p-6">
                  <h3 className="text-xl font-semibold font-['Lexend'] text-[#1E40AF] mb-4">CI/CD Pipelines</h3>
                  <p className="text-slate-600 font-['DM_Sans'] text-sm leading-relaxed">
                    Automated continuous integration and deployment pipelines that ensure
                    fast, reliable software delivery with built-in quality gates.
                  </p>
                </div>
                
                <div className="bg-white backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg p-6">
                  <h3 className="text-xl font-semibold font-['Lexend'] text-[#1E40AF] mb-4">MLOps Implementation</h3>
                  <p className="text-slate-600 font-['DM_Sans'] text-sm leading-relaxed">
                    End-to-end machine learning operations including model versioning,
                    automated testing, and production deployment workflows.
                  </p>
                </div>
                
                <div className="bg-white backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg p-6">
                  <h3 className="text-xl font-semibold font-['Lexend'] text-[#1E40AF] mb-4">Infrastructure Automation</h3>
                  <p className="text-slate-600 font-['DM_Sans'] text-sm leading-relaxed">
                    Automated infrastructure provisioning and configuration management
                    for consistent, scalable environments across all stages.
                  </p>
                </div>
                
                <div className="bg-white backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg p-6">
                  <h3 className="text-xl font-semibold font-['Lexend'] text-[#1E40AF] mb-4">Monitoring & Alerting</h3>
                  <p className="text-slate-600 font-['DM_Sans'] text-sm leading-relaxed">
                    Comprehensive monitoring solutions with intelligent alerting that
                    ensure system reliability and proactive issue resolution.
                  </p>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="bg-white backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold font-['Lexend'] text-slate-900 mb-6">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span key={index} className="px-4 py-2 bg-[#2563EB]/10 text-[#1E40AF] rounded-full text-sm font-medium border border-[#2563EB]/20">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="bg-white backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg p-8 mb-12">
              <h3 className="text-2xl font-bold font-['Lexend'] text-slate-900 mb-6">Key Use Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1E40AF] mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600 font-['DM_Sans']">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-white backdrop-blur-md rounded-2xl border border-[#2563EB]/20 shadow-lg p-12">
              <h2 className="text-3xl font-bold font-['Lexend'] text-slate-900 mb-4">
                Ready to Streamline Your Operations?
              </h2>
              <p className="text-slate-600 font-['DM_Sans'] mb-8 max-w-2xl mx-auto">
                Let's discuss how we can implement efficient DevOps and MLOps practices for your team.
              </p>
              <CustomButton size="lg" className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#93C5FD] hover:from-[#1E3A8A]/80 hover:via-[#2563EB]/80 hover:to-[#93C5FD]/80 text-white">
                Learn About DevOps Setup
              </CustomButton>
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
    </>
  );
};

export default DevOpsMLOps;
