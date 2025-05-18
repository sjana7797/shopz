import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@repo/db";
import {
  openAPI,
  organization,
  apiKey,
  admin,
  phoneNumber,
} from "better-auth/plugins";
import { sso } from "better-auth/plugins/sso";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
  plugins: [
    openAPI(),
    organization(),
    apiKey(),
    admin(),
    phoneNumber({
      sendOTP: ({ phoneNumber, code }, request) => {
        // Implement sending OTP code via SMS
      },
    }),
    sso(),
  ],
});
