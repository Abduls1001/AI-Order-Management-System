import Link from "next/link";
import { ArrowRight, PhoneCall, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="flute-rule absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8 lg:py-24">
        <div className="lg:col-span-7">
          <span className="stencil-label">Order No. NP-2026 &middot; Open for New Accounts</span>
          <h1 className="mt-5 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Packaging that ships as reliably as your production line runs.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-ink">
            NovaPack Industries stocks corrugated, protective, and safety
            supplies for business buyers who order by the pallet, not the
            box. Set up net terms, submit a PO, and track it to the dock.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/products">
              <Button variant="signal" size="lg" className="w-full sm:w-auto">
                Browse Catalog
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/request-quote">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <PhoneCall className="h-4 w-4" />
                Request a Bulk Quote
              </Button>
            </Link>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-8">
            {[
              ["1,200+", "SKUs stocked"],
              ["48 hr", "Avg. dispatch"],
              ["6,400+", "Business accounts"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl font-bold text-ink sm:text-3xl">
                  {value}
                </dt>
                <dd className="mt-1 text-xs text-muted-ink">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="tick-corners relative aspect-[4/5] w-full overflow-hidden border border-line bg-[linear-gradient(160deg,#1f3a5f_0%,#14283f_60%,#101c30_100%)]">
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(255,255,255,0.5) 22px, rgba(255,255,255,0.5) 23px)",
              }}
            />
            <div className="relative flex h-full flex-col justify-between p-7">
              <div className="flex items-center justify-between">
                <span className="stencil-label text-white/70">Live Shipment</span>
                <span className="rounded-sm border border-white/20 bg-white/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-white">
                  In Transit
                </span>
              </div>
              <div>
                <p className="font-mono text-sm text-white/60">PO-48213 &middot; DOCK 12</p>
                <p className="mt-2 font-display text-xl font-semibold text-white">
                  Pallet Load, Zone 4 Distribution
                </p>
                <ul className="mt-5 space-y-2 text-sm text-white/70">
                  {[
                    "Double-wall cartons, 40 bundles",
                    "Machine-grade stretch wrap, 12 rolls",
                    "Corner protectors, palletized",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
