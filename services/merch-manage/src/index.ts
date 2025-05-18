import app from "./app";
import { GET_CLIENT, CLIENTS } from "@repo/api/service";
import { registerToConsul } from "@repo/api/index";

const client = GET_CLIENT(CLIENTS.MERCH_MANAGE_SERVICE);

registerToConsul(CLIENTS.MERCH_MANAGE_SERVICE).then(() => {
  console.log(`${client.url} Registered with Consul`);
});

Bun.serve({
  fetch: app.fetch,
  port: client.port,
});
