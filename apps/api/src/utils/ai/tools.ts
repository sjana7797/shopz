import { db } from "@repo/database/index";
import { apps } from "@repo/database/schema";

const getApps = async () => {
  const appsData = await db.select().from(apps);

  return appsData;
};

export const tools = {
  getApps,
};
