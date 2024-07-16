"use client";
import { useTranslations } from "next-intl";
import { lazy, useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

//Images
import heroImage from "@/public/images/hero-image.svg";

//Components
import LayoutContainer from "@/components/ui/Container";
import { Button } from "../ui/button";

const HeroSection = () => {
  const t = useTranslations("landing");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <LayoutContainer>
      <section
        id="hero"
        ref={ref}
        className=" h-screen pt-24 md:mt-16 md:pt-24 flex flex-col md:flex-row"
      >
        <div
          className="flex flex-col"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h1 className="  gap-4 text-white font-extralight text-lg  md:text-xl  ">
            <span className=" block mt-2 font-bold py-4 text-5xl md:text-6xl ">
              {" "}
              {t(`largeH1-first-part`)}
            </span>
            <span className=" ">{t(`largeH1-sec-part`)} </span>
            {t(`largeH1-third-part`)}
          </h1>

          <Button
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
            }}
            size="sm"
            asChild
            className="md:w-48 md:h-12 my-11 md:text-lg md:font-medium"
          >
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              href="/about"
            >
              {" "}
              {t("cta")}
            </ScrollLink>
          </Button>
        </div>

        <Image
          loading="lazy"
          src={heroImage}
          alt="Hero section illustration"
          width={260}
          height={210}
          className=" ml-auto md:w-[280px] md:h-[220px] lg:w-[300px] lg:h-[242px] md:mt-40 md:m-auto"
        />
      </section>
    </LayoutContainer>
  );
};

export default HeroSection;
