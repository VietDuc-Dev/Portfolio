import z from "zod";

const emailSchema = z
  .string()
  .trim()
  .nonempty("Email is required")
  .email("Please enter a valid email address (example: user@example.com)")
  .max(155, "Email is too long (max 255 characters)");

const passwordSchema = z
  .string()
  .trim()
  .nonempty("Password is required")
  .min(8, "Password must be at least 8 characters")
  .max(128, "Password is too long")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(
    /[@$!%*?&]/,
    "Password must contain at least one special character (@$!%*?&)"
  );

export const formSigninSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const formSignupSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Confirm Password does no match",
    path: ["confirmPassword"],
  });
