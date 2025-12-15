import { resume } from "@/constants/resume";
import { PDFViewer, ResumeDocument } from "@/components/pdf";

export default async function ResumePage() {
  return (
    <PDFViewer className="min-h-screen w-full">
      <ResumeDocument resume={resume} />
    </PDFViewer>
  );
}
