import Image from "next/image";

interface Children {
  children: React.ReactNode;
}
interface CardProps extends Children {
  className?: string;
}
export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`group flex h-fit w-80 flex-col gap-4 rounded-[3rem] bg-white p-8 ${className}`}
    >
      {children}
    </div>
  );
};

interface CardImageProps {
  title: string;
  image: string;
}
export const CardImage = ({ image, title }: CardImageProps) => {
  return (
    <div className="mx-auto h-full max-h-52 w-full max-w-52 rounded-3xl">
      <Image
        priority
        alt={title}
        src={image}
        width={250}
        height={250}
        className="h-full w-full rounded-xl drop-shadow-xl"
      />
    </div>
  );
};

export const CardTitle = ({ children }: Children) => {
  return <p className="text-3xl font-bold text-gray-500">{children}</p>;
};

export const CardDescription = ({ children }: Children) => {
  return (
    <p className="line-clamp-3 font-glacial text-lg tracking-wide text-gray-500 group-hover:line-clamp-none">
      {children}
    </p>
  );
};

export const CradTextContrast = ({ children }: Children) => {
  return <p className="text-3xl font-bold">{children}</p>;
};
