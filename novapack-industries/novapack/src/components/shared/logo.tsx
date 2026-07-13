import { Package } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-sm",
          dark ? "bg-signal" : "bg-steel"
        )}
      >
        <Package className="h-5 w-5 text-white" strokeWidth={2.25} />
      </span>
      <span
        className={cn(
          "font-display text-lg font-bold leading-none tracking-tight",
          dark ? "text-white" : "text-ink"
        )}
      >
        NOVAPACK
        <span className="block text-[0.6rem] font-medium tracking-[0.28em] text-signal">
          INDUSTRIES
        </span>
      </span>
    </div>
  );
}
