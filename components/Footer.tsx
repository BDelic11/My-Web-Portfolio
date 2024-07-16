"use client";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useInView } from "framer-motion";

//Icons
import linkedInIcon from "@/public/icons/social-media-icons/linkedIn.svg";
import mailIcon from "@/public/icons/social-media-icons/Gmail.svg";
import instaIcon from "@/public/icons/social-media-icons/instagram.svg";
import gitIcon from "@/public/icons/social-media-icons/github.svg";

//Components
import TitleComponent from "./ui/TitleComponent";
import LayoutContainer from "./ui/Container";
import DownloadButton from "./ui/DownloadButton";

const icons = [
  {
    id: 1,
    image: gitIcon,
    title: "GitHub",
    link: "https://github.com/BDelic11",
  },
  {
    id: 2,
    image: linkedInIcon,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/bruno-deli%C4%87-a83305278/",
  },
  {
    id: 3,
    image: mailIcon,
    title: "Gmail",
    link: "mailto:brunodelic00@gmail.com",
  },
  {
    id: 4,
    image: instaIcon,
    title: "Instagram",
    link: "https://www.instagram.com/brunodelic8/",
  },
];

const Footer = () => {
  const t = useTranslations("contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer id="contact" ref={ref} className="h-full bg-off-white">
      <LayoutContainer>
        <div className="flex flex-col md:flex-row md:justify-between md:align-middle md:py-20">
          <div className=" flex flex-col mb-10">
            <TitleComponent
              classname="pt-20 md:pt-0 text-dark-bg"
              isInView={isInView}
            >
              {t(`landing-contact-title`)}
            </TitleComponent>
            <DownloadButton downloadFile="/files/Bruno Delić CV.pdf">
              Download CV document
            </DownloadButton>
          </div>
          <div className=" text-dark-bg text-sm md:text-xs md:flex md:flex-col md:justify-center md:align-middle">
            <h2 className="">Bruno Delić</h2>
            <a
              className="underline cursor-pointer hover:text-aevum-blue transition-all duration-200"
              rel="noopener noreferrer"
              href="mailto:brunodelic00@gmail.com"
            >
              brunodelic00@gmail.com
            </a>
          </div>
        </div>
        <div
          ref={ref}
          className={` ${
            isInView
              ? "transform-none opacity-1"
              : " transform translate-y-[20px] opacity-0"
          }  transition-all duration-700 delay-500 flex flex-row w-full md:w-1/2 md:m-auto my-10 md:pb-10 md:my-0 flex-wrap `}
        >
          {icons.map((icon) => (
            <a
              rel="noopener noreferrer"
              href={icon.link}
              key={icon.id}
              className="flex flex-col justify-center align-middle m-auto w-20 cursor-pointer"
            >
              <Image
                src={icon.image}
                alt={`icon number ${icon.id}`}
                className="w-8 h-8  lg:w-10 lg:h-10 m-auto hover:scale-110 transition-all duration-300 delay-75"
              />
              {/* <p className="m-auto text-sm">{icon.title}</p> */}
            </a>
          ))}
        </div>
      </LayoutContainer>
    </footer>
  );
};

export default Footer;
