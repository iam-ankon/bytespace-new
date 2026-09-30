import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import {
  BusinessIcon,
  DesignIcon,
  DevelopmentIcon,
  LaptopIcon,
  MarketingIcon,
  PhotographyIcon,
} from "../icons";
import { SectionHeading } from "../ui/SectionHeading";

type Path = { label: string; Icon: ComponentType<SVGProps<SVGSVGElement>> };

const paths: Path[] = [
  { label: "Design", Icon: DesignIcon },
  { label: "Development", Icon: DevelopmentIcon },
  { label: "IT & Software", Icon: LaptopIcon },
  { label: "Business", Icon: BusinessIcon },
  { label: "Marketing", Icon: MarketingIcon },
  { label: "Photography", Icon: PhotographyIcon },
];

export function LearningPaths() {
  return (
    <section id="categories" className="scroll-mt-6 pb-16 sm:pb-20">
      <div className="container-page">
        <SectionHeading
          title="Explore Diverse Learning Paths at Bytespace"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
          size="md"
        />

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {paths.map(({ label, Icon }) => (
            <li key={label}>
              <Link
                href="/#courses"
                className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-white px-3 py-6 text-center transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-lime text-ink transition-colors group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm text-ink">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
