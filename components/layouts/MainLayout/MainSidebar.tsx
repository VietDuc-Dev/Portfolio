import Container from "@/components/common/Container";
import { Icon } from "@/components/common/icons/icon";
import { useUser } from "@clerk/nextjs";
import { Home, Heart, Download, User, Settings, FileText } from "lucide-react";
import { PDFDownloadLink, ResumeDocument } from "@/components/pdf";
import { resume } from "@/constants/resume";
import Link from "next/link";
import { useBackground } from "@/lib/contexts/BackgroundContext";

export default function MainSidebar() {
  const { user } = useUser();
  const { toggleSetting } = useBackground();

  return (
    <div>
      <Container className="rounded-full flex flex-col items-center px-3 gap-6">
        <Link href={"/"}>
          <Icon>
            <Home size={20} />
          </Icon>
        </Link>

        {/* <Icon>
          <Heart size={20} />
        </Icon> */}

        <PDFDownloadLink document={<ResumeDocument resume={resume} />}>
          <Icon>
            <Download size={20} />
          </Icon>
        </PDFDownloadLink>

        <Link href={"/resume"}>
          <Icon>
            <FileText size={20} />
          </Icon>
        </Link>

        {user ? (
          <Link href={"/profile"}>
            <Icon>
              <User size={20} />
            </Icon>
          </Link>
        ) : (
          <Link href={"/signin"}>
            <Icon>
              <User size={20} />
            </Icon>
          </Link>
        )}

        <button onClick={toggleSetting}>
          <Icon>
            <Settings size={20} />
          </Icon>
        </button>
      </Container>
    </div>
  );
}
