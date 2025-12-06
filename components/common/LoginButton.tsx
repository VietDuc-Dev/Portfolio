import { Bell } from "lucide-react";

function LoginButton() {
  return (
    <div>
      <div className="flex items-center gap-4 ">
        <Bell size={18} className="hover:cursor-pointer" />
        <div className="flex items-center gap-3 glass-strong px-3 py-1 rounded-full hover:cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            className="w-7 h-7 rounded-full"
          />
          <span className="text-sm font-semibold">Sushmita</span>
        </div>
      </div>
    </div>
  );
}

export default LoginButton;
