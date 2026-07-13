"use client";

import { useMemo, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { OrderSummary } from "@/components/checkout/OrderSummary";

// This is the payload shape the Checkout page will POST to the FastAPI
// order-intake endpoint once the backend is connected. Keeping it typed here
// makes the future integration a matter of wiring `onSubmit` to `fetch`.
interface OrderPayload {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  deliveryAddress: string;
  poNumber?: string;
  specialInstructions?: string;
  lines: { sku: string; productId: string; name: string; quantity: number; unitPrice: number }[];
  subtotal: number;
}

interface FormState {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  deliveryAddress: string;
  poNumber: string;
  specialInstructions: string;
}

const initialForm: FormState = {
  companyName: "",
  contactPerson: "",
  email: "",
  phone: "",
  deliveryAddress: "",
  poNumber: "",
  specialInstructions: "",
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export default function CheckoutPage() {
  const router = useRouter();
  const { lines, subtotal, clearCart, isReady } = useCart();
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const items = useMemo(
    () =>
      lines
        .map((line) => ({
          product: products.find((p) => p.id === line.productId),
          quantity: line.quantity,
        }))
        .filter((i): i is { product: (typeof products)[number]; quantity: number } =>
          Boolean(i.product)
        ),
    [lines]
  );

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: FormErrors = {};
    if (!form.companyName.trim()) next.companyName = "Company name is required.";
    if (!form.contactPerson.trim()) next.contactPerson = "Contact person is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    if (!form.deliveryAddress.trim()) next.deliveryAddress = "Delivery address is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (items.length === 0) return;
    if (!validate()) return;

    setSubmitting(true);

    const payload: OrderPayload = {
      companyName: form.companyName,
      contactPerson: form.contactPerson,
      email: form.email,
      phone: form.phone,
      deliveryAddress: form.deliveryAddress,
      poNumber: form.poNumber || undefined,
      specialInstructions: form.specialInstructions || undefined,
      lines: items.map(({ product, quantity }) => ({
        sku: product.sku,
        productId: product.id,
        name: product.name,
        quantity,
        unitPrice: product.price,
      })),
      subtotal,
    };

    // --- Future FastAPI integration point ---
    // const res = await fetch("/api/orders", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // });
    // const { referenceNumber } = await res.json();

    // Demo-only: simulate order-desk processing and generate a reference
    // number locally so the flow can be reviewed end-to-end in the UI.
    await new Promise((resolve) => setTimeout(resolve, 600));
    const referenceNumber = `NP-${Date.now().toString().slice(-8)}`;

    try {
      window.sessionStorage.setItem(
        "novapack_last_order",
        JSON.stringify({ referenceNumber, ...payload })
      );
    } catch {
      // sessionStorage unavailable; order-success page falls back gracefully
    }

    clearCart();
    router.push(`/order-success?ref=${referenceNumber}`);
  }

  if (isReady && items.length === 0) {
    return (
      <div className="container-page flex flex-col items-center py-24 text-center">
        <h1 className="font-display text-2xl font-semibold text-graphite">
          Your cart is empty
        </h1>
        <p className="mt-2 max-w-sm text-sm text-ink/55">
          Add products to your cart before proceeding to checkout.
        </p>
        <Link href="/products" className="mt-7">
          <Button size="lg">Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container-page py-12">
      <Link
        href="/cart"
        className="inline-flex items-center gap-2 text-sm font-medium text-steel hover:text-graphite"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Cart
      </Link>

      <div className="eyebrow mt-6">
        <span className="reg-mark" aria-hidden />
        Order Intake
      </div>
      <h1 className="mt-4 font-display text-3xl font-semibold text-graphite">Checkout</h1>
      <p className="mt-2 max-w-xl text-sm text-ink/60">
        Submit your order details below. Our order desk reviews every
        submission before it&apos;s confirmed for fulfillment.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 grid gap-10 lg:grid-cols-3" noValidate>
        <div className="space-y-8 lg:col-span-2">
          <section className="border border-line p-6">
            <h2 className="font-display text-lg font-semibold text-graphite">
              Company &amp; Contact
            </h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="companyName" required>
                  Company Name
                </Label>
                <Input
                  id="companyName"
                  value={form.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                  placeholder="Acme Manufacturing Co."
                  aria-invalid={Boolean(errors.companyName)}
                  aria-describedby={errors.companyName ? "companyName-error" : undefined}
                />
                {errors.companyName && (
                  <p id="companyName-error" className="mt-1.5 text-xs text-amber">
                    {errors.companyName}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="contactPerson" required>
                  Contact Person
                </Label>
                <Input
                  id="contactPerson"
                  value={form.contactPerson}
                  onChange={(e) => handleChange("contactPerson", e.target.value)}
                  placeholder="Jordan Lee"
                  aria-invalid={Boolean(errors.contactPerson)}
                  aria-describedby={errors.contactPerson ? "contactPerson-error" : undefined}
                />
                {errors.contactPerson && (
                  <p id="contactPerson-error" className="mt-1.5 text-xs text-amber">
                    {errors.contactPerson}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="email" required>
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="orders@acmemfg.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-amber">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="phone" required>
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="(555) 010-2200"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-xs text-amber">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>
          </section>

          <section className="border border-line p-6">
            <h2 className="font-display text-lg font-semibold text-graphite">
              Delivery
            </h2>
            <div className="mt-5 grid gap-5">
              <div>
                <Label htmlFor="deliveryAddress" required>
                  Delivery Address
                </Label>
                <Textarea
                  id="deliveryAddress"
                  rows={3}
                  value={form.deliveryAddress}
                  onChange={(e) => handleChange("deliveryAddress", e.target.value)}
                  placeholder="Street address, city, state, ZIP, receiving dock notes"
                  aria-invalid={Boolean(errors.deliveryAddress)}
                  aria-describedby={errors.deliveryAddress ? "deliveryAddress-error" : undefined}
                />
                {errors.deliveryAddress && (
                  <p id="deliveryAddress-error" className="mt-1.5 text-xs text-amber">
                    {errors.deliveryAddress}
                  </p>
                )}
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="poNumber">Purchase Order Number</Label>
                  <Input
                    id="poNumber"
                    value={form.poNumber}
                    onChange={(e) => handleChange("poNumber", e.target.value)}
                    placeholder="Optional"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="specialInstructions">Special Instructions</Label>
                <Textarea
                  id="specialInstructions"
                  rows={3}
                  value={form.specialInstructions}
                  onChange={(e) => handleChange("specialInstructions", e.target.value)}
                  placeholder="Delivery windows, dock restrictions, labeling requirements"
                />
              </div>
            </div>
          </section>

          <section className="border border-line p-6">
            <h2 className="font-display text-lg font-semibold text-graphite">
              Selected Products
            </h2>
            <div className="mt-5 divide-y divide-line border-t border-line">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center justify-between gap-4 py-3 text-sm">
                  <div>
                    <p className="font-medium text-graphite">{product.name}</p>
                    <p className="font-mono text-xs text-ink/40">{product.sku}</p>
                  </div>
                  <p className="font-mono text-ink/70">Qty {quantity}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div>
          <div className="lg:sticky lg:top-24">
            <OrderSummary items={items} subtotal={subtotal} />
            <Button type="submit" size="lg" className="mt-4 w-full" disabled={submitting}>
              {submitting ? "Submitting Order…" : "Submit Order"}
            </Button>
            <p className="mt-3 text-center text-xs text-ink/40">
              Submitting sends this order to our order desk for confirmation.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}
