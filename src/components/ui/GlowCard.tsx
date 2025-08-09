import type { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type Tone = "primary" | "secondary" | "neutral";

interface GlowCardProps extends PropsWithChildren {
  className?: string;
  /** Controls accent color used for overlay and hover border */
  tone?: Tone;
  /** Enable pricing-like hover effects (scale, shadow, border color) */
  hover?: boolean;
}

export function GlowCard({
  children,
  className,
  tone = "primary",
  hover = true,
}: GlowCardProps) {
  const overlayTone =
    tone === "secondary"
      ? "from-secondary/5"
      : tone === "neutral"
        ? "from-foreground/5"
        : "from-primary/5";
  const hoverBorder =
    tone === "secondary"
      ? "hover:border-secondary/30"
      : tone === "neutral"
        ? "hover:border-border/50"
        : "hover:border-primary/30";

  return (
    <div
      className={cn(
        "group relative bg-gradient-to-br from-background to-background/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-border/50 transition-all duration-300",
        hover && "hover:shadow-2xl hover:scale-105",
        hover && hoverBorder,
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br to-transparent opacity-0 rounded-2xl transition-opacity duration-300",
          overlayTone,
          hover && "group-hover:opacity-100",
        )}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

