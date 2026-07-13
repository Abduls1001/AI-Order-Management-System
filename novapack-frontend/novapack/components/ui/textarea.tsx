import { cn } from "@/lib/utils";
import { type TextareaHTMLAttributes, forwardRef } from "react";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "w-full rounded-sm border border-line bg-white px-3 py-2.5 text-sm text-ink placeholder:text-ink/40 focus-visible:border-steel",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";
