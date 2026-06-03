"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { TestimonialCard } from "@/components/home/TestimonialCard";

type Testimonial = {
  name: string;
  role: string;
  image: string;
};

type TestimonialMarqueeProps = {
  items: Testimonial[];
  text: string;
  className: string;
  reverse?: boolean;
};

const marqueeBreakpoints = {
  320: { slidesPerView: 1 },
  576: { slidesPerView: 1 },
  991: { slidesPerView: 2 },
  1200: { slidesPerView: 3 },
  1400: { slidesPerView: 3 },
  1600: { slidesPerView: 3 },
};

export function TestimonialMarquee({
  items,
  text,
  className,
  reverse = false,
}: TestimonialMarqueeProps) {
  return (
    <div className={reverse ? "outer-box2 aos-init" : "outer-box aos-init"} data-aos="fade-up" data-aos-duration="1000">
      <Swiper
        className={`swiper ${className}`}
        modules={[Autoplay, FreeMode]}
        loop
        speed={5000}
        spaceBetween={24}
        slidesPerView="auto"
        freeMode
        grabCursor
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: reverse,
        }}
        breakpoints={marqueeBreakpoints}
      >
        {items.map((item, index) => (
          <SwiperSlide key={`${item.name}-${index}`}>
            <TestimonialCard {...item} text={text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
