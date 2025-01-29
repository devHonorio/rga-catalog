import { CategoryType } from "@/types";

interface ParamsProps {
  param: string;
  data: string[];
}

export function defaultParams({ param, data }: ParamsProps) {
  const paramDecode = decodeURI(param);

  if (!data.includes(paramDecode)) {
    return data[0];
  }

  return paramDecode;
}
