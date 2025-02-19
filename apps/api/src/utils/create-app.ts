import { OpenAPIHono } from "@hono/zod-openapi";
import { cors } from "hono/cors";
import { logger as loggerMiddleware } from "hono/logger";
import { requestId } from "hono/request-id";
import { customLoggerWrapper } from "@api/utils/pino-logger";
import { poweredBy } from "hono/powered-by";

export function createApp() {
  const app = createRouter();

  // middlewares
  app.use(poweredBy());
  app.use(cors());
  app.use(loggerMiddleware(customLoggerWrapper));
  app.use("*", requestId());

  return app;
}

export function createRouter() {
  return new OpenAPIHono();
}
