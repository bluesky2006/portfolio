"use client";
import { useEffect, useState } from "react";

function ScrollIndicator() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      const isBottom = scrollY + windowHeight >= fullHeight - 50;

      setHide(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 -translate-x-1/2 transition-opacity duration-500 ${
        hide ? "opacity-0" : "opacity-100"
      }`}
    >
      <svg
        className="h-6 w-6 text-brand-main animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}

export default ScrollIndicator;
