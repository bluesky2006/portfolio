"use client";

import { useState } from "react";
import { experience } from "@/data/experience";
import Image from "next/image";
import Link from "next/link";

function ExperienceCards() {
  // Track expanded cards (per-card toggle)
  const [expanded, setExpanded] = useState<Set<number>>(() => new Set());

  function toggleExpanded(index: number) {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <div>
      <div className="flex flex-col gap-15">
        {experience.map((exp, index) => {
          const { title, company, description, date, logo, url } = exp;

          const isExpanded = expanded.has(index);
          const panelId = `exp-desc-${index}`;

          return (
            <div
              key={index}
              className="
  group relative
  border-l border-brand-main/20
  pl-4
  transition-all duration-300 will-change-transform
"
            >
              {/* dotted border overlay */}
              <span className="pointer-events-none absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {logo && (
                <Link href={url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={logo}
                    width={70}
                    height={70}
                    alt={`${company} logo`}
                    className="absolute right-0 top-0 hover:scale-105 transition"
                  />
                </Link>
              )}

              <h2 className="mb-4 mr-20 group-hover:text-brand-main">{title}</h2>

              <h3 className="whitespace-pre-line mb-4 italic text-sm">{company}</h3>

              <p className="mb-4">{date}</p>

              {/* Toggle */}
              <button
                type="button"
                onClick={() => toggleExpanded(index)}
                aria-expanded={isExpanded}
                aria-controls={panelId}
                className="inline-flex items-center gap-2 text-xs underline underline-offset-4 transition hover:text-brand-main "
              >
                {isExpanded ? "- Less info" : "+ More info"}
              </button>

              {/* Animated panel (same approach as projects) */}
              <div
                id={panelId}
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                  isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0 mt-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pl-4 whitespace-pre-line text-sm mb-0">{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceCards;
