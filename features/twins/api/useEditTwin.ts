import { TWIN, TWINS } from "@/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";
import { TwinFields } from "../types/twin";

export const useEditTwin = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: TwinFields) => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/api/gen-ai-twins/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    },
    onSuccess: () => {
      toast.success("Account edited successfully");
      queryClient.invalidateQueries({ queryKey: [TWIN, { id }] });
      queryClient.invalidateQueries({ queryKey: [TWINS] });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  return mutation;
};
