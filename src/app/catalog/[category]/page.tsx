import { dataCatalog } from "@/data";
import { CategoryType } from "@/types";
import { defaultParams, toBRL } from "@/utils";
import Image from "next/image";

interface CategoryProps {
  params: Promise<{ category: string }>;
}

const categorysName = Object.keys(dataCatalog);

export default async function Category({ params }: CategoryProps) {
  let { category: paramCategory } = await params;

  const category = defaultParams({
    param: paramCategory,
    data: categorysName,
  }) as CategoryType;

  const products = dataCatalog[category];
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:max-w-4xl xl:grid-cols-4 xl:max-w-5xl sm:grid-cols-2 sm:max-w-xl sm:gap-8  mx-auto max-w-xs">
      {products.map(({ id, price, image, title }) => {
        return (
          <div
            key={id}
            className="bg-white shadow-md rounded-3xl p-8 flex flex-col gap-4 h-fit"
          >
            <Image
              priority
              alt={title}
              src={image}
              width={100}
              height={100}
              className="rounded-3xl w-full"
            />
            <p className="font-bold text-gray-500">{title}</p>

            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              laborum eaque, temporibus ullam enim id vitae laudantium delectus
            </p>
            <p className="font-black">{toBRL(price)}</p>
          </div>
        );
      })}
    </div>
  );
}
