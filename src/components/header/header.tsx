import Link from "next/link";
import { Logo } from "../logo";

export const Header = ({ title }: { title?: string }) => (
  <header className="mb-10 flex items-center justify-between gap-4 py-4 font-bold md:text-3xl">
    <div className="flex items-center gap-4">
      <Logo />
      <span className="capitalize">
        {!title && "RGA Doces e Salgados"}
        {title && title}
      </span>
    </div>

    <Link
      href="https://wa.me/+5546988158699"
      target="_blank"
      className="text-nowrap rounded-full bg-red-600 px-5 py-2 text-sm text-white"
    >
      Entre em contato
    </Link>
  </header>
);
