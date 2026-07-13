import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="hazard-rule" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <span className="stencil-label">Ready When You Are</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Set up a business account and get your first PO on the road.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Whether you&apos;re ordering a single pallet or setting up a
              recurring monthly shipment, our team will confirm pricing and
              lead time within one business day.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link href="/register">
              <Button variant="signal" size="lg" className="w-full sm:w-auto">
                Create Business Account
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/request-quote">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-white/25 text-white hover:bg-white/10 hover:border-white sm:w-auto"
              >
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
