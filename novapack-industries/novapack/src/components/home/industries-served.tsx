import {
  ShoppingCart,
  UtensilsCrossed,
  Cpu,
  Cog,
  Warehouse,
  Cross,
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/lib/data/industries";
import { SectionHeading } from "@/components/shared/section-heading";

const iconMap: Record<string, LucideIcon> = {
  ShoppingCart,
  UtensilsCrossed,
  Cpu,
  Cog,
  Warehouse,
  Cross,
};

export function IndustriesServed() {
  return (
    <section className="border-b border-line bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries Served"
          title="Built for operations that can't afford a packaging shortage."
          light
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon];
            return (
              <div
                key={industry.name}
                className="border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]"
              >
                <Icon className="h-6 w-6 text-signal" strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-base font-semibold text-white">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
