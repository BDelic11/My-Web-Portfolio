"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useAnimate, useScroll } from "framer-motion";
import useWindowSize from "@/app/hooks/useWindowSize";

// Icons and images
import AevumLogo from "@/../../public/icons/small-logo-new.svg";
import AevumLogoLarge from "@/../../public/icons/large-logo.svg";

// Components
import LayoutContainer from "./ui/Container";
import Navbar from "./Navbar";
import { useMenuAnimation } from "@/app/hooks/useMenuAnimation";
import { MenuToggle } from "./ui/MenutToggleButton";

const Header = () => {
  const screenSize = useWindowSize();
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = screenSize.width <= 786;

  //Animation of navbar when burger clicked
  const scope = useMenuAnimation(isMenuOpen);

  //Navbar turns invisible when not on top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleHamburger = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <header
      ref={scope}
      className={` ${
        isScrolled && !isMenuOpen ? " opacity-50" : " opacity-100"
      } fixed top-0  w-full bg-inherit shadow-md stroke-white py-3 transition-all duration-500 delay-150 z-10`}
    >
      <LayoutContainer>
        {isMobile ? (
          <>
            <div className="flex flex-row justify-between align-middle items-center">
              <Image
                src={AevumLogo}
                alt="Aevum Code Logo"
                width={32}
                height={32}
                priority
              />
              <MenuToggle toggle={handleToggleHamburger} />
            </div>

            {isMenuOpen && <Navbar setIsOpen={setisMenuOpen} />}
          </>
        ) : (
          // <Image
          //   src={logoTest1}
          //   alt="Large Aevum Logo"
          //   width={100}
          //   height={40}
          //   className="m-auto lg:scale-110 "
          // />
          <div className="flex justify-center  md:h-16 align-middle m-auto w-full">
            <h2 className="m-auto w-full text-xl md:text-2xl text-off-white text-center font-thin">
              <span className=" text-aevum-blue font-medium">CODE</span> with
              BRUNO DELIĆ
            </h2>
          </div>
        )}
      </LayoutContainer>
    </header>
  );
};

export default Header;
