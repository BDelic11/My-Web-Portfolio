"use client";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { useInView } from "framer-motion";

//Components
import LayoutContainer from "../ui/Container";
import TitleComponent from "../ui/TitleComponent";
import WhyMeIcon from "../WhyMeIcon";

//Icons
import book from "@/public/icons/why-choose-me-icons/blue-book.svg";
import groupIcon from "@/public/icons/why-choose-me-icons/group.svg";
import communicationIcon from "@/public/icons/why-choose-me-icons/communication.svg";
import boltIcon from "@/public/icons/why-choose-me-icons/bolt.svg";

const icons = [
  {
    id: 1,
    image: book,
    text: "Fast Learner",
  },
  {
    id: 2,
    image: groupIcon,
    text: "Team Player",
  },
  {
    id: 3,
    image: communicationIcon,
    text: "Communicative",
  },
  {
    id: 4,
    image: boltIcon,
    text: "Quickly Adaptable",
  },
];

const WhyChoseMeSection = () => {
  const t = useTranslations("about-page");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="pt-24 bg-off-white" ref={ref}>
      <LayoutContainer>
        <TitleComponent isInView={isInView} classname=" text-dark-bg">
          <span className="text-aevum-blue">{t(`why-me-title-1`)}</span>{" "}
          {t(`why-me-title-2`)}
        </TitleComponent>
        <p className="pb-10 text-gray-500 ">{t(`why-me-text`)}</p>
        <div className=" flex flex-col gap-20 md:flex-row justify-center align-middle my-20">
          {icons.map((icon) => (
            <WhyMeIcon key={icon.id} {...icon} />
          ))}
        </div>
      </LayoutContainer>
    </section>
  );
};

export default WhyChoseMeSection;
