import React, { useState } from "react";
import CustomButton from "@/components/ui/CustomButton";
import { ArrowLeft, CheckCircle, Cpu, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";

const DataScienceML: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const tools = [
    "Python", "TensorFlow", "PyTorch", "scikit-learn", "Jupyter", "MLflow",
    "Pandas", "NumPy", "R", "Kubernetes", "Docker", "AWS SageMaker"
  ];

  const useCases = [
    "Predictive modeling for business forecasting",
    "Customer churn prevention systems", 
    "Recommendation engines",
    "Fraud detection algorithms",
    "Natural language processing",
    "Computer vision applications",
    "Time series forecasting",
    "A/B testing frameworks"
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
            {/* Section Intro */}
            <div className="flex flex-col items-center text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#93C5FD] rounded-3xl flex items-center justify-center shadow-2xl animate-pulse-slow">
                  <Cpu className="w-10 h-10 text-slate-900 animate-bounce" />
                </div>
                <h1 className="text-5xl lg:text-6xl font-extrabold font-['Lexend'] text-slate-900 drop-shadow-lg">
                  Data Science & Machine Learning
                </h1>
              </div>
              <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in">
                <Sparkles className="w-6 h-6 text-[#1E40AF] animate-spin-slow" />
                <span className="text-2xl font-semibold text-[#1E40AF] font-['Lexend'] tracking-wide uppercase">Models That Learn. Outcomes That Matter.</span>
                <Sparkles className="w-6 h-6 text-[#1E40AF] animate-spin-slow" />
              </div>
              <p className="text-xl md:text-2xl font-['DM_Sans'] text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-in">
                Unlock the power of machine learning to drive intelligent decision-making and automate complex processes.
              </p>
            </div>

            {/* Divider */}
            <div className="w-full flex justify-center mb-12">
              <div className="h-1 w-32 bg-gradient-to-r from-[#2563EB] via-[#93C5FD] to-[#1E3A8A] rounded-full animate-glow" />
            </div>

            {/* Content */}
            <div className="mb-20 space-y-12">
              <div className="bg-white backdrop-blur-2xl rounded-3xl border border-[#2563EB]/30 shadow-2xl p-10 transition-transform duration-300 hover:scale-[1.02] hover:shadow-[#2563EB]/30 animate-fade-in">
                <h2 className="text-3xl font-extrabold font-['Lexend'] text-slate-900 mb-6 tracking-tight">Advanced Analytics & Machine Learning</h2>
                <div className="space-y-5 text-slate-700 font-['DM_Sans'] text-lg leading-relaxed">
                  <p>
                    Unlock the power of machine learning to drive intelligent decision-making and automate complex processes.
                    Our data science team builds production-ready ML models that deliver measurable business value.
                  </p>
                  <p>
                    From exploratory data analysis to model deployment and monitoring, we provide end-to-end machine learning
                    solutions that scale with your business needs.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 shadow-xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-[#2563EB]/30 animate-fade-in">
                  <h3 className="text-2xl font-bold font-['Lexend'] text-[#1E40AF] mb-4">Predictive Analytics</h3>
                  <p className="text-slate-700 font-['DM_Sans'] text-base leading-relaxed">
                    Build sophisticated forecasting models that help you anticipate trends, optimize resources,
                    and make proactive business decisions.
                  </p>
                </div>
                <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 shadow-xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-[#2563EB]/30 animate-fade-in">
                  <h3 className="text-2xl font-bold font-['Lexend'] text-[#1E40AF] mb-4">ML Model Development</h3>
                  <p className="text-slate-700 font-['DM_Sans'] text-base leading-relaxed">
                    Design and train custom machine learning models using state-of-the-art algorithms
                    and frameworks tailored to your specific use case.
                  </p>
                </div>
                <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 shadow-xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-[#2563EB]/30 animate-fade-in">
                  <h3 className="text-2xl font-bold font-['Lexend'] text-[#1E40AF] mb-4">NLP & Text Analytics</h3>
                  <p className="text-slate-700 font-['DM_Sans'] text-base leading-relaxed">
                    Extract insights from unstructured text data through sentiment analysis,
                    topic modeling, and advanced natural language processing techniques.
                  </p>
                </div>
                <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 shadow-xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-[#2563EB]/30 animate-fade-in">
                  <h3 className="text-2xl font-bold font-['Lexend'] text-[#1E40AF] mb-4">MLOps & Deployment</h3>
                  <p className="text-slate-700 font-['DM_Sans'] text-base leading-relaxed">
                    Implement robust MLOps pipelines for model versioning, monitoring, and
                    automated deployment to ensure reliable production performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full flex justify-center mb-12">
              <div className="h-1 w-32 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#93C5FD] rounded-full animate-glow" />
            </div>

            {/* Tools & Technologies */}
            <div className="bg-white backdrop-blur-2xl rounded-3xl border border-[#2563EB]/30 shadow-2xl p-10 mb-16 animate-fade-in">
              <h3 className="text-3xl font-extrabold font-['Lexend'] text-slate-900 mb-6">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-4">
                {tools.map((tool, index) => (
                  <span key={index} className="px-5 py-2 bg-gradient-to-r from-[#2563EB]/20 to-[#93C5FD]/20 text-[#DBEAFE] rounded-full text-lg font-semibold border border-[#2563EB]/30 shadow-md hover:scale-110 hover:bg-[#2563EB]/30 hover:text-white transition-all duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="bg-white backdrop-blur-2xl rounded-3xl border border-[#2563EB]/30 shadow-2xl p-10 mb-16 animate-fade-in">
              <h3 className="text-3xl font-extrabold font-['Lexend'] text-slate-900 mb-6">Key Use Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {useCases.map((useCase, index) => (
                  <div key={index} className="flex items-start gap-4 group animate-fade-in" style={{ animationDelay: `${index * 0.07}s` }}>
                    <CheckCircle className="w-6 h-6 text-[#1E40AF] mt-1 flex-shrink-0 group-hover:scale-125 group-hover:text-slate-900 transition-all duration-300" />
                    <span className="text-slate-700 font-['DM_Sans'] text-lg group-hover:text-slate-900 transition-colors duration-300">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-br from-[#1E3A8A]/80 via-[#2563EB]/60 to-[#93C5FD]/60 backdrop-blur-2xl rounded-3xl border border-[#2563EB]/40 shadow-2xl p-16 animate-fade-in">
              <h2 className="text-4xl font-extrabold font-['Lexend'] text-slate-900 mb-4 drop-shadow-lg">
                Ready to Get Started?
              </h2>
              <p className="text-slate-700 font-['DM_Sans'] mb-10 max-w-2xl mx-auto text-xl">
                Let's discuss how we can implement this solution for your specific business needs.
              </p>
              <CustomButton size="lg" className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#93C5FD] hover:from-[#1E3A8A]/80 hover:via-[#2563EB]/80 hover:to-[#93C5FD]/80 text-slate-900 shadow-xl animate-pulse-slow text-2xl px-10 py-5 rounded-full">
                Explore ML Solutions
              </CustomButton>
            </div>
          </div>
        </div>

        {/* Sticky CTA */}
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
          <CustomButton className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#93C5FD] shadow-2xl shadow-[#2563EB]/20 hover:scale-110 transition-transform duration-300 text-slate-900 animate-pulse-slow text-lg px-8 py-4 rounded-full">
            Let's Talk
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default DataScienceML;
