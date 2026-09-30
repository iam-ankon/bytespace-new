import type { Metadata } from "next";
import { AuthForm } from "@/components/auth/AuthForm";
import { AuthLayout } from "@/components/auth/AuthLayout";

export const metadata: Metadata = { title: "Create an Account" };

export default function RegisterPage() {
  return (
    <AuthLayout
      intro={{
        title: "Sign up and come in",
        description:
          "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost!",
      }}
    >
      <AuthForm mode="register" />
    </AuthLayout>
  );
}
