import { Boxes, Clock, FileCheck2, Headset } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const reasons = [
  {
    icon: Boxes,
    title: "Freight-scale inventory",
    description:
      "We stock in pallet and bundle quantities, so a 500-carton order doesn't sit on backorder while retail-scale suppliers wait on restock.",
  },
  {
    icon: Clock,
    title: "48-hour dispatch on core SKUs",
    description:
      "Our top-moving categories ship within two business days of order confirmation, with real lead times shown on every product page.",
  },
  {
    icon: FileCheck2,
    title: "PO-based ordering",
    description:
      "Submit a purchase order number at checkout and route invoices straight to your AP team. No consumer checkout friction.",
  },
  {
    icon: Headset,
    title: "Dedicated account support",
    description:
      "Every business account is paired with a materials specialist who understands your recurring order patterns and lead-time needs.",
  },
];

export function WhyChoose() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose NovaPack"
          title="Fewer stockouts. Fewer surprises on invoice day."
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason.title} className="bg-white p-6">
              <reason.icon className="h-6 w-6 text-signal" strokeWidth={1.5} />
              <h3 className="mt-4 font-display text-base font-semibold text-ink">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-ink">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
