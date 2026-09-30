import { courses } from "@/data/courses";
import { cn } from "@/lib/cn";
import { CourseCard } from "../course/CourseCard";
import { HappyStudentsCard } from "../ui/FloatingCards";
import { Shape } from "../ui/Shape";

/** Stacked course cards illustration on the left of the auth pages. */
export function AuthShowcase({ className }: { className?: string }) {
  return (
    <div className={cn("relative h-[340px] w-full max-w-md", className)} aria-hidden>
      <CourseCard course={courses[1]} className="absolute top-10 left-0 w-72 origin-left scale-90" />
      <CourseCard course={courses[2]} className="absolute top-0 left-24 w-72" />
      <Shape name="torus" color="lime" className="absolute top-2 left-16 h-16 w-16" />
      <Shape name="cone" color="lime" className="absolute bottom-0 -left-2 h-20 w-20 -rotate-12" />
      <Shape name="spiral-sm" className="absolute right-6 bottom-16 h-16 w-16" />
      <HappyStudentsCard variant="lime" className="absolute right-4 -bottom-6" />
    </div>
  );
}
