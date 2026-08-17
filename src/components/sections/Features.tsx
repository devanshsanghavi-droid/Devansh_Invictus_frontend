import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const Features: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      id: 1,
      metric: "40%+",
      metricLabel: "ROI improvement",
      title: "Revenue-driven analytics",
      description:
        "Transform data into decisions that move the bottom line. Clients see measurable ROI improvements from analytics we build and operate with them.",
    },
    {
      id: 2,
      metric: "3x",
      metricLabel: "Faster deployment",
      title: "AI-first acceleration",
      description:
        "Deploy production-ready ML models faster with our Elevate platform. From predictive analytics to generative AI, built for production from day one.",
    },
    {
      id: 3,
      metric: "120+",
      metricLabel: "Engineers across 3 offices",
      title: "Enterprise-grade expertise",
      description:
        "A team spanning three global offices with deep enterprise delivery experience across regulated, high-volume environments.",
    },
    {
      id: 4,
      metric: "1",
      metricLabel: "Delivery partner",
      title: "End-to-end delivery",
      description:
        "From cloud migration through AI integration, a single partner across the stack. Fewer handoffs, shorter timelines, clearer accountability.",
    },
  ];

  return (
    <section className="w-full border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-16 mb-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5">Why enterprises choose us</p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] font-semibold text-slate-900">
              Built for enterprise delivery
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-11">
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              Mid to large enterprises work with us to accelerate data
              transformation against outcomes they can measure.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border-r border-b border-slate-200 p-8 flex flex-col"
            >
              <div className="tnum text-3xl font-semibold text-slate-900">
                {feature.metric}
              </div>
              <div className="text-xs text-slate-500 mt-1.5 mb-8">
                {feature.metricLabel}
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-12">
          <p className="text-lg text-slate-900 max-w-xl">
            Want to see how this applies to your environment?
          </p>
          <button
            onClick={() => navigate("/schedule-consultation")}
            className="inline-flex items-center gap-2 self-start bg-[#2563EB] hover:bg-[#1E40AF] text-white
                       px-6 py-3 text-[15px] font-medium rounded-sm transition-colors duration-150 shrink-0"
          >
            Schedule a consultation
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
