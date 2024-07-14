"use client";
import { StaticImageData } from "next/image";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProjectCard from "../ProjectCard";

interface ImageSectionProps {
  images: StaticImageData[];
}

const ImageSection = ({ images }: ImageSectionProps) => {
  return (
    <section className=" pt-20 h-full">
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
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt="image"
              className=" w-full h-full my-0 object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* {images.map((image) => (
        <Image
          src={image}
          alt="image"
          className=" w-40 h-40 my-0 object-cover"
        />
      ))} */}
    </section>
  );
};

export default ImageSection;
