"use client";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

//IMAGES
import heroImage from "@/public/images/hero-image.svg";

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
        className=" h-screen pt-24 flex flex-col md:flex-row"
      >
        <div
          className="flex flex-col"
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <h1 className="  gap-4 text-white font-extralight text-lg  md:text-sm  ">
            <span className=" block mt-2 font-bold py-4 text-5xl ">
              {" "}
              {t(`largeH1-first-part`)}
            </span>
            <span className=" ">{t(`largeH1-sec-part`)}</span>
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
            className=" my-11"
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
          src={heroImage}
          alt="Hero section illustration"
          width={260}
          height={210}
          className=" ml-auto "
        />
      </section>
    </LayoutContainer>
  );
};

export default HeroSection;
