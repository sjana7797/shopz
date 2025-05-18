import { Hono } from "hono";
import { getServiceURL } from "@repo/api/service";

const app = new Hono();

app.get("/health", (c) => {
  return c.text("OK");
});

app.on("*", "/api/auth/*", async (c) => {
  const res = await fetch(`${getServiceURL("AUTH_SERVICE")}${c.req.url}`, {
    method: c.req.method,
    headers: c.req.raw.headers,
    body: c.req.raw.body,
  });
  return c.newResponse(await res.text(), res);
});

app.on("*", "/merch-manage/*", async (c) => {
  const res = await fetch(
    `${getServiceURL("MERCH_MANAGE_SERVICE")}${c.req.url}`,
    {
      method: c.req.method,
      headers: c.req.raw.headers,
      body: c.req.raw.body,
    },
  );
  return c.newResponse(await res.text(), res);
});

export default app;
