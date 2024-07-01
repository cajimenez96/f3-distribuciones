"use client"
import "swiper/css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { marcas } from "./carousel.data";

const Carousel = () => {
  return (
    <div className="relative w-full md:w-4/5 mx-auto mt-20" id="servicios">
      <div className="relative w-full overflow-hidden">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 3
            },
            375: {
              slidesPerView: 3
            },
            425: {
              slidesPerView: 3
            },
            768: {
              slidesPerView: 4
            },
            1024: {
              slidesPerView: 8
            }
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          loop={true}
          speed={2000}
          modules={[Autoplay]}
        >
          <div className="absolute flex">
            {marcas.map(({ id, image }) => (
              <SwiperSlide key={id} className="flex items-center slider-horizontal">
                <Image src={`/assets/marcas/${image}`} alt="Payment" width={200} height={200} className="grayscale" />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default Carousel;
