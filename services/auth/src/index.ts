import app from "./app";
import { GET_CLIENT } from "@repo/api/service";

const client = GET_CLIENT("AUTH_SERVICE");

Bun.serve({
  fetch: app.fetch,
  port: client.port,
});
