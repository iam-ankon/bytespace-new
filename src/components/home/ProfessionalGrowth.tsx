import Image from "next/image";
import { courses } from "@/data/courses";
import { LevelIcon, StarIcon } from "../icons";
import { ProgressCard } from "../ui/FloatingCards";
import { Shape } from "../ui/Shape";

const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

/** Cropped course card peeking out behind the student. */
function PeekCourseCard() {
  const course = courses[0];
  return (
    <div className="w-56 rounded-2xl bg-white p-2.5 shadow-card">
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl">
        <Image src={course.image} alt="" fill sizes="224px" className="object-cover" />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <p className="font-display text-sm font-semibold text-ink">{course.title}</p>
        <StarIcon className="h-3 w-3 text-muted/60" />
      </div>
      <p className="text-[10px] text-brand">by {course.author}</p>
      <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-surface px-2 py-0.5 text-[10px] text-body">
        <LevelIcon className="h-2.5 w-2.5" /> {course.level}
      </span>
      <p className="mt-2 text-sm font-semibold text-brand">${course.price}</p>
    </div>
  );
}

export function ProfessionalGrowth() {
  return (
    <div className="container-page grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2">
      <div>
        <h2 className="font-display text-3xl leading-tight font-semibold text-ink sm:text-4xl">
          Your Path to Professional
          <br className="hidden sm:block" /> Growth Starts Here!
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-body">
          Explore our curated selection of courses tailored to enhance your capabilities and
          accelerate your career journey. Whether you are looking to sharpen specific skills, gain
          industry expertise, or embark on a new career path entirely, we have the resources you
          need.
        </p>
        <dl className="mt-8 flex gap-10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse">
              <dt className="text-xs text-body">{s.label}</dt>
              <dd className="font-display text-2xl font-semibold text-brand">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mx-auto h-[380px] w-full max-w-md sm:h-[420px]">
        <div className="absolute top-0 left-0">
          <PeekCourseCard />
        </div>
        <Image
          src="/images/people/hero-student.png"
          alt="Student learning online with a laptop"
          width={516}
          height={516}
          className="absolute right-0 bottom-0 h-[92%] w-auto object-contain drop-shadow-2xl"
        />
        <Shape name="spiral" color="lime" className="absolute top-6 -right-2 h-24 w-24 rotate-12" />
        <ProgressCard className="absolute top-1/3 -right-2 sm:-right-6" />
      </div>
    </div>
  );
}
