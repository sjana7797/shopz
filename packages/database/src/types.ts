import { z } from "zod";
import { AppSchema } from "./zod-schema";

export type TApp = z.infer<typeof AppSchema>;
