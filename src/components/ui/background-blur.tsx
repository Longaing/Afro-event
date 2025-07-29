import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function BackgroundBlur({ className }: Props) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 left-0 -z-10 h-full w-full",
        "bg-gradient-to-br from-background via-background/80 to-accent/10",
        "before:absolute before:inset-0 before:bg-gradient-to-tr before:from-primary/5 before:via-transparent before:to-secondary/10",
        "after:absolute after:inset-0 after:bg-gradient-to-bl after:from-accent/5 after:via-transparent after:to-primary/10",
        className,
      )}
    />
  );
}
