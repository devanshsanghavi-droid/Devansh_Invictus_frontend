import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Industries: React.FC = () => {
  const industries = [
    {
      name: "E-commerce",
      description:
        "Advanced analytics and automation for online storefronts across Shopify, WooCommerce, and Amazon, driving growth and customer retention.",
      mainMetric: "150%",
      mainMetricLabel: "Average traffic increase",
      achievements: [
        "25% increase in sales conversion",
        "Real-time demand forecasting",
        "30% uplift in customer retention",
      ],
      technologies: ["Shopify Plus", "Amazon API", "BigQuery"],
      clientCount: "10+ e-commerce brands",
      href: "/solutions/ecommerce",
    },
    {
      name: "Retail",
      description:
        "Omnichannel retail intelligence with real-time inventory optimization and supply chain insights for physical and digital storefronts.",
      mainMetric: "40%",
      mainMetricLabel: "Inventory cost reduction",
      achievements: [
        "40% reduction in inventory costs",
        "Optimized store-level stocking",
        "Integrated POS analytics",
      ],
      technologies: ["BigQuery", "Looker", "Retail ERP"],
      clientCount: "5+ enterprise retailers",
      href: "/solutions/retail",
    },
    {
      name: "Finance & Fintech",
      description:
        "Real-time risk analytics, regulatory compliance, and fraud detection with enterprise-grade security.",
      mainMetric: "$74M",
      mainMetricLabel: "Client revenue generated",
      achievements: [
        "99.9% fraud detection accuracy",
        "50% faster compliance reporting",
        "Real-time risk monitoring",
      ],
      technologies: ["Snowflake", "Apache Kafka", "TensorFlow"],
      clientCount: "8+ financial institutions",
      href: "/solutions/finance",
    },
    {
      name: "Logistics & Supply Chain",
      description:
        "End-to-end visibility, predictive maintenance, and route optimization with IoT integration.",
      mainMetric: "200%",
      mainMetricLabel: "Efficiency improvement",
      achievements: [
        "35% reduction in delivery times",
        "Predictive maintenance savings",
        "Real-time fleet tracking",
      ],
      technologies: ["AWS IoT", "Apache Spark", "Tableau"],
      clientCount: "10+ logistics companies",
      href: "/solutions/cloud-data-migration",
    },
  ];

  return (
    <section className="w-full border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-16 mb-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">Industry expertise</p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] font-semibold text-slate-900">
              Industries we work in
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-11">
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Deep domain expertise across verticals, with delivery records
              against outcomes the business already tracks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-l border-slate-200">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              to={industry.href}
              className="group border-r border-b border-slate-200 p-8 lg:p-10 flex flex-col
                         hover:bg-slate-50 transition-colors duration-150
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-inset"
            >
              <div className="flex items-baseline justify-between gap-4 mb-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {industry.name}
                </h3>
                <span className="text-xs text-slate-500 shrink-0">
                  {industry.clientCount}
                </span>
              </div>

              <div className="flex items-baseline gap-4 pb-6 mb-6 border-b border-slate-200">
                <span className="tnum text-5xl font-semibold text-slate-900 leading-none">
                  {industry.mainMetric}
                </span>
                <span className="text-sm text-slate-500">
                  {industry.mainMetricLabel}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {industry.description}
              </p>

              <dl className="mb-6">
                <dt className="eyebrow mb-3">Key results</dt>
                <dd>
                  <ul className="space-y-1.5">
                    {industry.achievements.map((achievement) => (
                      <li
                        key={achievement}
                        className="text-sm text-slate-600 flex gap-3"
                      >
                        <span className="text-slate-300 select-none">-</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </dd>
              </dl>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
                <span className="text-xs text-slate-500">
                  {industry.technologies.join(" · ")}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#2563EB]">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
