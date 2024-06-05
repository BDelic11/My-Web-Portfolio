import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - Aevum Code",
    default: "Aevum Code",
  },
  description:
    "Aevum Code is a team of skilled web developers dedicated to delivering innovative and efficient solutions. Explore our portfolio to see our expertise in action and discover how we can collaborate to bring your projects to life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
