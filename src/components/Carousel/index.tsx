"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { ICarousel } from "./Carousel.types";
import 'swiper/css';
import 'swiper/css/pagination';

const Carousel = ({elements} : ICarousel) => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop
        speed={2500}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 6
          }
        }}

        className="flex justify-center items-center text-center"
      >
        {elements.map((brand, index) => (
          <SwiperSlide key={index}>
            <Image src={brand} alt="prueba" className="grayscale w-36 lg:w-96 h-fit" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel;
