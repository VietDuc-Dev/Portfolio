import HeaderMain from "@/components/features/HeaderMain";
import MainLayout from "@/components/layouts/MainLayout/MainLayout";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <MainLayout>
        <section>
          <HeaderMain />
          <div className="mt-6">{children}</div>
        </section>
      </MainLayout>
    </>
  );
}
