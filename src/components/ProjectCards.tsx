"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import Pill from "./Pill";
import ScreenshotScroller from "./ScreenshotScroller";

function ProjectCards() {
  const [visibleCount, setVisibleCount] = useState(3);

  // Track expanded cards (per-card toggle)
  const [expanded, setExpanded] = useState<Set<number>>(() => new Set());

  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

  function toggleExpanded(index: number) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <div className="flex flex-col gap-15">
      {visibleProjects.map((project, index) => {
        const {
          title,
          summary,
          description,
          stack = [],
          link = [],
          date,
          screenshots = [],
          logo,
        } = project;

        const isExpanded = expanded.has(index);
        const panelId = `project-desc-${index}`;

        return (
          <div
            key={index}
            className="
  group relative
  border-l border-brand-main/20
  pl-4
  transition-all duration-300 will-change-transform
  hover:translate-x-3
"
          >
            <span className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {logo && (
              <div className="absolute right-0 top-0">
                <div className="relative w-[70px] h-[70px]">
                  <Image
                    src={logo || "/placeholder.png"}
                    width={70}
                    height={70}
                    alt={title ? `${title} logo` : "Placeholder logo"}
                    className="object-contain rounded-full"
                    unoptimized
                  />
                </div>
              </div>
            )}

            <h2 className="mb-4 group-hover:text-brand-main">{title}</h2>
            <p className="mb-4 italic">{date}</p>

            <h3 className="mb-4 whitespace-pre-line italic text-sm">{summary}</h3>

            {/* Toggle */}
            <button
              type="button"
              onClick={() => toggleExpanded(index)}
              aria-expanded={isExpanded}
              aria-controls={panelId}
              className="inline-flex items-center gap-2 text-xs underline underline-offset-4 transition hover:text-brand-main focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-main/60 rounded"
            >
              {isExpanded ? "- Less info" : "+ More info"}
            </button>

            {/* Animated panel (no libs) */}
            <div
              id={panelId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pl-2 whitespace-pre-line text-sm">{description}</p>
              </div>
            </div>

            <ScreenshotScroller screenshots={screenshots} title={title} />

            <ul className="my-6 flex flex-row flex-wrap gap-2">
              {stack.map((item, i) => (
                <li key={i}>
                  <Pill>{item}</Pill>
                </li>
              ))}
            </ul>

            <ul className="flex flex-row flex-wrap gap-5">
              {link.map((item, i) => (
                <li key={i} className="transition hover:scale-110 hover:text-brand-main">
                  <span className="text-brand-main">&gt; </span>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="text-sm px-6 py-2 border-1 border-brand-main text-brand-black rounded-full transition hover:scale-105 hover:bg-brand-main hover:text-brand-white dark:bg-brand-main dark:text-brand-white"
          >
            More projects
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectCards;
