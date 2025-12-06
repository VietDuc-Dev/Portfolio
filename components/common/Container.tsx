import { cn } from "@/lib/utils";
import React from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "w-fit p-4 glass rounded-xl shadow-2xl border border-white/20 text-white",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
