import { pets } from "../../data/pets";
import type { Pets } from "../types/pets.types";
import type { ErrorType } from "../types/global.types";

export async function getPets(): Promise<
    {
        message?: string,
        data: Pets[],
        meta: {
            status: number,
            endpoint: string,
            count: number,
            generatedAt: string
        }
    } | ErrorType
> {
    try {
        return {
            data: pets,
            meta: {
                status: 200,
                endpoint: "pets",
                count: pets.length,
                generatedAt: new Date().toISOString()
            }
        }
    } catch (err) {
        console.error("Couldn't fetch pets:", err)
        return {
            error: "Internal server error",
            status: 500
        }
    }
}

