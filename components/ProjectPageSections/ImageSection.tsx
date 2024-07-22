"use client";
import { StaticImageData } from "next/image";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ImageSectionProps {
  images: StaticImageData[];
}

const ImageSection = ({ images }: ImageSectionProps) => {
  return (
    <section className="pt-0 md:pt-24 h-[400px] w-full md:h-[600px] md:object-contain  md:px-20">
      <Swiper
        spaceBetween={5}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        navigation={true}
        speed={1000}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt="image"
              className=" w-auto h-[500px] my-0 md:py-10 object-contain "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ImageSection;
