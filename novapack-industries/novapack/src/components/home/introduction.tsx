export function Introduction() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="stencil-label">Who We Are</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink">
              Three decades on the dock, not just the catalog page.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-muted-ink lg:col-span-8">
            <p>
              NovaPack Industries started in 1994 as a single Elkhart, Indiana
              warehouse supplying corrugated cartons to regional
              manufacturers. Today we run five distribution categories, from
              protective packaging to industrial safety supplies, out of a
              network built for one purpose: getting the right materials to
              your dock before your line stops moving.
            </p>
            <p>
              We work exclusively with business accounts, which means our
              catalog, pricing, and fulfillment process are built around
              purchase orders, net terms, and freight-scale quantities, not
              single-unit retail. Every SKU on this site ships in
              business-relevant units, with real lead times and MOQs shown
              up front.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
