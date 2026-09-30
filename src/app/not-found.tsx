import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <section className="bg-grid bg-brand pb-20">
        <Navbar />
        <main className="container-page pt-10 text-center">
          <p className="font-display bg-gradient-to-b from-lime to-lime/40 bg-clip-text text-8xl font-bold text-transparent sm:text-9xl">
            404
          </p>
          <h1 className="font-display mt-2 text-2xl font-semibold text-white sm:text-3xl">
            The page you are looking for doesn&apos;t exist
          </h1>
          <ButtonLink href="/" className="mt-8">
            Back to Home
          </ButtonLink>
        </main>
      </section>
      <Footer />
    </>
  );
}
