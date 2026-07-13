import { formatCurrency } from "@/lib/utils";

export function OrderSummary({
  subtotal,
  itemCount,
  showFreightNote = true,
}: {
  subtotal: number;
  itemCount: number;
  showFreightNote?: boolean;
}) {
  const estimatedFreight = subtotal > 0 ? Math.max(45, subtotal * 0.06) : 0;
  const total = subtotal + estimatedFreight;

  return (
    <div className="border border-line bg-white p-6">
      <h2 className="stencil-label mb-5">Order Summary</h2>
      <dl className="space-y-3 text-sm">
        <div className="flex justify-between">
          <dt className="text-muted-ink">Items ({itemCount})</dt>
          <dd className="font-medium text-ink">{formatCurrency(subtotal)}</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-muted-ink">Estimated freight</dt>
          <dd className="font-medium text-ink">{formatCurrency(estimatedFreight)}</dd>
        </div>
      </dl>
      <div className="mt-4 flex justify-between border-t border-line pt-4">
        <dt className="font-display text-base font-semibold text-ink">Estimated Total</dt>
        <dd className="font-display text-lg font-bold text-ink">{formatCurrency(total)}</dd>
      </div>
      {showFreightNote && (
        <p className="mt-4 text-xs leading-relaxed text-muted-ink">
          Final freight is calculated against actual pallet weight and delivery
          zone once your order is confirmed by an account specialist.
        </p>
      )}
    </div>
  );
}
