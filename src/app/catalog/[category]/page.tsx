import { dataCatalog } from "@/data";
import { CategoryType } from "@/types";
import { defaultParams, toBRL } from "@/utils";
import Image from "next/image";

interface CategoryProps {
  params: Promise<{ category: string }>;
}

const categorysName = Object.keys(dataCatalog);

export default async function Category({ params }: CategoryProps) {
  const { category: paramCategory } = await params;

  const category = defaultParams({
    param: paramCategory,
    data: categorysName,
  }) as CategoryType;

  const products = dataCatalog[category];
  return (
    <div className="mx-auto grid max-w-md grid-cols-1 gap-4 sm:max-w-3xl sm:grid-cols-2 sm:gap-8 lg:max-w-4xl lg:grid-cols-3 xl:max-w-7xl xl:grid-cols-4">
      {products.map(({ id, price, image, title }) => {
        return (
          <div
            key={id}
            className="flex h-fit flex-col gap-4 rounded-[4rem] bg-white p-10"
          >
            <Image
              priority
              alt={title}
              src={image}
              width={100}
              height={100}
              className="w-full rounded-3xl"
            />
            <p className="text-3xl font-bold text-gray-500">{title}</p>

            <p className="font-glacial text-lg text-gray-500">
              Creme com nozes em pedaços, cobertura de chocolate branco e noz
              dourada
            </p>
            <p className="text-4xl font-bold">{toBRL(price)}</p>
          </div>
        );
      })}
    </div>
  );
}
