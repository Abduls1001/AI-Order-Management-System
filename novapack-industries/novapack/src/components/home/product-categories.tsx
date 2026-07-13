import Link from "next/link";
import {
  Package,
  ShieldCheck,
  PackageOpen,
  HardHat,
  Truck,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { categories } from "@/lib/data/categories";
import { SectionHeading } from "@/components/shared/section-heading";

const iconMap: Record<string, LucideIcon> = {
  Package,
  ShieldCheck,
  PackageOpen,
  HardHat,
  Truck,
};

export function ProductCategories() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Shop by Category"
            title="Five product lines, one loading dock."
          />
          <Link
            href="/products"
            className="hidden shrink-0 text-sm font-semibold text-steel hover:text-steel-deep sm:flex sm:items-center sm:gap-1"
          >
            View full catalog
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <Link
                key={category.slug}
                href={`/products?category=${category.slug}`}
                className="group flex flex-col justify-between gap-8 bg-white p-6 transition-colors hover:bg-paper"
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-7 w-7 text-steel" strokeWidth={1.5} />
                  <ArrowUpRight className="h-4 w-4 text-muted-ink opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-ink">
                    {category.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
