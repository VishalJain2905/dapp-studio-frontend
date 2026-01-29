import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function useLenis() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with lerp 0.08
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      // Don't interfere with touch scrolling on mobile
      touchMultiplier: 0, // Disables Lenis touch handling, uses native scroll
      infinite: false,
    });

    lenisRef.current = lenis;

    // requestAnimationFrame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
