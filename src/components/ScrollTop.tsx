"use client";

import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-2.5 bottom-20 w-[50px] h-[50px] rounded-full bg-dark text-white flex items-center justify-center text-3xl z-[9999] border-none cursor-pointer md:bottom-10"
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
}
