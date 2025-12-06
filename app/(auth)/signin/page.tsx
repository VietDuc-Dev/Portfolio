import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Sign In",
};

export default async function SignIn() {
  return (
    <div>
      <Link href={""}>SignIn</Link>
    </div>
  );
}
