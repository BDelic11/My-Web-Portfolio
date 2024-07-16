//Components
import AboutMeSection from "@/components/LandingPageSections/AboutMeSection";
import HeroSection from "@/components/LandingPageSections/HeroSection";
import ProjectsSection from "@/components/LandingPageSections/ProjectsSection";
import UniqueSection from "@/components/LandingPageSections/UniqueSection";

export default function Home({ params: { locale } }: any) {
  return (
    <main className="min-h-screen flex flex-col  ">
      <HeroSection locale={locale} />
      <UniqueSection locale={locale} />
      <AboutMeSection locale={locale} />
      <ProjectsSection locale={locale} />
    </main>
  );
}
