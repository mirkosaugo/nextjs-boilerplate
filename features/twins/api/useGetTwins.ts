import { TWINS } from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";

type ResponseTwins = {
  id: string;
  attributes: {
    title: string;
  };
};

export const useGetTwins = () => {
  const query = useQuery({
    queryKey: [TWINS],
    queryFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API}/api/gen-ai-twins`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const { data } = (await response.json()) as { data: ResponseTwins[] };
      // https://strapi.io/blog/type-safe-fetch-with-next-js-strapi-and-open-api
      return data.map((twin) => ({
        id: twin.id,
        ...twin.attributes,
      }));
    },
  });

  return query;
};
