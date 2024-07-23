import React from "react";
//Logos
import next from "@/public/technology-logos/next.svg";
import tailwind from "@/public/technology-logos/tailwind.svg";
import sass from "@/public/technology-logos/sass.svg";
import github from "@/public/technology-logos/github.svg";
import vercel from "@/public/technology-logos/vercel.svg";
import dotnet from "@/public/technology-logos/dotnet-icon.svg";

//Images
import stylistImage from "@/public/images/stylist-image.png";
import webshop1 from "@/public/images/webshop/Webshop-1.png";
import webshop2 from "@/public/images/webshop/Webshop-2.png";
import webshop4 from "@/public/images/webshop/webshop-admin1.png";
import webshop5 from "@/public/images/webshop/webshop-admin2.png";
import webshop6 from "@/public/images/webshop/webshop-admin3.png";
import webshop7 from "@/public/images/webshop/webshop-admin4.png";
import webshop8 from "@/public/images/webshop/webshop-admin5.png";
import webshop9 from "@/public/images/webshop/webshop-admin6.png";
import webshop10 from "@/public/images/webshop/webshop-admin8.png";

const webshopImages = [
  webshop1,
  webshop2,
  webshop4,
  webshop5,
  webshop6,
  webshop7,
  webshop8,
  webshop9,
  webshop10,
];

export const projects = [
  {
    id: 0,
    title: "Stylist",
    aboutKey: "about-stylist",
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
        image: dotnet,
        title: ".NET",
      },
    ],
    images: [stylistImage],
    link: "https://gitfront.io/r/brunod/LdMN8gss1tHS/stylist",
  },
  {
    id: 1,
    title: "Web shop",
    aboutKey: "about-webshop",
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
