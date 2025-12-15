"use client";

import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { BackgroundProvider } from "@/lib/contexts/BackgroundContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClerkProvider>
        <BackgroundProvider>
          {children}
          <Toaster />
        </BackgroundProvider>
      </ClerkProvider>
    </>
  );
}
