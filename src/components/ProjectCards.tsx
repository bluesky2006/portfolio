"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/data/projects";
import Pill from "./Pill";
import ScreenshotScroller from "./ScreenshotScroller";

function ProjectCards() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMore = visibleCount < projects.length;

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

        return (
          <div
            key={index}
            className="relative border-brand-main border-l-4 px-5 py-1 transition delay-50 duration-300 hover:translate-x-2"
          >
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

            <h2 className="mb-4">{title}</h2>
            <p className="mb-4 italic">{date}</p>

            <h3 className="mb-4 whitespace-pre-line italic text-sm">{summary}</h3>
            <p className="whitespace-pre-line">{description}</p>

            <ScreenshotScroller screenshots={screenshots} title={title} />

            <ul className="my-6 flex flex-row flex-wrap gap-2">
              {stack.map((item, i) => (
                <Pill key={i}>{item}</Pill>
              ))}
            </ul>

            <ul className="mb-4 flex flex-row flex-wrap gap-5">
              {link.map((item, i) => (
                <li key={i} className="transition hover:scale-110">
                  <span className="text-brand-main">&gt;</span>
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}

      {/* Load more button */}
      {hasMore && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="text-sm px-6 py-2 border-1 border-brand-main text-black rounded-full transition hover:scale-105 hover:bg-brand-main hover:text-white"
          >
            Load more projects
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectCards;
