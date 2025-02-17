import { apps } from "./schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const AppSchema = createSelectSchema(apps);
