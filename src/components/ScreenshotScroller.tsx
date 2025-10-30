"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Lightbox from "./Lightbox";

type ScreenshotScrollerProps = {
  screenshots?: string[];
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

  if (!screenshots.length) return null;

  return (
    <>
      <div className="relative mt-4">
        <div
          ref={scrollRef}
          className="overflow-x-auto rounded-xl w-full max-w-full min-w-0 [contain:inline-size]"
        >
          <ul className="flex flex-nowrap gap-3 snap-x snap-mandatory pr-8">
            {screenshots.map((src, i) => (
              <li
                key={src + i}
                className="snap-start shrink-0 w-36 md:w-44 cursor-pointer"
                onClick={() => setActiveImage(src)}
              >
                <div className="relative w-full aspect-[1290/2796] overflow-hidden rounded-xl">
                  <Image
                    src={src}
                    alt={`${title} screenshot ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 35vw, 300px"
                    className="object-contain"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {atStart && (
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 p-2">
            <span className="text-gray-700 text-2xl">›</span>
          </div>
        )}
        {atEnd && (
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
