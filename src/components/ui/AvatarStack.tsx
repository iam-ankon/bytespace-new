import Image from "next/image";
import { cn } from "@/lib/cn";

type AvatarStackProps = {
  avatars: string[];
  /** Label shown in the trailing lime bubble, e.g. "26+". */
  more?: string;
  size?: "sm" | "md";
  className?: string;
};

export function AvatarStack({ avatars, more, size = "sm", className }: AvatarStackProps) {
  const dim = size === "sm" ? "h-6 w-6 text-[9px]" : "h-8 w-8 text-[10px]";

  return (
    <div className={cn("flex items-center -space-x-1.5", className)}>
      {avatars.map((src) => (
        <Image
          key={src}
          src={src}
          alt=""
          width={32}
          height={32}
          className={cn(dim, "rounded-full object-cover ring-2 ring-white")}
        />
      ))}
      {more && (
        <span
          className={cn(
            dim,
            "grid place-items-center rounded-full bg-lime font-semibold text-ink ring-2 ring-white",
          )}
        >
          {more}
        </span>
      )}
    </div>
  );
}
