
import React from "react";
import ExpertiseLayout from "@/components/layout/ExpertiseLayout";
import CustomButton from "@/components/ui/CustomButton";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";

interface ExpertiseSubpageLayoutProps {
  title: string;
  subtitle: string;
  icon: string;
  backLink: string;
  backLabel: string;
  tools: string[];
  useCases: string[];
  ctaText: string;
  content: React.ReactNode;
}

const getIcon = (iconName: string) => {
  const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<any>;
  return IconComponent || Icons.Circle;
};

export const ExpertiseSubpageLayout: React.FC<ExpertiseSubpageLayoutProps> = ({
  title,
  subtitle,
  icon,
  backLink,
  backLabel,
  tools,
  useCases,
  ctaText,
  content
}) => {
  const IconComponent = getIcon(icon);

  return (
    <ExpertiseLayout>
      <div className="w-full max-w-6xl mx-auto px-6 py-12">
        {/* Back Navigation */}
        <Link to={backLink} className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#0EA5E9] transition-colors duration-300 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span className="font-['DM_Sans']">Back to {backLabel}</span>
        </Link>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#2563EB] to-[#0EA5E9] rounded-2xl flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold font-['Sora'] text-gray-900">
              {title}
            </h1>
          </div>
          
          <p className="text-xl font-['DM_Sans'] text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="mb-16">
          {content}
        </div>

        {/* Tools & Technologies */}
        {tools.length > 0 && (
          <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold font-['Sora'] text-gray-900 mb-6">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span key={index} className="px-4 py-2 bg-[#EFF6FF] text-[#1E40AF] rounded-full text-sm font-medium border border-[#2563EB]/20">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Use Cases */}
        <div className="bg-white/70 backdrop-blur-md rounded-2xl border border-gray-200/50 shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold font-['Sora'] text-gray-900 mb-6">Key Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#0EA5E9] mt-0.5 flex-shrink-0" />
                <span className="text-gray-600 font-['DM_Sans']">{useCase}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#2563EB]/5 to-[#0EA5E9]/5 backdrop-blur-md rounded-2xl border border-[#2563EB]/10 shadow-lg p-12">
          <h2 className="text-3xl font-bold font-['Sora'] text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-600 font-['DM_Sans'] mb-8 max-w-2xl mx-auto">
            Let's discuss how we can implement this solution for your specific business needs.
          </p>
          <CustomButton size="lg" className="bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] hover:from-[#2563EB]/80 hover:to-[#0EA5E9]/80">
            {ctaText}
          </CustomButton>
        </div>
      </div>
    </ExpertiseLayout>
  );
};

export default ExpertiseSubpageLayout;
