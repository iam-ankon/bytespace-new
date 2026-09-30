import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  /** Color of the "ByteSpace" wordmark. */
  tone?: "light" | "dark";
  /** Show only the "b" mark. */
  markOnly?: boolean;
  className?: string;
};

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden className={cn("h-7 w-7", className)}>
      <path
        fill="#d7fb3b"
        d="M5 3h7v9.2A9.5 9.5 0 1 1 5 21.5V3Zm11.5 13.2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export function Logo({ tone = "light", markOnly = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="ByteSpace home"
      className={cn("inline-flex items-center gap-2", className)}
    >
      <LogoMark />
      {!markOnly && (
        <span
          className={cn(
            "font-display text-xl font-semibold tracking-tight",
            tone === "light" ? "text-white" : "text-ink",
          )}
        >
          ByteSpace
        </span>
      )}
    </Link>
  );
}
