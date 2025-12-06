import { Icon } from "@/components/common/icons/icon";
import { Home, Heart, Download, User, Settings } from "lucide-react";

export default function MainSidebar() {
  return (
    <div>
      <aside className="w-16 bg-white/20 backdrop-blur-md flex flex-col items-center py-6 gap-6 border-r border-white/20 rounded-full ">
        <Icon>
          <Home size={20} />
        </Icon>
        <Icon>
          <Heart size={20} />
        </Icon>
        <Icon>
          <Download size={20} />
        </Icon>
        <Icon>
          <User size={20} />
        </Icon>
        <Icon>
          <Settings size={20} />
        </Icon>
      </aside>
    </div>
  );
}
