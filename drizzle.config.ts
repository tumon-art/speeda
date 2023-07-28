import type { Config } from "drizzle-kit";

export default {
  schema: "./lib/drizzle.ts",
  out: "./lib/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: String(process.env.POSTGRES_URL),
  },
} satisfies Config;
