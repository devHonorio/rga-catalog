import { ProductCard } from "@/components/product-card";
import { categorysName, dataCatalog, rullesProducts } from "@/data";
import { CategoryType } from "@/types";
import { defaultParams } from "@/utils";

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
  const rulles = rullesProducts[category] || [];

  return (
    <div className="flex flex-col gap-10">
      {rulles.length > 0 && (
        <div className="mx-auto">
          {rulles.map((item) => (
            <div key={item} className="flex gap-2">
              <div>-</div> <div>{item}</div>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-14">
        {products.map(({ id, price, image, title, description }) => {
          return (
            <ProductCard
              className="break-inside-avoid break-after-auto"
              key={id}
              title={title}
              image={image}
              price={price}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return categorysName.map((category) => ({
    category,
  }));
}
