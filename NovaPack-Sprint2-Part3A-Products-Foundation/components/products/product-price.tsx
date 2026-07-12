import { formatPrice } from "@/utils/product";

export function ProductPrice({price}:{price:number}) {
  return <p className="text-lg font-semibold">{formatPrice(price)}</p>;
}
