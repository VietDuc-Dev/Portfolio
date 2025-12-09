"use client";

import { BACKGROUND } from "@/constants/Background";
import MainSidebar from "./MainSidebar";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center px-6 py-8"
      style={{ backgroundImage: `url(${BACKGROUND.Default})` }}
    >
      <div className="absolute inset-0 backdrop-blur-xl bg-black/30 pointer-events-none will-change-[backdrop-filter]" />

      <div className="relative flex items-center justify-center space-x-6 w-full z-10">
        <MainSidebar />

        <div
          className="relative bg-cover bg-center bg-no-repeat flex w-full max-w-7xl h-[90vh] rounded-3xl shadow-2xl border border-white/20 overflow-hidden backdrop-blur-sm"
          style={{ backgroundImage: `url(${BACKGROUND.Default})` }}
        >
          <div className="flex-1 flex flex-col p-6 gap-6 overflow-y-auto scroll-smooth">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}
