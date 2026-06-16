"use client";

import { useEffect, useCallback, useState } from "react";

interface LightboxProps {
  images: { src: string; alt: string }[];
}

export default function Lightbox({ images }: LightboxProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const close = useCallback(() => setOpen(false), []);
  const prev = useCallback(() => setIndex((i) => (i > 0 ? i - 1 : images.length - 1)), [images.length]);
  const next = useCallback(() => setIndex((i) => (i < images.length - 1 ? i + 1 : 0)), [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="p-2.5 bg-white rounded-md shadow-md text-center cursor-pointer hover:scale-[1.02] transition-transform"
            onClick={() => { setIndex(i); setOpen(true); }}
          >
            <img src={img.src} alt={img.alt} className="w-full rounded aspect-[4/3] object-cover" loading="lazy" />
            <p className="mt-2 text-sm text-dark font-medium">{img.alt}</p>
          </div>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center" onClick={close}>
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:opacity-70 z-10 cursor-pointer bg-transparent border-none"
            onClick={close}
            aria-label="Kapat"
          >
            <i className="fa-solid fa-times"></i>
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:opacity-70 z-10 cursor-pointer bg-transparent border-none"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Önceki"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl hover:opacity-70 z-10 cursor-pointer bg-transparent border-none"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Sonraki"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <img
            src={images[index].src}
            alt={images[index].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain select-none"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 text-white text-sm opacity-60">
            {index + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
