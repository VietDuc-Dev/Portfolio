import SignUpForm from "@/components/common/forms/authForms/SignUpForm";
import OAuthButton from "@/components/common/OAuthButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ROUTES } from "@/constants/routes";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function SignUp() {
  return (
    <Card className="w-full max-w-sm px-4 glass rounded-xl shadow-2xl border border-white/20 text-white dark:bg-black/10 dark:text-white">
      {/* Header */}
      <CardHeader className="text-center p-0">
        <CardTitle className="text-2xl font-semibold tracking-wider text-white">
          Register
        </CardTitle>
        <p className="text-primary">
          Welcome! Please fill in the details to get started
        </p>
      </CardHeader>

      {/* Form Content */}
      <CardContent className="space-y-6 p-0">
        {/* Sign Form */}
        <SignUpForm />

        {/* OAuth */}
        <OAuthButton />

        {/* Register Link */}
        <div className="text-center text-sm">
          <span className="text-white/80">Already have an account? </span>
          <Link
            href={ROUTES.signIn}
            className="font-medium hover:underline text-white"
          >
            Login
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
