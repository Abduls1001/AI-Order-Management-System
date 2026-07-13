"use client";

import { useState, type FormEvent } from "react";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center border border-line bg-white p-10 text-center">
        <Check className="h-8 w-8 text-success" strokeWidth={1.5} />
        <h3 className="mt-4 font-display text-lg font-semibold text-graphite">
          Message sent
        </h3>
        <p className="mt-2 text-sm text-ink/60">
          Our team will follow up at {email} within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-white p-6" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="contact-name" required>
            Name
          </Label>
          <Input id="contact-name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <Label htmlFor="contact-email" required>
            Email
          </Label>
          <Input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="mt-5">
        <Label htmlFor="contact-message" required>
          Message
        </Label>
        <Textarea
          id="contact-message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about your packaging needs or account setup questions"
          required
        />
      </div>
      <Button type="submit" size="lg" className="mt-5">
        Send Message <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
