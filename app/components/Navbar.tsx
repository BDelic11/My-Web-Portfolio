"use client";
import Image from "next/image";
import React, { useState } from "react";
// import useWindowSize from "../hooks/useWindowSize";

// ICONS AND IMAGES
import AevumLogo from "@/../../public/icons/small logo (1).svg";
import HamburgerIcon from "@/../../public/icons/hamburger menu.svg";
import CloseIcon from "@/../../public/icons/cross.svg";

import IconLink from "./IconLink";
import LayoutContainer from "./Container";

const navbarIcons = [
  {
    id: 0,
    title: "Home",
    linkTo: "/",
    icon: undefined,
  },
  { id: 1, title: "What we offer", linkTo: "", icon: undefined },
  { id: 2, title: "Why choose us", linkTo: "", icon: undefined },
  { id: 3, title: "Who are we", linkTo: "", icon: undefined },
];

const Navbar = () => {
  //   const screenSize = useWindowSize();
  const screenSize = 700;

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LayoutContainer>
      <header className=" pt-3">
        {screenSize <= 786 ? (
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

            {isOpen ? (
              <>
                <nav className="flex align-middle justify-center">
                  <ul className="py-4">
                    {navbarIcons.map((navbarIcon) => (
                      <IconLink key={navbarIcon.id} {...navbarIcon} />
                    ))}
                  </ul>
                </nav>
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <nav>
            <ul className="flex flex-row justify-between align-middle items-center">
              {navbarIcons.map((navbarIcon) => (
                <IconLink key={navbarIcon.id} {...navbarIcon} />
              ))}
            </ul>
          </nav>
        )}
      </header>
    </LayoutContainer>
  );
};

export default Navbar;
