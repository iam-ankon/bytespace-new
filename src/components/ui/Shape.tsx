import { cn } from "@/lib/cn";

export type ShapeName = "spiral" | "spiral-sm" | "cylinder" | "cone" | "pyramid" | "torus";

type ShapeProps = {
  name: ShapeName;
  /** "lime" tints the white 3D render with the brand lime; "white" leaves it as is. */
  color?: "lime" | "white";
  className?: string;
};

/**
 * Decorative 3D shape. The source renders are white; the lime variant masks a
 * lime fill with the render's alpha and overlays the render on top to keep its shading.
 */
export function Shape({ name, color = "white", className }: ShapeProps) {
  const src = `/images/shapes/${name}.png`;

  if (color === "white") {
    // eslint-disable-next-line @next/next/no-img-element -- purely decorative, sized by CSS
    return <img src={src} alt="" aria-hidden className={cn("pointer-events-none select-none", className)} />;
  }

  return (
    <span
      aria-hidden
      className={cn("pointer-events-none block select-none bg-lime", className)}
      style={{
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="h-full w-full object-contain mix-blend-overlay" />
    </span>
  );
}
