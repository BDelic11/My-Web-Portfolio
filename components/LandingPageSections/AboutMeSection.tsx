"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useInView } from "framer-motion";
import { useRef } from "react";

//Components
import TitleComponent from "../ui/TitleComponent";
import LayoutContainer from "../ui/Container";

//Images
// import ProfileImage from "@/public/images/Slika za zivotopis.jpg";
import { Button, buttonVariants } from "../ui/button";
import { Router } from "next/router";
import Link from "next/link";

const AboutMeSection = () => {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <LayoutContainer>
      <section id="about" ref={ref}>
        <TitleComponent
          isInView={isInView}
          classname=" text-off-white mt-40  md:pt-20 "
        >
          <span className=" text-aevum-orange">(Ne)</span> klasičan programer
        </TitleComponent>
        <div
          ref={ref}
          className={` flex flex-col md:flex-row md:justify-start md:mr-auto md:rounded-lg md:my-10  ${
            isInView
              ? " transform-none  opacity-1 "
              : "transform translate-x-[20px]  "
          } transition-all duration-1000 delay-500  `}
        >
          {/* <Image
            src={ProfileImage}
            alt="slika profila"
            className="mx-auto rounded-full w-60 h-60 object-cover"
          /> */}
          <div className=" ">
            <div className="mx-auto rounded-full w-60 h-60 object-cover bg-white my-10"></div>
          </div>
          <div className="flex flex-col  md:pl-20 md:justify-center md:align-top">
            <div className="text-off-white font-light my-10 texl-lg md:text-xs leading-5 tracking-wide ">
              <p className="">{t("landing-about-paragraph-1")}</p>
              <p className="">{t("landing-about-paragraph-2")}</p>
            </div>

            <Button
              className="w-40 mb-20 text-off-white bg-aevum-orange text-sm md:text-xs "
              size="sm"
              asChild
            >
              <Link href="/about"> {t("landing-about-button")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </LayoutContainer>
  );
};

export default AboutMeSection;
