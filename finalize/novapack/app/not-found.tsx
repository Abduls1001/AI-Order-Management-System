import Link from "next/link";
import { PackageX } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center py-28 text-center">
      <PackageX className="h-12 w-12 text-ink/25" strokeWidth={1.25} />
      <p className="mt-6 font-mono text-xs uppercase tracking-widest text-ink/40">
        Error 404
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-graphite">
        This page isn&apos;t in the catalog
      </h1>
      <p className="mt-2 max-w-sm text-sm text-ink/55">
        The page you&apos;re looking for may have moved or doesn&apos;t exist.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/">
          <Button size="lg">Back to Home</Button>
        </Link>
        <Link href="/products">
          <Button size="lg" variant="outline">
            Browse Products
          </Button>
        </Link>
      </div>
    </div>
  );
}
