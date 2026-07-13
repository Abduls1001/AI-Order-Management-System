"use client";

import { useState } from "react";
import { ProductImagePlaceholder } from "./ProductImagePlaceholder";
import { cn } from "@/lib/utils";

const angles = ["Front", "Side", "Detail", "Packed"];

export function ProductGallery({ label, sku }: { label: string; sku: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <ProductImagePlaceholder label={`${label} — ${angles[active]}`} sku={sku} />
      <div className="mt-3 grid grid-cols-4 gap-3">
        {angles.map((angle, i) => (
          <button
            key={angle}
            onClick={() => setActive(i)}
            className={cn(
              "flex aspect-square items-center justify-center border bg-kraft-light font-mono text-[10px] uppercase tracking-widest text-ink/40",
              active === i ? "border-steel text-steel" : "border-line hover:border-steel/50"
            )}
            aria-label={`Show ${angle} view`}
            aria-pressed={active === i}
          >
            {angle}
          </button>
        ))}
      </div>
    </div>
  );
}
