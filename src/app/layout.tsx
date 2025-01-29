import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

import localFont from "next/font/local";

const roboto = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const glacial = localFont({
  src: "../../public/fonts/GlacialIndifference-Regular.otf",
  display: "swap",
  variable: "--font-glacial",
});
export const metadata: Metadata = {
  title: "Catálogo",
  description: "Catálogo RGA Doces e Salgados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body
        className={`${roboto.className} ${glacial.variable} mx-auto flex w-4/5 flex-col gap-4 bg-gray-100`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
