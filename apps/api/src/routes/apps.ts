import { createRouter } from "@api/utils/create-app";
import { OK } from "@api/utils/http/status-codes";
import { createRoute, z } from "@hono/zod-openapi";
import { AppSchema } from "@repo/database/zod-schema";
import { db } from "@repo/database/index";
import { apps as appsTable } from "@repo/database/schema";
import type { TApp } from "@repo/database/types";

const appsRoutes = createRouter().openapi(
  createRoute({
    method: "get",
    path: "/apps",
    tags: ["Apps"],
    summary: "Get all apps",
    description: "Get all apps",
    request: {
      query: z.object({
        page: z.coerce.number().min(1).default(1),
        limit: z.coerce.number().min(1).max(100).default(10),
      }),
    },
    responses: {
      [OK]: {
        content: {
          "application/json": {
            schema: z.object({
              apps: z.array(AppSchema),
              page: z.number(),
              total: z.number(),
              nextCursor: z.number().min(2).nullish(),
            }),
          },
        },
        description: "Successful response",
      },
    },
  }),
  async (c) => {
    const { page, limit } = c.req.valid("query");

    const offset = (page - 1) * limit;

    const appsData = await db
      .select()
      .from(appsTable)
      .limit(limit + 1)
      .offset(offset);

    if (appsData.length === 0) {
      return c.json({
        apps: [] as TApp[],
        page,
        total: 0,
        nextCursor: null,
      });
    }

    const nextCursor = appsData.length > limit ? page + 1 : null;

    const apps = appsData.slice(0, limit);

    return c.json({
      apps,
      page,
      total: appsData.length,
      nextCursor,
    });
  },
);

export default appsRoutes;
