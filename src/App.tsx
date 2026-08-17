import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { GA4Provider } from "@/components/providers/GA4Provider";
import Seo from "@/components/Seo";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AIAnalyticsIntelligence from "./pages/expertise/AIAnalyticsIntelligence";
import EngineeringScalableTeams from "./pages/expertise/EngineeringScalableTeams";
import DataEngineering from "./pages/expertise/ai-analytics/DataEngineering";
import DataScienceML from "./pages/expertise/ai-analytics/DataScienceML";
import DataVisualization from "./pages/expertise/ai-analytics/DataVisualization";
import RevenueGrowthAnalytics from "./pages/expertise/ai-analytics/RevenueGrowthAnalytics";
import FinanceRiskAnalytics from "./pages/expertise/ai-analytics/FinanceRiskAnalytics";
import DigitalCommerceRetailMedia from "./pages/expertise/ai-analytics/DigitalCommerceRetailMedia";
import ProductEngineering from "./pages/expertise/engineering/ProductEngineering";
import CustomAIToolDevelopment from "./pages/expertise/engineering/CustomAIToolDevelopment";
import CloudInfrastructure from "./pages/expertise/engineering/CloudInfrastructure";
import DevOpsMLOps from "./pages/expertise/engineering/DevOpsMLOps";
import CustomerSuccessOperations from "./pages/expertise/engineering/CustomerSuccessOperations";
import TechHiringTeamAugmentation from "./pages/expertise/engineering/TechHiringTeamAugmentation";

// Solutions Pages
import Solutions from "./pages/solutions/Solutions";
import Products from "./pages/Products";
import DataAnalytics from "./pages/solutions/DataAnalytics";
import AIML from "./pages/solutions/AIML";
import CloudInfrastructureSolution from "./pages/solutions/CloudInfrastructure";
import ProductEngineeringSolution from "./pages/solutions/ProductEngineering";
import DigitalCommerce from "./pages/solutions/DigitalCommerce";
import CustomDashboardsBI from "./pages/solutions/CustomDashboardsBI";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import ModernDataEngineering from "./pages/solutions/ModernDataEngineering";
import DataVisualizationReporting from "./pages/solutions/DataVisualizationReporting";
import CloudDataMigration from "./pages/solutions/CloudDataMigration";
import DataPlatformSupport from "./pages/solutions/DataPlatformSupport";
import MobileDevelopmentModernization from "./pages/solutions/MobileDevelopmentModernization";
import ProductDesignDevelopment from "./pages/solutions/ProductDesignDevelopment";
import ApplicationMaintenance from "./pages/solutions/ApplicationMaintenance";
import SiteReliabilityEngineering from "./pages/solutions/SiteReliabilityEngineering";
import EngineeringQualityProductivity from "./pages/solutions/EngineeringQualityProductivity";
import AIApplicationDevelopment from "./pages/solutions/AIApplicationDevelopment";
import MachineLearningMLOps from "./pages/solutions/MachineLearningMLOps";
import AIStrategyDiscovery from "./pages/solutions/AIStrategyDiscovery";
import AgenticAIImplementation from "./pages/solutions/AgenticAIImplementation";
import CXTBD from "./pages/solutions/CXTBD";
import DigitalCommerceConversionFunnelOptimization from "./pages/solutions/DigitalCommerceConversionFunnelOptimization";
import DigitalCommerceCustomerAnalytics from "./pages/solutions/DigitalCommerceCustomerAnalytics";
import DigitalCommerceOmnichannelPerformanceManagement from "./pages/solutions/DigitalCommerceOmnichannelPerformanceManagement";
import DigitalCommerceMarketplaceIntegrationManagement from "./pages/solutions/DigitalCommerceMarketplaceIntegrationManagement";
import DigitalCommerceCatalogPricingOptimization from "./pages/solutions/DigitalCommerceCatalogPricingOptimization";
import Ecommerce from "./pages/solutions/Ecommerce";
import RetailSupplyChainManagement from "./pages/solutions/RetailSupplyChainManagement";
import RetailCustomerExperiencePlatforms from "./pages/solutions/RetailCustomerExperiencePlatforms";
import RetailAIAutomation from "./pages/solutions/RetailAIAutomation";
import RetailMobilitySolutions from "./pages/solutions/RetailMobilitySolutions";
import APIModernization from "./pages/solutions/APIModernization";
import DigitalAutomation from "./pages/solutions/DigitalAutomation";
import Careers from "./pages/Careers";
import LeadershipTeam from "./pages/LeadershipTeam";
import OurStory from "./pages/OurStory";
import GlobalPresence from "./pages/GlobalPresence";
import LifeAtInvictus from "./pages/LifeAtInvictus";
//import GlobalPresence from "./pages/GlobalPresence";
import PartnersAlliances from "./pages/PartnersAlliances";
import NewsMedia from "./pages/NewsMedia";

