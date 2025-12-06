"use client";

import MainSidebar from "./MainSidebar";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <main className="min-h-screen bg-[url('https://ocafe.net/wp-content/uploads/2024/10/anh-nen-dep-1.png')] bg-cover bg-center flex items-center justify-center px-6 py-8 space-x-6">
      <MainSidebar />
      <div className="relative flex w-full max-w-7xl h-[90vh] rounded-3xl bg-white/20 backdrop-blur-xl shadow-2xl border border-white/30 overflow-hidden">
        <div className="flex-1 flex flex-col p-6 gap-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </main>
  );
}
