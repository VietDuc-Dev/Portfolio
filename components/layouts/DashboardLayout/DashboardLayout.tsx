"use client";

import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-screen xl:flex">
      <div>
        <DashboardSidebar />
      </div>
      <div className={`flex-1 transition-all duration-300 ease-in-out`}>
        <DashboardHeader />
        <div className="p-4 mx-auto max-w-screen-2xl md:p-6">{children}</div>
      </div>
    </div>
  );
}
