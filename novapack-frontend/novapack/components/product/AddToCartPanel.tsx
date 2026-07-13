"use client";

import { useState } from "react";
import { Minus, Plus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

export function AddToCartPanel({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(product.moq);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const step = product.moq;

  function handleAdd() {
    addToCart(product.id, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="border border-line p-6">
      <div className="flex items-baseline justify-between">
        <p className="font-display text-2xl font-semibold text-graphite">
          {formatCurrency(product.price)}
        </p>
        <p className="text-xs text-ink/45">{product.unit}</p>
      </div>
      <p className="mt-1 text-xs text-ink/45">
        Minimum order quantity: {product.moq} · Ordering in increments of {step}
      </p>

      <div className="mt-5">
        <span className="mb-1.5 block text-sm font-medium text-ink">Quantity</span>
        <div className="flex h-12 w-full items-center border border-line">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(step, q - step))}
            className="flex h-full w-12 shrink-0 items-center justify-center text-ink/60 hover:bg-black/5"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <input
            type="number"
            min={step}
            step={step}
            value={quantity}
            onChange={(e) => {
              const val = Number(e.target.value);
              setQuantity(Number.isFinite(val) && val > 0 ? val : step);
            }}
            className="h-full w-full flex-1 border-x border-line text-center font-mono text-sm text-ink focus-visible:outline-none"
            aria-label="Quantity"
          />
          <button
            type="button"
            onClick={() => setQuantity((q) => q + step)}
            className="flex h-full w-12 shrink-0 items-center justify-center text-ink/60 hover:bg-black/5"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-sm">
        <span className="text-ink/50">Line total</span>
        <span className="font-mono font-medium text-graphite">
          {formatCurrency(product.price * quantity)}
        </span>
      </div>

      <Button size="lg" className="mt-5 w-full" onClick={handleAdd}>
        {added ? (
          <>
            <Check className="h-4 w-4" /> Added to Cart
          </>
        ) : (
          "Add to Cart"
        )}
      </Button>
    </div>
  );
}
