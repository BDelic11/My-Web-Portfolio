//Components

import FirstSection from "@/components/AboutPageSections/FirstSection";
import WhyChoseMeSection from "@/components/AboutPageSections/WhyChoseMeSection";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col  ">
      <FirstSection />
      <WhyChoseMeSection />
    </main>
  );
}
