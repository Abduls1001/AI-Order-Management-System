import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="stencil-label">Get in Touch</span>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Contact NovaPack Industries
      </h1>
      <p className="mt-3 max-w-2xl text-base text-muted-ink">
        Reach our account team for order questions, or send a message below
        and a materials specialist will respond within one business day.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[360px_1fr]">
        <div className="space-y-6">
          <div className="border border-line bg-white p-6">
            <h2 className="stencil-label mb-4">Office</h2>
            <div className="space-y-3 text-sm text-ink/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                4820 Freight Yard Road<br />Elkhart, IN 46514
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-signal" />
                (574) 555-0148
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-signal" />
                orders@novapackindustries.com
              </div>
            </div>
          </div>

          <div className="border border-line bg-white p-6">
            <h2 className="stencil-label mb-4">Business Hours</h2>
            <div className="space-y-2 text-sm">
              {[
                ["Monday - Friday", "7:00 AM - 6:00 PM ET"],
                ["Saturday", "8:00 AM - 1:00 PM ET"],
                ["Sunday", "Closed"],
              ].map(([day, hours]) => (
                <div key={day} className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-ink/70">
                    <Clock className="h-3.5 w-3.5 text-muted-ink" />
                    {day}
                  </span>
                  <span className="font-medium text-ink">{hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tick-corners flex aspect-video items-center justify-center border border-line bg-[linear-gradient(135deg,#eef0eb_0%,#e3e5dd_100%)]">
            <div className="text-center">
              <MapPin className="mx-auto h-6 w-6 text-steel/40" />
              <p className="stencil-label mt-2 justify-center">Map Placeholder</p>
            </div>
          </div>
        </div>

        <form className="space-y-5 border border-line bg-white p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="cName">Full Name</Label>
              <Input id="cName" required placeholder="Jordan Reyes" />
            </div>
            <div>
              <Label htmlFor="cCompany">Company</Label>
              <Input id="cCompany" placeholder="Acme Distribution LLC" />
            </div>
            <div>
              <Label htmlFor="cEmail">Email Address</Label>
              <Input id="cEmail" type="email" required placeholder="you@company.com" />
            </div>
            <div>
              <Label htmlFor="cPhone">Phone Number</Label>
              <Input id="cPhone" type="tel" placeholder="(555) 010-2200" />
            </div>
          </div>
          <div>
            <Label htmlFor="cSubject">Subject</Label>
            <Input id="cSubject" placeholder="Question about an existing order" />
          </div>
          <div>
            <Label htmlFor="cMessage">Message</Label>
            <Textarea id="cMessage" required placeholder="How can we help?" className="min-h-[140px]" />
          </div>
          <Button type="submit" variant="signal" size="lg">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
