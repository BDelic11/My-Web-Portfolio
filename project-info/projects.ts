//Logos
import next from "@/public/technology-logos/next.svg";
import tailwind from "@/public/technology-logos/tailwind.svg";
import sass from "@/public/technology-logos/sass.svg";
import github from "@/public/technology-logos/github.svg";
import vercel from "@/public/technology-logos/vercel.svg";

//Images
import stylist1 from "@/public/images/1.jpg";

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
    images: [stylist1, stylist1],
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
    images: [
      stylist1,
      stylist1,
      stylist1,
      stylist1,
      stylist1,
      stylist1,
      stylist1,
      stylist1,
      stylist1,
      stylist1,
    ],
    github: "https://github.com/BDelic11/e-commerce-webshop",
  },
];
