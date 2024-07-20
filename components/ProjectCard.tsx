import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  id: number;
  title: string;
  image: StaticImageData;
}

const ProjectCard = ({ id, title, image }: ProjectCardProps) => {
  return (
    <article className=" w-full h-full m-auto ">
      <Link href={`projects/${id}`}>
        <Image
          src={image}
          alt={`Project number ${id}`}
          className="relative object-cover object-left h-[320px] md:h-[360px] md:w-auto w-full m-auto rounded-xl shadow-gray-900 shadow-md hover:opacity-80 transition-all duration-300"
        />
      </Link>
      <div>
        <h2 className=" text-off-white text-base md:text-lg  pt-2">{title}</h2>
        <h2 className="absolute bottom-0 right-0  text-4xl text-off-white font-semibold ">{`#00${
          id + 1
        }`}</h2>
      </div>
    </article>
  );
};

export default ProjectCard;
