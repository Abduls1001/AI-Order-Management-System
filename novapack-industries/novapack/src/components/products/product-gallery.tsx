"use client";

import { useState } from "react";
import { ProductImagePlaceholder } from "@/components/shared/product-image-placeholder";
import { CategorySlug } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ProductGallery({
  category,
  sku,
  images,
}: {
  category: CategorySlug;
  sku: string;
  images: string[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <ProductImagePlaceholder category={category} sku={sku} key={active} />
      {images.length > 1 && (
        <div className="mt-3 grid grid-cols-4 gap-3">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setActive(idx)}
              className={cn(
                "border transition-colors",
                idx === active ? "border-signal" : "border-line hover:border-line-strong"
              )}
              aria-label={`View image ${idx + 1}`}
            >
              <ProductImagePlaceholder category={category} sku={sku} compact />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
