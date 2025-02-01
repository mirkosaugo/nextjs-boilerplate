import React from "react";
import { useGetTwins } from "@features/twins/api/useGetTwins";
import { Button } from "@/components/ui/button";
import { useEditTwin } from "../../api/useEditTwin";
import { useGetTwin } from "../../api/useGetTwin";
import { TwinFields } from "../../types/twin";

const TwinEdit = ({ id }: { id: string }) => {
  const { data: twin, isLoading, isError } = useGetTwin(id);
  const { isPending: isSaving, mutate: editTwin } = useEditTwin(id);
  const [title, setTitle] = React.useState("");

  const onSubmit = (values: TwinFields) => {
    console.log(values);
    editTwin(values, {
      onSuccess: () => {
        console.log("success");
      },
    });
  };

  React.useEffect(() => {
    if (twin) {
      setTitle(twin.title);
    }
  }, [twin?.id]);

  return (
    <div className="mt-4 grid grid-cols-3 gap-4">
      <div className="flex flex-col gap-2">
        <span>EDIT ID: {id}</span>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="title"
          className="rounded-md border border-slate-300 p-2 text-slate-600"
        />
        <Button onClick={() => onSubmit({ title })} disabled={isSaving}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default TwinEdit;
