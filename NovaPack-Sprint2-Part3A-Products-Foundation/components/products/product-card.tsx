import { Product } from "@/types/product";
import { ProductPrice } from "./product-price";
import { ProductStockBadge } from "./product-stock-badge";

export function ProductCard({product}:{product:Product}) {
  return (
    <article className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="aspect-square rounded-lg bg-gray-100" />
      <h3 className="mt-4 font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.sku}</p>
      <ProductPrice price={product.price}/>
      <ProductStockBadge stock={product.stock}/>
    </article>
  );
}
