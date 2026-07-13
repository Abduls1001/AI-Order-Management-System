import { Suspense } from "react";
import { TrackOrderContent } from "@/components/checkout/TrackOrderContent";

export const metadata = {
  title: "Track Order | NovaPack Industries",
};

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<div className="container-page py-24 text-center text-sm text-ink/40">Loading…</div>}>
      <TrackOrderContent />
    </Suspense>
  );
}
