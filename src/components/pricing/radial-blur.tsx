import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function RadialBlur({ className }: Props) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 left-0 isolate -z-10 h-1/2 w-full",
        "bg-radial-gradient from-primary/10 via-accent/5 to-transparent",
        "before:absolute before:inset-0 before:bg-radial-gradient before:from-secondary/10 before:via-transparent before:to-background/50",
        className,
      )}
    />
  );
}
