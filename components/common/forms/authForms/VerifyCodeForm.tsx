import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { useSignUp } from "@clerk/nextjs";
import { ROUTES } from "@/constants/routes";
import { Loader } from "lucide-react";
import { handleClerkError } from "@/utils/clerk-error-handler";
import { useState } from "react";

export default function VerifyCodeForm() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const FormSchema = z.object({
    pin: z.string().min(6, {
      message: "Your one-time password must be 6 characters.",
    }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (!isLoaded) return;

    setIsLoading(true);

    try {
      const code = data.pin;
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status !== "complete") {
        console.log(JSON.stringify(completeSignUp, null, 2));
        setIsLoading(false);
      }

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        toast.success(`Welcome to portfolio vietduc.dev!`);
        router.push(ROUTES.homePage);
        setIsLoading(false);
      }
    } catch (err: unknown) {
      handleClerkError(err);
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white/80 justify-center">
                One-Time Password
              </FormLabel>
              <div className="flex justify-center">
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
              </div>

              <FormDescription>
                Please enter the one-time password sent to your email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full font-bold">
          {isLoading && <Loader className="animate-spin" />}Submit
        </Button>
      </form>
    </Form>
  );
}
