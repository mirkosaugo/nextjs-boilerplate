import { TWINS } from "@/constants/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "sonner";

export const useDeleteTwins = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (json) => {},
    onSuccess: () => {
      toast.success("Account deleted successfully");
      queryClient.invalidateQueries({ queryKey: [TWINS] });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  return mutation;
};
