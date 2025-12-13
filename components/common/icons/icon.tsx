import { ReactNode } from "react";

export function Icon({ children }: { children: ReactNode }) {
  return (
    <div className="glass p-2 rounded-full hover:scale-110 transition cursor-pointer w-fit h-fit">
      {children}
    </div>
  );
}
