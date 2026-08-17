import React, { useState } from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { Cog, CheckCircle, Settings, Cloud, Zap, ShieldCheck, TrendingUp, Cpu, Users, Sparkles, Shield, MessageSquare, Eye, BarChart2, ClipboardList } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

const MachineLearningMLOpsImg = "/placeholders/team-collaboration.jpg";

const MachineLearningMLOps: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <Seo 
        title="Machine Learning & MLOps | Invictus Data"
        description="End-to-end ML lifecycle management. From model development to deployment and monitoring with MLOps."
        keywords="machine learning, MLOps, ML operations, model deployment, ML pipeline, model monitoring"
      />
      
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} logoSize="sm" />
      </div>
      <div className="relative z-10 w-full max-w-[1920px] mx-auto pt-24 ">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center py-24 px-6">
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left: Image with overlayed text */}
            <div className="flex-[2] relative flex items-stretch min-h-[340px]">
              <img
                src={MachineLearningMLOpsImg}
                alt="Machine Learning (MLOps)"
                className="object-cover w-full h-full rounded-3xl min-h-[340px] max-h-[420px]"
                style={{ objectPosition: 'center' }}
              />
              {/* Overlayed text */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-white/60 to-transparent rounded-3xl">
              </div>
            </div>
            {/* Right: Stat Card */}
            <div className="flex-1 flex flex-col justify-center bg-white rounded-3xl p-10 min-h-[340px] max-h-[420px] shadow-lg">
              <div className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-wide mb-6 unbounded">Machine Learning (MLOps)</div>
              <div className="text-[#1E40AF] text-xl md:text-2xl font-semibold tracking-wide mb-6 unbounded">End-to-End ML Lifecycle Automation</div>
              <div className="text-slate-800 text-base md:text-lg font-normal max-w-xl">
                We automate the ML lifecycle, from data prep to deployment and monitoring. Our MLOps pipelines are scalable, reliable, and keep your AI running smoothly in production.
              </div>
            </div>
          </div>
        </section>
        {/* Intro Section */}
        <section className="w-full flex flex-col items-center justify-center py-2 px-6 max-w-7xl mx-auto">
          <div className="w-full bg-white rounded-3xl p-8 md:p-12 flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 unbounded">Why MLOps?</h2>
            <div className="text-base md:text-lg text-slate-600 mb-6">We automate the ML lifecycle, from data prep to deployment and monitoring. Our MLOps pipelines are scalable, reliable, and keep your AI running smoothly in production.</div>
          </div>
        </section>
        {/* Capabilities Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-24 text-center font-['Lexend']">Our MLOps Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Cog, title: "End-to-end ML lifecycle automation", desc: "Automate data prep, model training, deployment, and monitoring for reliable ML ops." },
              { icon: CheckCircle, title: "Model versioning & governance", desc: "Track, manage, and audit models for compliance and reproducibility." },
              { icon: Settings, title: "CI/CD for ML", desc: "Integrate ML workflows with CI/CD for rapid, safe model releases." },
              { icon: Cloud, title: "Scalable infrastructure", desc: "Use Kubernetes, Docker, and cloud-native tools for scalable, portable ML pipelines." },
              { icon: Zap, title: "Monitoring & alerting", desc: "Real-time monitoring, drift detection, and automated alerts for production ML." },
            ].map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[250px] relative">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#EFF6FF] absolute -top-5 left-5 shadow-md">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">{cap.title}</h3>
                    <p className="text-sm text-slate-600 mb-6 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
      </div>
        </section>
        {/* Tech Stack Section (Marquee) */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">MLOps Tech Stack</h2>
          <div className="relative w-full overflow-x-hidden py-6">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent" />
            <div className="marquee-track flex items-center gap-8 animate-marquee whitespace-nowrap">
              {[
                "Jenkins", "GitLab CI/CD", "Docker", "Kubernetes", "MLflow", "Kubeflow", "Terraform", "Ansible", "Prometheus", "Grafana", "GitHub Actions", "Azure DevOps", "Python", "TensorFlow", "PyTorch", "scikit-learn", "Jupyter", "Pandas", "NumPy", "R", "AWS SageMaker"
              , "MLflow", "Kubeflow", "Terraform", "Ansible", "Prometheus", "Grafana", "GitHub Actions", "Azure DevOps", "Python", "TensorFlow", "PyTorch", "scikit-learn", "Jupyter", "Pandas", "NumPy", "R", "AWS SageMaker"].map((tool, i) => (
                <span key={tool + '-' + i} className="flex items-center justify-center min-w-[200px] h-24 px-10 bg-[#EFF6FF] rounded-[2.5rem] border border-slate-200 shadow-md text-slate-900 text-xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis unbounded">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 5s linear infinite;
            }
          `}</style>
        </section>
        {/* Use Cases Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Key Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Settings, title: "Continuous integration and deployment pipelines" },
              { icon: CheckCircle, title: "ML model deployment and versioning" },
              { icon: Cloud, title: "Infrastructure automation and provisioning" },
              { icon: Zap, title: "Monitoring and logging systems" },
              { icon: Cog, title: "Automated testing frameworks" },
              { icon: Settings, title: "Configuration management" },
              { icon: ShieldCheck, title: "Security scanning and compliance" },
              { icon: TrendingUp, title: "Performance monitoring and optimization" },
              { icon: Cpu, title: "Predictive modeling for business forecasting" },
              { icon: Users, title: "Customer churn prevention systems" },
              { icon: Sparkles, title: "Recommendation engines" },
              { icon: Shield, title: "Fraud detection algorithms" },
              { icon: MessageSquare, title: "Natural language processing" },
              { icon: Eye, title: "Computer vision applications" },
              { icon: BarChart2, title: "Time series forecasting" },
              { icon: ClipboardList, title: "A/B testing frameworks" },
            ].map((uc, i) => {
              const Icon = uc.icon;
              return (
                <div key={uc.title} className="flex flex-col items-center justify-center bg-white rounded-3xl px-8 py-8 shadow-lg border border-slate-200 relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl border-2 border-[#2563EB] mb-4">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <span className="text-slate-900 text-lg md:text-lg font-normal mb-3 unbounded text-center">
                    {uc.title}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
        {/* Why Us Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Why Work With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle, title: "Full-lifecycle MLOps expertise" },
              { icon: TrendingUp, title: "Proven success in production ML deployments" },
              { icon: Cloud, title: "Deep cloud & open-source toolchain knowledge" },
              { icon: ShieldCheck, title: "Secure, scalable, and compliant solutions" },
              { icon: Zap, title: "Rapid iteration and continuous delivery" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex flex-col items-center justify-center bg-white rounded-3xl px-8 py-8 shadow-lg border border-slate-200 relative">
                  <div className="flex items-center justify-center w-12 h-12 rounded-2xl border-2 border-[#2563EB] mb-4">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <span className="text-slate-900 text-lg md:text-lg font-normal mb-3 unbounded text-center">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
        {/* CTA Footer Section */}
        <section className="w-full py-20 px-6  relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Ready to Accelerate Your ML Journey?</h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">Let’s build robust, scalable, and production-ready ML pipelines together.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="border-2 border-[#93C5FD] text-[#1E40AF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2563EB]/10 transition-all duration-300" onClick={() => navigate('/schedule-consultation')}>Talk to an MLOps Expert</button>
          </div>
        </div>
        </section>
      </div>
    </div>
    </>

  );
};

export default MachineLearningMLOps; 