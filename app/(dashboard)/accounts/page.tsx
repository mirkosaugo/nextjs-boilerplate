"use client";

import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

export default function AccountsPage() {
  return (
    <div className="pt-10">
      ACCOUNT PAGE <br />
      <Link className={buttonVariants({ variant: "outline" })} href="/">
        Back to Dashboard
      </Link>
    </div>
  );
}
