import Image from "next/image";
import type { Course } from "@/data/courses";
import { studentAvatars } from "@/data/site";
import { cn } from "@/lib/cn";
import { LevelIcon, StarIcon } from "../icons";
import { AvatarStack } from "../ui/AvatarStack";

function MetaPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-black/35 px-2.5 py-1 text-[10px] text-white backdrop-blur-md">
      {children}
    </span>
  );
}

export function CourseCard({ course, className }: { course: Course; className?: string }) {
  return (
    <article
      className={cn(
        "group min-w-0 rounded-2xl border border-line bg-white p-3 transition-shadow hover:shadow-card",
        className,
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-surface">
        <Image
          src={course.image}
          alt={course.title}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-2 bottom-2 flex flex-wrap gap-1.5">
          <MetaPill>{course.lessons} Lessons</MetaPill>
          <MetaPill>{course.duration}</MetaPill>
          <MetaPill>{course.comments} Comments</MetaPill>
        </div>
      </div>

      <div className="mt-3 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-display truncate text-base font-semibold text-ink" title={course.title}>
            {course.title}
          </h3>
          <p className="mt-0.5 text-[11px] text-muted">
            by <span className="text-brand">{course.author}</span>
          </p>
        </div>
        <p className="flex shrink-0 items-center gap-1 text-sm text-body">
          {course.rating}
          <StarIcon className="h-3.5 w-3.5 text-muted/60" />
        </p>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <span className="inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-1 text-[11px] text-body">
          <LevelIcon className="h-3 w-3" />
          {course.level}
        </span>
        <AvatarStack avatars={studentAvatars.slice(0, 4)} more={`${course.enrolled}+`} />
      </div>

      <p className="mt-3 text-lg font-semibold text-brand">
        ${course.price}
        <span className="ml-0.5 text-[10px] font-normal text-muted">/lifetime</span>
      </p>
    </article>
  );
}
