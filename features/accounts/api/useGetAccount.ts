import { useQuery } from "@tanstack/react-query";

export const useGetAccount = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ["accounts", { id }],
    queryFn: async () => {
      // const response = await fetch(`/api/accounts/${id}`);
      // if (!response.ok) {
      //   throw new Error(response.statusText);
      // }
      // const { data } = await response.json();
      // return data;
    },
  });

  return query;
};
