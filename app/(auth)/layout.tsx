import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout/BaseLayout";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Authentication Pages",
  robots: {
    index: {
      index: false, // Prevent search engines from indexing for auth pages
      follow: false, // Prevent links on auth pages from being followed for auth pages
    },
  },
};

interface Props {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: Props) {
  const user = await currentUser();

  if (user) redirect(ROUTES.homePage);
  return (
    <BaseLayout>
      <div className="absolute top-10 left-10">
        <Link href={"/"}>
          <Button variant={"link"}>
            <ArrowLeft /> Home
          </Button>
        </Link>
      </div>
      {children}
    </BaseLayout>
  );
}
