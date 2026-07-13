import Link from "next/link";
import { categories, products } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CategoryGrid() {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-page py-16">
        <div className="eyebrow">
          <span className="reg-mark" aria-hidden />
          Product Categories
        </div>
        <h2 className="mt-4 max-w-lg font-display text-2xl font-semibold text-graphite">
          Five categories, stocked and spec&apos;d for daily shipping operations.
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, i) => {
            const count = products.filter((p) => p.category === category).length;
            return (
              <Link
                key={category}
                href={`/products?category=${encodeURIComponent(category)}`}
                className="dieline-corner group flex flex-col justify-between border border-line p-6 hover:border-steel"
              >
                <span className="font-mono text-xs text-ink/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 font-display text-lg font-semibold text-graphite group-hover:text-steel">
                  {category}
                </h3>
                <p className="mt-2 text-sm text-ink/50">{count} SKUs</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="bg-steel">
      <div className="container-page flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-display text-2xl font-semibold text-white sm:text-3xl">
            Ready to place a wholesale order?
          </h2>
          <p className="mt-2 max-w-md text-sm text-white/75">
            Build your order in the catalog, then submit it through checkout
            for processing by our order desk.
          </p>
        </div>
        <Link href="/products">
          <Button size="lg" className="bg-white text-steel hover:bg-canvas">
            Start an Order <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
