"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const GALLERY_IMAGES = [
  "/10021ca6-27b9-4841-a269-ec8aac541671.jpg",
  "/d95f96e1-de65-466a-8edc-978e758a9497.jpg",
  "/M4_05906.jpeg",
  "/M4_06100.JPG",
  "/M4_06122.JPG",
  "/M4_06232.JPG",
  "/M4_06363.JPG",
  "/M4_06636.jpeg",
  "/M4_06692.JPG",
  "/M4_06868.JPG",
];

export default function PhotoGallerySlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={24}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
      autoplay={{
        delay: 100,
        disableOnInteraction: false,
      }}
      speed={3000}
      loop={true}
      className="overflow-hidden"
    >
      {GALLERY_IMAGES.map((src, i) => (
        <SwiperSlide key={i}>
          <div className="aspect-square overflow-hidden rounded-xl bg-background h-[280px] sm:h-[320px] md:h-[380px]">
            <Image
              src={src}
              alt={`Saurabh & Disha photo ${i + 1}`}
              width={400}
              height={400}
              className="h-full w-full object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
