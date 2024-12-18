"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

//Components
import TitleComponent from "../ui/TitleComponent";
import LayoutContainer from "../ui/Container";
import { useTranslations } from "next-intl";

const UniqueSection = () => {
  const t = useTranslations("unique");
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInViewText = useInView(ref1, { once: true });
  const isInViewDot = useInView(ref2, { once: true });

  return (
    <section
      id="unique"
      ref={ref1}
      className={`flex flex-col h-[130vh] mt-40 md:h-[80vh] lg:h-[100vh]  ${
        isInViewText ? " bg-white" : " bg-dark-bg"
      } transition-all duration-1000 delay-75 `}
    >
      <LayoutContainer>
        <TitleComponent
          isInView={isInViewText}
          classname=" text-dark-bg  mt-40 md:mt-20 "
        >
          {t(`landing-unique-title-1`)}

          <span className=" text-aevum-blue block">
            {" "}
            {t(`landing-unique-title-2`)}
          </span>
        </TitleComponent>
        <div className="flex flex-col md:flex-row-reverse ">
          <div
            ref={ref2}
            className={` ${
              isInViewDot
                ? " bg-aevum-orange transform-none  opacity-1 "
                : " bg-gray-500 transform translate-x-[50px]  "
            } transition-all duration-1000 delay-500 rounded-full w-60 h-60 md:w-72 md:h-72 m-auto md:ml-auto md:mx-10 `}
          >
            <div
              ref={ref2}
              className={` ${
                isInViewDot
                  ? " bg-aevum-blue transform-none opacity-1 w-6 h-6 "
                  : " bg-gray-500 transform translate-x-[20px]  "
              } transition-all duration-1000 delay-500 rounded-full w-6 h-6 ml-auto   `}
            ></div>
          </div>
          <p className=" text-dark-bg my-20  md:w-1/2 md:text-lg ">
            {t(`landing-unique-paragraph`)}
          </p>
        </div>
      </LayoutContainer>
    </section>
  );
};

export default UniqueSection;
