"use client";

import { Bell } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { useUser } from "@clerk/nextjs";

function LoginButton() {
  const { user } = useUser();
  return (
    <div>
      {user ? (
        <div className="flex items-center gap-4 ">
          <Bell size={18} className="hover:cursor-pointer" />
          <div className="flex items-center gap-3 glass-strong px-3 py-1 rounded-full hover:cursor-pointer">
            <img src={user.imageUrl} className="w-7 h-7 rounded-full" />
            <span className="text-sm font-semibold">
              {user.firstName
                ? `${user.firstName} ${user.lastName}` || "Đ"
                : user?.emailAddresses[0].emailAddress}
            </span>
          </div>
        </div>
      ) : (
        <Link href={ROUTES.signIn}>
          <Button variant={"outline"}>Login</Button>
        </Link>
      )}
    </div>
  );
}

export default LoginButton;
