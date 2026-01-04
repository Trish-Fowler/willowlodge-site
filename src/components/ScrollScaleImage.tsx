"use client";

import Image from "next/image";
import * as React from "react";

type Props = {
  src: string;
  alt: string;
  /** initial scale when the image is "farther" from its settled position */
  from: number; // e.g. 1.12 or 0.92
  /** settled scale when the user is at/near the image */
  to?: number; // default 1.0
  className?: string;
  /** wrapper classes for the image frame */
  frameClassName?: string;

  /** where scaling begins: element top at (viewportHeight * startVh) */
  startVh?: number; // default 1.10
  /** where scaling finishes: element top at (viewportHeight * endVh) */
  endVh?: number;   // default -0.10 (finishes after it passes above the viewport)

};

/**
 * Scales from `from` -> `to` as the element moves into view.
 * Uses a simple viewport-based progress calculation (no framer-motion required).
 */
export default function ScrollScaleImage({
  src,
  alt,
  from,
  to = 1,
  className,
  frameClassName,
  startVh = 1.20,
  endVh = -0.25,
}: Props) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = React.useState(from);

  React.useEffect(() => {
    let raf = 0;

    const update = () => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 800;

      /**
       * Progress heuristic:
       * - progress = 0 when element top is near bottom of viewport (just coming in)
       * - progress = 1 when element is comfortably inside viewport
       */
      const start = vh * startVh;
      const end = vh * endVh;

      const raw = (start - rect.top) / (start - end);
      const p = Math.min(1, Math.max(0, raw));

      const next = from + (to - from) * p;
      setScale(next);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [from, to, startVh, endVh]);

  return (
    <div
      ref={ref}
      className={frameClassName}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "center",
        transition: "transform 120ms linear",
        willChange: "transform",
      }}
    >
      <div className={className}>
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}

