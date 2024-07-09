import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProjectCardProps {
  id: number;
  title: string;
  image: StaticImageData;
}

const ProjectCard = ({ id, title, image }: ProjectCardProps) => {
  return (
    <article className=" w-full h-full m-auto">
      <Image
        src={image}
        alt={`Project number ${id}`}
        className="relative object-cover h-[320px] w-full m-auto"
      />
      <div>
        <h2 className=" text-off-white">{title}</h2>
        <h2 className="absolute bottom-0 right-0  text-4xl text-off-white font-semibold ">{`#00${id}`}</h2>
      </div>
    </article>
  );
};

export default ProjectCard;
