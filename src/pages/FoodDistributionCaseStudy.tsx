import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import AnimatedBackground from "@/components/ui/AnimatedBackground";
import { ArrowLeft, TrendingUp, Truck, Users, BarChart3 } from "lucide-react";

const FoodDistributionCaseStudy: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/blog-insights");
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-[#EFF6FF] flex flex-col">
      <div className="relative z-20">
        <Navbar
          showContactForm={showContactForm}
          setShowContactForm={setShowContactForm}
          logoSize="sm"
        />
      </div>
      <AnimatedBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32 relative z-10 flex-1">
        {/* Back Button */}
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Blog & Insights
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 font-['Lexend'] leading-tight">
            Case Study: How Data Analytics Is Revolutionizing Food Distribution
          </h1>
          <div className="text-base sm:text-lg text-slate-600 font-['DM_Sans'] mb-6">
            By Nirjar Sanghavi, CEO
          </div>
          <div className="w-24 h-1 bg-[#2563EB] mx-auto rounded-full mb-8"></div>

          {/* Blog Image */}
          <div className="w-full max-w-5xl mx-auto ml-4 sm:ml-8 lg:ml-24">
            <img
              src="/placeholders/team-collaboration.jpg"
              alt="Data Analytics Revolutionizing Food Distribution"
              width={896}
              height={488}
              className="w-full h-auto rounded-2xl shadow-2xl border border-[#2563EB]/30 object-cover"
              style={{ maxWidth: "896px", maxHeight: "488px" }}
            />
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8 mb-8">
          <p className="text-base sm:text-lg text-slate-900 font-['DM_Sans'] leading-relaxed">
            In the complex and fast-paced world of food distribution, companies
            face enormous pressure to deliver fresh, safe, and high-quality
            products on time while managing rising costs, fluctuating demand,
            and increasingly strict sustainability standards. In recent years,
            data analytics has emerged as the backbone of innovation, helping
            food distributors reimagine their operations with precision,
            agility, and foresight.
          </p>
          <p className="text-base sm:text-lg text-slate-900 font-['DM_Sans'] leading-relaxed mt-4">
            This case study explores how leading food distribution companies are
            leveraging data analytics across the supply chain to enhance
            efficiency, customer satisfaction, sustainability, and
            profitability.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8 sm:space-y-12">
          {/* Section 1 */}
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563EB] flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-['Lexend'] leading-tight">
                1. Demand Forecasting and Inventory Optimization
              </h2>
            </div>

            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#2563EB] mb-3 font-['DM_Sans']">
                Challenge:
              </h3>
              <p className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] leading-relaxed">
                Demand in the foodservice industry is notoriously volatile.
                Seasonal trends, regional preferences, and unpredictable
                disruptions (like extreme weather or global supply chain shocks)
                make accurate forecasting difficult. Overstock leads to
                waste—particularly for perishable items—while understocking
                results in missed sales and unhappy customers.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#2563EB] mb-3 font-['DM_Sans']">
                Data Analytics Solution:
              </h3>
              <p className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] leading-relaxed">
                Advanced predictive models, powered by historical sales data,
                market trends, and real-time inputs (e.g., weather, holidays,
                macroeconomic signals), allow distributors to forecast demand
                with high precision.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#2563EB] mb-3 font-['DM_Sans']">
                Impact:
              </h3>
              <ul className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>20–30% improvement in inventory turnover rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>Up to 15% reduction in food spoilage and waste</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>
                    Greater availability of high-demand items without
                    overstocking
                  </span>
                </li>
              </ul>
              <p className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] leading-relaxed mt-4">
                By integrating machine learning algorithms, companies adjust
                forecasts dynamically—accounting for sudden changes in demand at
                the regional or even store level.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563EB] flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-['Lexend'] leading-tight">
                2. Route Optimization and Logistics Efficiency
              </h2>
            </div>

            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#2563EB] mb-3 font-['DM_Sans']">
                Challenge:
              </h3>
              <p className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] leading-relaxed">
                Fuel costs, driver shortages, and delivery time windows present
                significant logistical constraints. Ensuring timely delivery
                without increasing operational costs is a balancing act.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#2563EB] mb-3 font-['DM_Sans']">
                Data Analytics Solution:
              </h3>
              <p className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] leading-relaxed">
                Companies are using real-time route optimization tools that
                analyze traffic, delivery schedules, vehicle loads, and
                geographic proximity to dynamically assign the most efficient
                delivery routes. These systems are connected with GPS trackers
                and delivery apps to monitor and update performance on the fly.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#2563EB] mb-3 font-['DM_Sans']">
                Impact:
              </h3>
              <ul className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>10–20% reduction in fuel consumption</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>12–18% improvement in on-time delivery rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>
                    Lower carbon emissions and improved driver utilization
                  </span>
                </li>
              </ul>
              <p className="text-sm sm:text-base text-slate-900 font-['DM_Sans'] leading-relaxed mt-4">
                Geospatial analytics helps identify bottlenecks, streamline
                routes, and reduce idle time—all while improving customer
                satisfaction with accurate ETA updates.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563EB] flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-['Lexend'] leading-tight">
                3. Customer Insights and Personalization
              </h2>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#2563EB] mb-3 font-['DM_Sans']">
                Challenge:
              </h3>
              <p className="text-slate-900 font-['DM_Sans'] leading-relaxed">
                In a saturated and highly competitive market, retaining
                foodservice customers—ranging from independent restaurants to
                healthcare institutions—requires delivering tailored experiences
                and understanding unique preferences.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#2563EB] mb-3 font-['DM_Sans']">
                Data Analytics Solution:
              </h3>
              <p className="text-slate-900 font-['DM_Sans'] leading-relaxed">
                By mining transaction history, order patterns, feedback data,
                and engagement metrics, food distributors can build customer
                360° profiles. These insights are used for smart
                recommendations, personalized pricing, and targeted promotions.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#2563EB] mb-3 font-['DM_Sans']">
                Impact:
              </h3>
              <ul className="text-slate-900 font-['DM_Sans'] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>
                    25% increase in cross-sell and upsell opportunities
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>Improved customer retention rates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>
                    Higher average order value through personalized product
                    suggestions
                  </span>
                </li>
              </ul>
              <p className="text-slate-900 font-['DM_Sans'] leading-relaxed mt-4">
                This analytics-driven approach allows sales teams to proactively
                meet customer needs, suggesting relevant new items (e.g.,
                plant-based proteins or local produce) and forecasting churn
                risk early.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
              <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-[#2563EB] flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 font-['Lexend'] leading-tight">
                4. Supplier and Product Performance Analytics
              </h2>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#2563EB] mb-3 font-['DM_Sans']">
                Challenge:
              </h3>
              <p className="text-slate-900 font-['DM_Sans'] leading-relaxed">
                Food safety and quality are non-negotiable. Distributors must
                track the performance of thousands of SKUs from hundreds of
                suppliers while ensuring consistent quality and compliance with
                safety standards.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#2563EB] mb-3 font-['DM_Sans']">
                Data Analytics Solution:
              </h3>
              <p className="text-slate-900 font-['DM_Sans'] leading-relaxed">
                Supplier scorecards and product-level analytics help identify
                trends in delivery performance, defect rates, recall frequency,
                and pricing variability. Dashboards provide procurement teams
                with real-time insights into supplier reliability and product
                success.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-[#2563EB] mb-3 font-['DM_Sans']">
                Impact:
              </h3>
              <ul className="text-slate-900 font-['DM_Sans'] space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>15% improvement in supplier performance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>
                    Faster response to recall events through automated
                    notifications and tracking
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#2563EB] font-bold">•</span>
                  <span>
                    Improved sourcing decisions based on data-backed supplier
                    evaluation
                  </span>
                </li>
              </ul>
              <p className="text-slate-900 font-['DM_Sans'] leading-relaxed mt-4">
                With AI and blockchain integration, some distributors have also
                enhanced traceability from source to shelf, supporting both food
                safety and transparency demands.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-gradient-to-r from-[#2563EB]/20 to-[#1E3A8A]/20 backdrop-blur-2xl rounded-2xl border border-[#2563EB]/30 p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-6 font-['Lexend'] text-center leading-tight">
              Conclusion: A Data-First Future for Food Distribution
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-900 font-['DM_Sans'] leading-relaxed">
              <p>
                The evolution of the food distribution industry is being shaped
                by data at every touchpoint. From optimizing truck routes and
                inventory to anticipating customer demand and minimizing waste,
                analytics is no longer a support function—it's a strategic
                imperative.
              </p>
              <p>
                Distributors that invest in end-to-end data integration,
                AI-driven insights, and real-time decision-making tools are not
                just keeping pace—they're setting the standard for a smarter,
                more sustainable, and customer-focused industry.
              </p>
              <p className="font-semibold text-[#2563EB]">
                As foodservice distribution continues to scale in complexity and
                scope, the winners will be those who treat data not just as a
                resource, but as a competitive advantage.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Blog Button */}
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={handleBackClick}
            className="bg-[#2563EB] hover:bg-[#1E40AF] text-white rounded-lg px-6 sm:px-8 py-2 sm:py-3 font-['Lexend'] font-semibold text-base sm:text-lg transition-all duration-200 shadow-md hover:shadow-lg hover:shadow-[#2563EB]/25"
          >
            Back to Blog & Insights
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodDistributionCaseStudy;
