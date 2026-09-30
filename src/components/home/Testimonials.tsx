import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="bg-glow py-16 sm:py-20">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <h2 className="font-display text-3xl leading-tight font-semibold text-ink sm:text-4xl">
            Discover What Our
            <br className="hidden sm:block" /> Community Is Saying
          </h2>
          <p className="text-sm leading-relaxed text-body">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of learning
            and creating on our platform. Explore testimonials that reflect the diverse perspectives
            of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <li key={t.name}>
              <figure className="h-full rounded-2xl bg-white p-6 shadow-[0_4px_24px_-12px_rgb(16_24_64/0.15)]">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <figcaption className="mt-4">
                  <p className="font-display text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-brand">{t.role}</p>
                </figcaption>
                <blockquote className="mt-4 text-sm leading-relaxed text-body">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
