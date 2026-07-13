import Link from "next/link";
import { PackageX, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <PackageX className="h-14 w-14 text-signal" strokeWidth={1.25} />
      <p className="stencil-label mt-6 justify-center">Error 404</p>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        This shipment didn&apos;t make it.
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-ink">
        The page you&apos;re looking for has been moved, renamed, or never
        existed. Let&apos;s get you back on route.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/">
          <Button variant="signal" size="lg" className="w-full sm:w-auto">
            Return Home
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
        <Link href="/products">
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Browse Catalog
          </Button>
        </Link>
      </div>
    </div>
  );
}
