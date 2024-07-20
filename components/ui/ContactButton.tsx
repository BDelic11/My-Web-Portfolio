import React from "react";

import ContactIcon from "@/public/icons/contact-icon-white.svg";
import Image from "next/image";
import Link from "next/link";

const ContactButton = () => {
  return (
    <Link href="#contact">
      <div className="z-10 flex justify-center align-middle fixed bottom-6 right-4 md:bottom-14 md:right-16 w-12 h-12 md:w-16 md:h-16 bg-aevum-blue rounded-full cursor-pointer hover:scale-125 focus:scale-110 transition-all duration-500">
        <Image
          src={ContactIcon}
          alt="Contact Icon"
          className=" w-1/2 h-1/2 md:2/3 md:2/3 m-auto"
        />
      </div>
    </Link>
  );
};

export default ContactButton;
