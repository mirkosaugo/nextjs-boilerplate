import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

export const useEditAccount = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (json) => {},
    onSuccess: () => {
      toast.success("Account edited successfully");
      // queryClient.invalidateQueries({ queryKey: ["account", { id }] });
      // queryClient.invalidateQueries({ queryKey: ["accounts"] });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  return mutation;
};
