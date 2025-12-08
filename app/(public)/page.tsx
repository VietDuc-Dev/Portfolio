"use client";

import Container from "@/components/common/Container";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();

  return (
    <Container>
      <div className="">home</div>
      <h1 className="text-3xl font-bold mb-8 text-center">
        Welcome, {user?.emailAddresses[0].emailAddress}!
      </h1>
    </Container>
  );
}
