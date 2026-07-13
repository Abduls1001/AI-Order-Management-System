import { Target, Eye, Compass } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { IndustriesServed } from "@/components/home/industries-served";

const values = [
  {
    title: "Fill rate over flash",
    description:
      "We&apos;d rather stock the SKU you order every month than chase a trend line. Availability is the product.",
  },
  {
    title: "Say the real lead time",
    description:
      "Every product page shows an honest dispatch window, not an optimistic one, so your planning holds up.",
  },
  {
    title: "Answer like an account, not a ticket",
    description:
      "Business accounts get a specialist who knows their order history, not a rotating queue.",
  },
];

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="stencil-label">Founded 1994 &middot; Elkhart, Indiana</span>
          <h1 className="mt-3 max-w-2xl font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            A packaging supplier built around the purchase order, not the shopping cart.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-ink">
            NovaPack Industries supplies corrugated, protective, and safety
            packaging materials to manufacturers, distributors, and
            fulfillment operators across the country. We were built by
            operations people, for operations people, which shows up in
            everything from our MOQs to our lead-time promises.
          </p>
        </div>
      </section>

      <section className="border-b border-line bg-paper">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="border border-line bg-white p-7">
            <Target className="h-6 w-6 text-signal" strokeWidth={1.5} />
            <h2 className="mt-4 font-display text-lg font-semibold text-ink">Mission</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-ink">
              Keep business customers&apos; lines running by making the right
              packaging material available before it becomes an emergency
              order.
            </p>
          </div>
          <div className="border border-line bg-white p-7">
            <Eye className="h-6 w-6 text-signal" strokeWidth={1.5} />
            <h2 className="mt-4 font-display text-lg font-semibold text-ink">Vision</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-ink">
              To be the first call a procurement manager makes when a new
              packaging line, product launch, or facility opens up.
            </p>
          </div>
          <div className="border border-line bg-white p-7">
            <Compass className="h-6 w-6 text-signal" strokeWidth={1.5} />
            <h2 className="mt-4 font-display text-lg font-semibold text-ink">Values</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-ink">
              Fill rate, honesty about lead times, and account-level
              accountability guide every operational decision we make.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="How We Operate" title="What our values look like day to day" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border-t-2 border-signal pt-4">
                <h3 className="font-display text-base font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-ink">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IndustriesServed />
    </div>
  );
}
