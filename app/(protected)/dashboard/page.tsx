"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { toast } from "sonner";

export default function Dashboard() {
  return (
    <div>
      Dashboard <Button onClick={() => toast.success("hello")}>Clink me</Button>
    </div>
  );
}
