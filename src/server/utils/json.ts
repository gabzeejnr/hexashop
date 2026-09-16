import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function readJSON<T>(file: string): Promise<T> {
    const filePath = path.join(__dirname, "../../data", (file + ".json"));

    const d = await fs.readFile(filePath, "utf-8");

    return JSON.parse(d);
}

export async function writeJSON(file: string, data: string[]) {
    const filePath = path.join(__dirname, "../../data", file);

    const dtr = await fs.writeFile(filePath,
        JSON.stringify(data, null, 2),
        "utf-8"
    );

    return dtr;
}