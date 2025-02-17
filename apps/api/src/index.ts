import app from "@api/app";
import { websocket } from "@api/websocket";
import { env } from "@api/env";
import { logger } from "hono/logger";

console.log("Starting API...");

const PORT = env.PORT;

console.log(`App is running at http://localhost:${PORT}`);

Bun.serve({
  port: PORT,
  fetch: app.fetch,
  websocket,
});
