import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { getProductBySlug, products } from "@/lib/products";
import { ProductGallery } from "@/components/product/ProductGallery";
import { SpecTable } from "@/components/product/SpecTable";
import { AddToCartPanel } from "@/components/product/AddToCartPanel";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product ? `${product.name} | NovaPack Industries` : "Product Not Found" };
}

const availabilityTone: Record<string, "success" | "amber" | "steel"> = {
  "In Stock": "success",
  "Limited Stock": "amber",
  "Made to Order": "steel",
};

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="container-page py-12">
      <nav className="flex items-center gap-1.5 text-xs text-ink/40" aria-label="Breadcrumb">
        <Link href="/products" className="hover:text-steel">
          Products
        </Link>
        <ChevronRight className="h-3 w-3" />
        <Link
          href={`/products?category=${encodeURIComponent(product.category)}`}
          className="hover:text-steel"
        >
          {product.category}
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-ink/60">{product.name}</span>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <ProductGallery label={product.imageLabel} sku={product.sku} />

        <div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-widest text-ink/40">
              {product.sku}
            </span>
            <Badge tone={availabilityTone[product.availability]}>
              {product.availability}
            </Badge>
          </div>
          <h1 className="mt-3 font-display text-3xl font-semibold text-graphite">
            {product.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink/65">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCartPanel product={product} />
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-3xl">
        <h2 className="font-display text-xl font-semibold text-graphite">
          Specifications
        </h2>
        <div className="mt-4">
          <SpecTable specs={product.specs} />
        </div>
      </div>
    </div>
  );
}
