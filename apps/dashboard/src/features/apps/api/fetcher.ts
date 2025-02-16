import { client } from "@/dashboard/api/client";
import { GetAllApps } from "./type";

export async function getAllApps({ limit = 10, page = 1 }: GetAllApps) {
  const res = await client.apps.$get({
    query: {
      page,
      limit,
    },
  });
  return await res.json();
}
