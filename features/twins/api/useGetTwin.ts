import { TWINS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useGetTwin = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: [TWINS, { id }],
    queryFn: async () => {
      // const response = await fetch(`/api/twins/${id}`);
      // if (!response.ok) {
      //   throw new Error(response.statusText);
      // }
      // const { data } = await response.json();
      // return data;
    },
  });

  return query;
};
