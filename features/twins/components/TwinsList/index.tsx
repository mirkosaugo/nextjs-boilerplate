import React from "react";
import { useGetTwins } from "@features/twins/api/useGetTwins";
import { Button } from "@/components/ui/button";

const TwinsList = () => {
  const { data, isLoading, isError } = useGetTwins();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((twin: any) => (
        <div className="flex flex-col gap-2" key={twin.id}>
          <h1>{twin.title}</h1>
          <Button className="self-" variant="outline">
            Edit
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TwinsList;
