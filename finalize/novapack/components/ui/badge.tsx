import { cn } from "@/lib/utils";

export function Badge({
  className,
  tone = "neutral",
  children,
}: {
  className?: string;
  tone?: "neutral" | "success" | "amber" | "steel";
  children: React.ReactNode;
}) {
  const tones: Record<string, string> = {
    neutral: "bg-black/5 text-ink",
    success: "bg-success/10 text-success",
    amber: "bg-amber/10 text-amber",
    steel: "bg-steel/10 text-steel",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-xs font-mono uppercase tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
