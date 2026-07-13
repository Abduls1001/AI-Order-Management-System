"use client";

import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { CartLineItem } from "@/components/cart/cart-line-item";
import { OrderSummary } from "@/components/cart/order-summary";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cartProducts, itemCount, subtotal } = useCart();

  if (cartProducts.length === 0) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-steel/10">
          <ShoppingCart className="h-7 w-7 text-steel" />
        </div>
        <h1 className="mt-6 font-display text-2xl font-bold text-ink">Your cart is empty</h1>
        <p className="mt-2 max-w-sm text-sm text-muted-ink">
          Browse the catalog to add corrugated, protective, or safety supplies
          to your order.
        </p>
        <Link href="/products" className="mt-6">
          <Button variant="signal" size="lg">
            Browse Catalog
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <span className="stencil-label">Order in Progress</span>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Your Cart
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="border border-line bg-white px-6">
          {cartProducts.map(({ product, quantity }) => (
            <CartLineItem key={product.id} product={product} quantity={quantity} />
          ))}
        </div>

        <div className="space-y-4">
          <OrderSummary subtotal={subtotal} itemCount={itemCount} />
          <Link href="/checkout">
            <Button variant="signal" size="lg" className="w-full">
              Proceed to Checkout
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/products">
            <Button variant="outline" size="lg" className="w-full">
              Continue Shopping
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
