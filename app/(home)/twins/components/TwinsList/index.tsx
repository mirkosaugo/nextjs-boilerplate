import React from "react";
import { useGetTwins } from "@features/twins/api/useGetTwins";
import { Button } from "@/components/ui/button";

const TwinsList = () => {
  const { data = [], isLoading, isError } = useGetTwins();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((twin: any) => (
        <div className="flex flex-col gap-2" key={twin.id}>
          <span>{twin.id}</span>
          <h1>{twin.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default TwinsList;
