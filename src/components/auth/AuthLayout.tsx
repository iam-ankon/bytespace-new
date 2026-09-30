import type { ReactNode } from "react";
import { Logo } from "../ui/Logo";
import { AuthShowcase } from "./AuthShowcase";

type AuthLayoutProps = {
  intro: { title: string; description: string };
  children: ReactNode;
};

/** Blue split-screen shell shared by the Login and Register pages. */
export function AuthLayout({ intro, children }: AuthLayoutProps) {
  return (
    <div className="bg-grid min-h-dvh bg-brand">
      <div className="container-page grid min-h-dvh items-center gap-10 py-8 lg:grid-cols-2 lg:gap-16">
        <div className="text-white">
          <Logo markOnly />
          <h1 className="mt-8 text-lg font-semibold sm:mt-12">{intro.title}</h1>
          <p className="mt-3 max-w-sm text-sm text-white/80">{intro.description}</p>
          <AuthShowcase className="mt-10 hidden lg:block" />
        </div>

        <main className="w-full rounded-3xl bg-white p-6 sm:p-10 lg:justify-self-end lg:max-w-lg">
          {children}
        </main>
      </div>
    </div>
  );
}
