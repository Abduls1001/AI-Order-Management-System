import { cn } from "@/lib/utils";
import { type InputHTMLAttributes, forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-sm border border-line bg-white px-3 text-sm text-ink placeholder:text-ink/40 focus-visible:border-steel",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";
