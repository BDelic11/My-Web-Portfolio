import React from "react";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

interface IconLinkProps {
  // id: number;
  title: string;
  linkTo: string;
  setLinkClick: (bool: boolean) => void;
  // icon: StaticImageData | undefined;
}

const IconLink: React.FC<IconLinkProps> = ({ setLinkClick, linkTo, title }) => {
  const handleClick = () => {
    setLinkClick(false);
  };
  return (
    <ScrollLink
      to={`${linkTo}`}
      smooth={true}
      duration={500}
      onClick={handleClick}
      className="text-gray-300 hover:bg-aevum-blue hover:text-off-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
    >
      <li className="flex align-middle justify-center py-4 text-2xl  text-off-white  rounded-md m-auto ">
        {title}
      </li>
    </ScrollLink>

    // <Link onClick={handleClick} href={linkTo}>
    //   <li className="flex align-middle justify-center py-4 text-3xl  text-off-white  rounded-md m-auto ">
    //     {title}
    //   </li>
    // </Link>
  );
};

export default IconLink;
