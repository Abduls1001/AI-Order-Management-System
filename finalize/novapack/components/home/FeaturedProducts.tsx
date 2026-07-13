import Link from "next/link";
import { getFeaturedProducts } from "@/lib/products";
import { ProductCard } from "@/components/product/ProductCard";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();
  return (
    <section className="border-b border-line bg-canvas">
      <div className="container-page py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="eyebrow">
              <span className="reg-mark" aria-hidden />
              Featured Products
            </div>
            <h2 className="mt-4 font-display text-2xl font-semibold text-graphite">
              High-turn SKUs from the catalog.
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden shrink-0 text-sm font-medium text-steel hover:text-graphite sm:block"
          >
            View all products →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
