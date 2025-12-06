import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchBar() {
  return (
    <div className="relative w-[260px]">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search size={16} className="opacity-70" />
      </span>
      <Input className="pl-10 glass" placeholder="Search ..." />
    </div>
  );
}
