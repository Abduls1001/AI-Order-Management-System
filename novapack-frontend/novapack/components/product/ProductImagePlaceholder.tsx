import { Package } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProductImagePlaceholder({
  label,
  sku,
  className,
}: {
  label: string;
  sku: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "dieline-corner relative flex aspect-square w-full flex-col items-center justify-center gap-3 border border-line bg-kraft-light",
        className
      )}
    >
      <Package className="h-10 w-10 text-steel/70" strokeWidth={1.25} />
      <span className="px-4 text-center font-display text-sm font-medium leading-snug text-graphite/80">
        {label}
      </span>
      <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-widest text-ink/40">
        {sku}
      </span>
    </div>
  );
}
