import { useTranslations } from "next-intl";
import Image from "next/image";

//IMAGES
import heroImage from "@/public/images/hero-image.svg";

import LayoutContainer from "@/components/ui/Container";
import { Button } from "../ui/button";

const HeroSection = () => {
  const t = useTranslations("landing");
  return (
    <section className=" pt-20">
      <LayoutContainer>
        <h1 className="flex flex-col leading-14 gap-4 text-white font-extralight text-5xl  ">
          <span>{t("LargeH1-first-part")}</span>
          <span className=" font-semibold  text-aevum-blue">
            {" "}
            {t("LargeH1-sec-part")}
          </span>{" "}
          <span>{t("LargeH1-third-part")} </span>
          <span className=" font-semibold">{t("LargeH1-forth-part")}</span>
        </h1>
        <Button className=" my-11 bg-aevum-orange">{t("Cta")}</Button>
        <Image
          src={heroImage}
          alt="Hero section illustration"
          width={260}
          height={210}
          className="absolute right-4"
        />
      </LayoutContainer>
    </section>
  );
};

export default HeroSection;
