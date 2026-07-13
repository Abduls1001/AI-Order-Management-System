import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("border border-line bg-white rounded-sm", className)}>
      {children}
    </div>
  );
}
