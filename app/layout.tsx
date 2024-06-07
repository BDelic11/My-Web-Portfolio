import "./globals.css";
// import { Inter } from "next/font/google";
import { Readex_Pro } from "next/font/google";

// INTERNATIONALIZATION
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import type { Metadata } from "next";
import dynamic from "next/dynamic";
import LanguageChanger from "@/components/LanguageChanger";
const Header = dynamic(() => import("@/components/Header"), { ssr: false });

// const inter = Inter({ subsets: ["latin"] });
const readex = Readex_Pro({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Aevum Code",
    default: "Aevum Code",
  },
  description:
    "Aevum Code is a team of skilled web developers dedicated to delivering innovative and efficient solutions. Explore our portfolio to see our expertise in action and discover how we can collaborate to bring your projects to life.",
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
      <body className={readex.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <LanguageChanger locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
