"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent } from "react";

//ICONS
import croFlag from "@/public/icons/croFlag.png";
import ukFlag from "@/public/icons/ukFlag.png";

interface LanguageSwitchProps {
  locale: string; // Define the type of the 'locale' prop as a string
}

export default function LanguageChanger({ locale }: LanguageSwitchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("LocaleSwitcher");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // Define the available locales
    const availableLocales = ["en", "hr"];

    // Strip the current locale from the pathname
    const segments = pathname.split("/");
    const currentLocale = segments[1];
    const basePath = availableLocales.includes(currentLocale)
      ? segments.slice(2).join("/")
      : pathname;

    // Construct the new URL
    const newUrl = `/${newLocale}/${basePath}`;

    // Navigate to the new URL
    router.push(newUrl);
  };

  return (
    <>
      <select className="m-auto" value={locale} onChange={handleChange}>
        <option value="en">{t("en")}</option>
        <option value="hr">{t("hr")}</option>
      </select>

      {/* <div className="flex flex-row">
        <Image
          width={24}
          height={24}
          src={croFlag}
          alt="cro flag"
          className=""
        />
        <Image width={24} height={24} src={ukFlag} alt="uk flag" className="" />
      </div> */}
    </>
  );
}
