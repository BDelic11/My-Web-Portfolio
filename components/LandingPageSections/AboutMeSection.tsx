"use client";
import { useTranslations } from "next-intl";
import { useInView } from "framer-motion";
import { useRef } from "react";

//Components
import TitleComponent from "../ui/TitleComponent";
import LayoutContainer from "../ui/Container";
import Image from "next/image";

//Images
import ProfileImage from "@/public/images/Slika za zivotopis_final.jpg";
import { Button } from "../ui/button";
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
          classname=" text-off-white mt-40 md:mt-40 "
        >
          <span className=" text-aevum-orange">
            ({t(`landing-about-title-1`)})
          </span>{" "}
          {t(`landing-about-title-2`)}
        </TitleComponent>
        <div
          ref={ref}
          className={` flex flex-col md:flex-row md:justify-start md:mr-auto md:rounded-lg md:my-10  ${
            isInView
              ? " transform-none  opacity-1 "
              : "transform translate-x-[20px]  "
          } transition-all duration-1000 delay-500  `}
        >
          <div className="mx-auto rounded-full w-full h-full my-auto  ">
            {" "}
            <Image
              src={ProfileImage}
              alt="slika profila"
              className="rounded-full w-60 h-60 md:w-[250px] md:h-[250px] object-cover mx-auto"
            />
          </div>

          <div className="flex flex-col  md:pl-40 md:justify-center md:align-top">
            <div className="text-off-white font-light my-10 texl-lg md:text-lg  ">
              <p className="">{t("landing-about-paragraph-2")}</p>
              <p className="hidden md:block">
                {t("landing-about-paragraph-1")}
              </p>
            </div>

            <Button
              className="w-40 mb-20 text-off-white bg-aevum-orange text-sm md:w-48 md:h-12 md:my-11 md:text-lg md:font-medium md:ml-auto"
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
