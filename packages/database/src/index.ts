import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";
const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

const db = drizzle(DATABASE_URL);

export { db };
