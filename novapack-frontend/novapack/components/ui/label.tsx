import { cn } from "@/lib/utils";
import { type LabelHTMLAttributes } from "react";

export function Label({
  className,
  required,
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { required?: boolean }) {
  return (
    <label
      className={cn("mb-1.5 block text-sm font-medium text-ink", className)}
      {...props}
    >
      {children}
      {required && <span className="text-amber ml-0.5">*</span>}
    </label>
  );
}
