"use client";
import { useEffect, useState } from "react";

function ScrollIndicator() {
  const [visible, setVisible] = useState(false);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      setVisible(scrollY > 100);
      setAtBottom(scrollY + windowHeight >= fullHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`hidden lg:block fixed bottom-6 lg:left-1/2 left-2 transition-opacity duration-500 ${
        visible && !atBottom ? "opacity-100" : "opacity-0"
      }`}
    >
      <svg
        className="h-6 w-6 text-brand-main animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}

export default ScrollIndicator;
