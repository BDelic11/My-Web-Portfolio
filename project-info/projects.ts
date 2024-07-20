import React from "react";
//Logos
import next from "@/public/technology-logos/next.svg";
import tailwind from "@/public/technology-logos/tailwind.svg";
import sass from "@/public/technology-logos/sass.svg";
import github from "@/public/technology-logos/github.svg";
import vercel from "@/public/technology-logos/vercel.svg";

//Images
import webshop1 from "@/public/images/webshop/Webshop-1.png";
import webshop2 from "@/public/images/webshop/Webshop-2.png";
// import webshop3 from "@/public/images/webshop/Webshop-3.png";
// import webshop4 from "@/public/images/webshop/Webshop-4.png";
// import webshop5 from "@/public/images/webshop/Webshop-5.png";
// import webshop6 from "@/public/images/webshop/Webshop-6.png";
// import webshop7 from "@/public/images/webshop/Webshop-7.png";
// import webshop8 from "@/public/images/webshop/Webshop-8.png";
// import webshop9 from "@/public/images/webshop/Webshop-9.png";
// import webshop10 from "@/public/images/webshop/Webshop-10.png";
// import webshop11 from "@/public/images/webshop/Webshop-11.png";

const webshopImages = [
  webshop1,
  webshop2,

  // webshop3,
  // webshop4,
  // webshop5,
  // webshop6,
  // webshop7,
  // webshop8,
  // webshop9,
  // webshop10,
  // webshop11,
];

export const projects = [
  {
    id: 0,
    title: "Stylist",
    about:
      "Samostalno sam dizajnirao i napravio ovaj web portfolio da mogu pokazati neke osnovne vještine, ali ujedno i izbjeći monotonost klasičnih životopisa.",
    technologies: [
      {
        id: 1,
        image: next,
        title: "Next.js",
      },
      {
        id: 2,
        image: tailwind,
        title: "Tailwind",
      },
      {
        id: 3,
        image: sass,
        title: "Sass",
      },
      {
        id: 4,
        image: github,
        title: "Github",
      },
      {
        id: 5,
        image: vercel,
        title: "Vercel",
      },
    ],
    images: webshopImages,
    github: "",
  },
  {
    id: 1,
    title: "Web shop",
    about:
      "Samostalno sam dizajnirao i napravio ovaj web portfolio da mogu pokazati neke osnovne vještine, ali ujedno i izbjeći monotonost klasičnih životopisa.",
    technologies: [
      {
        id: 1,
        image: next,
        title: "Next.js",
      },
      {
        id: 2,
        image: tailwind,
        title: "Tailwind",
      },
      {
        id: 3,
        image: sass,
        title: "Sass",
      },
      {
        id: 4,
        image: github,
        title: "Github",
      },
      {
        id: 5,
        image: vercel,
        title: "Vercel",
      },
    ],
    images: webshopImages,
    github: "https://github.com/BDelic11/e-commerce-webshop",
  },
];
