"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "bio", label: "bio" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
];

function Nav() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        } else {
          const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;
          if (bottom) setActive(links[links.length - 1].id);
        }
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex flex-col border-l-2 border-l-brand-main">
      {links.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`text-md font-bold tracking-wide no-underline py-1 pl-5 transition-all duration-300 ${
            active === id
              ? "scale-110 text-brand-main translate-x-10"
              : "scale-100  dark:text- hover:text-brand-main"
          }`}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

export default Nav;