import CaseStudies from "./pages/CaseStudies";
import Whitepapers from "./pages/Whitepapers";
import WhitepaperDetail from "./pages/WhitepaperDetail";
import FAQ from "./pages/FAQ";
import FindingTheRightFit from "./pages/FindingTheRightFit";
import UnderstandingHiringProcess from "./pages/UnderstandingHiringProcess";
import BlogInsights from "./pages/BlogInsights";
import FoodDistributionCaseStudy from "./pages/FoodDistributionCaseStudy";
import SparkOptimizationGCPDataproc from "./pages/SparkOptimizationGCPDataproc";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import OurStoryReplica from "./pages/OurStoryReplica";
import LeadershipTeamReplica from "./pages/LeadershipTeamReplica";
import GlobalPresenceReplica from "./pages/GlobalPresenceReplica";
import Retail from "./pages/solutions/Retail";
import Finance from "./pages/solutions/Finance";
import ScheduleConsultation from "./pages/ScheduleConsultation";
import Industries from "./pages/Industries";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import About from "./pages/About";

const queryClient = new QueryClient();

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {/* Global default SEO - provides fallback meta tags for all pages */}
          <Seo />
          <GA4Provider>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />

              {/* Expertise Main Pages */}
              <Route
                path="/expertise/ai-analytics-intelligence"
                element={<AIAnalyticsIntelligence />}
              />
              <Route
                path="/expertise/engineering-scalable-teams"
                element={<EngineeringScalableTeams />}
              />

              {/* AI & Analytics Intelligence Subpages */}
              <Route
                path="/expertise/ai-analytics/data-engineering"
                element={<DataEngineering />}
              />
              <Route
                path="/expertise/ai-analytics/data-science-ml"
                element={<DataScienceML />}
              />
              <Route
                path="/expertise/ai-analytics/data-visualization"
                element={<DataVisualization />}
              />
              <Route
                path="/expertise/ai-analytics/revenue-growth-analytics"
                element={<RevenueGrowthAnalytics />}
              />
              <Route
                path="/expertise/ai-analytics/finance-risk-analytics"
                element={<FinanceRiskAnalytics />}
              />
              <Route
                path="/expertise/ai-analytics/digital-commerce-retail-media"
                element={<DigitalCommerceRetailMedia />}
              />

              {/* Engineering & Scalable Teams Subpages */}
              <Route
                path="/expertise/engineering/product-engineering"
                element={<ProductEngineering />}
              />
              <Route
                path="/expertise/engineering/custom-ai-tool-development"
                element={<CustomAIToolDevelopment />}
              />
              <Route
                path="/expertise/engineering/cloud-infrastructure"
                element={<CloudInfrastructure />}
              />
              <Route
                path="/expertise/engineering/devops-mlops"
                element={<DevOpsMLOps />}
              />
              <Route
                path="/expertise/engineering/customer-success-operations"
                element={<CustomerSuccessOperations />}
              />
              <Route
                path="/expertise/engineering/tech-hiring-team-augmentation"
                element={<TechHiringTeamAugmentation />}
              />

              {/* Solutions Pages */}
              <Route path="/solutions" element={<Solutions />} />
              <Route
                path="/solutions/data-analytics"
                element={<DataAnalytics />}
              />
              <Route path="/solutions/ai-ml" element={<AIML />} />
              <Route
                path="/solutions/cloud-infrastructure"
                element={<CloudInfrastructureSolution />}
              />
              <Route
                path="/solutions/product-engineering"
                element={<ProductEngineeringSolution />}
              />
              <Route
                path="/solutions/digital-commerce"
                element={<DigitalCommerce />}
              />
              <Route
                path="/solutions/custom-dashboards-bi"
                element={<CustomDashboardsBI />}
              />
              <Route
                path="/solutions/modern-data-engineering"
                element={<ModernDataEngineering />}
              />
              <Route
                path="/solutions/data-visualization-reporting"
                element={<DataVisualizationReporting />}
              />
              <Route
                path="/solutions/cloud-data-migration"
                element={<CloudDataMigration />}
              />
              <Route
                path="/solutions/data-platform-support"
                element={<DataPlatformSupport />}
              />
              <Route
                path="/solutions/mobile-development-modernization"
                element={<MobileDevelopmentModernization />}
              />
              <Route
                path="/solutions/product-design-development"
                element={<ProductDesignDevelopment />}
              />
              <Route
                path="/solutions/application-maintenance"
                element={<ApplicationMaintenance />}
              />
              <Route
                path="/solutions/site-reliability-engineering"
                element={<SiteReliabilityEngineering />}
              />
              <Route
                path="/solutions/engineering-quality-productivity"
                element={<EngineeringQualityProductivity />}
              />
              <Route
                path="/solutions/ai-application-development"
                element={<AIApplicationDevelopment />}
              />
              <Route
                path="/solutions/machine-learning-mlops"
                element={<MachineLearningMLOps />}
              />
              <Route
                path="/solutions/ai-strategy-discovery"
                element={<AIStrategyDiscovery />}
              />
              <Route
                path="/solutions/agentic-ai-implementation"
                element={<AgenticAIImplementation />}
              />
              <Route path="/solutions/cx-tbd" element={<CXTBD />} />
              <Route
                path="/solutions/digital-commerce/conversion-funnel-optimization"
                element={<DigitalCommerceConversionFunnelOptimization />}
              />
              <Route
                path="/solutions/digital-commerce/customer-analytics"
                element={<DigitalCommerceCustomerAnalytics />}
              />
              <Route
                path="/solutions/digital-commerce/omnichannel-performance-management"
                element={<DigitalCommerceOmnichannelPerformanceManagement />}
              />
              <Route
                path="/solutions/digital-commerce/marketplace-integration-management"
                element={<DigitalCommerceMarketplaceIntegrationManagement />}
              />
              <Route
                path="/solutions/digital-commerce/catalog-pricing-optimization"
                element={<DigitalCommerceCatalogPricingOptimization />}
              />
              <Route path="/solutions/ecommerce" element={<Ecommerce />} />
              <Route
                path="/solutions/retail/supply-chain-management"
                element={<RetailSupplyChainManagement />}
              />
              <Route
                path="/solutions/retail/customer-experience-platforms"
                element={<RetailCustomerExperiencePlatforms />}
              />
              <Route
                path="/solutions/retail/ai-automation"
                element={<RetailAIAutomation />}
              />
              <Route
                path="/solutions/retail/mobility-solutions"
                element={<RetailMobilitySolutions />}
              />
              <Route
                path="/solutions/api-modernization"
                element={<APIModernization />}
              />
              <Route
                path="/solutions/digital-automation"
                element={<DigitalAutomation />}
              />
              <Route path="/solutions/finance" element={<Finance />} />
              <Route path="/solutions/retail" element={<Retail />} />

              {/* Industries Page */}
              <Route path="/industries" element={<Industries />} />

              {/* Resources Page */}
              <Route path="/resources" element={<Resources />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="/careers" element={<Careers />} />

              <Route path="/careers/faq" element={<FAQ />} />
              <Route
                path="/careers/finding-the-right-fit"
                element={<FindingTheRightFit />}
              />
              <Route
                path="/careers/hiring-process"
                element={<UnderstandingHiringProcess />}
              />

              <Route path="/leadership-team" element={<LeadershipTeam />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/global-presence" element={<GlobalPresence />} />
              <Route path="/life-at-invictus" element={<LifeAtInvictus />} />

              <Route path="/partners-alliances" element={<PartnersAlliances />} />
              <Route path="/news-media" element={<NewsMedia />} />

              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/blog-insights" element={<BlogInsights />} />
              <Route
                path="/blog/case-study-how-data-analytics-is-revolutionizing-food-distribution"
                element={<FoodDistributionCaseStudy />}
              />
              <Route
                path="/blog/spark-optimization-gcp-dataproc"
                element={<SparkOptimizationGCPDataproc />}
              />
              <Route path="/whitepapers" element={<Whitepapers />} />
              <Route path="/whitepapers/:slug" element={<WhitepaperDetail />} />

              <Route
                path="/schedule-consultation"
                element={<ScheduleConsultation />}
              />
              <Route path="/contact" element={<Contact />} />

              {/* Catch-all 404 route - MUST be last */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </GA4Provider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
