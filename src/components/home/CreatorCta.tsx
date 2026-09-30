import { ButtonLink } from "../ui/Button";
import { Shape } from "../ui/Shape";

export function CreatorCta() {
  return (
    <section className="bg-grid relative overflow-hidden bg-brand py-20 sm:py-24">
      <Shape name="spiral" color="lime" className="absolute -top-10 -left-6 h-36 w-36 rotate-45" />
      <Shape name="spiral-sm" className="absolute top-6 left-[14%] hidden h-24 w-24 md:block" />
      <Shape name="cone" className="absolute bottom-6 -left-6 h-24 w-24 -rotate-12" />
      <Shape name="torus" color="lime" className="absolute -bottom-16 left-[8%] hidden h-40 w-40 md:block" />
      <Shape name="pyramid" color="lime" className="absolute top-6 right-[16%] hidden h-24 w-24 md:block" />
      <Shape name="cylinder" className="absolute top-4 -right-10 h-32 w-32 rotate-12 sm:h-40 sm:w-40" />
      <Shape name="spiral" color="lime" className="absolute right-[4%] -bottom-8 hidden h-32 w-32 md:block" />

      <div className="container-page relative text-center">
        <h2 className="font-display mx-auto max-w-xl text-3xl leading-tight font-semibold text-white sm:text-4xl">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/80">
          Experience the collaboration of numerous creators and an expanding selection of courses.
          Register now and become a part of a community comprising over 10,000 local and
          international creators. Utilize our Course Editor, and showcase your expertise by
          publishing your finest course on the ByteSpace Course Library.
        </p>
        <ButtonLink href="/register" className="mt-8">
          Join as Creator
        </ButtonLink>
      </div>
    </section>
  );
}
