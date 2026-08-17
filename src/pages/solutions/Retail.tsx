import React from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import Navbar from "@/components/layout/Navbar";
import { Truck, BarChart2, Layers, Repeat, Gauge, Users, Zap, Star, Smartphone, ShoppingCart, MessageCircle, Eye, Shield, DollarSign } from "lucide-react";
import Seo from "@/components/Seo";

const techStack = [
  { name: "SAP/NetSuite/Oracle", category: "ERP Systems" },
  { name: "Shiprocket/Delhivery", category: "Logistics" },
  { name: "Zoho/Unicommerce", category: "Inventory Management" },
  { name: "Prophet/Amazon Forecast", category: "Forecasting" },
  { name: "Looker/Power BI", category: "Analytics" },
  { name: "Segment/Salesforce", category: "Customer Data" },
  { name: "Zendesk/Intercom", category: "Support Tools" },
  { name: "HubSpot/Mailchimp", category: "Marketing" },
  { name: "Mixpanel/Amplitude", category: "Analytics" },
  { name: "Scikit-learn/TensorFlow", category: "Machine Learning" },
  { name: "Python/Zapier", category: "Automation" },
  { name: "UiPath/Automation Anywhere", category: "RPA" },
  { name: "AWS/Google AI", category: "AI Services" },
  { name: "Snowflake/BigQuery", category: "Data Platforms" },
  { name: "Flutter/React Native", category: "Mobile Development" },
  { name: "Firebase/Node.js", category: "Backend" },
  { name: "Square/Shopify", category: "POS Systems" },
  { name: "GitHub Actions/Fastlane", category: "DevOps" },
];
const techCategories = [
  "All",
  ...Array.from(new Set(techStack.map(t => t.category))).filter(Boolean)
];

const retailCapabilities = [
  { icon: BarChart2, title: "Supply Chain Analytics", desc: "Real-time visibility, demand forecasting, inventory management, and supplier performance tracking." },
  { icon: Gauge, title: "Retail Operations", desc: "Order management, logistics optimization, automation, and process streamlining across channels." },
  { icon: Users, title: "Customer Experience", desc: "Unified customer profiles, journey orchestration, personalization, and CX analytics." },
  { icon: Zap, title: "AI & Automation", desc: "Demand forecasting, dynamic pricing, fraud detection, and retail process automation." },
  { icon: Smartphone, title: "Mobile Solutions", desc: "mPOS systems, associate apps, customer loyalty apps, and cross-platform development." },
  { icon: Eye, title: "Visual & Search", desc: "Visual search, smart filters, product recommendations, and enhanced discovery." },
  { icon: Shield, title: "Security & Compliance", desc: "Fraud detection, loss prevention, and security monitoring for retail operations." },
  { icon: Star, title: "Loyalty & Engagement", desc: "Campaign integration, loyalty programs, and customer engagement platforms." },
];

const retailUseCases = [
  "Real-time inventory synchronization",
  "Predictive demand forecasting",
  "Dynamic order routing",
  "Unified customer engagement",
  "AI-powered recommendations",
  "Mobile checkout solutions",
  "Fraud detection systems",
  "Loyalty program optimization"
];

const retailValueProps = [
  "Smarter, streamlined, and resilient retail operations.",
  "Personalized experiences at scale with AI-driven insights.",
  "Mobile-first solutions for staff and customers.",
  "Agility, accuracy, and cost-efficiency at scale."
];

