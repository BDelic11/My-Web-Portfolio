import { StaticImageData } from "next/image";
import React from "react";

interface IconLinkProps {
  id: number;
  title: string;
  linkTo: string;
  icon: StaticImageData | undefined;
}

const IconLink: React.FC<IconLinkProps> = ({ id, icon, linkTo, title }) => {
  return (
    <li className="flex align-middle justify-center py-4 text-white">
      {title}
    </li>
  );
};

export default IconLink;
