import "./globals.css";
// import { Inter } from "next/font/google";
import { Readex_Pro } from "next/font/google";
// import { Archivo_Black } from "next/font/google";
// import { Montserrat_Alternates } from "next/font/google";

// INTERNATIONALIZATION
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { unstable_setRequestLocale } from "next-intl/server";

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import ContactButton from "@/components/ui/ContactButton";
import Footer from "@/components/Footer";
import notFound from "./not-found";
import { locales } from "@/navigation";
// import LanguageChanger from "@/components/LanguageChanger";
const Header = dynamic(() => import("@/components/Header"), { ssr: false });

// const inter = Inter({ subsets: ["latin"] });
const readex = Readex_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s -  Portfolio",
    default: "Bruno Delić",
  },
  description:
    "Explore Bruno Delić web development projects and his skills, including React, JavaScript, HTML, CSS, C#, C and many more.",
};

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// export async function generateMetadata({
//   params: { locale },
// }: Omit<Props, "children">) {
//   const t = await getTranslations({ locale, namespace: "LocaleLayout" });

//   return {
//     title: t("title"),
//   };
// }

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={` ${readex.className}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {/* <LanguageChanger locale={locale} /> */}
          {children}
          <Footer />
          <ContactButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
