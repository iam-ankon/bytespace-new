import type { ReactNode } from "react";

/** Placeholder partner marks, matching the "Logoipsum" row in the design. */
const marks: ReactNode[] = [
  <path key="a" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-6 8h12M6.5 7.5h11M6.5 15.5h11" />,
  <path key="b" d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />,
  <path key="c" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm1 3-5 7h4l-1 5 5-7h-4l1-5Z" />,
  <path key="d" d="M12 3 21 12 12 21 3 12Zm0 5-4 4 4 4 4-4Z" />,
  <path key="e" d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4a5 5 0 1 1 0 10" />,
];

export function LogoCloud() {
  return (
    <section aria-label="Trusted by" className="bg-surface">
      <ul className="container-page flex flex-wrap items-center justify-center gap-x-12 gap-y-6 py-8 sm:justify-between">
        {marks.map((mark, i) => (
          <li key={i} className="flex items-center gap-2 text-body/70">
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              className="h-7 w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mark}
            </svg>
            <span className="font-display text-lg font-semibold tracking-tight">Logoipsum</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
