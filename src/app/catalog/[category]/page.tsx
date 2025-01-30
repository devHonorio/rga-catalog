import { ProductCard } from "@/components/product-card";
import { dataCatalog, recheios } from "@/data";
import { CategoryType } from "@/types";
import { defaultParams, toBRL } from "@/utils";
import { categorysName } from "./layout";
import {
  Card,
  CardDescription,
  CardImage,
  CardTitle,
  CradTextContrast,
} from "@/components/card";

interface CategoryProps {
  params: Promise<{ category: string }>;
}

export default async function Category({ params }: CategoryProps) {
  const { category: paramCategory } = await params;

  const category = defaultParams({
    param: paramCategory,
    data: ["Recheios", ...categorysName],
  }) as CategoryType;

  const categoryRecheiosTrue = category === "Recheios";
  const products = !categoryRecheiosTrue ? dataCatalog[category] : [];
  return (
    <div className="flex flex-wrap justify-center gap-14">
      {categoryRecheiosTrue &&
        recheios.map(({ id, image, name, price }) => (
          <Card key={id}>
            <CardImage image={image} title={name} />
            <CardTitle>{name}</CardTitle>

            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis tenetur odio eligendi numquam praesentium culpa vel
              alias fuga cupiditate! Quibusdam ipsam porro debitis sapiente a
              dolorem impedit beatae aliquam mollitia?
            </CardDescription>

            <CradTextContrast>{toBRL(price)}/kg</CradTextContrast>
          </Card>
        ))}

      {products.map(({ id, price, image, title }) => {
        return (
          <ProductCard key={id} title={title} image={image} price={price} />
        );
      })}
    </div>
  );
}
