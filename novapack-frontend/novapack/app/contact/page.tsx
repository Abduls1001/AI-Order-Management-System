import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { ContactForm } from "@/components/home/ContactForm";

export const metadata = {
  title: "Contact | NovaPack Industries",
};

const hours = [
  ["Monday – Friday", "7:00 AM – 6:00 PM"],
  ["Saturday", "8:00 AM – 1:00 PM"],
  ["Sunday", "Closed"],
];

export default function ContactPage() {
  return (
    <div className="container-page py-14">
      <div className="eyebrow">
        <span className="reg-mark" aria-hidden />
        Contact
      </div>
      <h1 className="mt-4 font-display text-3xl font-semibold text-graphite">
        Talk to the order desk
      </h1>
      <p className="mt-2 max-w-xl text-sm text-ink/60">
        Reach out for wholesale account setup, bulk quotes, or questions on
        an existing order.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-1">
          <div className="border border-line bg-white p-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-ink/40">
              Business Details
            </h2>
            <ul className="mt-4 space-y-4 text-sm text-ink/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-steel" />
                <span>4820 Freightline Drive, Suite 220, Columbus, OH 43228</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-steel" />
                <span className="font-mono">(614) 555-0142</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-steel" />
                <span>orders@novapack-industries.com</span>
              </li>
            </ul>
          </div>

          <div className="border border-line bg-white p-6">
            <h2 className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink/40">
              <Clock className="h-3.5 w-3.5" /> Business Hours
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {hours.map(([day, time]) => (
                <li key={day} className="flex justify-between text-ink/70">
                  <span>{day}</span>
                  <span className="font-mono text-ink/50">{time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="dieline-corner flex aspect-[4/3] items-center justify-center border border-line bg-kraft-light">
            <div className="text-center">
              <MapPin className="mx-auto h-6 w-6 text-steel/60" strokeWidth={1.25} />
              <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-ink/40">
                Map — Columbus, OH Facility
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
