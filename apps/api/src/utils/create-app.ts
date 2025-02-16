import { OpenAPIHono } from "@hono/zod-openapi";

export function createApp() {
  return createRouter();
}

export function createRouter() {
  return new OpenAPIHono();
}
