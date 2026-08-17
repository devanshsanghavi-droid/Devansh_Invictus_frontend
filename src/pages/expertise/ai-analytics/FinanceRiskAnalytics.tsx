import React, { useState } from "react";
import CustomButton from "@/components/ui/CustomButton";
import { ArrowLeft, CheckCircle, Calculator, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";

const FinanceRiskAnalytics: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const tools = [
    "Python", "R", "SQL", "Tableau", "SAS", "MATLAB",
    "Monte Carlo", "VaR Models", "Pandas", "NumPy", "TensorFlow", "PyTorch"
  ];

  const useCases = [
    "Credit scoring and risk assessment",
    "Fraud detection systems", 
    "Financial forecasting models",
    "Regulatory compliance reporting",
    "Portfolio optimization",
    "Stress testing scenarios",
    "Anti-money laundering (AML)",
    "Market risk analysis"
  ];

  const fraudRiskCapabilities = [
    { icon: CheckCircle, title: "Anomaly Detection Models", desc: "Use unsupervised and supervised ML to flag unusual transactions, returns, logins, or behavior patterns in real time." },
    { icon: CheckCircle, title: "Custom Risk Scoring Engines", desc: "Assign dynamic risk scores to users, vendors, or transactions — factoring in historical trends, velocity, and intent." },
    { icon: CheckCircle, title: "Transaction & Return Fraud Monitoring", desc: "Identify patterns of abuse (e.g., wardrobing, repeat returns, coupon misuse) using rule-based and AI systems." },
    { icon: CheckCircle, title: "Bot & Abuse Detection", desc: "Flag scripted activity, fake accounts, and suspicious behavior using fingerprinting, velocity checks, and CAPTCHA alternatives." },
    { icon: CheckCircle, title: "Automated Alerts & Escalation Workflows", desc: "Trigger rule-based or ML-backed alerts to fraud teams, with audit trails and decision explainability." },
    { icon: CheckCircle, title: "Regulatory & Compliance Reporting", desc: "Support KYC/AML requirements with structured data pipelines, reporting tools, and monitoring dashboards." },
  ];
  const fraudRiskTech = [
    "Isolation Forest", "Autoencoders", "Bayesian Networks", "Neural Nets", "Snowflake", "Redshift", "Kafka", "dbt", "Apache Kafka", "Flink", "AWS Kinesis", "Elastic Stack", "Datadog", "Sentry", "Snyk", "OWASP ZAP", "ReCAPTCHA", "Auth0"
  ];
  const fraudRiskUseCases = [
    "Suspicious transaction flagging in eCommerce",
    "High-risk vendor pattern detection in supply chain",
    "Credit abuse & chargeback fraud analysis",
    "Return abuse prevention in D2C businesses",
    "Fake account and bot detection on platforms",
    "Scoring and ranking customer trust levels"
  ];

  return (
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} />
      </div>
      <div className="relative z-10 w-full max-w-[1920px] mx-auto pt-40">
        {/* Hero Section */}
        <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full flex flex-col items-center justify-center py-24 px-6 bg-[#1a1a1a]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 font-['Lexend']">Fraud & Risk Analytics</h1>
            <h2 className="text-2xl md:text-3xl text-[#1E40AF] font-semibold mb-6 font-['Lexend']">Detect, Prevent, and Respond — Intelligently</h2>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed">
              We help businesses uncover hidden fraud patterns, assess operational risk, and protect assets in real-time — using AI-driven anomaly detection, scoring models, and behavioral analytics.
            </p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#2563EB]/20 border-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all duration-300">
              Book a Risk Assessment
            </motion.button>
          </div>
        </motion.section>
        {/* Capabilities Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">Proactive Defense with Predictive Intelligence</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {fraudRiskCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div key={cap.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                  className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#2563EB]/30 to-[#93C5FD]/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-[#1E40AF] group-hover:text-slate-900 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 font-['Lexend']">{cap.title}</h3>
                  <p className="text-base text-slate-600 font-['DM_Sans'] leading-relaxed">{cap.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>
        {/* Tech Stack Section */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Technology Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {fraudRiskTech.map((tech, i) => (
              <span key={tech} className="px-5 py-2 bg-gradient-to-r from-[#2563EB]/20 to-[#93C5FD]/20 text-[#DBEAFE] rounded-full text-lg font-semibold border border-[#2563EB]/30 shadow-md hover:scale-110 hover:bg-[#2563EB]/30 hover:text-white transition-all duration-300 cursor-pointer">
                {tech}
              </span>
            ))}
          </div>
        </section>
        {/* Use Cases Section */}
        <section className="w-full py-24 px-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fraudRiskUseCases.map((uc, i) => (
              <div key={uc} className="flex flex-col items-center justify-center bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 shadow-xl p-8">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#2563EB" strokeWidth="2" className="mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                <span className="text-slate-700 font-['DM_Sans'] text-lg text-center">{uc}</span>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Footer Section */}
        <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="w-full py-20 px-6 bg-[#1a1a1a] relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Stay One Step Ahead of Fraud</h2>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">Let’s build a smarter, more secure system for your business.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-[#2563EB] hover:bg-[#1E40AF] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#2563EB]/20 border-none focus:ring-2 focus:ring-[#2563EB]/50 transition-all duration-300">Explore Our Fraud Solutions</button>
              <button className="border-2 border-[#93C5FD] text-[#1E40AF] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#2563EB]/10 transition-all duration-300">Book a Risk Assessment</button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default FinanceRiskAnalytics;
