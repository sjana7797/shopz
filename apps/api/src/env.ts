import { z } from "zod";

export const ENVSchema = z.object({
  PORT: z.coerce.number().default(3000),
  DATABASE_URL: z.string().min(1),
  AI_API_KEY: z.string().min(1),
});

export const env = ENVSchema.parse(process.env);
