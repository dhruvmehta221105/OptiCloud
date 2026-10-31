import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

export function SmoothScroll({ enabled = true }) {
  const location = useLocation();

  useEffect(() => {
    if (!enabled) return;

    const lenis = new Lenis({
      duration: 0.55,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 1,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    }

    const rafId = { current: requestAnimationFrame(raf) };

    // Scroll to top on route change, smoothly
    lenis.scrollTo(0, { immediate: false, duration: 0.4 });

    return () => {
      cancelAnimationFrame(rafId.current);
      lenis.destroy();
    };
  }, [location, enabled]);

  return null;
}
