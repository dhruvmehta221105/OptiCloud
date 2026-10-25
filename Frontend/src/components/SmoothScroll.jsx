import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function SmoothScroll({ enabled = true }) {
  useEffect(() => {
    if (!enabled) return;

    const lenis = new Lenis({
      duration: 0.55,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 1,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    }

    const rafId = { current: requestAnimationFrame(raf) };

    return () => {
      cancelAnimationFrame(rafId.current);
      lenis.destroy();
    };
  }, [enabled]);

  return null;
}
