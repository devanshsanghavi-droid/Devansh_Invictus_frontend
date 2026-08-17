import React from "react";
import { ArrowUpRight, Check } from "lucide-react";

/*
 * ============================= PLACEHOLDER ART =============================
 * A stylised representation of an analytics console, not a screenshot. Drawn in
 * CSS/SVG so it ships with no image assets and stays sharp at any size.
 *
 * The figures are illustrative. The one real number is $74M, which the site
 * already claims elsewhere (Finance & Fintech industry data). If you swap this
 * for a genuine product screenshot, make sure it carries no live client data.
 * ===========================================================================
 */

// Relative bar heights as percentages. Trending upward, with enough variation
// to read as real data rather than a smooth curve.
const bars = [34, 48, 41, 57, 50, 68, 62, 79, 71, 88];

const pipelines = [
  { name: "Shopify · orders", status: "Synced" },
  { name: "Amazon · retail media", status: "Synced" },
  { name: "Snowflake · warehouse", status: "Synced" },
];

export const HeroConsole: React.FC = () => {
  return (
    <div className="relative">
      <div className="rounded-xl overflow-hidden bg-[#0B1220] border border-slate-800 shadow-xl">
        {/* Title bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <span className="text-xs font-medium text-slate-400">
            Revenue analytics
          </span>
          <span className="ml-auto text-[10px] font-semibold tracking-[0.12em] uppercase text-slate-500">
            Last 12 months
          </span>
        </div>

        <div className="p-5 space-y-5">
          {/* Headline figure */}
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.12em] uppercase text-slate-500 mb-1.5">
                Client revenue generated
              </p>
              <p className="tnum text-3xl font-semibold text-white leading-none">
                $74M
              </p>
            </div>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400">
              <ArrowUpRight className="w-3.5 h-3.5" />
              18.4%
            </span>
          </div>

          {/* Bar chart */}
          <div
            className="flex items-end gap-1.5 h-28"
            role="img"
            aria-label="Illustrative chart showing revenue trending upward over twelve months"
          >
            {bars.map((height, i) => (
              <div
                key={i}
                className="console-bar flex-1 rounded-sm"
                style={{
                  height: `${height}%`,
                  animationDelay: `${i * 60}ms`,
                  background:
                    i === bars.length - 1
                      ? "linear-gradient(180deg, #60A5FA 0%, #2563EB 100%)"
                      : "rgba(96,165,250,0.28)",
                }}
              />
            ))}
          </div>

          {/* Pipeline status rows */}
          <div className="border-t border-white/10 pt-4 space-y-2.5">
            {pipelines.map((pipeline) => (
              <div
                key={pipeline.name}
                className="flex items-center justify-between gap-4"
              >
                <span className="text-xs text-slate-400 truncate">
                  {pipeline.name}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 shrink-0">
                  <Check className="w-3 h-3" />
                  {pipeline.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroConsole;
