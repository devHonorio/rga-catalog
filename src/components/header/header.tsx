import { Logo } from "../logo";

export const Header = () => (
  <header className="flex items-center gap-4 py-4 text-3xl font-bold">
    <Logo />
    <span>RGA Doces e Salgados</span>
  </header>
);
