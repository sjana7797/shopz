import { GET_CLIENT } from "@repo/api/service";
import app from "./app";
import { registerToConsul } from "@repo/api/index";

const client = GET_CLIENT("GATEWAY_SERVICE");

registerToConsul("GATEWAY_SERVICE").then(() => {
  console.log(`${client.url} Registered with Consul`);
});

Bun.serve({
  fetch: app.fetch,
  port: client.port,
});
