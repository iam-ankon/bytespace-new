"use client";

import { useState } from "react";
import { courseCategories, courses } from "@/data/courses";
import { cn } from "@/lib/cn";
import { CourseCard } from "../course/CourseCard";
import { SectionHeading } from "../ui/SectionHeading";

const VISIBLE_CATEGORIES = 18;

export function DiscoverCourses() {
  const [active, setActive] = useState<string>("Featured");
  const [showAll, setShowAll] = useState(false);

  const categories = showAll ? courseCategories : courseCategories.slice(0, VISIBLE_CATEGORIES);
  const filtered = courses.filter((c) => c.categories.includes(active));

  return (
    <section id="courses" className="scroll-mt-6 py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          title={
            <>
              Discover Your Passion,
              <br /> Build Your Skills
            </>
          }
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <div
          role="group"
          aria-label="Filter courses by category"
          className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full px-4 py-2 text-xs transition-colors",
                active === category
                  ? "bg-lime font-medium text-ink"
                  : "bg-surface text-body hover:bg-line",
              )}
            >
              {category}
            </button>
          ))}
          {courseCategories.length > VISIBLE_CATEGORIES && (
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="px-2 py-2 text-xs font-medium text-brand hover:underline"
            >
              {showAll ? "− Less" : "+ More"}
            </button>
          )}
        </div>

        <div className="mt-10" aria-live="polite">
          {filtered.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <p className="rounded-2xl bg-surface py-12 text-center text-sm text-body">
              New {active} courses are coming soon. Check back shortly!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
