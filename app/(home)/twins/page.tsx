"use client";

import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

import TwinsList from "@/features/twins/components/TwinsList";

export default function TwinsPage() {
  return (
    <div className="pt-10">
      Twins PAGE <br />
      <TwinsList />
      <Link className={buttonVariants({ variant: "outline" })} href="/">
        Back to Home
      </Link>
    </div>
  );
}
