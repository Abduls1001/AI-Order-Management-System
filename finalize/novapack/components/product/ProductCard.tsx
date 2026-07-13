import Link from "next/link";
import type { Product } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { ProductImagePlaceholder } from "./ProductImagePlaceholder";
import { formatCurrency } from "@/lib/utils";

const availabilityTone: Record<Product["availability"], "success" | "amber" | "steel"> = {
  "In Stock": "success",
  "Limited Stock": "amber",
  "Made to Order": "steel",
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col border border-line bg-white transition-colors hover:border-steel"
    >
      <ProductImagePlaceholder label={product.imageLabel} sku={product.sku} />
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink/40">
            {product.sku}
          </span>
          <Badge tone={availabilityTone[product.availability]}>
            {product.availability}
          </Badge>
        </div>
        <h3 className="font-display text-base font-semibold leading-snug text-graphite group-hover:text-steel">
          {product.name}
        </h3>
        <p className="line-clamp-2 text-sm text-ink/60">{product.shortDescription}</p>
        <div className="mt-auto flex items-end justify-between pt-3">
          <div>
            <p className="font-display text-lg font-semibold text-graphite">
              {formatCurrency(product.price)}
            </p>
            <p className="text-xs text-ink/40">{product.unit} · MOQ {product.moq}</p>
          </div>
          <span className="text-xs font-medium text-steel">View details →</span>
        </div>
      </div>
    </Link>
  );
}
