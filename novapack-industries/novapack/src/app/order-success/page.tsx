"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ArrowRight, PackageSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderNumber = searchParams.get("order") ?? "NP-000000";

  return (
    <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-status-good/10">
        <CheckCircle2 className="h-8 w-8 text-status-good" />
      </div>
      <span className="stencil-label mt-6 justify-center">Order Confirmed</span>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Thank you for your order.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-ink">
        Your purchase order has been received. A NovaPack account specialist
        will confirm pricing, freight, and dispatch timing by email within one
        business day.
      </p>

      <div className="tick-corners mx-auto mt-10 max-w-sm border border-line bg-white p-6 text-left">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-ink">
          Order Number
        </p>
        <p className="mt-1.5 font-mono text-2xl font-bold text-ink">{orderNumber}</p>
        <div className="mt-4 border-t border-line pt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-ink">
            Estimated Processing Time
          </p>
          <p className="mt-1.5 text-sm font-medium text-ink">1-2 business days</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href={`/track-order?order=${orderNumber}`}>
          <Button variant="signal" size="lg" className="w-full sm:w-auto">
            <PackageSearch className="h-4 w-4" />
            Track This Order
          </Button>
        </Link>
        <Link href="/products">
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Continue Shopping
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={null}>
      <OrderSuccessContent />
    </Suspense>
  );
}
