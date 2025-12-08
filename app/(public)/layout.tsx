import HeaderMain from "@/components/features/HeaderMain";
import MainLayout from "@/components/layouts/MainLayout/MainLayout";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <MainLayout>
        <div className="space-y-6">
          <HeaderMain />
          <div>{children}</div>
        </div>
      </MainLayout>
    </>
  );
}
