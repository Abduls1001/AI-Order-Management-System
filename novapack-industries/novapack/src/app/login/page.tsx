import Link from "next/link";
import { LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Logo } from "@/components/shared/logo";

export const metadata = { title: "Sign In" };

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-21rem)] max-w-md flex-col justify-center px-4 py-16 sm:px-6">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div className="mt-8 border border-line bg-white p-8">
        <span className="stencil-label justify-center">Business Account Login</span>
        <h1 className="mt-3 text-center font-display text-2xl font-bold text-ink">
          Sign in to your account
        </h1>

        <form className="mt-8 space-y-5">
          <div>
            <Label htmlFor="loginEmail">Email Address</Label>
            <Input id="loginEmail" type="email" required placeholder="you@company.com" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="loginPassword" className="mb-0">Password</Label>
              <Link href="#" className="mb-1.5 text-xs font-medium text-steel hover:underline">
                Forgot password?
              </Link>
            </div>
            <Input id="loginPassword" type="password" required placeholder="••••••••" />
          </div>
          <Button type="submit" variant="signal" size="lg" className="w-full">
            <LogIn className="h-4 w-4" />
            Sign In
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-ink">
          Don&apos;t have a business account?{" "}
          <Link href="/register" className="font-semibold text-steel hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
