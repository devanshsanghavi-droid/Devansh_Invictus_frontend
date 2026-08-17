import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Starting value. Revenue starts at 1 (=$1M) rather than 0 so it reads as growth. */
  from?: number;
  to: number;
  /** Animation length in ms. */
  duration?: number;
  /** Turns the raw number into display text, e.g. (v) => `$${v}M`. */
  format?: (value: number) => string;
  className?: string;
}

// Decelerating curve: fast at first, easing into the final figure.
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Counts from `from` up to `to` once, the first time it scrolls into view.
 *
 * This is a component rather than a hook on purpose: the previous version called
 * a useCountUp hook inside .map(), which breaks the rules of hooks. Rendering one
 * component per figure keeps each animation's state properly isolated.
 */
export const CountUp: React.FC<CountUpProps> = ({
  from = 0,
  to,
  duration = 2000,
  format = (v) => Math.round(v).toLocaleString(),
  className,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const frame = useRef<number>();
  const hasRun = useRef(false);
  const [value, setValue] = useState(from);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Honour the OS setting: show the final figure, skip the animation entirely.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting || hasRun.current) return;

        hasRun.current = true;
        observer.disconnect();

        const startedAt = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          setValue(from + (to - from) * easeOutCubic(progress));
          if (progress < 1) frame.current = requestAnimationFrame(tick);
        };
        frame.current = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {format(value)}
    </span>
  );
};

export default CountUp;
