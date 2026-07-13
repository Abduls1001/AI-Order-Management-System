"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { OrderSummary } from "@/components/cart/order-summary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function CheckoutPage() {
  const { cartProducts, itemCount, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    const orderNumber = `NP-${Math.floor(100000 + Math.random() * 900000)}`;
    setTimeout(() => {
      clearCart();
      router.push(`/order-success?order=${orderNumber}`);
    }, 600);
  }

  if (cartProducts.length === 0) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-steel/10">
          <ShoppingCart className="h-7 w-7 text-steel" />
        </div>
        <h1 className="mt-6 font-display text-2xl font-bold text-ink">
          Nothing to check out yet
        </h1>
        <p className="mt-2 max-w-sm text-sm text-muted-ink">
          Add products to your cart before proceeding to checkout.
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
      <span className="stencil-label">Final Step</span>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Checkout
      </h1>
      <p className="mt-3 max-w-2xl text-base text-muted-ink">
        Orders are confirmed by an account specialist within one business day.
        You&apos;ll receive an email once pricing and freight are finalized.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="space-y-8">
          <fieldset className="border border-line bg-white p-6">
            <legend className="stencil-label px-1">Company Information</legend>
            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" name="companyName" required placeholder="Acme Distribution LLC" />
              </div>
              <div>
                <Label htmlFor="contactPerson">Contact Person</Label>
                <Input id="contactPerson" name="contactPerson" required placeholder="Jordan Reyes" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" name="email" type="email" required placeholder="orders@acmedist.com" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" required placeholder="(555) 010-2200" />
              </div>
            </div>
          </fieldset>

          <fieldset className="border border-line bg-white p-6">
            <legend className="stencil-label px-1">Delivery &amp; PO Details</legend>
            <div className="mt-4 grid gap-5">
              <div>
                <Label htmlFor="address">Delivery Address</Label>
                <Textarea
                  id="address"
                  name="address"
                  required
                  placeholder="Street address, city, state, ZIP, and receiving dock notes"
                  className="min-h-[90px]"
                />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="poNumber">Purchase Order Number</Label>
                  <Input id="poNumber" name="poNumber" placeholder="PO-48213" />
                </div>
              </div>
              <div>
                <Label htmlFor="notes">Order Notes</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Dock hours, forklift availability, delivery appointment requirements, etc."
                />
              </div>
            </div>
          </fieldset>
        </div>

        <div className="space-y-4">
          <div className="border border-line bg-white p-6">
            <h2 className="stencil-label mb-4">Items ({itemCount})</h2>
            <ul className="space-y-3 text-sm">
              {cartProducts.map(({ product, quantity }) => (
                <li key={product.id} className="flex justify-between gap-3">
                  <span className="text-ink/80">
                    {product.name} <span className="text-muted-ink">&times;{quantity}</span>
                  </span>
                  <span className="shrink-0 font-medium text-ink">
                    ${(product.price * quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <OrderSummary subtotal={subtotal} itemCount={itemCount} />
          <Button type="submit" variant="signal" size="lg" className="w-full" disabled={submitting}>
            {submitting ? "Submitting Order..." : "Submit Order"}
            {!submitting && <ArrowRight className="h-4 w-4" />}
          </Button>
        </div>
      </form>
    </div>
  );
}
