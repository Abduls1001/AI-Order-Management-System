import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wide",
  {
    variants: {
      variant: {
        default: "border-steel/20 bg-steel/10 text-steel-deep",
        signal: "border-signal/30 bg-signal/10 text-signal-deep",
        good: "border-status-good/30 bg-status-good/10 text-status-good",
        limited: "border-status-limited/30 bg-status-limited/10 text-status-limited",
        back: "border-status-back/30 bg-status-back/10 text-status-back",
        outline: "border-line text-muted-ink bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
