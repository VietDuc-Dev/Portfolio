import { ReactNode } from "react";

export function Icon({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white/20 p-3 rounded-full text-black hover:scale-110 transition cursor-pointer">
      {children}
    </div>
  );
}
