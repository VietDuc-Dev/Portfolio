import Navigation from "../common/Navigation";
import SearchBar from "../common/SearchBar";
import AvatarUser from "../common/AvatarUser";
import { currentUser } from "@clerk/nextjs/server";
import { Button } from "../ui/button";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { Bell } from "lucide-react";

export default async function HeaderMain() {
  const user = await currentUser();

  return (
    <div className="w-full flex justify-between items-center">
      <SearchBar />

      <Navigation />

      {user ? (
        <div className="flex items-center gap-4 ">
          <Bell size={18} className="hover:cursor-pointer" />
          <AvatarUser />
        </div>
      ) : (
        <Link href={ROUTES.signIn}>
          <Button variant={"outline"}>Login</Button>
        </Link>
      )}
    </div>
  );
}
