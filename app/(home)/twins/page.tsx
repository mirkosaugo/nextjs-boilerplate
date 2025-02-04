"use client";

import { buttonVariants } from "@/components/ui/button";

import Link from "next/link";

import TwinsList from "@/app/(home)/twins/components/TwinsList";
import TwinEdit from "@/features/twins/components/TwinEdit";
import { useGetTwins } from "@/features/twins/api/useGetTwins";
import { use, useMemo, useState } from "react";

export default function TwinsPage() {
  const { data = [], isLoading, isError } = useGetTwins();
  const [currentTwin, setCurrentTwin] = useState<null | string>(null);

  const twinsIds = useMemo(() => data.map((twin) => twin.id), [data.length]);

  return (
    <div className="pt-10">
      <h1 className="text-6xl font-bold">Twins Page</h1>
      <br />
      <div>
        <select onChange={(e) => setCurrentTwin(e.target.value)}>
          <option>Select a twin to edit</option>
          {twinsIds.map((id) => (
            <option key={id} value={id}>
              {id}
            </option>
          ))}
        </select>
      </div>
      {currentTwin && <TwinEdit id={currentTwin} />}
      <br />
      <br />
      <hr />
      <br />
      <TwinsList />
      <br />
      <hr />
      <br />
      <Link className={buttonVariants({ variant: "outline" })} href="/">
        Back to Home
      </Link>
    </div>
  );
}
