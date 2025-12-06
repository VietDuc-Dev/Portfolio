import { BACKGROUND } from "@/constants/Background";

interface Props {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: Props) {
  return (
    <main
      style={{ backgroundImage: `url(${BACKGROUND.Default})` }}
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div className="flex justify-center items-center w-full">{children}</div>
    </main>
  );
}
