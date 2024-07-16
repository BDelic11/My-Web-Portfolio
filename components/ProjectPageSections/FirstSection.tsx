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
  about: string;
  technologies: {
    id: number;
    image: StaticImageData;
    title: string;
  }[];
  github: string;
}

const FirstSection = ({
  title,
  about,
  technologies,
  github,
}: FirstSectionProps) => {
  //   const t = useTranslations("projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="text-dark-bg h-full bg-off-white">
      <LayoutContainer>
        <TitleComponent isInView={isInView} classname=" mt-6">
          {title}
        </TitleComponent>
        {github && (
          <p className=" text-xs mb-10">
            Github:{" "}
            <span className=" underline text-aevum-blue text-xs">
              {" "}
              {github}
            </span>
          </p>
        )}
        <div>
          <SmallTitle isInView={isInView} classname="text-bg-white ">
            About project
          </SmallTitle>
          <p className=" text-sm md:text-xs font-light ">{about}</p>
        </div>
        <div className=" flex flex-col pt-6">
          <SmallTitle isInView={isInView} classname="text-dark-bg mt-10 ">
            Technologies
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
