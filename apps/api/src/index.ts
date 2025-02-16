import app from "@api/app";
import { env } from "@api/env";

console.log("Starting API...");

const PORT = env.PORT;

console.log(`App is running at http://localhost:${PORT}`);

Bun.serve({
  port: PORT,
  fetch: app.fetch,
});
