import React from "react";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import CustomButton from "@/components/ui/CustomButton";
import { TrendingUp, BarChart2, Zap, UserCheck, MousePointerClick, Layers, Gauge, FlaskConical, ShoppingCart, Users, PieChart, Repeat, DollarSign, MessageCircle, CheckCircle2, Search } from "lucide-react";
import Seo from "@/components/Seo";

// --- Conversion Funnel Optimization Data ---
const funnelCapabilities = [
  { icon: TrendingUp, title: "Funnel Auditing & Drop-Off Analysis", desc: "Map the user journey from entry to conversion and identify weak spots in the funnel using behavioral data, heatmaps, and user flows." },
  { icon: UserCheck, title: "UX/UI Enhancements", desc: "Revise page layouts, CTAs, form elements, navigation, and product displays to improve visual hierarchy and usability." },
  { icon: Gauge, title: "Page Speed & Performance Optimization", desc: "Improve load times, Core Web Vitals, and responsiveness — especially for mobile users — using lazy loading, code splitting, and CDN tuning." },
  { icon: FlaskConical, title: "A/B & Multivariate Testing", desc: "Implement and run experiments to measure the impact of different variations on conversion rates, bounce rates, and cart completions." },
  { icon: MousePointerClick, title: "Checkout & Cart Optimization", desc: "Streamline cart interactions, simplify checkout flows, enable guest checkouts, and remove distractions that cause abandonment." },
  { icon: Layers, title: "Personalized Experiences", desc: "Serve tailored content, offers, and messages to different segments using intent-based triggers and audience targeting." }
];
const funnelTools = [
  { name: "GA4", category: "Analytics & Heatmaps" },
  { name: "Hotjar", category: "Analytics & Heatmaps" },
  { name: "Mixpanel", category: "Analytics & Heatmaps" },
  { name: "FullStory", category: "Analytics & Heatmaps" },
  { name: "VWO", category: "Experimentation" },
  { name: "Optimizely", category: "Experimentation" },
  { name: "Google Optimize", category: "Experimentation" },
  { name: "Lighthouse", category: "Performance Testing" },
  { name: "GTmetrix", category: "Performance Testing" },
  { name: "WebPageTest", category: "Performance Testing" },
  { name: "Shopify", category: "Platforms" },
  { name: "WooCommerce", category: "Platforms" },
  { name: "Magento", category: "Platforms" },
  { name: "Custom Headless", category: "Platforms" }
];
const funnelToolCategories = ["All", "Analytics & Heatmaps", "Experimentation", "Performance Testing", "Platforms"];
const funnelUseCases = [
  "Reducing cart abandonment",
  "Optimizing landing page conversion",
  "Improving product page engagement",
  "Boosting mobile checkout rates",
  "Fixing funnel drop-offs in marketing campaigns",
  "Increasing lead form completions"
];

// --- Customer Analytics Data ---
const analyticsCapabilities = [
  { icon: BarChart2, title: "Customer Journey Mapping", desc: "Track and visualize how customers move across touchpoints — from discovery to purchase to re-engagement." },
  { icon: PieChart, title: "Behavioral Segmentation", desc: "Group users by actions, preferences, and lifecycle stages to enable targeting and tailored experiences." },
  { icon: Repeat, title: "Churn & Retention Analysis", desc: "Identify churn patterns, engagement gaps, and retention drivers to reduce customer loss and increase lifetime value." },
  { icon: DollarSign, title: "RFM & LTV Modeling", desc: "Use Recency-Frequency-Monetary (RFM) analysis and predictive LTV modeling to identify your most valuable customer segments." },
  { icon: MessageCircle, title: "Personalization Insights", desc: "Recommend dynamic content, offers, and journeys based on user behavior, product affinity, and engagement history." },
  { icon: CheckCircle2, title: "Attribution & Funnel Insights", desc: "Understand which channels, campaigns, or touchpoints are driving the most valuable conversions." }
];
const analyticsTools = [
  { name: "GA4", category: "Analytics" },
  { name: "Mixpanel", category: "Analytics" },
  { name: "Amplitude", category: "Analytics" },
  { name: "Heap", category: "Analytics" },
  { name: "dbt", category: "Data Modeling" },
  { name: "SQL", category: "Data Modeling" },
  { name: "Python", category: "Data Modeling" },
  { name: "Snowflake", category: "Data Modeling" },
  { name: "BigQuery", category: "Data Modeling" },
  { name: "Looker", category: "Dashboards" },
  { name: "Metabase", category: "Dashboards" },
  { name: "Superset", category: "Dashboards" },
  { name: "Segment", category: "CDPs & Personalization" },
  { name: "Klaviyo", category: "CDPs & Personalization" },
  { name: "MoEngage", category: "CDPs & Personalization" },
  { name: "HubSpot", category: "CDPs & Personalization" }
];
const analyticsToolCategories = ["All", "Analytics", "Data Modeling", "Dashboards", "CDPs & Personalization"];
const analyticsUseCases = [
  "Customer churn prediction and early intervention",
  "High-value segment targeting and remarketing",
  "Onboarding flow optimization",
  "Personalized email and push campaign triggers",
  "LTV forecasting for CAC planning",
  "Customer behavior heatmaps and funnel analysis"
];

