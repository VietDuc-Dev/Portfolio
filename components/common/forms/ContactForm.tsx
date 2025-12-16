"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const formContactSchema = z.object({
    fullName: z
      .string()
      .trim()
      .min(3, {
        message: "Full name must be at least 3 characters",
      })
      .max(50, {
        message: "Full name must not exceed 50 characters",
      })
      .regex(/^[a-zA-ZÀ-ỹ\s]+$/, {
        message: "Full name can only contain letters and spaces",
      }),

    phone: z
      .string()
      .trim()
      .refine(
        (value) =>
          !value || /^(0|\+84)(\s|-)?([3|5|7|8|9])(\d{8})$/.test(value),
        {
          message: "Invalid phone number",
        }
      ),

    email: z
      .string()
      .trim()
      .email({
        message: "Invalid email address",
      })
      .max(100, {
        message: "Email must not exceed 100 characters",
      }),

    message: z
      .string()
      .trim()
      .min(10, {
        message: "Message must be at least 10 characters",
      })
      .max(500, {
        message: "Message must not exceed 500 characters",
      }),
  });

  const form = useForm<z.infer<typeof formContactSchema>>({
    resolver: zodResolver(formContactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formContactSchema>) => {
    console.log(values);
  };

  return (
    <Card className="w-full px-4 glass rounded-xl shadow-2xl border border-white/20 text-white">
      {/* Header */}
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-semibold tracking-wider text-white">
          Contact Me!
        </CardTitle>
      </CardHeader>

      {/* Form Content */}

      <CardContent className="space-y-6 p-0">
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              {/* fullName */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-white/80">
                      Full Name
                    </Label>
                    <div className="relative">
                      <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <User size={16} className="opacity-70" />
                      </span>
                      <Input
                        id="fullName"
                        placeholder="Enter your name"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white focus:border-white transition-colors"
                        {...field}
                      />
                    </div>
                    <FormMessage />
                  </div>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white/80">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <span className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <Phone size={16} className="opacity-70" />
                      </span>
                      <Input
                        id="phone"
                        placeholder="Enter your phone"
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white focus:border-white transition-colors"
                        {...field}
                      />
                    </div>
                    <FormMessage />
                  </div>
                )}
              />
            </div>

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

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/80">
                    Message
                  </Label>

                  <Textarea
                    placeholder="Your message"
                    rows={5}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white focus:border-white transition-colors"
                    {...field}
                  />

                  <FormMessage />
                </div>
              )}
            />

            {/* Login Button */}
            <Button
              data-testid="login-btn"
              type="submit"
              className="w-full font-bold"
            >
              {isLoading && <Loader className="animate-spin" />}
              Send message
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
