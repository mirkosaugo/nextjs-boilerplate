import { TWINS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useGetTwins = () => {
  const query = useQuery({
    queryKey: [TWINS],
    queryFn: async () => {
      // const response = await fetch("/api/twins");
      // if (!response.ok) {
      //   throw new Error(response.statusText);
      // }
      // const { data } = await response.json();
      // return data;
    },
  });

  return query;
};
