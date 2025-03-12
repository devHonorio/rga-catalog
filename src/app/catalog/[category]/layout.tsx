import { CategoryButton } from "@/components/category-button";
import { categorysName } from "@/data";
import { defaultParams } from "@/utils";
import Link from "next/link";

interface Layout {
  children: React.ReactNode;
  params: Promise<{ category: string }>;
}

export default async function Layout({ children, params }: Layout) {
  const { category: paramCategory } = await params;

  const category = defaultParams({
    param: paramCategory,
    data: categorysName,
  });

  return (
    <div className="flex flex-col gap-8" id="categorys">
      <div className="flex flex-wrap gap-4">
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
