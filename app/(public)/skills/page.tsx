import Container from "@/components/common/Container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SkillsPage() {
  return (
    <Card className="glass text-white p-8">
      <CardHeader>
        <span className="card-label">LABEL</span>
        <CardTitle className="mt-4 text-3xl">Features Card Title</CardTitle>
        <div className="card-accent mt-4"></div>
      </CardHeader>

      <CardContent>
        <p className="text-white/80 leading-relaxed">
          This is a sample textblock providing a brief description for your
          feature card. Use this space to engage users and highlight the values
          or benefits.
        </p>
      </CardContent>
    </Card>
  );
}
