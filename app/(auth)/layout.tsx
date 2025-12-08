import React from "react";
import BaseLayout from "@/components/layouts/BaseLayout/BaseLayout";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ROUTES } from "@/constants/routes";

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
  return <BaseLayout>{children}</BaseLayout>;
}
