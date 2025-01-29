import Link from "next/link";

interface CategoryButtonProps {
  name: string;
  active: Boolean;
}

export const CategoryButton = ({ name, active }: CategoryButtonProps) => {
  return (
    <Link
      key={name}
      href={`/catalog/${name}`}
      data-active={active}
      className="rounded-full px-4 py-2 data-[active=true]:bg-red-600 data-[active=true]:text-white shadow-md bg-white font-semibold capitalize text-gray-700"
    >
      {name}
    </Link>
  );
};
