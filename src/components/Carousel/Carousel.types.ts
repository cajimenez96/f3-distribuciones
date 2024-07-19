import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ICarousel {
  elements: string[] | StaticImport[];
}