"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null | undefined>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    async function initVanta() {
      if (!vantaRef.current) return;

      // remove any previous instance first
      effectRef.current?.destroy?.();

      window.THREE = THREE;
      const vantaModule = await import("vanta/dist/vanta.dots.min");
      const VANTA = vantaModule.default;

      const isDark = resolvedTheme === "dark";

      const effect = VANTA({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x0055e6,
        color2: 0x0055e6,
        backgroundColor: isDark ? 0x111111 : 0xfefdfc,
        showLines: false,
      });

      effectRef.current = effect;
    }

    initVanta();

    // clean up on unmount or theme change
    return () => {
      if (effectRef.current?.destroy) {
        effectRef.current.destroy();
      }
      effectRef.current = null;
    };
  }, [resolvedTheme]);

  return <div ref={vantaRef} className="hidden lg:block fixed inset-0 -z-10" />;
}
