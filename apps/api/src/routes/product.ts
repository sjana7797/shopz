import { createRouter } from "@api/utils/create-app";
import { INTERNAL_SERVER_ERROR, OK } from "@api/utils/http/status-codes";
import { z } from "@hono/zod-openapi";
import { ProductSchema } from "@repo/database/zod-schema";
import { hc } from "hono/client";
import { ProductService } from "@service/product/index";
import { logger } from "@api/utils/pino-logger";

const productClient = hc<ProductService>("http://localhost:5001");

export const productRouter = createRouter().openapi(
  {
    method: "get",
    path: "/product",
    tags: ["Product"],
    summary: "Get all products",
    description: "Get all products",
    request: {
      query: z.object({
        page: z.coerce.number().min(1).default(1),
        limit: z.coerce.number().min(1).max(100).default(10),
        organizationId: z.string().uuid().min(1),
      }),
    },
    responses: {
      [OK]: {
        content: {
          "application/json": {
            schema: z.object({
              products: z.array(ProductSchema),
              page: z.number().int(),
              total: z.number().int(),
              nextCursor: z.number().min(2).nullable(),
            }),
          },
        },
        description: "Successful response",
      },
      [INTERNAL_SERVER_ERROR]: {
        content: {
          "application/json": {
            schema: z.object({
              message: z.string(),
            }),
          },
        },
        description: "Internal server error",
      },
    },
  },
  async (c) => {
    const query = c.req.valid("query");

    try {
      const response = await productClient.products.$get({
        query,
      });

      const data = await response.json();

      return c.json(data, OK);
    } catch (error) {
      logger.error(error);
      return c.json(
        { message: "Internal server error" },
        INTERNAL_SERVER_ERROR,
      );
    }
  },
);
