"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

// import { useGetAccounts } from "@/features/accounts/api/useGetAccounts";

export default function Home() {
  const handleShowToast = () => {
    toast.success("Hello World");
  };

  return (
    <div className="pt-10">
      MAIN PAGE
      <br />
      <br />
      <Link className={buttonVariants({ variant: "outline" })} href="/twins">
        Go to twin page
      </Link>
      <br />
      <br />
      <Button onClick={handleShowToast}>Show Toast</Button>
    </div>
  );
}
