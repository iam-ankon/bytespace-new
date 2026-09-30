"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { FacebookIcon, GoogleIcon } from "../icons";
import { Button } from "../ui/Button";
import { TextField } from "./TextField";
import { validateAuth, type FieldErrors } from "./validation";

type Mode = "login" | "register";

const copy = {
  login: {
    eyebrow: "Sign In",
    title: "Welcome Back",
    submit: "Sign In",
    done: "Signed in! (demo only — no backend is connected)",
    switchText: "New user?",
    switchLink: { label: "Create an account", href: "/register" },
  },
  register: {
    eyebrow: "Create an Account",
    title: "Welcome to ByteSpace",
    submit: "Continue",
    done: "Account created! (demo only — no backend is connected)",
    switchText: "Already have an account?",
    switchLink: { label: "Login", href: "/login" },
  },
} as const;

export function AuthForm({ mode }: { mode: Mode }) {
  const t = copy[mode];
  const [errors, setErrors] = useState<FieldErrors>({});
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      password: String(data.get("password") ?? ""),
    };
    const next = validateAuth(values, mode === "register");
    setErrors(next);
    setDone(Object.keys(next).length === 0);
  }

  return (
    <div>
      <p className="text-sm text-brand">{t.eyebrow}</p>
      <h2 className="font-display mt-1 max-w-xs text-3xl leading-tight font-semibold text-ink sm:text-4xl">
        {t.title}
      </h2>

      <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-4">
        {mode === "register" && (
          <TextField label="Name" name="name" autoComplete="name" placeholder="Jamie Davis" error={errors.name} />
        )}
        <TextField
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="designer@example.com"
          error={errors.email}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete={mode === "login" ? "current-password" : "new-password"}
          placeholder="••••••••"
          error={errors.password}
        />

        <div className="flex justify-end pt-2">
          <Button type="submit">{t.submit}</Button>
        </div>
        {done && (
          <p role="status" className="rounded-lg bg-lime/30 px-4 py-3 text-sm text-ink">
            {t.done}
          </p>
        )}
      </form>

      {mode === "login" && (
        <>
          <div className="my-8 flex items-center gap-3 text-xs text-muted">
            <span className="h-px flex-1 bg-line" /> or <span className="h-px flex-1 bg-line" />
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              aria-label="Sign in with Facebook"
              className="grid h-12 w-12 place-items-center rounded-xl border border-line text-ink hover:bg-surface"
            >
              <FacebookIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Sign in with Google"
              className="grid h-12 w-12 place-items-center rounded-xl border border-line text-ink hover:bg-surface"
            >
              <GoogleIcon className="h-5 w-5" />
            </button>
          </div>
        </>
      )}

      <p className="mt-10 text-center text-sm text-muted">
        {t.switchText}{" "}
        <Link href={t.switchLink.href} className="text-brand hover:underline">
          {t.switchLink.label}
        </Link>
      </p>
    </div>
  );
}
