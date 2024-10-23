"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

// import { useGetAccounts } from "@/features/accounts/api/useGetAccounts";

export default function Home() {
  const handleShowToast = () => {
    toast.success("Hello World");
  };

  return (
    <div>
      MAIN PAGE
      <br />
      <br />
      <Button onClick={handleShowToast}>Show Toast</Button>
    </div>
  );
}
