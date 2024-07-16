//Components
import AboutMeSection from "@/components/LandingPageSections/AboutMeSection";
import HeroSection from "@/components/LandingPageSections/HeroSection";
import ProjectsSection from "@/components/LandingPageSections/ProjectsSection";
import UniqueSection from "@/components/LandingPageSections/UniqueSection";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("landing");
  return (
    <main className="min-h-screen flex flex-col  ">
      <p>{t(`cta`)}</p>
      {/* <HeroSection locale={locale} />
      <UniqueSection locale={locale} />
      <AboutMeSection locale={locale} />
      <ProjectsSection locale={locale} /> */}
    </main>
  );
}
