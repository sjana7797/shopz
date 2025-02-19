import { products } from "./schema/product";
import { apps } from "./schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const AppSchema = createSelectSchema(apps);

export const ProductSchema = createSelectSchema(products);
