"use client";

import { Button } from "@/components/ui/button";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formSignupSchema } from "@/lib/validation/auth.schema";
import { useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Loader, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import VerifyCodeForm from "./VerifyCodeForm";
import { handleClerkError } from "@/lib/utils/clerk-error-handler";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { isLoaded, signUp } = useSignUp();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pendingVerification, setPendingVerification] = useState(false);

  const form = useForm<z.infer<typeof formSignupSchema>>({
    resolver: zodResolver(formSignupSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  if (!isLoaded) return null;

  const onSubmit = async (values: z.infer<typeof formSignupSchema>) => {
    if (!isLoaded) return;

    setIsLoading(true);

    try {
      await signUp.create({
        emailAddress: values.email,
        password: values.password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
      setIsLoading(false);
    } catch (err: unknown) {
      handleClerkError(err);
      setIsLoading(false);
    }
  };

  return (
    <>
      {!pendingVerification ? (
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80">
                    Email
                  </Label>
                  <div className="relative">
                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <Mail size={16} className="opacity-70" />
                    </span>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white focus:border-white transition-colors"
                      {...field}
                    />
                  </div>
                  <FormMessage />
                </div>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white/80">
                    Password
                  </Label>
                  <div className="relative">
                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <Lock size={16} className="opacity-70" />
                    </span>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white focus:border-white transition-colors"
                      {...field}
                    />
                  </div>
                  <FormMessage />
                </div>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white/80">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <Lock size={16} className="opacity-70" />
                    </span>
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white focus:border-white transition-colors"
                      {...field}
                    />
                  </div>
                  <FormMessage />
                </div>
              )}
            />

            {/* Show Password / Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <div
                className="flex items-center space-x-2 hover:text-primary cursor-pointer hoverEffect"
                onClick={() => setShowPassword(!showPassword)}
              >
                {!showPassword ? (
                  <>
                    <Eye size={16} />
                    <span>Show Password</span>
                  </>
                ) : (
                  <>
                    <EyeOff size={16} />
                    <span>Hide Password</span>
                  </>
                )}
              </div>
              <a href="#" className="text-sm font-medium hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <Button type="submit" className="w-full font-bold">
              {isLoading && <Loader className="animate-spin" />}
              Register
            </Button>
          </form>
        </Form>
      ) : (
        <VerifyCodeForm />
      )}
    </>
  );
}
