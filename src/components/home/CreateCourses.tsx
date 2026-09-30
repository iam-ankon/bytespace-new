import Image from "next/image";
import { CheckCircleIcon } from "../icons";
import { HappyStudentsCard, RevenueCard } from "../ui/FloatingCards";
import { Shape } from "../ui/Shape";

const benefits = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export function CreateCourses() {
  return (
    <div id="creators" className="container-page grid scroll-mt-6 items-center gap-12 pb-16 sm:pb-20 lg:grid-cols-2">
      <div className="relative mx-auto h-[400px] w-full max-w-md sm:h-[440px]">
        <Image
          src="/images/people/creator.png"
          alt="Course creator with headphones holding a tablet"
          width={500}
          height={500}
          className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-2xl"
        />
        <RevenueCard
          label="Total Revenue"
          period="July 1-31"
          amount="$120.29"
          className="absolute top-2 left-0 w-44"
        />
        <RevenueCard
          label="Year to Date"
          period="2022"
          amount="$1,200.38"
          badge="+18%"
          className="absolute top-28 left-0 w-32"
        />
        <Shape name="spiral" color="lime" className="absolute top-8 right-4 h-24 w-24 -rotate-12" />
        <HappyStudentsCard className="absolute right-0 bottom-10 sm:-right-4" />
      </div>

      <div className="lg:pl-8">
        <h2 className="font-display text-3xl leading-tight font-semibold text-ink sm:text-4xl">
          Create &amp; Manage
          <br /> Courses Easily.
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-body">
          <strong className="font-semibold text-ink">ByteSpace</strong> supports individuals or
          entities in the creation, publication, and administration of educational courses.
        </p>
        <ul className="mt-6 space-y-3">
          {benefits.map((b) => (
            <li key={b} className="flex items-center gap-2.5 text-sm text-ink">
              <CheckCircleIcon className="h-4.5 w-4.5 text-brand" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
