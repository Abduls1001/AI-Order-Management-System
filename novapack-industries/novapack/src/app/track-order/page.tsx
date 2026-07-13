"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PackageSearch, CheckCircle2, Circle, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const steps = [
  { key: "received", label: "Order Received", detail: "PO confirmed and assigned to an account specialist." },
  { key: "processing", label: "Processing", detail: "Items picked and staged for freight at our Elkhart facility." },
  { key: "shipped", label: "Shipped", detail: "Load has left the dock and is in transit to your delivery address." },
  { key: "delivered", label: "Delivered", detail: "Shipment confirmed received at destination dock." },
];

function TrackOrderContent() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<null | { orderNumber: string; step: number }>(
    searchParams.get("order")
      ? { orderNumber: searchParams.get("order") as string, step: 1 }
      : null
  );
  const [orderNumber, setOrderNumber] = useState(searchParams.get("order") ?? "");
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Demo status: derive a pseudo-random but stable step from the order number.
    const hash = orderNumber
      .split("")
      .reduce((sum, char) => sum + char.charCodeAt(0), 0);
    setResult({ orderNumber: orderNumber || "NP-000000", step: hash % 4 });
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <span className="stencil-label justify-center">Order Status</span>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Track Your Order
        </h1>
        <p className="mt-3 text-base text-muted-ink">
          Enter your order number and the email used at checkout to view status.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-10 grid max-w-xl gap-5 border border-line bg-white p-6 sm:grid-cols-2"
      >
        <div>
          <Label htmlFor="orderNumber">Order Number</Label>
          <Input
            id="orderNumber"
            placeholder="NP-482193"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="trackEmail">Email Address</Label>
          <Input
            id="trackEmail"
            type="email"
            placeholder="orders@yourcompany.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" variant="signal" size="lg" className="sm:col-span-2">
          <PackageSearch className="h-4 w-4" />
          Check Status
        </Button>
      </form>

      {result && (
        <div className="mx-auto mt-10 max-w-xl border border-line bg-white p-6">
          <div className="flex items-center justify-between border-b border-line pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-ink">Order</p>
              <p className="font-mono text-lg font-bold text-ink">{result.orderNumber}</p>
            </div>
            <Truck className="h-6 w-6 text-signal" />
          </div>

          <ol className="mt-6 space-y-6">
            {steps.map((step, idx) => {
              const complete = idx <= result.step;
              const current = idx === result.step;
              return (
                <li key={step.key} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    {complete ? (
                      <CheckCircle2
                        className={cn(
                          "h-5 w-5",
                          current ? "text-signal" : "text-status-good"
                        )}
                      />
                    ) : (
                      <Circle className="h-5 w-5 text-line-strong" />
                    )}
                    {idx < steps.length - 1 && (
                      <div
                        className={cn(
                          "mt-1 h-8 w-px",
                          idx < result.step ? "bg-status-good" : "bg-line"
                        )}
                      />
                    )}
                  </div>
                  <div className="pb-2">
                    <p
                      className={cn(
                        "text-sm font-semibold",
                        complete ? "text-ink" : "text-muted-ink"
                      )}
                    >
                      {step.label}
                      {current && (
                        <span className="ml-2 rounded-sm bg-signal/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-signal-deep">
                          Current
                        </span>
                      )}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-ink">{step.detail}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense fallback={null}>
      <TrackOrderContent />
    </Suspense>
  );
}
