import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, Mail } from "lucide-react";

function SignInForm() {
  return (
    <div>
      <form className="space-y-4">
        {/* Email */}
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
            />
          </div>
        </div>

        {/* Password */}
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
              type="password"
              placeholder="Enter your password"
              className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white focus:border-white transition-colors"
            />
          </div>
        </div>

        {/* Show Password / Forgot Password */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember-me"
              className="border-white/50 data-[state=checked]:bg-white data-[state=checked]:text-black"
            />
            <label htmlFor="remember-me" className="text-white/80">
              Show Password
            </label>
          </div>
          <a href="#" className="text-sm font-medium hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <Button type="submit" className="w-full font-bold">
          Login
        </Button>
      </form>
    </div>
  );
}

export default SignInForm;
