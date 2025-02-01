"use client";

import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

import TwinsList from "@/features/twins/components/TwinsList";
import TwinEdit from "@/features/twins/components/TwinEdit";

export default function TwinsPage() {
  return (
    <div className="pt-10">
      <h1 className="text-6xl font-bold">Twins Page</h1>
      <TwinEdit id="1" />
      <br />
      <br />
      <hr />
      <br />
      <TwinsList />
      <Link className={buttonVariants({ variant: "outline" })} href="/">
        Back to Home
      </Link>
    </div>
  );
}
