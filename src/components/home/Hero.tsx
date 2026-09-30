import Image from "next/image";
import { Navbar } from "../layout/Navbar";
import { SearchIcon } from "../icons";
import { Button } from "../ui/Button";
import { CourseStatCard, HappyStudentsCard, ProgressCard } from "../ui/FloatingCards";
import { Shape } from "../ui/Shape";

function HeroSearch() {
  return (
    <form
      role="search"
      action="/#courses"
      className="mx-auto mt-8 flex w-full max-w-md items-center gap-2"
    >
      <label className="relative flex-1">
        <span className="sr-only">Search courses</span>
        <SearchIcon className="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted" />
        <input
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          className="h-11 w-full rounded-full bg-white pr-4 pl-10 text-sm text-ink outline-none placeholder:text-muted focus:ring-2 focus:ring-lime"
        />
      </label>
      <Button type="submit">Search</Button>
    </form>
  );
}

export function Hero() {
  return (
    <section className="bg-grid relative overflow-hidden bg-brand">
      <Navbar />

      {/* Decorative shapes */}
      <Shape name="spiral" color="lime" className="absolute top-[26rem] -left-12 h-32 w-32 -rotate-12 sm:h-44 sm:w-44 lg:top-40 lg:h-52 lg:w-52" />
      <Shape name="cylinder" color="lime" className="absolute top-16 -right-8 hidden h-44 w-44 rotate-12 lg:block" />
      <Shape name="spiral-sm" className="absolute top-[26rem] left-[18%] hidden h-20 w-20 -rotate-45 lg:block" />
      <Shape name="pyramid" className="absolute top-[24rem] right-[20%] hidden h-24 w-24 lg:block" />
      <Shape name="torus" className="absolute bottom-6 left-4 hidden h-32 w-32 -rotate-12 md:block lg:left-10" />
      <Shape name="spiral-sm" className="absolute right-4 bottom-10 hidden h-28 w-28 rotate-12 md:block lg:right-16" />

      <div className="container-page relative pt-10 text-center sm:pt-14">
        <h1 className="font-display mx-auto max-w-3xl text-4xl leading-tight font-semibold text-white sm:text-5xl lg:text-6xl">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-sm text-white/80 sm:text-base">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide
          range of courses.
        </p>
        <HeroSearch />

        <div className="relative mx-auto mt-10 h-[340px] max-w-4xl sm:h-[420px]">
          {/* Lime half-disc the student stands in front of */}
          <div className="absolute bottom-0 left-1/2 aspect-square w-[min(760px,140%)] -translate-x-1/2 translate-y-1/2 rounded-full bg-lime" />

          <Image
            src="/images/people/hero-student.png"
            alt="Smiling student with headphones holding a laptop"
            width={516}
            height={516}
            priority
            className="absolute bottom-0 left-1/2 h-full w-auto max-w-none -translate-x-1/2 object-contain object-bottom"
          />

          <CourseStatCard className="absolute top-6 left-0 hidden text-left sm:block md:left-[14%]" />
          <HappyStudentsCard className="absolute bottom-12 left-0 hidden text-left sm:block md:left-[8%]" />
          <ProgressCard className="absolute top-10 right-0 hidden text-left sm:block md:right-[10%]" />
        </div>
      </div>
    </section>
  );
}
