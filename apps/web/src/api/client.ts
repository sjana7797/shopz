import { hc } from "hono/client";
import { AppType } from "@api/app";

export const client = hc<AppType>("http://localhost:5000");
