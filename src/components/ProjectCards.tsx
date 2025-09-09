"use client";

import { projects } from "@/data/projects";
import Pill from "./Pill";
import ScreenshotScroller from "./ScreenshotScroller";

function ProjectCards() {
  return (
    <div>
      <div className="flex flex-col gap-15">
        {projects.map((project, index) => {
          const {
            title,
            summary,
            description,
            stack = [],
            link = [],
            date,
            screenshots = [],
          } = project;

          return (
            <div
              key={index}
              className="border-brand-main border-l-4 px-5 py-1 text-white drop-shadow-sm transition delay-50 duration-300 hover:translate-x-2"
            >
              <div className="mb-4 flex flex-row justify-between">
                <h2 className="text-brand-main">{title}</h2>
                <p className="mb-0 italic text-brand-main">{date}</p>
              </div>

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
                    <span className="text-brand-main">&gt;</span>{" "}
                    <a href={item.url} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCards;
