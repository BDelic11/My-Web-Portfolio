import { unstable_setRequestLocale } from "next-intl/server";

//Components
import FirstSection from "@/components/AboutPageSections/FirstSection";
import WhyChoseMeSection from "@/components/AboutPageSections/WhyChoseMeSection";

export default function About({ params: { locale } }: any) {
  unstable_setRequestLocale(locale);
  return (
    <main className="min-h-screen flex flex-col  ">
      <FirstSection />
      <WhyChoseMeSection />
    </main>
  );
}
