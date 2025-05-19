import app from "./app";
import { registerToConsul } from "@repo/api/index";
import { GET_CLIENT } from "@repo/api/service";

const client = GET_CLIENT("INSTA_SHOP_SERVICE");

registerToConsul("INSTA_SHOP_SERVICE").then(() => {
  console.log(`${client.url} Registered with Consul`);
});

Bun.serve({
  fetch: app.fetch,
  port: client.port,
});
