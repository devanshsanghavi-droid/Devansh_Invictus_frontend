import React from "react";
import { ArrowUpRight, BarChart3, Network, DatabaseZap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import Seo from "@/components/Seo";

/*
 * Each panel deliberately carries its own product's brand look rather than the
 * site's editorial palette - Trivas' starfield navy, Nexus' teal-to-orange.
 * This is an intentional exception to the site design rules in CLAUDE.md.
 */

// Deterministic starfield for the Trivas panel. Fixed values, not random, so the
// field doesn't reshuffle on every render.
const STARS = [
  [6, 12, 1], [14, 34, 1], [9, 61, 2], [18, 78, 1], [23, 22, 1],
  [28, 51, 1], [33, 8, 2], [37, 88, 1], [41, 39, 1], [46, 66, 1],
  [52, 17, 2], [57, 45, 1], [61, 73, 1], [66, 29, 1], [71, 92, 1],
  [74, 55, 2], [79, 14, 1], [83, 68, 1], [88, 36, 1], [92, 81, 1],
  [95, 24, 1], [3, 47, 1], [12, 95, 1], [44, 5, 1], [69, 4, 1],
  [86, 57, 2], [25, 70, 1], [55, 84, 1], [98, 62, 1], [31, 41, 1],
] as const;

const Products: React.FC = () => {
  return (
    <>
      <Seo
        title="Products - Invictus Data"
        description="Trivas, Nexus, and Spectra: the AI analytics, B2B CRM, and data ingestion products built and operated by Invictus Data."
        keywords="Trivas, Nexus, Spectra, AI analytics platform, B2B CRM, data ingestion, Invictus Data products"
      />
      <div className="w-full min-h-screen bg-white">
        <Navbar />

        {/* Page header */}
        <section className="w-full border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pt-36 pb-16 lg:pt-44 lg:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-x-16">
              <div className="lg:col-span-5">
                <p className="eyebrow mb-5">Products</p>
                <h1 className="text-[2.5rem] leading-[1.08] md:text-5xl lg:text-[3.5rem] font-semibold text-slate-900">
                  Three products, one data platform
                </h1>
              </div>
              <div className="lg:col-span-7 lg:pt-16">
                <p className="text-lg md:text-xl leading-relaxed text-slate-600 max-w-2xl">
                  We build and operate the software our engagements run on. Each
                  product stands alone, and they compose - ingest with Spectra,
                  analyse with Trivas, act in Nexus.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Three brand-styled panels */}
        <section className="w-full border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* ---------- Trivas ---------- */}
              <article className="relative overflow-hidden rounded-2xl bg-[#05060F] min-h-[540px] flex flex-col">
                {/* starfield */}
                <div className="absolute inset-0" aria-hidden="true">
                  {STARS.map(([left, top, size], i) => (
                    <span
                      key={i}
                      className="absolute rounded-full bg-white"
                      style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        width: `${size}px`,
                        height: `${size}px`,
                        opacity: size > 1 ? 0.85 : 0.5,
                      }}
                    />
                  ))}
                </div>
                {/* deep blue nebula wash, echoing the Trivas sign-in art */}
                <div
                  className="absolute inset-0"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(120% 90% at 50% 55%, rgba(37,71,190,0.55) 0%, rgba(12,18,60,0.5) 38%, rgba(5,6,15,0) 72%)",
                  }}
                />
                <div
                  className="absolute inset-x-0 top-0 h-40"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(46,42,140,0.85) 0%, rgba(5,6,15,0) 100%)",
                  }}
                />

                <div className="relative z-10 flex flex-col h-full p-8">
                  <div className="flex items-center gap-2.5 mb-10">
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
                      <span className="text-[#05060F] font-bold text-sm leading-none">
                        t.
                      </span>
                    </span>
                    <span className="text-white font-semibold text-lg">
                      trivas<span className="text-[#34D399]">.</span>ai
                    </span>
                  </div>

                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#7C93FF] mb-4">
                    AI Analytics Platform
                  </p>
                  <h2 className="text-3xl font-semibold text-white leading-tight mb-4">
                    Your{" "}
                    <span className="text-[#5B7CFA]">AI Wingman</span> for
                    commerce data
                  </h2>
                  <p className="text-[15px] leading-relaxed text-slate-300/90 mb-8">
                    Turn commerce data into decisions with AI-driven analytics,
                    forecasting, and actionable insights.
                  </p>

                  <ul className="space-y-2.5 mb-10">
                    {[
                      "AI-generated insight summaries",
                      "Demand and revenue forecasting",
                      "Multi-channel commerce analytics",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm text-slate-300/80"
                      >
                        <BarChart3 className="w-4 h-4 text-[#5B7CFA] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://app.trivas.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 w-full
                               bg-[#5B5FEF] hover:bg-[#4A4EDB] text-white font-medium text-[15px]
                               px-6 py-3.5 rounded-xl transition-colors duration-150"
                  >
                    Open Trivas
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </article>

              {/* ---------- Nexus ---------- */}
              <article className="relative overflow-hidden rounded-2xl min-h-[540px] flex flex-col bg-[#06363D]">
                <div
                  className="absolute inset-0"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(150deg, #0B4A52 0%, #083F47 45%, #052C33 100%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  aria-hidden="true"
                  style={{
                    background:
                      "radial-gradient(80% 60% at 85% 8%, rgba(245,148,59,0.20) 0%, rgba(6,54,61,0) 60%)",
                  }}
                />
                {/* teal → orange hairline, lifted from the Nexus sign-in card */}
                <div
                  className="absolute inset-x-0 top-0 h-[3px] z-10"
                  aria-hidden="true"
                  style={{
                    background:
                      "linear-gradient(90deg, #14A8C4 0%, #4FBFA8 35%, #F5943B 75%, #F5C542 100%)",
                  }}
                />

                <div className="relative z-10 flex flex-col h-full p-8">
                  <div className="flex items-center gap-2.5 mb-10">
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background:
                          "linear-gradient(135deg, #22C4D6 0%, #1A9BB5 100%)",
                      }}
                    >
                      <Network className="w-4 h-4 text-white" />
                    </span>
                    <span className="text-white font-semibold text-lg">
                      Nexus
                    </span>
                  </div>

                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#F5C542] mb-4">
                    Sales · Pipeline · Reporting
                  </p>
                  <h2 className="text-3xl font-semibold text-white leading-tight mb-4">
                    Run the whole pipeline from one calm workspace
                  </h2>
                  <p className="text-[15px] leading-relaxed text-teal-50/75 mb-8">
                    Manage accounts, pipelines, and planning in one connected
                    workspace built for B2B teams.
                  </p>

                  <ul className="space-y-4 mb-10">
                    {[
                      {
                        title: "Pipeline at a glance",
                        body: "Every opportunity, stage and weighted forecast in one board.",
                      },
                      {
                        title: "Accounts you can trust",
                        body: "Contacts, organizations and deals - clean, deduped and connected.",
                      },
                      {
                        title: "Reports that reconcile",
                        body: "Forecast vs plan, variance and GP% - to the dollar.",
                      },
                    ].map((item) => (
                      <li key={item.title} className="flex gap-3">
                        <span className="w-7 h-7 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                          <BarChart3 className="w-3.5 h-3.5 text-[#F5943B]" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-white">
                            {item.title}
                          </span>
                          <span className="block text-[13px] leading-relaxed text-teal-50/70 mt-0.5">
                            {item.body}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://nexus.invictusdata.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 w-full
                               text-white font-semibold text-[15px] px-6 py-3.5 rounded-xl
                               transition-opacity duration-150 hover:opacity-90"
                    style={{
                      background:
                        "linear-gradient(90deg, #F5943B 0%, #F07E2A 100%)",
                    }}
                  >
                    Open Nexus
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </article>

              {/* ---------- Spectra (intentionally plain) ---------- */}
              <article className="relative overflow-hidden rounded-2xl min-h-[540px] flex flex-col bg-white border border-slate-200">
                <div className="relative z-10 flex flex-col h-full p-8">
                  <div className="flex items-center gap-2.5 mb-10">
                    <span className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                      <DatabaseZap className="w-4 h-4 text-slate-700" />
                    </span>
                    <span className="text-slate-900 font-semibold text-lg">
                      Spectra
                    </span>
                  </div>

                  <p className="eyebrow mb-4">Data Ingestion Software</p>
                  <h2 className="text-3xl font-semibold text-slate-900 leading-tight mb-4">
                    Every source into your warehouse, reliably
                  </h2>
                  <p className="text-[15px] leading-relaxed text-slate-600 mb-8">
                    Ingest, validate, and route data from any source into your
                    warehouse - reliably and at scale.
                  </p>

                  <ul className="space-y-2.5 mb-10">
                    {[
                      "Connectors for warehouses and SaaS sources",
                      "Schema validation and contract enforcement",
                      "Backfills, retries and delivery guarantees",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm text-slate-600"
                      >
                        <span className="text-slate-300 select-none">-</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://spectra.trivas.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center gap-2 w-full
                               bg-[#2563EB] hover:bg-[#1E40AF] text-white font-medium text-[15px]
                               px-6 py-3.5 rounded-xl transition-colors duration-150"
                  >
                    Open Spectra
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="w-full border-b border-slate-200">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <p className="text-lg text-slate-900 max-w-xl">
                Not sure which fits? We'll map them to your stack in one session.
              </p>
              <a
                href="/schedule-consultation"
                className="inline-flex items-center gap-2 self-start bg-[#2563EB] hover:bg-[#1E40AF]
                           text-white px-6 py-3 text-[15px] font-medium rounded-sm
                           transition-colors duration-150 shrink-0"
              >
                Schedule a consultation
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Products;
