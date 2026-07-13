"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, ShoppingCart, Search, ArrowRight } from "lucide-react";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/products", label: "Products" },
  { href: "/request-quote", label: "Request Quote" },
  { href: "/track-order", label: "Track Order" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="hazard-rule" />
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="NovaPack Industries home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium text-ink/70 transition-colors hover:text-ink",
                pathname === link.href && "text-ink font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex" aria-label="Search catalog">
            <Search className="h-5 w-5" />
          </Button>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative" aria-label="View cart">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-signal px-1 text-[0.65rem] font-bold text-white">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/login" className="hidden sm:block">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
          <Link href="/request-quote" className="hidden lg:block">
            <Button variant="signal" size="sm">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle>Menu</SheetTitle>
              <nav className="mt-8 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-line py-3.5 text-base font-medium text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3.5 text-base font-medium text-ink"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  onClick={() => setOpen(false)}
                  className="py-3.5 text-base font-medium text-ink"
                >
                  Create Account
                </Link>
              </nav>
              <Link href="/request-quote" onClick={() => setOpen(false)} className="mt-6 block">
                <Button variant="signal" className="w-full">
                  Get a Quote
                </Button>
              </Link>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
