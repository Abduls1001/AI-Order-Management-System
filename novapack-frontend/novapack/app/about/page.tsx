import { Target, Eye, Compass } from "lucide-react";

export const metadata = {
  title: "About | NovaPack Industries",
};

const values = [
  { title: "Reliability", desc: "Spec matches the sheet, order after order, so your line never has to compensate for our materials." },
  { title: "Straightforward Pricing", desc: "Wholesale tiers are published and quoted the same way for every account of a given volume." },
  { title: "Responsiveness", desc: "Order desk staffed to turn quotes and confirmations around within one business day." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-line bg-white">
        <div className="container-page py-16">
          <div className="eyebrow">
            <span className="reg-mark" aria-hidden />
            About NovaPack
          </div>
          <h1 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-graphite sm:text-4xl">
            We started as a regional box supplier. We stayed a packaging company on purpose.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/65">
            NovaPack Industries began supplying corrugated boxes to
            manufacturers in a single distribution corridor. As those
            customers grew, they asked us for the protective materials, void
            fill, and safety gear their warehouses needed alongside the boxes
            &mdash; so we built out the catalog around what an operations team
            actually orders in one sitting, rather than spreading into
            unrelated retail categories.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-canvas">
        <div className="container-page grid gap-8 py-16 sm:grid-cols-3">
          <div className="border border-line bg-white p-6">
            <Target className="h-6 w-6 text-steel" strokeWidth={1.5} />
            <h2 className="mt-4 font-display text-lg font-semibold text-graphite">
              Mission
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Keep manufacturers and distributors stocked on the packaging and
              safety materials their operations depend on, at wholesale
              pricing that scales with their volume.
            </p>
          </div>
          <div className="border border-line bg-white p-6">
            <Eye className="h-6 w-6 text-steel" strokeWidth={1.5} />
            <h2 className="mt-4 font-display text-lg font-semibold text-graphite">
              Vision
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              To be the default ordering partner for operations teams who
              need packaging and safety supply handled without daily
              oversight.
            </p>
          </div>
          <div className="border border-line bg-white p-6">
            <Compass className="h-6 w-6 text-steel" strokeWidth={1.5} />
            <h2 className="mt-4 font-display text-lg font-semibold text-graphite">
              Values
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              Reliability, transparent pricing, and responsiveness &mdash; in
              that order, every time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-page py-16">
          <h2 className="font-display text-2xl font-semibold text-graphite">
            What we hold ourselves to
          </h2>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {values.map((v) => (
              <div key={v.title} className="grid gap-2 py-6 sm:grid-cols-4 sm:gap-8">
                <h3 className="font-display text-base font-semibold text-graphite">
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink/60 sm:col-span-3">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
