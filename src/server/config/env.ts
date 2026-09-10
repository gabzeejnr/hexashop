import "dotenv/config";
import { env } from "node:process";

function requireEnv(env: any) {
    if (!env) throw new Error("Env is required");
    return env;
}

const DATABASE_PORT = requireEnv(env.DATABASE_PORT);

export { DATABASE_PORT }