"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Product } from "@/lib/types";
import { ProductImagePlaceholder } from "@/components/shared/product-image-placeholder";
import { useCart } from "@/lib/cart-context";
import { formatCurrency } from "@/lib/utils";

export function CartLineItem({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 border-b border-line py-6 last:border-b-0">
      <div className="w-24 shrink-0 sm:w-28">
        <ProductImagePlaceholder category={product.category} sku={product.sku} />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link
              href={`/products/${product.slug}`}
              className="font-display text-sm font-semibold text-ink hover:text-steel-deep sm:text-base"
            >
              {product.name}
            </Link>
            <p className="mt-1 font-mono text-xs text-muted-ink">{product.sku}</p>
          </div>
          <p className="shrink-0 font-display text-sm font-bold text-ink sm:text-base">
            {formatCurrency(product.price * quantity)}
          </p>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center border border-line bg-white">
            <button
              type="button"
              aria-label="Decrease quantity"
              onClick={() =>
                updateQuantity(product.id, Math.max(product.moq, quantity - product.moq))
              }
              className="flex h-9 w-9 items-center justify-center text-ink hover:bg-paper"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="flex h-9 w-12 items-center justify-center text-sm font-semibold">
              {quantity}
            </span>
            <button
              type="button"
              aria-label="Increase quantity"
              onClick={() => updateQuantity(product.id, quantity + product.moq)}
              className="flex h-9 w-9 items-center justify-center text-ink hover:bg-paper"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeItem(product.id)}
            className="flex items-center gap-1.5 text-xs font-medium text-status-back hover:underline"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
