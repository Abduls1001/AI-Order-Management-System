import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const variants: Record<string, string> = {
  primary: "bg-graphite text-canvas hover:bg-steel",
  secondary: "bg-steel text-canvas hover:bg-graphite",
  outline: "border border-graphite text-graphite hover:bg-graphite hover:text-canvas",
  ghost: "text-graphite hover:bg-black/5",
};

const sizes: Record<string, string> = {
  sm: "h-9 px-3 text-sm rounded-sm",
  md: "h-11 px-5 text-sm rounded-sm",
  lg: "h-14 px-8 text-base rounded-sm",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
