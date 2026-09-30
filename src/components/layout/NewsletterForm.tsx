"use client";

import { useState, type FormEvent } from "react";
import { Button } from "../ui/Button";

export function NewsletterForm() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend yet: acknowledge the signup locally.
    setSubscribed(true);
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex max-w-md items-center gap-3">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Enter your email"
        className="h-11 min-w-0 flex-1 rounded-full border border-line px-5 text-sm outline-none placeholder:text-muted focus:border-brand"
      />
      <Button type="submit">{subscribed ? "Subscribed!" : "Search"}</Button>
    </form>
  );
}
