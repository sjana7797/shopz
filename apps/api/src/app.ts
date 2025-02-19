import { createApp } from "@api/utils/create-app";
import { apiReference } from "@scalar/hono-api-reference";
import healthRouter from "@api/routes/health";
import appsRoutes from "@api/routes/apps";
import { aiRoutes } from "@api/routes/ai";
import { productRouter } from "./routes/product";

const app = createApp();

// open api
// The OpenAPI documentation will be available at /doc
app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

app.get(
  "/reference",
  apiReference({
    spec: {
      url: "/doc",
    },
  }),
);

// Routes
const routes = [healthRouter, appsRoutes, aiRoutes, productRouter] as const;

routes.forEach((route) => app.route("/", route));

export type AppType = (typeof routes)[number];

export default app;
