import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const roboto = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
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
        className={`${roboto.className} w-4/5 mx-auto bg-gray-50 gap-2 flex flex-col`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
