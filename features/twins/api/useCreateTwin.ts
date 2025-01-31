import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { TWINS } from "@/constants/queryKeys";

export const useCreateTwin = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (json) => {},
    onSuccess: () => {
      toast.success("Account created successfully");
      queryClient.invalidateQueries({ queryKey: [TWINS] });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  return mutation;
};
