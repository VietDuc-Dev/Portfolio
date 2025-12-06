"use client";

import { BACKGROUND } from "@/constants/Background";
import MainSidebar from "./MainSidebar";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <main
      style={{ backgroundImage: `url(${BACKGROUND.Default})` }}
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-6 py-8 space-x-6"
    >
      <MainSidebar />
      <div className="relative flex w-full max-w-7xl h-[90vh] rounded-3xl glass shadow-2xl border border-white/30 overflow-hidden">
        <div className="flex-1 flex flex-col p-6 gap-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </main>
  );
}
