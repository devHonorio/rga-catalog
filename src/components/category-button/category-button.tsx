import Link from "next/link";

interface CategoryButtonProps {
  name: string;
  active: boolean;
}

export const CategoryButton = ({ name, active }: CategoryButtonProps) => {
  return (
    <Link
      key={name}
      href={`/catalog/${name}`}
      data-active={active}
      className="rounded-full bg-white px-4 py-2 font-semibold capitalize text-gray-700 data-[active=true]:bg-red-600 data-[active=true]:text-white"
    >
      {name.replaceAll("-", " ")}
    </Link>
  );
};
