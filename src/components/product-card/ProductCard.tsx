import { toBRL } from "@/utils";
import {
  Card,
  CardDescription,
  CardImage,
  CardTitle,
  CradTextContrast,
} from "../card";

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
}
export const ProductCard = ({ title, image, price }: ProductCardProps) => {
  return (
    <Card>
      <CardImage image={image} title={title} />

      <CardTitle>{title}</CardTitle>

      <CardDescription>
        Creme com nozes em pedaços, cobertura de chocolate branco e noz dourada
      </CardDescription>

      <CradTextContrast>{toBRL(price)}</CradTextContrast>
    </Card>
  );
};
