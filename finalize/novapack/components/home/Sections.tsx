import { Truck, ShieldCheck, Factory, PackageCheck, Clock, Gauge } from "lucide-react";

export function CompanyIntro() {
  return (
    <section className="border-b border-line bg-canvas">
      <div className="container-page grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="eyebrow">
            <span className="reg-mark" aria-hidden />
            Who We Are
          </div>
          <h2 className="mt-4 font-display text-2xl font-semibold text-graphite">
            Built for operations teams, not one-off buyers.
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="text-base leading-relaxed text-ink/65">
            NovaPack Industries supplies corrugated packaging, protective
            materials, and industrial safety equipment to manufacturers,
            wholesalers, and fulfillment operators. We hold depth on the SKUs
            that keep a line running &mdash; boxes, void fill, tape, wrap, and
            the safety gear the floor needs &mdash; and we quote at volumes
            that match how you actually order: by the pallet, not the piece.
          </p>
        </div>
      </div>
    </section>
  );
}

const industries = [
  { icon: Factory, name: "Manufacturing", desc: "Line-side packaging and safety supply for production floors." },
  { icon: Truck, name: "Distribution & 3PL", desc: "Palletized corrugated and stretch wrap for outbound freight." },
  { icon: PackageCheck, name: "E-commerce Fulfillment", desc: "Void fill, mailers, and cartons sized for parcel shipping." },
  { icon: ShieldCheck, name: "Warehousing", desc: "PPE, signage-adjacent safety gear, and dock supplies." },
];

export function IndustriesServed() {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-page py-16">
        <div className="eyebrow">
          <span className="reg-mark" aria-hidden />
          Industries Served
        </div>
        <h2 className="mt-4 max-w-lg font-display text-2xl font-semibold text-graphite">
          Wherever product has to move, get stacked, or get handled.
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {industries.map(({ icon: Icon, name, desc }) => (
            <div key={name} className="bg-white p-6">
              <Icon className="h-6 w-6 text-steel" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-base font-semibold text-graphite">
                {name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: Gauge, title: "Volume-Rated Pricing", desc: "Wholesale tiers scale with pallet and truckload quantities, not guesswork." },
  { icon: Clock, title: "Dock-Ready Lead Times", desc: "In-stock SKUs ship within 3–5 business days from order confirmation." },
  { icon: ShieldCheck, title: "Spec Consistency", desc: "Board grade, flute profile, and film gauge held to spec, order after order." },
];

export function WhyChoose() {
  return (
    <section className="border-b border-line bg-graphite text-canvas">
      <div className="container-page py-16">
        <div className="eyebrow text-kraft">
          <span className="reg-mark" aria-hidden />
          Why Choose NovaPack
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title}>
              <Icon className="h-6 w-6 text-kraft" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-canvas/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: "12,000+", label: "Cartons shipped monthly" },
  { value: "340+", label: "Active wholesale accounts" },
  { value: "5", label: "Product categories in stock" },
  { value: "3–5 day", label: "Standard lead time" },
];

export function StatsBar() {
  return (
    <section className="border-b border-line bg-canvas">
      <div className="container-page grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border-l-2 border-steel pl-4">
            <p className="font-display text-3xl font-semibold text-graphite">{s.value}</p>
            <p className="mt-1 text-sm text-ink/55">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
