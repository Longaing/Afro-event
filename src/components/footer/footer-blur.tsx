import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export function FooterBlur({ className }: Props) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 left-0 -z-10 h-full w-full",
        "bg-gradient-to-t from-background via-background/90 to-transparent",
        "before:absolute before:inset-0 before:bg-gradient-to-t before:from-primary/5 before:via-transparent before:to-accent/10",
        "after:absolute after:inset-0 after:bg-gradient-to-t after:from-secondary/10 after:via-transparent after:to-background/80",
        className,
      )}
    />
  );
}
