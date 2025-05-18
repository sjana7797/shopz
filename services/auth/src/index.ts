import app from "./app";
import { GET_CLIENT } from "@repo/api/service";
import { registerToConsul } from "@repo/api/index";

const client = GET_CLIENT("AUTH_SERVICE");

registerToConsul("AUTH_SERVICE").then(() => {
  console.log(`${client.url} Registered with Consul`);
});

Bun.serve({
  fetch: app.fetch,
  port: client.port,
});
