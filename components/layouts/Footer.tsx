import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="text-center my-3">
      Designed by{" "}
      <Link href={`#`} className="text-blue-600">
        LeVietDuc.Dev
      </Link>
    </div>
  );
}
