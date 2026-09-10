import "dotenv/config";
import { env } from "node:process";
import { DATABASE_PORT } from "./env";
import { Pool } from "pg";

const pool = new Pool({
    database: env.DATABASE,
    user: env.DATABASE_USER,
    password: env.DATABASE_PASSWORD,
    port: DATABASE_PORT,
    // connectionString: env.DATABASE_URL
})

export default pool;