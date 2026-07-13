"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, ShoppingCart, FileText, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

export function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(product.moq);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const router = useRouter();

  function handleAdd() {
    addItem(product.id, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  function handleQuoteRequest() {
    router.push(`/request-quote?product=${encodeURIComponent(product.name)}`);
  }

  return (
    <div className="space-y-5 border border-line bg-white p-6">
      <div className="flex items-baseline justify-between">
        <p className="font-display text-3xl font-bold text-ink">
          {formatCurrency(product.price)}
          <span className="ml-1.5 text-sm font-normal text-muted-ink">
            / {product.unit}
          </span>
        </p>
      </div>
      <p className="text-xs text-muted-ink">
        Minimum order quantity: <span className="font-semibold text-ink">{product.moq} {product.unit}(s)</span>
      </p>

      <div>
        <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink/80">
          Quantity
        </label>
        <div className="flex items-center border border-line bg-white">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((q) => Math.max(product.moq, q - product.moq))}
            className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:bg-paper"
          >
            <Minus className="h-4 w-4" />
          </button>
          <input
            type="number"
            value={quantity}
            min={product.moq}
            step={product.moq}
            onChange={(e) =>
              setQuantity(Math.max(product.moq, Number(e.target.value) || product.moq))
            }
            className="h-11 w-full border-x border-line text-center text-sm font-semibold text-ink focus:outline-none"
          />
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity((q) => q + product.moq)}
            className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:bg-paper"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <p className="text-sm text-muted-ink">
        Line total:{" "}
        <span className="font-semibold text-ink">
          {formatCurrency(product.price * quantity)}
        </span>
      </p>

      <div className="flex flex-col gap-3">
        <Button
          variant="signal"
          size="lg"
          onClick={handleAdd}
          disabled={product.availability === "backorder"}
        >
          {added ? (
            <>
              <Check className="h-4 w-4" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </>
          )}
        </Button>
        <Button variant="outline" size="lg" onClick={handleQuoteRequest}>
          <FileText className="h-4 w-4" />
          Request a Quote Instead
        </Button>
      </div>

      <p className="text-xs leading-relaxed text-muted-ink">{product.leadTime}</p>
    </div>
  );
}