// --- Omnichannel Performance Management Data ---
const omniCapabilities = [
  { icon: Layers, title: "Cross-Channel Data Unification", desc: "Ingest and normalize data across website, app, marketplaces, POS, CRM, and ad platforms into a centralized performance layer." },
  { icon: BarChart2, title: "Custom Dashboards & KPI Tracking", desc: "Create dynamic views of business-critical metrics like ROAS, CAC, conversion rate, sell-through rate, and offline-to-online attribution." },
  { icon: Zap, title: "Campaign & Spend Optimization", desc: "Track campaign effectiveness across platforms and reallocate budgets for maximum ROI using real-time signals." },
  { icon: Users, title: "Customer Journey Analytics", desc: "Understand user behavior across digital and physical touchpoints to deliver a seamless omnichannel experience." },
  { icon: Gauge, title: "Operational Efficiency Insights", desc: "Monitor fulfillment, logistics, and service metrics across regions, stores, or partners to uncover cost and time optimizations." }
];
const omniTools = [
  { name: "Snowflake", category: "Data Platforms" },
  { name: "BigQuery", category: "Data Platforms" },
  { name: "Redshift", category: "Data Platforms" },
  { name: "Looker", category: "Dashboards" },
  { name: "Power BI", category: "Dashboards" },
  { name: "Tableau", category: "Dashboards" },
  { name: "Superset", category: "Dashboards" },
  { name: "Meta Ads", category: "Marketing Platforms" },
  { name: "Google Ads", category: "Marketing Platforms" },
  { name: "TikTok", category: "Marketing Platforms" },
  { name: "Shopify", category: "Marketing Platforms" },
  { name: "Salesforce", category: "Marketing Platforms" },
  { name: "Segment", category: "CDP/CRM" },
  { name: "Klaviyo", category: "CDP/CRM" },
  { name: "HubSpot", category: "CDP/CRM" },
  { name: "Zoho", category: "CDP/CRM" }
];
const omniToolCategories = ["All", "Data Platforms", "Dashboards", "Marketing Platforms", "CDP/CRM"];
const omniUseCases = [
  "Multi-location retail + D2C performance tracking",
  "Online/offline channel attribution",
  "Regional product mix optimization",
  "Unified CAC + LTV reporting",
  "Store-level ops + service analytics",
  "Marketplace & brand.com spend benchmarking"
];

// --- Marketplace Integration & Management Data ---
const marketplaceCapabilities = [
  { icon: Layers, title: "Multi-Channel Platform Integration", desc: "Connect your ERP, inventory systems, and POS to leading marketplaces using secure APIs and real-time sync." },
  { icon: Repeat, title: "Order & Inventory Synchronization", desc: "Ensure stock levels, pricing, and availability are always up to date — reducing overselling and manual effort." },
  { icon: BarChart2, title: "Centralized Dashboard", desc: "Get a unified view of orders, returns, shipping, and pricing across all platforms with real-time alerts and filters." },
  { icon: Gauge, title: "Fulfillment & Logistics Coordination", desc: "Automate order routing, fulfillment partner coordination, and returns management across warehouses or regions." },
  { icon: CheckCircle2, title: "Marketplace Compliance & SEO", desc: "Optimize listings, meet platform-specific guidelines, and track search and placement performance." }
];
const marketplaceTools = [
  { name: "Amazon", category: "Marketplaces" },
  { name: "Flipkart", category: "Marketplaces" },
  { name: "Walmart", category: "Marketplaces" },
  { name: "eBay", category: "Marketplaces" },
  { name: "Shopify", category: "Storefronts" },
  { name: "WooCommerce", category: "Storefronts" },
  { name: "Magento", category: "Storefronts" },
  { name: "Unicommerce", category: "Integrations" },
  { name: "ChannelAdvisor", category: "Integrations" },
  { name: "Zoho Inventory", category: "Integrations" },
  { name: "Shiprocket", category: "Integrations" }
];
const marketplaceToolCategories = ["All", "Marketplaces", "Storefronts", "Integrations"];
const marketplaceUseCases = [
  "Centralized marketplace management for D2C brands",
  "Real-time inventory sync across Amazon & Shopify",
  "Multi-location fulfillment routing",
  "Tiered pricing and localized product availability",
  "Performance reporting by platform"
];

