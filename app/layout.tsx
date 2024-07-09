import "./globals.css";
// import { Inter } from "next/font/google";
import { Readex_Pro } from "next/font/google";
import { Archivo_Black } from "next/font/google";
import { Montserrat_Alternates } from "next/font/google";

// INTERNATIONALIZATION
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import ContactButton from "@/components/ui/ContactButton";
import Footer from "@/components/Footer";
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

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
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
