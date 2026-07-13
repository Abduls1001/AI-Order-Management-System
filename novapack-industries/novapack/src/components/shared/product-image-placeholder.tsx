import {
  Package,
  ShieldCheck,
  PackageOpen,
  HardHat,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { CategorySlug } from "@/lib/types";
import { cn } from "@/lib/utils";

const iconMap: Record<CategorySlug, LucideIcon> = {
  "corrugated-packaging": Package,
  "protective-packaging": ShieldCheck,
  "packing-materials": PackageOpen,
  "industrial-safety": HardHat,
  "shipping-supplies": Truck,
};

export function ProductImagePlaceholder({
  category,
  sku,
  className,
  compact,
}: {
  category: CategorySlug;
  sku: string;
  className?: string;
  compact?: boolean;
}) {
  const Icon = iconMap[category];
  return (
    <div
      className={cn(
        "tick-corners relative flex aspect-square w-full items-center justify-center overflow-hidden border border-line bg-[linear-gradient(135deg,#eef0eb_0%,#e3e5dd_100%)]",
        className
      )}
    >
      <div className="flute-rule absolute inset-0 opacity-40" />
      <Icon
        className={cn(
          "relative text-steel/25",
          compact ? "h-10 w-10" : "h-16 w-16 sm:h-20 sm:w-20"
        )}
        strokeWidth={1.25}
      />
      {!compact && (
        <span className="stencil-label absolute bottom-3 left-3 text-[0.6rem] opacity-80">
          {sku}
        </span>
      )}
    </div>
  );
}
