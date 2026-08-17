import React from "react";
import CustomButton from "@/components/ui/CustomButton";
import { Database, BarChart3, Zap, Shield, Users, Target, TrendingUp, PieChart } from "lucide-react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Seo from "@/components/Seo";

const DataAnalytics: React.FC = () => {
  const [showContactForm, setShowContactForm] = React.useState(false);
  const capabilities = [
    {
      title: "Data Engineering",
      description: "Build scalable data pipelines and warehouses to power your analytics.",
      icon: BarChart3
    },
    {
      title: "Advanced Analytics",
      description: "Uncover hidden patterns and insights with machine learning and AI.",
      icon: Target
    },
    {
      title: "Data Visualization",
      description: "Create interactive dashboards and reports that tell compelling data stories.",
      icon: PieChart
    },
    {
      title: "Data Governance",
      description: "Ensure data quality, compliance, and security across your organization.",
      icon: Shield
    }
  ];

  const demandForecastingCapabilities = [
    { icon: TrendingUp, title: "Multi-Variable Forecasting Models", desc: "Incorporate sales history, seasonality, promotions, holidays, and external data (weather, economic indicators) to build reliable forecasts." },
    { icon: BarChart3, title: "Granular Sales Forecasting", desc: "Forecast sales by SKU, region, channel, or customer segment - daily, weekly, or monthly - to inform procurement and promotions." },
    { icon: Zap, title: "Automated Inventory Planning", desc: "Drive smarter restocking with demand predictions integrated into supply chain and inventory systems." },
    { icon: Target, title: "Real-Time Forecast Adjustments", desc: "Update forecasts dynamically as new data (e.g., campaign performance, stockouts) enters the system." },
    { icon: PieChart, title: "Scenario Planning & What-If Analysis", desc: "Run simulations to evaluate outcomes of pricing changes, marketing campaigns, or new product launches." },
  ];
  const demandForecastingTech = [
    "Facebook Prophet", "XGBoost", "LightGBM", "scikit-learn", "AWS Forecast", "Google Vertex AI", "Azure ML", "Snowflake", "BigQuery", "dbt", "Airflow", "Looker", "Power BI", "Superset"
  ];
  const demandForecastingUseCases = [
    "Seasonal demand prediction for fashion & FMCG",
    "Sales forecasting by geography or sales channel",
    "Supply chain optimization based on sales peaks",
    "New store or product launch projections",
    "Dynamic staff scheduling based on forecasted traffic"
  ];

  return (
    <>
      <Seo
        title="Demand & Sales Forecasting | Invictus Data"
        description="Predict demand and sales with accuracy using machine learning, historical trends, and seasonality. Optimize inventory, pricing, and resource planning with AI-powered forecasting."
        keywords="demand forecasting, sales forecasting, predictive analytics, inventory optimization, machine learning forecasting, AI forecasting, business intelligence"
      />
      <div className="w-full min-h-screen bg-white overflow-hidden relative">
        <Navbar showContactForm={showContactForm} setShowContactForm={setShowContactForm} />
        <div className="fixed inset-0 z-0">
          <AnimatedBackground />
        </div>
        <div className="relative z-10 w-full max-w-[1920px] mx-auto pt-20">
          {/* Hero Section */}
          <motion.section initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full flex flex-col items-center justify-center py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 font-['Lexend']">Demand & Sales Forecasting</h1>
              <h2 className="text-2xl md:text-3xl text-[#3B82F6] font-semibold mb-6 font-['Lexend']">Predict What's Next. Plan What's Smart.</h2>
              <p className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed">
                We help businesses forecast demand and sales with accuracy - using machine learning, historical trends, seasonality, and external factors to optimize inventory, pricing, and resource planning.
              </p>

            </div>
          </motion.section>
          {/* Capabilities Section */}
          <section className="w-full py-24 px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">Smarter Forecasts, Greater Efficiency</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {demandForecastingCapabilities.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <motion.div key={cap.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                    className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#3B82F6]/30 to-[#2563EB]/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-[#3B82F6] group-hover:text-slate-900 transition-colors duration-300" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Tools & Technologies</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {demandForecastingTech.map((tech, i) => (
                <span key={tech} className="px-5 py-2 bg-gradient-to-r from-[#3B82F6]/20 to-[#2563EB]/20 text-[#3B82F6] rounded-full text-lg font-semibold border border-[#3B82F6]/30 shadow-md hover:scale-110 hover:bg-[#3B82F6]/30 hover:text-white transition-all duration-300 cursor-pointer">
                  {tech}
                </span>
              ))}
            </div>
          </section>
          {/* Use Cases Section */}
          <section className="w-full py-24 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {demandForecastingUseCases.map((uc, i) => (
                <div key={uc} className="flex flex-col items-center justify-center bg-white backdrop-blur-2xl rounded-2xl border border-[#3B82F6]/30 shadow-xl p-8">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#3B82F6" strokeWidth="2" className="mb-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  <span className="text-slate-700 font-['DM_Sans'] text-lg text-center">{uc}</span>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Footer Section */}
          <motion.section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="w-full py-20 px-6 bg-[#1a1a1a] relative overflow-hidden">
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-['Lexend']">Be Ready for Tomorrow, Today</h2>
              <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">Let’s bring predictive intelligence to your planning process.</p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-[#3B82F6]/20 border-none focus:ring-2 focus:ring-[#3B82F6]/50 transition-all duration-300">Request a Forecasting Demo</button>
                <button className="border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#3B82F6] hover:text-white transition-all duration-300">Talk to Our Data Team</button>
              </div>
            </div>
          </motion.section>
        </div>
        {/* Sticky CTA */}
        <div className="fixed bottom-6 right-6 z-50">

        </div>
      </div>
    </>
  );
};

export default DataAnalytics;
