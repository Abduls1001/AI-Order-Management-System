"use client";

import * as React from "react";
import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { ProductCard } from "@/components/products/product-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CategorySlug } from "@/lib/types";

function ProductsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get("category") as CategorySlug | null;
  const [query, setQuery] = React.useState("");
  const [showFilters, setShowFilters] = React.useState(false);

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory ? p.category === activeCategory : true;
    const matchesQuery = query
      ? p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.sku.toLowerCase().includes(query.toLowerCase())
      : true;
    return matchesCategory && matchesQuery;
  });

  function setCategory(slug: CategorySlug | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) params.set("category", slug);
    else params.delete("category");
    router.push(`/products?${params.toString()}`);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="border-b border-line pb-8">
        <span className="stencil-label">Full Catalog</span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Products
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted-ink">
          {products.length} SKUs across five product lines. Prices reflect
          standard business-account pricing; contact us for volume tiers
          above listed MOQs.
        </p>
      </div>

      <div className="grid gap-10 py-10 lg:grid-cols-[240px_1fr]">
        <aside
          className={cn(
            "space-y-6 lg:block",
            showFilters ? "block" : "hidden"
          )}
        >
          <div>
            <h3 className="stencil-label mb-3">Category</h3>
            <div className="flex flex-col gap-1">
              <button
                onClick={() => setCategory(null)}
                className={cn(
                  "rounded-sm px-3 py-2 text-left text-sm font-medium transition-colors",
                  !activeCategory
                    ? "bg-steel text-white"
                    : "text-ink/70 hover:bg-white"
                )}
              >
                All Products
              </button>
              {categories.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => setCategory(c.slug)}
                  className={cn(
                    "flex items-center justify-between rounded-sm px-3 py-2 text-left text-sm font-medium transition-colors",
                    activeCategory === c.slug
                      ? "bg-steel text-white"
                      : "text-ink/70 hover:bg-white"
                  )}
                >
                  {c.shortName}
                  <span
                    className={cn(
                      "font-mono text-xs",
                      activeCategory === c.slug ? "text-white/70" : "text-muted-ink"
                    )}
                  >
                    {c.productCount}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="border border-line bg-white p-4">
            <p className="text-sm font-semibold text-ink">Need a custom quantity?</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-ink">
              Submit a quote request for volume pricing beyond standard MOQs.
            </p>
            <a href="/request-quote">
              <Button variant="signal" size="sm" className="mt-3 w-full">
                Request a Quote
              </Button>
            </a>
          </div>
        </aside>

        <div>
          <div className="mb-6 flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-ink" />
              <Input
                placeholder="Search by product name or SKU..."
                className="pl-10"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Button
              variant="outline"
              size="default"
              className="lg:hidden"
              onClick={() => setShowFilters((s) => !s)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>

          {activeCategory && (
            <div className="mb-6 flex items-center gap-2">
              <span className="text-xs text-muted-ink">Filtered by:</span>
              <button
                onClick={() => setCategory(null)}
                className="flex items-center gap-1.5 rounded-sm border border-line bg-white px-2.5 py-1 text-xs font-medium text-ink"
              >
                {categories.find((c) => c.slug === activeCategory)?.shortName}
                <X className="h-3 w-3" />
              </button>
            </div>
          )}

          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-line-strong py-16 text-center">
              <p className="text-sm font-medium text-ink">No products match your search.</p>
              <p className="mt-1 text-sm text-muted-ink">
                Try a different keyword or clear your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={null}>
      <ProductsPageContent />
    </Suspense>
  );
}
