import { Hono } from "hono";
import { auth } from "@repo/auth/auth";

const app = new Hono();

app.get("/health", (c) => {
  return c.text("OK");
});

app.on(["POST", "GET"], "/api/auth/*", (c) => {
  return auth.handler(c.req.raw);
});

export default app;
