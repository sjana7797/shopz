import { createRouter } from "@api/utils/create-app";
import { logger } from "@api/utils/pino-logger";
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
    logger.info("health check");
    logger.info(c.get("requestId"), "Request received for id");
    logger.info("status", "ok");
    return c.json({ status: "ok" } as const);
  },
);

export default healthRouter;
