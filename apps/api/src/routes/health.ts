import { createRouter } from "@api/utils/create-app";
import { createRoute, z } from "@hono/zod-openapi";

const healthRouter = createRouter().openapi(
  createRoute({
    path: "/health",
    method: "get",
    summary: "Health check",
    description: "Check if the API is running",
    tags: ["Health"],
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: z.object({
              status: z.literal("ok"),
            }),
          },
        },
      },
    },
  }),
  (c) => {
    return c.json({ status: "ok" } as const);
  },
);

export default healthRouter;
