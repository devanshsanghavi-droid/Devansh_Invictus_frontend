import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export const ServicesOverview: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const services = [
    {
      title: "E-commerce & Digital",
      description:
        "Comprehensive e-commerce analytics and digital marketing optimization across all major platforms.",
      expandedFeatures: [
        "Unified multi-channel analytics",
        "Amazon & Shopify store optimization",
        "Digital marketing attribution",
        "Customer journey analytics",
        "Revenue optimization & A/B testing",
      ],
      clientExample:
        "Increased online revenue by 60% for a retail brand through unified analytics.",
      technologies: [
        "Shopify Plus",
        "Amazon API",
        "Google Analytics",
        "Meta Business",
      ],
    },
    {
      title: "Data & Analytics",
      description:
        "Transform raw data into strategic business intelligence with real-time dashboards and predictive insights.",
      expandedFeatures: [
        "Custom business intelligence dashboards",
        "Predictive analytics & forecasting",
        "Data engineering & pipeline automation",
        "Regulatory compliance & data governance",
        "Multi-source integration (CRM, ERP)",
      ],
      clientExample:
        "Helped a retail client increase sales by 25% through predictive inventory analytics.",
      technologies: ["Snowflake", "Tableau", "Power BI", "Apache Airflow"],
    },
    {
      title: "AI/ML & Emerging Tech",
      description:
        "Deploy production-ready machine learning models and generative AI solutions on our Elevate platform.",
      expandedFeatures: [
        "Custom ML model development & training",
        "Large language model integration",
        "Computer vision & natural language processing",
        "MLOps & model lifecycle management",
        "Elevate AI platform",
      ],
      clientExample:
        "Automated 80% of manual processes for a logistics client using custom AI models.",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face"],
    },
    {
      title: "Cloud & Infrastructure",
      description:
        "Cloud migration and infrastructure optimization with enterprise-grade security and scalability.",
      expandedFeatures: [
        "Multi-cloud architecture & migration",
        "Kubernetes & container orchestration",
        "Infrastructure as code",
        "CI/CD pipeline automation",
        "24/7 monitoring & support",
      ],
      clientExample:
        "Reduced infrastructure costs by 40% for a fintech client through cloud optimization.",
      technologies: ["AWS", "Azure", "GCP", "Terraform"],
    },
  ];

  return (
    <section className="w-full border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-16 mb-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">Solution portfolio</p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] font-semibold text-slate-900">
              Our core solutions
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-11">
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              End-to-end data and AI solutions, delivered by practitioners who
              run them in production.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div key={service.title} className="border-b border-slate-200">
                <h3>
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    aria-expanded={isExpanded}
                    aria-controls={`service-panel-${index}`}
                    className="w-full text-left py-7 flex items-start gap-6 group
                               focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-inset"
                  >
                    <span className="tnum text-sm text-slate-400 pt-1.5 w-8 shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16 gap-y-2">
                      <span className="lg:col-span-4 text-xl font-semibold text-slate-900">
                        {service.title}
                      </span>
                      <span className="lg:col-span-8 text-[15px] text-slate-600 leading-relaxed lg:pt-1">
                        {service.description}
                      </span>
                    </span>
                    <span className="shrink-0 pt-1.5 text-slate-400 group-hover:text-slate-900 transition-colors duration-150">
                      {isExpanded ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </span>
                  </button>
                </h3>

                {isExpanded && (
                  <div
                    id={`service-panel-${index}`}
                    className="pb-10 lg:pl-14 grid grid-cols-1 lg:grid-cols-12 lg:gap-x-16 gap-y-8"
                  >
                    <div className="lg:col-span-4">
                      <p className="eyebrow mb-4">Capabilities</p>
                      <ul className="space-y-2">
                        {service.expandedFeatures.map((feature) => (
                          <li
                            key={feature}
                            className="text-sm text-slate-600 flex gap-3"
                          >
                            <span className="text-slate-300 select-none">—</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:col-span-4">
                      <p className="eyebrow mb-4">Representative outcome</p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.clientExample}
                      </p>
                    </div>

                    <div className="lg:col-span-4">
                      <p className="eyebrow mb-4">Key technologies</p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.technologies.join(" · ")}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
