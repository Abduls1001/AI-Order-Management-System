import Link from "next/link";
import { Logo } from "@/components/shared/logo";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin } from "lucide-react";
import { categories } from "@/lib/data/categories";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-ink text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              Industrial packaging and supply, stocked and shipped for
              business customers who cannot afford downtime on the dock.
            </p>
            <div className="mt-6 space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5 text-white/70">
                <MapPin className="h-4 w-4 shrink-0 text-signal" />
                4820 Freight Yard Road, Elkhart, IN 46514
              </div>
              <div className="flex items-center gap-2.5 text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-signal" />
                (574) 555-0148
              </div>
              <div className="flex items-center gap-2.5 text-white/70">
                <Mail className="h-4 w-4 shrink-0 text-signal" />
                orders@novapackindustries.com
              </div>
            </div>
          </div>

          <div>
            <h3 className="stencil-label text-white/50">Catalog</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/products?category=${c.slug}`}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {c.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="stencil-label text-white/50">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-white/70 transition-colors hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className="text-white/70 transition-colors hover:text-white">
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-white/70 transition-colors hover:text-white">
                  Track an Order
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="stencil-label text-white/50">Account</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/login" className="text-white/70 transition-colors hover:text-white">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-white/70 transition-colors hover:text-white">
                  Create Account
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-white/70 transition-colors hover:text-white">
                  View Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-white/10" />

        <div className="flex flex-col items-start justify-between gap-4 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} NovaPack Industries. All rights reserved.</p>
          <p className="font-mono tracking-wide">EST. 1994 &middot; ELKHART, IN</p>
        </div>
      </div>
    </footer>
  );
}
