import React from "react";
// import {getServerSession} from 'next-auth'
// import { redirect } from "next/navigation";

// import {ROUTES} from '@/constants/routes';
// import {authOption} from '../api/auth/[...nextauth]/route';

export const metadata = {
  title: "Authentication Pages",
  robots: {
    index: {
      index: false, // Prevent search engines from indexing for auth pages
      follow: false, // Prevent links on auth pages from being followed for auth pages
    },
  },
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession(authOptions);
  // if (session) redirect(ROUTES.homepage);
  return <section className="min-h-full">{children}</section>;
}
