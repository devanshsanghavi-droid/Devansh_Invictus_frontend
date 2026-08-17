import React from "react";

/*
 * ============================ TEMPORARY PLACEHOLDER ============================
 * These are FAANG logos standing in until the real client list is ready.
 * They are NOT Invictus Data clients, and the strip is labelled accordingly
 * ("Sample logos") so the page doesn't imply an endorsement that doesn't exist.
 *
 * When the cleared client list arrives: replace the `clients` array below with
 * the real names/logos and change the label back to "Trusted by". Everything
 * placeholder-related lives in this one file so it can be swapped in one pass.
 *
 * The marks are drawn inline (no external requests, no bundled trademark files)
 * and are simplified approximations, not official brand assets.
 * ==============================================================================
 */

const Meta = () => (
  <span
    className="text-[22px] font-bold tracking-tight"
    style={{ color: "#0081FB" }}
  >
    Meta
  </span>
);

const Apple = () => (
  <span className="inline-flex items-center gap-1.5">
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#111111" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.53 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
    <span className="text-[22px] font-medium tracking-tight text-[#111111]">
      Apple
    </span>
  </span>
);

const Amazon = () => (
  <span className="relative inline-flex flex-col items-center leading-none">
    <span className="text-[22px] font-bold tracking-tight text-[#111111]">
      amazon
    </span>
    <svg
      viewBox="0 0 100 14"
      className="w-[68px] h-[10px] -mt-0.5"
      aria-hidden="true"
    >
      <path
        d="M4 4 C 28 15, 72 15, 92 4"
        fill="none"
        stroke="#FF9900"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path d="M88 1 L97 4 L88 8 Z" fill="#FF9900" />
    </svg>
  </span>
);

const Netflix = () => (
  <span
    className="text-[21px] font-extrabold tracking-[0.02em]"
    style={{ color: "#E50914" }}
  >
    NETFLIX
  </span>
);

const Google = () => (
  <span className="text-[22px] font-medium tracking-tight">
    <span style={{ color: "#4285F4" }}>G</span>
    <span style={{ color: "#EA4335" }}>o</span>
    <span style={{ color: "#FBBC05" }}>o</span>
    <span style={{ color: "#4285F4" }}>g</span>
    <span style={{ color: "#34A853" }}>l</span>
    <span style={{ color: "#EA4335" }}>e</span>
  </span>
);

const clients = [
  { name: "Meta", Logo: Meta },
  { name: "Apple", Logo: Apple },
  { name: "Amazon", Logo: Amazon },
  { name: "Netflix", Logo: Netflix },
  { name: "Google", Logo: Google },
];

// The track is duplicated so translateX(-50%) lands exactly on a seam.
const REPEATS = 3;
const track = Array.from({ length: REPEATS }, () => clients).flat();

export const ClientMarquee: React.FC = () => {
  return (
    <div className="w-full border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 py-8">
          <p className="eyebrow shrink-0">Sample logos</p>

          <div className="marquee relative flex-1 overflow-hidden">
            <div
              className="marquee-track flex w-max items-center"
              aria-hidden="true"
            >
              {[0, 1].map((copy) => (
                <ul key={copy} className="flex items-center shrink-0">
                  {track.map((client, i) => (
                    <li
                      key={`${copy}-${client.name}-${i}`}
                      className="flex items-center whitespace-nowrap"
                    >
                      <span className="px-10 flex items-center">
                        <client.Logo />
                      </span>
                      <span
                        className="w-1 h-1 rounded-full bg-slate-300 shrink-0"
                        aria-hidden="true"
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            {/* Screen readers get the list once, without the duplication */}
            <ul className="sr-only">
              {clients.map((client) => (
                <li key={client.name}>{client.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientMarquee;
