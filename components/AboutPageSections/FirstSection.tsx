"use client";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { useInView } from "framer-motion";

//Images
import Image from "next/image";
import fesbIcon from "@/public/images/fesb-logo.png";

//Components
import LayoutContainer from "../ui/Container";
import TitleComponent from "../ui/TitleComponent";

const FirstSection = () => {
  const t = useTranslations("about-page");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className=" bg-off-white" ref={ref}>
      <LayoutContainer>
        <TitleComponent
          isInView={isInView}
          classname="pt-24 md:pt-40 md:pb-10 md:w-2/3 text-dark-bg"
        >
          {" "}
          More about me
        </TitleComponent>
        <p
          ref={ref}
          className={`text-dark-bg mb-20 md:mb-10 leading-relaxed tracking-normal ${
            isInView
              ? "transform-none opacity-1"
              : " transform translate-x-[-200px] opacity-0"
          }  transition-all duration-500 delay-700 `}
        >
          {t(`about-firstSection-paragraph`)}
        </p>
        {/* <Image src={fesbIcon} alt="fesb icon" width={100} height={100} /> */}
      </LayoutContainer>
    </section>
  );
};

export default FirstSection;
