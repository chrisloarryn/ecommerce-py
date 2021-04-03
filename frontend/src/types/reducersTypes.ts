import { ProductI } from "./products";

export type InitialStateI = {
  error: string | null;
  loading: boolean;
  products: ProductI[];
}