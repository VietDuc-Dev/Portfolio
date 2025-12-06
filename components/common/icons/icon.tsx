import { ReactNode } from "react";

export function Icon({ children }: { children: ReactNode }) {
  return (
    <div className="backdrop-blur-sm p-3 rounded-full text-black hover:scale-110 transition cursor-pointer">
      {children}
    </div>
  );
}
