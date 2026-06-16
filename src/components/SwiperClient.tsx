"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface SwiperClientProps {
  children: React.ReactNode[];
  className?: string;
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: Record<number, { slidesPerView: number; spaceBetween?: number }>;
}

export default function SwiperClient({
  children,
  className = "",
  slidesPerView = 1,
  spaceBetween = 20,
  breakpoints,
}: SwiperClientProps) {
  return (
    <div className={`slider-owl-2 swiper relative ${className}`}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: `.${className.replace(/\s/g, ".")} .swiper-button-prev`,
          nextEl: `.${className.replace(/\s/g, ".")} .swiper-button-next`,
        }}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
      >
        {children.map((child, i) => (
          <SwiperSlide key={i} className="flex-[0_0_auto] px-0">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev">
        <i className="fa-solid fa-angle-left"></i>
      </div>
      <div className="swiper-button-next">
        <i className="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
}
