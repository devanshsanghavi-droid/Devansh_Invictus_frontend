import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ClientMarquee from "@/components/sections/ClientMarquee";

const stats = [
  { value: "120+", label: "Data & AI engineers" },
  { value: "25+", label: "Enterprise clients" },
  { value: "100+", label: "Projects delivered" },
  { value: "4", label: "Global offices" },
];

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-16 pt-36 pb-16 lg:pt-44 lg:pb-20">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Data &amp; AI engineering</p>
            <h1 className="text-[2.5rem] leading-[1.08] md:text-6xl lg:text-[4.25rem] font-semibold text-slate-900 mb-6">
              Engineering AI systems that transform enterprise operations
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl">
              We partner with forward-looking brands to build intelligent
              platforms that drive efficiency, unlock value, and accelerate
              measurable outcomes at scale.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-10">
              <button
                onClick={() => navigate("/solutions")}
                className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1E40AF] text-white
                           px-6 py-3 text-[15px] font-medium rounded-sm transition-colors duration-150"
              >
                Explore our solutions
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate("/schedule-consultation")}
                className="inline-flex items-center gap-2 text-[15px] font-medium text-slate-900
                           border-b border-slate-400 hover:border-slate-900 pb-0.5 transition-colors duration-150"
              >
                Talk to our team
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 lg:border-l lg:border-slate-200 lg:pl-16 flex items-end">
            <dl className="grid grid-cols-2 gap-y-8 gap-x-8 w-full">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block tnum text-4xl lg:text-5xl font-semibold text-slate-900">
                      {stat.value}
                    </span>
                    <span className="block mt-2 text-sm text-slate-500">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <ClientMarquee />
    </section>
  );
};

export default Hero;
