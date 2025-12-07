"use client";

import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClerkProvider>
        {children}
        <Toaster />
      </ClerkProvider>
    </>
  );
}
