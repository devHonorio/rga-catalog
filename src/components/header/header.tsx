import { Logo } from "../logo";

export const Header = ({ title }: { title?: string }) => (
  <header className="mb-10 flex items-center gap-4 py-4 text-3xl font-bold">
    <Logo />
    <span className="capitalize">
      {!title && "RGA Doces e Salgados"}
      {title && title}
    </span>
  </header>
);
