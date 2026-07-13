import Link from "next/link";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/shared/logo";

export const metadata = { title: "Create Account" };

export default function RegisterPage() {
  return (
    <div className="mx-auto flex max-w-lg flex-col justify-center px-4 py-16 sm:px-6">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="mt-8 border border-line bg-white p-8">
        <span className="stencil-label justify-center">New Business Account</span>
        <h1 className="mt-3 text-center font-display text-2xl font-bold text-ink">
          Create your account
        </h1>
        <p className="mt-2 text-center text-sm text-muted-ink">
          NovaPack accounts are for registered businesses ordering on
          purchase order or net terms.
        </p>

        <form className="mt-8 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <Label htmlFor="regCompany">Company Name</Label>
              <Input id="regCompany" required placeholder="Acme Distribution LLC" />
            </div>
            <div>
              <Label htmlFor="regTaxId">Tax ID / EIN</Label>
              <Input id="regTaxId" required placeholder="12-3456789" />
            </div>
            <div>
              <Label htmlFor="regName">Full Name</Label>
              <Input id="regName" required placeholder="Jordan Reyes" />
            </div>
            <div>
              <Label htmlFor="regTitle">Job Title</Label>
              <Input id="regTitle" placeholder="Procurement Manager" />
            </div>
            <div>
              <Label htmlFor="regEmail">Email Address</Label>
              <Input id="regEmail" type="email" required placeholder="you@company.com" />
            </div>
            <div>
              <Label htmlFor="regPhone">Phone Number</Label>
              <Input id="regPhone" type="tel" required placeholder="(555) 010-2200" />
            </div>
          </div>
          <div>
            <Label htmlFor="regPassword">Password</Label>
            <Input id="regPassword" type="password" required placeholder="••••••••" />
          </div>
          <Button type="submit" variant="signal" size="lg" className="w-full">
            <UserPlus className="h-4 w-4" />
            Create Business Account
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-ink">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-steel hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
