import type { Metadata } from "next";
import { Header } from "@/components/header";

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
    <div className={`mx-auto flex w-4/5 flex-col gap-4`}>
      <Header />
      {children}
    </div>
  );
}
