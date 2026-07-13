import Link from "next/link";
import { Product } from "@/lib/types";
import { ProductImagePlaceholder } from "@/components/shared/product-image-placeholder";
import { AvailabilityBadge } from "@/components/shared/availability-badge";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden border border-line bg-white transition-shadow hover:shadow-[0_4px_0_0_var(--signal)]"
    >
      <div className="relative">
        <ProductImagePlaceholder category={product.category} sku={product.sku} />
        {product.tags?.[0] && (
          <Badge variant="signal" className="absolute left-3 top-3">
            {product.tags[0]}
          </Badge>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[0.7rem] tracking-wide text-muted-ink">
          {product.sku}
        </p>
        <h3 className="mt-1.5 font-display text-base font-semibold leading-snug text-ink group-hover:text-steel-deep">
          {product.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-ink">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex items-end justify-between border-t border-line pt-4">
          <div>
            <p className="font-display text-lg font-bold text-ink">
              {formatCurrency(product.price)}
              <span className="ml-1 text-xs font-normal text-muted-ink">
                /{product.unit}
              </span>
            </p>
            <p className="mt-0.5 text-xs text-muted-ink">MOQ {product.moq}</p>
          </div>
          <AvailabilityBadge status={product.availability} />
        </div>
      </div>
    </Link>
  );
}
