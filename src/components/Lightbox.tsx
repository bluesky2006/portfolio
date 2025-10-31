"use client";

import { useEffect } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-brand-black/90"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-[92vw] h-[92vh] max-w-[900px] max-h-[92vh] rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 900px) 92vw, 900px"
          priority
        />
        <button
          onClick={onClose}
          aria-label="Close"
          className="fixed top-5 right-5 font-light text-4xl leading-none text-brand-white"
        >
          ×
        </button>
      </div>
    </div>,
    document.body
  );
}