const Retail: React.FC = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const filteredTech = selectedCategory === "All" ? techStack : techStack.filter(t => t.category === selectedCategory);
  const RetailImg = "https://assets.channeliq.ai/invictus-landing/Solutions/Retail.png";
  return (
    <>
      <Seo 
        title="Retail Solutions | Invictus Data"
        description="Omnichannel retail intelligence with real-time inventory optimization and supply chain insights for modern retailers."
        keywords="retail solutions, retail analytics, inventory management, supply chain optimization, retail AI, omnichannel retail"
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
                src={RetailImg}
                alt="Retail Solutions"
                className="object-cover w-full h-full rounded-3xl min-h-[320px] md:min-h-[380px] lg:min-h-[420px] max-h-[480px]"
                style={{ objectPosition: 'center' }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-white/60 to-transparent rounded-3xl pointer-events-none"></div>
            </div>
            {/* Right: Stat Card */}
            <div className="flex-1 flex flex-col justify-center bg-white/90 border border-slate-200 rounded-3xl p-6 md:p-10 min-h-[320px] md:min-h-[380px] lg:min-h-[420px] shadow-lg backdrop-blur-md" style={{maxWidth: '520px'}}>
              <div className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-wide mb-4 md:mb-6 unbounded">Retail Solutions</div>
              <div className="text-[#1E40AF] text-xl md:text-2xl font-semibold tracking-wide mb-4 md:mb-6 unbounded">Smarter, Connected, and Personalized Retail</div>
              <div className="text-slate-800 text-base md:text-lg font-normal max-w-xl mb-6">
                Transform your retail operations with real-time visibility, AI-driven insights, automation, and mobile-first experiences—delivering agility, personalization, and efficiency at every touchpoint.
              </div>
              <div className="grid grid-cols-1 gap-4 w-full mt-auto">
                <div className="bg-[#181515]/90 rounded-2xl p-4 text-slate-800 text-base font-medium text-center min-w-[240px] mx-auto">
                  Supply Chain, CX, AI & Mobility
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Capabilities Section */}
        <div className="w-full max-w-7xl mx-auto mb-24">
          <h3 className="text-4xl font-bold text-slate-900 mb-12 text-center unbounded">What We Offer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {retailCapabilities.map((cap, i) => {
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
        {/* Tech Stack Section (Marquee) */}
        <section className="w-full py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Tech Stack & Platforms</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {techCategories.map(cat => (
              <button key={cat} onClick={() => setSelectedCategory(cat)} className={`px-4 py-2 rounded-full font-semibold text-sm border transition-all duration-200 ${selectedCategory === cat ? "bg-[#2563EB] text-white border-[#2563EB]" : "bg-white text-[#2563EB] border-[#2563EB]/30 hover:bg-[#2563EB]/20"}`}>
                {cat}
              </button>
            ))}
          </div>
          {/* Marquee/looping horizontal scroll */}
          <div className="relative w-full overflow-x-hidden py-6">
            {/* Left fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10 bg-gradient-to-r from-white to-transparent" />
            {/* Right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10 bg-gradient-to-l from-white to-transparent" />
            <div className="marquee-track flex items-center gap-8 animate-marquee whitespace-nowrap">
              {[...filteredTech, ...filteredTech].map((tool, i) => (
                <span key={tool.name + '-' + i} className="flex items-center justify-center min-w-[200px] h-24 px-10 bg-[#EFF6FF] rounded-[2.5rem] border border-slate-200 shadow-md text-slate-900 text-xl font-semibold whitespace-nowrap overflow-hidden text-ellipsis unbounded">
                  {tool.name}
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
              animation: marquee 8s linear infinite;
            }
          `}</style>
        </section>
        {/* Use Cases Section */}
        <div className="w-full max-w-7xl mx-auto mb-24">
          <h3 className="text-4xl font-bold text-slate-900 mb-12 text-center unbounded">Use Cases</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {retailUseCases.map((uc, i) => (
              <div key={uc + i} className="flex flex-col items-center justify-center bg-white rounded-3xl px-8 py-8 shadow-lg border border-slate-200 relative min-h-[120px]">
                <div className="flex items-center justify-center w-10 h-10 rounded-2xl border-2 border-[#2563EB] mb-4">
                  <BarChart2 className="w-6 h-6 text-[#2563EB]" />
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
          <h3 className="text-4xl font-bold text-slate-900 mb-8 text-center unbounded">Why Choose Our Retail Solutions?</h3>
          <ul className="space-y-6">
            {retailValueProps.map((val, i) => (
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

export default Retail; 