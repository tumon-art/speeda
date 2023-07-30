import type { Config } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config({
  path: ".env.development.local",
});

if (!process.env.POSTGRES_URL) {
  throw new Error("POSTGRES_URL is missing");
}

export default {
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL,
    ssl: true,
  },
} satisfies Config;
