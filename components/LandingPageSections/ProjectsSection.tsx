"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Navigation } from "swiper/modules";

import { projects } from "@/project-info/projects";

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

  return (
    <section id="projects" ref={ref} className=" h-full  bg-dark-bg mt-20">
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
                image={project.images[0]}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          className=" bg-inherit text-off-white my-20"
          variant="outline"
          size="sm"
          asChild
        >
          <a rel="noopener noreferrer" href="https://github.com/BDelic11">
            {t(`landing-projects-button`)}
            {/* <p className="m-auto text-sm">{icon.title}</p> */}
          </a>
        </Button>
      </LayoutContainer>
    </section>
  );
};

export default ProjectsSection;
