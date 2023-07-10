import Header from "@/components/common/Header";
import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import IronMan from "@/assets/IronMan Bg.jpg";
export const metadata: Metadata = {
  title: "App Avengers Blogs",
  description: "Bloging Website For App Avengers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-white bg-black relative noScroll">
        <Image
          src={IronMan}
          className="absolute flex top-0 left-0 object-cover object-center opacity-60 -z-20"
          alt="ironman"
        />
        <Header />
        {children}
      </body>
    </html>
  );
}
