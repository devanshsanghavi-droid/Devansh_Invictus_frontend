import React from "react";
import CustomButton from "@/components/ui/CustomButton";
import { Brain, TrendingUp, MessageSquare, Sparkles, Cog, Cpu } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Seo from "@/components/Seo";

const AIML: React.FC = () => {
  const capabilities = [
    {
      icon: TrendingUp,
      title: "Predictive Analytics & Forecasting Models",
      description: "Advanced statistical models to predict trends and future outcomes"
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing & LLMs",
      description: "Text analysis, chatbots, and language understanding systems"
    },
    {
      icon: Sparkles,
      title: "Generative AI Applications",
      description: "Content generation, image synthesis, and creative AI solutions"
    },
    {
      icon: Brain,
      title: "Recommendation Engines",
      description: "Personalized product and content recommendation systems"
    },
    {
      icon: Cog,
      title: "ML Model Ops & Deployment",
      description: "Production-ready model deployment and monitoring infrastructure"
    }
  ];

  const useCases = [
    {
      title: "Churn Prediction for Subscription Apps",
      description: "Identify at-risk customers and implement retention strategies before they cancel"
    },
    {
      title: "Product Recommendation for eCommerce",
      description: "Increase sales with AI-powered personalized product suggestions"
    },
    {
      title: "AI Copilots for Internal Operations",
      description: "Streamline workflows with intelligent assistants for various business functions"
    }
  ];

  return (
    <>
      <Seo 
        title="AI & Machine Learning Solutions | Invictus Data"
        description="Advanced AI and machine learning solutions to automate processes, gain insights, and drive innovation in your business."
        keywords="AI solutions, machine learning, ML services, artificial intelligence, predictive analytics, deep learning"
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
                AI & Machine Learning
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-md:text-lg font-['DM_Sans']">
                Build intelligent systems that learn from data and unlock exponential outcomes.
              </p>
              <div className="w-16 h-16 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-8">
                <Brain className="w-8 h-8 text-slate-900" />
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
                        <IconComponent className="w-6 h-6 text-slate-900" />
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
                        Full-Stack AI Development Team
                      </h4>
                      <p className="text-slate-600 font-['DM_Sans']">
                        From data engineering to model deployment to user interfaces
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 font-['Lexend']">
                        OpenAI, HuggingFace, LangChain Expertise
                      </h4>
                      <p className="text-slate-600 font-['DM_Sans']">
                        Deep knowledge of cutting-edge AI tools and frameworks
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-2 font-['Lexend']">
                        Ethics-First & Explainable AI Approach
                      </h4>
                      <p className="text-slate-600 font-['DM_Sans']">
                        Responsible AI development with transparency and accountability
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
                  Ready to Harness the Power of AI?
                </h2>
                <p className="text-slate-600 mb-6 font-['DM_Sans']">
                  Let's explore how AI and machine learning can transform your business operations.
                </p>
                <div className="flex gap-4 justify-center max-sm:flex-col">
                  <button className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-[#2563EB] hover:to-[#3B82F6] transition-all duration-300 shadow-lg shadow-[#3B82F6]/20">
                    Start Your AI Journey
                  </button>
                  <button className="bg-transparent border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#3B82F6] hover:text-white transition-all duration-300">
                    View AI Portfolio
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

export default AIML;
