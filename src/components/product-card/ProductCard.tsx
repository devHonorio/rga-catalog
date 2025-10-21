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
  image?: string;
  price: number;
  description?: string;
  className?: string;
}
export const ProductCard = ({
  title,
  image,
  price,
  description,
  className,
}: ProductCardProps) => {
  return (
    <Card className={className}>
      {image && <CardImage image={image} title={title} />}

      <CardTitle>{title}</CardTitle>

      {description && <CardDescription>{description}</CardDescription>}

      <CradTextContrast>{toBRL(price)}</CradTextContrast>
    </Card>
  );
};
