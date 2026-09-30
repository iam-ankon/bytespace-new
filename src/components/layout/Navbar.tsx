"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNav } from "@/data/site";
import { cn } from "@/lib/cn";
import { BagIcon, CloseIcon, MenuIcon } from "../icons";
import { Logo } from "../ui/Logo";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30">
      <nav className="container-page flex h-20 items-center justify-between" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {mainNav.map((link) => {
            const active = link.href === pathname;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "text-sm transition-colors hover:text-white",
                    active ? "font-medium text-white" : "text-white/75",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-6 text-sm text-white/90 md:flex">
          <Link href="/login" className="hover:text-white">
            Sign In
          </Link>
          <Link href="/register" className="hover:text-white">
            Join Us
          </Link>
          <button type="button" aria-label="Cart" className="hover:text-white">
            <BagIcon className="h-5 w-5" />
          </button>
        </div>

        <button
          type="button"
          className="text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="container-page absolute inset-x-0 top-20 md:hidden"
        >
          <div className="rounded-2xl bg-white p-4 shadow-card">
            <ul className="flex flex-col">
              {mainNav.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm text-ink hover:bg-surface"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-line pt-3">
              <Link
                href="/login"
                className="rounded-full border border-line py-2.5 text-center text-sm text-ink"
              >
                Sign In
              </Link>
              <Link href="/register" className="rounded-full bg-lime py-2.5 text-center text-sm text-ink">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
