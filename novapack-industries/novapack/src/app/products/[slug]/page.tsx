import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { ProductGallery } from "@/components/products/product-gallery";
import { ProductActions } from "@/components/products/product-actions";
import { RelatedProducts } from "@/components/products/related-products";
import { AvailabilityBadge } from "@/components/shared/availability-badge";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = categories.find((c) => c.slug === product.category);
  const related = getRelatedProducts(product);

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-1.5 text-xs text-muted-ink">
          <Link href="/" className="hover:text-ink">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/products" className="hover:text-ink">Products</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href={`/products?category=${product.category}`} className="hover:text-ink">
            {category?.shortName}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <ProductGallery category={product.category} sku={product.sku} images={product.images} />

          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-wide text-muted-ink">{product.sku}</span>
              <AvailabilityBadge status={product.availability} />
            </div>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {product.name}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-ink">
              {product.description}
            </p>

            <div className="mt-8">
              <ProductActions product={product} />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="stencil-label mb-4">Specifications</h2>
            <table className="w-full border border-line text-sm">
              <tbody>
                {product.specifications.map((spec, idx) => (
                  <tr
                    key={spec.label}
                    className={idx % 2 === 0 ? "bg-white" : "bg-paper"}
                  >
                    <td className="border-b border-line px-4 py-3 font-medium text-ink/70">
                      {spec.label}
                    </td>
                    <td className="border-b border-line px-4 py-3 text-ink">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h2 className="stencil-label mb-4">Ordering Details</h2>
            <Accordion type="single" collapsible defaultValue="shipping">
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping &amp; Lead Time</AccordionTrigger>
                <AccordionContent>{product.leadTime}. Freight quotes are calculated at checkout based on delivery address and total order weight.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="moq">
                <AccordionTrigger>Minimum Order Quantity</AccordionTrigger>
                <AccordionContent>
                  This item ships in increments of {product.moq} {product.unit}(s). For quantities beyond standard pallet volume, submit a quote request for tiered pricing.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="returns">
                <AccordionTrigger>Returns &amp; Damaged Freight</AccordionTrigger>
                <AccordionContent>
                  Report shortages or transit damage within 5 business days of delivery. Our account team will coordinate a replacement shipment or credit against your next invoice.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <RelatedProducts products={related} />
    </div>
  );
}
