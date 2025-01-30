import { CategoryButton } from "@/components/category-button";
import { dataCatalog } from "@/data";
import { defaultParams } from "@/utils";
import Link from "next/link";

interface Layout {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}

export const categorysName = Object.keys(dataCatalog);

export default async function Layout({ children, params }: Layout) {
  const { category: paramCategory } = await params;

  const category = defaultParams({
    param: paramCategory,
    data: ["Recheios", ...categorysName],
  });

  return (
    <div className="flex flex-col gap-8" id="categorys">
      <div className="flex flex-wrap gap-4">
        <CategoryButton name="Recheios" active={category === "Recheios"} />
        {categorysName.map((name) => (
          <CategoryButton key={name} name={name} active={name === category} />
        ))}
      </div>

      <Link
        href="#categorys"
        className="fixed bottom-14 right-10 z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-md"
      >
        ⬆️
      </Link>
      {children}
    </div>
  );
}
