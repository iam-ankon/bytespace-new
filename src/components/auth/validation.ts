export type FieldErrors = Partial<Record<"name" | "email" | "password", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateAuth(values: { name?: string; email: string; password: string }, requireName: boolean) {
  const errors: FieldErrors = {};
  if (requireName && !values.name?.trim()) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email address.";
  if (values.password.length < 8) errors.password = "Password must be at least 8 characters.";
  return errors;
}
