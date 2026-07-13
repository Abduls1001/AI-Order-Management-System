"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { products } from "@/lib/products";
import { CartItemRow } from "@/components/cart/CartItemRow";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

export default function CartPage() {
  const { lines, subtotal, isReady } = useCart();

  const items = lines
    .map((line) => ({
      product: products.find((p) => p.id === line.productId),
      quantity: line.quantity,
    }))
    .filter((item): item is { product: (typeof products)[number]; quantity: number } =>
      Boolean(item.product)
    );

  if (isReady && items.length === 0) {
    return (
      <div className="container-page flex flex-col items-center py-24 text-center">
        <ShoppingCart className="h-10 w-10 text-ink/25" strokeWidth={1.25} />
        <h1 className="mt-5 font-display text-2xl font-semibold text-graphite">
          Your cart is empty
        </h1>
        <p className="mt-2 max-w-sm text-sm text-ink/55">
          Add products from the catalog to start building a wholesale order.
        </p>
        <Link href="/products" className="mt-7">
          <Button size="lg">Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-12">
      <div className="eyebrow">
        <span className="reg-mark" aria-hidden />
        Order Cart
      </div>
      <h1 className="mt-4 font-display text-3xl font-semibold text-graphite">Cart</h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {items.map(({ product, quantity }) => (
            <CartItemRow key={product.id} product={product} quantity={quantity} />
          ))}

          <Link
            href="/products"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-steel hover:text-graphite"
          >
            <ArrowLeft className="h-4 w-4" /> Continue Shopping
          </Link>
        </div>

        <div>
          <div className="border border-line p-6">
            <h2 className="font-display text-lg font-semibold text-graphite">
              Order Summary
            </h2>
            <div className="mt-5 space-y-3 border-t border-line pt-5 text-sm">
              <div className="flex justify-between text-ink/60">
                <span>Items</span>
                <span className="font-mono">{items.reduce((s, i) => s + i.quantity, 0)}</span>
              </div>
              <div className="flex justify-between text-ink/60">
                <span>Subtotal</span>
                <span className="font-mono">{formatCurrency(subtotal)}</span>
              </div>
              <div className="flex justify-between text-ink/60">
                <span>Freight &amp; Tax</span>
                <span className="font-mono text-xs">Calculated at checkout</span>
              </div>
            </div>
            <div className="mt-5 flex justify-between border-t border-line pt-5 font-display text-lg font-semibold text-graphite">
              <span>Estimated Total</span>
              <span className="font-mono">{formatCurrency(subtotal)}</span>
            </div>
            <Link href="/checkout">
              <Button size="lg" className="mt-6 w-full">
                Proceed to Checkout <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