// --- Catalog & Pricing Optimization Data ---
const catalogCapabilities = [
  { icon: Search, title: "Product Catalog Audits", desc: "Identify underperforming SKUs, incomplete listings, and duplicate content across platforms." },
  { icon: Zap, title: "Dynamic Pricing Models", desc: "Deploy rule-based or algorithmic pricing strategies based on competitor pricing, inventory levels, and margin targets." },
  { icon: BarChart2, title: "Assortment Intelligence", desc: "Analyze product performance across regions, categories, and seasons to identify winners, laggards, and gaps." },
  { icon: MessageCircle, title: "SEO & Metadata Optimization", desc: "Enhance visibility on marketplaces and search engines with optimized titles, tags, descriptions, and attributes." },
  { icon: Layers, title: "Variant & Bundle Strategy", desc: "Structure product listings with variants, bundles, and cross-sells to increase AOV and basket size." }
];
const catalogTools = [
  { name: "Repricer.com", category: "Pricing Engines" },
  { name: "Prisync", category: "Pricing Engines" },
  { name: "Dynamic Yield", category: "Pricing Engines" },
  { name: "GA4", category: "Analytics" },
  { name: "Mixpanel", category: "Analytics" },
  { name: "Amplitude", category: "Analytics" },
  { name: "Jungle Scout", category: "Market Intelligence" },
  { name: "Keepa", category: "Market Intelligence" },
  { name: "Helium 10", category: "Market Intelligence" },
  { name: "PIMcore", category: "Catalog Systems" },
  { name: "Akeneo", category: "Catalog Systems" },
  { name: "Shopify PIM", category: "Catalog Systems" }
];
const catalogToolCategories = ["All", "Pricing Engines", "Analytics", "Market Intelligence", "Catalog Systems"];
const catalogUseCases = [
  "Real-time competitor price tracking + response",
  "Smart bundling strategies for bestsellers",
  "Region-specific pricing and availability",
  "SKU-level margin optimization",
  "Enhanced discoverability on marketplaces",
  "Catalog cleanup and data hygiene at scale"
];

