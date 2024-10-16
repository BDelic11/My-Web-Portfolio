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
import Link from "next/link";

const ProjectsSection = () => {
  const t = useTranslations("projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="projects" ref={ref} className=" h-full  bg-dark-bg ">
      <LayoutContainer>
        <TitleComponent
          isInView={isInView}
          classname=" text-off-white md:my-40 md:pb-10"
        >
          {t(`landing-projects-title`)}
        </TitleComponent>
        <div className="flex flex-col md:flex-row md:justify-between  bg-white p-5 my-10 md:p-10 md:my-20  rounded-lg">
          <h3 className="hidden md:block  text-2xl text-dark-bg">
            Projekti koje sam dizajnirao i napravio:
          </h3>
          <h3 className="block md:hidden text-2xl text-dark-bg">
            Live projekti:
          </h3>
          <div className="flex flex-row mt-5 md:mt-0">
            <Button asChild variant="link" className=" text-aevum-blue">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://seawind-ebon.vercel.app/"
              >
                Seawind
              </Link>
            </Button>
            <Button asChild variant="link" className=" text-aevum-blue">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.adriaticyachting.ch/"
              >
                Adriatic Yachting
              </Link>
            </Button>
            <Button asChild variant="link" className=" text-aevum-blue">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.crocruise.eu/"
              >
                Cro Cruise
              </Link>
            </Button>
          </div>
        </div>
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
              slidesPerView: 2,
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
          </a>
        </Button>
      </LayoutContainer>
    </section>
  );
};

export default ProjectsSection;
