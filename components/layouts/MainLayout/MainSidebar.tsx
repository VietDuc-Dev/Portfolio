import Container from "@/components/common/Container";
import { Icon } from "@/components/common/icons/icon";
import { Home, Heart, Download, User, Settings } from "lucide-react";

export default function MainSidebar() {
  return (
    <div>
      <Container className="rounded-full flex flex-col items-center px-3 gap-6">
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
      </Container>
    </div>
  );
}
