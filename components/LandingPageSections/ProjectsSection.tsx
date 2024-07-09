"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination, Navigation } from "swiper/modules";

//Images
import firstImage from "@/public/images/1.jpg";
import secImage from "@/public/images/2.jpg";

//Components
import LayoutContainer from "../ui/Container";
import ProjectCard from "../ProjectCard";
import TitleComponent from "../ui/TitleComponent";
import { useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";

//Styles
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectsSection = () => {
  const t = useTranslations("projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projects = [
    {
      id: 1,
      image: firstImage,
      title: "Stylist",
    },
    { id: 2, image: secImage, title: "Web shop" },
    { id: 3, image: secImage, title: "Nesto trece" },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className=" h-full md:h-full bg-dark-bg mt-20"
    >
      <LayoutContainer>
        <TitleComponent isInView={isInView} classname=" text-off-white">
          {t(`landing-projects-title`)}
        </TitleComponent>
        <Swiper
          spaceBetween={20}
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
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard
                title={project.title}
                id={project.id}
                image={project.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          className=" bg-inherit text-off-white my-20"
          variant="outline"
          size="sm"
        >
          {t(`landing-projects-button`)}
        </Button>
      </LayoutContainer>
    </section>
  );
};

export default ProjectsSection;
