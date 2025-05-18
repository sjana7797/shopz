import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@repo/db";
import { openAPI, organization, apiKey, admin } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  plugins: [openAPI(), organization(), apiKey(), admin()],
});
