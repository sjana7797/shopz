import { createRoute, OpenAPIHono } from "@hono/zod-openapi";
import { z } from "zod";
import { db } from "@repo/database/index";
import { products as productsTable } from "@repo/database/schema/product";
import { ProductSchema } from "@repo/database/zod-schema";
import { eq } from "@repo/database/drizzle";

const app = new OpenAPIHono();

const productRoute = new OpenAPIHono().openapi(
  createRoute({
    method: "get",
    path: "/products",
    description: "Get all products",
    request: {
      query: z.object({
        limit: z.coerce.number().min(1).max(100),
        page: z.coerce.number().min(1),
        organizationId: z.string().uuid().min(1),
      }),
    },
    responses: {
      200: {
        description: "Products",
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
        summary: "Get all products Success",
      },
    },
  }),
  async (c) => {
    const { limit, page, organizationId } = c.req.valid("query");

    const offset = (page - 1) * limit;

    const productsData = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.organizationId, organizationId))
      .limit(limit)
      .offset(offset);

    const products = productsData.slice(0, limit);
    if (productsData.length === 0) {
      return c.json({
        products,
        page,
        total: 0,
        nextCursor: null,
      });
    }

    const nextCursor = productsData.length > limit ? page + 1 : null;

    return c.json(
      {
        products,
        page,
        total: products.length,
        nextCursor,
      },
      200,
    );
  },
);

export type ProductService = typeof productRoute;

app.route("/", productRoute);

export default {
  port: 5001,
  fetch: app.fetch,
};
