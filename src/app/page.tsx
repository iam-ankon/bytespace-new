import { CreateCourses } from "@/components/home/CreateCourses";
import { CreatorCta } from "@/components/home/CreatorCta";
import { DiscoverCourses } from "@/components/home/DiscoverCourses";
import { Hero } from "@/components/home/Hero";
import { LearningPaths } from "@/components/home/LearningPaths";
import { LogoCloud } from "@/components/home/LogoCloud";
import { ProfessionalGrowth } from "@/components/home/ProfessionalGrowth";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <main>
        <LogoCloud />
        <DiscoverCourses />
        <LearningPaths />
        <section aria-label="Grow and create with ByteSpace" className="bg-glow overflow-hidden">
          <ProfessionalGrowth />
          <CreateCourses />
        </section>
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
