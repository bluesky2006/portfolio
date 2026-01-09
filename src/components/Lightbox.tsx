"use client";

import { useEffect, useCallback, useMemo } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import type { Screenshot } from "./ScreenshotScroller";

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

  const canGoPrev = total > 1;
  const canGoNext = total > 1;

  const goPrev = useCallback(() => {
    if (!canGoPrev) return;
    onIndexChange((index - 1 + total) % total);
  }, [canGoPrev, index, total, onIndexChange]);

  const goNext = useCallback(() => {
    if (!canGoNext) return;
    onIndexChange((index + 1) % total);
  }, [canGoNext, index, total, onIndexChange]);

  const shot = useMemo(() => screenshots[index], [screenshots, index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.addEventListener("keydown", onKey);

    // Prevent background scroll + prevent layout shift when scrollbar disappears
    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

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

        {/* Prev / Next arrows */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous screenshot"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-3xl leading-none text-brand-white hover:text-brand-main"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next screenshot"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-3xl leading-none text-brand-white hover:text-brand-main"
            >
              ›
            </button>
          </>
        )}

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3  text-3xl leading-none text-brand-white hover:text-brand-main focus:outline-none focus:ring-2 focus:ring-brand-white/60"
        >
          ×
        </button>

        {/* Counter */}
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
