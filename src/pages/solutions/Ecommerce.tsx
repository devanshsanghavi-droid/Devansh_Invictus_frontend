import React from "react";
import { TrendingUp, UserCheck, Gauge, FlaskConical, MousePointerClick, Layers, BarChart2, PieChart, Repeat, DollarSign, MessageCircle, CheckCircle2, Search, Zap, Users } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

const EcommerceImg = "https://assets.channeliq.ai/invictus-landing/Solutions/Ecommerce.png";

const ecommerceCapabilities = [
  { icon: TrendingUp, title: "Conversion Optimization", desc: "Funnel auditing, A/B testing, checkout optimization, and UX enhancements to maximize conversions." },
  { icon: UserCheck, title: "Customer Analytics", desc: "Behavioral segmentation, customer journey mapping, churn analysis, and LTV modeling." },
  { icon: Gauge, title: "Performance & Speed", desc: "Page speed optimization, Core Web Vitals, and responsive design improvements." },
  { icon: FlaskConical, title: "Personalization & Targeting", desc: "Dynamic content, personalized experiences, and targeted marketing campaigns." },
  { icon: MousePointerClick, title: "Product & Catalog Management", desc: "Catalog audits, dynamic pricing, assortment intelligence, and SEO optimization." },
  { icon: Layers, title: "Multi-Channel Integration", desc: "Unified data from all platforms, ERP integration, and centralized dashboard management." },
  { icon: BarChart2, title: "Operational Analytics", desc: "Fulfillment tracking, inventory synchronization, and marketplace performance monitoring." },
  { icon: Zap, title: "Campaign & Spend Optimization", desc: "Marketing campaign effectiveness, budget allocation, and ROI tracking." },
];

const ecommerceUseCases = [
  "Cart abandonment reduction",
  "Landing page conversion optimization", 
  "Customer churn prediction",
  "High-value segment targeting",
  "Dynamic pricing strategies",
  "Multi-channel performance tracking",
  "Inventory synchronization",
  "Marketplace optimization"
];

const ecommerceValueProps = [
  "Turn traffic into revenue with data-driven optimization strategies.",
  "Unlock deeper customer insights for personalized experiences.",
  "Streamline operations across all channels with unified analytics.",
  "Maximize visibility, conversion, and margin automatically."
];

const Ecommerce: React.FC = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);
  return (
    <>
      <Seo 
        title="Ecommerce Solutions | Invictus Data"
        description="Advanced analytics and automation for online storefronts. Drive growth, improve conversion, and enhance customer retention."
        keywords="ecommerce analytics, online retail, shopify solutions, amazon analytics, conversion optimization, customer analytics"
      />
      
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      {/* Navbar */}
      <div className="relative z-20">
        <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} />
      </div>
      <div className="relative z-10 w-full max-w-[1920px] mx-auto pt-24 px-5">
        {/* Hero Section */}
        <section className="w-full flex flex-col items-center justify-center py-16 md:py-24 px-0 md:px-6">
          <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left: Image */}
            <div className="flex-[2] relative flex items-stretch min-h-[320px] md:min-h-[380px] lg:min-h-[420px]">
              <img
                src={EcommerceImg}
                alt="E-commerce Solutions"
                className="object-cover w-full h-full rounded-3xl min-h-[320px] md:min-h-[380px] lg:min-h-[420px] max-h-[480px]"
                style={{ objectPosition: 'center' }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-white/60 to-transparent rounded-3xl pointer-events-none"></div>
            </div>
            {/* Right: Stat Card */}
            <div className="flex-1 flex flex-col justify-center bg-white/90 border border-slate-200 rounded-3xl p-6 md:p-10 min-h-[320px] md:min-h-[380px] lg:min-h-[420px] shadow-lg backdrop-blur-md" style={{maxWidth: '520px'}}>
              <div className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-wide mb-4 md:mb-6 unbounded">E-commerce Solutions</div>
              <div className="text-[#1E40AF] text-xl md:text-2xl font-semibold tracking-wide mb-4 md:mb-6 unbounded">Unified Digital Commerce, Analytics & Growth</div>
              <div className="text-slate-800 text-base md:text-lg font-normal max-w-xl mb-6">
                Unify, analyze, and grow your digital commerce with advanced analytics, seamless integrations, and proven strategies.
              </div>
            </div>
          </div>
        </section>
        {/* Capabilities Section */}
        <div className="w-full max-w-7xl mx-auto mb-24">
          <h3 className="text-4xl font-bold text-slate-900 mb-12 text-center unbounded">What We Offer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecommerceCapabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title + i} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[220px] relative">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#EFF6FF] absolute -top-5 left-5 shadow-md">
                    <Icon className="w-6 h-6 text-[#2563EB]" />
                  </div>
                  <div className="mt-8">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{cap.title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Use Cases Section */}
        <div className="w-full max-w-7xl mx-auto mb-24">
          <h3 className="text-4xl font-bold text-slate-900 mb-12 text-center unbounded">Use Cases</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {ecommerceUseCases.map((uc, i) => (
              <div key={uc + i} className="flex flex-col items-center justify-center bg-white rounded-3xl px-8 py-8 shadow-lg border border-slate-200 relative min-h-[120px]">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl border-2 border-[#2563EB] mb-4">
                  <CheckCircle2 className="w-6 h-6 text-[#2563EB]" />
                </div>
                <span className="text-slate-900 text-lg font-normal mb-1 unbounded text-center">
                  {uc}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* Value/Results Section */}
        <div className="w-full max-w-4xl mx-auto mb-24">
          <h3 className="text-4xl font-bold text-slate-900 mb-8 text-center unbounded">Why Choose Our E-commerce Solutions?</h3>
          <ul className="space-y-6">
            {ecommerceValueProps.map((val, i) => (
              <li key={val + i} className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#2563EB] rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-lg text-slate-900">{val}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </>

  );
};

export default Ecommerce; 