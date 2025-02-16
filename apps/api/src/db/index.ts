import "dotenv/config";
import { env } from "@api/env";
import { drizzle } from "drizzle-orm/node-postgres";
const DATABASE_URL = env.DATABASE_URL;

const db = drizzle(DATABASE_URL);

export { db };
