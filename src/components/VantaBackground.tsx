"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface VantaEffect {
  destroy: () => void;
  setOptions?: (options: Record<string, unknown>) => void;
  resize?: () => void;
}

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const effectRef = useRef<VantaEffect | null>(null);

  useEffect(() => {
    async function loadVanta() {
      if (typeof window === "undefined" || effectRef.current) return;

      // ✅ no redeclaration; type is already defined globally
      window.THREE = THREE;

      const vantaModule = await import("vanta/dist/vanta.dots.min");
      const VANTA = vantaModule.default;

      const effect: VantaEffect = VANTA({
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
        backgroundColor: 0xfefdfc,
        showLines: false,
      });

      effectRef.current = effect;
    }

    loadVanta();

    return () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return <div ref={vantaRef} className="hidden lg:block fixed inset-0 -z-10" />;
}
