import { TWINS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

export const useGetTwin = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: [TWINS, { id }],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/api/gen-ai-twins/${id}`);

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const { data } = await response.json();
      console.log(data);
      return {
        id: data.id,
        ...data.attributes,
      };
    },
  });

  return query;
};
