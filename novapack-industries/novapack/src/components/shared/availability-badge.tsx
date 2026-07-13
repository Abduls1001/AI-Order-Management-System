import { Badge } from "@/components/ui/badge";
import { Availability } from "@/lib/types";
import { Circle } from "lucide-react";

const config: Record<Availability, { label: string; variant: "good" | "limited" | "back" }> = {
  "in-stock": { label: "In Stock", variant: "good" },
  limited: { label: "Limited Stock", variant: "limited" },
  backorder: { label: "Backordered", variant: "back" },
};

export function AvailabilityBadge({ status }: { status: Availability }) {
  const { label, variant } = config[status];
  return (
    <Badge variant={variant}>
      <Circle className="h-1.5 w-1.5 fill-current" />
      {label}
    </Badge>
  );
}
