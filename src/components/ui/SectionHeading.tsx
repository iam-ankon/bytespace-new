import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "dark" | "light";
  size?: "md" | "lg";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  align = "center",
  tone = "dark",
  size = "lg",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", size === "lg" ? "max-w-2xl" : "max-w-3xl", className)}>
      <h2
        className={cn(
          "font-display leading-tight font-semibold",
          size === "lg" ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl",
          tone === "dark" ? "text-ink" : "text-white",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-sm leading-relaxed sm:text-base",
            tone === "dark" ? "text-muted" : "text-white/80",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
