"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FileCheck2, Paperclip, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { categories } from "@/lib/data/categories";

function RequestQuoteContent() {
  const searchParams = useSearchParams();
  const prefillProduct = searchParams.get("product") ?? "";
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-status-good/10">
          <CheckCircle2 className="h-8 w-8 text-status-good" />
        </div>
        <h1 className="mt-6 font-display text-2xl font-bold text-ink">
          Quote request received
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-muted-ink">
          A NovaPack materials specialist will follow up by email within one
          business day with volume pricing and lead time.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <span className="stencil-label">Bulk &amp; Custom Pricing</span>
      <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Request a Quote
      </h1>
      <p className="mt-3 max-w-xl text-base text-muted-ink">
        For volume beyond standard catalog quantities, custom specifications,
        or recurring shipment schedules, tell us what you need and we&apos;ll
        price it out.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-8">
        <fieldset className="border border-line bg-white p-6">
          <legend className="stencil-label px-1">Company Information</legend>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="qCompanyName">Company Name</Label>
              <Input id="qCompanyName" required placeholder="Acme Distribution LLC" />
            </div>
            <div>
              <Label htmlFor="qContactPerson">Contact Person</Label>
              <Input id="qContactPerson" required placeholder="Jordan Reyes" />
            </div>
            <div>
              <Label htmlFor="qEmail">Email Address</Label>
              <Input id="qEmail" type="email" required placeholder="procurement@acmedist.com" />
            </div>
            <div>
              <Label htmlFor="qPhone">Phone Number</Label>
              <Input id="qPhone" type="tel" required placeholder="(555) 010-2200" />
            </div>
          </div>
        </fieldset>

        <fieldset className="border border-line bg-white p-6">
          <legend className="stencil-label px-1">Quote Details</legend>
          <div className="mt-4 grid gap-5 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <Label htmlFor="qProducts">Product(s) of Interest</Label>
              <Input
                id="qProducts"
                defaultValue={prefillProduct}
                placeholder="e.g. Double-Wall Shipping Carton, 18x18x18"
              />
            </div>
            <div>
              <Label htmlFor="qCategory">Category</Label>
              <Select>
                <SelectTrigger id="qCategory">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((c) => (
                    <SelectItem key={c.slug} value={c.slug}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="qQuantity">Estimated Quantity</Label>
              <Input id="qQuantity" placeholder="e.g. 40 pallets / month" />
            </div>
            <div>
              <Label htmlFor="qDeadline">Deadline Needed By</Label>
              <Input id="qDeadline" type="date" />
            </div>
            <div>
              <Label htmlFor="qAttachment">Attachment (spec sheet, drawing, PO)</Label>
              <div className="flex h-11 items-center gap-2 border border-dashed border-line-strong px-3.5 text-sm text-muted-ink">
                <Paperclip className="h-4 w-4 shrink-0" />
                <span className="truncate">No file selected</span>
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className="border border-line bg-white p-6">
          <legend className="stencil-label px-1">Additional Notes</legend>
          <Textarea
            className="mt-4"
            placeholder="Packaging dimensions, board grade, print requirements, delivery cadence, etc."
          />
        </fieldset>

        <Button type="submit" variant="signal" size="lg" className="w-full sm:w-auto">
          <FileCheck2 className="h-4 w-4" />
          Submit Quote Request
        </Button>
      </form>
    </div>
  );
}

export default function RequestQuotePage() {
  return (
    <Suspense fallback={null}>
      <RequestQuoteContent />
    </Suspense>
  );
}
