import { betterAuth } from "better-auth";
import { db } from "@repo/database/index";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI, admin, organization } from "better-auth/plugins";
import { sso } from "better-auth/plugins/sso";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  plugins: [openAPI(), admin(), organization(), sso()],
});
