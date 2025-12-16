"use client";

import { useBackground } from "@/lib/contexts/BackgroundContext";

interface Props {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: Props) {
  const { background } = useBackground();

  return (
    <main
      style={{ backgroundImage: `url(${background})` }}
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div className="flex justify-center items-center w-full text-shadow">
        {children}
      </div>
    </main>
  );
}
