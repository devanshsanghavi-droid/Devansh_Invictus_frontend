import React from "react";

/*
 * Add real client names here as they're cleared for public use.
 * These three are the ones the site already claimed publicly (see the
 * legacy ClientShowcase component). Don't pad this list with invented names.
 *
 * To use logo images instead of wordmarks, swap `name` for an `<img>` in the
 * item render below — the marquee mechanics don't change.
 */
const clients = [
  "Votorantim Group",
  "PwC Brazil",
  "Tegma Logística",
];

// The track is duplicated so translateX(-50%) lands exactly on a seam.
// With few clients we repeat the list first so the strip reads as continuous.
const REPEATS = 4;
const track = Array.from({ length: REPEATS }, () => clients).flat();

export const ClientMarquee: React.FC = () => {
  return (
    <div className="w-full border-t border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 py-8">
          <p className="eyebrow shrink-0">Trusted by</p>

          <div className="marquee relative flex-1 overflow-hidden">
            <div
              className="marquee-track flex w-max items-center"
              aria-hidden="true"
            >
              {[0, 1].map((copy) => (
                <ul key={copy} className="flex items-center shrink-0">
                  {track.map((client, i) => (
                    <li
                      key={`${copy}-${client}-${i}`}
                      className="flex items-center whitespace-nowrap"
                    >
                      <span className="text-base font-medium text-slate-500 px-8">
                        {client}
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

            {/* Screen readers get the real list once, without the duplication */}
            <ul className="sr-only">
              {clients.map((client) => (
                <li key={client}>{client}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientMarquee;
