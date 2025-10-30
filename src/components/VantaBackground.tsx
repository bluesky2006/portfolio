"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let effect: any;

    async function loadVanta() {
      // 🧩 Ensure THREE is attached globally BEFORE loading Vanta
      if (typeof window !== "undefined") {
        // @ts-ignore
        window.THREE = THREE;

        const VANTA = (await import("vanta/dist/vanta.dots.min")).default;

        effect = VANTA({
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
      }
    }

    loadVanta();

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="fixed inset-0 -z-10" />;
}
