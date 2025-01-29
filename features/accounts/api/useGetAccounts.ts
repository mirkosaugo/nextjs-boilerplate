import { useQuery } from "@tanstack/react-query";

export const useGetAccounts = () => {
  const query = useQuery({
    queryKey: ["accounts"],
    queryFn: async () => {
      // const response = await fetch("/api/accounts");
      // if (!response.ok) {
      //   throw new Error(response.statusText);
      // }
      // const { data } = await response.json();
      // return data;
    },
  });

  return query;
};
