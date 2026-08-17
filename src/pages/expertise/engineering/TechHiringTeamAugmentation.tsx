import React, { useState } from "react";
import CustomButton from "@/components/ui/CustomButton";
import { ArrowLeft, CheckCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";

const TechHiringTeamAugmentation: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const tools = [
    "Technical assessment platforms", "Interview frameworks", "Onboarding systems", 
    "Performance tracking tools", "Skill evaluation matrices", "Remote collaboration tools",
    "GitHub", "Slack", "Jira", "Confluence", "Zoom", "Microsoft Teams"
  ];

  const useCases = [
    "Rapid team scaling for product launches",
    "Specialized skill acquisition for projects", 
    "Remote team integration and management",
    "Technical leadership and mentoring",
    "Staff augmentation for peak periods",
    "Cross-functional team building",
    "Technical interviewing and assessment",
    "Long-term partnership development"
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
            {/* Back Navigation */}
            {/* Remove the Link and span containing 'Back to Engineering & Scalable Teams' */}

            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#93C5FD] rounded-2xl flex items-center justify-center">
                  <Users className="w-8 h-8 text-slate-900" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold font-['Lexend'] text-slate-900">
                  Tech Hiring & Team Augmentation
                </h1>
              </div>
              
              <p className="text-xl font-['DM_Sans'] text-slate-600 max-w-3xl mx-auto leading-relaxed">
                High-Performance Teams On-Demand
              </p>
            </div>

            {/* Content */}
            <div className="mb-16 space-y-8">
              <div className="bg-white backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg p-8">
                <h2 className="text-2xl font-bold font-['Lexend'] text-slate-900 mb-6">Elite Technical Talent</h2>
                <div className="space-y-4 text-slate-600 font-['DM_Sans'] leading-relaxed">
                  <p>
                    Access top-tier technical talent and build high-performance teams that deliver exceptional results.
                    Our talent solutions help you scale quickly while maintaining quality and cultural fit.
                  </p>
                  <p>
                    From individual specialists to complete development teams, we provide the technical expertise
                    you need to accelerate your projects and achieve your business objectives.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg p-6">
                  <h3 className="text-xl font-semibold font-['Lexend'] text-[#1E40AF] mb-4">Expert Developers</h3>
                  <p className="text-slate-600 font-['DM_Sans'] text-sm leading-relaxed">
                    Senior-level developers with deep expertise in modern technologies
                    and proven track records of delivering complex projects.
                  </p>
                </div>
                
                <div className="bg-white backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg p-6">
                  <h3 className="text-xl font-semibold font-['Lexend'] text-[#1E40AF] mb-4">Team Integration</h3>
                  <p className="text-slate-600 font-['DM_Sans'] text-sm leading-relaxed">
                    Seamless integration of remote talent into your existing teams
                    with established processes for collaboration and communication.
                  </p>
                </div>
                
                <div className="bg-white backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg p-6">
                  <h3 className="text-xl font-semibold font-['Lexend'] text-[#1E40AF] mb-4">Flexible Scaling</h3>
                  <p className="text-slate-600 font-['DM_Sans'] text-sm leading-relaxed">
                    Scale your team up or down based on project needs with flexible
                    engagement models that fit your timeline and budget.
                  </p>
                </div>
                
                <div className="bg-white backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg p-6">
                  <h3 className="text-xl font-semibold font-['Lexend'] text-[#1E40AF] mb-4">Quality Assurance</h3>
                  <p className="text-slate-600 font-['DM_Sans'] text-sm leading-relaxed">
                    Rigorous vetting process ensures you get high-quality talent
                    that meets your technical and cultural requirements.
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
                Ready to Build Your Dream Team?
              </h2>
              <p className="text-slate-600 font-['DM_Sans'] mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you find the perfect technical talent for your projects.
              </p>
              <CustomButton size="lg" className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#93C5FD] hover:from-[#1E3A8A]/80 hover:via-[#2563EB]/80 hover:to-[#93C5FD]/80 text-slate-900">
                Request Talent Profiles
              </CustomButton>
            </div>
          </div>
        </div>

        {/* Sticky CTA */}
        <div className="fixed bottom-6 right-6 z-50">
          <CustomButton className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#93C5FD] shadow-2xl shadow-[#2563EB]/20 hover:scale-105 transition-transform duration-300 text-slate-900">
            Let's Talk
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default TechHiringTeamAugmentation;
