import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("landing");
  return (
    <main className="min-h-screen flex flex-col items-center">
      <h1 className=" text-white">{t("LargeH1")}</h1>
    </main>
  );
}
