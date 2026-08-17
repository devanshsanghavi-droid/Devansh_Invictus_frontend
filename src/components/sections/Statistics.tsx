import React from "react";

export const Statistics: React.FC = () => {
  const stats = [
    {
      number: "50+",
      label: "Enterprise brands",
      description: "Global enterprises we deliver for today.",
    },
    {
      number: "40%",
      label: "Average ROI improvement",
      description: "Typical gain in operational efficiency post-engagement.",
    },
    {
      number: "200+",
      label: "Success stories",
      description: "Production AI and data solutions shipped to date.",
    },
    {
      number: "24/7",
      label: "Global support",
      description: "Follow-the-sun coverage across four offices.",
    },
  ];

  return (
    <section className="w-full border-b border-slate-200 bg-[#0B1220]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-16 mb-16">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-5 !text-slate-400">Track record</p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] font-semibold text-white">
              Measured across the portfolio
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-11">
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
              Figures below reflect delivered client engagements across our data,
              analytics, and platform practices.
            </p>
          </div>
        </div>

        <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/15">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-b border-white/15 md:border-r md:last:border-r-0 py-8 md:px-8 md:first:pl-0
                         lg:[&:nth-child(4)]:border-r-0"
            >
              <dd className="tnum text-5xl lg:text-[3.5rem] leading-none font-semibold text-white">
                {stat.number}
              </dd>
              <dt className="text-base font-medium text-white mt-4">
                {stat.label}
              </dt>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Statistics;
