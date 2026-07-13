"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StoredOrder {
  referenceNumber: string;
  companyName: string;
  email: string;
  subtotal: number;
}

export function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const refFromUrl = searchParams.get("ref");
  const [order, setOrder] = useState<StoredOrder | null>(null);

  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem("novapack_last_order");
      if (raw) setOrder(JSON.parse(raw));
    } catch {
      // no stored order details available; reference number still displays
    }
  }, []);

  const referenceNumber = refFromUrl ?? order?.referenceNumber ?? "—";

  return (
    <div className="container-page flex flex-col items-center py-20 text-center">
      <div className="dieline-corner flex h-16 w-16 items-center justify-center border border-line bg-kraft-light">
        <CheckCircle2 className="h-8 w-8 text-success" strokeWidth={1.5} />
      </div>

      <h1 className="mt-7 font-display text-3xl font-semibold text-graphite">
        Thank you for your order
      </h1>
      <p className="mt-2 max-w-md text-sm text-ink/60">
        Your order has been submitted to our order desk. A confirmation will
        be sent to{" "}
        {order?.email ? <span className="font-medium text-ink/80">{order.email}</span> : "your email"}{" "}
        once it&apos;s reviewed.
      </p>

      <div className="mt-8 border border-line px-8 py-5">
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40">
          Reference Number
        </p>
        <p className="mt-1 font-display text-2xl font-semibold text-graphite">
          {referenceNumber}
        </p>
      </div>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <Link href={`/track-order?ref=${referenceNumber}`}>
          <Button size="lg">Track Order</Button>
        </Link>
        <Link href="/products">
          <Button size="lg" variant="outline">
            Continue Shopping
          </Button>
        </Link>
      </div>
    </div>
  );
}
