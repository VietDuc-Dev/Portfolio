import { Separator } from "@/components/ui/separator";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function OAuthButton() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Separator className="flex-1/3" />
        <span className="text-sm">Or login with</span>
        <Separator className="flex-1/3" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button className="col-span-1">
          <FcGoogle /> Google
        </Button>
        <Button className="col-span-1">
          <Github /> Github
        </Button>
      </div>
    </div>
  );
}
