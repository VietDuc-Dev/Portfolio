import MainLayout from "@/components/layouts/MainLayout/MainLayout";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <MainLayout>{children}</MainLayout>
    </>
  );
}
