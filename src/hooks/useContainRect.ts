"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Rect = { left: number; top: number; width: number; height: number };

function containRect(frameW: number, frameH: number, contentAspect: number): Rect {
  // contentAspect = width/height
  const frameAspect = frameW / frameH;

  if (frameAspect >= contentAspect) {
    // Fit by height
    const height = frameH;
    const width = height * contentAspect;
    return { left: (frameW - width) / 2, top: 0, width, height };
  }

  // Fit by width
  const width = frameW;
  const height = width / contentAspect;
  return { left: 0, top: (frameH - height) / 2, width, height };
}

/**
 * Returns a ref for the "frame" element and the rect of an object-contain
 * content box inside that frame, based on a known aspect ratio.
 */
export function useContainRect(contentAspect: number) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [rect, setRect] = useState<Rect | null>(null);

  const compute = useCallback(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const { width: fw, height: fh } = frame.getBoundingClientRect();
    if (fw <= 0 || fh <= 0) return;

    setRect(containRect(fw, fh, contentAspect));
  }, [contentAspect]);

  useEffect(() => {
    compute();

    const frame = frameRef.current;
    if (!frame) return;

    const ro = new ResizeObserver(compute);
    ro.observe(frame);

    return () => ro.disconnect();
  }, [compute]);

  return { frameRef, rect, recompute: compute };
}
