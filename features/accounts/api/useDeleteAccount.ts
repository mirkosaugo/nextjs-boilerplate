import { useMutation, useQueryClient } from '@tanstack/react-query';
import { InferRequestType, InferResponseType } from "hono";
import { toast } from 'sonner';

import { client } from "@/lib/hono";


type ResponseType = InferResponseType<typeof client.api.accounts[":id"]["$delete"]>;
type RequestType = InferRequestType<typeof client.api.accounts[":id"]["$delete"]>;




export const useDeleteAccount = (id?: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error>({
    mutationFn: async () => {
      const response = await client.api.accounts[":id"].$delete({ param: { id } });
      return await response.json();
    },
    onSuccess: () => {
      toast.success('Account deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['account', { id }] });
      queryClient.invalidateQueries({ queryKey: ['accounts'] });

    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  return mutation;

};
