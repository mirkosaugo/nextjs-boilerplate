import { TWINS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useGetTwins = () => {
  const query = useQuery({
    queryKey: [TWINS],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/api/gen-ai-twins`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const { data } = await response.json();
      return data.map((twin: any) => ({
        id: twin.id,
        ...twin.attributes,
      }));
    },
  });

  return query;
};
