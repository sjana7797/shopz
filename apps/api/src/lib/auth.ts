import { betterAuth } from "better-auth";
import { db } from "@api/db";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { openAPI, admin, organization } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  plugins: [openAPI(), admin(), organization()],
});
