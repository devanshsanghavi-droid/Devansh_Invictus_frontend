import React from "react";
import CustomButton from "@/components/ui/CustomButton";
import { BarChart3, Monitor, Filter, Users, Layers } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Seo from "@/components/Seo";

const CustomDashboardsBI: React.FC = () => {
  const capabilities = [
    {
      icon: Monitor,
      title: "Executive & Operational Dashboards",
      description: "Strategic and tactical dashboards tailored to different organizational levels"
    },
    {
      icon: BarChart3,
      title: "Power BI, Looker, Tableau, Superset",
      description: "Expertise across all major business intelligence platforms"
    },
    {
      icon: Layers,
      title: "Embedded BI in SaaS Tools",
      description: "Seamlessly integrate analytics capabilities into existing applications"
    },
    {
      icon: Filter,
      title: "Self-serve Filters & Drill-downs",
      description: "Empower users with interactive exploration and customizable views"
    },
    {
      icon: Users,
      title: "Multi-tenant Dashboards for Agencies",
      description: "Secure, scalable solutions for managing multiple client accounts"
    }
  ];

  const useCases = [
    {
      title: "Revenue Leadership Dashboard",
      description: "Comprehensive revenue metrics and forecasting for executive decision-making"
    },
    {
      title: "NPS + Support Ticket Analysis Board",
      description: "Customer satisfaction tracking with integrated support metrics"
    },
    {
      title: "Campaign Performance Drilldown for CMOs",
      description: "Multi-channel marketing performance with detailed attribution analysis"
    }
  ];

  return (
    <>
      <Seo 
        title="Custom Dashboards & BI | Invictus Data"
        description="Build custom dashboards and business intelligence solutions. Real-time insights and interactive data visualization."
        keywords="custom dashboards, business intelligence, BI solutions, data visualization, analytics dashboards, reporting tools"
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
                Custom Dashboards & BI
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-md:text-lg font-['DM_Sans']">
                Tell better stories with real-time dashboards tailored to your KPIs, roles, and decisions.
              </p>
              <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-8">
                <BarChart3 className="w-8 h-8 text-white" />
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
                      className="bg-white backdrop-blur-md border border-slate-200 rounded-xl p-6 hover:bg-white hover:border-[#3B82F6]/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6 text-white" />
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
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 font-['Lexend']">
                        Design-First BI Approach
                      </h4>
                      <p className="text-slate-600 font-['DM_Sans']">
                        Beautiful, intuitive dashboards that users actually want to use
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 font-['Lexend']">
                        Agile Iterations with Real-time Feedback
                      </h4>
                      <p className="text-slate-600 font-['DM_Sans']">
                        Rapid prototyping and continuous improvement based on user needs
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 font-['Lexend']">
                        Domain-Specific Pre-built Templates
                      </h4>
                      <p className="text-slate-600 font-['DM_Sans']">
                        Industry-specific dashboard templates for faster deployment
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
                  Ready to Visualize Your Data Story?
                </h2>
                <p className="text-slate-600 mb-6 font-['DM_Sans']">
                  Let's create dashboards that turn your data into actionable insights.
                </p>
                <div className="flex gap-4 justify-center max-sm:flex-col">
                  <button className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-[#2563EB] hover:to-[#3B82F6] transition-all duration-300 shadow-lg shadow-[#3B82F6]/20">
                    Design Your Dashboard
                  </button>
                  <button className="bg-transparent border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#3B82F6] hover:text-white transition-all duration-300">
                    View Dashboard Examples
                  </button>
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

export default CustomDashboardsBI;
