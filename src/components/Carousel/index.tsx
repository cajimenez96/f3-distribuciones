"use client"
import "swiper/css";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react'
import { marcas } from "./carousel.data";

const Carousel = () => {
  return (
    <div className="relative w-4/5 mx-auto mt-20" id="servicios">
      <div className="relative w-full overflow-hidden">
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 8,
              spaceBetween: 15
            }
          }}
          autoplay={{
            delay: 1,
            disableOnInteraction: false
          }}
          grabCursor={true}
          slidesPerView={8}
          loop={true}
          speed={2000}
        >
          <div className="absolute flex">
            {marcas.map(({ id, image }) => (
              <SwiperSlide key={id} className="flex items-center slider-horizontal">
                <Image src={`/assets/marcas/${image}`} alt="Payment" width={100} height={100} className="grayscale" />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default Carousel;
