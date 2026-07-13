"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { Search, PackageCheck, Truck, Warehouse, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import type { OrderStatusStep } from "@/lib/types";

const stepIcons = [ClipboardCheck, Warehouse, Truck, PackageCheck];

function buildDemoTimeline(orderNumber: string): OrderStatusStep[] {
  // Deterministic demo progression derived from the order number so the same
  // input always renders the same status, without a backend.
  const seed = orderNumber
    .split("")
    .reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  const activeStep = seed % 4;

  const labels = ["Order Confirmed", "Preparing at Warehouse", "In Transit", "Delivered"];
  return labels.map((label, i) => ({
    label,
    complete: i <= activeStep,
    date: i <= activeStep ? demoDate(i) : undefined,
  }));
}

function demoDate(offsetDays: number): string {
  const d = new Date();
  d.setDate(d.getDate() - (3 - offsetDays));
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function TrackOrderContent() {
  const searchParams = useSearchParams();
  const [orderNumber, setOrderNumber] = useState(searchParams.get("ref") ?? "");
  const [submitted, setSubmitted] = useState<string | null>(null);

  useEffect(() => {
    const ref = searchParams.get("ref");
    if (ref) setSubmitted(ref);
  }, [searchParams]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!orderNumber.trim()) return;
    setSubmitted(orderNumber.trim());
  }

  const timeline = submitted ? buildDemoTimeline(submitted) : null;

  return (
    <div className="container-page py-14">
      <div className="eyebrow">
        <span className="reg-mark" aria-hidden />
        Order Tracking
      </div>
      <h1 className="mt-4 font-display text-3xl font-semibold text-graphite">
        Track Order
      </h1>
      <p className="mt-2 max-w-lg text-sm text-ink/60">
        Enter the reference number from your order confirmation to see its
        current status.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex max-w-md flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <Label htmlFor="orderNumber">Order Number</Label>
          <Input
            id="orderNumber"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            placeholder="e.g. NP-40213897"
          />
        </div>
        <Button type="submit" size="md" className="shrink-0">
          <Search className="h-4 w-4" /> Track
        </Button>
      </form>

      {timeline && (
        <div className="mt-12 max-w-2xl border border-line p-6">
          <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40">
            Order Reference
          </p>
          <p className="mt-1 font-display text-xl font-semibold text-graphite">
            {submitted}
          </p>

          <ol className="mt-8 space-y-0">
            {timeline.map((step, i) => {
              const Icon = stepIcons[i];
              const isLast = i === timeline.length - 1;
              return (
                <li key={step.label} className="relative flex gap-4 pb-8 last:pb-0">
                  {!isLast && (
                    <span
                      className={cn(
                        "absolute left-[19px] top-10 h-full w-px",
                        step.complete ? "bg-success" : "bg-line"
                      )}
                      aria-hidden
                    />
                  )}
                  <span
                    className={cn(
                      "z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border",
                      step.complete
                        ? "border-success bg-success/10 text-success"
                        : "border-line text-ink/30"
                    )}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div className="pt-1.5">
                    <p
                      className={cn(
                        "text-sm font-medium",
                        step.complete ? "text-graphite" : "text-ink/40"
                      )}
                    >
                      {step.label}
                    </p>
                    {step.date && (
                      <p className="mt-0.5 font-mono text-xs text-ink/40">{step.date}</p>
                    )}
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
