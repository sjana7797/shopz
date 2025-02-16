import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllApps } from "./fetcher";
import { GetAllApps } from "./type";

export const useGetAllApps = ({ limit, page }: GetAllApps) => {
  return useInfiniteQuery({
    queryKey: ["apps", limit.toString(), page.toString()],
    queryFn: async () => {
      return await getAllApps({ limit, page });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
};
