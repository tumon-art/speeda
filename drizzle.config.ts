import type { Config } from "drizzle-kit";

export default {
  schema: "./drizzle/schema.ts",
  out: "./drizzle/migrations",
  driver: "pg",
  dbCredentials: {
    connectionString: String(process.env.POSTGRES_URL),
  },
  breakpoints: true,
} satisfies Config;
