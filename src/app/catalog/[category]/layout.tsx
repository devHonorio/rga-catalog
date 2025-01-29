import { CategoryButton } from "@/components/category-button";
import { dataCatalog } from "@/data";
import { defaultParams } from "@/utils";
import Link from "next/link";

interface Layout {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}

const categorysName = Object.keys(dataCatalog);

export default async function Layout({ children, params }: Layout) {
  const { category: paramCategory } = await params;

  const category = defaultParams({ param: paramCategory, data: categorysName });

  return (
    <div className="flex flex-col gap-4" id="categorys">
      <div className="flex flex-wrap gap-4">
        {categorysName.map((name) => (
          <CategoryButton key={name} name={name} active={name === category} />
        ))}
      </div>

      <Link
        href="#categorys"
        className="shadow-md w-20 h-20 rounded-full fixed bg-white justify-center items-center flex right-10 bottom-14"
      >
        ⬆️
      </Link>
      {children}
    </div>
  );
}
