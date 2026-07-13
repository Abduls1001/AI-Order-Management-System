import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/products/product-card";
import { SectionHeading } from "@/components/shared/section-heading";

export function FeaturedProducts() {
  const featured = getFeaturedProducts(4);
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Frequently Reordered"
            title="Best-selling SKUs this quarter."
          />
          <Link
            href="/products"
            className="hidden shrink-0 text-sm font-semibold text-steel hover:text-steel-deep sm:flex sm:items-center sm:gap-1"
          >
            View full catalog
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
