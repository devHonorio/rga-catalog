import { CategoryType } from "@/types";

interface ParamsProps {
  param: string;
  data: CategoryType[];
}

export function defaultParams({ param, data }: ParamsProps) {
  const paramDecode = decodeURI(param);

  if (!data.includes(paramDecode)) {
    return data[0] as CategoryType;
  }

  return paramDecode as CategoryType;
}
