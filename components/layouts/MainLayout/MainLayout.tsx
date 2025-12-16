"use client";

import BackgroundSwitcher from "@/components/features/BackgroundSwitcher";
import MainSidebar from "./MainSidebar";
import { useBackground } from "@/lib/contexts/BackgroundContext";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  const { background, isSettingOpen } = useBackground();

  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center px-6 py-8"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 backdrop-blur-xl bg-black/30 pointer-events-none will-change-[backdrop-filter]" />

      <div className="relative flex items-center justify-center space-x-6 w-full z-10">
        <MainSidebar />

        <div
          className="relative bg-cover bg-center bg-no-repeat flex w-full max-w-7xl h-[90vh] rounded-3xl shadow-2xl border border-white/20 overflow-hidden backdrop-blur-sm"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="flex-1 flex flex-col p-6 gap-6 overflow-y-auto scroll-smooth text-shadow">
            {children}
          </div>
          {isSettingOpen && (
            <div>
              <BackgroundSwitcher />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
