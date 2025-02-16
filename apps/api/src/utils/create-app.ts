import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

export function createApp() {
  const app = createRouter();

  app.use(cors());
  app.use(logger());

  return app;
}

export function createRouter() {
  return new OpenAPIHono();
}
