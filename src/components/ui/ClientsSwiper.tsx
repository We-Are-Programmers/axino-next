"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type LogoPair = { primary: string; secondary: string };

type ClientsSwiperProps = {
  logos: LogoPair[];
  className?: string;
  slidesPerView?: number;
  spaceBetween?: number;
};

export function ClientsSwiper({
  logos,
  className = "clients-swiper",
  slidesPerView = 5,
  spaceBetween = 100,
}: ClientsSwiperProps) {
  return (
    <div className="swiper-container">
      <Swiper
        className={`swiper ${className}`}
        modules={[Autoplay]}
        loop
        speed={500}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={spaceBetween}
        slidesPerView={1}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          991: { slidesPerView: 3 },
          1200: { slidesPerView: slidesPerView },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={`${logo.primary}-${index}`}>
            <div className="client-block">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <img src={logo.primary} alt="Client logo" />
                    <img src={logo.secondary} alt="Client logo" />
                  </figure>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
