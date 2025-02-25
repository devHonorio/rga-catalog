import { ProductCard } from "@/components/product-card";
import { categorysName, dataCatalog } from "@/data";
import { CategoryType } from "@/types";
import { defaultParams, toBRL } from "@/utils";

interface CategoryProps {
  params: Promise<{ category: string }>;
}

export default async function Category({ params }: CategoryProps) {
  const { category: paramCategory } = await params;

  const category = defaultParams({
    param: paramCategory,
    data: categorysName,
  }) as CategoryType;

  const products = dataCatalog[category];
  return (
    <div className="flex flex-wrap justify-center gap-14">
      {products.map(({ id, price, image, title }) => {
        return (
          <ProductCard key={id} title={title} image={image} price={price} />
        );
      })}
    </div>
  );
}
