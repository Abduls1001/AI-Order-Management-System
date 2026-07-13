import { formatCurrency } from "@/lib/utils";
import type { Product } from "@/lib/types";

export function OrderSummary({
  items,
  subtotal,
}: {
  items: { product: Product; quantity: number }[];
  subtotal: number;
}) {
  return (
    <div className="border border-line p-6">
      <h2 className="font-display text-lg font-semibold text-graphite">Order Summary</h2>

      <div className="mt-5 max-h-72 space-y-4 overflow-y-auto border-t border-line pt-5">
        {items.map(({ product, quantity }) => (
          <div key={product.id} className="flex items-start justify-between gap-3 text-sm">
            <div>
              <p className="font-medium text-graphite">{product.name}</p>
              <p className="font-mono text-xs text-ink/40">
                {product.sku} · Qty {quantity}
              </p>
            </div>
            <p className="shrink-0 font-mono text-ink/75">
              {formatCurrency(product.price * quantity)}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 space-y-2 border-t border-line pt-5 text-sm">
        <div className="flex justify-between text-ink/60">
          <span>Subtotal</span>
          <span className="font-mono">{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex justify-between text-ink/60">
          <span>Freight &amp; Tax</span>
          <span className="font-mono text-xs">Confirmed by order desk</span>
        </div>
      </div>
      <div className="mt-4 flex justify-between border-t border-line pt-4 font-display text-lg font-semibold text-graphite">
        <span>Estimated Total</span>
        <span className="font-mono">{formatCurrency(subtotal)}</span>
      </div>
    </div>
  );
}
