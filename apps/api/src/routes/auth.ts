import { auth } from "@api/lib/auth";
import { createRouter } from "@api/utils/create-app";

export const authRouter = createRouter();

authRouter.on(["POST", "GET"], "/auth/*", (c) => {
  return auth.handler(c.req.raw);
});
