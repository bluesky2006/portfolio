"use client";

import { useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import type { Screenshot } from "./ScreenshotScroller";
import { useContainRect } from "@/hooks/useContainRect";

function getShotAspect(shot: Screenshot) {
  // - landscape: 1920×1080 (16/9)
  // - portrait: 1290×2796
  return shot.orientation === "portrait" ? 1290 / 2796 : 16 / 9;
}

export default function Lightbox({
  screenshots,
  index,
  title,
  onClose,
  onIndexChange,
}: {
  screenshots: Screenshot[];
  index: number;
  title: string;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}) {
  const total = screenshots.length;

  const goPrev = useCallback(() => {
    if (total <= 1) return;
    onIndexChange((index - 1 + total) % total);
  }, [index, total, onIndexChange]);

  const goNext = useCallback(() => {
    if (total <= 1) return;
    onIndexChange((index + 1) % total);
  }, [index, total, onIndexChange]);

  const shot = useMemo(() => screenshots[index], [screenshots, index]);

  // ✅ Hook does all the measuring + ResizeObserver
  const { frameRef, rect: imgRect } = useContainRect(getShotAspect(shot));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [onClose, goPrev, goNext]);

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-brand-black/90"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
      onClick={onClose}
    >
      <div
        ref={frameRef}
        className="relative w-[92vw] h-[92vh] max-w-[1100px] max-h-[92vh] rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={shot.src}
          alt={`${title} screenshot ${index + 1} of ${total}`}
          fill
          className="object-contain"
          sizes="(max-width: 900px) 92vw, 1100px"
          priority
        />

        {total > 1 && imgRect && (
          <div
            className="absolute"
            style={{
              left: imgRect.left,
              top: imgRect.top,
              width: imgRect.width,
              height: imgRect.height,
            }}
          >
            <div className="absolute inset-y-0 left-0 w-18 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
            </div>

            <div className="absolute inset-y-0 right-0 w-18 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-l from-black/55 via-black/20 to-transparent" />
            </div>

            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous screenshot"
              className="absolute inset-y-0 left-0 w-18 flex items-center justify-center text-4xl leading-none text-brand-white hover:text-brand-main focus:outline-none"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next screenshot"
              className="absolute inset-y-0 right-0 w-18 flex items-center justify-center text-4xl leading-none text-brand-white hover:text-brand-main focus:outline-none"
            >
              ›
            </button>
          </div>
        )}

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 text-3xl leading-none text-brand-white hover:text-brand-main focus:outline-none focus:ring-2 focus:ring-brand-white/60"
        >
          ×
        </button>

        {total > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-xs text-brand-white">
            {index + 1} / {total}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
