"use client";

import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useSignIn } from "@clerk/nextjs";

export default function OAuthButton() {
  const { isLoaded, signIn } = useSignIn();
  if (!isLoaded) return null;

  const handleGoogleLogin = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });
  };

  const handleGithubLogin = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_github",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/",
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Separator className="flex-1/3" />
        <span className="text-sm">Or login with</span>
        <Separator className="flex-1/3" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button className="col-span-1" onClick={handleGoogleLogin}>
          <FcGoogle /> Google
        </Button>
        <Button className="col-span-1" onClick={handleGithubLogin}>
          <Github /> Github
        </Button>
      </div>
    </div>
  );
}
