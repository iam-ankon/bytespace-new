# ByteSpace — Landing Page

Implementation of the **ByteSpace New** Figma design for the Doin Tech Limited Jr. Software Engineer (Frontend) assessment.

**Live demo:** https://bytespace-new-rust.vercel.app

## Pages

| Route       | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `/`         | Full landing page (required)                                   |
| `/login`    | Sign-in page with client-side validation (bonus)               |
| `/register` | Sign-up page with client-side validation (bonus)               |
| any other   | Custom 404 page based on the design's "404 Not Found" frame    |

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router, static rendering)
- React 19 + TypeScript
- Tailwind CSS v4 (design tokens defined with `@theme` in `src/app/globals.css`)
- `next/font` (Poppins for headings, Inter for body) and `next/image` for optimized images

## Project structure

```
src/
├── app/                  # Routes: home, login, register, not-found, root layout
├── components/
│   ├── auth/             # AuthLayout, AuthForm, TextField, validation
│   ├── course/           # CourseCard
│   ├── home/             # One component per landing-page section
│   ├── layout/           # Navbar (responsive menu), Footer, NewsletterForm
│   ├── ui/               # Reusable primitives: Button, Logo, Shape, AvatarStack, cards…
│   └── icons.tsx         # Inline SVG icon set
├── data/                 # Static content (courses, testimonials, nav/footer links)
└── lib/                  # Small helpers (cn)
```

Content lives in `src/data`, so sections render from data instead of hard-coded markup.

## Features

- Pixel-close recreation of every section of the Figma home page, responsive from 360px up
- Course category filter chips (with "+ More" toggle) that filter the course grid
- Mobile navigation menu
- Accessible forms: labels, `aria-invalid`, error messages tied to inputs
- The design's 3D shapes are tinted lime with CSS masks, so one white render serves both colors

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Notes for the reviewer

- Login/Register have no backend; submitting a valid form shows a confirmation message.
- Images are the assets used in the Figma file.
