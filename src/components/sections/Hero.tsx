import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ClientMarquee from "@/components/sections/ClientMarquee";
import HeroConsole from "@/components/sections/HeroConsole";

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-center pt-32 pb-16 lg:pt-40 lg:pb-20">
          {/* Copy */}
          <div className="lg:col-span-6">
            <p className="eyebrow mb-5">Data &amp; AI engineering</p>
            <h1 className="text-[2.5rem] leading-[1.05] md:text-[3.5rem] lg:text-[4rem] font-semibold text-slate-900 mb-6">
              AI systems that run in production
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-xl">
              We build the data platforms and AI systems enterprises depend on,
              from ingestion through to the decisions they drive.
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

          {/* Product console */}
          <div className="lg:col-span-6">
            <HeroConsole />
          </div>
        </div>
      </div>

      <ClientMarquee />
    </section>
  );
};

export default Hero;
