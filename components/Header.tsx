"use client";

import Image from "next/image";
import React, { useState } from "react";
import useWindowSize from "@/app/hooks/useWindowSize";

// ICONS AND IMAGES
import AevumLogo from "@/../../public/icons/small-logo-new.svg";
import AevumLogoLarge from "@/../../public/icons/large-logo.svg";
import HamburgerIcon from "@/../../public/icons/hamburger menu.svg";
import CloseIcon from "@/../../public/icons/cross.svg";

import LayoutContainer from "./ui/Container";
import Navbar from "./Navbar";

const Header = () => {
  const screenSize = useWindowSize();

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" bg-inherit shadow-md stroke-white py-3">
      <LayoutContainer>
        {screenSize.width <= 786 ? (
          <>
            <div className="flex flex-row justify-between align-middle items-center">
              <Image
                src={AevumLogo}
                alt="Aevum Code Logo"
                width={32}
                height={32}
                priority
              />

              {isOpen ? (
                <Image
                  src={CloseIcon}
                  alt="Close icon"
                  width={32}
                  height={32}
                  onClick={handleToggleHamburger}
                  className="bg-white"
                />
              ) : (
                <Image
                  src={HamburgerIcon}
                  alt="Hamburger icon"
                  width={24}
                  height={24}
                  priority
                  onClick={handleToggleHamburger}
                />
              )}
            </div>

            {isOpen && (
              <Navbar className="absolute bg-dark-bg w-full h-1/2 -inset-x-0 flex flex-col align-middle justify-center " />
            )}
          </>
        ) : (
          <Image
            src={AevumLogoLarge}
            alt="Large Aevum Logo"
            width={165}
            height={30}
            className="m-auto lg:scale-110 "
          />
          //   <Navbar className="flex flex-row justify-between items-center" />
        )}
      </LayoutContainer>
    </header>
  );
};

export default Header;
