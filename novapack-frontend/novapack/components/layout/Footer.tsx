import Link from "next/link";
import { categories } from "@/lib/products";

export function Footer() {
  return (
    <footer className="border-t border-line bg-graphite text-canvas/80">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="reg-mark text-kraft" aria-hidden />
            <span className="font-display text-lg font-semibold text-white">
              NOVAPACK
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-canvas/60">
            Packaging and industrial supply for manufacturers and distributors
            who ship every day. Wholesale pricing, dock-ready lead times, no
            minimums drama.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-canvas/40">
            Est. Wholesale Supply Partner
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-canvas/40">
            Catalog
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.map((c) => (
              <li key={c}>
                <Link
                  href={`/products?category=${encodeURIComponent(c)}`}
                  className="text-canvas/70 hover:text-white"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-canvas/40">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/about" className="text-canvas/70 hover:text-white">
                About NovaPack
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-canvas/70 hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/track-order" className="text-canvas/70 hover:text-white">
                Track an Order
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-canvas/70 hover:text-white">
                Browse Products
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-canvas/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} NovaPack Industries. All rights reserved.</span>
          <span className="font-mono">SKU-INDEXED CATALOG · B2B WHOLESALE ONLY</span>
        </div>
      </div>
    </footer>
  );
}
