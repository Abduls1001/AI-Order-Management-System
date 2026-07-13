"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";
import { ProductImagePlaceholder } from "@/components/product/ProductImagePlaceholder";

export function CartItemRow({ product, quantity }: { product: Product; quantity: number }) {
  const { updateQuantity, removeFromCart } = useCart();
  const step = product.moq;

  return (
    <div className="flex flex-col gap-4 border-b border-line py-6 sm:flex-row sm:items-center">
      <Link href={`/products/${product.slug}`} className="w-24 shrink-0">
        <ProductImagePlaceholder label={product.imageLabel} sku={product.sku} />
      </Link>

      <div className="flex-1">
        <Link
          href={`/products/${product.slug}`}
          className="font-display text-base font-semibold text-graphite hover:text-steel"
        >
          {product.name}
        </Link>
        <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink/40">
          {product.sku}
        </p>
        <p className="mt-1 text-sm text-ink/50">
          {formatCurrency(product.price)} {product.unit}
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex h-10 items-center border border-line">
          <button
            type="button"
            onClick={() => updateQuantity(product.id, Math.max(step, quantity - step))}
            className="flex h-full w-9 items-center justify-center text-ink/60 hover:bg-black/5"
            aria-label={`Decrease quantity of ${product.name}`}
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          <span className="flex h-full w-12 items-center justify-center border-x border-line font-mono text-sm">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => updateQuantity(product.id, quantity + step)}
            className="flex h-full w-9 items-center justify-center text-ink/60 hover:bg-black/5"
            aria-label={`Increase quantity of ${product.name}`}
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>

        <p className="w-24 text-right font-mono text-sm font-medium text-graphite">
          {formatCurrency(product.price * quantity)}
        </p>

        <button
          type="button"
          onClick={() => removeFromCart(product.id)}
          className="text-ink/35 hover:text-amber"
          aria-label={`Remove ${product.name} from cart`}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
