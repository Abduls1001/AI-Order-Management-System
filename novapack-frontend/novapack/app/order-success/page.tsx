import { Suspense } from "react";
import { OrderSuccessContent } from "@/components/checkout/OrderSuccessContent";

export const metadata = {
  title: "Order Received | NovaPack Industries",
};

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="container-page py-24 text-center text-sm text-ink/40">Loading order details…</div>}>
      <OrderSuccessContent />
    </Suspense>
  );
}
