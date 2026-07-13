import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-page grid gap-10 py-16 md:grid-cols-12 md:items-center md:py-24">
        <div className="md:col-span-7">
          <div className="eyebrow">
            <span className="reg-mark" aria-hidden />
            Packaging &amp; Industrial Supply · Wholesale
          </div>
          <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-graphite sm:text-5xl">
            Packaging that holds up between your dock and theirs.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/65">
            NovaPack supplies corrugated, protective, and industrial safety
            products to manufacturers and distributors who need consistent
            spec, consistent stock, and no surprises on the line.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/products">
              <Button size="lg">
                Browse Catalog <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="dieline-corner border border-line bg-kraft-light p-8">
            <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40">
              Spec Sheet · NP-CB-2201
            </p>
            <h2 className="mt-3 font-display text-xl font-semibold text-graphite">
              Double-Wall Shipping Carton
            </h2>
            <dl className="mt-6 space-y-3 border-t border-line pt-6">
              {[
                ["Board Grade", "275# Double-Wall (ECT-44)"],
                ["Flute Profile", "BC Flute"],
                ["Max Load", "95 lb / carton"],
                ["Lead Time", "3–5 business days"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between gap-4 text-sm">
                  <dt className="text-ink/50">{label}</dt>
                  <dd className="font-mono text-ink/80">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
