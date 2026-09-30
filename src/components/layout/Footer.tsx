import Link from "next/link";
import { footerColumns, legalLinks } from "@/data/site";
import { Logo } from "../ui/Logo";
import { NewsletterForm } from "./NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <Logo tone="dark" />
          <p className="mt-4 text-sm text-body">
            Stay Up to date with our latest features and releases by joining our newsletter.
          </p>
          <NewsletterForm />
          <p className="mt-4 max-w-sm text-xs text-muted">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our
            company.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerColumns.map((column, i) => (
            <ul key={i} className="space-y-3">
              {column.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-body transition-colors hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="container-page">
        <div className="flex flex-col gap-4 border-t border-line py-6 text-xs text-body sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-5">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-brand">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
