import Link from "next/link";
import { categories, products } from "@/lib/products";
import { ProductCard } from "@/components/product/ProductCard";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Products | NovaPack Industries",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const activeCategory = category && categories.includes(category as (typeof categories)[number])
    ? category
    : undefined;

  const filtered = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : products;

  return (
    <div className="container-page py-14">
      <div className="eyebrow">
        <span className="reg-mark" aria-hidden />
        Catalog
      </div>
      <h1 className="mt-4 font-display text-3xl font-semibold text-graphite">
        Products
      </h1>
      <p className="mt-2 max-w-xl text-sm text-ink/60">
        {products.length} SKUs across five categories. Select products and add
        them to your cart to build a wholesale order.
      </p>

      <div className="mt-8 flex flex-wrap gap-2 border-b border-line pb-8">
        <Link
          href="/products"
          className={cn(
            "rounded-sm border px-3.5 py-2 text-sm font-medium",
            !activeCategory
              ? "border-graphite bg-graphite text-canvas"
              : "border-line text-ink/60 hover:border-steel"
          )}
        >
          All Products
        </Link>
        {categories.map((c) => (
          <Link
            key={c}
            href={`/products?category=${encodeURIComponent(c)}`}
            className={cn(
              "rounded-sm border px-3.5 py-2 text-sm font-medium",
              activeCategory === c
                ? "border-graphite bg-graphite text-canvas"
                : "border-line text-ink/60 hover:border-steel"
            )}
          >
            {c}
          </Link>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-16 border border-dashed border-line py-16 text-center">
          <p className="text-sm text-ink/50">No products in this category yet.</p>
        </div>
      )}
    </div>
  );
}
