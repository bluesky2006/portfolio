"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

export type Screenshot = {
  src: string;
  orientation?: "portrait" | "landscape";
};

type ScreenshotScrollerProps = {
  screenshots?: Screenshot[];
  title: string;
};

export default function ScreenshotScroller({ screenshots = [], title }: ScreenshotScrollerProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollLeft, clientWidth, scrollWidth } = el;
      setAtStart(scrollLeft <= 0);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    };

    handleScroll(); // init
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const hasScreenshots = screenshots.length > 0;

  return (
    <>
      <div className="relative mt-4">
        <div
          ref={scrollRef}
          className="overflow-x-auto rounded-xl w-full max-w-full min-w-0 [contain:inline-size]"
        >
          <ul className="flex flex-nowrap gap-3 snap-x snap-mandatory pr-8">
            {hasScreenshots ? (
              screenshots.map((shot, i) => {
                const isLandscape = shot.orientation === "landscape";

                return (
                  <li
                    key={shot.src + i}
                    className={
                      "snap-start shrink-0 cursor-pointer " +
                      (isLandscape ? "w-80 md:w-96" : "w-36 md:w-44")
                    }
                    onClick={() => setActiveImage(shot.src)}
                  >
                    <div
                      className={
                        "relative w-full overflow-hidden rounded-xl border border-gray-200 " +
                        (isLandscape ? "aspect-[16/9]" : "aspect-[1290/2796]")
                      }
                    >
                      <Image
                        src={shot.src}
                        alt={`${title} screenshot ${i + 1}`}
                        fill
                        sizes={
                          isLandscape
                            ? "(max-width: 768px) 60vw, 520px"
                            : "(max-width: 768px) 35vw, 300px"
                        }
                        className="object-contain"
                      />
                    </div>
                  </li>
                );
              })
            ) : (
              <li className="snap-start shrink-0 w-36 md:w-44">
                <div className="relative w-full aspect-[1290/2796] overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                  {/* CSS “wireframe” pattern */}
                  <div
                    className="absolute inset-0 opacity-60"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(45deg, rgba(156,163,175,.15) 0 1px, transparent 1px 12px)",
                    }}
                  />

                  {/* Label */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs md:text-xs text-gray-400">
                      Screenshots coming soon
                    </span>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>

        {/* Show right arrow when you can scroll right */}
        {!atEnd && (
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 p-2">
            <span className="text-gray-700 text-2xl">›</span>
          </div>
        )}

        {/* Show left arrow when you can scroll left */}
        {!atStart && (
          <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 p-2">
            <span className="text-gray-700 text-2xl">‹</span>
          </div>
        )}
      </div>

      {activeImage && (
        <Lightbox
          src={activeImage}
          alt="Expanded screenshot"
          onClose={() => setActiveImage(null)}
        />
      )}
    </>
  );
}
