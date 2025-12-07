import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SignInForm from "@/components/common/forms/authForms/SignInForm";
import { ROUTES } from "@/constants/routes";
import OAuthButton from "@/components/common/OAuthButton";

export const metadata: Metadata = {
  title: "Sign In",
};

export default async function SignIn() {
  return (
    <Card className="w-full max-w-sm px-4 glass rounded-xl shadow-2xl border border-white/20 text-white dark:bg-black/10 dark:text-white">
      {/* Header */}
      <CardHeader className="text-center p-0">
        <CardTitle className="text-2xl font-semibold tracking-wider text-white">
          Login
        </CardTitle>
        <p className="text-primary">Welcome back! Please sign to continue</p>
      </CardHeader>

      {/* Form Content */}
      <CardContent className="space-y-6 p-0">
        {/* Sign Form */}
        <SignInForm />

        {/* OAuth */}
        <OAuthButton />

        {/* Register Link */}
        <div className="text-center text-sm">
          <span className="text-white/80">Don&apos;t have an account? </span>
          <Link
            href={ROUTES.signUp}
            className="font-medium hover:underline text-white"
          >
            Register
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