const DigitalCommerce: React.FC = () => {
  const [funnelToolCategory, setFunnelToolCategory] = React.useState("All");
  const [analyticsToolCategory, setAnalyticsToolCategory] = React.useState("All");
  const [omniToolCategory, setOmniToolCategory] = React.useState("All");
  const [marketplaceToolCategory, setMarketplaceToolCategory] = React.useState("All");
  const [catalogToolCategory, setCatalogToolCategory] = React.useState("All");
  const [selectedSolution, setSelectedSolution] = React.useState("funnel");

  const filteredFunnelTools = funnelToolCategory === "All" ? funnelTools : funnelTools.filter(t => t.category === funnelToolCategory);
  const filteredAnalyticsTools = analyticsToolCategory === "All" ? analyticsTools : analyticsTools.filter(t => t.category === analyticsToolCategory);
  const filteredOmniTools = omniToolCategory === "All" ? omniTools : omniTools.filter(t => t.category === omniToolCategory);
  const filteredMarketplaceTools = marketplaceToolCategory === "All" ? marketplaceTools : marketplaceTools.filter(t => t.category === marketplaceToolCategory);
  const filteredCatalogTools = catalogToolCategory === "All" ? catalogTools : catalogTools.filter(t => t.category === catalogToolCategory);

  const solutions = [
    {
      id: "funnel",
      title: "Conversion Funnel Optimization",
      description: "Maximize conversions at every stage of your customer journey",
      icon: TrendingUp,
      color: "from-[#3B82F6] to-[#2563EB]"
    },
    {
      id: "analytics",
      title: "Customer Analytics",
      description: "Deep insights into customer behavior and lifetime value",
      icon: BarChart2,
      color: "from-[#2563EB] to-[#3B82F6]"
    },
    {
      id: "omnichannel",
      title: "Omnichannel Performance",
      description: "Unified view across all sales and marketing channels",
      icon: Layers,
      color: "from-[#3B82F6] to-[#2563EB]"
    },
    {
      id: "marketplace",
      title: "Marketplace Integration",
      description: "Seamless management across multiple eCommerce platforms",
      icon: ShoppingCart,
      color: "from-[#2563EB] to-[#3B82F6]"
    },
    {
      id: "catalog",
      title: "Catalog & Pricing",
      description: "Optimize product listings and dynamic pricing strategies",
      icon: Search,
      color: "from-[#3B82F6] to-[#2563EB]"
    }
  ];

  const successStories = [
    {
      company: "Fashion Retailer",
      challenge: "Low conversion rates on mobile checkout",
      solution: "Conversion Funnel Optimization",
      results: "45% increase in mobile conversions",
      icon: TrendingUp
    },
    {
      company: "Electronics Brand",
      challenge: "High customer churn rate",
      solution: "Customer Analytics & Segmentation",
      results: "30% reduction in churn rate",
      icon: UserCheck
    },
    {
      company: "Home Goods Store",
      challenge: "Inconsistent performance across channels",
      solution: "Omnichannel Performance Management",
      results: "25% increase in overall revenue",
      icon: Layers
    }
  ];

  const getCurrentSolutionData = () => {
    switch (selectedSolution) {
      case "funnel":
        return {
          capabilities: funnelCapabilities,
          tools: filteredFunnelTools,
          toolCategories: funnelToolCategories,
          useCases: funnelUseCases,
          setToolCategory: setFunnelToolCategory,
          toolCategory: funnelToolCategory
        };
      case "analytics":
        return {
          capabilities: analyticsCapabilities,
          tools: filteredAnalyticsTools,
          toolCategories: analyticsToolCategories,
          useCases: analyticsUseCases,
          setToolCategory: setAnalyticsToolCategory,
          toolCategory: analyticsToolCategory
        };
      case "omnichannel":
        return {
          capabilities: omniCapabilities,
          tools: filteredOmniTools,
          toolCategories: omniToolCategories,
          useCases: omniUseCases,
          setToolCategory: setOmniToolCategory,
          toolCategory: omniToolCategory
        };
      case "marketplace":
        return {
          capabilities: marketplaceCapabilities,
          tools: filteredMarketplaceTools,
          toolCategories: marketplaceToolCategories,
          useCases: marketplaceUseCases,
          setToolCategory: setMarketplaceToolCategory,
          toolCategory: marketplaceToolCategory
        };
      case "catalog":
        return {
          capabilities: catalogCapabilities,
          tools: filteredCatalogTools,
          toolCategories: catalogToolCategories,
          useCases: catalogUseCases,
          setToolCategory: setCatalogToolCategory,
          toolCategory: catalogToolCategory
        };
      default:
        return {
          capabilities: funnelCapabilities,
          tools: filteredFunnelTools,
          toolCategories: funnelToolCategories,
          useCases: funnelUseCases,
          setToolCategory: setFunnelToolCategory,
          toolCategory: funnelToolCategory
        };
    }
  };

  const currentData = getCurrentSolutionData();

  return (
    <>
      <Seo 
        title="Digital Commerce Solutions | Invictus Data"
        description="Transform your ecommerce business with AI-powered digital commerce solutions. Analytics, personalization, and optimization."
        keywords="digital commerce, ecommerce solutions, online retail, commerce analytics, personalization, conversion optimization"
      />
      
    <div className="w-full min-h-screen bg-white overflow-hidden relative">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      <div className="relative z-10 w-full max-w-[1920px] mx-auto">
        {/* Hero Section */}
        <section className="px-8 py-20 max-md:px-5 max-md:py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-['Lexend'] mb-4">Digital Commerce Solutions</h1>
            <h2 className="text-2xl md:text-3xl text-[#3B82F6] font-semibold mb-6 font-['Lexend']">Accelerate Growth Across Every Channel</h2>
            <p className="text-xl md:text-2xl text-slate-700 mb-10 font-['DM_Sans'] max-w-3xl mx-auto leading-relaxed">
              Explore our specialized solutions for eCommerce brands: funnel optimization, customer analytics, omnichannel performance, marketplace integration, and catalog & pricing optimization.
            </p>
          </div>
        </section>

        {/* Solution Selector */}
        <section className="px-8 py-12 max-md:px-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
              {solutions.map((solution) => {
                const IconComponent = solution.icon;
                return (
                  <button
                    key={solution.id}
                    onClick={() => setSelectedSolution(solution.id)}
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                      selectedSolution === solution.id
                        ? 'border-[#3B82F6] bg-[#3B82F6]/10'
                        : 'border-slate-200 bg-white hover:border-[#3B82F6]/50 hover:bg-[#3B82F6]/5'
                    }`}
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-slate-900" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 font-['Lexend']">{solution.title}</h3>
                    <p className="text-sm text-slate-600 font-['DM_Sans']">{solution.description}</p>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Selected Solution Content */}
        <section className="px-8 py-12 max-md:px-5 bg-[#1a1a1a]">
          <div className="max-w-6xl mx-auto">
            {/* Capabilities */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Core Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentData.capabilities.map((capability, index) => {
                  const IconComponent = capability.icon;
                  return (
                    <div key={index} className="bg-white backdrop-blur-xl rounded-xl p-6 border border-slate-200 hover:border-[#3B82F6]/30 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-slate-900" />
                      </div>
                      <h4 className="text-lg font-semibold text-slate-900 mb-3 font-['Lexend']">{capability.title}</h4>
                      <p className="text-slate-600 text-sm font-['DM_Sans']">{capability.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Tools & Technologies</h3>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {currentData.toolCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => currentData.setToolCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      currentData.toolCategory === category
                        ? 'bg-[#3B82F6] text-white'
                        : 'bg-white text-slate-300 hover:bg-[#3B82F6]/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                {currentData.tools.map((tool, index) => (
                  <div key={index} className="bg-white backdrop-blur-xl rounded-lg p-3 border border-slate-200 text-center hover:border-[#3B82F6]/30 transition-all duration-300">
                    <span className="text-sm font-medium text-slate-900">{tool.name}</span>
                    <div className="text-xs text-slate-400 mt-1">{tool.category}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center font-['Lexend']">Common Use Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentData.useCases.map((useCase, index) => (
                  <div key={index} className="bg-white backdrop-blur-xl rounded-lg p-4 border border-slate-200 hover:border-[#3B82F6]/30 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-[#3B82F6] rounded-full flex-shrink-0"></div>
                      <span className="text-slate-900 font-['DM_Sans']">{useCase}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="px-8 py-16 max-md:px-5">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center font-['Lexend']">Success Stories</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => {
                const IconComponent = story.icon;
                return (
                  <div key={index} className="bg-white backdrop-blur-xl rounded-2xl p-8 border border-slate-200 hover:border-[#3B82F6]/30 transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-xl flex items-center justify-center mb-6">
                      <IconComponent className="w-6 h-6 text-slate-900" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2 font-['Lexend']">{story.company}</h4>
                    <p className="text-sm text-slate-600 mb-4 font-['DM_Sans']"><strong>Challenge:</strong> {story.challenge}</p>
                    <p className="text-sm text-slate-600 mb-4 font-['DM_Sans']"><strong>Solution:</strong> {story.solution}</p>
                    <div className="text-lg font-bold text-[#3B82F6] font-['Lexend']">{story.results}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-8 py-16 max-md:px-5 bg-[#1a1a1a]">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-6 font-['Lexend']">Ready to Transform Your Digital Commerce?</h3>
            <p className="text-xl text-slate-700 mb-8 font-['DM_Sans']">Let's discuss how our digital commerce solutions can drive growth for your business.</p>
            <div className="flex gap-4 justify-center max-sm:flex-col">
              <button className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-[#2563EB] hover:to-[#3B82F6] transition-all duration-300 shadow-lg shadow-[#3B82F6]/20">
                Schedule Consultation
              </button>
              <button className="bg-transparent border-2 border-[#3B82F6] text-[#3B82F6] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#3B82F6] hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>

  );
};

export default DigitalCommerce;
