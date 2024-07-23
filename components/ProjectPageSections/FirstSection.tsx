"use client";

import { useTranslations } from "next-intl";
import { useRef } from "react";
import { useInView } from "framer-motion";

//Components
import TitleComponent from "../ui/TitleComponent";
import SmallTitle from "../ui/SmallTitle";
import LayoutContainer from "../ui/Container";
import Image, { StaticImageData } from "next/image";

interface FirstSectionProps {
  title: string;
  aboutKey: string;
  technologies: {
    id: number;
    image: StaticImageData;
    title: string;
  }[];
  github?: string;
  link?: string;
}

const FirstSection = ({
  title,
  aboutKey,
  technologies,
  github,
  link,
}: FirstSectionProps) => {
  const t = useTranslations("project-page");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="text-dark-bg h-full bg-off-white">
      <LayoutContainer>
        <TitleComponent isInView={isInView} classname=" mt-6">
          {title}
        </TitleComponent>
        {github && (
          <p className=" text-xs md:text-base mb-10">
            Github:{" "}
            <span className=" underline text-aevum-blue text-xs md:pl-1 md:text-base">
              {" "}
              <a href={github} rel="noopener noreferrer">
                {github}
              </a>
            </span>
          </p>
        )}
        {link && (
          <p className=" text-xs md:text-base mb-10">
            See code:{" "}
            <span className=" underline text-aevum-blue text-xs md:pl-1 md:text-base">
              {" "}
              <a href={link} rel="noopener noreferrer">
                {link}
              </a>
            </span>
          </p>
        )}
        <div>
          <SmallTitle isInView={isInView} classname="text-bg-white ">
            {t(`about-project-title`)}
          </SmallTitle>
          <p className=" text-sm md:text-base font-light md:w-2/3 ">
            {t(aboutKey)}
          </p>
        </div>
        <div className=" flex flex-col pt-6">
          <SmallTitle isInView={isInView} classname="text-dark-bg mt-10 ">
            {t(`about-tech-title`)}
          </SmallTitle>
          <div className="my-10 grid grid-cols-2 align-middle justify-center gap-2 md:gap-0 md:justify-between md:flex md:flex-row ">
            {technologies.map((tech) => (
              <article key={tech.id} className=" my-2 flex flex-col gap-4">
                <Image
                  key={tech.id}
                  src={tech.image}
                  alt={`technology number ${tech.id}`}
                  className=" w-20 h-20 object-contain m-auto"
                />
                <p className=" text-center text-sm">{tech.title}</p>
              </article>
            ))}
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default FirstSection;
